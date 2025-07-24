import { GRADIENTS } from '../constants';

/**
 * Navigation link component with active state styling
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Link content
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.setIsMobileMenuOpen - Function to close mobile menu
 * @param {string} props.currentPage - Current active page
 * @param {string} props.targetPage - Target page for this link
 * @returns {JSX.Element} NavLink component
 */
const NavLink = ({ 
  children, 
  onClick, 
  className = "", 
  setIsMobileMenuOpen, 
  currentPage, 
  targetPage 
}) => {
  const isActive = currentPage === targetPage;
  
  /**
   * Handle link click events
   * @param {Event} event - Click event
   */
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(); // Close mobile menu on click
    }
  };

  /**
   * Handle keydown events for accessibility
   * @param {KeyboardEvent} event - Keyboard event
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  const baseClasses = "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105";
  const activeClasses = `bg-gradient-to-r ${GRADIENTS.iconBg} text-blue-300 border border-blue-500/30 shadow-lg`;
  const inactiveClasses = "text-gray-300 hover:text-white hover:bg-gray-700/50 border border-transparent hover:border-gray-600/30";

  return (
    <a
      href="#"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`}
      role="button"
      tabIndex={0}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      
      {/* Active indicator */}
      {isActive && (
        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r ${GRADIENTS.text} rounded-full`}></div>
      )}
    </a>
  );
};

export default NavLink; 