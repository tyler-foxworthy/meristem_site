export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
            <a href="/articles" className="text-sm text-gray-600 hover:text-gray-900">Articles</a>
            <a href="/compliance" className="text-sm text-gray-600 hover:text-gray-900">Compliance</a>
            <a href="/legal" className="text-sm text-gray-600 hover:text-gray-900">Legal</a>
          </nav>
          <p className="text-sm text-gray-600">
            © {currentYear} Meristem Capital LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 