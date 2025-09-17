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
              A small business dedicated to helping individuals take control of their financial future through Bitcoin security, self-custody, and DeFi solutions.
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
                to="/contact"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
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
                Connect
              </Link>
              <a 
                href="https://linkedin.com/in/nicholasconnelly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://nicholasconnelly.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Substack
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Resources</h4>
            <div className="space-y-2">
              <a 
                href="https://www.nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                nicholasconnelly.box
              </a>
              <a 
                href="https://health.nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Health & Wellness
              </a>
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
              <a 
                href="/privacy.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/legal.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Legal
              </a>
              <a 
                href="/disclaimer.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Disclaimer
              </a>
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
