import CommandTable from '../CommandTable';

const CommandsPage = () => (
  <section className="py-8">
    <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Bot Commands</h1>

    <h2 className="text-3xl font-semibold mb-6 text-purple-400">Admin Commands</h2>
    <CommandTable
      commands={[
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
        { command: '`/list_commands`', description: 'See all available commands.' },
        { command: '`/force_sync`', description: 'Fix command display issues on Discord.' },
      ]}
      whoCanUse="Server Admins + Specific User ID (300157754012860425)"
    />

    <h2 className="text-3xl font-semibold mt-12 mb-6 text-purple-400">Member Commands</h2>
    <CommandTable
      commands={[
        { command: '✅ Yes', description: '"I\'m coming!" (Button RSVP)' },
        { command: '❌ No', description: '"I can\'t make it" (Button RSVP)' },
        { command: '❓ Maybe', description: '"I might come" (Button RSVP)' },
        { command: '📱 Mobile', description: '"I\'m coming, but on mobile" (Button RSVP)' },
        { command: '`/view_rsvps`', description: 'See who\'s coming to today\'s event.' },
        { command: '`/view_yesterday_rsvps`', description: 'Check yesterday\'s attendance.' },
      ]}
      whoCanUse="Everyone"
    />

    <h2 className="text-3xl font-semibold mt-12 mb-6 text-purple-400">Monitoring & Diagnostics Commands</h2>
    <CommandTable
      commands={[
        { command: '`/bot_status`', description: 'Check the bot\'s current status, uptime, and connection health.' },
        { command: '`/monitor_status`', description: 'Get detailed monitoring information including memory, CPU, and performance metrics.' },
        { command: '`/test_connection`', description: 'Test the bot\'s connection to Discord and database.' },
      ]}
      whoCanUse="Server Admins + Specific User ID (300157754012860425)"
    />
  </section>
);

export default CommandsPage; 