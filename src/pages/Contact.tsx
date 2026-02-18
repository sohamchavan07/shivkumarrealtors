import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xykdpdeg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyType: formData.propertyType || "Not specified",
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. Our team will contact you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", propertyType: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: (
        <p className="text-muted-foreground">
          Office 201, Business Hub,<br />
          FC Road, Shivajinagar,<br />
          Pune - 411005
        </p>
      ),
    },
    {
      icon: Phone,
      title: "Call Us",
      content: (
        <a href="tel:+919860718383" className="text-muted-foreground hover:text-primary transition-colors">
          +91 98765 43210
        </a>
      ),
    },
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <a href="mailto:info@shivkumarrealtors.com" className="text-muted-foreground hover:text-primary transition-colors">
          info@shivkumarrealtors.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: (
        <p className="text-muted-foreground">
          Mon - Sat: 9:00 AM - 7:00 PM<br />
          Sunday: By Appointment
        </p>
      ),
    },
  ];

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
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                Ready to find your dream property? Contact us for a free consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <span className="text-muted-foreground text-sm font-medium mb-3 block">Contact Information</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking to buy, sell, or invest in property, our team of experts 
                  is here to help. Reach out to us and let's discuss your real estate goals.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="Your name"
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 1234567890"
                        maxLength={15}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="your@email.com"
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Property Type Interest
                    </label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="plot">Plot / Land</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2587890542384!2d73.84168841489364!3d18.51839118741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4f37c4e7%3A0x8c4dbe4b1e2e1f5!2sFC%20Road%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shiv Kumar Realtors Location"
          />
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
