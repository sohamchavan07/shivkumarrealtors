import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/70" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary-foreground/60 text-sm font-medium mb-3 block">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Let's Make Your Property Journey Effortless
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl">
            Have questions or ready to take the next step? Whether you're looking to buy, rent, or invest, our team is here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-card text-foreground border-0 hover:bg-card/90 rounded-full group"
              asChild
            >
              <Link to="/contact">
                Schedule Consultation
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 rounded-full"
              asChild
            >
              <a href="tel:+919060718383">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
