import { Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const FloatingContact = () => {
  // Replace these with your actual contact details
  const whatsappNumber = "+91 8380859909";
  const phoneNumber = "+91 8380859909";

  return (
    <>
      {/* Mobile View - Split Corners */}
      <div className="sm:hidden">
        {/* Left Side - Phone Button */}
        <div className="fixed left-4 bottom-4 z-50">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
          >
            <Phone size={24} />
          </a>
        </div>

        {/* Right Side - WhatsApp Button */}
        <div className="fixed right-4 bottom-4 z-50">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>

      {/* Desktop View - Stacked on Right */}
      <div className="hidden sm:block fixed right-6 bottom-6 z-50">
        <div className="flex flex-col gap-4">
          {/* Phone Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-x-1 flex items-center gap-2 group relative"
          >
            <span className="absolute right-full mr-2 bg-blue-500 text-white py-1 px-3 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Call Us
            </span>
            <Phone size={24} />
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-x-1 flex items-center gap-2 group relative"
          >
            <span className="absolute right-full mr-2 bg-[#25D366] text-white py-1 px-3 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Chat on WhatsApp
            </span>
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingContact; 