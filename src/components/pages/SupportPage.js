'use client';

import { useState } from 'react';

const SupportPage = () => {
  // State for tracking checklist completion
  const [checkedItems, setCheckedItems] = useState({
    invite: false,
    roleHierarchy: false,
    eventChannel: false,
    eventSettings: false,
    permissions: false
  });

  // Toggle checklist item
  const toggleChecklistItem = (itemKey) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };
  const SupportCard = ({ icon, title, description, className = "" }) => (
    <div className={`group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}>
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300 leading-tight text-center">{title}</h3>
      <div className="text-gray-300 leading-relaxed space-y-3">
        {description}
      </div>
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  const TroubleshootingItem = ({ title, solution }) => (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
      <h4 className="font-semibold text-lg text-blue-300 mb-3">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{solution}</p>
    </div>
  );

  const ChecklistItem = ({ children, completed = false, onClick, itemKey }) => (
    <div
      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors duration-200 cursor-pointer group"
      onClick={() => onClick && onClick(itemKey)}
    >
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${completed
          ? 'bg-gradient-to-r from-green-500 to-green-400 border-green-500 scale-110'
          : 'border-gray-500 hover:border-blue-400 group-hover:scale-110'
        }`}>
        {completed && (
          <svg className="w-4 h-4 text-white animate-fade-in-up" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`leading-relaxed transition-colors duration-200 ${completed ? 'text-green-300 line-through' : 'text-gray-300 group-hover:text-white'
        }`}>
        {children}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen w-full max-w-full">
      {/* Premium Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 py-16 sm:py-20 lg:py-24">
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
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full text-4xl sm:text-5xl">
              🛠️
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight animate-fade-in-up word-wrap-normal">
            Support & Troubleshooting
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Having trouble with RSVP Manager? Find quick solutions, troubleshooting guides, and get the help you need
          </p>
        </div>
      </div>

      {/* Support Options Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight py-2 word-wrap-normal">
              Get Help Fast
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the best way to get support for your specific needs
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="w-full max-w-lg">
              <SupportCard
                icon="💬"
                title="Community Support"
                description={
                  <div className="space-y-6 text-center">
                    <p className="text-lg leading-relaxed">Join our Discord server for general questions, community help, and bot usage guidance.</p>
                    <p className="text-base text-gray-400 leading-relaxed">• General bot questions • Setup help • Community tips • Feature requests</p>
                    <div className="pt-6">
                      <a
                        href="https://discord.gg/2EXEwfnXqG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out btn-premium text-lg"
                      >
                        Join Support Server
                      </a>
                    </div>
                  </div>
                }
              />
            </div>

            {/* <SupportCard
              icon="📧"
              title="Technical Support"
              description={
                <div className="space-y-4">
                  <p>Email our technical team for server errors, hosting issues, or complex technical problems.</p>
                  <p className="text-sm text-gray-400">• Server errors • Database issues • Bot hosting problems • Technical bugs</p>
                  <div className="pt-4">
        <a
          href="mailto:support@rsvp-manager.com"
                      className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out btn-premium"
                    >
                      Email Support Team
                    </a>
                  </div>
                </div>
              }
            /> */}
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full text-3xl">
                🔧
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight py-2 word-wrap-normal">
              Common Issues & Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Quick fixes for the most frequently encountered problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <TroubleshootingItem
              title="Bot Not Responding to Commands?"
              solution="Make sure the bot is online (green status) and you're using slash commands (type '/' to see available commands). Wait a few minutes and try again - sometimes Discord needs time to sync."
            />

            <TroubleshootingItem
              title="Can't See Slash Commands?"
              solution="The bot needs 'Use Slash Commands' permission in your server. Ask a server admin to check the bot's role permissions. Commands may take up to 1 hour to appear after adding the bot."
            />

            <TroubleshootingItem
              title="RSVP Posts Not Showing Up?"
              solution="Check that the bot has permission to send messages and embed links in your event channel. Make sure you've set up an event channel using the setup commands first."
            />

            <TroubleshootingItem
              title="Reminders Not Working?"
              solution="Verify that you've set an event time and configured reminders. The bot needs permission to send messages in your event channel. Check your reminder settings with the configure commands."
            />

            <TroubleshootingItem
              title="Permission Errors?"
              solution="The bot needs these permissions in your event channel: 'Send Messages', 'Embed Links', and 'Manage Messages'. Ask a server admin to grant these permissions to the bot's role."
            />

            <TroubleshootingItem
              title="Bot Suddenly Stopped Working?"
              solution="Check if the bot is still in your server and has the necessary permissions. Server permission changes or role updates can affect bot functionality."
            />

            <TroubleshootingItem
              title="Automatic Posting Not Working?"
              solution="Use /debug_auto_posting to diagnose issues. Verify weekly schedule is configured, check event channel permissions, confirm posting time settings, and try /restart_daily_task if needed."
            />

            <TroubleshootingItem
              title="Database Connection Errors?"
              solution="Verify your Supabase project is active and accessible. Check SUPABASE_URL and SUPABASE_KEY environment variables. Use /test_connection to diagnose connectivity issues. Ensure database tables are properly created."
            />

            <TroubleshootingItem
              title="Rate Limiting Issues?"
              solution="Use /rate_limit_status to check server risk level. Avoid frequent /view_rsvps commands in large servers (500+ members). The bot includes automatic rate limiting protection - space out admin commands during peak times."
            />

            <TroubleshootingItem
              title="Commands Not Syncing?"
              solution="Use /force_sync to refresh command registration with Discord. Commands may take up to 1 hour to appear after adding the bot. Check that the bot has 'Use Slash Commands' permission in your server."
            />

            <TroubleshootingItem
              title="Setup Process Stuck?"
              solution="If weekly schedule setup gets interrupted or stuck, use /reset_setup to clear the process and start fresh. This won't delete existing schedules, just clears any incomplete setup states."
            />
          </div>
        </div>
      </section>

      {/* Setup Checklist Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full text-3xl">
                  ✅
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 word-wrap-normal">
                Quick Setup Checklist
              </h3>
              <p className="text-lg text-gray-300">
                Make sure you've completed these essential steps
              </p>
            </div>

            <div className="space-y-4">
              <ChecklistItem
                completed={checkedItems.invite}
                onClick={toggleChecklistItem}
                itemKey="invite"
              >
                Bot has been invited to your server with proper permissions
              </ChecklistItem>
              <ChecklistItem
                completed={checkedItems.roleHierarchy}
                onClick={toggleChecklistItem}
                itemKey="roleHierarchy"
              >
                Bot role is positioned high enough in the role hierarchy
              </ChecklistItem>
              <ChecklistItem
                completed={checkedItems.eventChannel}
                onClick={toggleChecklistItem}
                itemKey="eventChannel"
              >
                Event channel has been configured using <code className="bg-gray-700 px-2 py-1 rounded text-green-400">/set_event_channel</code>
              </ChecklistItem>
              <ChecklistItem
                completed={checkedItems.eventSettings}
                onClick={toggleChecklistItem}
                itemKey="eventSettings"
              >
                Basic event settings have been set up with <code className="bg-gray-700 px-2 py-1 rounded text-green-400">/setup_weekly_schedule</code>
              </ChecklistItem>
              <ChecklistItem
                completed={checkedItems.permissions}
                onClick={toggleChecklistItem}
                itemKey="permissions"
              >
                Bot can send messages in your designated event channel
              </ChecklistItem>
            </div>

            {/* Progress indicator */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-300 font-medium">Setup Progress</span>
                <span className="text-blue-300 text-sm">
                  {Object.values(checkedItems).filter(Boolean).length} / {Object.keys(checkedItems).length}
                </span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(Object.values(checkedItems).filter(Boolean).length / Object.keys(checkedItems).length) * 100}%`
                  }}
                />
              </div>
              {Object.values(checkedItems).every(Boolean) && (
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                    🎉 Setup Complete! Your bot should be ready to use.
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💡</div>
                <div>
                  <p className="text-blue-300 font-medium mb-2">Pro Tip</p>
                  <p className="text-gray-300 leading-relaxed">
                    If you're still having issues after completing this checklist, try running the setup commands again or join our support server for personalized help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-yellow-700/30 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full text-4xl">
                🚨
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 word-wrap-normal">
              Critical Issues?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              For urgent technical problems affecting your server or bot functionality, our technical support team is here to help
            </p>
            <a
              href="https://discord.gg/2EXEwfnXqG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out text-lg btn-premium"
            >
              🔥 Join the Support Server
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage; 