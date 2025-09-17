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
  const buttonClasses = `inline-flex items-center px-6 py-3 bg-gradient-to-r ${buttonBgColor} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl`;

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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 ${className}`}>
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br ${iconBgColor} rounded-lg flex items-center justify-center mb-6 mx-auto shadow-md`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
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
