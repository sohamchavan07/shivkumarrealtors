import shiv from "../assets/shivkumar.jpg";
import achyut from "../assets/agents/WhatsApp Image 2025-11-30 at 10.16.55 PM.jpeg";
import samiksha from "../assets/agents/WhatsApp Image 2025-11-30 at 10.19.19 PM.jpeg";

const agents = [
  {
    name: "Shivkumar Chavan",
    role: "Founder",
    initials: "shivkumar",
    image: shiv,
  },
  {
    name: "Achyut Paygude",
    role: "Partner",
    initials: "AP",
    image: achyut,
  },
  {
    name: "Samiksha Chavan",
    role: "Accountant",
    initials: "SM",
    image: samiksha,
  },
];

const AgentsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-muted-foreground text-sm font-medium mb-3 block">Meet Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Personalized Guidance, Proven Expertise
          </h2>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative mx-auto w-48 h-56 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-charcoal to-charcoal-light">
                {agent.image ? (
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-primary-foreground/30">
                      {agent.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {agent.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {agent.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
