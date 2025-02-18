
const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              We're here to help you find your perfect property
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Office Location
                </h3>
                <p className="text-gray-600">
                  Downtown, City Vista
                  <br />
                  Fountain Road, Rakshak Nagar
                  <br />
                  Kharadi, Pune 411014
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Info
                </h3>
                <p className="text-gray-600">
                  Phone: +91 (020) 1234-5678
                  <br />
                  Mobile: +91 98765 43210
                  <br />
                  Email: info@prime9realty.com
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Open 24/7
                  <br />
                  Always here to serve you
                </p>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
