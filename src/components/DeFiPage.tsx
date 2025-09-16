import React from 'react';

export default function DeFiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DeFi</h1>
            <p className="text-xl text-gray-600">
              Decentralized Finance - The Future of Financial Services
            </p>
          </div>
          
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
        </div>
      </div>
    </div>
  );
}
