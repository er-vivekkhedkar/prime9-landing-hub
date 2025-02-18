const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <span className="inline-block px-4 py-1 bg-secondary text-white text-sm font-medium rounded-full">
              About Our Brand
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Building Trust Through Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Prime9 Realty has established itself as a leader in the real estate
              industry through our commitment to excellence, integrity, and
              customer satisfaction. With years of experience and a deep
              understanding of the market, we help our clients make informed
              decisions about their property investments.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">21+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Modern Building"
              className="rounded-lg shadow-xl animate-fade-in"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                8+ Years Experience
              </h4>
              <p className="text-gray-600">In Real Estate Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
