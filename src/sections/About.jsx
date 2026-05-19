import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Compass, Heart, Award as Star } from 'lucide-react'

// Custom count up component
function Counter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value)
    if (start === end) return

    const totalMiliseconds = duration
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15)
    
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-coffee-black overflow-hidden scroll-mt-24">
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gold/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Premium Framed Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Back Glowing Frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/15 rounded-3xl pointer-events-none"></div>

          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-gold/10">
            <img
              src="/cafe_interior.jpg"
              alt="Premium Café Interior"
              className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-black/80 via-transparent to-transparent"></div>

            {/* Float badge inside image */}
            <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center space-x-4">
              <Star className="w-8 h-8 text-gold shrink-0" />
              <div>
                <h4 className="font-serif text-sm font-bold text-cream-light uppercase tracking-wider">
                  Awarded Best Craft Café
                </h4>
                <p className="text-xs text-cream-dark/65 font-light">
                  Recognized globally for micro-lot roasting mastery.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Narrative Content */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Our Sanctum
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-cream-light">
              Architects of Sensory Bliss
            </h2>
            <div className="w-16 h-0.5 bg-gold my-4"></div>
          </div>

          <p className="text-cream-dark/80 text-sm md:text-base font-light leading-relaxed">
            At L'ÉLIXIR, we believe coffee is not a mere beverage; it is a sacred sensory ritual. Founded by a circle of award-winning master roasters, our mission is to elevate the coffee experience into an absolute art form.
          </p>

          <p className="text-cream-dark/75 text-sm font-light leading-relaxed">
            We establish direct-trade relationships with remote estates in Sidama, Gesha, and Huila, hand-picking only the most outstanding cherries. Each micro-lot is meticulously profiled and roasted to release its highly unique chemical soul.
          </p>

          {/* Three Virtues */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {[
              {
                icon: <Award className="w-6 h-6 text-gold" />,
                title: 'Direct Sourcing',
                desc: '100% traceable, micro-lot direct-trade farms.',
              },
              {
                icon: <Compass className="w-6 h-6 text-gold" />,
                title: 'Meticulous Profiling',
                desc: 'Custom-designed roast recipes for every lot.',
              },
              {
                icon: <Heart className="w-6 h-6 text-gold" />,
                title: 'Sensory Devotion',
                desc: 'Perfect flavor extractions served with love.',
              },
            ].map((virtue, idx) => (
              <div key={idx} className="space-y-2 border-l border-gold/20 pl-4 py-1">
                {virtue.icon}
                <h4 className="text-xs uppercase tracking-wider font-semibold text-cream-light">
                  {virtue.title}
                </h4>
                <p className="text-xs text-cream-dark/60 font-light leading-relaxed">
                  {virtue.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gold/10">
            {[
              { val: '12', suff: '+', label: 'Years Devoted' },
              { val: '45', suff: '+', label: 'Unique Lots' },
              { val: '6', suff: '', label: 'Roasters' },
              { val: '100', suff: '%', label: 'Organic' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <span className="font-serif text-3xl md:text-4xl font-bold text-gold block">
                  <Counter value={stat.val} suffix={stat.val === '100' ? '%' : stat.suff} />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-cream-dark/50 mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
