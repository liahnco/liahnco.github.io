'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="py-32 bg-gradient-to-br from-cream via-sand to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-16 lg:p-20 rounded-3xl text-center"
        >
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-charcoal/5 rounded-full text-sm font-medium mb-6">
              Stay Connected
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Join the Future <br />
              <span className="italic">of Beauty</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get early access to new products, beauty insights, and exclusive updates
              from the Li Ahn community.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-base"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 soft-shadow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-gray-200"
          >
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>10,000+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Weekly beauty insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Exclusive offers</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
