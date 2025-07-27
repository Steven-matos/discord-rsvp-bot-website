/**
 * Application Constants
 * Centralized constants to eliminate code duplication (DRY principle)
 */

/**
 * Bot invitation URL for Discord integration
 * @constant {string}
 */
export const BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1388283299562262559&permissions=1144344644123728&integration_type=0&scope=bot";

/**
 * Application metadata and branding
 * @constant {Object}
 */
export const APP_METADATA = {
  name: "RSVP Manager",
  tagline: "Event Management Made Easy",
  description: "A powerful Discord bot for managing event RSVPs and attendance. Create events, track responses, and keep your community organized with seamless event management.",
  logoPath: "/logo.png",
  logoAlt: "RSVP Manager Logo",
  logoSize: { width: 32, height: 32 }
};

/**
 * Common gradient classes and styles
 * @constant {Object}
 */
export const GRADIENTS = {
  primary: "from-blue-600 to-purple-600",
  primaryHover: "from-blue-700 to-purple-700",
  text: "from-blue-400 to-purple-400",
  textExtended: "from-blue-400 via-purple-400 to-blue-400",
  background: "from-gray-900 via-purple-900/20 to-blue-900/20",
  iconBg: "from-blue-500/20 to-purple-500/20",
  cardBg: "from-gray-800/90 to-gray-900/90"
};

/**
 * Common styling classes
 * @constant {Object}
 */
export const STYLES = {
  button: {
    base: "inline-block font-bold rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out",
    primary: "bg-gradient-to-r text-white btn-premium",
    secondary: "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 text-white font-medium"
  },
  card: {
    base: "bg-gradient-to-br backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50",
    hover: "hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105"
  },
  text: {
    gradient: "bg-gradient-to-r bg-clip-text text-transparent",
    heroTitle: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up word-wrap-normal",
    sectionTitle: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight py-2 word-wrap-normal",
    description: "text-lg sm:text-xl text-gray-300 leading-relaxed"
  }
};

/**
 * Animation and transition classes
 * @constant {Object}
 */
export const ANIMATIONS = {
  fadeInUp: "animate-fade-in-up",
  scaleHover: "hover:scale-105 transition-transform duration-300",
  scaleHoverLarge: "hover:scale-110 transition-transform duration-300"
};

/**
 * Common breakpoint configurations
 * @constant {Object}
 */
export const BREAKPOINTS = {
  mobile: "sm:",
  tablet: "md:",
  desktop: "lg:",
  wide: "xl:"
};

/**
 * Comprehensive command groups configuration for bot documentation
 * @constant {Array}
 */
export const COMMAND_GROUPS = [
  {
    title: "Core Setup Commands",
    subtitle: "Essential commands for initial bot configuration (Available via /list_commands)",
    icon: "🚀",
    color: "blue",
    whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
    commands: [
      { 
        command: '`/setup_weekly_schedule`', 
        description: 'Interactive setup for your weekly events. Configure each day with event name, outfit/gear, and vehicle. Example: Monday = "Raid Night" | Combat Gear | Tank' 
      },
      { 
        command: '`/set_event_channel <channel>`', 
        description: 'Choose where daily event posts appear. This channel will show RSVP buttons and member responses. Example: /set_event_channel #events' 
      },
      { 
        command: '`/set_event_time <hour> <minute>`', 
        description: 'Set when your events start (Eastern Time). Used for reminder calculations. Example: /set_event_time 20 0 (8:00 PM Eastern)' 
      },
      { 
        command: '`/set_posting_time <hour> <minute>`', 
        description: 'When daily RSVP posts are created (default: 9:00 AM Eastern). Example: /set_posting_time 9 0' 
      },
      { 
        command: '`/configure_reminders`', 
        description: 'Control when reminder notifications are sent. Options: 4:00 PM daily, 1 hour before, 15 minutes before. All can be enabled/disabled independently' 
      }
    ]
  },
  {
    title: "Schedule Management",
    subtitle: "Commands for viewing and editing your weekly event schedule",
    icon: "📅",
    color: "green",
    whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
    commands: [
      { 
        command: '`/view_schedule`', 
        description: 'Display your complete weekly event schedule showing all 7 days with event details' 
      },
      { 
        command: '`/edit_event <day>`', 
        description: 'Modify or add events for specific days. Interactive modal for easy editing. Example: /edit_event monday' 
      }
    ]
  },
  {
    title: "Member Interaction & RSVP Tracking",
    subtitle: "Commands for viewing attendance and member responses",
    icon: "👥",
    color: "purple",
    whoCanUse: "Everyone (RSVP buttons) / Server Admins (viewing commands)",
    commands: [
      { command: '✅ Yes', description: '"I\'m attending the event" (Button RSVP)' },
      { command: '❌ No', description: '"I can\'t make it today" (Button RSVP)' },
      { command: '❓ Maybe', description: '"I might attend, not certain" (Button RSVP)' },
      { command: '📱 Mobile', description: '"I\'m attending but on mobile device" (Button RSVP)' },
      { 
        command: '`/view_rsvps`', 
        description: 'See who\'s attending today\'s event. Shows Yes/No/Maybe/Mobile responses with member names. Displays non-responders with member names' 
      },
      { 
        command: '`/view_yesterday_rsvps`', 
        description: 'Review attendance from previous day. Shows member names for all response types. Great for tracking participation trends' 
      }
    ]
  },
  {
    title: "Advanced Reporting Commands",
    subtitle: "Comprehensive RSVP analysis and attendance reporting (Admin Only)",
    icon: "📊",
    color: "orange",
    whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
    commands: [
      { 
        command: '`/midweek_rsvp_report`', 
        description: 'Comprehensive Monday-Wednesday RSVP analysis. Shows actual member names for each response type, day-by-day breakdown with participation rates, identifies consistent attendees across 3 days. Smart name display (up to 10 names per category) with visual separation between days for easy reading' 
      },
      { 
        command: '`/weekly_rsvp_report`', 
        description: 'Complete weekly RSVP analysis (Monday-Sunday). Compact daily summaries with participation rates, most active attendees list (all unique "Yes" responders), members who never responded (if >5 people), perfect attendance tracking, good attendance analysis (70%+ participation), week totals and comprehensive statistics with deduplicated member lists across multiple days' 
      }
    ]
  },
  {
    title: "Command Navigation",
    subtitle: "Main command discovery and help system",
    icon: "🧭",
    color: "teal",
    whoCanUse: "Everyone",
    commands: [
      { 
        command: '`/list_commands`', 
        description: 'Display main bot commands for everyday use. Includes setup, management, and RSVP viewing commands. Focuses on regular workflow and operations' 
      },
      { 
        command: '`/list_help`', 
        description: 'Show troubleshooting, maintenance, and diagnostic commands. Advanced commands for fixing issues and debugging the bot. Organized by function: troubleshooting, maintenance, diagnostics, system info' 
      }
    ]
  },
  {
    title: "Troubleshooting & Fixes",
    subtitle: "Commands for resolving common issues (Available via /list_help)",
    icon: "🔧",
    color: "red",
    whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
    commands: [
      { 
        command: '`/force_post_rsvp`', 
        description: 'Manually post today\'s RSVP if automatic posting fails. Shows progress updates during execution. Use when daily posts don\'t appear automatically' 
      },
      { 
        command: '`/reset_setup`', 
        description: 'Clear stuck weekly schedule setup process. Use if setup gets interrupted or becomes unresponsive during configuration' 
      },
      { 
        command: '`/force_sync`', 
        description: 'Refresh bot commands if they\'re not appearing. Forces re-registration with Discord. Wait up to 1 hour for Discord to update after using' 
      }
    ]
  },
  {
    title: "Maintenance & Cleanup",
    subtitle: "Commands for channel management and bot maintenance (Available via /list_help)",
    icon: "🧹",
    color: "yellow",
    whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
    commands: [
      { 
        command: '`/delete_message <message_id>`', 
        description: 'Remove specific messages by ID. Useful for cleaning up mistakes or unwanted posts. Find message ID by right-clicking message in Discord' 
      },
      { 
        command: '`/cleanup_old_posts`', 
        description: 'Manually remove old event posts while preserving RSVP data. Keeps Discord channels tidy without losing attendance history stored in database' 
      },
      { 
        command: '`/set_admin_channel <channel>`', 
        description: 'Choose where admin notifications are sent. Includes alerts about missing weekly schedules and bot health issues. Example: /set_admin_channel #admin-alerts' 
      }
    ]
  },
  {
    title: "Advanced Diagnostics",
    subtitle: "Detailed troubleshooting and system testing (Available via /list_help)",
    icon: "🔍",
    color: "indigo",
    whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
    commands: [
      { 
        command: '`/debug_auto_posting`', 
        description: 'Diagnose automatic posting problems. Shows timing, settings, and schedule status. Use when daily RSVP posts stop appearing automatically' 
      },
      { 
        command: '`/test_auto_posting`', 
        description: 'Manually trigger posting checks with debug logs. Test the automatic posting system without waiting for scheduled time' 
      },
      { 
        command: '`/restart_daily_task`', 
        description: 'Restart automatic posting system. Use if daily posts stop working completely. Resets the background task scheduler' 
      },
      { 
        command: '`/rate_limit_status`', 
        description: 'Check Discord rate limiting status with recommendations for large servers. Avoid frequent /view_rsvps in servers with 500+ members' 
      },
      { 
        command: '`/debug_view_rsvps`', 
        description: 'Debug RSVP viewing issues with database query details. Shows exactly what data is being retrieved and why commands might fail' 
      },
      { 
        command: '`/debug_reminders`', 
        description: 'Comprehensive reminder system diagnosis. Check reminder settings, timing calculations, and delivery status for troubleshooting' 
      },
      { 
        command: '`/test_reminder`', 
        description: 'Manually trigger reminder checks for testing. Test reminder system functionality without waiting for scheduled times' 
      },
      { 
        command: '`/reset_reminder_tracking`', 
        description: 'Reset reminder tracking for testing purposes. Debugging command to clear reminder history for testing scenarios' 
      }
    ]
  },
  {
    title: "System Information",
    subtitle: "Bot health monitoring and configuration details (Available via /list_help)",
    icon: "💻",
    color: "gray",
    whoCanUse: "Server Admins + Specific User ID (300157754012860425)",
    commands: [
      { 
        command: '`/bot_status`', 
        description: 'Check bot uptime and basic health metrics. Shows connection status, guild count, and overall operational status' 
      },
      { 
        command: '`/monitor_status`', 
        description: 'Detailed performance information including memory usage, CPU stats, latency data, and advanced health metrics' 
      },
      { 
        command: '`/test_connection`', 
        description: 'Verify Discord and database connectivity. Troubleshoot connection issues with detailed diagnostic information' 
      },
      { 
        command: '`/test_database`', 
        description: 'Test database connection and show configuration details. Verify Supabase connectivity and display connection parameters' 
      },
      { 
        command: '`/server_settings`', 
        description: 'Display all bot configuration for your server. Complete settings overview including channels, times, and reminder settings' 
      }
    ]
  }
]; 