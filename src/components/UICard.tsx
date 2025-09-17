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
  const buttonClasses = `text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm`;

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
    <div className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 ${className}`}>
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br ${iconBgColor} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="text-gray-600 mb-6 leading-relaxed text-sm">
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
