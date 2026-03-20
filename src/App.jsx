/**
 * Components
 * 
 */

import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experiences from './components/Experiences'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Predirection from './components/Predirection'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


/**
 * Modules
 */

import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

/**
 * Register
 */


gsap.registerPlugin(useGSAP, ScrollTrigger);


function App() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: '-200 bottom',
            end: 'bottom 80%',
            scrub: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        })
    })
  });

    return (
      <>
       <ReactLenis root />
        <main className='relative w-screen min-h-screen overflow-x-auto'>
          <Navbar /> 
          <Hero />
          <About />
          <Experiences />
          <Work />
          <Testimonials />
          <Predirection />
          <Contact />
          <Footer />
        </main>
      </>
    )
}

export default App
