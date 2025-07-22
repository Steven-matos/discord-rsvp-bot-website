import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RSVP Manager - Event Management Made Easy",
  description: "A powerful Discord bot for managing event RSVPs and attendance. Create events, track responses, and keep your community organized with seamless event management.",
  keywords: [
    "Discord bot", 
    "RSVP management", 
    "event planning", 
    "Discord events", 
    "attendance tracking", 
    "community management", 
    "event RSVP", 
    "Discord server management", 
    "event organization", 
    "Discord automation",
    "guild events",
    "event registration"
  ],
  authors: [{ name: "RSVP Manager Team" }],
  creator: "RSVP Manager",
  publisher: "RSVP Manager",
  category: "Discord Bot",
  classification: "Discord Bot, Event Management Software",
  robots: "index, follow",
  googlebot: "index, follow",
  language: "en-US",
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://discord-rsvp-bot-website.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  images: [
    {
      url: "https://discord-rsvp-bot-website.vercel.app/logo.png",
      width: 1024,
      height: 1024,
      alt: "RSVP Manager Logo",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://discord-rsvp-bot-website.vercel.app/",
    siteName: "RSVP Manager",
    title: "RSVP Manager - Event Management Made Easy",
    description: "A powerful Discord bot for managing event RSVPs and attendance. Create events, track responses, and keep your community organized with seamless event management.",
    images: [
      {
        url: "https://discord-rsvp-bot-website.vercel.app/logo.png",
        width: 1024,
        height: 1024,
        alt: "RSVP Manager Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RSVPManager",
    creator: "@RSVPManager",
    title: "RSVP Manager - Event Management Made Easy",
    description: "A powerful Discord bot for managing event RSVPs and attendance. Create events, track responses, and keep your community organized with seamless event management.",
    images: ["https://discord-rsvp-bot-website.vercel.app/logo.png"],
  },
  other: {
    "application-name": "RSVP Manager",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "RSVP Manager",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#000000",
    "msapplication-tap-highlight": "no",
    "theme-color": "#000000",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RSVP Manager",
    "description": "A powerful Discord bot for managing event RSVPs and attendance. Create events, track responses, and keep your community organized with seamless event management.",
    "url": "https://discord-rsvp-bot-website.vercel.app",
    "logo": "https://discord-rsvp-bot-website.vercel.app/logo.png",
    "image": "https://discord-rsvp-bot-website.vercel.app/logo.png",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Discord",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "RSVP Manager Team"
    },
    "featureList": [
      "Event Creation",
      "RSVP Tracking",
      "Attendance Management", 
      "Community Organization",
      "Discord Integration",
      "Event Notifications"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
