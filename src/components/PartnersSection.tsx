import { ExternalLink } from "lucide-react";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/use-gsap";
import afroPlaneteers from "@/assets/afro-planeteers.png";
import hachac from "@/assets/hachac.png";
import hashtheory from "@/assets/hashtheory.png";
import others from "@/assets/others.png";

const partners = [
  {
    name: "Afro-Planeteers Academy",
    logo: afroPlaneteers,
    description:
      "Youth sustainability and environmental innovation academy empowering the next generation of African changemakers.",
    link: "https://www.instagram.com/sandile_gq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "HACHAC Foundation",
    logo: hachac,
    description:
      "Help A Child Have A Career — dedicated to providing career development and educational support to underserved youth.",
    link: "https://www.instagram.com/hachacfoundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "HashTheory – Tech Debate",
    logo: hashtheory,
    description:
      "Creative studio driving critical thinking through technology debates and innovation forums for young minds.",
    link: "https://linktr.ee/tebogonyowas1",
  },
  {
    name: "Others Worldwide",
    logo: others,
    description:
      "Skateboarding and creative youth culture platform building community through sport, art, and expression.",
    link: "https://www.instagram.com/others.lifestyle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

const PartnersSection = () => {
  const headerRef = useGsapFadeIn<HTMLDivElement>();
  const gridRef = useGsapStagger<HTMLDivElement>(".partner-card", {
    stagger: 0.12,
  });

  return (
    <section
      id="partners"
      className="py-20 md:py-28"
      style={{ background: "var(--section-gradient)" }}
    >
      <div className="container">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Our Founders
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            The Founders
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card group bg-card rounded-2xl p-7 border border-border shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center opacity-0"
            >
              <div className="w-24 h-24 mb-5 flex items-center justify-center">
                <img
                  src={typeof p.logo === 'string' ? p.logo : p.logo.src}
                  alt={p.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-2">
                {p.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                Visit <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
