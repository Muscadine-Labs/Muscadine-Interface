import { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import MobileNav from './components/MobileNav';
import CryptoPlan from './components/CryptoPlan';
import Analytics from './components/Analytics';
import BitcoinPage from './components/BitcoinPage';
import DeFiPage from './components/DeFiPage';
import AboutMuscadine from './components/AboutMuscadine';
import MuscadineFooter from './components/MuscadineFooter';

const MuscadineBanner = ({ setMainTab }: { setMainTab: (tab: 'muscadine' | 'bitcoin' | 'defi') => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-medium text-gray-800">
          <a href="https://muscadine.box" target="_blank" rel="noopener noreferrer">
            Muscadine
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="https://muscadine.box" 
            className="nav-link text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <button 
            onClick={() => setMainTab('bitcoin')}
            className="nav-link text-gray-600"
          >
            Bitcoin
          </button>
          <button 
            onClick={() => setMainTab('defi')}
            className="nav-link text-gray-600"
          >
            DeFi
          </button>
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
            <a 
              href="https://muscadine.box" 
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <button 
              onClick={() => { setMainTab('bitcoin'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 w-full text-left"
            >
              Bitcoin
            </button>
            <button 
              onClick={() => { setMainTab('defi'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 w-full text-left"
            >
              DeFi
            </button>
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

const AboutDefi = () => (
  <div className="p-6">
    <h2 className="section-title">What is DeFi?</h2>
    <p className="text-body mb-8">
      Decentralized finance (DeFi) is an open, permissionless ecosystem of financial applications built on blockchains, allowing anyone to lend, borrow, trade, and earn interest without traditional banks.
    </p>
    <h3 className="text-display mb-4">Getting Started with DeFi</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">1. Acquire Crypto</h4>
        <p className="text-body">
          Use a centralized exchange like Coinbase or a decentralized exchange such as Uniswap (low fees) to obtain cryptocurrency.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">2. Set Up Your Wallet</h4>
        <ul className="text-body space-y-2 ml-4">
          <li><strong>Cold Wallet:</strong> Use a Trezor or Ledger hardware device; record your 24-word seed on paper and store it securely. Connect via Rabby, MetaMask, or Phantom for DeFi interactions.</li>
          <li><strong>Hot Wallet:</strong> MetaMask, Rabby, or Phantom work well—always back up your seed phrase in a safe place.</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">3. Choose Your Network</h4>
        <p className="text-body">
          Decide which blockchain to use (Ethereum, Base, Solana, etc.) based on the protocols you plan to use.
        </p>
      </div>
    </div>
    <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
      <p className="text-amber-800 font-medium text-body">Proceed carefully—only interact with projects you've vetted.</p>
    </div>
  </div>
);

function App() {
  const [mainTab, setMainTab] = useState<'muscadine' | 'bitcoin' | 'defi'>('muscadine');
  const [muscadineTab, setMuscadineTab] = useState<'about' | 'contact' | 'node' | 'crypto-plan'>('about');
  const [bitcoinTab, setBitcoinTab] = useState<'about' | 'wallets' | 'explorer'>('about');
  const [defiTab, setDefiTab] = useState<'about' | 'lending' | 'swap' | 'wallet'>('about');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  // Explanations
  const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";
  const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";
  const lendingExplanation = "Earn & Borrow lets you lend your crypto to earn interest or borrow assets by providing collateral. These protocols are non-custodial and operate transparently on-chain.";
  const swapExplanation = "Token Swap allows you to exchange one cryptocurrency for another instantly using decentralized exchanges, without relying on a central authority.";
  const walletExplanation = "Crypto wallets are your gateway to the decentralized world. They allow you to store, send, and receive cryptocurrencies while maintaining full control over your digital assets.";
  // Enhanced external link handlers with loading states
  const handleExternalLink = (url: string, name: string) => {
    setIsLoading(true);
    setLoadingMessage(`Opening ${name}...`);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
      setLoadingMessage('');
    }, 300);
  };

  const openMempool = () => handleExternalLink('https://mempool.space', 'Mempool');
  const openSparrowWallet = () => handleExternalLink('https://sparrowwallet.com/', 'Sparrow Wallet');
  const openSparrowDocs = () => handleExternalLink('https://sparrowwallet.com/docs/', 'Sparrow Docs');
  const openAave = () => handleExternalLink('https://app.aave.com/', 'Aave');
  const openMoonwell = () => handleExternalLink('https://moonwell.fi/portfolio', 'Moonwell');
  const openMorpho = () => handleExternalLink('https://app.morpho.org/base/earn', 'Morpho');
  const openAerodrome = () => handleExternalLink('https://aerodrome.finance/', 'Aerodrome');
  const openUniswap = () => handleExternalLink('https://app.uniswap.org/', 'Uniswap');

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
  const openZerion = () => handleExternalLink('https://app.zerion.io/', 'Zerion');
  const openRabby = () => handleExternalLink('https://rabby.io/', 'Rabby');
  const openPhantom = () => handleExternalLink('https://phantom.com/', 'Phantom');
  // DeFi Card Component
  const DeFiCard = ({ title, subtitle, className = "", onClick, aboutLink }: { 
    title: string; 
    subtitle?: string; 
    className?: string; 
    onClick: () => void;
    aboutLink?: string;
  }) => (
    <div 
      className={`group bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-gray-300 ${className}`} 
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Open ${title}`}
    >
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-200">{subtitle}</p>}
        {aboutLink && (
          <a
            href={aboutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            onClick={e => e.stopPropagation()}
          >
            Learn More
          </a>
        )}
        <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
          Click to open →
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <Analytics pageName="defi-dashboard" />
      <div className="min-h-screen bg-white flex flex-col">
        <MuscadineBanner setMainTab={setMainTab} />
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 shadow-2xl flex items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
              <span className="text-lg font-medium text-gray-800">{loadingMessage}</span>
            </div>
          </div>
        )}
        <main className="flex-1 max-w-6xl mx-auto px-4 pb-20">
          {/* Main Tabs */}
          <div className="flex border-b border-gray-200 mb-12 mt-16 -mx-4 px-4 overflow-x-auto">
            <button
              onClick={() => setMainTab('muscadine')}
              className={`px-8 py-4 text-xl font-semibold transition-all duration-200 whitespace-nowrap ${mainTab === 'muscadine' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Muscadine
            </button>
            <button
              onClick={() => setMainTab('bitcoin')}
              className={`px-8 py-4 text-xl font-semibold transition-all duration-200 whitespace-nowrap ${mainTab === 'bitcoin' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Bitcoin
            </button>
            <button
              onClick={() => setMainTab('defi')}
              className={`px-8 py-4 text-xl font-semibold transition-all duration-200 whitespace-nowrap ${mainTab === 'defi' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              DeFi
            </button>
          </div>
          {/* Tab Content */}
          {mainTab === 'muscadine' && (
            <section className="mb-20">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                  <button onClick={() => setMuscadineTab('about')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>About</button>
                  <button onClick={() => setMuscadineTab('contact')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'contact' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Contact</button>
                  <button onClick={() => setMuscadineTab('node')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'node' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Node</button>
                  <button onClick={() => setMuscadineTab('crypto-plan')} className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${muscadineTab === 'crypto-plan' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Crypto Guide</button>
                </div>
                <div>
                  {muscadineTab === 'about' && <AboutMuscadine onNavigate={setMainTab} />}
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
          )}
          {mainTab === 'bitcoin' && (
            <section className="mb-20">
              <BitcoinPage />
            </section>
          )}
          {mainTab === 'defi' && (
            <section className="mb-20">
              <DeFiPage />
            </section>
          )}
        </main>
        <MuscadineFooter onNavigate={setMainTab} />
        <MobileNav />
      </div>
    </ErrorBoundary>
  );
}

export default App; 