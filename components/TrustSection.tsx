'use client'

import { motion } from 'framer-motion'

export default function TrustSection() {
  const features = [
    {
      title: 'Verified Sourcing',
      description: 'Every product is sourced directly from authorized distributors and verified for authenticity.'
    },
    {
      title: 'Lab Testing',
      description: 'Independent laboratory testing ensures product safety and ingredient accuracy.'
    },
    {
      title: 'Blockchain Tracking',
      description: 'Transparent supply chain tracking from manufacturer to your doorstep.'
    },
    {
      title: 'Quality Guarantee',
      description: 'Full refund policy and customer protection against counterfeit products.'
    }
  ]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance">
            The Future of Beauty <br />
            <span className="italic">Distribution in Africa</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-balance">
            The African beauty market loses billions annually to counterfeit products.
            Li Ahn is building the infrastructure for authentic beauty distribution,
            protecting consumers and empowering youth entrepreneurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl hover-lift"
            >
              <div className="w-12 h-12 bg-charcoal rounded-full mb-6 flex items-center justify-center text-white font-bold text-xl">
                {idx + 1}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
