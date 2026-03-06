'use client'

import { motion } from 'framer-motion'

export default function PhilosophySection() {
  const philosophies = [
    {
      statement: 'Beauty should be authentic.',
      description: 'No counterfeits. No compromises. Every product verified, tested, and trusted.'
    },
    {
      statement: 'Beauty should empower.',
      description: 'Creating economic opportunity for African youth while delivering premium products.'
    },
    {
      statement: 'Beauty should be intelligent.',
      description: 'Technology-driven personalization that understands African skin and lifestyles.'
    }
  ]

  return (
    <section className="py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Our <span className="italic">Philosophy</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {philosophies.map((philosophy, idx) => (
            <motion.div
              key={philosophy.statement}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border-b border-white/10 py-16 group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold group-hover:translate-x-4 transition-transform duration-500">
                  {philosophy.statement}
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {philosophy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl text-gray-400 font-light italic">
            Building the future of African beauty, one authentic product at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
