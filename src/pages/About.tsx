
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Your Trusted Real Estate Partner
              </h1>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Prime9 Realty has been at the forefront of the real estate industry
                  since 2008. With a commitment to excellence and a deep understanding
                  of the market, we've helped countless clients achieve their real
                  estate goals.
                </p>
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide exceptional real estate services through integrity,
                      expertise, and dedication to client satisfaction.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the most trusted and respected real estate company,
                      known for our professionalism and results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
