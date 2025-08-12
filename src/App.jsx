import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './pages/Intro'
import Profile from './pages/profile'
import Site from './pages/Site'
import Project from './pages/Project'
import Contact from './pages/Contact'
import './assets/css/style.scss'
import link from './utils/link'
import lenis from './utils/smooth'
import Aboutme from './pages/Aboutme'


function App() {
  useEffect(()=>{
    link();
    lenis();
  },[]);

  return (
    <>
      <Header />
      <Intro />
      <Site />
      <Aboutme />
      {/* <Profile /> */}

      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
