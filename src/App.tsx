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
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-xl font-semibold text-gray-900">Muscadine</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/bitcoin"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/bitcoin' 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Bitcoin
            </Link>
            <Link 
              to="/defi"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/defi' 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              DeFi
            </Link>
            <Link 
              to="/solutions"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/solutions' 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/bitcoin"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === '/bitcoin' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Bitcoin
              </Link>
              <Link 
                to="/defi"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === '/defi' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                DeFi
              </Link>
              <Link 
                to="/solutions"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === '/solutions' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Solutions
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === '/contact' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};




const MuscadineHome = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">Muscadine</h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Empowering financial freedom through Bitcoin security and decentralized finance
          </p>
        </div>
        
        {/* About Section */}
        <AboutMuscadine onNavigate={() => {}} />
        
        {/* Solutions and Contact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Solutions Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive crypto security and DeFi strategies tailored to your financial goals and risk tolerance.
              </p>
              <Link 
                to="/solutions" 
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Solutions
              </Link>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get in touch for personalized crypto guidance, security audits, or DeFi strategy consultations.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get In Touch
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
          <main className="flex-1 max-w-6xl mx-auto px-4 pb-20 pt-20">
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