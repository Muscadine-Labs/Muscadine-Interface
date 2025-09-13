import React from 'react';

const CryptoPlan = () => {
  return (
    <div className="min-h-screen bg-marble py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-stone-900 font-serif mb-4">
              Crypto Plan
            </h1>
            <p className="text-stone-600 text-lg">
              Strategic roadmap for cryptocurrency investments and portfolio management
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Placeholder content - replace with actual PDF content */}
            <div className="bg-stone-50 border-2 border-dashed border-stone-300 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-stone-700 mb-4">
                PDF Content Placeholder
              </h2>
              <p className="text-stone-600 mb-4">
                The content from Crypto-Plan.pdf will be displayed here.
              </p>
              <p className="text-sm text-stone-500">
                Please replace this placeholder with the actual content from your PDF document.
              </p>
            </div>

            {/* Example structure - replace with actual content */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-stone-800 mb-4">Investment Strategy</h2>
                <p className="text-stone-700 leading-relaxed">
                  [Content from PDF page 1 will go here]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-stone-800 mb-4">Portfolio Allocation</h2>
                <p className="text-stone-700 leading-relaxed">
                  [Content from PDF page 2 will go here]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-stone-800 mb-4">Risk Management</h2>
                <p className="text-stone-700 leading-relaxed">
                  [Content from PDF page 3 will go here]
                </p>
              </section>
            </div>

            {/* Download link for original PDF */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="text-center">
                <a
                  href="/Crypto-Plan.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Original PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPlan;
