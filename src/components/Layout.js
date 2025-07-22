import NavLink from './NavLink';
import Image from 'next/image';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children, currentPage, setCurrentPage, isMobileMenuOpen, toggleMobileMenu }) => {
  const BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1388283299562262559&permissions=1144344644123728&integration_type=0&scope=bot";

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100 font-inter flex flex-col">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/95 border-b border-gray-700/50 shadow-2xl">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0 group">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="RSVP Manager Logo"
                  width={32}
                  height={32}
                  className="sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RSVP Manager
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavLink 
                currentPage={currentPage}
                targetPage="home"
                onClick={() => setCurrentPage('home')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Home
              </NavLink>
              <NavLink 
                currentPage={currentPage}
                targetPage="documentation"
                onClick={() => setCurrentPage('documentation')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Documentation
              </NavLink>
              <NavLink 
                currentPage={currentPage}
                targetPage="support"
                onClick={() => setCurrentPage('support')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Support
              </NavLink>
              
              {/* CTA Button */}
              <a
                href={BOT_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2.5 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-sm btn-premium"
              >
                Add to Discord
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition duration-300 ease-in-out border border-gray-700/50 hover:border-blue-500/30"
              >
                <span className="sr-only">Open main menu</span>
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
              <NavLink 
                currentPage={currentPage}
                targetPage="home"
                onClick={() => setCurrentPage('home')}
                setIsMobileMenuOpen={closeMobileMenu}
                className="block px-3 py-2 rounded-lg"
              >
                Home
              </NavLink>
              <NavLink 
                currentPage={currentPage}
                targetPage="documentation"
                onClick={() => setCurrentPage('documentation')}
                setIsMobileMenuOpen={closeMobileMenu}
                className="block px-3 py-2 rounded-lg"
              >
                Documentation
              </NavLink>
              <NavLink 
                currentPage={currentPage}
                targetPage="support"
                onClick={() => setCurrentPage('support')}
                setIsMobileMenuOpen={closeMobileMenu}
                className="block px-3 py-2 rounded-lg"
              >
                Support
              </NavLink>
              
              <div className="pt-4 border-t border-gray-700/50 mt-4">
                <a
                  href={BOT_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out btn-premium"
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
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="RSVP Manager Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RSVP Manager
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} RSVP Manager. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <NavLink 
                currentPage={currentPage}
                targetPage="privacy"
                onClick={() => setCurrentPage('privacy')} 
                setIsMobileMenuOpen={closeMobileMenu}
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Privacy Policy
              </NavLink>
              <NavLink 
                currentPage={currentPage}
                targetPage="terms"
                onClick={() => setCurrentPage('terms')} 
                setIsMobileMenuOpen={closeMobileMenu}
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Terms of Service
              </NavLink>
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