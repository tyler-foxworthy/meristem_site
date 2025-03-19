'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-lg text-brand-800 hover:text-brand-600">
          Meristem Capital
        </Link>
        <div className="flex gap-8">
          <Link 
            href="/about" 
            className={pathname === '/about' ? 'text-brand-800' : 'text-gray-500 hover:text-brand-700'}
          >
            About
          </Link>
          <Link 
            href="/essays" 
            className={pathname === '/essays' ? 'text-brand-800' : 'text-gray-500 hover:text-brand-700'}
          >
            Essays
          </Link>
        </div>
      </div>
    </nav>
  )
} 