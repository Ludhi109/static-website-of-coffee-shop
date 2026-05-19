import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Calendar, Users, Send, Check } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [resCode, setResCode] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Propose a random booking code
    const code = 'ELX-' + Math.floor(1000 + Math.random() * 9000)
    setResCode(code)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      date: '',
      guests: '2',
      message: '',
    })
  }

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-coffee-dark overflow-hidden scroll-mt-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
            Secure Your Sanctum
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-cream-light">
            Reservations & Inquiries
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Mock Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-cream-light">
                Atelier Location
              </h3>
              <p className="text-sm text-cream-dark/70 font-light leading-relaxed">
                We invite you to experience L'ÉLIXIR in person. Walks-ins are welcome, but table reservations are recommended for peak weekend sensory hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0 bg-gold/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-cream-light">Address</h4>
                    <p className="text-xs text-cream-dark/70 font-light mt-1">128 Elysian Avenue, Luxury District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0 bg-gold/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-cream-light">Call Us</h4>
                    <p className="text-xs text-cream-dark/70 font-light mt-1">+1 (555) 890-4422</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0 bg-gold/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-cream-light">Email</h4>
                    <p className="text-xs text-cream-dark/70 font-light mt-1">atelier@lelixir-coffee.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Simulated Dark Map Card */}
            <div className="glass-card p-6 rounded-2xl border border-gold/10 overflow-hidden relative h-[220px] bg-coffee-medium/40 flex flex-col justify-between">
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #c5a880 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}></div>
              
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gold">Interactive Map</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              </div>

              {/* Pin representation */}
              <div className="relative z-10 self-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40 shadow-[0_0_20px_rgba(197,168,128,0.3)] animate-[bounce_2s_infinite]">
                  <MapPin className="w-6 h-6 text-gold fill-gold/10" />
                </div>
                <span className="text-xs font-serif font-bold text-cream-light mt-2 bg-coffee-black/90 px-3 py-1 rounded-full border border-gold/10">L'ÉLIXIR</span>
              </div>

              <div className="relative z-10 flex justify-between items-center text-[10px] text-cream-dark/50">
                <span>40.7128° N, 74.0060° W</span>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-gold hover:underline">Get Directions</a>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-gold/15 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-cream-light mb-6">
                Reserve A Table
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium text-cream-dark/70">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sterling Archer"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium text-cream-dark/70">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. archer@figgis.com"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium text-cream-dark/70 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm text-cream"
                    />
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium text-cream-dark/70 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      Guests Count
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm text-cream"
                    >
                      <option value="1">1 Connoisseur</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6+ Guests (Private Area)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-cream-dark/70">Special Requests / Preferences</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Preference for quiet bar seating, dietary restrictions..."
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold text-coffee-black text-xs font-bold tracking-widest uppercase hover:bg-gold-bright hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Reservation</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-coffee-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-md w-full p-8 rounded-3xl border border-gold/25 shadow-2xl text-center space-y-6 bg-coffee-dark"
            >
              {/* Checkmark bubble */}
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center mx-auto text-gold animate-[pulse_2s_infinite]">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-cream-light">
                  Sanctum Reserved!
                </h3>
                <p className="text-sm text-cream-dark/70 font-light leading-relaxed">
                  Thank you, <span className="text-gold font-medium">{formData.name}</span>. Your reservation has been meticulously registered in our books.
                </p>
              </div>

              {/* Reservation Code block */}
              <div className="bg-coffee-medium/60 border border-gold/15 p-4 rounded-2xl space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-cream-dark/50 block">Reservation Code</span>
                <span className="font-serif text-xl font-bold text-gold tracking-widest uppercase">{resCode}</span>
              </div>

              {/* Reservation Details brief */}
              <div className="text-xs text-cream-dark/60 font-light space-y-1.5 border-t border-gold/10 pt-4 text-left px-2">
                <div className="flex justify-between">
                  <span>Guest size:</span>
                  <span className="text-cream-light font-medium">{formData.guests} Connoisseur(s)</span>
                </div>
                <div className="flex justify-between">
                  <span>Scheduled date:</span>
                  <span className="text-cream-light font-medium">{new Date(formData.date).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-xl bg-gold text-coffee-black text-xs font-bold tracking-widest uppercase hover:bg-gold-bright transition-colors duration-300 cursor-pointer"
              >
                Return to Atelier
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
