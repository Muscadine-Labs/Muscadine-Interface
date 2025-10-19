import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Arrow */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif">
            Muscadine Solutions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Comprehensive financial self-sovereignty solutions designed to help you take complete control of your digital assets. From Bitcoin security to DeFi strategies, our structured approach ensures you maintain security while maximizing opportunities in the decentralized economy.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our App */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 font-serif">
                Our App
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Access our Morpho vaults on Base for secure yield on USDC, Bitcoin, and Ethereum. Built for financial freedom with industry-low fees (1% performance fee) and flexible deposits/withdrawals of any amount, anytime.
              </p>
              <a 
                href="https://app.muscadine.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Launch App
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bitcoin Security & Self-Custody */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 font-serif">
                Bitcoin Security & Self-Custody
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Establish secure self-custody with Bitcoin. Learn the fundamentals of hardware wallets, recovery planning, and long-term asset protection strategies that keep your digital wealth secure.
              </p>
              <Link 
                to="/bitcoin"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Explore Bitcoin
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Decentralized Finance (DeFi) */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 font-serif">
                Decentralized Finance (DeFi)
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Access lending and borrowing protocols with a structured, risk-aware approach. Learn how to optimize capital while maintaining security on Base and other networks.
              </p>
              <Link 
                to="/defi"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Explore DeFi
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bitcoin Node */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 font-serif">
                Bitcoin Node
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Connect to our self-hosted Bitcoin node for secure transactions and enhanced privacy. Access a full Bitcoin node for verification and transaction broadcasting.
              </p>
              <Link 
                to="/node"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Connect to our Bitcoin Node
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Knowledge Base / Crypto Guide */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 font-serif">
                Knowledge Base
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Concise resources and checklists for navigating self-custody, wallets, DeFi, and digital asset security. Comprehensive guides for all skill levels.
              </p>
              <Link 
                to="/cryptoguide"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Open Crypto Resource
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SolutionsPage;
