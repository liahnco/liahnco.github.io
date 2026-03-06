'use client'

import { motion } from 'framer-motion'

export default function YouthEmploymentSection() {
  const stats = [
    { number: '500+', label: 'Youth Entrepreneurs' },
    { number: '25', label: 'Nigerian States' },
    { number: '₦12M', label: 'Monthly Earnings' },
    { number: '98%', label: 'Authentic Products' }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-sand to-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance">
              Empowering <br />
              <span className="italic">Youth Entrepreneurs</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Li Ahn operates a micro-distribution network that trains young Nigerians
              to sell authentic beauty products in their communities. Each entrepreneur
              receives product training, business mentorship, and verified inventory.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By combining technology with grassroots distribution, we're creating
              sustainable income opportunities while solving the counterfeit crisis
              at the community level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-white/50 hover-lift"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold mb-3 gradient-text">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl mb-6">📚</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Training Program</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive beauty product knowledge, sales skills, and business fundamentals.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-6">📦</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Verified Inventory</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to authenticated products with blockchain-verified supply chains.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-6">💰</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Income Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible earnings model with performance incentives and community support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
