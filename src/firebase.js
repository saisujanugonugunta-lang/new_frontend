// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTteXrTpTq1OE8U9aRjiyGVzWtXNxYNLo",
  authDomain: "scamshield-98d02.firebaseapp.com",
  projectId: "scamshield-98d02",
  storageBucket: "scamshield-98d02.firebasestorage.app",
  messagingSenderId: "875969982386",
  appId: "1:875969982386:web:905d4ae68d840f2cf87eab",
  measurementId: "G-023187E617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);