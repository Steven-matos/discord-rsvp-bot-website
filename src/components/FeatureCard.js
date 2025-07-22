const FeatureCard = ({ icon, title, description }) => (
  <div className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105 w-full max-w-full">
    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-6 w-fit">
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