import { Link } from 'react-router-dom';

export default function MuscadineFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
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
                to="/solutions"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Solutions
              </Link>
              <Link 
                to="/contact"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
              <a 
                href="https://app.muscadine.box/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                App
              </a>
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
                href="https://nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                nicholasconnelly.box
              </a>
              <a 
                href="https://ignaspanavas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                ignaspanavas.com
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Resources</h4>
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
              <Link 
                to="/cryptoguide"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Crypto Guide
              </Link>
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
              <Link 
                to="/disclaimer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Disclaimer
              </Link>
              <a 
                href="https://github.com/nickconnelly10/muscadine.box" 
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
            © {new Date().getFullYear()} Muscadine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
