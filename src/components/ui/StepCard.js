import { GRADIENTS } from '../../constants';

/**
 * Step card component for displaying setup steps in a visual timeline
 * @param {Object} props - Component props
 * @param {number} props.step - Step number
 * @param {string} props.title - Step title
 * @param {React.ReactNode} props.children - Step content
 * @param {boolean} props.isLast - Whether this is the last step (affects timeline rendering)
 * @returns {JSX.Element} StepCard component
 */
const StepCard = ({ step, title, children, isLast = false }) => (
  <div className="relative mb-6 sm:mb-8 w-full max-w-4xl mx-auto">
    <div className="flex items-start space-x-3 sm:space-x-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`bg-gradient-to-r ${GRADIENTS.primary} text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-lg shadow-lg`}>
          {step}
        </div>
        {!isLast && (
          <div className={`w-0.5 h-12 sm:h-16 bg-gradient-to-b ${GRADIENTS.primary} mt-3 sm:mt-4`}></div>
        )}
      </div>
      <div className="flex-1 min-w-0 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 break-words">{title}</h3>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default StepCard; 