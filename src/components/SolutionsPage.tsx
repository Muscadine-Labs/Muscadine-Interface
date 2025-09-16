export default function SolutionsPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Solutions</h1>
        <p className="text-xl text-gray-600">
          Professional Bitcoin and DeFi services to secure your digital assets
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Bitcoin Node Deployment</h3>
            <p className="text-blue-800 mb-4">
              Run your own node for privacy and sovereignty. Complete Bitcoin node installation and configuration with Electrum server integration.
            </p>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Full node setup and configuration</li>
              <li>• Electrum server integration</li>
              <li>• Privacy and security optimization</li>
              <li>• Ongoing maintenance and support</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Secure Self-Custody Tools</h3>
            <p className="text-green-800 mb-4">
              Wallet setups with institutional-grade protection. Cold storage setup, seed phrase management, and multi-signature wallet configuration.
            </p>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Hardware wallet setup</li>
              <li>• Multi-signature configuration</li>
              <li>• Seed phrase security protocols</li>
              <li>• Backup and recovery strategies</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">DeFi Onboarding</h3>
            <p className="text-purple-800 mb-4">
              Lending, borrowing, and navigating decentralized finance. Safe DeFi protocol integration and yield farming strategy implementation.
            </p>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Protocol selection and setup</li>
              <li>• Risk assessment and management</li>
              <li>• Yield farming strategies</li>
              <li>• Portfolio optimization</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-900 mb-3">Asset Security Management</h3>
            <p className="text-orange-800 mb-4">
              Helping secure and manage large crypto holdings. Comprehensive security audits and ongoing asset management.
            </p>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Security audits and assessments</li>
              <li>• Large holding management</li>
              <li>• Risk mitigation strategies</li>
              <li>• Emergency response protocols</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg text-center mb-8">
          <p className="text-gray-800 font-medium text-lg">
            Trusted with securing over $12 million in digital assets
          </p>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact me for a free consultation to discuss your Bitcoin and DeFi needs.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
