import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/hooks/use-gsap";
import { Users, School, BookOpen, Calendar } from "lucide-react";

const metrics = [
  { icon: Users, value: "5,000+", label: "Youth Reached" },
  { icon: School, value: "50+", label: "Schools Engaged" },
  { icon: BookOpen, value: "120+", label: "Programs Delivered" },
  { icon: Calendar, value: "200+", label: "Community Events" },
];

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".impact-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".impact-header", start: "top 85%" } }
      );

      gsap.fromTo(
        ".impact-metric",
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".impact-grid", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.95 }} />
      <div className="container relative z-10">
        <div className="impact-header text-center mb-16 opacity-0">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">Our Impact</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">Making a Difference</h2>
        </div>

        <div className="impact-grid grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="impact-metric text-center opacity-0">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">{m.value}</div>
                <div className="text-primary-foreground/70 text-sm font-medium">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
