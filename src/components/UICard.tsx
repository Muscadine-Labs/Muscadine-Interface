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
  className = ""
}: UICardProps) {
  const buttonClasses = `inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors`;

  const buttonElement = buttonText && (
    buttonLink ? (
      <Link to={buttonLink} className={buttonClasses}>
        {buttonText}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    ) : buttonOnClick ? (
      <button onClick={buttonOnClick} className={buttonClasses}>
        {buttonText}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    ) : (
      <div className={buttonClasses}>
        {buttonText}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    )
  );

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br ${iconBgColor} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="text-gray-600 mb-6 leading-relaxed">
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
