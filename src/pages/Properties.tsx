import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Bed, Bath, Square, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import propertyApartment from "@/assets/property-apartment-1.jpg";
import propertyVilla from "@/assets/property-villa-1.jpg";
import propertyPenthouse from "@/assets/property-penthouse-1.jpg";

// Additional properties for the listing page
const allProperties = [
  ...properties,
  {
    id: 4,
    image: propertyApartment,
    title: "Modern Flat in Wakad",
    location: "Wakad, Pune",
    price: "₹85 L - ₹1.1 Cr",
    beds: 2,
    baths: 2,
    area: "1,450 sq.ft",
    type: "Apartment",
  },
  {
    id: 5,
    image: propertyVilla,
    title: "Garden Villa in Aundh",
    location: "Aundh, Pune",
    price: "₹3.2 Cr - ₹4 Cr",
    beds: 5,
    baths: 4,
    area: "5,200 sq.ft",
    type: "Villa",
  },
  {
    id: 6,
    image: propertyPenthouse,
    title: "Executive Penthouse in Hinjewadi",
    location: "Hinjewadi, Pune",
    price: "₹3.8 Cr - ₹4.5 Cr",
    beds: 4,
    baths: 4,
    area: "4,800 sq.ft",
    type: "Penthouse",
  },
];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = propertyType === "all" || property.type.toLowerCase() === propertyType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-charcoal py-16 md:py-24">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Properties in <span className="text-primary">Pune</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Discover premium residential and commercial properties across Pune's prime locations
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-secondary/50 border-b border-border">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by location or property name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-gold text-charcoal text-xs font-semibold">
                        {property.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-primary font-display text-2xl font-bold mb-4">
                      {property.price}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Square className="w-4 h-4" />
                        <span>{property.area}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-4" asChild>
                      <Link to={`/properties/${property.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Properties;
