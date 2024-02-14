import { useState, createContext, ReactNode } from "react";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  where,
  getDocs,
  query,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  AuthError,
  signOut,
  signInWithPopup,
} from "firebase/auth";

//Utilities
import { User, UserSignInProps, UserSignUpProps } from "../types/user.types";
import { db, auth, googleProvider } from "../config/firebase.config";

interface AuthContextData {
  user: User | null;
  signed: boolean;
  signIn: (credencials: UserSignInProps) => Promise<void>;
  sigInWithGoogle: () => Promise<void>;
  signUp: (credencials: UserSignUpProps) => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const signed = !!user;

  const signIn = async ({ email, password }: UserSignInProps) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      let uid = userCredentials.user?.uid;

      const docRef = doc(db, "users", uid);
      const querySnapshot = await getDoc(docRef);

      setUser({
        id: uid,
        firstName: querySnapshot.data()?.firstName,
        lastName: querySnapshot.data()?.lastName,
        email: userCredentials.user?.email!,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Email ou senha inválidos.");
    }
  };

  const sigInWithGoogle = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user?.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data();
      const firstName = userCredentials.user?.displayName?.split(" ")[0];
      const lastName = userCredentials.user?.displayName?.split(" ")[1];

      if (!user) {
        await addDoc(collection(db, "users"), {
          id: userCredentials.user?.uid,
          firstName,
          lastName,
          email: userCredentials.user?.email,
        });

        setUser({
          id: userCredentials.user?.uid,
          firstName: firstName || "",
          lastName: lastName || "",
          email: userCredentials.user.email!,
        });

        navigate("/");
      } else {
        setUser({
          id: userCredentials.user?.uid,
          firstName: firstName || "",
          lastName: lastName || "",
          email: userCredentials.user.email!,
        });

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async ({
    firstName,
    lastName,
    email,
    password,
  }: UserSignUpProps) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        firstName,
        lastName,
        email: userCredentials.user.email,
      });

      navigate("/login");
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return alert("Email já cadastrado. Tente outro email.");
      }

      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signed, signIn, sigInWithGoogle, signUp, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
