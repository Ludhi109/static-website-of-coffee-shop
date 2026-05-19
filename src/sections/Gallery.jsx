import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: '/brew_process.jpg',
    title: 'Pour-Over Chemistry',
    category: 'Extraction',
    span: 'md:col-span-2 md:row-span-2 h-[450px]',
  },
  {
    src: '/hero_coffee.png',
    title: 'Gold Rosetta Latte Art',
    category: 'Espresso',
    span: 'h-[250px]',
  },
  {
    src: '/dessert.jpg',
    title: 'Decadent Tart & Croissant',
    category: 'Gourmet Pastry',
    span: 'md:row-span-2 h-[450px]',
  },
  {
    src: '/cafe_interior.jpg',
    title: 'Warm Velvet Lounge',
    category: 'Atmosphere',
    span: 'h-[250px]',
  },
]

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null)

  const handlePrev = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="relative py-28 px-6 md:px-12 bg-coffee-dark overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-gold/3 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
            Artisanal Chronicles
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-cream-light">
            The Visual Gallery
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-cream-dark/60 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            A visual symphony of rich aromas, luxurious textures, and the serene spatial designs of our café.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveIdx(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-gold/10 shadow-lg ${image.span}`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover Dark Overlay & Gold Border */}
              <div className="absolute inset-0 bg-coffee-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {/* Gold Highlight Ring on Hover */}
                <div className="absolute inset-4 border border-gold/25 rounded-xl pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-300"></div>

                <div className="relative z-10 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-bright">
                    {image.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-cream-light">
                    {image.title}
                  </h4>
                </div>

                {/* Corner Maximize Icon */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-coffee-black/60 border border-gold/20 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
            className="fixed inset-0 z-50 bg-coffee-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:bg-gold/10 transition-all duration-300 z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:bg-gold/10 transition-all duration-300 z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:bg-gold/10 transition-all duration-300 z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Centered Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] rounded-3xl overflow-hidden border border-gold/20 shadow-[0_0_50px_rgba(197,168,128,0.15)] flex flex-col bg-coffee-dark"
            >
              <img
                src={galleryImages[activeIdx].src}
                alt={galleryImages[activeIdx].title}
                className="w-full max-h-[70vh] object-contain"
              />

              {/* Bottom Info bar */}
              <div className="p-6 border-t border-gold/10 flex justify-between items-center">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                    {galleryImages[activeIdx].category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream-light mt-1">
                    {galleryImages[activeIdx].title}
                  </h3>
                </div>
                <span className="text-xs text-cream-dark/50">
                  {activeIdx + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
