import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCLTZsr3KOLxQ3pgdb6Dyjs0q-9JqQ5iHc",
  authDomain: "localhost",
  projectId: "mmpet-b237c",
  storageBucket: "mmpet-b237c.appspot.com",
  messagingSenderId: "445003698490",
  appId: "1:445003698490:web:951fbc21ef5018e2fa8003",
  measurementId: "G-HNYR65BB3V"

};

const app = initializeApp(firebaseConfig);

export { app }; 