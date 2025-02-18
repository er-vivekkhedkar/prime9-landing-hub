
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Residential",
    description: "Find your dream home",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    link: "/properties/residential",
  },
  {
    title: "Commercial",
    description: "Premium business spaces",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    link: "/properties/commercial",
  },
  {
    title: "Land",
    description: "Development opportunities",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    link: "/properties/land",
  },
];

const PropertyCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
            Explore Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Browse by Category
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
