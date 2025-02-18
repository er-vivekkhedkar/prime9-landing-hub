import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image with stronger overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Find Your Perfect Property with{" "}
            <span className="text-primary">Prime9 Realty</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-md shadow-gray-900/50 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
            Discover premium properties in Pune. From residential homes to
            commercial spaces, we help you find the perfect real estate investment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-5 transition-all duration-300 hover:translate-x-2 w-full sm:w-48 text-sm sm:text-base"
              onClick={() => document.getElementById('property-categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black border-2 border-white hover:bg-white transition-all duration-300 hover:translate-x-2 w-full sm:w-48 text-sm sm:text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
