import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919860718383"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+919860718383"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-red hover:scale-110 transition-transform duration-300 group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
