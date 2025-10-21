import PrivacyPolicyPage from '../../components/pages/PrivacyPolicyPage';
import PageLayout from '../../components/PageLayout';

/**
 * Privacy Policy page metadata configuration
 */
export const metadata = {
  title: "Privacy Policy - RSVP Manager",
  description: "Learn how RSVP Manager collects, uses, and protects your data. Our privacy policy outlines our commitment to data security and user privacy.",
  keywords: [
    "privacy policy",
    "data protection", 
    "user privacy",
    "Discord bot privacy",
    "RSVP Manager privacy",
    "data security",
    "user data",
    "privacy rights"
  ],
  authors: [{ name: "RSVP Manager Team" }],
  creator: "RSVP Manager",
  publisher: "RSVP Manager",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://discord-rsvp-bot-website.vercel.app/privacy-policy",
    siteName: "RSVP Manager",
    title: "Privacy Policy - RSVP Manager",
    description: "Learn how RSVP Manager collects, uses, and protects your data. Our privacy policy outlines our commitment to data security and user privacy.",
  },
  twitter: {
    card: "summary",
    site: "@RSVPManager",
    creator: "@RSVPManager",
    title: "Privacy Policy - RSVP Manager",
    description: "Learn how RSVP Manager collects, uses, and protects your data. Our privacy policy outlines our commitment to data security and user privacy.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

/**
 * Privacy Policy page component with layout
 * @returns {JSX.Element} Privacy Policy page with navigation and footer
 */
export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <PrivacyPolicyPage />
    </PageLayout>
  );
}
