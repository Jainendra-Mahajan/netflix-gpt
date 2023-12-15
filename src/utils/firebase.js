// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzVVW-J3Nfctn09CncwtlF23itzcDuUUI",
  authDomain: "netflix-gpt-a31ec.firebaseapp.com",
  projectId: "netflix-gpt-a31ec",
  storageBucket: "netflix-gpt-a31ec.appspot.com",
  messagingSenderId: "491186509463",
  appId: "1:491186509463:web:2b4280b6f651ddead1fbd2",
  measurementId: "G-RPTY6JQBM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();