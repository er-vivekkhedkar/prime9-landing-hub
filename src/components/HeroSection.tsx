
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
        <img
          src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
          alt="Luxury Building"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up">
          <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
            Premium Properties
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Your Perfect Property
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Prime9 Realty offers exclusive properties that match your lifestyle and
            investment goals.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full inline-flex items-center transition-all duration-300 hover:translate-x-2">
            Explore Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
