import { Crown, Code, Brain, Palette } from "lucide-react";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/use-gsap";

const areas = [
  { icon: Crown, title: "Leadership Development", description: "Mentorship, leadership programs, and career development empowering youth to become community leaders.", color: "primary" as const },
  { icon: Code, title: "Technology & Digital Skills", description: "Coding, robotics, AI literacy, and digital innovation preparing youth for the tech-driven future.", color: "secondary" as const },
  { icon: Brain, title: "Innovation & Critical Thinking", description: "Technology debates, future thinking, and ethical discussions about emerging technologies.", color: "accent" as const },
  { icon: Palette, title: "Culture & Creative Expression", description: "Creative youth culture including art, skateboarding, fashion, and community events.", color: "primary" as const },
];

const colorClasses = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
};

const FocusAreasSection = () => {
  const headerRef = useGsapFadeIn<HTMLDivElement>();
  const gridRef = useGsapStagger<HTMLDivElement>(".focus-card", { stagger: 0.12 });

  return (
    <section id="focus-areas" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
      <div className="container">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">What We Focus On</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Four Pillars of Impact</h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            const cls = colorClasses[area.color];
            return (
              <div key={area.title} className="focus-card bg-card rounded-2xl p-7 border border-border shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1 transition-all duration-300 opacity-0">
                <div className={`w-14 h-14 rounded-2xl ${cls.bg} flex items-center justify-center mb-5`}>
                  <Icon className={cls.text} size={28} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
