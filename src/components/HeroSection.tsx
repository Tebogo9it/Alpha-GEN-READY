import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/hooks/use-gsap";
import { ArrowRight, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-badge", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".hero-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(".hero-desc", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(".hero-buttons", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");

      // Parallax on hero image
      gsap.to(".hero-bg-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Youth learning" className="hero-bg-img w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="hero-badge inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-secondary mb-6 border border-secondary/30 opacity-0">
            South Africa's Youth Innovation Initiative
          </span>

          <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 opacity-0">
            Alpha-Gen Ready –{" "}
            <span className="text-accent">Preparing the Next Generation</span>{" "}
            for the Future
          </h1>

          <p className="hero-desc text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed opacity-0">
            A collaboration of organisations empowering youth through leadership, technology education, innovation, creativity, and sustainability.
          </p>

          <div className="hero-buttons flex flex-wrap gap-4 opacity-0">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 gap-2">
              Explore the Movement <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 gap-2"
            >
              <Handshake size={18} /> Become a Partner
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
