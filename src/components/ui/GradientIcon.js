import { GRADIENTS, ANIMATIONS } from '../../constants';

/**
 * Reusable gradient icon wrapper component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Icon content (emoji, SVG, etc.)
 * @param {string} props.size - Icon size: 'sm' | 'md' | 'lg' | 'xl'
 * @param {boolean} props.hover - Enable hover animation
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} GradientIcon component
 */
const GradientIcon = ({ children, size = 'md', hover = true, className = '' }) => {
  const sizeClasses = {
    sm: 'p-2 text-lg',
    md: 'p-3 text-2xl sm:text-3xl',
    lg: 'p-4 text-3xl sm:text-4xl',
    xl: 'p-4 sm:p-6 text-4xl sm:text-5xl'
  };

  const hoverClasses = hover ? ANIMATIONS.scaleHoverLarge : '';

  return (
    <div className={`bg-gradient-to-br ${GRADIENTS.iconBg} rounded-xl ${sizeClasses[size]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default GradientIcon; 