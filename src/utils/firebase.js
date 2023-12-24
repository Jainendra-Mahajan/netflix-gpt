// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWYCy_EREeoZF2Is3zzMhkHr5HPaVL-K4",
  authDomain: "netflix-gpt-e3c25.firebaseapp.com",
  projectId: "netflix-gpt-e3c25",
  storageBucket: "netflix-gpt-e3c25.appspot.com",
  messagingSenderId: "968443296043",
  appId: "1:968443296043:web:0369b0e593abe09589ad6e",
  measurementId: "G-6YFGTYBC91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();