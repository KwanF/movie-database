// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB99kkUokkxqyeGumDEdp33rWKyZhHHtbI",
  authDomain: "movie-database-a5a84.firebaseapp.com",
  projectId: "movie-database-a5a84",
  storageBucket: "movie-database-a5a84.appspot.com",
  messagingSenderId: "656909963849",
  appId: "1:656909963849:web:422f9c24b7d45f8fb26598",
  measurementId: "G-ZM4H6RMTBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
