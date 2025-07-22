const SupportPage = () => (
  <section className="py-8">
    <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Support & Troubleshooting</h1>
    <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
      <p className="text-lg text-gray-300 mb-6">
        If you encounter any issues or have questions about RSVP Manager, please refer to the troubleshooting steps below. If your problem persists, you can reach out for further assistance.
      </p>

      <h2 className="text-3xl font-semibold mb-6 text-purple-400">Common Troubleshooting Steps</h2>
      <ul className="list-disc list-inside text-gray-300 text-lg mb-8 space-y-4">
        <li>
          <p className="font-semibold">Bot Won't Start?</p>
          <p className="ml-4">Check your `.env` file for correct Supabase and Discord token information. Ensure you've installed all requirements with `pip install -r requirements.txt`.</p>
        </li>
        <li>
          <p className="font-semibold">Commands Not Showing Up?</p>
          <p className="ml-4">Use `/force_sync` to refresh commands. Verify the bot has "Use Slash Commands" permission. It might take up to 1 hour for Discord to update.</p>
        </li>
        <li>
          <p className="font-semibold">Setup Commands Failing with "Interaction Already Acknowledged"?</p>
          <p className="ml-4">This error has been fixed in the latest update. If it persists, try running the command again. The bot now handles Discord's interaction timing automatically, and failed setups clean up their state for immediate retries.</p>
        </li>
        <li>
          <p className="font-semibold">Database Errors?</p>
          <p className="ml-4">Double-check your Supabase URL and key in `.env`. Make sure all SQL files were run in Supabase and your project is active. The bot now provides clear error messages for DNS, connection, and authentication issues.</p>
        </li>
        <li>
          <p className="font-semibold">Reminders Not Working?</p>
          <p className="ml-4">Check reminder settings with `/configure_reminders`. Ensure an event time is set with `/set_event_time` and the bot can send messages in your event channel.</p>
        </li>
        <li>
          <p className="font-semibold">RSVP Posts Not Appearing?</p>
          <p className="ml-4">Use `/force_post_rsvp` for manual posting. Verify bot permissions (Send Messages, Embed Links, Manage Messages) and that the event channel and weekly schedule are configured.</p>
        </li>
        <li>
          <p className="font-semibold">Permission Issues?</p>
          <p className="ml-4">The bot needs "Send Messages", "Embed Links", and "Manage Messages" in the event channel. Ask a server admin to grant these. Remember, user ID 300157754012860425 has full admin command access.</p>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-6 text-purple-400">Need Further Help?</h2>
      <p className="text-lg text-gray-300 mb-4">
        If the troubleshooting steps don't resolve your issue, please join our official support server or contact us directly.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://discord.gg/your-support-server-invite" // Replace with your actual support server invite
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
        >
          Join Support Server
        </a>
        <a
          href="mailto:support@yourbotdomain.com" // Replace with your actual support email
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
        >
          Email Support
        </a>
      </div>
    </div>
  </section>
);

export default SupportPage; 