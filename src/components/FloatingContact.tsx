import { Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const FloatingContact = () => {
  // Replace these with your actual contact details
  const whatsappNumber = "+1234567890";
  const phoneNumber = "+1234567890";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContact; 