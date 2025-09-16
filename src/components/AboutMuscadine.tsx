
import { Link } from 'react-router-dom';

interface AboutMuscadineProps {
  onNavigate: (tab: 'bitcoin' | 'defi') => void;
}

export default function AboutMuscadine({ onNavigate }: AboutMuscadineProps) {
  return (
    <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Muscadine</h2>
        <p className="text-lg text-gray-600">
          I founded Muscadine to help individuals secure and manage their digital assets with confidence. From Bitcoin node deployment to DeFi onboarding, I specialize in building safe, privacy-focused systems that put people in control of their wealth. At its core, Muscadine is about financial independence in a changing economy.
        </p>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg">
        <p className="text-lg text-gray-700 mb-6">
          Muscadine is a small business dedicated to helping individuals take control of their financial future through Bitcoin security, self-custody, and DeFi solutions. I provide support with Bitcoin node deployment, secure asset management, and onboarding into decentralized finance, ensuring people can navigate the new financial system.
        </p>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-800 font-medium text-center text-lg">
            Trusted with securing over $12 million in digital assets
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Services</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Bitcoin Node Deployment</h4>
            <p className="text-blue-800 text-sm">
              Run your own node for privacy and sovereignty
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-900 mb-2">Secure Self-Custody Tools</h4>
            <p className="text-green-800 text-sm">
              Wallet setups with institutional-grade protection
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-900 mb-2">DeFi Onboarding</h4>
            <p className="text-purple-800 text-sm">
              Lending, borrowing, and navigating decentralized finance
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-900 mb-2">Asset Security Management</h4>
            <p className="text-orange-800 text-sm">
              Helping secure and manage large crypto holdings
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/bitcoin"
            className="bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
          >
            Control Your Bitcoin
          </Link>
          <Link
            to="/defi"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
          >
            Explore DeFi
          </Link>
        </div>
      </div>
    </div>
  );
}
