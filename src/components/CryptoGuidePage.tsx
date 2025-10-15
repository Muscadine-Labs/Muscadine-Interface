import CryptoPlan from './CryptoPlan';
import { Link } from 'react-router-dom';

export default function CryptoGuidePage() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {/* Back Arrow */}
      <div className="mb-6">
        <Link 
          to="/solutions" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Solutions
        </Link>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif">Crypto Guide</h1>
        <p className="text-xl text-gray-600">
          Comprehensive guide to Bitcoin and DeFi
        </p>
      </div>
      
      <CryptoPlan />
    </div>
  );
}
