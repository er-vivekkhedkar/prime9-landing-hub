import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Youtube } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollNavigation = (elementId?: string) => {
    if (location.pathname !== '/') {
      navigate('/');
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

  const handlePropertyNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6 sm:pt-16 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <img
                src="/lovable-uploads/logo.png"
                alt="Prime9 Realty"
                className="h-20 w-20 sm:h-16 sm:w-16 rounded-full bg-white p-2 mb-4 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Your trusted partner in real estate, providing exceptional service and
              expertise since 2008. Located in the heart of Pune, serving all your real estate needs.
            </p>
            <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://facebook.com/PrimeNineRealty/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                title="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/prime9_realty/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                title="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-black transition-all duration-200"
                title="Follow us on X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/message/4QGISPN4ZT6YC1"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-200"
                title="Chat with us on WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@Prime9Realty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-200"
                title="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="sm:hidden space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2 text-center">
                Quick Links
              </h3>
              <ul className="flex justify-center gap-6">
                <li>
                  <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2 text-center">
                Properties
              </h3>
              <ul className="flex justify-center gap-6">
                <li>
                  <button 
                    onClick={() => handlePropertyNavigation('/properties/residential')} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Residential
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePropertyNavigation('/properties/commercial')} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Commercial
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePropertyNavigation('/properties/land')} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Land
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:block text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleScrollNavigation()}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollNavigation('about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollNavigation('contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Properties</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handlePropertyNavigation('/properties/residential')} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Residential
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePropertyNavigation('/properties/commercial')} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Commercial
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePropertyNavigation('/properties/land')} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Land
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">Downtown, City Vista, Fountain Road, Rakshak Nagar, Kharadi, Pune 411014</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Open 24/7</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 7666248250</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">prime9realty@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prime9 Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
