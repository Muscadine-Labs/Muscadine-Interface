
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-light text-gray-900 leading-tight mb-8">Contact</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Whether it's Bitcoin, DeFi, or anything else in between, I enjoy connecting with others who share a passion for financial independence and growth.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-12 shadow-lg">
        <h2 className="font-light text-gray-800 leading-tight mb-12 text-center">Get in touch</h2>
        
        <div className="space-y-4">
          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a 
                href="mailto:nickconnelly10@gmail.com"
                className="text-lg text-gray-900 hover:text-gray-700 transition-colors duration-200 font-medium"
              >
                nickconnelly10@gmail.com
              </a>
            </div>
          </div>
          
          {/* LinkedIn */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <a 
                href="https://www.linkedin.com/in/nicholas-connelly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-900 hover:text-gray-700 transition-colors duration-200 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
