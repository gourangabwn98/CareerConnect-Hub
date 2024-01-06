// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1cPftCGWAPHNHynoeyrG4noUpKRa0Nv0",
  authDomain: "login-auth-4b732.firebaseapp.com",
  projectId: "login-auth-4b732",
  storageBucket: "login-auth-4b732.appspot.com",
  messagingSenderId: "305779962154",
  appId: "1:305779962154:web:c5d0ac9643e97aa4042e53",
  measurementId: "G-EVNPWVTZYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {app,auth};


