import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-primary font-semibold text-xl">Meristem Capital</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary">
                About
              </Link>
              <Link href="/articles" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary">
                Insights
              </Link>
              <Link href="/compliance" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary">
                Compliance
              </Link>
              <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-neutral-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Meristem Capital</h3>
              <p className="text-sm text-gray-300">
                123 Financial District<br />
                Suite 400<br />
                Indianapolis, IN 46204
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-sm text-gray-300 hover:text-white">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-sm text-gray-300 hover:text-white">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} Meristem Capital. All rights reserved.<br />
                <Link href="/compliance" className="hover:text-white">
                  Important Disclosures
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 