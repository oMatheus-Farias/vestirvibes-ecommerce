import { useState, createContext, ReactNode, useEffect } from "react";
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
import { toast } from "react-toastify";

//Utilities
import { User, UserSignInProps, UserSignUpProps } from "../types/user.types";
import { db, auth, googleProvider } from "../config/firebase.config";

interface AuthContextData {
  user: User | null;
  signed: boolean;
  loadingAuth: boolean;
  signIn: (credencials: UserSignInProps) => Promise<void>;
  sigInWithGoogle: () => Promise<void>;
  signUp: (credencials: UserSignUpProps) => Promise<any>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const signed = !!user;
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    setLoadingAuth(true);
    const hasUser = localStorage.getItem("@user");

    if (hasUser) {
      setUser(JSON.parse(hasUser));
      setLoadingAuth(false);
    }

    setLoadingAuth(false);
  }, []);

  const signIn = async ({ email, password }: UserSignInProps) => {
    setLoadingAuth(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      let uid = userCredentials.user?.uid;

      const docRef = doc(db, "users", uid);
      const querySnapshot = await getDoc(docRef);

      const data = {
        id: uid,
        firstName: querySnapshot.data()?.firstName,
        lastName: querySnapshot.data()?.lastName,
        email: userCredentials.user?.email!,
      };

      setUser(data);
      setUserLocalStorage(data);

      navigate("/");
      toast.success("Login efetuado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválidos.");
    } finally {
      setLoadingAuth(false);
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

      const data = {
        id: userCredentials.user?.uid,
        firstName: firstName || "",
        lastName: lastName || "",
        email: userCredentials.user.email!,
      };

      if (!user) {
        await addDoc(collection(db, "users"), {
          id: userCredentials.user?.uid,
          firstName,
          lastName,
          email: userCredentials.user?.email,
        });

        setUser(data);
        setUserLocalStorage(data);

        navigate("/");
        toast.success("Login efetuado com sucesso.");
      } else {
        setUser(data);
        setUserLocalStorage(data);

        navigate("/");
        toast.success("Login efetuado com sucesso.");
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
    setLoadingAuth(true);
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
      toast.success("Cadastrado com sucesso.");
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return toast.warning("Email já cadastrado. Tente outro email.");
      }

      toast.error("Erro ao cadastrar, tente novamente.");
      console.log(error);
    } finally {
      setLoadingAuth(false);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("@user");
      navigate("/");
      toast.success("Deslogado com sucesso.");
    } catch (error) {
      console.log(error);
    }
  };

  const setUserLocalStorage = (data: User) => {
    localStorage.setItem("@user", JSON.stringify(data));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed,
        loadingAuth,
        signIn,
        sigInWithGoogle,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
