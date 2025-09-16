import React from 'react';

interface AboutMuscadineProps {
  onNavigate: (tab: 'bitcoin' | 'defi') => void;
}

export default function AboutMuscadine({ onNavigate }: AboutMuscadineProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
        <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center">About Muscadine</h1>
        
        <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
          <p>
            Muscadine is a comprehensive DeFi analytics platform designed to help users navigate the decentralized finance ecosystem with data-driven insights and educational resources.
          </p>
          
          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Our Mission</h2>
          <p>
            We believe in financial sovereignty and the power of decentralized technologies. Muscadine provides the tools and knowledge needed to safely participate in the DeFi ecosystem while maintaining full control over your digital assets.
          </p>
          
          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">What We Offer</h2>
          
          <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-3">Educational Resources</h3>
          <p>
            Comprehensive guides on Bitcoin, DeFi protocols, and wallet security to help you make informed decisions.
          </p>
          
          <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-3">Node Infrastructure</h3>
          <p>
            Self-hosted Bitcoin node and Electrum server for enhanced privacy and security in your Bitcoin transactions.
          </p>
          
          <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-3">DeFi Analytics</h3>
          <p>
            Real-time data and insights on DeFi protocols, helping you identify opportunities and manage risks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => onNavigate('bitcoin')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Bitcoin page
            </button>
            <button
              onClick={() => onNavigate('defi')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              DeFi page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
