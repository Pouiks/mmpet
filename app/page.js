"use client"

import Header from './Components/Header/header';
import Map from './Components/Map/map';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Reassurance from './Components/Reassurance/reassurance';
import Footer from './Components/Footer/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main >
      <Header />
      <Map />
      <Reassurance />
      <Footer /> 
    </main>
  )
}
