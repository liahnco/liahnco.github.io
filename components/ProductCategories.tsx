'use client'

import { motion } from 'framer-motion'

export default function ProductCategories() {
  const categories = [
    {
      name: 'Skincare',
      description: 'Science-backed formulations for every skin type and concern',
      icon: '🧴',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      name: 'Perfumes',
      description: 'Mood-enhancing fragrances paired with aromatherapy science',
      icon: '🌸',
      gradient: 'from-pink-50 to-pink-100'
    },
    {
      name: 'Beauty Accessories',
      description: 'Premium tools and essentials for your beauty ritual',
      icon: '✨',
      gradient: 'from-amber-50 to-amber-100'
    }
  ]

  return (
    <section id="fragrance" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">
            Curated Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our authenticated beauty products, each carefully selected
            for quality, efficacy, and emotional impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden soft-shadow transition-all duration-500 group-hover:shadow-2xl">
                <div className={`h-80 bg-gradient-to-br ${category.gradient} flex items-center justify-center text-9xl transition-transform duration-500 group-hover:scale-110`}>
                  {category.icon}
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-3xl font-bold mb-4">{category.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{category.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-charcoal font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
                  >
                    Explore Collection
                    <span>→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
