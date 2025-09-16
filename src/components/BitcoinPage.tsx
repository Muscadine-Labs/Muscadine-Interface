import React from 'react';

export default function BitcoinPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Bitcoin</h1>
            <p className="text-xl text-gray-600">
              The world's first and most secure digital currency
            </p>
          </div>
          
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
        </div>
      </div>
    </div>
  );
}
