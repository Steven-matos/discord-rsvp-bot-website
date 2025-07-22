const NavLink = ({ children, onClick, className = "", setIsMobileMenuOpen }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick();
      if (setIsMobileMenuOpen) {
        setIsMobileMenuOpen(); // Close mobile menu on click
      }
    }}
    className={`block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 transition duration-300 ease-in-out ${className}`}
  >
    {children}
  </a>
);

export default NavLink; 