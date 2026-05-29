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

      // Se o menu mobile estiver aberto, NÃO esconde a navbar ao rolar a página por trás
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
  }, [menuOpen]); // Recalcula corretamente quando o menu muda de estado

  // Trava o scroll do body quando o menu mobile está aberto
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
    // Timeout leve para esperar o menu fechar antes de rolar suavemente
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        scrolled || menuOpen
          ? "bg-black/90 backdrop-blur-md border-b border-white/5 shadow-xl"
          : "bg-transparent"
      } ${
        // Se o menu estiver aberto, a Navbar DEVE ficar visível (translate-y-0)
        visible || menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Main Flex container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-10 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-3 relative">
        
        {/* Brand Logo & Stacked Text Container - CORRIGIDO O ALINHAMENTO VERTICAL */}
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-center gap-2 group min-w-0 transition-all duration-300" 
          onClick={() => setMenuOpen(false)}
        >
          {/* Accent Bar */}
          <span className="h-10 sm:h-12 w-1.5 bg-[var(--brand-accent)] block group-hover:h-14 transition-all flex-shrink-0" />
          
          {/* Image Logo */}
          <img 
            src="/CT_pedro.png" 
            alt="CT Pedro Albuquerque Logo" 
            className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] flex-shrink-0"
          />

          {/* Bloco de Texto */}
          <div className="flex flex-col font-display uppercase tracking-tighter italic leading-[0.9] text-left select-none pl-1 justify-center">
            <span className="text-white text-base sm:text-lg md:text-xl font-black">
              CT
            </span>
            <span className="text-red-600 text-lg sm:text-xl md:text-2xl font-black whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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

          {/* Botão de três barras modificado para garantir o clique limpo */}
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
