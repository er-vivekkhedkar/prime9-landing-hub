import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "./shared/animations";

const categories = [
  {
    title: "Residential",
    description: "Find your dream home with our exclusive collection of premium residential properties",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    path: "/properties/residential",
    stats: "2 & 3 BHK Apartments",
    buttonText: "Explore Residential",
  },
  {
    title: "Commercial",
    description: "Premium office spaces and retail locations for your business needs",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    path: "/properties/commercial",
    stats: "Office & Retail Spaces",
    buttonText: "View Commercial",
  },
  {
    title: "Land",
    description: "Strategic land parcels perfect for your development projects",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    path: "/properties/land",
    stats: "Prime Locations",
    buttonText: "Discover Land",
  },
];

const PropertyCategories = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    // Instant scroll to top without animation
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  return (
    <section id="property-categories" className="py-12 sm:py-20 bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeIn} className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-primary text-white text-xs sm:text-sm font-medium rounded-full mb-3">
            Explore Properties
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
            Browse by Category
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover your perfect property across our diverse range of categories
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-md cursor-pointer"
              onClick={() => handleNavigation(category.path)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-2xl">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm mb-3 transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                  
                  <span className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full mb-4">
                    {category.stats}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(category.path);
                    }}
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-white text-primary hover:bg-primary hover:text-white font-medium rounded-lg transition-colors duration-300 text-sm"
                  >
                    {category.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PropertyCategories;
