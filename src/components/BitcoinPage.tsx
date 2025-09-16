
import { useState } from 'react';

export default function BitcoinPage() {
  const [bitcoinTab, setBitcoinTab] = useState<'about' | 'node' | 'explore' | 'wallet'>('about');

  const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";
  const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const openMempool = () => {
    window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  };

  const openSparrowWallet = () => {
    window.open('https://sparrowwallet.com/', '_blank', 'noopener,noreferrer');
  };

  const openSparrowDocs = () => {
    window.open('https://sparrowwallet.com/docs/', '_blank', 'noopener,noreferrer');
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
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          About
        </button>
        <button 
          onClick={() => setBitcoinTab('node')} 
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'node' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Node
        </button>
        <button 
          onClick={() => setBitcoinTab('explore')} 
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'explore' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Explore
        </button>
        <button 
          onClick={() => setBitcoinTab('wallet')} 
          className={`px-6 py-3 font-medium text-sm transition-all duration-200 whitespace-nowrap ${bitcoinTab === 'wallet' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
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
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Download Sparrow
                </button>
                <button 
                  onClick={openSparrowDocs}
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
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
                <p className="text-sm text-gray-500">• Coldcard (Bitcoin-only)</p>
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
