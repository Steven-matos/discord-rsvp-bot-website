import { GRADIENTS } from '../../constants';

/**
 * Reusable tab button component for navigation
 * @param {Object} props - Component props
 * @param {string} props.id - Tab identifier
 * @param {string} props.label - Tab label text
 * @param {string} props.icon - Tab emoji icon
 * @param {boolean} props.isActive - Whether tab is currently active
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} TabButton component
 */
const TabButton = ({ id, label, icon, isActive, onClick }) => {
  /**
   * Handle tab button click
   */
  const handleClick = () => {
    onClick(id);
  };

  /**
   * Handle keydown events for accessibility
   * @param {KeyboardEvent} event - Keyboard event
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl transition-all duration-300 font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap flex-shrink-0 ${
        isActive
          ? `bg-gradient-to-r ${GRADIENTS.primary} text-white shadow-lg transform scale-105`
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white hover:shadow-md'
      }`}
      role="tab"
      aria-selected={isActive}
      aria-label={`${label} tab`}
      tabIndex={0}
    >
      <span className="text-sm sm:text-lg lg:text-xl">{icon}</span>
      <span className="text-xs sm:text-sm lg:text-lg font-medium">{label}</span>
    </button>
  );
};

export default TabButton; 