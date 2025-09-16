
import { useState } from 'react';

export default function DeFiPage() {
  const [defiTab, setDefiTab] = useState<'about' | 'lending' | 'swap' | 'wallet'>('about');

  const openAave = () => {
    window.open('https://app.aave.com/', '_blank', 'noopener,noreferrer');
  };

  const openMoonwell = () => {
    window.open('https://moonwell.fi/portfolio', '_blank', 'noopener,noreferrer');
  };

  const openMorpho = () => {
    window.open('https://app.morpho.org/base/earn', '_blank', 'noopener,noreferrer');
  };

  const openAerodrome = () => {
    window.open('https://aerodrome.finance/', '_blank', 'noopener,noreferrer');
  };

  const openUniswap = () => {
    window.open('https://app.uniswap.org/', '_blank', 'noopener,noreferrer');
  };

  const openRabby = () => {
    window.open('https://rabby.io/', '_blank', 'noopener,noreferrer');
  };

  const openPhantom = () => {
    window.open('https://phantom.com/', '_blank', 'noopener,noreferrer');
  };

  const openZerion = () => {
    window.open('https://app.zerion.io/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">DeFi</h1>
        <p className="text-xl text-gray-600">
          Decentralized Finance - The Future of Financial Services
        </p>
      </div>
      
      {/* DeFi Sub-tabs */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        <button 
          onClick={() => setDefiTab('about')} 
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${defiTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          About
        </button>
        <button 
          onClick={() => setDefiTab('lending')} 
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${defiTab === 'lending' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Lending & Borrowing
        </button>
        <button 
          onClick={() => setDefiTab('swap')} 
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${defiTab === 'swap' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Token Swap
        </button>
        <button 
          onClick={() => setDefiTab('wallet')} 
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${defiTab === 'wallet' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Wallet
        </button>
      </div>

      {/* Tab Content */}
      {defiTab === 'about' && (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is DeFi?</h2>
          <p className="text-gray-700 mb-6">
            Decentralized Finance (DeFi) is a movement that aims to create an open, 
            permissionless, and transparent financial system built on blockchain technology. 
            DeFi protocols enable users to lend, borrow, trade, and earn interest on 
            cryptocurrencies without relying on traditional financial intermediaries.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core DeFi Services</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Lending & Borrowing</h3>
              <p className="text-blue-800 text-sm">
                Earn interest on your crypto assets or borrow against them without 
                traditional credit checks.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Decentralized Exchanges</h3>
              <p className="text-green-800 text-sm">
                Trade cryptocurrencies directly with other users without 
                centralized intermediaries.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Yield Farming</h3>
              <p className="text-purple-800 text-sm">
                Earn rewards by providing liquidity to DeFi protocols 
                and participating in governance.
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Staking</h3>
              <p className="text-orange-800 text-sm">
                Earn rewards by participating in network consensus 
                and securing blockchain networks.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of DeFi</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Accessibility:</strong> Open to anyone with an internet connection</li>
            <li><strong>Transparency:</strong> All transactions and code are publicly auditable</li>
            <li><strong>Interoperability:</strong> Different protocols can work together seamlessly</li>
            <li><strong>Innovation:</strong> Rapid development of new financial products</li>
            <li><strong>Global:</strong> No geographical restrictions or banking hours</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started with DeFi</h2>
          <p className="text-gray-700 mb-4">
            Before diving into DeFi, it's important to understand the risks and start small:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li>Set up a secure wallet (hardware wallet recommended)</li>
            <li>Start with small amounts to learn the protocols</li>
            <li>Research projects thoroughly before investing</li>
            <li>Understand the risks of smart contract vulnerabilities</li>
            <li>Keep track of your transactions for tax purposes</li>
          </ol>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <p className="text-red-800">
              <strong>Warning:</strong> DeFi protocols can be complex and carry significant risks 
              including smart contract bugs, impermanent loss, and market volatility. 
              Always do your own research and never invest more than you can afford to lose.
            </p>
          </div>
        </div>
      )}

      {defiTab === 'lending' && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lending & Borrowing Protocols</h2>
            <p className="text-gray-700 mb-6">
              Earn interest on your crypto assets or borrow against them using these trusted DeFi protocols. 
              Always start with small amounts and understand the risks involved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aave</h3>
              <p className="text-gray-600 mb-4">Leading lending protocol with multiple networks</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Lend and borrow various assets</p>
                <p className="text-sm text-gray-500">• Variable and stable interest rates</p>
                <p className="text-sm text-gray-500">• Available on Ethereum, Base, and more</p>
              </div>
              <button 
                onClick={openAave}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Aave
              </button>
            </div>
            
            <div className="bg-white border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Moonwell</h3>
              <p className="text-gray-600 mb-4">Lending protocol on Base network</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Optimized for Base ecosystem</p>
                <p className="text-sm text-gray-500">• Competitive interest rates</p>
                <p className="text-sm text-gray-500">• User-friendly interface</p>
              </div>
              <button 
                onClick={openMoonwell}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Moonwell
              </button>
            </div>
            
            <div className="bg-white border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Morpho</h3>
              <p className="text-gray-600 mb-4">Peer-to-peer lending with better rates</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• P2P lending model</p>
                <p className="text-sm text-gray-500">• Better rates than traditional AMMs</p>
                <p className="text-sm text-gray-500">• Available on multiple networks</p>
              </div>
              <button 
                onClick={openMorpho}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Morpho
              </button>
            </div>
          </div>
        </div>
      )}

      {defiTab === 'swap' && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Decentralized Exchanges</h2>
            <p className="text-gray-700 mb-6">
              Trade cryptocurrencies directly with other users without centralized intermediaries. 
              Compare rates and choose the best option for your trades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-cyan-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aerodrome</h3>
              <p className="text-gray-600 mb-4">Leading DEX on Base network</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Optimized for Base ecosystem</p>
                <p className="text-sm text-gray-500">• Low fees and fast transactions</p>
                <p className="text-sm text-gray-500">• Liquidity mining rewards</p>
              </div>
              <button 
                onClick={openAerodrome}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Aerodrome
              </button>
            </div>
            
            <div className="bg-white border border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Uniswap</h3>
              <p className="text-gray-600 mb-4">Most popular DEX across multiple networks</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Available on many networks</p>
                <p className="text-sm text-gray-500">• Large liquidity pools</p>
                <p className="text-sm text-gray-500">• Well-established and trusted</p>
              </div>
              <button 
                onClick={openUniswap}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Uniswap
              </button>
            </div>
          </div>
        </div>
      )}

      {defiTab === 'wallet' && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">DeFi Wallets</h2>
            <p className="text-gray-700 mb-6">
              Choose the right wallet for DeFi interactions. These wallets support multiple networks 
              and provide easy access to DeFi protocols.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rabby Wallet</h3>
              <p className="text-gray-600 mb-4">Multi-chain wallet optimized for DeFi</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Support for 100+ networks</p>
                <p className="text-sm text-gray-500">• Built-in DeFi portfolio tracking</p>
                <p className="text-sm text-gray-500">• Hardware wallet integration</p>
                <p className="text-sm text-gray-500">• Gas optimization features</p>
              </div>
              <button 
                onClick={openRabby}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Rabby
              </button>
            </div>
            
            <div className="bg-white border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phantom</h3>
              <p className="text-gray-600 mb-4">Popular wallet for Solana and Ethereum</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Solana and Ethereum support</p>
                <p className="text-sm text-gray-500">• Built-in DEX integration</p>
                <p className="text-sm text-gray-500">• NFT support</p>
                <p className="text-sm text-gray-500">• User-friendly interface</p>
              </div>
              <button 
                onClick={openPhantom}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Phantom
              </button>
            </div>
            
            <div className="bg-white border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zerion</h3>
              <p className="text-gray-600 mb-4">DeFi portfolio management and trading</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Portfolio tracking across chains</p>
                <p className="text-sm text-gray-500">• Built-in DEX aggregator</p>
                <p className="text-sm text-gray-500">• DeFi protocol discovery</p>
                <p className="text-sm text-gray-500">• Mobile and desktop apps</p>
              </div>
              <button 
                onClick={openZerion}
                className="w-full mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Open Zerion
              </button>
            </div>
            
            <div className="bg-white border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hardware Wallets</h3>
              <p className="text-gray-600 mb-4">Maximum security for DeFi interactions</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Ledger (supports most DeFi)</p>
                <p className="text-sm text-gray-500">• Trezor (limited DeFi support)</p>
                <p className="text-sm text-gray-500">• Works with software wallets</p>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Tip:</strong> Use hardware wallets with software wallets like Rabby for the best security and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
