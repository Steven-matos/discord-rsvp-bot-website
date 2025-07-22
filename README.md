# RSVP Manager Website

A professional website for **RSVP Manager**, a powerful Discord bot that helps communities organize weekly events with easy RSVP tracking, automatic reminders, and mobile-friendly features.

## About RSVP Manager

RSVP Manager is designed to streamline event organization for Discord communities, whether you're running gaming groups, clubs, or any community that meets regularly. The bot provides:

- 📅 **Weekly Planning** - Set up recurring events for each day of the week
- 🎯 **Easy RSVPs** - One-click responses with Yes, No, Maybe, or Mobile options
- ⏰ **Smart Reminders** - Configurable automatic reminders before events
- 📱 **Mobile Friendly** - Special RSVP option for mobile users
- 👥 **Attendance Tracking** - Clear visibility of who's coming to each event
- 🔄 **Automatic Posts** - Daily event announcements posted automatically

## Website Features

This Next.js website provides:

- **Homepage** - Bot overview and key features
- **Features Page** - Detailed feature descriptions
- **Commands Page** - Complete bot command documentation
- **Bot Setup Guide** - Step-by-step configuration instructions
- **Support** - Troubleshooting and help resources
- **Legal Pages** - Privacy Policy and Terms of Service

## Technology Stack

- **Framework**: Next.js 15.4.2 with App Router
- **Styling**: Tailwind CSS 4
- **Components**: Modular React components
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd discord-rsvp-bot-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js           # Main page entry point
│   └── globals.css       # Global styles
└── components/
    ├── App.js            # Main app component
    ├── Layout.js         # Site layout with header/footer
    ├── NavLink.js        # Navigation component
    ├── FeatureCard.js    # Feature display cards
    ├── FeatureDetail.js  # Detailed feature components
    ├── CommandTable.js   # Command documentation tables
    └── pages/
        ├── HomePage.js
        ├── FeaturesPage.js
        ├── CommandsPage.js
        ├── BotAccountSetupPage.js
        ├── SupportPage.js
        ├── PrivacyPolicyPage.js
        └── TermsOfServicePage.js
```

## Bot Invitation

To add RSVP Manager to your Discord server, use this invitation link:
[Invite RSVP Manager](https://discord.com/oauth2/authorize?client_id=1388283299562262559&permissions=1144344644123728&integration_type=0&scope=bot)

## Required Bot Permissions

- Send Messages
- Use Slash Commands  
- Manage Messages
- View Members
- Embed Links

## Configuration

After adding the bot to your server, use these key setup commands:

1. `/set_event_channel` - Choose where events are posted
2. `/set_event_time` - Set event start times
3. `/setup_weekly_schedule` - Create your weekly event schedule
4. `/configure_reminders` - Enable automatic reminders

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed with automatic deployments on git push

### Other Deployment Options

- **Netlify**: Works with Next.js static export
- **Railway**: Full-stack deployment
- **AWS Amplify**: Scalable hosting
- **Self-hosted**: Using `npm run build` and `npm start`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Support

For bot support or website issues:
- Join our Discord support server (link in website)
- Create an issue in this repository
- Email support (contact info on website)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the Discord community
