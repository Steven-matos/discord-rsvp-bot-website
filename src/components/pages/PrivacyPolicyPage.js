import NavLink from '../NavLink';

const PrivacyPolicyPage = ({ setCurrentPage }) => (
  <section className="py-8">
    <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Privacy Policy</h1>
    <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 text-gray-300">
      <p className="mb-4">
        This Privacy Policy describes how RSVP Manager collects, uses, and discloses information when you use our bot on Discord.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">Information We Collect</h2>
      <p className="mb-4">
        RSVP Manager collects the following information to provide its services:
      </p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li><strong>Discord User IDs:</strong> To track RSVPs and manage admin access.</li>
        <li><strong>Discord Server IDs:</strong> To store server-specific configurations (event channels, times, schedules).</li>
        <li><strong>Event Details:</strong> Names of events, required gear, and vehicles as configured by server admins.</li>
        <li><strong>RSVP Status:</strong> Whether a user has RSVP'd Yes, No, Maybe, or Mobile for specific events.</li>
      </ul>
      <p className="mb-4">
        We do NOT collect any personal identifiable information beyond what is necessary for the bot's functionality. We do NOT store your Discord messages, IP addresses, or any sensitive personal data.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">How We Use Your Information</h2>
      <p className="mb-4">
        The information collected is used solely for the purpose of operating RSVP Manager and providing its features, including:
      </p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Managing weekly event schedules.</li>
        <li>Tracking and displaying RSVPs for events.</li>
        <li>Sending automated event reminders.</li>
        <li>Allowing administrators to configure and manage the bot.</li>
        <li>Diagnosing and troubleshooting bot issues.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">Data Storage</h2>
      <p className="mb-4">
        All bot data is stored securely using Supabase. Supabase provides robust security features and data encryption. We do not share your data with any third parties, except for the necessary interaction with the Discord API and Supabase for data storage.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">Data Retention</h2>
      <p className="mb-4">
        We retain your data for as long as your Discord server uses the bot or as long as necessary to fulfill the purposes for which it was collected. If the bot is removed from your server, or if you request data deletion, we will remove associated data from our database within a reasonable timeframe, unless legal obligations require longer retention.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">Your Rights</h2>
      <p className="mb-4">
        You have the right to request access to, correction of, or deletion of your data stored by the bot. Please contact us via our support channels to exercise these rights.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </p>
      <p className="mb-4">
        <strong>Last updated:</strong> July 21, 2025
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us through our support server or email provided on the Support page.
      </p>
    </div>
  </section>
);

export default PrivacyPolicyPage; 