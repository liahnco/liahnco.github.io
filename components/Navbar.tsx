'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-serif font-bold tracking-tight"
        >
          Li Ahn
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex space-x-12 font-medium text-sm tracking-wide"
        >
          <a href="#skincare" className="hover:text-gray-600 transition-colors duration-300">
            Skincare
          </a>
          <a href="#fragrance" className="hover:text-gray-600 transition-colors duration-300">
            Fragrance
          </a>
          <a href="#vision" className="hover:text-gray-600 transition-colors duration-300">
            Vision
          </a>
          <a href="#about" className="hover:text-gray-600 transition-colors duration-300">
            About
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 soft-shadow"
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  )
}
