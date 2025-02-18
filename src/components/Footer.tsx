
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <img
              src="/lovable-uploads/19fa9b68-7bb1-4de1-b440-d1e0ab5af13e.png"
              alt="Prime9 Realty"
              className="h-12 mb-6"
            />
            <p className="text-gray-400 mb-6">
              Your trusted partner in real estate, providing exceptional service and
              expertise since 2008. Located in the heart of Pune, serving all your real estate needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Properties</h3>
            <ul className="space-y-2">
              <li>
                <a href="/properties/residential" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Residential
                </a>
              </li>
              <li>
                <a href="/properties/commercial" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Commercial
                </a>
              </li>
              <li>
                <a href="/properties/land" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Land
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Downtown, City Vista, Fountain Road, Rakshak Nagar, Kharadi, Pune 411014</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Open 24/7</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+91 (020) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@prime9realty.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Prime9 Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
