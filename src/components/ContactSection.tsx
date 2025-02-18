import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        // Reset the form
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
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

  return (
    <section id="contact" className="py-8 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
              Contact Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              We're here to help you find your perfect property
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
            <div className="grid grid-cols-1 gap-4 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary flex-shrink-0" />
                  Office Location
                </h3>
                <p className="text-sm sm:text-base text-gray-600 pl-7 sm:pl-9 leading-relaxed">
                  Downtown, City Vista,<br />
                  Fountain Road, Rakshak Nagar,<br />
                  Kharadi, Pune 411014
                </p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary flex-shrink-0" />
                  Contact Info
                </h3>
                <div className="text-sm sm:text-base text-gray-600 pl-7 sm:pl-9 space-y-2 sm:space-y-3">
                  <a href="tel:+918380859909" className="flex items-center py-1 hover:text-primary active:text-primary transition-colors">
                    <span className="font-medium w-16 sm:w-20">Phone:</span>
                    <span>+91 8380859909</span>
                  </a>
                  <a href="tel:+917666248250" className="flex items-center py-1 hover:text-primary active:text-primary transition-colors">
                    <span className="font-medium w-16 sm:w-20">Mobile:</span>
                    <span>+91 7666248250</span>
                  </a>
                  <a href="mailto:prime9realty@gmail.com" className="flex items-center py-1 hover:text-primary active:text-primary transition-colors">
                    <span className="font-medium w-16 sm:w-20">Email:</span>
                    <span className="break-all">prime9realty@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary flex-shrink-0" />
                  Business Hours
                </h3>
                <p className="text-sm sm:text-base text-gray-600 pl-7 sm:pl-9 leading-relaxed">
                  Open 24/7<br />
                  Always here to serve you
                </p>
              </div>
            </div>
            <form onSubmit={onSubmit} className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary flex-shrink-0" />
                Send us a Message
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Your phone number"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Your message"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  ></textarea>
                </div>
                
                {/* Hidden field for subject */}
                <input 
                  type="hidden" 
                  name="subject" 
                  value="New Contact Form Submission - Prime9 Realty"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 text-white font-medium py-3 rounded-lg transition-colors text-sm sm:text-base flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
