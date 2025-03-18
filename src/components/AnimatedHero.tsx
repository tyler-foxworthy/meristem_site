'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AnimatedHero() {
  return (
    <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:max-w-xl"
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
            With Purpose
          </motion.span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-gray-200 sm:text-xl md:text-2xl font-light max-w-xl"
        >
          Combining timeless value investment principles with advanced technology to create and preserve lasting wealth. We focus on quality businesses at fair prices, guided by data-driven insights.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link 
            href="/contact" 
            className="flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl md:text-lg md:px-10"
          >
            Get Started
          </Link>
          <Link 
            href="/about" 
            className="flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white border-2 border-white hover:bg-white/10 transition-colors duration-200 md:text-lg md:px-10"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
} 