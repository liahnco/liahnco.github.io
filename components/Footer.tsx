'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const footerSections = [
    {
      title: 'About',
      links: ['Our Story', 'Mission', 'Team', 'Careers']
    },
    {
      title: 'Products',
      links: ['Skincare', 'Perfumes', 'Accessories', 'Gift Sets']
    },
    {
      title: 'Vision',
      links: ['AI Beauty', 'Youth Empowerment', 'Authenticity', 'Innovation']
    },
    {
      title: 'Contact',
      links: ['Email', 'Instagram', 'Twitter', 'LinkedIn']
    }
  ]

  return (
    <footer className="bg-charcoal text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-4">Li Ahn</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Authenticating beauty across Africa.
            </p>
          </div>

          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 Li Ahn. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
