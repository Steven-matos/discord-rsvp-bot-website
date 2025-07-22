import NavLink from './NavLink';
import Image from 'next/image';

const Layout = ({ children, currentPage, setCurrentPage, isMobileMenuOpen, toggleMobileMenu }) => {
  const BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1388283299562262559&permissions=1144344644123728&integration_type=0&scope=bot";

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Image
              src="/logo.png"
              alt="RSVP Manager Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="font-bold text-2xl tracking-tight">RSVP Manager</span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-6z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <NavLink 
                onClick={() => setCurrentPage('home')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Home
              </NavLink>
              <NavLink 
                onClick={() => setCurrentPage('features')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Features
              </NavLink>
              <NavLink 
                onClick={() => setCurrentPage('commands')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Commands
              </NavLink>
              <NavLink 
                onClick={() => setCurrentPage('bot-account-setup')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Bot Account Setup
              </NavLink>
              <NavLink 
                onClick={() => setCurrentPage('support')}
                setIsMobileMenuOpen={closeMobileMenu}
              >
                Support
              </NavLink>
            </div>
            <div>
              <a
                href={BOT_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0 transition duration-300 ease-in-out"
              >
                Add to Discord
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 shadow-inner p-6 text-center text-gray-400 text-sm">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} RSVP Manager. All rights reserved.</p>
          <div className="mt-2">
            <NavLink 
              onClick={() => setCurrentPage('privacy')} 
              className="inline-block mx-2"
              setIsMobileMenuOpen={closeMobileMenu}
            >
              Privacy Policy
            </NavLink>
            <NavLink 
              onClick={() => setCurrentPage('terms')} 
              className="inline-block mx-2"
              setIsMobileMenuOpen={closeMobileMenu}
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 