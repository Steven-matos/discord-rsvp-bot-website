import FeatureCard from '../FeatureCard';

const HomePage = () => {
  const BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1388283299562262559&permissions=1144344644123728&integration_type=0&scope=bot";

  return (
    <section className="text-center py-12 md:py-24">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse-fade-in">
        Organize Your Community Events with Ease
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
        A powerful Discord bot that helps your community organize weekly events with easy RSVP tracking, automatic reminders, and support for mobile users. Perfect for gaming groups, clubs, or any community that meets regularly!
      </p>
      <a
        href={BOT_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
      >
        Add RSVP Manager to Your Server
      </a>

      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📅"
            title="Weekly Planning"
            description="Set up your events for each day of the week (like 'Monday Raid Night' or 'Wednesday Training')."
          />
          <FeatureCard
            icon="🎯"
            title="Easy RSVPs"
            description="Members can quickly respond with Yes, No, Maybe, or Mobile with just one click."
          />
          <FeatureCard
            icon="⏰"
            title="Smart Reminders"
            description="Automatically reminds people about upcoming events at configurable times."
          />
          <FeatureCard
            icon="📱"
            title="Mobile Friendly"
            description="Special RSVP option for members on mobile devices, ensuring everyone can participate."
          />
          <FeatureCard
            icon="👥"
            title="Attendance Tracking"
            description="See exactly who's coming to each event with clear attendance lists."
          />
          <FeatureCard
            icon="🔄"
            title="Automatic Posts"
            description="Posts daily events automatically so you don't have to remember, saving you time."
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage; 