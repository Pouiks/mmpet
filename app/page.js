"use client"
import React from 'react';
import Header from './Components/Header/header';
import Map from './Components/Map/map';
import Reassurance from './Components/Reassurance/reassurance';
import Footer from './Components/Footer/footer';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { app } from './firebase';

export default function Home() {
  useEffect(() => {
    // Configuration Firebase avec les informations de votre projet
    const firebaseConfig = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId
    };

    // Initialisez Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []); // Cette dépendance vide assure que l'initialisation se produit une seule fois

  return (
    <main>
      <Header />
      <Map />
      <Reassurance />
      <Footer />
    </main>
  );
}
