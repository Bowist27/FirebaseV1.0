
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6LhUPn0xbPuYxrIZC5WBIzZtEmlDDLF8",
    authDomain: "fir-login-aedcd.firebaseapp.com",
    projectId: "fir-login-aedcd",
    storageBucket: "fir-login-aedcd.firebasestorage.app",
    messagingSenderId: "18482650594",
    appId: "1:18482650594:web:30dc248f1a97271cb32dbb",
    measurementId: "G-17L06G3H08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider

export {auth, googleProvider}
