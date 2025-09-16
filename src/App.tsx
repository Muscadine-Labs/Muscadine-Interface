import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MobileNav from './components/MobileNav';
import Analytics from './components/Analytics';
import BitcoinPage from './components/BitcoinPage';
import DeFiPage from './components/DeFiPage';
import AboutMuscadine from './components/AboutMuscadine';
import ContactPage from './components/ContactPage';
import NodePage from './components/NodePage';
import CryptoGuidePage from './components/CryptoGuidePage';
import SolutionsPage from './components/SolutionsPage';
import MuscadineFooter from './components/MuscadineFooter';

const MuscadineBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
          <Link to="/" className="hover:from-amber-600 hover:via-amber-500 hover:to-amber-400 transition-all duration-300">
            Muscadine
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link 
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              location.pathname === '/' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/bitcoin"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              location.pathname === '/bitcoin' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
            }`}
          >
            Bitcoin
          </Link>
          <Link 
            to="/defi"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              location.pathname === '/defi' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
            }`}
          >
            DeFi
          </Link>
          <Link 
            to="/solutions"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              location.pathname === '/solutions' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
            }`}
          >
            Solutions
          </Link>
          <Link 
            to="/contact"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              location.pathname === '/contact' 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-xl p-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg className="h-6 w-6 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100/50">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                location.pathname === '/' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/bitcoin"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                location.pathname === '/bitcoin' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Bitcoin
            </Link>
            <Link 
              to="/defi"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                location.pathname === '/defi' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              DeFi
            </Link>
            <Link 
              to="/solutions"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                location.pathname === '/solutions' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                location.pathname === '/contact' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};




const ContactMuscadine = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
    
    <div className="bg-gray-100 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-3">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <a 
          href="mailto:nickconnelly10@gmail.com"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          nickconnelly10@gmail.com
        </a>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a 
        href="https://www.linkedin.com/in/nicholas-connelly"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 flex items-center space-x-3 transition-colors duration-200"
      >
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        <span className="text-gray-800 font-medium">LinkedIn</span>
      </a>
    </div>
  </div>
);


const MuscadineHome = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">Muscadine</h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Empowering financial freedom through Bitcoin security and decentralized finance
          </p>
        </div>
        
        {/* Main Cards - Bitcoin and DeFi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bitcoin Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">₿</text>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bitcoin</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Secure your financial future with Bitcoin. Learn about self-custody, hardware wallets, and building long-term wealth through the world's first decentralized digital currency.
              </p>
              <Link 
                to="/bitcoin" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Bitcoin →
              </Link>
            </div>
          </div>

          {/* DeFi Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">DeFi</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Access decentralized finance protocols and yield farming opportunities. Maximize your crypto assets through lending, borrowing, and automated strategies on Base and other networks.
              </p>
              <Link 
                to="/defi" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View DeFi Dashboard →
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Cards - Solutions and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Solutions Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solutions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive crypto security and DeFi strategies tailored to your financial goals and risk tolerance.
              </p>
              <Link 
                to="/solutions" 
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-200"
              >
                View Solutions →
              </Link>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Get in touch for personalized crypto guidance, security audits, or DeFi strategy consultations.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-200"
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Analytics pageName="defi-dashboard" />
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <MuscadineBanner />
          <main className="flex-1 max-w-7xl mx-auto px-6 pb-20 pt-24">
            <Routes>
              <Route path="/" element={<MuscadineHome />} />
              <Route path="/bitcoin" element={<BitcoinPage />} />
              <Route path="/defi" element={<DeFiPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/node" element={<NodePage />} />
              <Route path="/cryptoguide" element={<CryptoGuidePage />} />
            </Routes>
          </main>
          <MuscadineFooter />
          <MobileNav />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App; 