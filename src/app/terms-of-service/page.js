import TermsOfServicePage from '../../components/pages/TermsOfServicePage';
import PageLayout from '../../components/PageLayout';

/**
 * Terms of Service page metadata configuration
 */
export const metadata = {
  title: "Terms of Service - RSVP Manager",
  description: "Read the terms of service for RSVP Manager Discord bot. Understand your rights and responsibilities when using our event management bot.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "Discord bot terms",
    "RSVP Manager terms",
    "service agreement",
    "user rights",
    "bot usage terms"
  ],
  authors: [{ name: "RSVP Manager Team" }],
  creator: "RSVP Manager",
  publisher: "RSVP Manager",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://discord-rsvp-bot-website.vercel.app/terms-of-service",
    siteName: "RSVP Manager",
    title: "Terms of Service - RSVP Manager",
    description: "Read the terms of service for RSVP Manager Discord bot. Understand your rights and responsibilities when using our event management bot.",
  },
  twitter: {
    card: "summary",
    site: "@RSVPManager",
    creator: "@RSVPManager",
    title: "Terms of Service - RSVP Manager",
    description: "Read the terms of service for RSVP Manager Discord bot. Understand your rights and responsibilities when using our event management bot.",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

/**
 * Terms of Service page component with layout
 * @returns {JSX.Element} Terms of Service page with navigation and footer
 */
export default function TermsOfService() {
  return (
    <PageLayout>
      <TermsOfServicePage />
    </PageLayout>
  );
}
