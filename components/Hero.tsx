'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-sand" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sand rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Glass overlay */}
      <div className="absolute inset-0 glass z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight text-balance"
        >
          Beauty, <br />
          <span className="italic">Authenticated.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light text-balance"
        >
          Li Ahn is building Africa's most trusted beauty distribution ecosystem combining
          skincare science, fragrance psychology and youth-powered retail networks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-charcoal text-white rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 soft-shadow"
          >
            Explore Skincare
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 glass border-2 border-charcoal text-charcoal rounded-full text-base font-medium hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Discover Fragrance
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-charcoal rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-charcoal rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
