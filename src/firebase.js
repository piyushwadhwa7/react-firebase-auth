// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc",
  authDomain: "react-authentication-928d6.firebaseapp.com",
  projectId: "react-authentication-928d6",
  storageBucket: "react-authentication-928d6.appspot.com",
  messagingSenderId: "448825619649",
  appId: "1:448825619649:web:4ae619687c29e6c3a29040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app;