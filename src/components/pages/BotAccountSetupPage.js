const BotAccountSetupPage = () => {
  const BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1388283299562262559&permissions=1144344644123728&integration_type=0&scope=bot";

  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Bot Account Setup & Initial Configuration</h1>
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
        <p className="text-lg text-gray-300 mb-6">
          This section guides you through the essential steps to get RSVP Manager configured and running on your Discord server.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Step 1: Add the Bot to Your Server</h2>
        <ol className="list-decimal list-inside text-gray-300 text-lg mb-8 space-y-4">
          <li>
            <p className="font-semibold mb-4">Invite the bot to your Discord server:</p>
            <div className="flex justify-center mb-4">
              <a
                href={BOT_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
              >
                Invite RSVP Manager
              </a>
            </div>
            <p className="ml-4 mt-1">When inviting, ensure the bot is granted the following permissions:</p>
            <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
              <li>Send Messages</li>
              <li>Use Slash Commands</li>
              <li>Manage Messages (required for deleting previous posts and auto-cleanup)</li>
              <li>View Members</li>
              <li>Embed Links</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Step 2: Initial Bot Configuration on Discord</h2>
        <p className="text-lg text-gray-300 mb-4">
          Once the bot is in your server and running, use these commands to set up its core functionality:
        </p>
        <ol className="list-decimal list-inside text-gray-300 text-lg mb-8 space-y-4">
          <li>
            <p className="font-semibold">Choose where events will be posted:</p>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-md text-sm overflow-x-auto mt-2">
              <code>/set_event_channel #your-events-channel</code>
            </pre>
            <p className="ml-4 mt-1">Replace `#your-events-channel` with the actual channel where you want daily event announcements to appear.</p>
          </li>
          <li>
            <p className="font-semibold">Set your event start time:</p>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-md text-sm overflow-x-auto mt-2">
              <code>/set_event_time hour:20 minute:0</code>
            </pre>
            <p className="ml-4 mt-1">This example sets events to start at 8:00 PM Eastern Time. Adjust `hour` and `minute` as needed.</p>
          </li>
          <li>
            <p className="font-semibold">Set when daily RSVP posts appear (optional):</p>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-md text-sm overflow-x-auto mt-2">
              <code>/set_posting_time hour:9 minute:0</code>
            </pre>
            <p className="ml-4 mt-1">This sets when the daily RSVP posts are created (default is 9:00 AM Eastern). You can adjust this time.</p>
          </li>
          <li>
            <p className="font-semibold">Turn on reminders:</p>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-md text-sm overflow-x-auto mt-2">
              <code>/configure_reminders enabled:true four_pm:true one_hour:true fifteen_minutes:true</code>
            </pre>
            <p className="ml-4 mt-1">This command enables reminders at 4 PM, 1 hour before, and 15 minutes before events. Adjust parameters to your preference.</p>
          </li>
         
          <li>
            <p className="font-semibold">Set admin notification channel (important for bot health):</p>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-md text-sm overflow-x-auto mt-2">
              <code>/set_admin_channel #your-admin-alerts-channel</code>
            </pre>
            <p className="ml-4 mt-1">This ensures admins are notified if the weekly schedule is outdated or requires attention.</p>
          </li>
          <li>
            <p className="font-semibold">Create your weekly schedule:</p>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-md text-sm overflow-x-auto mt-2">
              <code>/setup_weekly_schedule</code>
            </pre>
            <p className="ml-4 mt-1">This is the crucial step where the bot will guide you through setting up events for each day of the week, including event names, required gear/outfits, and vehicles. It's recommended to do this after other basic settings are in place.</p>
          </li> 
          <li>
            <p className="font-semibold">View and edit your schedule (optional):</p>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-md text-sm overflow-x-auto mt-2">
              <code>/view_schedule</code>
            </pre>
            <p className="ml-4 mt-1">See your complete weekly schedule. Use `/edit_event [day]` to modify any event details.</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BotAccountSetupPage; 