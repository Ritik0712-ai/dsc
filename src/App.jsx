import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }

    // Handle scroll animations globally
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => animateOnScroll.observe(el))

    return () => {
      animateOnScroll.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Prizes />
        <Sponsors />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}
