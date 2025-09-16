import React from 'react';

interface MuscadineFooterProps {
  onNavigate: (tab: 'bitcoin' | 'defi') => void;
}

export default function MuscadineFooter({ onNavigate }: MuscadineFooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Muscadine</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A comprehensive DeFi analytics platform designed to help users navigate the decentralized finance ecosystem with data-driven insights and educational resources.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <nav className="space-y-2">
              <a 
                href="https://muscadine.box/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home - muscadine.box
              </a>
              <button 
                onClick={() => onNavigate('bitcoin')}
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Bitcoin
              </button>
              <button 
                onClick={() => onNavigate('defi')}
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                DeFi
              </button>
            </nav>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://muscadine.box/connect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Connect
              </a>
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
                href="https://muscadine.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                DeFi - Muscadine
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nicholas Connelly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
