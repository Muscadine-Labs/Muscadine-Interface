import { useState } from 'react';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';
import MobileNav from './components/MobileNav';
import CryptoPlan from './components/CryptoPlan';
import Analytics from './components/Analytics';

const MuscadineBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-lg border-b border-stone-200/50 py-4 md:py-6 px-4 md:px-6 text-stone-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="https://muscadine.box"
          className="font-serif text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-all duration-300 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent group-hover:from-gold-700 group-hover:to-gold-900 transition-all duration-300">
            Muscadine
          </span>
        </a>
        <div className="hidden md:flex items-center gap-4">
          <a href="https://nicholasconnelly.box" className="btn-secondary text-sm px-6 py-3 hover:shadow-md transition-all duration-200" target="_blank" rel="noopener noreferrer">Home</a>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all duration-200"
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
      {isOpen && (
        <div className="md:hidden mt-3 border-t border-stone-200 bg-white/95 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            <a href="https://nicholasconnelly.box" className="btn-secondary block w-full text-center px-4 py-3 hover:shadow-md transition-all duration-200" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Home</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const MuscadineFooter = () => (
  <footer className="bg-stone-800 text-stone-300 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 font-serif">Muscadine</h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 font-serif">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://defi.nicholasconnelly.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Launch DeFi</a></li>
            <li><a href="https://muscadine.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Muscadine Home</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 font-serif">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy.html" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms.html" className="text-stone-400 hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="https://github.com/nickconnelly10/defi.nicholasconnelly.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Open Source</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 font-serif">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://nicholasconnelly.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Visit nicholasconnelly.box</a></li>
            <li><a href="https://twitter.com/nicklutk" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Substack</a></li>
            <li><a href="mailto:nickconnelly10@gmail.com?subject=Muscadine%20Inquiry" className="text-stone-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-700 pt-8 text-center">
        <p className="text-sm mb-4">&copy; 2025 Muscadine. All rights reserved.</p>
        <p className="text-xs text-stone-400 mb-2">
          Built on BITCOIN • Secure • Transparent • Professional
        </p>
      </div>
    </div>
  </footer>
);

const AboutBitcoin = () => (
  <div className="p-6">
    <h2 className="section-title">What is Bitcoin?</h2>
    <p className="text-body mb-8">
      Bitcoin is a decentralized digital currency that enables peer-to-peer transactions without intermediaries, secured by cryptography and maintained on a distributed ledger (the blockchain).
    </p>
    <h3 className="text-display mb-4">Getting Started with Bitcoin</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">1. Buy Bitcoin on an Exchange</h4>
        <p className="text-body">
          Choose a reputable exchange—Coinbase is user-friendly—and purchase Bitcoin there, then transfer it to your self-hosted wallet. Peer-to-peer platforms are another great way to stack sats.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">2. Set Up Your Wallet</h4>
        <ul className="text-body space-y-2 ml-4">
          <li><strong>Cold Wallet:</strong> Use a SeedSigner (for paper-wallet setups; record every seed word carefully) or a Coldcard hardware wallet.</li>
          <li><strong>Hot Wallet:</strong> Sparrow Wallet works well for both watch-only (cold) setups and live transactions. Mobile options like BlueWallet are convenient too.</li>
        </ul>
        <p className="text-body mt-2">
          Always write down your seed phrase on paper and store it securely.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">3. Connect to a Node</h4>
        <p className="text-body">
          Point Sparrow Wallet (or your chosen wallet) to our self-hosted Electrum Server (details on the next page).
        </p>
      </div>
    </div>
    <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
      <p className="text-amber-800 font-medium text-body">Not your keys, not your coins.</p>
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
  const [mainTab, setMainTab] = useState<'bitcoin' | 'defi'>('bitcoin');
  const [bitcoinTab, setBitcoinTab] = useState<'about' | 'node' | 'wallets' | 'explorer'>('about');
  const [defiTab, setDefiTab] = useState<'about' | 'lending' | 'swap'>('about');
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
      className={`group bg-white border-2 border-stone-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1 ${className}`} 
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
          <div className="w-12 h-12 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg flex items-center justify-center group-hover:from-gold-100 group-hover:to-gold-200 transition-all duration-300">
            <svg className="w-6 h-6 text-stone-600 group-hover:text-gold-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-stone-800 mb-2 font-serif group-hover:text-gold-700 transition-colors duration-300">{title}</h3>
        {subtitle && <p className="text-sm text-stone-600 mb-4 font-sans group-hover:text-stone-700 transition-colors duration-300">{subtitle}</p>}
        {aboutLink && (
          <a
            href={aboutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 underline font-sans transition-colors duration-200"
            onClick={e => e.stopPropagation()}
          >
            Learn More
          </a>
        )}
        <div className="mt-3 text-xs text-stone-400 group-hover:text-stone-500 transition-colors duration-300">
          Click to open →
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <Analytics pageName="defi-dashboard" />
      <div className="min-h-screen bg-stone-50 flex flex-col font-serif">
        <MuscadineBanner />
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 shadow-2xl flex items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-600"></div>
              <span className="text-lg font-medium text-stone-800">{loadingMessage}</span>
            </div>
          </div>
        )}
        <main className="flex-1 max-w-6xl mx-auto px-4 pb-20">
          {/* Main Tabs */}
          <div className="flex border-b border-stone-200 mb-8 md:mb-12 mt-8 md:mt-12 -mx-4 px-4 overflow-x-auto">
            <button
              onClick={() => setMainTab('bitcoin')}
              className={`px-6 md:px-12 py-3 md:py-6 font-serif text-2xl md:text-3xl font-bold transition-all duration-200 whitespace-nowrap rounded-t-lg ${mainTab === 'bitcoin' ? 'text-gold-600 border-b-2 border-gold-600 bg-white shadow-sm' : 'text-stone-500 hover:text-gold-600'}`}
            >
              Bitcoin
            </button>
            <button
              onClick={() => setMainTab('defi')}
              className={`px-6 md:px-12 py-3 md:py-6 font-serif text-2xl md:text-3xl font-bold transition-all duration-200 whitespace-nowrap rounded-t-lg ${mainTab === 'defi' ? 'text-gold-600 border-b-2 border-gold-600 bg-white shadow-sm' : 'text-stone-500 hover:text-gold-600'}`}
            >
              DeFi
            </button>
          </div>
          {/* Tab Content */}
          {mainTab === 'bitcoin' && (
            <section className="mb-16">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-stone-800 font-serif">Bitcoin</h2>
              </div>
              <div className="bg-gradient-to-br from-gold-50 via-stone-50 to-green-50 rounded-2xl shadow-xl p-8 border-l-8 border-gold-400">
                <div className="flex border-b border-gold-200 mb-8 overflow-x-auto -mx-4 px-4">
                  <button onClick={() => setBitcoinTab('about')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'about' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>About</button>
                  <button onClick={() => setBitcoinTab('node')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'node' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>Node</button>
                  <button onClick={() => setBitcoinTab('crypto-plan')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'crypto-plan' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>Crypto Guide</button>
                  <button onClick={() => setBitcoinTab('wallets')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'wallets' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>Wallets</button>
                  <button onClick={() => setBitcoinTab('explorer')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'explorer' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>Explorer</button>
                </div>
                <div>
                  {bitcoinTab === 'about' && <AboutBitcoin />}
                  {bitcoinTab === 'crypto-plan' && <CryptoPlan />}
                  {bitcoinTab === 'node' && (
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
                  {bitcoinTab === 'wallets' && (
                    <div>
                      <div className="mb-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
                        <p className="text-stone-900 font-sans">Bitcoin wallets are essential tools for managing your Bitcoin securely. Choose the right wallet based on your security needs and technical comfort level.</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <DeFiCard 
                          title="Sparrow Wallet" 
                          subtitle="Advanced Bitcoin wallet for financial self-sovereignty"
                          className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300"
                          onClick={openSparrowWallet}
                          aboutLink="https://sparrowwallet.com/"
                        />
                        <DeFiCard 
                          title="Sparrow Docs" 
                          subtitle="Complete documentation and guides"
                          className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-300"
                          onClick={openSparrowDocs}
                          aboutLink="https://sparrowwallet.com/docs/"
                        />
                      </div>
                    </div>
                  )}
                  {bitcoinTab === 'explorer' && (
                    <div>
                      <div className="mb-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
                        <p className="text-stone-900 font-sans">{mempoolExplanation}</p>
                      </div>
                      <div className="flex justify-center">
                        <DeFiCard 
                          title="Mempool" 
                          subtitle="Bitcoin transaction viewer"
                          className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300"
                          onClick={openMempool}
                          aboutLink="https://mempool.space/about"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
          {mainTab === 'defi' && (
            <section className="mb-16">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-stone-800 font-serif">DeFi</h2>
              </div>
              <div className="bg-gradient-to-br from-gold-50 via-stone-50 to-green-50 rounded-2xl shadow-xl p-8 border-l-8 border-gold-400">
                <div className="flex border-b border-gold-200 mb-8 overflow-x-auto -mx-4 px-4">
                  <button onClick={() => setDefiTab('about')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'about' ? 'text-gold-600 border-b-2 border-gold-600 bg-white shadow-sm' : 'text-stone-500 hover:text-gold-600'}`}>About</button>
                  <button onClick={() => setDefiTab('lending')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'lending' ? 'text-gold-600 border-b-2 border-gold-600 bg-white shadow-sm' : 'text-stone-500 hover:text-gold-600'}`}>Earn & Borrow</button>
                  <button onClick={() => setDefiTab('swap')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'swap' ? 'text-gold-600 border-b-2 border-gold-600 bg-white shadow-sm' : 'text-stone-500 hover:text-gold-600'}`}>Token Swap</button>
                  <button onClick={() => setDefiTab('wallet')} className={`px-4 md:px-6 py-2.5 md:py-3 font-semibold text-base md:text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'wallet' ? 'text-gold-600 border-b-2 border-gold-600 bg-white shadow-sm' : 'text-stone-500 hover:text-gold-600'}`}>Wallet</button>
                </div>
                <div>
                  {defiTab === 'about' && <AboutDefi />}
                  {defiTab === 'lending' && (
                    <div>
                      <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                        <p className="text-stone-700 font-sans">{lendingExplanation}</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <DeFiCard title="Aave" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300" onClick={openAave} aboutLink="https://aave.com/docs" />
                        <DeFiCard title="Moonwell" className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300" onClick={openMoonwell} aboutLink="https://docs.moonwell.fi/moonwell/" />
                        <DeFiCard title="Morpho" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300" onClick={openMorpho} aboutLink="https://docs.morpho.org/overview/" />
                      </div>
                    </div>
                  )}
                  {defiTab === 'swap' && (
                    <div>
                      <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                        <p className="text-stone-700 font-sans">{swapExplanation}</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <DeFiCard title="Aerodrome" className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-300" onClick={openAerodrome} aboutLink="https://aerodrome.finance/docs" />
                        <DeFiCard title="Uniswap" className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-300" onClick={openUniswap} aboutLink="https://docs.uniswap.org/" />
                      </div>
                    </div>
                  )}
                  {defiTab === 'wallet' && (
                    <div>
                      <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                        <p className="text-stone-700 font-sans">{walletExplanation}</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <DeFiCard title="Zerion" className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300" onClick={openZerion} aboutLink="https://app.zerion.io/" />

                        <DeFiCard title="Rabby" className="bg-gradient-to-br from-red-50 to-red-100 border-red-300" onClick={openRabby} aboutLink="https://rabby.io/" />

                        <DeFiCard title="Phantom" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300" onClick={openPhantom} aboutLink="https://phantom.com/" />
                      </div>
                    </div>
                  )}                </div>
              </div>
            </section>
          )}
        </main>
        <MuscadineFooter />
        <MobileNav />
      </div>
    </ErrorBoundary>
  );
}

export default App; 