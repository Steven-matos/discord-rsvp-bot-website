/**
 * Code block component for displaying code snippets with descriptions
 * @param {Object} props - Component props
 * @param {string} props.code - Code snippet to display
 * @param {string} props.description - Optional description for the code
 * @returns {JSX.Element} CodeBlock component
 */
const CodeBlock = ({ code, description }) => (
  <div className="bg-gray-900/80 border border-gray-700/50 rounded-lg p-3 sm:p-4 backdrop-blur-sm w-full">
    <div className="text-green-400 text-xs sm:text-sm mb-2 break-all font-mono leading-relaxed">
      {code}
    </div>
    {description && (
      <p className="text-gray-400 text-xs sm:text-sm break-words">{description}</p>
    )}
  </div>
);

export default CodeBlock; 