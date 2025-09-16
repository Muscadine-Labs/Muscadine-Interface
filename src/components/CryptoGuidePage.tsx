import CryptoPlan from './CryptoPlan';

export default function CryptoGuidePage() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Crypto Guide</h1>
        <p className="text-xl text-gray-600">
          Comprehensive guide to Bitcoin and DeFi
        </p>
      </div>
      
      <CryptoPlan />
    </div>
  );
}
