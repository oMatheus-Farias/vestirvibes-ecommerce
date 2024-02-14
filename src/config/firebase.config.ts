import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMBh7QCGjQ6JKgAzQR6lR8GPDBl0GIgt8",
  authDomain: "vestirvibes-ecommerce-6b53b.firebaseapp.com",
  projectId: "vestirvibes-ecommerce-6b53b",
  storageBucket: "vestirvibes-ecommerce-6b53b.appspot.com",
  messagingSenderId: "562312803319",
  appId: "1:562312803319:web:c9c46c98b505300f55b4f2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
