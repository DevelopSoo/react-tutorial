import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAVYlyvd4fM0IVZ7uk5v4QVPvYlaHR81U",
  authDomain: "react-crud-8fde0.firebaseapp.com",
  projectId: "react-crud-8fde0",
  storageBucket: "react-crud-8fde0.appspot.com",
  messagingSenderId: "311467272721",
  appId: "1:311467272721:web:3bd67b3dca3eb269a29fb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
