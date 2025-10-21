import Link from 'next/link';

const TermsOfServicePage = () => (
  <section className="py-8">
    <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Terms of Service</h1>
    <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 text-gray-300">
      <p className="mb-4">
        Welcome to RSVP Manager! These Terms of Service ("Terms") govern your use of our Discord bot. By adding or using the bot, you agree to these Terms.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using RSVP Manager, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, do not use the bot.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">2. Description of Service</h2>
      <p className="mb-4">
        RSVP Manager is designed to help Discord communities organize and manage weekly events with RSVP tracking, automated reminders, and attendance monitoring.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">3. User Conduct</h2>
      <p className="mb-4">
        You agree to use the bot responsibly and in compliance with Discord's Terms of Service and Community Guidelines. You shall not use the bot for any unlawful or prohibited activities, including but not limited to:
      </p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Spamming or flooding Discord channels.</li>
        <li>Harassing, abusing, or threatening other users.</li>
        <li>Distributing malicious software or content.</li>
        <li>Attempting to gain unauthorized access to the bot's systems or data.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">4. Data and Privacy</h2>
      <p className="mb-4">
        We collect and store certain data necessary for the bot's functionality, as described in our{" "}
        <Link
          href="/privacy-policy"
          className="text-blue-400 hover:underline"
        >
          Privacy Policy
        </Link>
        . By using the bot, you consent to this data collection and storage.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">5. Disclaimers</h2>
      <p className="mb-4">
        RSVP Manager is provided "as is" without any warranties, express or implied. We do not guarantee that the bot will be error-free, uninterrupted, or always available. We are not responsible for any damage or loss resulting from your use of the bot.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">6. Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">7. Modifications to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">8. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-purple-400">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us through our support server or email provided on the Support page.
      </p>
      <p className="mb-4">
        <strong>Last updated:</strong> July 21, 2025
      </p>
    </div>
  </section>
);

export default TermsOfServicePage; 