// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Import Firestore



const firebaseConfig = {
  apiKey: "AIzaSyCwKsZHIYpZ7Z-i7akMIATKAF5ISmc5dVk",
  authDomain: "ecommerce-2d416.firebaseapp.com",
  projectId: "ecommerce-2d416",
  storageBucket: "ecommerce-2d416.firebasestorage.app",
  messagingSenderId: "206257658106",
  appId: "1:206257658106:web:bbc140bf448ab826f71143",
  measurementId: "G-B8XHERL3JH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
