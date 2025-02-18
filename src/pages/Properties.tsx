
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";

const propertyTypes = {
  commercial: {
    title: "Commercial Properties",
    description: "Discover premium commercial spaces for your business",
    properties: [
      {
        id: 1,
        title: "Downtown Office Complex",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        price: "$2,500,000",
        location: "Downtown LA",
        area: "5,000 sqft",
      },
      {
        id: 2,
        title: "Retail Space",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
        price: "$1,800,000",
        location: "Beverly Hills",
        area: "3,200 sqft",
      },
    ],
  },
  land: {
    title: "Land Properties",
    description: "Premium land opportunities for development",
    properties: [
      {
        id: 1,
        title: "Development Site",
        image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
        price: "$5,000,000",
        location: "Malibu",
        area: "2.5 acres",
      },
      {
        id: 2,
        title: "Commercial Plot",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        price: "$3,800,000",
        location: "Santa Monica",
        area: "1.8 acres",
      },
    ],
  },
};

const Properties = () => {
  const { type } = useParams();
  const propertyData = propertyTypes[type as keyof typeof propertyTypes];

  if (!propertyData) return null;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {propertyData.title}
            </h1>
            <p className="text-gray-600 mb-12">{propertyData.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {propertyData.properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-bold text-xl">
                        {property.price}
                      </span>
                      <span className="text-gray-600">{property.area}</span>
                    </div>
                    <p className="text-gray-600">{property.location}</p>
                    <button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-lg transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
