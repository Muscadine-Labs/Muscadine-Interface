interface LoaderProps {
  size?: number;
  className?: string;
  message?: string;
  variant?: 'default' | 'dots' | 'pulse';
}

const Loader = ({ 
  size = 32, 
  className = "", 
  message = "Loading...",
  variant = 'default'
}: LoaderProps) => {
  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gold-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gold-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gold-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        );
      case 'pulse':
        return (
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-gold-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gold-600 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="w-3 h-3 bg-gold-600 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
        );
      default:
        return (
          <span
            className="animate-spin inline-block border-4 border-stone-300 border-t-gold-600 rounded-full"
            style={{ width: size, height: size }}
          ></span>
        );
    }
  };

  return (
    <div className={`flex flex-col justify-center items-center gap-3 ${className}`} style={{ minHeight: size * 2 }}>
      {renderLoader()}
      {message && (
        <p className="text-sm text-stone-600 animate-pulse">{message}</p>
      )}
    </div>
  );
};

export default Loader; 