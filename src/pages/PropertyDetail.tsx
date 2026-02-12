import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getPropertyById } from "@/data/properties";
import { 
  MapPin, Bed, Bath, Square, Calendar, ArrowLeft, Phone, Mail, 
  Check, Home, Car, Shield, Wifi, Droplets, Zap
} from "lucide-react";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = getPropertyById(Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container-custom py-20 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Property Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/properties")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/50 py-4">
          <div className="container-custom">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/properties" className="text-muted-foreground hover:text-primary">Properties</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{property.title}</span>
            </div>
          </div>
        </div>

        {/* Property Images */}
        <section className="py-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Main Image */}
              <div className="lg:col-span-2">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={property.images[selectedImage]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold text-charcoal">
                    {property.type}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-success text-primary-foreground">
                    {property.status}
                  </Badge>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex lg:flex-col gap-4">
                {property.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 lg:h-[156px] flex-1 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Title & Location */}
                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{property.address}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <Bed className="w-6 h-6 mx-auto text-primary mb-2" />
                    <p className="text-lg font-semibold text-foreground">{property.beds}</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <Bath className="w-6 h-6 mx-auto text-primary mb-2" />
                    <p className="text-lg font-semibold text-foreground">{property.baths}</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <Square className="w-6 h-6 mx-auto text-primary mb-2" />
                    <p className="text-lg font-semibold text-foreground">{property.area}</p>
                    <p className="text-sm text-muted-foreground">Total Area</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <Calendar className="w-6 h-6 mx-auto text-primary mb-2" />
                    <p className="text-lg font-semibold text-foreground">{property.yearBuilt}</p>
                    <p className="text-sm text-muted-foreground">Year Built</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    About This Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Property Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Building Amenities
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Price Card */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card sticky top-24">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                    <p className="font-display text-3xl font-bold text-primary">
                      {property.price}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {property.pricePerSqFt}
                    </p>
                  </div>

                  {/* Agent Info */}
                  <div className="p-4 rounded-xl bg-secondary/50 mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Listed By</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold">
                          {property.agent.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{property.agent.name}</p>
                        <p className="text-sm text-muted-foreground">Property Expert</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <Button variant="default" className="w-full" asChild>
                      <a href={`tel:${property.agent.phone}`}>
                        <Phone className="w-4 h-4" />
                        Call Agent
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`mailto:${property.agent.email}?subject=Inquiry about ${property.title}`}>
                        <Mail className="w-4 h-4" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">
                        Schedule Visit
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Back Button */}
                <Button variant="ghost" className="w-full" onClick={() => navigate("/properties")}>
                  <ArrowLeft className="w-4 h-4" />
                  Back to Properties
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PropertyDetail;
