import React from 'react';
import { Link } from 'react-router-dom';

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif border-b-2 border-gray-200 pb-4">
            Legal Disclaimer
          </h1>
          <p className="text-gray-600 italic mb-8">Last updated: September 2025</p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">⚠️ IMPORTANT LEGAL NOTICE</h2>
            <p className="text-yellow-800 font-semibold">
              READ THIS DISCLAIMER CAREFULLY BEFORE USING OUR SERVICES.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Educational Purpose Only</h2>
            <p className="text-gray-700 mb-4">
              Muscadine provides educational content about Bitcoin security, self-custody, and decentralized finance (DeFi). 
              <strong> All information, content, and services are provided for educational purposes only.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Financial Advice</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <p className="text-red-800 font-semibold mb-2">
                WE DO NOT PROVIDE FINANCIAL ADVICE, INVESTMENT ADVICE, OR TRADING ADVICE.
              </p>
              <p className="text-red-700 mb-2">Nothing on this website or in our communications constitutes:</p>
              <ul className="text-red-700 list-disc list-inside space-y-1">
                <li>Financial advice or recommendations</li>
                <li>Investment advice or recommendations</li>
                <li>Trading advice or recommendations</li>
                <li>Tax advice or recommendations</li>
                <li>Legal advice or recommendations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. No Asset Custody</h2>
            <p className="text-gray-700 mb-4">
              <strong>We do not hold, store, or custody any digital assets or cryptocurrencies.</strong> 
              We provide educational guidance only. Users are responsible for their own asset security and custody.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibility</h2>
            <p className="text-gray-700 mb-4">By using our services, you acknowledge and agree that:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>You are solely responsible for your financial decisions</li>
              <li>You should consult with qualified financial professionals before making any financial decisions</li>
              <li>You understand the risks associated with Bitcoin and cryptocurrency investments</li>
              <li>You will not hold Muscadine liable for any financial losses</li>
              <li>You will conduct your own research and due diligence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. No Guarantees</h2>
            <p className="text-gray-700 mb-4">We make no guarantees, warranties, or representations regarding:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>The accuracy, completeness, or reliability of any information</li>
              <li>The success of any strategies or techniques discussed</li>
              <li>The performance of any digital assets or investments</li>
              <li>The security of any wallet or custody solutions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Risk Disclosure</h2>
            <p className="text-gray-700 mb-4">Bitcoin and cryptocurrency investments involve significant risks, including but not limited to:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Volatility and potential loss of principal</li>
              <li>Regulatory changes and legal uncertainty</li>
              <li>Technical risks and potential loss of access</li>
              <li>Market manipulation and fraud</li>
              <li>Tax implications and reporting requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 font-semibold mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MUSCADINE SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Any direct, indirect, incidental, or consequential damages</li>
              <li>Any financial losses or investment losses</li>
              <li>Any loss of data or digital assets</li>
              <li>Any errors or omissions in our content</li>
              <li>Any actions taken based on our educational content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. No Professional Relationship</h2>
            <p className="text-gray-700 mb-4">
              No professional relationship (financial advisor, investment advisor, attorney, or other) is created 
              between you and Muscadine through the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Content</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites or content. We are not responsible for the 
              accuracy, completeness, or reliability of such third-party content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Regulatory Compliance</h2>
            <p className="text-gray-700 mb-4">
              Users are responsible for ensuring compliance with all applicable laws and regulations in their 
              jurisdiction. We do not provide legal advice regarding regulatory compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Muscadine from any claims, damages, or expenses arising 
              from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              This disclaimer is governed by the laws of the United States. Any disputes shall be resolved 
              in the courts of the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of this disclaimer is found to be unenforceable, the remaining provisions 
              shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">If you have questions about this legal disclaimer, please contact us:</p>
              <p className="text-gray-700"><strong>Email:</strong> nickconnelly10@gmail.com</p>
              <p className="text-gray-700"><strong>Website:</strong> muscadine.box</p>
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Final Warning</h2>
            <p className="text-yellow-800 font-semibold">
              By continuing to use our services, you acknowledge that you have read, understood, and agree to be 
              bound by this legal disclaimer. If you do not agree with any part of this disclaimer, you must not use our services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Open Source</h2>
            <p className="text-gray-700 mb-4">
              This website and its educational content are open source. You can view the source code and contribute to the project:
            </p>
            <p className="text-gray-700">
              <strong>GitHub Repository:</strong>{' '}
              <a 
                href="https://github.com/nickconnelly10/muscadine.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://github.com/nickconnelly10/muscadine.box
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
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

export default LegalPage;
