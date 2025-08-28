'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
// Theme removed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  

  const toggleMenu = () => setIsOpen(!isOpen)

  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            TechManiac
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {['Home', 'Blogs', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['Home', 'Blogs', 'About', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}