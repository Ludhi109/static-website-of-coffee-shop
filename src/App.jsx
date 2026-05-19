import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import About from './sections/About'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
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
