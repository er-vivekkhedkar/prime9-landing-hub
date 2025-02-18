import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollNavigation = (elementId?: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        if (elementId) {
          document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (elementId) {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePropertiesClick = (path: string) => {
    setIsOpen(false); // Close mobile menu
    setIsPropertiesOpen(false); // Close properties dropdown
    navigate(path);
    // Scroll to top after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      isScroll: true,
      onClick: () => handleScrollNavigation()
    },
    { 
      name: "About", 
      path: "about", 
      isScroll: true,
      onClick: () => handleScrollNavigation('about')
    },
    { 
      name: "Contact", 
      path: "contact", 
      isScroll: true,
      onClick: () => handleScrollNavigation('contact')
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProperties = () => setIsPropertiesOpen(!isPropertiesOpen);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/19fa9b68-7bb1-4de1-b440-d1e0ab5af13e.png" alt="Prime9 Realty" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isScroll ? (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="relative group">
              <button
                onClick={toggleProperties}
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Properties
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link
                  to="/properties/residential"
                  onClick={() => handlePropertiesClick('/properties/residential')}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Residential
                </Link>
                <Link
                  to="/properties/commercial"
                  onClick={() => handlePropertiesClick('/properties/commercial')}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Commercial
                </Link>
                <Link
                  to="/properties/land"
                  onClick={() => handlePropertiesClick('/properties/land')}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Land
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary hover:text-primary/80 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 right-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            item.isScroll ? (
              <button
                key={item.name}
                onClick={() => {
                  item.onClick?.();
                  toggleMenu();
                }}
                className="px-6 py-3 text-left text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="px-6 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            )
          ))}
          <button
            onClick={toggleProperties}
            className="px-6 py-3 text-left text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-between"
          >
            Properties
            <ChevronDown className="h-4 w-4" />
          </button>
          {isPropertiesOpen && (
            <div className="bg-gray-50">
              <Link
                to="/properties/residential"
                onClick={() => handlePropertiesClick('/properties/residential')}
                className="block px-8 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Residential
              </Link>
              <Link
                to="/properties/commercial"
                onClick={() => handlePropertiesClick('/properties/commercial')}
                className="block px-8 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Commercial
              </Link>
              <Link
                to="/properties/land"
                onClick={() => handlePropertiesClick('/properties/land')}
                className="block px-8 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Land
              </Link>
            </div>
          )}
          <div className="border-t border-gray-200 mt-2 pt-2">
            <h3 className="px-6 py-2 text-sm font-medium text-gray-500">Contact Us</h3>
            <a 
              href="tel:+917666248250" 
              className="px-6 py-3 text-primary hover:text-primary/80 font-medium flex items-center transition-colors duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              +91 7666248250
            </a>
            <a 
              href="tel:+918380859909" 
              className="px-6 py-3 text-primary hover:text-primary/80 font-medium flex items-center transition-colors duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              +91 8380859909
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
