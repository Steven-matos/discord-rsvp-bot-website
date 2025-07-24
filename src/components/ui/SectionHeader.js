import { GRADIENTS, STYLES } from '../../constants';

/**
 * Reusable section header component with consistent styling
 * @param {Object} props - Component props
 * @param {string} props.title - Header title text
 * @param {string} props.subtitle - Header subtitle text (optional)
 * @param {string} props.icon - Emoji icon for the header
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} SectionHeader component
 */
const SectionHeader = ({ title, subtitle, icon, className = '' }) => {
  return (
    <div className={`text-center mb-8 sm:mb-12 px-4 ${className}`}>
      {icon && (
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className={`bg-gradient-to-r ${GRADIENTS.primary} p-3 sm:p-4 rounded-full text-2xl sm:text-4xl`}>
            {icon}
          </div>
        </div>
      )}
      <h2 className={`${STYLES.text.sectionTitle} ${STYLES.text.gradient} ${GRADIENTS.text} mb-3 sm:mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${STYLES.text.description} max-w-3xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader; 