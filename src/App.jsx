import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experiences from './components/Experiences'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Predirection from './components/Predirection'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
    return (
      <>
        <main>
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
