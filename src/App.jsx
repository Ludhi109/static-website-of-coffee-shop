import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import About from './sections/About'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.replace('#', '')
        const element = document.getElementById(targetId)
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - navbarHeight - 16

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })

          window.history.pushState(null, '', href)
        }
      }
    }

    const handleInitialScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const targetId = hash.replace('#', '')
        const element = document.getElementById(targetId)
        if (element) {
          setTimeout(() => {
            const navbarHeight = 80
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - navbarHeight - 16
            window.scrollTo({
              top: offsetPosition,
              behavior: 'auto'
            })
          }, 150)
        }
      }
    }

    window.addEventListener('click', handleAnchorClick)
    
    if (document.readyState === 'complete') {
      handleInitialScroll()
    } else {
      window.addEventListener('load', handleInitialScroll)
    }

    return () => {
      window.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('load', handleInitialScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-coffee-black text-cream selection:bg-gold/30 selection:text-gold-bright">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* Story Section */}
        <About />

        {/* Menu Offerings */}
        <Menu />

        {/* Photo Gallery */}
        <Gallery />

        {/* Customer Reviews */}
        <Testimonials />

        {/* Reservations / Contacts */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
