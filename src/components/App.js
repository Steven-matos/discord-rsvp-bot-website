'use client';

import React, { useState } from 'react';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import CommandsPage from './pages/CommandsPage';
import BotAccountSetupPage from './pages/BotAccountSetupPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'features':
        return <FeaturesPage />;
      case 'commands':
        return <CommandsPage />;
      case 'bot-account-setup':
        return <BotAccountSetupPage />;
      case 'support':
        return <SupportPage />;
      case 'privacy':
        return <PrivacyPolicyPage setCurrentPage={setCurrentPage} />;
      case 'terms':
        return <TermsOfServicePage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      {renderPage()}
    </Layout>
  );
};

export default App; 