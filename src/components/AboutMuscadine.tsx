
import { Link } from 'react-router-dom';

interface AboutMuscadineProps {
  onNavigate: (tab: 'bitcoin' | 'defi') => void;
}

export default function AboutMuscadine({ onNavigate }: AboutMuscadineProps) {
  return (
    <div className="max-w-none text-gray-700 space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="text-left mb-8 md:mb-0">
          <h2 className="text-6xl font-bold text-gray-900">Muscadine</h2>
        </div>
        <div className="text-right">
          <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Financial self-sovereignty
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-10 rounded-lg">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto text-center">
          Muscadine is a small business dedicated to helping individuals take control of their financial future through Bitcoin security, self-custody, and DeFi solutions. I provide support with Bitcoin node deployment, secure asset management, and onboarding into decentralized finance, ensuring people can navigate the new financial system.
        </p>
        
        <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-2xl mx-auto">
          <p className="text-gray-800 font-medium text-center text-xl">
            Trusted with securing over $12 million in digital assets
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-10">Services</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-blue-900 mb-3">Bitcoin Node Deployment</h4>
            <p className="text-blue-800">
              Run your own node for privacy and sovereignty
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-green-900 mb-3">Secure Self-Custody Tools</h4>
            <p className="text-green-800">
              Wallet setups with institutional-grade protection
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-purple-900 mb-3">DeFi Onboarding</h4>
            <p className="text-purple-800">
              Lending, borrowing, and navigating decentralized finance
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-orange-900 mb-3">Asset Security Management</h4>
            <p className="text-orange-800">
              Helping secure and manage large crypto holdings
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
