import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "Luxury Residences",
    description: "Experience unparalleled elegance in our luxury residences, featuring exquisite design, premium amenities, and prime locations for the most discerning tastes.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: "02",
    title: "Eco Green Buildings",
    description: "Discover sustainable living with our eco-friendly properties. Built with green materials and energy-efficient systems for a better tomorrow.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: "03",
    title: "Unique Vacation Homes",
    description: "Find your perfect getaway with our exclusive vacation properties. From mountain retreats to beachfront villas, we have it all.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-muted-foreground text-sm font-medium mb-3 block">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Our comprehensive services encompass luxury property sales, sustainable green building investments, and premium vacation rentals.
          </p>
        </div>

        {/* Services Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-7xl font-display font-bold text-primary-foreground/20">{activeService.id}</span>
              <h3 className="text-2xl font-display font-bold text-primary-foreground -mt-4">{activeService.title}</h3>
            </div>
          </div>

          {/* Right - Service Tabs */}
          <div className="flex flex-col justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={cn(
                  "group text-left py-6 border-b border-border transition-all duration-300",
                  activeService.id === service.id ? "opacity-100" : "opacity-50 hover:opacity-80"
                )}
              >
                <div className="flex items-start gap-6">
                  <span className={cn(
                    "font-display text-xl font-bold transition-colors",
                    activeService.id === service.id ? "text-primary" : "text-muted-foreground"
                  )}>
                    {service.id}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    {activeService.id === service.id && (
                      <p className="text-muted-foreground text-sm leading-relaxed animate-fade-in">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
