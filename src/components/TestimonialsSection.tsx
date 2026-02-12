import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Buying my vacation home was surprisingly easy. The team really knew their stuff and made the whole process super smooth. I didn't have to worry about a thing.",
    name: "Nathan Harper",
    role: "Software Developer",
    rating: 5,
  },
  {
    quote: "They walked me through every step of my green home investment. They explained things clearly, gave great advice, and honestly just made it all feel doable.",
    name: "Logan Price",
    role: "Environmental Consultant",
    rating: 5,
  },
  {
    quote: "Amazing service — super friendly and detail-oriented. I found the perfect rental without any of the usual stress. It actually felt fun.",
    name: "Aria Sullivan",
    role: "Digital Nomad",
    rating: 5,
  },
  {
    quote: "I had no idea where to start with property investment, but they made it all make sense. Patient, clear, and completely on my side the whole time.",
    name: "Grace Powell",
    role: "Financial Consultant",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-muted-foreground text-sm font-medium mb-3 block">What Our Clients Say</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Trusted by Many, Loved by All
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Our clients' success stories reflect our commitment to excellence. See how we've helped them find their dream homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-medium">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
