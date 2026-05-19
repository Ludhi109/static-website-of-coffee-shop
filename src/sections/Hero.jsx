import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Interactive spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-black pt-20 px-6 md:px-12"
      style={{
        '--x': `${mousePos.x}px`,
        '--y': `${mousePos.y}px`,
      }}
    >
      {/* Spotlight Ambient Overlay */}
      <div className="absolute inset-0 spotlight"></div>

      {/* Floating Steam & Golden Sparks Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Steam */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`steam-${i}`}
            className="steam-particle"
            style={{
              left: `${35 + Math.random() * 45}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
        {/* Sparks */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`spark-${i}`}
            className="sparkle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              bottom: `${10 + Math.random() * 20}%`,
              animationDelay: `${i * 0.5}s`,
              '--spark-x': `${(Math.random() - 0.5) * 60}px`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/20 bg-coffee-medium/40 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-gold-bright">
              L'ÉLIXIR COFFEE ATELIER
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-cream-light"
            >
              Sensory Art In <br />
              <span className="text-gold-gradient italic font-light">Every Single Pour.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-cream-dark/70 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Step into an exceptional sanctuary where hand-sourced micro-lot single-origin beans meet the meticulous devotion of master baristas.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold text-coffee-black font-semibold text-sm tracking-widest hover:bg-gold-bright hover:shadow-[0_0_25px_rgba(197,168,128,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 uppercase"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/30 hover:border-gold text-cream font-semibold text-sm tracking-widest hover:bg-gold/5 transition-all duration-300 flex items-center justify-center space-x-2 uppercase"
            >
              <span>Reserve Table</span>
            </a>
          </motion.div>
        </div>

        {/* Visual Cup Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative flex justify-center items-center"
        >
          {/* Radial Gold Background Glow */}
          <div className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-gold/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

          {/* Glowing Ring */}
          <div className="absolute w-[280px] md:w-[400px] h-[280px] md:h-[400px] border border-gold/10 rounded-full animate-[spin_40s_linear_infinite] z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold/40 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold/40 rounded-full"></div>
          </div>

          {/* Coffee Cup Image */}
          <img
            src="/hero_coffee.png"
            alt="Exquisite Latte Art"
            className="w-[280px] md:w-[460px] h-auto object-contain relative z-10 floating-coffee filter drop-shadow-[0_20px_50px_rgba(197,168,128,0.15)]"
          />
        </motion.div>
      </div>

      {/* Decorative side badge */}
      <div className="absolute bottom-10 left-12 hidden xl:flex items-center space-x-4 text-xs tracking-[0.3em] uppercase text-gold/50 relative z-10">
        <span>EST. 2026</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
        <span>NEW YORK</span>
      </div>
    </section>
  )
}
