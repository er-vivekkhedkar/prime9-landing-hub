
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/lovable-uploads/19fa9b68-7bb1-4de1-b440-d1e0ab5af13e.png"
              alt="Prime9 Realty"
              className="h-12 mb-6"
            />
            <p className="text-gray-400">
              Your trusted partner in real estate, providing exceptional service and
              expertise since 2008. Located in the heart of Pune, serving all your real estate needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/properties"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Properties</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/properties/residential"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Residential
                </a>
              </li>
              <li>
                <a
                  href="/properties/commercial"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Commercial
                </a>
              </li>
              <li>
                <a
                  href="/properties/land"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Land
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Downtown, City Vista</li>
              <li>Fountain Road, Rakshak Nagar</li>
              <li>Kharadi, Pune 411014</li>
              <li>Maharashtra, India</li>
              <li className="pt-2">Open 24/7</li>
              <li>Phone: +91 (020) 1234-5678</li>
              <li>Email: info@prime9realty.com</li>
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
