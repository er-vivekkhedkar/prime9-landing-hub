import { useState, useEffect, useRef, TouchEvent } from "react";

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Required minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality with 15 second interval
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 15000); // Change slide every 15 seconds
    };

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };

    startAutoPlay();

    // Cleanup on component unmount
    return () => stopAutoPlay();
  }, []);

  // Reset transition state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Slightly longer transition duration for smoother animation

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 bg-primary text-white text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
            Our Projects
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Completed Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Discover our portfolio of successful projects across Pune
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg sm:rounded-xl">
            <div
              className="flex transition-transform duration-800 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 relative"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="max-w-3xl mx-auto">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <span className="inline-block bg-primary/90 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                          {project.details}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 left-0 right-0">
            <div className="flex justify-center items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                    }
                  }}
                  disabled={isTransitioning}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${currentIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
