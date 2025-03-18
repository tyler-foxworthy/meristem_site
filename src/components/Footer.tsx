export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-neutral-600">
            © {currentYear} Meristem Capital LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="/disclaimer"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Disclaimer
            </a>
            <a
              href="/privacy"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 