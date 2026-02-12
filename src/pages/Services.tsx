import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/CTASection";
import { Building2, Home, Key, TrendingUp, Calculator, Palmtree, FileText, Handshake } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Luxury Property Sales",
    description: "Premium residential and commercial properties in Pune's most sought-after locations. We specialize in high-end villas, penthouses, and premium apartments.",
    features: ["Exclusive listings", "Market analysis", "Negotiation support", "Legal assistance"],
  },
  {
    icon: TrendingUp,
    title: "Investment Properties",
    description: "High-return investment opportunities including commercial spaces, pre-launch projects, and rental income properties.",
    features: ["ROI analysis", "Portfolio diversification", "Pre-launch access", "Rental yield optimization"],
  },
  {
    icon: Palmtree,
    title: "Vacation & Resort Properties",
    description: "Exclusive vacation homes and resort properties in Maharashtra's scenic locations. Perfect for getaways and rental income.",
    features: ["Hill station properties", "Beach houses", "Resort partnerships", "Managed rentals"],
  },
  {
    icon: Key,
    title: "Property Management",
    description: "End-to-end property management services ensuring your investment is well-maintained and generates optimal returns.",
    features: ["Tenant management", "Maintenance coordination", "Rent collection", "Property inspection"],
  },
  {
    icon: Home,
    title: "Investment Consulting",
    description: "Expert advice on real estate investments to maximize your returns. We help you identify the best opportunities aligned with your goals.",
    features: ["Market research", "Risk assessment", "Investment planning", "Exit strategies"],
  },
  {
    icon: Calculator,
    title: "Property Valuation",
    description: "Accurate property valuations backed by comprehensive market research and analysis for buying, selling, or loan purposes.",
    features: ["Comparative analysis", "Location assessment", "Future value projection", "Documentation support"],
  },
  {
    icon: FileText,
    title: "Documentation & Legal",
    description: "Complete assistance with property documentation, verification, and legal processes to ensure smooth transactions.",
    features: ["Title verification", "Agreement drafting", "Registration support", "Due diligence"],
  },
  {
    icon: Handshake,
    title: "Home Loan Assistance",
    description: "We partner with leading banks to help you secure the best home loan options with competitive interest rates.",
    features: ["Bank partnerships", "Rate comparison", "Document preparation", "Processing support"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Comprehensive <br />
                <span className="text-primary">Real Estate Solutions</span>
              </h1>
              <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                From luxury property sales to investment consulting, we offer end-to-end services tailored to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground text-lg">
                A simple, transparent process designed around your needs
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Share your requirements and preferences with our experts" },
                { step: "02", title: "Curation", desc: "We curate properties matching your criteria and budget" },
                { step: "03", title: "Site Visits", desc: "Accompanied visits to shortlisted properties" },
                { step: "04", title: "Closure", desc: "Complete documentation and hassle-free registration" },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-foreground flex items-center justify-center mb-4">
                    <span className="font-display text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
