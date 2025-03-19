'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link 
              href="/about" 
              className={`text-sm text-gray-600 hover:text-gray-900 ${pathname === '/about' ? 'text-gray-900' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/essays" 
              className={`text-sm text-gray-600 hover:text-gray-900 ${pathname === '/essays' ? 'text-gray-900' : ''}`}
            >
              Essays
            </Link>
            <Link 
              href="/compliance" 
              className={`text-sm text-gray-600 hover:text-gray-900 ${pathname === '/compliance' ? 'text-gray-900' : ''}`}
            >
              Compliance
            </Link>
          </nav>
          <p className="text-sm text-gray-600">
            © {currentYear} Meristem Capital LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 