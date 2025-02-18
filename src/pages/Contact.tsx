import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  useEffect(() => {
    // Check for stored message
    const storedMessage = localStorage.getItem('propertyInquiryMessage');
    if (storedMessage) {
      // Small delay to ensure the form is rendered
      setTimeout(() => {
        const messageInput = document.getElementById('message') as HTMLTextAreaElement;
        if (messageInput) {
          messageInput.value = storedMessage;
          // Clear the stored message
          localStorage.removeItem('propertyInquiryMessage');
        }
        
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
