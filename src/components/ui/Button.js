'use client';

import { GRADIENTS, STYLES } from '../../constants';

/**
 * Reusable Button component with consistent styling and accessibility
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.href - External link URL (optional)
 * @param {string} props.variant - Button variant: 'primary' | 'secondary'
 * @param {string} props.size - Button size: 'sm' | 'md' | 'lg'
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.ariaLabel - Accessibility label
 * @param {Object} props.rest - Additional props
 * @returns {JSX.Element} Button component
 */
const Button = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  ariaLabel,
  ...rest 
}) => {
  /**
   * Handle button click events
   * @param {Event} event - Click event
   */
  const handleClick = (event) => {
    if (disabled) return;
    if (href && !onClick) return; // Let link handle navigation
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  /**
   * Handle keydown events for accessibility
   * @param {KeyboardEvent} event - Keyboard event
   */
  const handleKeyDown = (event) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onClick) onClick(event);
    }
  };

  const baseClasses = STYLES.button.base;
  
  const variantClasses = {
    primary: `${STYLES.button.primary} bg-gradient-to-r ${GRADIENTS.primary} hover:${GRADIENTS.primaryHover}`,
    secondary: STYLES.button.secondary
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none' : '';

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  // Render as external link
  if (href && !onClick) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClasses}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={finalClasses}
      disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 