import { useEffect, useState } from "react";
import { Instagram as InstagramIcon, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import useReveal from "../hooks/useReveal";

export const INSTAGRAM_URL = "https://www.instagram.com/ctpedroalbuquerque";
export const INSTAGRAM_HANDLE = "@ctpedroalbuquerque";

const fallbackTiles = [
  { label: "Treino do Dia", subtitle: "Boxe · Sparring", gradient: "linear-gradient(135deg, #2a0a0f 0%, #ff1744 100%)", pattern: "diagonal" },
  { label: "Bastidor", subtitle: "Muay Thai · Kids", gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)", pattern: "dots" },
  { label: "Dica do Coach", subtitle: "Técnica · Postura", gradient: "linear-gradient(135deg, #ff1744 0%, #7a0019 100%)", pattern: "stripes" },
  { label: "Reels", subtitle: "Kickboxing · Combo 3", gradient: "linear-gradient(135deg, #0a0a0b 0%, #ff1744 130%)", pattern: "grid" },
  { label: "Aluno em Foco", subtitle: "Antes & Depois", gradient: "linear-gradient(135deg, #1a1a1a 0%, #ff3d62 130%)", pattern: "diagonal" },
  { label: "Eventos", subtitle: "Campeonato Interno", gradient: "linear-gradient(135deg, #ff1744 0%, #1a1a1a 100%)", pattern: "stripes" },
];

const Patterns = {
  diagonal: "repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0 2px, transparent 2px 14px)",
  dots: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.5px) 0 0 / 14px 14px",
  stripes: "repeating-linear-gradient(90deg, rgba(0,0,0,0.2) 0 3px, transparent 3px 24px)",
  grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px, linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px",
};

export const Instagram = () => {
  const { ref, visible } = useReveal();
  const [tiles, setTiles] = useState(fallbackTiles);

  useEffect(() => {
    fetch("/instagram-cache.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const updatedTiles = fallbackTiles.map((tile, idx) => {
            // REGRA DA PRIMEIRA IMAGEM: Se for o card 0, tenta puxar especificamente o 'storyImage'
            if (idx === 0 && data.storyImage) {
              return {
                ...tile,
                label: "Story Ativo",
                subtitle: "Assista Agora",
                instagramImage: data.storyImage,
                isStory: true // Marcador para usarmos a borda gradiente do Instagram
              };
            }
            
            // Os outros cards (1 a 5) continuam puxando as fotos normais do Feed do array 'feedImages'
            const feedImgUrl = data.feedImages?.[idx - 1]?.url || null;
            return {
              ...tile,
              instagramImage: feedImgUrl
            };
          });
          setTiles(updatedTiles);
        }
      })
      .catch((err) => console.log("Usando placeholders de segurança do Instagram:", err));
  }, []);

  return (
    <section
      id="instagram"
      data-testid="instagram-section"
      ref={ref}
      className="relative bg-black py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(255,23,68,0.12) 0%, rgba(0,0,0,0) 55%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div
          className={`grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-[var(--brand-accent)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--brand-accent)] font-semibold">
                Instagram
              </span>
            </div>
            <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Veja o CT
              <br />
              <span className="text-white/40">por dentro.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/55 leading-relaxed max-w-lg">
              Treinos, bastidores, dicas técnicas e a evolução dos nossos alunos
              — tudo em primeira mão no nosso Instagram.
            </p>
          </div>

          {/* Handle card */}
          <div className="lg:col-span-5 lg:col-start-8 flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="instagram-handle-card"
              className="group w-full bg-[#0a0a0b] border border-white/10 p-6 md:p-7 hover:border-[var(--brand-accent)]/50 transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4] flex-shrink-0">
                    <InstagramIcon className="w-5 h-5 text-white" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Siga no Instagram
                    </div>
                    <div className="text-sm md:text-base font-semibold text-white truncate">
                      {INSTAGRAM_HANDLE}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[var(--brand-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </div>

              <div className="mt-6 flex items-center gap-5 text-xs text-white/50">
                <span>
                  <span className="text-white font-semibold text-sm">Daily</span>
                  <span className="block uppercase tracking-[0.18em] text-[10px] mt-0.5">
                    Conteúdo
                  </span>
                </span>
                <span className="h-7 w-px bg-white/10" />
                <span>
                  <span className="text-white font-semibold text-sm">Reels</span>
                  <span className="block uppercase tracking-[0.18em] text-[10px] mt-0.5">
                    Técnica
                  </span>
                </span>
                <span className="h-7 w-px bg-white/10" />
                <span>
                  <span className="text-white font-semibold text-sm">Lives</span>
                  <span className="block uppercase tracking-[0.18em] text-[10px] mt-0.5">
                    Aulas
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Tile grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: visible ? "200ms" : "0ms" }}
        >
          {tiles.map((t, idx) => {
            // Se for o primeiro card e for um story ativo, manda direto pro link de stories da página
            const targetUrl = t.isStory 
              ? `${INSTAGRAM_URL}/stories` 
              : INSTAGRAM_URL;

            return (
              <a
                key={idx}
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`instagram-tile-${idx}`}
                className={`group relative aspect-square overflow-hidden border transition-all bg-cover bg-center ${
                  t.isStory 
                    ? "border-transparent ring-2 ring-pink-600 ring-offset-2 ring-offset-black animate-pulse" 
                    : "border-white/5 hover:border-[var(--brand-accent)]/40"
                }`}
                style={{ 
                  backgroundImage: t.instagramImage ? `url(${t.instagramImage})` : t.gradient 
                }}
              >
                {t.instagramImage && (
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-0" />
                )}

                <div
                  className="absolute inset-0 mix-blend-overlay z-10"
                  style={{ background: Patterns[t.pattern] }}
                />
                
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between z-20">
                  <div className="flex items-start justify-between">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white font-semibold shadow-sm">
                      /{String(idx + 1).padStart(2, "0")}
                    </span>
                    <InstagramIcon
                      className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:scale-110 transition-transform drop-shadow"
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <div className="text-[11px] md:text-sm font-bold text-white leading-tight drop-shadow-md">
                      {t.label}
                    </div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-white/90 mt-0.5 drop-shadow-sm">
                      {t.subtitle}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center z-30">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] md:text-xs uppercase tracking-[0.25em] text-white font-semibold flex items-center gap-1.5">
                    {t.isStory ? "Ver Story" : "Ver no Insta"} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA below grid */}
        <div
          className={`mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: visible ? "400ms" : "0ms" }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/40 text-center sm:text-left">
            Conteúdo novo toda semana
          </p>
          <Button
            asChild
            data-testid="instagram-follow-button"
            className="bg-gradient-to-tr from-[#F77737] via-[#E1306C] to-[#833AB4] hover:brightness-110 text-white font-bold uppercase tracking-[0.15em] text-xs md:text-sm rounded-none h-12 md:h-14 px-7 md:px-9 border-0 transition-all w-full sm:w-auto"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" strokeWidth={2.2} />
              Seguir no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
