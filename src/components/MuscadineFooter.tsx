import { Link } from 'react-router-dom';

export default function MuscadineFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light text-white mb-4 font-serif">Muscadine</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Muscadine is dedicated to helping individuals take control of their financial future through Bitcoin, self-custody, and DeFi solutions.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <nav className="space-y-2">
              <Link 
                to="/"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <a 
                href="https://docs.muscadine.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Docs
              </a>
              <Link 
                to="/solutions"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Solutions
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Connect</h4>
            <div className="space-y-2">
              <Link 
                to="/contact"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
              <a 
                href="https://www.linkedin.com/company/muscadinelabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://x.com/muscadinelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                X
              </a>
              <a 
                href="mailto:muscadinelabs@gmail.com"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                muscadinelabs@gmail.com
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Solutions</h4>
            <div className="space-y-2">
              <Link 
                to="/bitcoin"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Bitcoin
              </Link>
              <Link 
                to="/defi"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                DeFi
              </Link>
              <Link 
                to="/node"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Bitcoin Node
              </Link>
              <a 
                href="https://app.muscadine.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                App
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Legal</h4>
            <div className="space-y-2">
              <Link 
                to="/privacy"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/legal"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Legal Disclaimer
              </Link>
              <Link 
                to="/terms"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <a 
                href="https://github.com/Muscadine-Labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Open Source
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Education & security guidance only—no investment advice, no asset custody.
          </p>
          <p className="text-sm text-gray-400">
            © 2025 Muscadine Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
