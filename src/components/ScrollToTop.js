'use client';

import { useState, useEffect } from 'react';
import { GRADIENTS } from '../constants';

/**
 * Scroll to top button component with smooth scrolling functionality
 * @returns {JSX.Element} ScrollToTop component
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Handle scroll visibility toggle based on page scroll position
   */
  const handleScrollVisibilityToggle = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Handle smooth scroll to top of page
   */
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * Handle keydown events for accessibility
   * @param {KeyboardEvent} event - Keyboard event
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleScrollToTop();
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScrollVisibilityToggle);
    return () => {
      window.removeEventListener('scroll', handleScrollVisibilityToggle);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          onKeyDown={handleKeyDown}
          className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r ${GRADIENTS.primary} hover:${GRADIENTS.primaryHover} text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out group border border-blue-500/30 hover:border-blue-400/50`}
          aria-label="Scroll to top"
          tabIndex={0}
        >
          <svg
            className="w-6 h-6 group-hover:animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 