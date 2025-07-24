import GradientIcon from './ui/GradientIcon';
import { STYLES, GRADIENTS } from '../constants';

/**
 * Feature detail component for displaying detailed feature information
 * @param {Object} props - Component props
 * @param {string} props.icon - Emoji icon for the feature
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @returns {JSX.Element} FeatureDetail component
 */
const FeatureDetail = ({ icon, title, description }) => (
  <div className={`${STYLES.card.base} ${GRADIENTS.cardBg} p-6 rounded-2xl shadow-lg border border-gray-700/50 ${STYLES.card.hover} h-full`}>
    <div className="flex flex-col h-full">
      <GradientIcon size="lg" className="mb-4 self-start">
        {icon}
      </GradientIcon>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-sm flex-grow">
        {description}
      </p>
    </div>
  </div>
);

export default FeatureDetail; 