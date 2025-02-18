
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxury Apartments",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Modern living spaces in prime location",
  },
  {
    id: 2,
    title: "Commercial Complex",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    description: "State-of-the-art office spaces",
  },
  {
    id: 3,
    title: "Premium Villas",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    description: "Exclusive gated community",
  },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Completed Projects
          </h2>
        </div>
        <div className="relative">
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
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ArrowRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
