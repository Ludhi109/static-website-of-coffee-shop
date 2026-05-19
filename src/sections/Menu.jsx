import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Cake, Compass, Sparkles } from 'lucide-react'

const categories = [
  { id: 'hot', name: 'Hot Coffee', icon: <Coffee className="w-4 h-4" /> },
  { id: 'cold', name: 'Cold Coffee', icon: <Compass className="w-4 h-4" /> },
  { id: 'pastry', name: 'Pastries', icon: <Cake className="w-4 h-4" /> },
  { id: 'signature', name: 'Signatures', icon: <Sparkles className="w-4 h-4" /> },
]

const menuData = {
  hot: [
    {
      name: 'Elysian Espresso',
      price: '$6.50',
      description: 'Double shot of our hand-selected single-origin Ethiopian beans with floral & bright notes.',
      tags: ['Single Origin', 'Bright'],
    },
    {
      name: 'L\'Élixir Latte',
      price: '$8.00',
      description: 'Velvety microfoam milk gently poured over our signature dark espresso roast.',
      tags: ['Silky', 'Classic'],
    },
    {
      name: 'Cortado Noir',
      price: '$7.00',
      description: 'Perfect 1:1 balance of rich espresso and velvety warm milk served in a crystal glass.',
      tags: ['Bold', 'Balanced'],
    },
    {
      name: 'Velvet Flat White',
      price: '$7.50',
      description: 'Double shot ristretto topped with steam-stretched whole milk, forming a thick micro-foam layer.',
      tags: ['Creamy', 'Rich'],
    },
  ],
  cold: [
    {
      name: 'Smoked Maple Cold Brew',
      price: '$9.50',
      description: '24-hour slow drip cold brew infused with organic Vermont maple syrup and subtle oak smoke.',
      tags: ['Infused', 'Woody'],
    },
    {
      name: 'Amber Shakerato',
      price: '$8.50',
      description: 'Double espresso, raw turbinado sugar, and organic milk, double-shaken with ice until frothy.',
      tags: ['Frothy', 'Sweet'],
    },
    {
      name: 'Nitro Gold Drip',
      price: '$9.00',
      description: 'Creamy nitrogen-infused cold brew poured straight from the tap, displaying a beautiful cascade.',
      tags: ['Creamy', 'Cold Drip'],
    },
  ],
  pastry: [
    {
      name: 'Gold Leaf Croissant',
      price: '$12.00',
      description: 'Ultra-flaky pastry layered with premium French butter, decorated with delicate flakes of 24k gold leaf.',
      tags: ['Organic', 'Luxurious'],
    },
    {
      name: 'Dark Cocoa Tart',
      price: '$14.00',
      description: 'Rich dark chocolate ganache inside an organic cocoa pastry shell, dusted with sea salt crystals.',
      tags: ['Sweet', 'Intense'],
    },
    {
      name: 'Pistachio Paris-Brest',
      price: '$15.00',
      description: 'Choux pastry ring filled with light, whipped pistachio praline cream, topped with roasted pistachios.',
      tags: ['Nutty', 'Light'],
    },
  ],
  signature: [
    {
      name: 'Rose & Gold Affogato',
      price: '$16.00',
      description: 'Premium organic vanilla bean gelato drenched in double espresso, rose water mist, and gold flakes.',
      tags: ['Signature', 'Decadent'],
    },
    {
      name: 'Truffle Macchiato',
      price: '$18.00',
      description: 'Elysian espresso layered with white truffle-infused honey syrup and organic steamed milk.',
      tags: ['Earthy', 'Exclusive'],
    },
    {
      name: 'Charcoal Lavender Latte',
      price: '$14.00',
      description: 'Activated charcoal latte sweetened with organic lavender essence, creating a beautiful gothic contrast.',
      tags: ['Floral', 'Aesthetic'],
    },
  ],
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('hot')

  return (
    <section id="menu" className="relative py-28 px-6 md:px-12 bg-coffee-dark overflow-hidden scroll-mt-24">
      {/* Subtle radial background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
            A Sensory Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-cream-light">
            Our Luxurious Menu
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-cream-dark/60 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Every cup and pastry is meticulously crafted from top-tier single-origin lots and organic artisanal ingredients.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gold border-gold text-coffee-black shadow-[0_0_15px_rgba(197,168,128,0.3)]'
                  : 'bg-transparent border-gold/20 text-cream/70 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {menuData[activeTab].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-cream-light hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-gold shrink-0 pl-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-cream-dark/70 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full border border-gold/10 bg-gold/5 text-[10px] uppercase tracking-widest font-medium text-gold-bright"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
