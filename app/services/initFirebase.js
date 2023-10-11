// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTZsr3KOLxQ3pgdb6Dyjs0q-9JqQ5iHc",
  authDomain: "mmpet-b237c.firebaseapp.com",
  projectId: "mmpet-b237c",
  storageBucket: "mmpet-b237c.appspot.com",
  messagingSenderId: "445003698490",
  appId: "1:445003698490:web:951fbc21ef5018e2fa8003",
  measurementId: "G-HNYR65BB3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);