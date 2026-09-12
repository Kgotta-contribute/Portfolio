import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import LehRoofChimes from './components/LehRoofChimes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Contact />
      <LehRoofChimes />
      <Footer />
    </>
  )
}

export default App
