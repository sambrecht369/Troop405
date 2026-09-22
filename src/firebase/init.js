// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL_8XZk6yZXOQfJRG77AXx2SkgnPMEzCA",
  authDomain: "troop405-d756e.firebaseapp.com",
  projectId: "troop405-d756e",
  storageBucket: "troop405-d756e.firebasestorage.app",
  messagingSenderId: "960987495232",
  appId: "1:960987495232:web:4a094d5fbaf4ae65a218a5",
  measurementId: "G-WQJDPYQY2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();