import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBZsopv3b-HknDBn7IazVfcD68ghRje0M",
  authDomain: "react-prac-crud.firebaseapp.com",
  projectId: "react-prac-crud",
  storageBucket: "react-prac-crud.appspot.com",
  messagingSenderId: "102114438403",
  appId: "1:102114438403:web:0145fa2153a54ce5f08d36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
