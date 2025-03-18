export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white mt-120">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-120">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-mineshaft-900 font-semibold mb-4">Company</h2>
              <nav className="flex flex-col space-y-3">
                <a href="/about" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  About
                </a>
                <a href="/team" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Our Team
                </a>
                <a href="/philosophy" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Investment Philosophy
                </a>
              </nav>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-mineshaft-900 font-semibold mb-4">Insights</h2>
              <nav className="flex flex-col space-y-3">
                <a href="/articles" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Articles
                </a>
                <a href="/market-analysis" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Market Analysis
                </a>
                <a href="/research" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Research
                </a>
              </nav>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-mineshaft-900 font-semibold mb-4">Legal</h2>
              <nav className="flex flex-col space-y-3">
                <a href="/privacy" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Privacy Policy
                </a>
                <a href="/disclaimer" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Disclaimer
                </a>
                <a href="/terms" className="text-mineshaft-600 hover:text-mineshaft-900 transition-colors">
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-mineshaft-900 font-semibold mb-4">Investment Updates</h2>
              <p className="text-mineshaft-600 mb-6">
                Subscribe to receive our latest market insights and investment perspectives.
              </p>
              <div className="flex gap-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-mineshaft-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-mineshaft-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-mineshaft-600 text-sm">
              © {currentYear} Meristem Capital LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-mineshaft-600 hover:text-mineshaft-900">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-mineshaft-600 hover:text-mineshaft-900">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 