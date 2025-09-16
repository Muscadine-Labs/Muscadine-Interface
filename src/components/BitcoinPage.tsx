
import { useState } from 'react';

export default function BitcoinPage() {
  const [bitcoinTab, setBitcoinTab] = useState<'about' | 'explore' | 'wallet'>('about');

  const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";

  const openMempool = () => {
    window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  };

  const openSparrowWallet = () => {
    window.open('https://sparrowwallet.com/', '_blank', 'noopener,noreferrer');
  };

  const openSparrowDocs = () => {
    window.open('https://sparrowwallet.com/docs/', '_blank', 'noopener,noreferrer');
  };

  const openSeedsigner = () => {
    window.open('https://seedsigner.com/', '_blank', 'noopener,noreferrer');
  };

  const openColdcard = () => {
    window.open('https://coldcard.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bitcoin</h1>
        <p className="text-xl text-gray-600">
          The world's first and most secure digital currency
        </p>
      </div>
      
      {/* Bitcoin Sub-tabs */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        <button 
          onClick={() => setBitcoinTab('about')} 
          className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          About
        </button>
        <button 
          onClick={() => setBitcoinTab('explore')} 
          className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'explore' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Explore
        </button>
        <button 
          onClick={() => setBitcoinTab('wallet')} 
          className={`px-6 py-3 font-medium text-base transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'wallet' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Wallet
        </button>
      </div>

      {/* Tab Content */}
      {bitcoinTab === 'about' && (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Bitcoin?</h2>
          <p className="text-gray-700 mb-6">
            Bitcoin is a decentralized digital currency that enables peer-to-peer transactions 
            without the need for intermediaries like banks. Created in 2009 by the pseudonymous 
            Satoshi Nakamoto, Bitcoin operates on a blockchain technology that ensures security, 
            transparency, and immutability.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Decentralized:</strong> No single entity controls Bitcoin</li>
            <li><strong>Secure:</strong> Cryptographically protected transactions</li>
            <li><strong>Transparent:</strong> All transactions are publicly recorded</li>
            <li><strong>Limited Supply:</strong> Only 21 million Bitcoin will ever exist</li>
            <li><strong>Borderless:</strong> Send and receive Bitcoin anywhere in the world</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Bitcoin Matters</h2>
          <p className="text-gray-700 mb-6">
            Bitcoin represents a fundamental shift in how we think about money and value. 
            It offers an alternative to traditional financial systems, providing individuals 
            with greater control over their wealth and the ability to transact freely 
            without censorship or restrictions.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800">
              <strong>Note:</strong> Bitcoin is a volatile asset and investing in it carries risks. 
              Always do your own research and only invest what you can afford to lose.
            </p>
          </div>
        </div>
      )}


      {bitcoinTab === 'explore' && (
        <div>
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700 font-sans">{mempoolExplanation}</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bitcoin Explorer</h3>
              <p className="text-gray-600 mb-4">Explore the Bitcoin blockchain and mempool in real-time</p>
              <button 
                onClick={openMempool}
                className="w-full bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
              >
                Open Mempool.space
              </button>
            </div>
          </div>
        </div>
      )}

      {bitcoinTab === 'wallet' && (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bitcoin Wallets</h2>
            <p className="text-gray-700 mb-6">
              Choose the right Bitcoin wallet for your needs. Hardware wallets offer the best security, 
              while software wallets provide convenience for everyday use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sparrow Wallet</h3>
              <p className="text-gray-600 mb-4">Advanced Bitcoin wallet with excellent privacy features</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Full node support</p>
                <p className="text-sm text-gray-500">• CoinJoin and privacy features</p>
                <p className="text-sm text-gray-500">• Hardware wallet integration</p>
                <p className="text-sm text-gray-500">• Advanced transaction building</p>
              </div>
              <div className="mt-4 space-y-2">
                <button 
                  onClick={openSparrowWallet}
                  className="w-full bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                >
                  Download Sparrow
                </button>
                <button 
                  onClick={openSparrowDocs}
                  className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  View Documentation
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hardware Wallets</h3>
              <p className="text-gray-600 mb-4">Cold storage for maximum security</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Trezor Model T or One</p>
                <p className="text-sm text-gray-500">• Ledger Nano S Plus or X</p>
                <p className="text-sm text-gray-500">• Seedsigner (DIY air-gapped)</p>
                <p className="text-sm text-gray-500">• Coldcard (Bitcoin-only)</p>
              </div>
              <div className="mt-4 space-y-2">
                <button 
                  onClick={openSeedsigner}
                  className="w-full bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
                >
                  Seedsigner
                </button>
                <button 
                  onClick={openColdcard}
                  className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Coldcard
                </button>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Always buy hardware wallets directly from the manufacturer to avoid tampering.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
