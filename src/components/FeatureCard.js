import { GRADIENTS, STYLES, ANIMATIONS } from '../constants';

/**
 * Feature card component displaying individual feature information
 * @param {Object} props - Component props
 * @param {string} props.icon - Emoji icon for the feature
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @returns {JSX.Element} FeatureCard component
 */
const FeatureCard = ({ icon, title, description }) => (
  <div className={`group relative ${STYLES.card.base} ${GRADIENTS.cardBg} p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700/50 ${STYLES.card.hover} w-full max-w-full`}>
    <div className={`bg-gradient-to-br ${GRADIENTS.iconBg} p-4 rounded-xl text-4xl sm:text-5xl flex-shrink-0 ${ANIMATIONS.scaleHoverLarge} mb-6 w-fit`}>
      {icon}
    </div>
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{description}</p>
    </div>
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
);

export default FeatureCard; 