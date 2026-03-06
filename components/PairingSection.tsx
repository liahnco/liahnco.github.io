'use client'

import { motion } from 'framer-motion'

export default function PairingSection() {
  const pairings = [
    {
      routine: 'Morning Radiance',
      skincare: 'Vitamin C Serum',
      fragrance: 'Citrus & Bergamot',
      mood: 'Energy & Confidence'
    },
    {
      routine: 'Evening Calm',
      skincare: 'Retinol Night Cream',
      fragrance: 'Lavender & Chamomile',
      mood: 'Relaxation & Recovery'
    },
    {
      routine: 'Hydration Boost',
      skincare: 'Hyaluronic Essence',
      fragrance: 'Ocean & Mint',
      mood: 'Freshness & Clarity'
    }
  ]

  return (
    <section id="skincare" className="py-32 bg-gradient-to-br from-cream to-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance">
            Aromatherapeutic <br />
            <span className="italic">Beauty Pairing</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-balance">
            Every skincare routine is paired with a fragrance designed to enhance mood,
            boost confidence, and create an emotional connection to your beauty ritual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pairings.map((pairing, idx) => (
            <motion.div
              key={pairing.routine}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl hover-lift border border-white/50"
            >
              <div className="mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-sand to-white rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-6xl opacity-20">✨</div>
                </div>
              </div>

              <h3 className="font-serif text-3xl font-bold mb-6">{pairing.routine}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Skincare</p>
                  <p className="font-semibold text-lg">{pairing.skincare}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Fragrance</p>
                  <p className="font-semibold text-lg">{pairing.fragrance}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Mood</p>
                <p className="text-charcoal font-medium">{pairing.mood}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
