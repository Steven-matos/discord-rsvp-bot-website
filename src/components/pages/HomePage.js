'use client';

import FeatureCard from '../FeatureCard';
import Button from '../ui/Button';
import { BOT_INVITE_URL, GRADIENTS, STYLES } from '../../constants';

/**
 * Home page component displaying hero section, features, and call-to-action
 * @returns {JSX.Element} HomePage component
 */
const HomePage = () => {
  /**
   * Handle smooth scroll to features section
   */
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Feature cards configuration for the features section
   * @constant {Array}
   */
  const featureCards = [
    {
      icon: "📅",
      title: "Weekly Planning",
      description: "Set up your events for each day of the week (like 'Monday Raid Night' or 'Wednesday Training'). Create consistent schedules your community can rely on."
    },
    {
      icon: "🎯",
      title: "Easy RSVPs",
      description: "Members can quickly respond with Yes, No, Maybe, or Mobile with just one click. Simple, intuitive, and accessible for everyone."
    },
    {
      icon: "⏰",
      title: "Smart Reminders",
      description: "Automatically reminds people about upcoming events at configurable times. Never miss another community gathering again."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Special RSVP option for members on mobile devices, ensuring everyone can participate regardless of their device."
    },
    {
      icon: "👥",
      title: "Attendance Tracking",
      description: "See exactly who's coming to each event with clear attendance lists. Plan better with accurate headcounts."
    },
    {
      icon: "🔄",
      title: "Automatic Posts",
      description: "Posts daily events automatically so you don't have to remember, saving you time and ensuring consistency."
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-full">
      {/* Premium Hero Section */}
      <div className={`relative bg-gradient-to-br ${GRADIENTS.background} py-20 sm:py-24 lg:py-32`}>
        <div className="absolute inset-0 opacity-40">
          <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS.iconBg} via-transparent to-purple-500/5`}></div>
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
          <h1 className={`${STYLES.text.heroTitle} ${STYLES.text.gradient} ${GRADIENTS.textExtended} mb-6 sm:mb-8`}>
            Organize Your Community Events with Ease
          </h1>
          <p className={`${STYLES.text.description} mb-8 sm:mb-10 max-w-4xl mx-auto`}>
            A powerful Discord bot that helps your community organize weekly events with easy RSVP tracking, automatic reminders, and support for mobile users. Perfect for gaming groups, clubs, or any community that meets regularly!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              href={BOT_INVITE_URL}
              variant="primary"
              size="lg"
              ariaLabel="Add RSVP Manager to your Discord server"
            >
              🚀 Add RSVP Manager to Your Server
            </Button>
            <Button 
              onClick={handleScrollToFeatures}
              variant="secondary"
              size="lg"
              ariaLabel="Learn more about RSVP Manager features"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features-section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex justify-center mb-4">
              <div className={`bg-gradient-to-r ${GRADIENTS.primary} p-4 rounded-full text-4xl`}>
                ⚡
              </div>
            </div>
            <h2 className={`${STYLES.text.sectionTitle} ${STYLES.text.gradient} ${GRADIENTS.text} mb-4`}>
              Powerful Key Features
            </h2>
            <p className={`${STYLES.text.description} max-w-3xl mx-auto`}>
              Everything you need to create engaging community events that bring people together
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {featureCards.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${STYLES.card.base} ${GRADIENTS.cardBg} rounded-3xl p-8 sm:p-12 border border-gray-700/50 shadow-2xl`}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 word-wrap-normal">
              Ready to Transform Your Community Events?
            </h3>
            <p className={`${STYLES.text.description} mb-8`}>
              Join thousands of communities already using RSVP Manager to organize better events
            </p>
            <Button
              href={BOT_INVITE_URL}
              variant="primary"
              size="lg"
              ariaLabel="Get started with RSVP Manager - it's free"
            >
              Get Started Now - It's Free!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 