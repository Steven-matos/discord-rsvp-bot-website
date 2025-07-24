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