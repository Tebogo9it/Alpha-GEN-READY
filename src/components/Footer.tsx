"use client";

import alphaLogo from "@/assets/alpha-logo.png";
import { useGsapFadeIn } from "@/hooks/use-gsap";

const Footer = () => {
  const footerRef = useGsapFadeIn<HTMLDivElement>();

  return (
    <footer className="bg-foreground py-12">
      <div className="container" ref={footerRef}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={alphaLogo} alt="Alpha-Gen Ready" className="h-10 w-auto brightness-200" />
            <span className="font-heading font-bold text-background text-lg">Alpha-Gen Ready</span>
          </div>
          <p className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} Alpha-Gen Ready. Empowering the next generation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
