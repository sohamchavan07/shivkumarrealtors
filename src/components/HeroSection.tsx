import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-pune-skyline.jpg";

const stats = [
  { number: "100", suffix: "+", label: "Projects Complete" },
  { number: "70", suffix: "+", label: "Happy Clients" },
  { number: "₹5", suffix: "cr+", label: "Project Value" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pune Skyline - Premium Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 tracking-tight">
            FIND YOUR PERFECT
            <span className="block">HOME TODAY</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-primary-foreground/70 max-w-lg mb-8 leading-relaxed">
            We provide tailored real estate solutions, guiding you through every step with personalized 
            experiences that meet your unique needs and aspirations.
          </p>

          {/* CTA Button */}
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-card text-foreground border-0 hover:bg-card/90 rounded-full px-6 py-6 group"
            asChild
          >
            <Link to="/properties">
              Explore Properties
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>

          {/* Stats Row */}
          <div className="flex items-center gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-primary-foreground">
                <div className="font-display text-3xl md:text-4xl font-bold">
                  {stat.number}<span className="text-primary-foreground/80">{stat.suffix}</span>
                </div>
                <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Right Card - Featured Agents */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-4 bg-card/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
        <div className="flex -space-x-3">
          {["SC", "AP", "SM", "RK"].map((initials, i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-charcoal to-charcoal-light border-2 border-card flex items-center justify-center"
            >
              <span className="text-xs font-semibold text-primary-foreground">{initials}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">10+ Featured Agents</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
            ))}
            <span className="text-sm text-muted-foreground ml-1">5 / 5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
