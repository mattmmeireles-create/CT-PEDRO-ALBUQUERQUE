import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-center gap-2 group"
        >
          <span className="h-7 w-1.5 bg-[var(--brand-accent)] block group-hover:h-8 transition-all" />
          <span className="font-display text-lg md:text-xl tracking-tight text-white whitespace-nowrap">
            <span className="text-[var(--brand-accent)]">CT</span> PEDRO ALBUQUERQUE
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.18em] text-white/70 font-medium">
          <button
            onClick={() => scrollToId("modalidades")}
            className="hover:text-white transition-colors"
            data-testid="nav-modalities"
          >
            Modalidades
          </button>
          <button
            onClick={() => scrollToId("autoridade")}
            className="hover:text-white transition-colors"
            data-testid="nav-authority"
          >
            Autoridade
          </button>
          <button
            onClick={() => scrollToId("depoimentos")}
            className="hover:text-white transition-colors"
            data-testid="nav-testimonials"
          >
            Depoimentos
          </button>
        </nav>

        <Button
          onClick={() => scrollToId("cta")}
          data-testid="nav-cta-button"
          className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-black font-semibold rounded-none px-4 md:px-6 h-10 md:h-11 tracking-wide uppercase text-xs md:text-sm border-0"
        >
          Aula Grátis
        </Button>
      </div>
    </header>
  );
};
