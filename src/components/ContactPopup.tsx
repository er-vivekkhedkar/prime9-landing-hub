import { useState, useEffect } from "react";
import { Mail, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "@/components/ui/toast";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "8234a26a-db29-48f1-ba4d-15e7e0ca33c6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: (
            <div className="flex items-center gap-2">
              <div className="bg-green-600 rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span>Your message has been sent successfully.</span>
            </div>
          ),
          className: "bg-green-50 border-green-200 text-green-800",
          duration: 4000,
        });
        setIsOpen(false);
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.message || "Something went wrong!",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-[400px] p-3 sm:p-5 relative animate-slide-up mx-auto">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          ✕
        </button>
        
        <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
          <div className="text-center mb-3 sm:mb-4">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Stay Connected
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Get updates about new properties
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="group">
              <label
                htmlFor="popup-name"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="popup-name"
                required
                placeholder="Your name"
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="group">
              <label
                htmlFor="popup-phone"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="popup-phone"
                required
                placeholder="Your phone number"
                pattern="[0-9]{10}"
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="group">
              <label
                htmlFor="popup-email"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="popup-email"
                required
                placeholder="Your email"
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="group">
              <label
                htmlFor="popup-subject"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <select
                name="subject"
                id="popup-subject"
                required
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              >
                <option value="">Select a subject</option>
                <option value="Property Inquiry">Property Inquiry</option>
                <option value="Price Quote">Price Quote</option>
                <option value="General Question">General Question</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-medium py-2 sm:py-2.5 rounded-md transition-all duration-200 disabled:opacity-70 mt-2"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup; 