import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "The Rose & Gold Affogato is a masterpiece. The botanical complexity combined with the double ristretto extraction is absolute perfection. Pure sensory art.",
    author: "Marcella Vance",
    role: "Michelin Guide Critic",
    rating: 5,
  },
  {
    quote: "L'ÉLIXIR is more than a café; it's a silent architectural refuge. The glassmorphism design, the rich scent of roasting beans, and their flat white are unparalleled.",
    author: "Julian Sterling",
    role: "Architect & Designer",
    rating: 5,
  },
  {
    quote: "Their Sidama micro-lot hand pour-over is a beautiful revelation. I have rarely experienced such clean, vibrant jasmine and bergamot floral notes in North America.",
    author: "Clara Montgomery",
    role: "Coffee Sommelier",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="relative py-28 px-6 md:px-12 bg-coffee-black overflow-hidden scroll-mt-24">
      {/* Background soft glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
            Echoes of Devotion
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-cream-light">
            Connoisseur Reviews
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Carousel Slider */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass-card w-full p-8 md:p-12 rounded-3xl text-center space-y-6 relative border border-gold/15 shadow-2xl"
            >
              {/* Quote Icon watermark */}
              <Quote className="w-20 h-20 text-gold/5 absolute top-4 left-6 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex justify-center space-x-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* The Quote */}
              <p className="font-serif text-lg md:text-2xl text-cream-light italic leading-relaxed font-light">
                "{testimonials[current].quote}"
              </p>

              {/* Author & Role */}
              <div className="space-y-1 pt-4 border-t border-gold/10 w-44 mx-auto">
                <h4 className="font-serif font-bold text-gold-bright text-base">
                  {testimonials[current].author}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-cream-dark/50 font-medium">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Indicator dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === idx ? 'w-6 bg-gold' : 'bg-gold/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
