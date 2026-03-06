import { GraduationCap, Bot, MessageSquare, Music, Users } from "lucide-react";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/use-gsap";

const programs = [
  { icon: GraduationCap, title: "Leadership Legacy Academy", desc: "Intensive leadership and mentorship program for emerging young leaders." },
  { icon: Bot, title: "Coding and Robotics Labs", desc: "Hands-on workshops teaching coding, robotics, and AI fundamentals." },
  { icon: MessageSquare, title: "Future Minds Tech Debate", desc: "Youth-driven debates on ethical technology, AI, and innovation." },
  { icon: Music, title: "Creative Culture Programs", desc: "Programs celebrating skateboarding, art, fashion, and creative expression." },
  { icon: Users, title: "Community Innovation Workshops", desc: "Collaborative workshops solving real-world community challenges." },
];

const ProgramsSection = () => {
  const headerRef = useGsapFadeIn<HTMLDivElement>();
  const gridRef = useGsapStagger<HTMLDivElement>(".program-card", { stagger: 0.1 });

  return (
    <section id="programs" className="py-20 md:py-28">
      <div className="container">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4 block">Our Programs</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Shaping Future Leaders</h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div key={prog.title} className="program-card group relative bg-card rounded-2xl p-7 border border-border hover:border-primary/30 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 opacity-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{prog.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prog.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
