import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I start my property search?",
    answer: "Simply contact us through our website, phone, or WhatsApp. Our team will understand your requirements, budget, and preferences to curate a personalized list of properties that match your needs.",
  },
  {
    question: "What's the current market situation in Pune?",
    answer: "Pune's real estate market is experiencing steady growth, especially in areas like Baner, Wakad, Kharadi, and Hinjewadi. With IT sector expansion and infrastructure development, property values are appreciating consistently.",
  },
  {
    question: "How long does property registration take?",
    answer: "Property registration typically takes 1-2 weeks once all documents are in order. We assist with the entire documentation process to ensure a smooth and timely registration.",
  },
  {
    question: "What documents are needed for property purchase?",
    answer: "Essential documents include ID proof (Aadhar/PAN), address proof, income proof, property documents, and photographs. For home loans, additional bank statements and ITR documents are required.",
  },
  {
    question: "How can I invest in premium resort properties?",
    answer: "We offer exclusive resort and vacation property investment opportunities across Maharashtra. These include managed rentals with attractive returns. Contact us for detailed investment packages.",
  },
  {
    question: "What are the tax benefits for property investment?",
    answer: "Property investments offer tax benefits under Section 80C (principal repayment), Section 24 (interest deduction up to ₹2 lakhs for self-occupied properties), and other deductions. We recommend consulting a tax advisor for personalized advice.",
  },
  {
    question: "Can I get property loans through you?",
    answer: "Yes, we have partnerships with leading banks and financial institutions. We assist with loan processing, documentation, and help you secure the best interest rates available in the market.",
  },
  {
    question: "How do you determine property valuation?",
    answer: "Our valuations are based on comprehensive market analysis including location, amenities, construction quality, recent comparable sales, and future development potential in the area.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Help Center
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-gold/30 data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-gold py-5 [&[data-state=open]]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
