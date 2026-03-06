import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import alphaLogo from "@/assets/alpha-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Programs", href: "#programs" },
  { label: "Partners", href: "#partners" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={alphaLogo} alt="Alpha-Gen Ready" className="h-10 md:h-12 w-auto" />
          <span className="font-heading font-bold text-lg text-foreground hidden sm:inline">Alpha-Gen Ready</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90">
            Get Involved
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border pb-4">
          <div className="container flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 w-fit">
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
