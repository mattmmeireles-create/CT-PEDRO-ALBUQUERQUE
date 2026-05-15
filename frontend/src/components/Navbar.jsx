import { useEffect, useState } from "react";
import { Button } from "./ui/button";           // ← Keep only this one
import { Instagram as InstagramIcon, Menu, X } from "lucide-react";
import { INSTAGRAM_URL } from "./Instagram";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToId = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-black/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-10 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-3">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-center gap-2 group min-w-0"
          onClick={() => setMenuOpen(false)}
        >
          <span className="h-6 sm:h-7 w-1.5 bg-[var(--brand-accent)] block group-hover:h-8 transition-all flex-shrink-0" />
          <span className="font-display text-[15px] sm:text-lg md:text-xl tracking-tight text-white whitespace-nowrap">
            <span className="text-[var(--brand-accent)]">CT</span>
            <span className="hidden xs:inline"> PEDRO ALBUQUERQUE</span>
            <span className="inline xs:hidden"> PEDRO A.</span>
          </span>
        </a>

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
            onClick={() => setMenuOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden w-9 h-9 flex items-center justify-center border border-white/15 text-white"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        data-testid="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-1 bg-black/95 backdrop-blur-md">
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
