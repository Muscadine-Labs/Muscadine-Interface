import { ReactNode } from 'react';

interface UISectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export default function UISection({
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "max-w-6xl mx-auto",
  background = 'white'
}: UISectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-r from-gray-50 to-gray-100"
  };

  return (
    <section className={`py-12 ${backgroundClasses[background]} ${className}`}>
      <div className={containerClassName}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
