const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition duration-300 ease-in-out">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default FeatureCard; 