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
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-medium text-gray-800">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Muscadine
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/"
            className={`text-lg font-medium transition-colors ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-700'}`}
          >
            Home
          </Link>
          <Link 
            to="/bitcoin"
            className={`text-lg font-medium transition-colors ${location.pathname === '/bitcoin' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-700'}`}
          >
            Bitcoin
          </Link>
          <Link 
            to="/defi"
            className={`text-lg font-medium transition-colors ${location.pathname === '/defi' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-700'}`}
          >
            DeFi
          </Link>
          <Link 
            to="/solutions"
            className={`text-lg font-medium transition-colors ${location.pathname === '/solutions' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-700'}`}
          >
            Solutions
          </Link>
          <Link 
            to="/contact"
            className={`text-lg font-medium transition-colors ${location.pathname === '/contact' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-700'}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg className="h-6 w-6 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="md:hidden mt-3 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-colors duration-200 w-full text-left ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/bitcoin"
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-colors duration-200 w-full text-left ${location.pathname === '/bitcoin' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Bitcoin
            </Link>
            <Link 
              to="/defi"
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-colors duration-200 w-full text-left ${location.pathname === '/defi' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              DeFi
            </Link>
            <Link 
              to="/solutions"
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-colors duration-200 w-full text-left ${location.pathname === '/solutions' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Solutions
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-colors duration-200 w-full text-left ${location.pathname === '/contact' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
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
    <section className="mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">Muscadine</h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Empowering financial freedom through Bitcoin security and decentralized finance
          </p>
        </div>
        
        <AboutMuscadine onNavigate={() => {}} />
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
          <main className="flex-1 max-w-6xl mx-auto px-4 pb-20 mt-16">
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