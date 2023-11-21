// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6gYx-VZDVEMS_9YQ_tOT8laKVNuptd0I",
  authDomain: "recifilo-db8ce.firebaseapp.com",
  projectId: "recifilo-db8ce",
  storageBucket: "recifilo-db8ce.appspot.com",
  messagingSenderId: "903952342430",
  appId: "1:903952342430:web:1be77dd4fa3b9025b68a8f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
