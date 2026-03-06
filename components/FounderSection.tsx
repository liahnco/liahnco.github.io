'use client'

import { motion } from 'framer-motion'

export default function FounderSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-sand to-cream rounded-3xl overflow-hidden soft-shadow">
              <div className="w-full h-full flex items-center justify-center text-9xl opacity-20">
                👤
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl max-w-xs">
              <p className="font-serif text-xl font-bold mb-1">Founded 2023</p>
              <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-charcoal/5 rounded-full text-sm font-medium mb-6">
              Founder Story
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-balance">
              From Personal Struggle to <span className="italic">Industry Solution</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Li Ahn was born from a personal crisis. As a young Nigerian entrepreneur
                struggling with acne, I invested in what I thought were premium skincare
                products, only to discover they were sophisticated counterfeits.
              </p>

              <p>
                The experience didn't just damage my skin—it revealed a massive systemic
                problem affecting millions of Africans. The beauty industry was flooded
                with fake products, and young people had no reliable way to access
                authentic skincare.
              </p>

              <p>
                I realized this wasn't just a product problem. It was a distribution
                problem, a trust problem, and an opportunity problem. Li Ahn was created
                to solve all three.
              </p>

              <p className="font-semibold text-charcoal">
                Today, we're building the infrastructure for authentic beauty in Africa,
                one verified product and one empowered entrepreneur at a time.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 pt-10 border-t border-gray-200"
            >
              <p className="font-serif text-2xl font-bold mb-2">Founder</p>
              <p className="text-gray-600">Li Ahn Beauty Distribution</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
