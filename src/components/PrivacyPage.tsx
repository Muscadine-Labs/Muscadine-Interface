import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif border-b-2 border-gray-200 pb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 italic mb-8">Last updated: September 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Muscadine ("we," "our," or "us") is committed to protecting your privacy. We collect minimal information necessary to provide our educational services:
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li><strong>Contact Information:</strong> Email addresses provided voluntarily through contact forms</li>
              <li><strong>Usage Data:</strong> Basic website analytics to improve user experience</li>
              <li><strong>Communication Records:</strong> Correspondence related to our educational services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information solely for:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Providing educational content about Bitcoin security and DeFi</li>
              <li>Responding to inquiries about our services</li>
              <li>Improving our website and educational materials</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information only:
            </p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use minimal cookies for essential website functionality. You can disable cookies in your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">If you have questions about this Privacy Policy, please contact us:</p>
              <p className="text-gray-700"><strong>Email:</strong> contact@muscadine.box</p>
              <p className="text-gray-700"><strong>Website:</strong> muscadine.box</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> Muscadine provides educational content only. We do not provide financial advice, 
              investment recommendations, or custody services. All information is for educational purposes only. Users are 
              responsible for their own financial decisions and should consult with qualified professionals before making any financial decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Open Source</h2>
            <p className="text-gray-700 mb-4">
              This website and its educational content are open source. You can view the source code and contribute to the project:
            </p>
            <p className="text-gray-700">
              <strong>GitHub Repository:</strong>{' '}
              <a 
                href="https://github.com/Muscadine-Labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://github.com/Muscadine-Labs
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

export default PrivacyPage;
