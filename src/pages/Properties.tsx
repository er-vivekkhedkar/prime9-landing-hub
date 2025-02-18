import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

interface PropertyDetail {
  id: number;
  title: string;
  image: string;
  price: string;
  location: string;
  area: string;
  description?: string;
  amenities?: string[];
  specifications?: {
    bedrooms?: number;
    bathrooms?: number;
    parking?: number;
    age?: string;
    furnishing?: string;
  };
  highlights?: string[];
}

const propertyTypes = {
  commercial: {
    title: "Commercial Properties",
    description: "Discover premium commercial spaces for your business",
    properties: [
      {
        id: 1,
        title: "Downtown Office Complex",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        price: "₹12.5 Cr",
        location: "Koregaon Park, Pune",
        area: "5,000 sqft",
        description: "Premium office space in the heart of Koregaon Park, featuring modern architecture and state-of-the-art facilities. Perfect for corporate headquarters or multi-national companies.",
        amenities: [
          "24/7 Security",
          "Covered Parking",
          "High-speed Elevators",
          "Power Backup",
          "Central Air Conditioning",
          "Conference Rooms",
          "Cafeteria"
        ],
        specifications: {
          parking: 50,
          age: "2 years",
          furnishing: "Semi-furnished"
        },
        highlights: [
          "Premium Location",
          "Metro Connectivity",
          "Modern Architecture",
          "Green Building Certified",
          "Multiple Entry/Exit Points"
        ]
      },
      {
        id: 2,
        title: "Retail Space",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
        price: "₹8.5 Cr",
        location: "Kalyani Nagar, Pune",
        area: "3,200 sqft",
        description: "Prime retail space in the bustling area of Kalyani Nagar. Ideal for flagship stores, restaurants, or premium retail outlets. Features modern design with excellent visibility and footfall.",
        amenities: [
          "24/7 Security",
          "Dedicated Parking",
          "Large Display Windows",
          "Power Backup",
          "Loading Area",
          "Storage Space"
        ],
        specifications: {
          parking: 25,
          age: "1 year",
          furnishing: "Shell and Core"
        },
        highlights: [
          "High Street Location",
          "Corner Property",
          "Double Height Ceiling",
          "Front and Back Access",
          "Premium Brands Neighborhood"
        ]
      },
    ],
  },
  residential: {
    title: "Residential Properties",
    description: "Find your dream home in prime locations",
    properties: [
      {
        id: 1,
        title: "Luxury Villa",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        price: "₹15.2 Cr",
        location: "Baner, Pune",
        area: "4,500 sqft",
        description: "Exquisite 4BHK villa with modern amenities and premium finishes. Features spacious rooms, landscaped garden, and smart home automation.",
        amenities: [
          "Swimming Pool",
          "Home Theater",
          "Modular Kitchen",
          "Garden",
          "Servant Quarter",
          "Smart Home Features"
        ],
        specifications: {
          bedrooms: 4,
          bathrooms: 5,
          parking: 3,
          age: "New Construction",
          furnishing: "Fully Furnished"
        },
        highlights: [
          "Premium Location",
          "Golf Course View",
          "Italian Marble Flooring",
          "24/7 Security",
          "Club House Access"
        ]
      },
      {
        id: 2,
        title: "Modern Apartment",
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        price: "₹3.85 Cr",
        location: "Viman Nagar, Pune",
        area: "1,800 sqft",
        description: "Contemporary 3BHK apartment in a premium society. Offers modern living with excellent amenities and convenient location near IT hubs.",
        amenities: [
          "Gym",
          "Children's Play Area",
          "Club House",
          "Indoor Games",
          "Jogging Track",
          "Landscaped Gardens"
        ],
        specifications: {
          bedrooms: 3,
          bathrooms: 3,
          parking: 2,
          age: "Ready to Move",
          furnishing: "Semi-furnished"
        },
        highlights: [
          "Airport Proximity",
          "School Nearby",
          "Shopping Complex",
          "Gated Community",
          "Vastu Compliant"
        ]
      }
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
        price: "₹25 Cr",
        location: "Hinjewadi, Pune",
        area: "2.5 acres",
        description: "Prime development land in Hinjewadi's IT hub. Excellent opportunity for commercial or mixed-use development with all necessary approvals in place.",
        amenities: [
          "Road Access",
          "Water Connection",
          "Electricity Available",
          "Clear Title",
          "Development Potential"
        ],
        specifications: {
          zoning: "Commercial",
          frontage: "100 meters",
          depth: "120 meters"
        },
        highlights: [
          "IT Hub Location",
          "Metro Connectivity",
          "All Approvals Ready",
          "Corner Plot",
          "High Growth Area"
        ]
      },
      {
        id: 2,
        title: "Commercial Plot",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        price: "₹18.5 Cr",
        location: "Wakad, Pune",
        area: "1.8 acres",
        description: "Strategic commercial plot in rapidly developing Wakad area. Perfect for retail complex or corporate park development.",
        amenities: [
          "Wide Road Access",
          "Underground Utilities",
          "Ready Infrastructure",
          "Development Permission"
        ],
        specifications: {
          zoning: "Commercial",
          frontage: "80 meters",
          depth: "90 meters"
        },
        highlights: [
          "Prime Location",
          "Multiple Access Points",
          "Near Highway",
          "Rapid Development Area",
          "High ROI Potential"
        ]
      }
    ],
  },
};

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState<PropertyDetail | null>(null);
  const { type } = useParams();
  const navigate = useNavigate();
  const propertyData = propertyTypes[type as keyof typeof propertyTypes];

  if (!propertyData) return null;

  const handleContactAgent = (property: PropertyDetail) => {
    const message = `I am interested in ${property.title} located at ${property.location}.\n\nProperty Details:\n- Price: ${property.price}\n- Area: ${property.area}\n\nPlease provide more information about this property.`;
    
    // Store the message in localStorage to persist it across navigation
    localStorage.setItem('propertyInquiryMessage', message);
    
    // Navigate to contact page with hash
    navigate('/contact#contact');
    
    // Close the modal
    setSelectedProperty(null);
  };

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
                    <button 
                      onClick={() => setSelectedProperty(property)}
                      className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-lg transition-colors duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-72 object-cover rounded-t-xl"
              />
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedProperty.title}</h2>
                <p className="text-gray-600 mt-2">{selectedProperty.location}</p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-primary text-2xl font-bold">{selectedProperty.price}</span>
                <span className="text-gray-600">{selectedProperty.area}</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-600">{selectedProperty.description}</p>
              </div>

              {selectedProperty.specifications && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(selectedProperty.specifications).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-600 capitalize">{key}:</span>
                        <span className="font-medium ml-2">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProperty.amenities && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedProperty.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProperty.highlights && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProperty.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <button 
                  onClick={() => handleContactAgent(selectedProperty)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                >
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Properties;
