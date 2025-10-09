import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import BitcoinPage from './components/BitcoinPage';
import DeFiPage from './components/DeFiPage';
import AboutMuscadine from './components/AboutMuscadine';
import ContactPage from './components/ContactPage';
import NodePage from './components/NodePage';
import CryptoGuidePage from './components/CryptoGuidePage';
import SolutionsPage from './components/SolutionsPage';
import MuscadineFooter from './components/MuscadineFooter';
import UICard from './components/UICard';
import ScrollToTop from './components/ScrollToTop';
import LegalPage from './components/LegalPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import DisclaimerPage from './components/DisclaimerPage';

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
      <div className="max-w-6xl mx-auto">
        
        {/* About Section */}
        <AboutMuscadine onNavigate={() => {}} />
        
        {/* Main Value Blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <UICard
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            title="Bitcoin Security & Self-Custody"
            description="Establish secure self-custody with Bitcoin. Learn the fundamentals of hardware wallets, recovery planning, and long-term asset protection"
            buttonText="Explore Bitcoin"
            buttonLink="/bitcoin"
            iconBgColor="from-orange-500 to-orange-600"
            className="h-full"
          />
          
          <UICard
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Decentralized Finance (DeFi)"
            description="Access lending and borrowing protocols with a structured, risk-aware approach. Learn how to optimize capital while maintaining security on Base and other networks."
            buttonText="Explore DeFi"
            buttonLink="/defi"
            iconBgColor="from-blue-500 to-blue-600"
            className="h-full"
          />
          <UICard
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            }
            title="Bitcoin Node"
            description="Connect to my self-hosted Bitcoin node for secure transactions and enhanced privacy. Access a full Bitcoin node for verification and transaction broadcasting."
            buttonText="Connect to our Bitcoin Node"
            buttonLink="/node"
            iconBgColor="from-green-500 to-green-600"
            className="h-full"
          />
          
          <UICard
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            title="Knowledge Base"
            description="Concise resources and checklists for navigating self-custody, wallets, DeFi, and digital asset security. Comprehensive guides for all skill levels."
            buttonText="Open Crypto Resource"
            buttonLink="/cryptoguide"
            iconBgColor="from-purple-500 to-purple-600"
            className="h-full"
          />
        </div>

        {/* Why Muscadine Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-light text-gray-800 leading-tight mb-4 font-serif">Why Muscadine</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Plain English. Real guidance. Your keys, your coins.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
              <span className="bg-white px-3 py-1.5 rounded-full border">No investment advice</span>
              <span className="bg-white px-3 py-1.5 rounded-full border">Education only</span>
              <span className="bg-white px-3 py-1.5 rounded-full border">Your custody, always</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-light text-white leading-tight mb-4 font-serif">Ready to Take Control?</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              Request a consultation for security architecture, wallet hardening, Bitcoin node deployment, or DeFi onboarding. I typically respond within one business day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Free 30-minute consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">No commitment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Personalized recommendations</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact
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
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <MuscadineBanner />
          <main className="flex-1 max-w-6xl mx-auto px-4 pt-20">
            <Routes>
              <Route path="/" element={<MuscadineHome />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/bitcoin" element={<BitcoinPage />} />
              <Route path="/defi" element={<DeFiPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/node" element={<NodePage />} />
              <Route path="/cryptoguide" element={<CryptoGuidePage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
            </Routes>
          </main>
          <MuscadineFooter />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App; 