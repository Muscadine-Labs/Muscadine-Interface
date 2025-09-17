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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UICard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
          }
            title="Bitcoin Node Deployment"
            description="Operate a dedicated Bitcoin node for improved privacy, verification, and sovereignty. Learn how to deploy and maintain a hardened node securely."
            buttonText="Review Node Options"
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
            title="Knowledge Base"
            description="Concise resources and checklists for navigating self-custody, wallets, DeFi, and digital asset security."
            buttonText="Open Knowledge Base"
          buttonLink="/cryptoguide"
          iconBgColor="from-purple-500 to-purple-600"
          buttonBgColor="from-purple-500 to-purple-600"
          className="h-full"
        />
      </div>
    </UISection>
  );
}
