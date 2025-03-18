'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-primary'}`}>
                  Meristem Capital
                </span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-12">
              <Link 
                href="/about" 
                className={`text-sm font-medium hover:text-primary transition-colors duration-200 
                  ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}
              >
                About
              </Link>
              <Link 
                href="/articles" 
                className={`text-sm font-medium hover:text-primary transition-colors duration-200
                  ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}
              >
                Insights
              </Link>
              <Link 
                href="/compliance" 
                className={`text-sm font-medium hover:text-primary transition-colors duration-200
                  ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}
              >
                Compliance
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-sm font-medium rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-neutral-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold text-white mb-6">Meristem Capital</h3>
              <p className="text-gray-400 leading-relaxed">
                123 Financial District<br />
                Suite 400<br />
                Indianapolis, IN 46204
              </p>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <div className="space-y-4">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Meristem Capital.<br />All rights reserved.
                </p>
                <Link 
                  href="/compliance" 
                  className="inline-block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Important Disclosures →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 