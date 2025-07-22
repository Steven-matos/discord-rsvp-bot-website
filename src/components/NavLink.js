const NavLink = ({ 
  children, 
  onClick, 
  className = "", 
  setIsMobileMenuOpen, 
  currentPage, 
  targetPage 
}) => {
  const isActive = currentPage === targetPage;
  
  const baseClasses = "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105";
  const activeClasses = "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 shadow-lg";
  const inactiveClasses = "text-gray-300 hover:text-white hover:bg-gray-700/50 border border-transparent hover:border-gray-600/30";

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
        if (setIsMobileMenuOpen) {
          setIsMobileMenuOpen(); // Close mobile menu on click
        }
      }}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`}
    >
      {children}
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      )}
    </a>
  );
};

export default NavLink; 