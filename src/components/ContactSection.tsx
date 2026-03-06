import { useState } from "react";
import { Mail, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useGsapFadeIn } from "@/hooks/use-gsap";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const headerRef = useGsapFadeIn<HTMLDivElement>();
  const infoRef = useGsapFadeIn<HTMLDivElement>({ x: -30, y: 0 });
  const formRef = useGsapFadeIn<HTMLFormElement>({ x: 30, y: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thank you!", description: "Your partnership inquiry has been submitted." });
    setForm({ name: "", email: "", org: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4 block">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Partner With Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div ref={infoRef}>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Let's Build Together</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're an organisation, educator, or community leader — we'd love to hear from you. Join the Alpha-Gen Ready movement and help shape the future.
            </p>
            <div className="space-y-4">
              <a href="mailto:info@alphagenready.org" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="text-sm">info@alphagenready.org</span>
              </a>
              <a href="https://www.instagram.com/alphagenready" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Instagram className="text-accent" size={18} />
                </div>
                <span className="text-sm">@alphagenready</span>
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-card" />
            <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-card" />
            <Input placeholder="Organisation (optional)" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className="bg-card" />
            <Textarea placeholder="How would you like to partner with us?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="bg-card" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Send size={16} /> Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
