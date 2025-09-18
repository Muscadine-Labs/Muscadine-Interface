
interface AboutMuscadineProps {
  onNavigate: (tab: 'bitcoin' | 'defi') => void;
}

export default function AboutMuscadine({ onNavigate: _onNavigate }: AboutMuscadineProps) {
  return (
    <div className="max-w-none text-gray-700 space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="text-left mb-8 md:mb-0">
          <h1 className="font-light text-gray-900 leading-tight font-serif">Muscadine</h1>
        </div>
        <div className="text-right">
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Financial self-sovereignty
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-10 rounded-lg">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto text-center">
          Muscadine, founded by a university student, is dedicated to helping individuals take control of their financial future through Bitcoin security, self-custody, and DeFi solutions. I provide support with Bitcoin node deployment, secure asset management, and onboarding into decentralized finance, ensuring people can navigate the new financial system.
        </p>
        
        <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-2xl mx-auto">
          <p className="text-gray-800 font-medium text-center text-xl">
            Trusted with securing over $12 million in digital assets
          </p>
        </div>
      </div>
      
    </div>
  );
}
