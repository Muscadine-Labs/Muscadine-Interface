import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4 text-center font-serif">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8 text-center"><strong>Last updated:</strong> January 2025</p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8 rounded">
            <p className="text-yellow-800 font-semibold">
              <strong>IMPORTANT DISCLAIMER:</strong> By using Muscadine's services, you acknowledge that all content is for educational and informational purposes only. We are not medical professionals, financial advisors, or legal experts. Use of our services does not create any professional relationship.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Muscadine's website and services, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              2. Educational Purpose Only
            </h2>
            <p className="text-gray-700 mb-4">
              Muscadine is a free, open-source educational platform providing information about health, cryptocurrency, and decentralized finance. 
              All content is for educational purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              3. Health Resources Services Disclaimer
            </h2>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-4 rounded">
              <p className="text-yellow-800 font-semibold">
                <strong>MEDICAL DISCLAIMER:</strong> Our health recommendations are based on peer-reviewed research but are NOT medical advice. 
                They should never replace professional medical consultation, diagnosis, or treatment.
              </p>
            </div>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Health recommendations are for educational purposes only</li>
              <li>We do not provide medical diagnosis, treatment, or cure</li>
              <li>Individual health outcomes may vary significantly</li>
              <li>Always consult qualified healthcare professionals for medical decisions</li>
              <li>We are not responsible for any health outcomes from following our recommendations</li>
              <li>Users assume all risks associated with health-related decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              4. Cryptocurrency and DeFi Disclaimer
            </h2>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-4 rounded">
              <p className="text-yellow-800 font-semibold">
                <strong>FINANCIAL DISCLAIMER:</strong> Cryptocurrency and DeFi information is for educational purposes only. 
                We are not financial advisors, and this is not financial advice.
              </p>
            </div>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Not financial advice or investment recommendations</li>
              <li>Cryptocurrency investments are highly speculative and risky</li>
              <li>You can lose all or part of your investment</li>
              <li>Past performance does not guarantee future results</li>
              <li>Consult qualified financial advisors for investment decisions</li>
              <li>We are not responsible for any financial losses</li>
              <li>Users assume all risks associated with cryptocurrency activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              5. No Professional Relationship
            </h2>
            <p className="text-gray-700 mb-4">
              Use of our services does not create any professional relationship between you and Muscadine. 
              We are not your doctors, financial advisors, or legal counsel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              6. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Use our services for educational purposes only</li>
              <li>Consult appropriate professionals for medical, financial, or legal decisions</li>
              <li>Not rely solely on our content for critical life decisions</li>
              <li>Understand that all information is provided "as is" without warranties</li>
              <li>Accept responsibility for your own decisions and actions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">To the maximum extent permitted by law, Muscadine shall not be liable for any:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Direct, indirect, incidental, or consequential damages</li>
              <li>Health outcomes from following our recommendations</li>
              <li>Financial losses from cryptocurrency activities</li>
              <li>Decisions made based on our educational content</li>
              <li>Interruption or cessation of service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              8. Indemnification
            </h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Muscadine from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              9. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              Our content is provided under open-source licenses. You may use, modify, and distribute our code according to the applicable license terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              10. Third-Party Links
            </h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              11. Service Availability
            </h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain service availability but do not guarantee uninterrupted access. We may modify, suspend, or discontinue services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We may update these terms from time to time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              13. Governing Law
            </h2>
            <p className="text-gray-700 mb-4">
              These terms are governed by applicable laws. Any disputes shall be resolved in the appropriate jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              14. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these terms, contact us at:{' '}
              <a href="mailto:contact@muscadine.box" className="text-orange-600 hover:text-orange-800 underline">
                contact@muscadine.box
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
              15. Severability
            </h2>
            <p className="text-gray-700 mb-4">
              If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold transition-colors"
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

export default TermsPage;
