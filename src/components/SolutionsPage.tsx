import { Link } from 'react-router-dom';
import UICard from './UICard';
import UISection from './UISection';

export default function SolutionsPage() {
  return (
    <UISection
      title="Solutions"
      subtitle="A collection of my work in Bitcoin security, DeFi solutions, and comprehensive crypto resources."
      className="py-12"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <UICard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
          }
          title="Connect to My Self-Hosted Bitcoin Node"
          description={
            <div>
              <p className="mb-4">Access our secure, self-hosted Bitcoin node for complete privacy and sovereignty. Validate your own transactions, run Electrum server, and maintain full control over your Bitcoin infrastructure without trusting third parties.</p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">Bitcoin Node Deployment</h5>
                <p className="text-green-800 text-sm">Run your own node for privacy and sovereignty</p>
              </div>
            </div>
          }
          buttonText="Access Bitcoin Node"
          buttonLink="/node"
          iconBgColor="from-green-500 to-green-600"
          buttonBgColor="from-green-500 to-green-600"
          className="h-full"
        />

        <UICard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
          title="Comprehensive Crypto Guide"
          description={
            <div>
              <p className="mb-4">Master the crypto ecosystem with our comprehensive resource library. From Bitcoin basics to advanced DeFi strategies, learn wallet security, recovery planning, multi-sig setups, and risk management—all in plain English.</p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-900 mb-2">Asset Security Management</h5>
                <p className="text-purple-800 text-sm">Helping secure and manage large crypto holdings</p>
              </div>
            </div>
          }
          buttonText="Open Crypto Guide"
          buttonLink="/cryptoguide"
          iconBgColor="from-purple-500 to-purple-600"
          buttonBgColor="from-purple-500 to-purple-600"
          className="h-full"
        />
      </div>
    </UISection>
  );
}
