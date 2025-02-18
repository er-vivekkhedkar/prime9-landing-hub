
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "City Vista Apartments",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Luxury 2 & 3 BHK apartments in Kharadi, Pune",
    details: "Starting at ₹1.2 Cr",
  },
  {
    id: 2,
    title: "Tech Park Square",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    description: "Premium office spaces in Pune's IT hub",
    details: "100,000 sq.ft Commercial Space",
  },
  {
    id: 3,
    title: "Green Valley Villas",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    description: "Exclusive gated community in Rakshak Nagar",
    details: "4 & 5 BHK Luxury Villas",
  },
  {
    id: 4,
    title: "Riverside Residency",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    description: "Premium apartments with Mula-Mutha river view",
    details: "3 & 4 BHK River-facing Homes",
  }
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Completed Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of successful projects across Pune, setting new standards in luxury and comfort
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 relative"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8">
                    <div className="max-w-3xl mx-auto text-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-base md:text-lg mb-2">
                        {project.description}
                      </p>
                      <span className="inline-block bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {project.details}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 group"
          >
            <ArrowLeft className="h-6 w-6 text-gray-800 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 group"
          >
            <ArrowRight className="h-6 w-6 text-gray-800 group-hover:scale-110 transition-transform" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-primary" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
