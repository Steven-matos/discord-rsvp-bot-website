'use client';

import React, { useState } from 'react';
import FeatureDetail from '../FeatureDetail';
import CommandTable from '../CommandTable';
import TabButton from '../ui/TabButton';
import SectionHeader from '../ui/SectionHeader';
import CodeBlock from '../ui/CodeBlock';
import StepCard from '../ui/StepCard';
import Button from '../ui/Button';
import { BOT_INVITE_URL, GRADIENTS, STYLES } from '../../constants';

/**
 * Documentation page component with tabbed interface for features, commands, setup, and advanced topics
 * @returns {JSX.Element} DocumentationPage component
 */
const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState('features');

  /**
   * Tab configuration for navigation
   * @constant {Array}
   */
  const tabs = [
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'commands', label: 'Commands', icon: '🛠️' },
    { id: 'setup', label: 'Setup Guide', icon: '🚀' },
    { id: 'advanced', label: 'Advanced', icon: '⚙️' }
  ];

  /**
   * Features data configuration
   * @constant {Array}
   */
  const featuresData = [
    {
      title: "Weekly Planning",
      description: "Define your community's weekly schedule with custom events for each day. Specify event names, required gear/outfits, and even vehicles for games like GTA Online.",
      icon: "📅"
    },
    {
      title: "Easy RSVPs",
      description: "Streamlined RSVP process with interactive buttons: ✅ Yes, ❌ No,❓ Maybe, and 📱 Mobile. Members can easily update their status anytime.",
      icon: "🎯"
    },
    {
      title: "Smart Reminders",
      description: "Configurable automatic reminders sent at 4 PM Eastern, 1 hour before the event, and 15 minutes before, ensuring no one misses out.",
      icon: "⏰"
    },
    {
      title: "Mobile Friendly",
      description: "A dedicated 'Mobile' RSVP option caters specifically to users on mobile devices, improving accessibility and participation.",
      icon: "📱"
    },
    {
      title: "Attendance Tracking",
      description: "Quickly view who has RSVP'd for today's or yesterday's events with simple commands, providing clear attendance insights.",
      icon: "👥"
    },
    {
      title: "Automatic Posts",
      description: "Set it and forget it! The bot automatically posts daily event announcements at your chosen time (default: 9:00 AM Eastern).",
      icon: "🔄"
    },
    {
      title: "Manual Override",
      description: "Admins can manually trigger today's RSVP post using `/force_post_rsvp` in case of any automatic posting issues, with real-time progress updates.",
      icon: "🔧"
    },
    {
      title: "Admin Access",
      description: "A special user ID (300157754012860425) has full admin command access, providing a reliable backup for server management.",
      icon: "👑"
    },
    {
      title: "Event Editing",
      description: "Admins can easily modify existing events for any day using `/edit_event`, with changes taking effect immediately for future posts.",
      icon: "✏️"
    },
    {
      title: "Performance & Reliability",
      description: "Enhanced command performance with parallel database queries, smart caching, and robust error handling for Discord interaction timeouts.",
      icon: "⚡"
    },
    {
      title: "Automatic Cleanup",
      description: "The bot automatically deletes previous RSVP posts before creating new ones, keeping your channels tidy.",
      icon: "🧹"
    },
    {
      title: "Enhanced Error Handling",
      description: "Replaced cryptic database errors with clear, actionable messages for DNS, connection, authentication, and service unavailability issues, including specific troubleshooting steps.",
      icon: "🚨"
    },
    {
      title: "RSVP System Workflow",
      description: "Daily workflow: Bot posts events → Members click buttons (✅ Yes, ❌ No, ❓ Maybe, 📱 Mobile) → Smart reminders sent → Attendance tracking. Supports multiple posts per day with aggregated responses.",
      icon: "🔄"
    },
    {
      title: "Advanced Reminder System",
      description: "Three configurable reminder types: 4:00 PM Eastern (daily awareness), 1-hour before event (preparation), and 15-minute before (last chance). All individually controllable.",
      icon: "⏰"
    },
    {
      title: "Data Persistence & Security",
      description: "All schedules and RSVP responses stored securely in Supabase with encryption. Historical attendance data preserved permanently. Admin-only command restrictions with user ID verification.",
      icon: "🔐"
    }
  ];

  /**
   * Command groups configuration
   * @constant {Array}
   */
  const commandGroups = [
    {
      title: "Admin Commands",
      icon: "👑",
      color: "purple",
      whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
      commands: [
        { command: '`/setup_weekly_schedule`', description: 'Create or change your weekly events.' },
        { command: '`/view_schedule`', description: 'View the current weekly schedule.' },
        { command: '`/edit_event [day]`', description: 'Edit an existing event for any day.' },
        { command: '`/set_event_channel`', description: 'Choose where events are posted.' },
        { command: '`/set_event_time`', description: 'Set what time events start (e.g., `hour:20 minute:0`).' },
        { command: '`/set_posting_time`', description: 'Set when daily RSVP posts are created (e.g., `hour:9 minute:0`).' },
        { command: '`/configure_reminders`', description: 'Control when reminders are sent (e.g., `enabled:true four_pm:true`).' },
        { command: '`/set_admin_channel`', description: 'Set the channel for admin notifications about schedule issues.' },
        { command: '`/force_post_rsvp`', description: 'Manually post today\'s RSVP if automatic posting fails.' },
        { command: '`/delete_message`', description: 'Delete a specific message by its message ID.' },
        { command: '`/cleanup_old_posts`', description: 'Manually remove old event posts while preserving RSVP data.' },
        { command: '`/reset_setup`', description: 'Clear stuck weekly schedule setup process if interrupted.' },
        { command: '`/list_commands`', description: 'See all available commands.' },
        { command: '`/force_sync`', description: 'Fix command display issues on Discord.' },
      ]
    },
    {
      title: "Member Commands",
      icon: "👥",
      color: "green",
      whoCanUse: "Everyone",
      commands: [
        { command: '✅ Yes', description: '"I\'m coming!" (Button RSVP)' },
        { command: '❌ No', description: '"I can\'t make it" (Button RSVP)' },
        { command: '❓ Maybe', description: '"I might come" (Button RSVP)' },
        { command: '📱 Mobile', description: '"I\'m coming, but on mobile" (Button RSVP)' },
        { command: '`/view_rsvps`', description: 'See who\'s coming to today\'s event.' },
        { command: '`/view_yesterday_rsvps`', description: 'Check yesterday\'s attendance.' },
      ]
    },
    {
      title: "Monitoring & Diagnostics",
      icon: "📊",
      color: "orange",
      whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
      commands: [
        { command: '`/bot_status`', description: 'Check the bot\'s current status, uptime, and connection health.' },
        { command: '`/monitor_status`', description: 'Get detailed monitoring information including memory, CPU, and performance metrics.' },
        { command: '`/test_connection`', description: 'Test the bot\'s connection to Discord and database.' },
        { command: '`/debug_auto_posting`', description: 'Diagnose automatic posting problems with timing and schedule status.' },
        { command: '`/restart_daily_task`', description: 'Restart automatic posting system if daily posts stop working.' },
        { command: '`/rate_limit_status`', description: 'Check Discord rate limiting status with recommendations for large servers.' },
        { command: '`/server_settings`', description: 'Display all bot configuration settings for your server.' },
      ]
    }
  ];

  /**
   * Render features section
   * @returns {JSX.Element} Features section
   */
  const renderFeatures = () => (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      <SectionHeader 
        title="Powerful Features"
        subtitle="Everything you need to manage Discord events and RSVPs with professional-grade automation"
        icon="⚡"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 w-full max-w-full">
        {featuresData.map((feature, index) => (
          <div key={index} className="transform hover:scale-105 transition-transform duration-300 w-full max-w-full">
            <FeatureDetail {...feature} />
          </div>
        ))}
      </div>
    </div>
  );

  /**
   * Render commands section
   * @returns {JSX.Element} Commands section
   */
  const renderCommands = () => (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      <SectionHeader 
        title="Command Reference"
        subtitle="Complete guide to all bot commands, organized by permission level for easy reference"
        icon="🛠️"
      />

      <div className="space-y-8 sm:space-y-12 px-4 w-full max-w-full">
        {commandGroups.map((group, index) => (
          <div key={index} className={`bg-gradient-to-r from-${group.color}-900/20 to-blue-900/20 rounded-2xl p-4 sm:p-6 lg:p-8 border border-${group.color}-500/20`}>
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-${group.color}-400 flex items-center`}>
              <span className="mr-2 sm:mr-3 text-lg sm:text-xl lg:text-2xl">{group.icon}</span>
              {group.title}
            </h3>
            <CommandTable
              commands={group.commands}
              whoCanUse={group.whoCanUse}
            />
          </div>
        ))}
      </div>
    </div>
  );

  /**
   * Render setup section
   * @returns {JSX.Element} Setup section
   */
  const renderSetup = () => (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      <SectionHeader 
        title="Getting Started"
        subtitle="Complete setup guide to get your RSVP Manager configured and running perfectly"
        icon="🚀"
      />

      <div className="w-full px-4 max-w-full">
        <StepCard step={1} title="Technical Requirements & Bot Invitation">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-blue-300 mb-3 text-sm sm:text-base">Technical Requirements:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Discord Server (with admin permissions)</li>
                <li>• Database storage via Supabase (free tier available)</li>
                <li>• Basic command knowledge for advanced features</li>
              </ul>
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Start by adding RSVP Manager to your Discord server with the proper permissions.
            </p>
            
            <div className="flex justify-center mb-4 sm:mb-6">
              <Button
                href={BOT_INVITE_URL}
                variant="primary"
                size="lg"
                ariaLabel="Invite RSVP Manager to your Discord server"
              >
                🤖 Invite RSVP Manager
              </Button>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 border border-gray-700/50">
              <h4 className="font-semibold text-yellow-400 mb-2 sm:mb-3 text-sm sm:text-base">Required Permissions:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Send Messages</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Use Slash Commands</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Manage Messages</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>View Members</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Embed Links</li>
              </ul>
            </div>
          </div>
        </StepCard>

        <StepCard step={2} title="Configure Event Channel">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Choose where your daily event announcements will be posted.
            </p>
            <CodeBlock 
              code="/set_event_channel #your-events-channel"
              description="Replace #your-events-channel with your preferred announcement channel"
            />
          </div>
        </StepCard>

        <StepCard step={3} title="Set Event Timing">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Configure when your events start and when announcements are posted.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <h5 className="font-medium text-blue-400 mb-2 text-sm sm:text-base">Event Start Time</h5>
                <CodeBlock 
                  code="/set_event_time hour:20 minute:0"
                  description="Sets events to start at 8:00 PM Eastern"
                />
              </div>
              <div>
                <h5 className="font-medium text-blue-400 mb-2 text-sm sm:text-base">Daily Post Time</h5>
                <CodeBlock 
                  code="/set_posting_time hour:9 minute:0"
                  description="Posts announcements at 9:00 AM Eastern"
                />
              </div>
            </div>
          </div>
        </StepCard>

        <StepCard step={4} title="Enable Smart Reminders">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Activate automatic reminders to boost event attendance.
            </p>
            <CodeBlock 
              code="/configure_reminders enabled:true four_pm:true one_hour:true fifteen_minutes:true"
              description="Enables reminders at 4 PM, 1 hour before, and 15 minutes before events"
            />
          </div>
        </StepCard>

        <StepCard step={5} title="Set Admin Notifications">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Configure where important bot health notifications are sent.
            </p>
            <CodeBlock 
              code="/set_admin_channel #admin-alerts"
              description="Ensures admins receive notifications about schedule issues"
            />
          </div>
        </StepCard>

        <StepCard step={6} title="Create Your Weekly Schedule" isLast={true}>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Set up your community's weekly events with this comprehensive command.
            </p>
            <CodeBlock 
              code="/setup_weekly_schedule"
              description="Interactive setup for each day's events, gear requirements, and vehicles"
            />
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4 w-full">
              <p className="text-blue-300 font-medium text-sm sm:text-base">💡 Pro Tips</p>
              <div className="text-gray-300 mt-1 text-xs sm:text-sm break-words space-y-2">
                <p>Use <code className="bg-gray-800 px-1 py-0.5 sm:px-2 sm:py-1 rounded text-green-400 text-xs break-all">/view_schedule</code> to review your setup and <code className="bg-gray-800 px-1 py-0.5 sm:px-2 sm:py-1 rounded text-green-400 text-xs break-all">/edit_event [day]</code> to make changes anytime.</p>
                <p>Example weekly schedule: Monday = "Raid Night" | Combat Gear | Tank</p>
                <p>The bot uses Eastern Time for all scheduling and reminders.</p>
              </div>
            </div>
          </div>
        </StepCard>
      </div>
    </div>
  );

  /**
   * Render advanced section
   * @returns {JSX.Element} Advanced section
   */
  const renderAdvanced = () => (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      <SectionHeader 
        title="Advanced Features & Best Practices"
        subtitle="Master advanced functionality and optimize your bot setup for the best community experience"
        icon="⚙️"
      />

      <div className="px-4 w-full max-w-full space-y-8 sm:space-y-12">
        {/* Advanced Features */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-6 sm:p-8 border border-purple-500/20">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-400 flex items-center">
            <span className="mr-3 text-2xl">🔧</span>
            Advanced Features
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-blue-300">Multiple Posts Per Day</h4>
              <p className="text-gray-300">Bot handles multiple manual posts for the same event, aggregating RSVP responses across all posts. Useful for re-posting if the original is deleted.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-blue-300">Automatic Cleanup</h4>
              <p className="text-gray-300">Removes Discord messages older than yesterday while preserving all RSVP data in the database. Keeps channels clean without losing attendance history.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-blue-300">Performance Monitoring</h4>
              <p className="text-gray-300">Real-time bot health metrics, memory and CPU usage tracking, connection quality monitoring, and automatic error recovery.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-blue-300">Timezone Handling</h4>
              <p className="text-gray-300">All times use Eastern Time Zone with automatic daylight saving time adjustment. Clear time displays show both Eastern and UTC.</p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-2xl p-6 sm:p-8 border border-green-500/20">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-400 flex items-center">
            <span className="mr-3 text-2xl">✨</span>
            Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">1.</span>
                <p className="text-gray-300">Set up weekly schedules at the start of each week for consistency</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">2.</span>
                <p className="text-gray-300">Monitor bot status regularly with diagnostic commands</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">3.</span>
                <p className="text-gray-300">Use cleanup commands to maintain channel organization</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">4.</span>
                <p className="text-gray-300">Test changes with debug commands before events</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">5.</span>
                <p className="text-gray-300">Keep Supabase project active and updated</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">6.</span>
                <p className="text-gray-300">Review attendance trends with yesterday RSVP commands</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">7.</span>
                <p className="text-gray-300">Configure appropriate reminder timing for your community</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">8.</span>
                <p className="text-gray-300">Space out admin commands during peak times to avoid rate limits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-6 sm:p-8 border border-red-500/20">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-red-400 flex items-center">
            <span className="mr-3 text-2xl">🔒</span>
            Security Features
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-orange-300">Admin Command Restrictions</h4>
              <p className="text-gray-300">Critical commands are restricted to server admins and specific approved user IDs (300157754012860425) for enhanced security.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-orange-300">Database Encryption</h4>
              <p className="text-gray-300">All data stored in Supabase with encryption. Environment variables protected. No sensitive personal data beyond Discord IDs collected.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-orange-300">Permission-Based Access</h4>
              <p className="text-gray-300">User ID verification system ensures only authorized users can access admin features. Automatic permission checking for all operations.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-orange-300">Error Handling</h4>
              <p className="text-gray-300">Comprehensive error handling with automatic recovery from connection issues. Clear error messages without exposing sensitive system information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full max-w-full">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${GRADIENTS.background} py-12 sm:py-16 md:py-20`}>
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
        <div className="relative z-10 text-center px-4">
          <h1 className={`${STYLES.text.heroTitle} ${STYLES.text.gradient} ${GRADIENTS.textExtended} mb-4 sm:mb-6`}>
            Documentation
          </h1>
          <p className={`${STYLES.text.description} max-w-4xl mx-auto`}>
            Everything you need to master RSVP Manager and create engaging Discord events for your community
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 sm:top-20 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 py-4 sm:py-6">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-center items-center w-full">
            <div className="flex space-x-2 sm:space-x-4 lg:space-x-6 justify-center" role="tablist">
              {tabs.map((tab) => (
                <TabButton 
                  key={tab.id}
                  id={tab.id} 
                  label={tab.label} 
                  icon={tab.icon} 
                  isActive={activeTab === tab.id} 
                  onClick={setActiveTab} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-full">
        <div className="transition-all duration-500 ease-in-out w-full" role="tabpanel">
          {activeTab === 'features' && renderFeatures()}
          {activeTab === 'commands' && renderCommands()}
          {activeTab === 'setup' && renderSetup()}
          {activeTab === 'advanced' && renderAdvanced()}
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage; 