'use client';

import FeatureCard from '../FeatureCard';

const HomePage = () => {
  const BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1388283299562262559&permissions=1144344644123728&integration_type=0&scope=bot";

  return (
    <div className="min-h-screen w-full max-w-full">
      {/* Premium Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px), 
                                   radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
                 backgroundSize: '50px 50px',
                 backgroundPosition: '0 0, 25px 25px'
               }}>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight animate-fade-in-up word-wrap-normal">
            Organize Your Community Events with Ease
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            A powerful Discord bot that helps your community organize weekly events with easy RSVP tracking, automatic reminders, and support for mobile users. Perfect for gaming groups, clubs, or any community that meets regularly!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href={BOT_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-lg btn-premium"
            >
              🚀 Add RSVP Manager to Your Server
            </a>
            <button 
              onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 text-white font-medium py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features-section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full text-4xl">
                ⚡
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight py-2 word-wrap-normal">
              Powerful Key Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to create engaging community events that bring people together
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <FeatureCard
              icon="📅"
              title="Weekly Planning"
              description="Set up your events for each day of the week (like 'Monday Raid Night' or 'Wednesday Training'). Create consistent schedules your community can rely on."
            />
            <FeatureCard
              icon="🎯"
              title="Easy RSVPs"
              description="Members can quickly respond with Yes, No, Maybe, or Mobile with just one click. Simple, intuitive, and accessible for everyone."
            />
            <FeatureCard
              icon="⏰"
              title="Smart Reminders"
              description="Automatically reminds people about upcoming events at configurable times. Never miss another community gathering again."
            />
            <FeatureCard
              icon="📱"
              title="Mobile Friendly"
              description="Special RSVP option for members on mobile devices, ensuring everyone can participate regardless of their device."
            />
            <FeatureCard
              icon="👥"
              title="Attendance Tracking"
              description="See exactly who's coming to each event with clear attendance lists. Plan better with accurate headcounts."
            />
            <FeatureCard
              icon="🔄"
              title="Automatic Posts"
              description="Posts daily events automatically so you don't have to remember, saving you time and ensuring consistency."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700/50 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 word-wrap-normal">
              Ready to Transform Your Community Events?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of communities already using RSVP Manager to organize better events
            </p>
            <a
              href={BOT_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-lg btn-premium"
            >
              Get Started Now - It's Free!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 