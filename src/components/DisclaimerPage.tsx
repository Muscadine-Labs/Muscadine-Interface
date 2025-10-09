import React from 'react';
import { Link } from 'react-router-dom';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif">
            Disclaimer
          </h1>
          <p className="text-gray-600 text-sm mb-8">Last updated: September 2025</p>

          <div className="bg-red-50 border border-red-200 border-l-4 border-l-red-500 p-6 mb-8 rounded-lg">
            <h2 className="text-xl font-semibold text-red-700 mb-2">⚠️ IMPORTANT LEGAL NOTICE</h2>
            <p className="text-red-700 font-semibold">
              Muscadine provides educational content only. We do not provide financial, investment, or legal advice. 
              All information is for educational purposes and should not be considered as professional advice.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">1. Educational Purpose Only</h2>
            <p className="text-gray-600 mb-4">
              Muscadine is an educational platform focused on Bitcoin security, self-custody, and decentralized finance (DeFi). 
              All content, including guides, tutorials, and resources, is provided solely for educational purposes. This information is not intended to constitute:
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Financial advice or investment recommendations</li>
              <li>Legal advice or legal opinions</li>
              <li>Professional consultation services</li>
              <li>Endorsements of specific products or services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">2. No Investment Advice</h2>
            <p className="text-gray-600 mb-4">
              Nothing on this website should be construed as investment advice. Cryptocurrency investments carry significant risk, 
              including the potential for total loss of capital. Past performance does not guarantee future results. You should:
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Conduct your own research before making any financial decisions</li>
              <li>Consult with qualified financial advisors</li>
              <li>Only invest what you can afford to lose</li>
              <li>Understand the risks associated with cryptocurrency investments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">3. Bitcoin Node Services</h2>
            <p className="text-gray-600 mb-4">Our Bitcoin node services are provided for educational and privacy purposes. Users should understand that:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Node availability is not guaranteed 24/7</li>
              <li>We are not responsible for any losses due to node downtime</li>
              <li>Users are responsible for verifying their own transactions</li>
              <li>Node services may be discontinued at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">4. Self-Custody Risks</h2>
            <p className="text-gray-600 mb-4">Self-custody of cryptocurrency assets involves significant risks, including:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Loss of private keys or seed phrases</li>
              <li>Hardware wallet failures or damage</li>
              <li>User error in transaction execution</li>
              <li>Technical vulnerabilities in wallet software</li>
              <li>Physical security risks</li>
            </ul>
            <p className="text-gray-600 mb-4">Users are solely responsible for the security of their own assets and private keys.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">5. DeFi Protocol Risks</h2>
            <p className="text-gray-600 mb-4">Decentralized finance protocols carry additional risks beyond traditional investments:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Smart contract vulnerabilities and exploits</li>
              <li>Liquidity risks and impermanent loss</li>
              <li>Regulatory changes affecting protocol operations</li>
              <li>Market volatility and price fluctuations</li>
              <li>Technical failures in underlying blockchain networks</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">6. No Warranties</h2>
            <p className="text-gray-600 mb-4">Muscadine makes no warranties, express or implied, regarding:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>The accuracy, completeness, or reliability of information provided</li>
              <li>The availability or performance of our services</li>
              <li>The security of third-party protocols or services</li>
              <li>The outcomes of following our educational content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, Muscadine shall not be liable for any direct, indirect, incidental, 
              special, or consequential damages arising from:
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Use of our educational content or services</li>
              <li>Loss of cryptocurrency assets</li>
              <li>Technical failures or service interruptions</li>
              <li>Decisions made based on our content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">8. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">Our website may contain links to third-party services, protocols, or platforms. We do not:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Endorse or recommend specific third-party services</li>
              <li>Control or monitor third-party platforms</li>
              <li>Guarantee the security or performance of external services</li>
              <li>Assume responsibility for third-party actions or failures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">9. Regulatory Compliance</h2>
            <p className="text-gray-600 mb-4">Cryptocurrency regulations vary by jurisdiction and are subject to change. Users are responsible for:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Understanding applicable laws in their jurisdiction</li>
              <li>Complying with tax obligations</li>
              <li>Following regulatory requirements for cryptocurrency activities</li>
              <li>Seeking legal advice when necessary</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4 font-serif">10. Security Considerations</h2>
            <p className="text-gray-600 mb-4">
              While we provide educational content on security best practices, users must:
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
              <li>Implement their own security measures</li>
              <li>Keep software and hardware updated</li>
              <li>Use strong, unique passwords and 2FA where available</li>
              <li>Be cautious of phishing attempts and scams</li>
              <li>Verify all transactions before confirming</li>
            </ul>
          </section>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-3 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Reminder</h3>
            <p className="text-blue-700 font-semibold">
              Cryptocurrency and DeFi activities involve substantial risk of loss. Never invest more than you can afford to lose. 
              Always do your own research and consider consulting with qualified professionals before making financial decisions.
            </p>
          </div>

          <div className="bg-sky-50 p-6 rounded-lg mb-8 border border-sky-200">
            <h3 className="text-lg font-semibold text-sky-800 mb-2">Questions or Concerns</h3>
            <p className="text-sky-700">
              If you have questions about this disclaimer or our services, please contact us through our{' '}
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">
                contact page
              </Link>{' '}
              or email us directly.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm">
            <p className="mb-2">This disclaimer is subject to change without notice. Users are responsible for reviewing this page periodically for updates.</p>
            <p>© 2025 Muscadine. All rights reserved.</p>
          </div>

          <div className="mt-8 pt-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Muscadine
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
