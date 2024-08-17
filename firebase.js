// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; // Corrected import statement

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClpSpZobVlFZ1o-57pUw1eDMl7C8rSneA",
  authDomain: "flashcardsaas-ad2c1.firebaseapp.com",
  projectId: "flashcardsaas-ad2c1",
  storageBucket: "flashcardsaas-ad2c1.appspot.com",
  messagingSenderId: "835357082894",
  appId: "1:835357082894:web:8290f2560fe8d1fbd8835f",
  measurementId: "G-XTTDPJH4XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Corrected function call

export { db }; // Corrected export statement