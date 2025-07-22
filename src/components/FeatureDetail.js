const FeatureDetail = ({ title, description, icon }) => (
  <div className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50 flex items-start space-x-3 sm:space-x-4 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 w-full max-w-full">
    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 sm:p-3 rounded-xl text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300 break-words">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base break-words">{description}</p>
    </div>
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
);

export default FeatureDetail; 