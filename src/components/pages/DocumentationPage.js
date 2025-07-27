'use client';

import React, { useState } from 'react';
import FeatureDetail from '../FeatureDetail';
import CommandTable from '../CommandTable';
import TabButton from '../ui/TabButton';
import SectionHeader from '../ui/SectionHeader';
import CodeBlock from '../ui/CodeBlock';
import StepCard from '../ui/StepCard';
import Button from '../ui/Button';
import { BOT_INVITE_URL, GRADIENTS, STYLES, COMMAND_GROUPS } from '../../constants';

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
      title: "Weekly Event Planning",
      description: "Set up recurring events for each day of the week with comprehensive details including event names, required gear/outfits, and vehicles. Perfect for gaming communities, training sessions, and regular meetups.",
      icon: "📅"
    },
    {
      title: "Intelligent RSVP System",
      description: "Four-button RSVP system: ✅ Yes, ❌ No, ❓ Maybe, and 📱 Mobile. Smart aggregation across multiple posts per day with real-time attendance tracking and member name display.",
      icon: "🎯"
    },
    {
      title: "Multi-Layer Reminder System",
      description: "Three configurable reminder types: 4:00 PM Eastern (daily awareness), 1-hour before event (preparation), and 15-minute before (last chance). Each individually controllable for optimal engagement.",
      icon: "⏰"
    },
    {
      title: "Advanced Reporting & Analytics",
      description: "Comprehensive attendance analysis with midweek reports (Monday-Wednesday) and full weekly reports. Track participation patterns, identify consistent attendees, and monitor community engagement trends.",
      icon: "📊"
    },
    {
      title: "Automated Daily Operations",
      description: "Fully automated daily workflow: posts events at configured times, manages RSVP responses, sends smart reminders, and maintains clean channels with automatic cleanup of old posts.",
      icon: "🔄"
    },
    {
      title: "Professional Command Structure",
      description: "Organized command system with /list_commands for everyday use and /list_help for advanced troubleshooting. Commands grouped by functionality: setup, management, reporting, and diagnostics.",
      icon: "🛠️"
    },
    {
      title: "Comprehensive Troubleshooting",
      description: "Built-in diagnostic tools including connection testing, auto-posting debugging, reminder system analysis, and performance monitoring. Self-healing capabilities with automatic error recovery.",
      icon: "🔧"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-level admin access control, encrypted data storage via Supabase, environment variable protection, and permission-based command restrictions. No sensitive personal data collection beyond Discord IDs.",
      icon: "🔐"
    },
    {
      title: "Real-Time Performance Monitoring",
      description: "Live bot health metrics including uptime tracking, memory usage, CPU statistics, connection quality monitoring, and Discord rate limiting status with recommendations for large servers.",
      icon: "⚡"
    },
    {
      title: "Flexible Event Management",
      description: "Easy event editing with /edit_event, schedule viewing, manual posting capabilities, and support for multiple event formats. Changes take effect immediately with comprehensive validation.",
      icon: "✏️"
    },
    {
      title: "Smart Data Persistence",
      description: "All schedules and RSVP responses permanently stored in Supabase. Historical attendance data preserved while Discord messages are cleaned up. Perfect for long-term community analytics.",
      icon: "💾"
    },
    {
      title: "Mobile-First Design",
      description: "Dedicated mobile RSVP option, responsive command interface, and optimized performance for users on mobile devices. Enhanced accessibility features throughout the system.",
      icon: "📱"
    },
    {
      title: "Timezone Intelligence",
      description: "All operations use Eastern Time with automatic daylight saving time adjustment. Clear time displays show both Eastern and UTC. Intelligent scheduling prevents conflicts.",
      icon: "🌍"
    },
    {
      title: "Community Engagement Tools",
      description: "Member name tracking, non-responder identification, participation rate calculations, perfect attendance recognition, and engagement pattern analysis to boost community involvement.",
      icon: "👥"
    },
    {
      title: "Maintenance-Free Operation",
      description: "Automatic cleanup routines, self-healing error recovery, background task management, and comprehensive logging. Designed to run continuously with minimal intervention required.",
      icon: "🧹"
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
        subtitle="Comprehensive guide to all bot commands, organized by functionality and permission level"
        icon="🛠️"
      />

      <div className="space-y-8 sm:space-y-12 px-4 w-full max-w-full">
        {COMMAND_GROUPS.map((group, index) => (
          <div key={index} className={`bg-gradient-to-r from-${group.color}-900/20 to-blue-900/20 rounded-2xl p-4 sm:p-6 lg:p-8 border border-${group.color}-500/20`}>
            <div className="mb-4 sm:mb-6">
              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 text-${group.color}-400 flex items-center`}>
                <span className="mr-2 sm:mr-3 text-lg sm:text-xl lg:text-2xl">{group.icon}</span>
                {group.title}
              </h3>
              {group.subtitle && (
                <p className="text-gray-400 text-sm sm:text-base italic">{group.subtitle}</p>
              )}
            </div>
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

        {/* RSVP System Workflow */}
        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 sm:p-8 border border-blue-500/20">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400 flex items-center">
            <span className="mr-3 text-2xl">🔄</span>
            RSVP System Workflow
          </h3>
          <div className="space-y-6">
            <div className="bg-blue-800/20 rounded-lg p-4 border border-blue-400/20">
              <h4 className="text-xl font-medium text-blue-300 mb-3">Daily Workflow Process</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center"><span className="text-blue-400 mr-2">1.</span>Bot automatically posts daily events at configured time</p>
                  <p className="text-gray-300 flex items-center"><span className="text-blue-400 mr-2">2.</span>Members click RSVP buttons (✅ Yes, ❌ No, ❓ Maybe, 📱 Mobile)</p>
                  <p className="text-gray-300 flex items-center"><span className="text-blue-400 mr-2">3.</span>Bot sends reminders based on your settings</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center"><span className="text-blue-400 mr-2">4.</span>Admins view attendance with <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/view_rsvps</code></p>
                  <p className="text-gray-300 flex items-center"><span className="text-blue-400 mr-2">5.</span>Generate comprehensive reports for analysis</p>
                  <p className="text-gray-300 flex items-center"><span className="text-blue-400 mr-2">6.</span>Automatic cleanup maintains channel organization</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-cyan-300">RSVP Options</h4>
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-green-400">✅ YES</span> - "I'm attending the event"</p>
                  <p className="text-gray-300"><span className="text-red-400">❌ NO</span> - "I can't make it today"</p>
                  <p className="text-gray-300"><span className="text-yellow-400">❓ MAYBE</span> - "I might attend, not certain"</p>
                  <p className="text-gray-300"><span className="text-blue-400">📱 MOBILE</span> - "I'm attending but on mobile device"</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-cyan-300">Automatic Features</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">• Daily event posts at configured time</p>
                  <p className="text-gray-300">• Smart reminders (4PM, 1-hour, 15-min before)</p>
                  <p className="text-gray-300">• Automatic cleanup of old posts</p>
                  <p className="text-gray-300">• Weekly schedule validation</p>
                  <p className="text-gray-300">• Admin notifications for missing schedules</p>
                </div>
              </div>
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
                <p className="text-gray-300">Set up weekly schedules at start of each week</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">2.</span>
                <p className="text-gray-300">Monitor bot status regularly with <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> diagnostic commands</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">3.</span>
                <p className="text-gray-300">Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> cleanup commands to maintain organization</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">4.</span>
                <p className="text-gray-300">Test changes with <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> debug commands before events</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">5.</span>
                <p className="text-gray-300">Keep Supabase project active and updated</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">6.</span>
                <p className="text-gray-300">Review trends with <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/view_yesterday_rsvps</code> and weekly reports</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">7.</span>
                <p className="text-gray-300">Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/midweek_rsvp_report</code> on Wednesdays for early-week engagement</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">8.</span>
                <p className="text-gray-300">Generate <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/weekly_rsvp_report</code> on Sundays for full analysis</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">9.</span>
                <p className="text-gray-300">Follow up with members in "No Response" lists</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 font-bold">10.</span>
                <p className="text-gray-300">Access troubleshooting via <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> for organized problem-solving</p>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting Guide */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-2xl p-6 sm:p-8 border border-yellow-500/20">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-yellow-400 flex items-center">
            <span className="mr-3 text-2xl">🚨</span>
            Common Issues & Solutions
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-800/20 rounded-lg p-4 border border-yellow-400/20">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Commands Not Showing</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>1. Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> then <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/force_sync</code></p>
                  <p>2. Check bot permissions in server settings</p>
                  <p>3. Wait up to 1 hour for Discord to update</p>
                </div>
              </div>
              <div className="bg-yellow-800/20 rounded-lg p-4 border border-yellow-400/20">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Automatic Posting Not Working</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>1. Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> then <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/debug_auto_posting</code></p>
                  <p>2. Verify weekly schedule is configured</p>
                  <p>3. Try <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> then <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/restart_daily_task</code></p>
                </div>
              </div>
              <div className="bg-yellow-800/20 rounded-lg p-4 border border-yellow-400/20">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">RSVP Posts Not Appearing</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>1. Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> then <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/force_post_rsvp</code></p>
                  <p>2. Check bot permissions in event channel</p>
                  <p>3. Verify current week's schedule is set up</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-800/20 rounded-lg p-4 border border-yellow-400/20">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Reminders Not Sending</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>1. Check settings with <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/configure_reminders</code></p>
                  <p>2. Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> then <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/debug_reminders</code></p>
                  <p>3. Verify event time is configured</p>
                </div>
              </div>
              <div className="bg-yellow-800/20 rounded-lg p-4 border border-yellow-400/20">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Database Errors</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>1. Verify Supabase project is active</p>
                  <p>2. Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> then <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/test_connection</code></p>
                  <p>3. Check SUPABASE_URL and SUPABASE_KEY</p>
                </div>
              </div>
              <div className="bg-yellow-800/20 rounded-lg p-4 border border-yellow-400/20">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Rate Limiting Issues</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>1. Use <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/list_help</code> then <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/rate_limit_status</code></p>
                  <p>2. Avoid frequent <code className="bg-gray-800 px-1 py-0.5 rounded text-green-400 text-xs">/view_rsvps</code> in large servers</p>
                  <p>3. Space out admin commands during peak times</p>
                </div>
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