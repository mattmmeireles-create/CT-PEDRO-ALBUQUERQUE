import { useEffect, useState } from "react";
import { Button } from "./ui/button"; 
import { Instagram as InstagramIcon, Menu, X } from "lucide-react";
import { INSTAGRAM_URL } from "./Instagram";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) return;

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); 
      } else {
        setVisible(true); 
      }

      setScrolled(currentScrollY > 24);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToId = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-[transform,opacity,background-color] duration-500 ease-in-out ${
        scrolled || menuOpen
          ? "bg-black/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      } ${
        visible || menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Main Flex container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-10 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-3 relative">
        
        {/* Brand Logo & Stacked Text Container - ABAIXADO EXTRA NO MOBILE */}
        <a
          href="#top"
          data-testid="brand-logo"
          // SOLUÇÃO: 'translate-y-7' joga bem para baixo no mobile, 'md:translate-y-8' preserva o desktop.
          className="flex items-center gap-2 group min-w-0 transition-[transform,opacity] duration-300 transform translate-y-7 md:translate-y-8" 
          onClick={() => setMenuOpen(false)}
        >
          {/* Accent Bar */}
          <span className="h-12 sm:h-16 w-2 bg-[var(--brand-accent)] block group-hover:h-20 transition-all flex-shrink-0" />
          
          {/* Image Logo */}
          <img 
            src="/CT_pedro.png" 
            alt="CT Pedro Albuquerque Logo" 
            className="h-16 sm:h-24 md:h-32 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)] flex-shrink-0"
          />

          {/* Bloco de Texto */}
          <div className="flex flex-col font-display uppercase tracking-tighter italic leading-[0.85] text-left select-none pl-1 justify-center">
            <span className="text-white text-lg sm:text-2xl md:text-3xl font-black">
              CT
            </span>
            <span className="text-red-600 text-xl sm:text-3xl md:text-4xl font-black whitespace-nowrap drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
              Pedro Albuquerque
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm uppercase tracking-[0.18em] text-white/70 font-medium">
          <button onClick={() => scrollToId("modalidades")} className="hover:text-white transition-colors" data-testid="nav-modalities">
            Modalidades
          </button>
          <button onClick={() => scrollToId("autoridade")} className="hover:text-white transition-colors" data-testid="nav-authority">
            Autoridade
          </button>
          <button onClick={() => scrollToId("instagram")} className="hover:text-white transition-colors" data-testid="nav-instagram-link">
            Instagram
          </button>
          <button onClick={() => scrollToId("depoimentos")} className="hover:text-white transition-colors" data-testid="nav-testimonials">
            Depoimentos
          </button>
        </nav>

        {/* Action Buttons & Hamburger Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-instagram"
            aria-label="Instagram"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/15 text-white hover:bg-gradient-to-tr hover:from-[#F77737] hover:via-[#E1306C] hover:to-[#833AB4] hover:border-transparent transition-all"
          >
            <InstagramIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.2} />
          </a>
          
          <Button
            onClick={() => window.open(
              "https://wa.me/5521982478764?text=Olá,%20quero%20a%20Aula%20Grátis!", 
              "_blank"
            )}
            data-testid="nav-cta-button"
            className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-black font-semibold rounded-none px-3 sm:px-4 md:px-6 h-9 sm:h-10 md:h-11 tracking-wide uppercase text-[11px] sm:text-xs md:text-sm border-0"
          >
            <span className="hidden sm:inline">Aula Grátis</span>
            <span className="sm:hidden">Grátis</span>
          </Button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            data-testid="nav-mobile-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden w-9 h-9 flex items-center justify-center border border-white/15 text-white z-50 unique-hamburger-button"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer Container */}
      <div
        data-testid="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-1 bg-black/95 backdrop-blur-md global-mobile-nav">
          {[
            { id: "modalidades", label: "Modalidades" },
            { id: "autoridade", label: "Autoridade" },
            { id: "instagram", label: "Instagram" },
            { id: "depoimentos", label: "Depoimentos" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-left py-3 text-white/80 hover:text-white text-sm uppercase tracking-[0.15em] border-b border-white/5 last:border-0 flex items-center justify-between"
            >
              {item.label}
              <span className="text-[var(--brand-accent)] text-xs">→</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
