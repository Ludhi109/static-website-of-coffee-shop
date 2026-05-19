import { Coffee, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-coffee-black border-t border-gold/10 pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Coffee className="w-6 h-6 text-gold" />
            <span className="font-serif text-xl font-bold tracking-widest text-gold-bright">
              L'ÉLIXIR
            </span>
          </div>
          <p className="text-sm text-cream-dark/70 leading-relaxed font-light">
            Crafting liquid luxury for the discerning coffee connoisseur. Experience pure sensory art in every single pour.
          </p>
          <div className="flex space-x-4 pt-2">
            {[
              {
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                ),
                href: '#',
              },
              {
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.682L17 8h-3V6.208C13 5.417 13.25 5 14.582 5H17V1h-3.83C9.725 1 8 2.825 8 6v2z"/>
                  </svg>
                ),
                href: '#',
              },
              {
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
                href: '#',
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-cream-dark/80 hover:text-coffee-black hover:bg-gold hover:shadow-[0_0_12px_rgba(197,168,128,0.4)] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-serif text-gold-bright font-semibold tracking-wider text-sm mb-4 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-cream-dark/70 font-light">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Our Menu', href: '#menu' },
              { name: 'Our Story', href: '#about' },
              { name: 'The Gallery', href: '#gallery' },
              { name: 'Reviews', href: '#testimonials' },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-gold hover:pl-1 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Hours of Operation */}
        <div>
          <h3 className="font-serif text-gold-bright font-semibold tracking-wider text-sm mb-4 uppercase">
            Opening Hours
          </h3>
          <ul className="space-y-2.5 text-sm text-cream-dark/70 font-light">
            <li className="flex justify-between border-b border-gold/5 pb-1.5">
              <span>Mon - Fri:</span>
              <span className="text-gold">7:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-gold/5 pb-1.5">
              <span>Saturday:</span>
              <span className="text-gold">8:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-gold/5 pb-1.5">
              <span>Sunday:</span>
              <span className="text-gold">8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4 text-sm text-cream-dark/70 font-light">
          <h3 className="font-serif text-gold-bright font-semibold tracking-wider text-sm uppercase">
            Contact
          </h3>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <span>128 Elysian Avenue, Luxury District, NY 10001</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-gold shrink-0" />
            <span>+1 (555) 890-4422</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-gold shrink-0" />
            <span>atelier@lelixir-coffee.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gold/5 pt-8 text-center text-xs text-cream-dark/40 font-light">
        <p>© {new Date().getFullYear()} L'ÉLIXIR Coffee Atelier. All Rights Reserved. Crafted with absolute devotion.</p>
      </div>
    </footer>
  )
}
