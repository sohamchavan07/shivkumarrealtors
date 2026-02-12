import propertyVilla from "@/assets/property-villa-1.jpg";
import propertyApartment from "@/assets/property-apartment-1.jpg";
import propertyPenthouse from "@/assets/property-penthouse-1.jpg";

export interface Property {
  id: number;
  image: string;
  images: string[];
  title: string;
  location: string;
  address: string;
  price: string;
  pricePerSqFt: string;
  beds: number;
  baths: number;
  area: string;
  type: string;
  status: string;
  yearBuilt: number;
  description: string;
  features: string[];
  amenities: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    image: propertyVilla,
    images: [propertyVilla, propertyApartment, propertyPenthouse],
    title: "Luxury Villa in Koregaon Park",
    location: "Koregaon Park, Pune",
    address: "Plot No. 45, Lane 7, Koregaon Park, Pune - 411001",
    price: "₹2.5 Cr - ₹3.5 Cr",
    pricePerSqFt: "₹7,500/sq.ft",
    beds: 4,
    baths: 4,
    area: "4,500 sq.ft",
    type: "Villa",
    status: "Ready to Move",
    yearBuilt: 2022,
    description: "Experience luxury living at its finest in this stunning 4-bedroom villa located in the heart of Koregaon Park. This meticulously designed property offers spacious interiors, premium finishes, and a private garden. Perfect for families seeking an upscale lifestyle in Pune's most prestigious neighborhood.",
    features: [
      "Private Garden & Lawn",
      "Modular Kitchen with Appliances",
      "Italian Marble Flooring",
      "Home Automation System",
      "Private Parking for 3 Cars",
      "Servant Quarters",
      "Terrace with City View",
      "24/7 Security with CCTV"
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Clubhouse",
      "Children's Play Area",
      "Jogging Track",
      "Landscaped Gardens",
      "Power Backup",
      "Water Supply 24/7"
    ],
    agent: {
      name: "Shiv Kumar",
      phone: "+91 98765 43210",
      email: "shiv@shivkumarrealtors.com"
    }
  },
  {
    id: 2,
    image: propertyApartment,
    images: [propertyApartment, propertyVilla, propertyPenthouse],
    title: "Premium Apartment in Baner",
    location: "Baner, Pune",
    address: "Tower A, Sky Heights, Baner Road, Pune - 411045",
    price: "₹1.2 Cr - ₹1.8 Cr",
    pricePerSqFt: "₹6,500/sq.ft",
    beds: 3,
    baths: 2,
    area: "2,200 sq.ft",
    type: "Apartment",
    status: "Ready to Move",
    yearBuilt: 2023,
    description: "Modern 3-bedroom apartment in the rapidly developing Baner area. This property features contemporary design, excellent ventilation, and stunning views of the hills. Ideal for young professionals and families looking for a well-connected location with all modern amenities.",
    features: [
      "Balcony with Hill View",
      "Semi-Furnished with Wardrobes",
      "Vitrified Tile Flooring",
      "Video Door Phone",
      "Covered Car Parking",
      "Piped Gas Connection",
      "High-Speed Elevator",
      "Fire Safety Systems"
    ],
    amenities: [
      "Rooftop Infinity Pool",
      "State-of-art Gym",
      "Indoor Games Room",
      "Party Hall",
      "Meditation Garden",
      "EV Charging Station",
      "Concierge Services",
      "Guest Suites"
    ],
    agent: {
      name: "Priya Sharma",
      phone: "+91 98765 43211",
      email: "priya@shivkumarrealtors.com"
    }
  },
  {
    id: 3,
    image: propertyPenthouse,
    images: [propertyPenthouse, propertyVilla, propertyApartment],
    title: "Sky Penthouse in Kharadi",
    location: "Kharadi, Pune",
    address: "Penthouse Floor, EON IT Park Road, Kharadi, Pune - 411014",
    price: "₹4.5 Cr - ₹5.5 Cr",
    pricePerSqFt: "₹9,000/sq.ft",
    beds: 5,
    baths: 5,
    area: "6,000 sq.ft",
    type: "Penthouse",
    status: "Under Construction",
    yearBuilt: 2024,
    description: "Ultra-luxurious penthouse offering panoramic views of Pune's skyline. This exclusive property spans the entire top floor with private terrace, swimming pool, and world-class finishes. A rare opportunity for those who demand nothing but the absolute best in luxury real estate.",
    features: [
      "Private Rooftop Pool",
      "360° City Views",
      "Smart Home Technology",
      "Private Elevator Access",
      "Wine Cellar",
      "Home Theater Room",
      "Jacuzzi & Spa Room",
      "Designer Interiors"
    ],
    amenities: [
      "Helipad Access",
      "Sky Lounge",
      "Business Center",
      "Valet Parking",
      "Personal Butler Service",
      "Premium Security",
      "Concierge Desk",
      "Private Garden Deck"
    ],
    agent: {
      name: "Rahul Deshmukh",
      phone: "+91 98765 43212",
      email: "rahul@shivkumarrealtors.com"
    }
  }
];

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(p => p.id === id);
};
