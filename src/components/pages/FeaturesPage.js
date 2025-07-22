import FeatureDetail from '../FeatureDetail';

const FeaturesPage = () => (
  <section className="py-8">
    <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Bot Features</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FeatureDetail
        title="Weekly Planning"
        description="Define your community's weekly schedule with custom events for each day. Specify event names, required gear/outfits, and even vehicles for games like GTA Online."
        icon="📅"
      />
      <FeatureDetail
        title="Easy RSVPs"
        description="Streamlined RSVP process with interactive buttons: ✅ Yes, ❌ No,❓ Maybe, and 📱 Mobile. Members can easily update their status anytime."
        icon="🎯"
      />
      <FeatureDetail
        title="Smart Reminders"
        description="Configurable automatic reminders sent at 4 PM Eastern, 1 hour before the event, and 15 minutes before, ensuring no one misses out."
        icon="⏰"
      />
      <FeatureDetail
        title="Mobile Friendly"
        description="A dedicated 'Mobile' RSVP option caters specifically to users on mobile devices, improving accessibility and participation."
        icon="📱"
      />
      <FeatureDetail
        title="Attendance Tracking"
        description="Quickly view who has RSVP'd for today's or yesterday's events with simple commands, providing clear attendance insights."
        icon="👥"
      />
      <FeatureDetail
        title="Automatic Posts"
        description="Set it and forget it! The bot automatically posts daily event announcements at your chosen time (default: 9:00 AM Eastern)."
        icon="🔄"
      />
      <FeatureDetail
        title="Manual Override"
        description="Admins can manually trigger today's RSVP post using `/force_post_rsvp` in case of any automatic posting issues, with real-time progress updates."
        icon="🔧"
      />
      <FeatureDetail
        title="Admin Access"
        description="A special user ID (300157754012860425) has full admin command access, providing a reliable backup for server management."
        icon="👑"
      />
      <FeatureDetail
        title="Event Editing"
        description="Admins can easily modify existing events for any day using `/edit_event`, with changes taking effect immediately for future posts."
        icon="✏️"
      />
      <FeatureDetail
        title="Performance & Reliability"
        description="Enhanced command performance with parallel database queries, smart caching, and robust error handling for Discord interaction timeouts."
        icon="⚡"
      />
      <FeatureDetail
        title="Automatic Cleanup"
        description="The bot automatically deletes previous RSVP posts before creating new ones, keeping your channels tidy."
        icon="🧹"
      />
      <FeatureDetail
        title="Enhanced Error Handling"
        description="Replaced cryptic database errors with clear, actionable messages for DNS, connection, authentication, and service unavailability issues, including specific troubleshooting steps."
        icon="🚨"
      />
    </div>
  </section>
);

export default FeaturesPage; 