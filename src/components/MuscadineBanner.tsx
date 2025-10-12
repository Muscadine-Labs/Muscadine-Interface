import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import HamburgerIcon from './HamburgerIcon';

const navigationItems = [
  
  { to: '/contact', label: 'Contact' }
];

const MuscadineBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/favicon.png" 
              alt="Muscadine Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-gray-900">Muscadine</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            
            {/* Try Our App Button */}
            <a
              href="https://app.muscadine.box"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Try Our App
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen((v) => !v)}
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <NavLink 
                  key={item.to} 
                  to={item.to} 
                  variant="mobile"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Mobile Try Our App Button */}
              <a
                href="https://app.muscadine.box"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 mt-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Try Our App
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MuscadineBanner;
