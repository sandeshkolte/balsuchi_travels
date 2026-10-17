// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "social-app-a6b82.firebaseapp.com",
  projectId: "social-app-a6b82",
  storageBucket: "social-app-a6b82.appspot.com",
  messagingSenderId: "427886693193",
  appId: "1:427886693193:web:cfcf02990963905f696898",
  measurementId: "G-HHD8J790G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { app, db }; // Export Firestore