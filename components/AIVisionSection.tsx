'use client'

import { motion } from 'framer-motion'

export default function AIVisionSection() {
  const features = [
    'Skin analysis through AI-powered imaging',
    'Personalized product recommendations',
    'Mood-based fragrance pairing',
    'Lifestyle and climate adaptation',
    'Real-time beauty coaching',
    'Community-driven insights'
  ]

  return (
    <section id="vision" className="py-32 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Coming 2025
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance">
              AI-Powered <br />
              <span className="italic">Beauty Platform</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Li Ahn is building an intelligent beauty recommendation engine that combines
              computer vision, dermatological science, and fragrance psychology to create
              personalized beauty experiences for African skin and lifestyles.
            </p>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-dark rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

              <div className="relative z-10 space-y-8">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <p className="text-sm text-gray-400">AI Skin Analysis</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📊</div>
                      <p className="text-xs text-gray-400">Analytics</p>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="text-3xl mb-2">💡</div>
                      <p className="text-xs text-gray-400">Insights</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
