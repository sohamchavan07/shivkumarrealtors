import { Home, Users, FileText, TrendingUp, DollarSign, Settings } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Expertly promoting and selling your property to attract qualified buyers.",
  },
  {
    icon: Users,
    title: "Buyer Representation",
    description: "Guiding you through the home-buying process, prioritizing your interests.",
  },
  {
    icon: FileText,
    title: "Rental Management",
    description: "Managing tenant relations, maintenance, and finances to maximize rental returns.",
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Providing strategic advice to help you capitalize on real estate opportunities.",
  },
  {
    icon: DollarSign,
    title: "Property Valuation",
    description: "Accurately assessing your property's value for sales, purchases, or investments.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "Delivering customized real estate services aligned with your specific goals.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-muted-foreground text-sm font-medium mb-3 block">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Explore our range of expert real estate services
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
