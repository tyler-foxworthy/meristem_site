'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AnimatedHero() {
  return (
    <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:max-w-2xl"
      >
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="block"
          >
            Cultivating Wealth
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="block text-green-200 mt-2"
          >
            Through Time
          </motion.span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-gray-200 sm:text-xl md:text-2xl font-light max-w-xl"
        >
          At Meristem Capital, we take a methodical approach to growing and preserving your wealth. Like the meristem tissue in plants, we focus on sustainable, long-term growth.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-10 sm:flex sm:justify-start gap-4"
        >
          <div>
            <Link 
              href="/contact" 
              className="w-full flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl md:text-lg md:px-10"
            >
              Get Started
            </Link>
          </div>
          <div className="mt-3 sm:mt-0">
            <Link 
              href="/about" 
              className="w-full flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white border-2 border-white hover:bg-white/10 transition-colors duration-200 md:text-lg md:px-10"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 