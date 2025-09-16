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
            I founded Muscadine to help individuals secure and manage their digital assets with confidence. From Bitcoin node deployment to DeFi onboarding, I specialize in building safe, privacy-focused systems that put people in control of their wealth. At its core, Muscadine is about empowering financial independence in a changing economy.
          </p>
          
          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Services</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Bitcoin Node Deployment</h3>
              <p className="text-blue-800 text-sm">
                Run your own node for privacy and sovereignty
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Secure Self-Custody Tools</h3>
              <p className="text-green-800 text-sm">
                Wallet setups with institutional-grade protection
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">DeFi Onboarding</h3>
              <p className="text-purple-800 text-sm">
                Lending, borrowing, and navigating decentralized finance
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Asset Security Management</h3>
              <p className="text-orange-800 text-sm">
                Helping secure and manage large crypto holdings
              </p>
            </div>
          </div>
          
          <div className="bg-stone-100 p-4 rounded-lg mb-6">
            <p className="text-stone-800 font-medium text-center">
              Trusted with securing over $12 million in digital assets
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => onNavigate('bitcoin')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Secure Your Assets
            </button>
            <button
              onClick={() => onNavigate('defi')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Start Your DeFi Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
