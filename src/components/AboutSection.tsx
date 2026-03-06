import { Target, Eye } from "lucide-react";
import { useGsapFadeIn } from "@/hooks/use-gsap";

const AboutSection = () => {
  const headerRef = useGsapFadeIn<HTMLDivElement>();
  const missionRef = useGsapFadeIn<HTMLDivElement>({ x: -30, y: 0 });
  const visionRef = useGsapFadeIn<HTMLDivElement>({ x: 30, y: 0 });

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4 block">About the Initiative</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Building a Future-Ready Generation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alpha-Gen Ready brings together organisations focused on youth development, digital education, creative culture, and community innovation. Together, we create pathways for young people across South Africa to lead, learn, and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div ref={missionRef} className="bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To equip young people with the skills, confidence, and opportunities needed to thrive in the future — through collaborative programs that bridge leadership, technology, and creativity.
            </p>
          </div>

          <div ref={visionRef} className="bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow border border-border">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
              <Eye className="text-secondary" size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A South Africa where every young person has access to future-ready education, mentorship, and the creative freedom to shape their communities and the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
