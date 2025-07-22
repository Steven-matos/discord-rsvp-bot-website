const FeatureDetail = ({ title, description, icon }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex items-start space-x-4">
    <div className="text-4xl flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default FeatureDetail; 