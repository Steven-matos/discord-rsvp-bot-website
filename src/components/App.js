'use client';

import React, { useState } from 'react';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

/**
 * Main application component handling page routing and state management
 * @returns {JSX.Element} App component
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Handle mobile menu toggle functionality
   */
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Page routing configuration with component mapping
   * @constant {Object}
   */
  const pageComponents = {
    home: <HomePage />,
    documentation: <DocumentationPage />,
    support: <SupportPage />,
    privacy: <PrivacyPolicyPage setCurrentPage={setCurrentPage} />,
    terms: <TermsOfServicePage setCurrentPage={setCurrentPage} />
  };

  /**
   * Render the current page component based on routing state
   * @returns {JSX.Element} Current page component
   */
  const renderCurrentPage = () => {
    return pageComponents[currentPage] || pageComponents.home;
  };

  return (
    <Layout 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={handleMobileMenuToggle}
    >
      {renderCurrentPage()}
    </Layout>
  );
};

export default App; 