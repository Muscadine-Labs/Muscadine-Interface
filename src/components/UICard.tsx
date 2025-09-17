import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface UICardProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
  buttonText?: string;
  buttonLink?: string;
  buttonOnClick?: () => void;
  iconBgColor?: string;
  buttonBgColor?: string;
  className?: string;
}

export default function UICard({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  buttonOnClick,
  iconBgColor = "from-gray-500 to-gray-600",
  buttonBgColor = "from-gray-500 to-gray-600",
  className = ""
}: UICardProps) {
  const buttonClasses = `inline-flex items-center px-8 py-4 bg-gradient-to-r ${buttonBgColor} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg`;

  const buttonElement = buttonText && (
    buttonLink ? (
      <Link to={buttonLink} className={buttonClasses}>
        {buttonText} →
      </Link>
    ) : buttonOnClick ? (
      <button onClick={buttonOnClick} className={buttonClasses}>
        {buttonText} →
      </button>
    ) : (
      <div className={buttonClasses}>
        {buttonText} →
      </div>
    )
  );

  return (
    <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-200 ${className}`}>
      <div className="text-center">
        <div className={`w-20 h-20 bg-gradient-to-br ${iconBgColor} rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-3xl font-light text-gray-900 mb-6 font-serif">{title}</h3>
        <div className="text-gray-700 mb-8 leading-relaxed text-lg">
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            description
          )}
        </div>
        {buttonElement}
      </div>
    </div>
  );
}
