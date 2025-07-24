import NavLink from './NavLink';
import Image from 'next/image';
import ScrollToTop from './ScrollToTop';
import { BOT_INVITE_URL, APP_METADATA, GRADIENTS } from '../constants';

/**
 * Main layout component providing consistent header, footer, and navigation
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render
 * @param {string} props.currentPage - Current active page identifier
 * @param {Function} props.setCurrentPage - Function to update current page
 * @param {boolean} props.isMobileMenuOpen - Mobile menu open state
 * @param {Function} props.toggleMobileMenu - Function to toggle mobile menu
 * @returns {JSX.Element} Layout component
 */
const Layout = ({ children, currentPage, setCurrentPage, isMobileMenuOpen, toggleMobileMenu }) => {
  /**
   * Handle mobile menu close functionality
   */
  const handleMobileMenuClose = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  /**
   * Logo component for consistent branding
   * @param {Object} props - Logo props
   * @param {boolean} props.inFooter - Whether logo is in footer (affects styling)
   * @returns {JSX.Element} Logo component
   */  
  const Logo = ({ inFooter = false }) => (
    <div className="flex items-center group">
      <div className={`bg-gradient-to-br ${GRADIENTS.iconBg} p-2 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300`}>
        <Image
          src={APP_METADATA.logoPath}
          alt={APP_METADATA.logoAlt}
          width={APP_METADATA.logoSize.width}
          height={APP_METADATA.logoSize.height}
          className={inFooter ? "w-8 h-8" : "sm:w-8 sm:h-8 lg:w-10 lg:h-10"}
        />
      </div>
      <span className={`font-bold ${inFooter ? "text-xl" : "text-xl sm:text-2xl"} tracking-tight bg-gradient-to-r ${GRADIENTS.text} bg-clip-text text-transparent`}>
        {APP_METADATA.name}
      </span>
    </div>
  );

  /**
   * Navigation links configuration
   * @constant {Array}
   */
  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'documentation', label: 'Documentation' },
    { id: 'support', label: 'Support' }
  ];

  /**
   * Footer links configuration
   * @constant {Array}
   */
  const footerLinks = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100 font-inter flex flex-col">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/95 border-b border-gray-700/50 shadow-2xl">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <NavLink 
                  key={link.id}
                  currentPage={currentPage}
                  targetPage={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  setIsMobileMenuOpen={handleMobileMenuClose}
                >
                  {link.label}
                </NavLink>
              ))}
              
              {/* CTA Button */}
              <a
                href={BOT_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-4 inline-block bg-gradient-to-r ${GRADIENTS.primary} hover:${GRADIENTS.primaryHover} text-white font-bold py-2.5 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-sm btn-premium`}
                aria-label="Add RSVP Manager to your Discord server"
              >
                Add to Discord
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition duration-300 ease-in-out border border-gray-700/50 hover:border-blue-500/30"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              >
                <span className="sr-only">{isMobileMenuOpen ? "Close" : "Open"} main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-700/50 py-4`}>
            <div className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <NavLink 
                  key={link.id}
                  currentPage={currentPage}
                  targetPage={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  setIsMobileMenuOpen={handleMobileMenuClose}
                  className="block px-3 py-2 rounded-lg"
                >
                  {link.label}
                </NavLink>
              ))}
              
              <div className="pt-4 border-t border-gray-700/50 mt-4">
                <a
                  href={BOT_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center bg-gradient-to-r ${GRADIENTS.primary} hover:${GRADIENTS.primaryHover} text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out btn-premium`}
                  aria-label="Add RSVP Manager to your Discord server"
                >
                  Add to Discord
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md border-t border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Logo inFooter />
            </div>
            
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} {APP_METADATA.name}. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              {footerLinks.map((link) => (
                <NavLink 
                  key={link.id}
                  currentPage={currentPage}
                  targetPage={link.id}
                  onClick={() => setCurrentPage(link.id)} 
                  setIsMobileMenuOpen={handleMobileMenuClose}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Layout; 