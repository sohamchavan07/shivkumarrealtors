import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AgentsSection from "@/components/AgentsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Counter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl font-bold text-primary">
      {prefix}{count}{suffix}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Building Trust, <br />
                <span className="text-primary">Delivering Dreams</span>
              </h1>
              <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                Your trusted real estate partner in Pune for over a decade. We combine deep market expertise 
                with a client-first approach to deliver exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: 10, suffix: "+", label: "Years Experience" },
                { number: 150, suffix: "+", label: "Properties Sold" },
                { number: 200, suffix: "+", label: "Happy Clients" },
                { number: 50, prefix: "₹", suffix: "Cr+", label: "Transaction Value" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <Counter target={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-1 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-muted-foreground text-sm font-medium mb-3 block">Our Story</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Building Dreams <br />Since 2014
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded by Shiv Kumar with a vision to transform the real estate experience in Pune, 
                    Shiv Kumar Realtors has grown from a small consultancy to one of the city's most trusted 
                    real estate firms.
                  </p>
                  <p>
                    With over 10 years of experience and 150+ successful transactions, we've helped hundreds 
                    of families find their dream homes and guided investors towards profitable opportunities.
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  {["Deep understanding of Pune's real estate market", "Transparent and honest dealings", "Personalized service for every client"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="default" size="lg" className="mt-8" asChild>
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Image Placeholder with Stats Overlay */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-secondary">
                  <img 
                    src="/placeholder.svg" 
                    alt="Shiv Kumar Realtors office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-lg border border-border max-w-[200px]">
                  <span className="font-display text-3xl font-bold text-primary">10+</span>
                  <p className="text-muted-foreground text-sm mt-1">Years of trusted service in Pune</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-muted-foreground text-sm font-medium mb-3 block">What Drives Us</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Our Mission & Vision
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional real estate services that help our clients make informed decisions, 
                  achieve their property goals, and build lasting wealth through strategic investments in Pune's 
                  dynamic real estate market.
                </p>
              </div>
              <div className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Pune's most trusted real estate partner, known for integrity, expertise, and 
                  delivering exceptional value to every client we serve. We aim to set the industry 
                  standard for customer-centric real estate services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mb-12">
              <span className="text-muted-foreground text-sm font-medium mb-3 block">Core Values</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                What We Stand For
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Award, title: "Integrity", desc: "Honest dealings and transparent processes in every transaction we handle." },
                { icon: Users, title: "Client First", desc: "Your needs and satisfaction are our top priority in every interaction." },
                { icon: Target, title: "Excellence", desc: "Striving for the highest standards in service delivery and results." },
              ].map((value) => (
                <div
                  key={value.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <value.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AgentsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
