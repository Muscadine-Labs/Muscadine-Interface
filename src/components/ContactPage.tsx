
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">Contact</h1>
        <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Whether it's Bitcoin, DeFi, or anything else in between, I enjoy connecting with others who share a passion for financial independence and growth.
        </p>
      </div>
      
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Get in touch</h2>
        
        <div className="mb-8">
          <a 
            href="mailto:nickconnelly10@gmail.com"
            className="text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          >
            nickconnelly10@gmail.com
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/nicholas-connelly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/nicklutk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/nicholasconnelly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://www.instagram.com/nicholasconnelly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
        
        <div className="mt-12">
          <a 
            href="https://nicholasconnelly.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Substack
          </a>
        </div>
      </div>
    </div>
  );
}
