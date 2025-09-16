import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MobileNav from './components/MobileNav';
import CryptoPlan from './components/CryptoPlan';
import Analytics from './components/Analytics';
import BitcoinPage from './components/BitcoinPage';
import DeFiPage from './components/DeFiPage';
import AboutMuscadine from './components/AboutMuscadine';
import MuscadineFooter from './components/MuscadineFooter';

const MuscadineBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-medium text-gray-800">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Muscadine
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/"
            className={`nav-link transition-colors ${location.pathname === '/' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-700'}`}
          >
            Muscadine
          </Link>
          <Link 
            to="/bitcoin"
            className={`nav-link transition-colors ${location.pathname === '/bitcoin' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-700'}`}
          >
            Bitcoin
          </Link>
          <Link 
            to="/defi"
            className={`nav-link transition-colors ${location.pathname === '/defi' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-700'}`}
          >
            DeFi
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
              className={`block text-sm transition-colors duration-200 w-full text-left ${location.pathname === '/' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Muscadine
            </Link>
            <Link 
              to="/bitcoin"
              onClick={() => setIsOpen(false)}
              className={`block text-sm transition-colors duration-200 w-full text-left ${location.pathname === '/bitcoin' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Bitcoin
            </Link>
            <Link 
              to="/defi"
              onClick={() => setIsOpen(false)}
              className={`block text-sm transition-colors duration-200 w-full text-left ${location.pathname === '/defi' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              DeFi
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};




const ContactMuscadine = () => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact & Services</h2>
    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
      Need help setting up your DeFi infrastructure or want professional advice on Bitcoin and DeFi strategies? I'm here to help.
    </p>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">System Setup Services</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Bitcoin Node Setup</h4>
            <p className="text-gray-600">Complete Bitcoin node installation and configuration with Electrum server integration.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Wallet Security</h4>
            <p className="text-gray-600">Cold storage setup, seed phrase management, and multi-signature wallet configuration.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">DeFi Integration</h4>
            <p className="text-gray-600">Safe DeFi protocol integration and yield farming strategy implementation.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
        <div className="space-y-4">
          <a 
            href="mailto:nickconnelly10@gmail.com"
            className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            📧 nickconnelly10@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/nicholas-connelly"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            💼 LinkedIn Profile
          </a>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Response Time:</strong> Usually within 24 hours<br/>
            <strong>Consultation:</strong> Free initial consultation<br/>
            <strong>Services:</strong> Custom pricing based on complexity
          </p>
        </div>
      </div>
    </div>
  </div>
);


const MuscadineHome = () => {
  const [muscadineTab, setMuscadineTab] = useState<'about' | 'contact' | 'node' | 'crypto-plan'>('about');

  // Explanations
  const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";

  // Copy to clipboard function
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if desired
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <section className="mb-20">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button onClick={() => setMuscadineTab('about')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>About</button>
          <button onClick={() => setMuscadineTab('contact')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'contact' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Contact</button>
          <button onClick={() => setMuscadineTab('node')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'node' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Node</button>
          <button onClick={() => setMuscadineTab('crypto-plan')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'crypto-plan' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Crypto Guide</button>
        </div>
        <div>
          {muscadineTab === 'about' && <AboutMuscadine onNavigate={() => {}} />}
          {muscadineTab === 'contact' && <ContactMuscadine />}
          {muscadineTab === 'node' && (
            <div>
              <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                <p className="text-stone-700 font-sans">{nodeExplanation}</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-4 font-serif">Node Connection Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-stone-600 mb-2 font-sans">Electrum Server Hostname:</p>
                    <div className="flex items-center gap-2">
                      <code className="bg-stone-100 px-3 py-2 rounded text-sm flex-1 break-all">lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion</code>
                      <button 
                        className="bg-stone-600 text-white px-3 py-2 rounded text-sm hover:bg-stone-700 transition-colors" 
                        onClick={() => copyToClipboard('lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion')}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-stone-600 mb-2 font-sans">Port:</p>
                    <div className="flex items-center gap-2">
                      <span className="bg-stone-100 px-3 py-2 rounded text-sm">50001</span>
                      <button 
                        className="bg-stone-600 text-white px-3 py-2 rounded text-sm hover:bg-stone-700 transition-colors" 
                        onClick={() => copyToClipboard('50001')}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {muscadineTab === 'crypto-plan' && <CryptoPlan />}
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
          <main className="flex-1 max-w-6xl mx-auto px-4 pb-20 mt-16">
            <Routes>
              <Route path="/" element={<MuscadineHome />} />
              <Route path="/bitcoin" element={<BitcoinPage />} />
              <Route path="/defi" element={<DeFiPage />} />
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