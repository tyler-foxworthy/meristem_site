import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 top-0 h-full w-48 p-8 border-r border-gray-200">
      <div className="mb-12">
        <Link href="/" className="text-lg text-gray-900 hover:text-gray-600">
          Meristem Capital
        </Link>
      </div>
      <div className="space-y-4">
        <Link 
          href="/about" 
          className={`block ${pathname === '/about' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
        >
          About
        </Link>
        <Link 
          href="/articles" 
          className={`block ${pathname === '/articles' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
        >
          Articles
        </Link>
      </div>
    </nav>
  )
} 