import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import useReveal from "../hooks/useReveal";

// PLACEHOLDER — substituir pelos depoimentos reais
const testimonials = [
  {
    name: "Rafael Monteiro",
    initial: "R",
    color: "#E53935",
    date: "há 2 semanas",
    rating: 5,
    text: "Cheguei sem nunca ter treinado luta. Em 3 meses já sentia outra disposição. Os coaches puxam de verdade, mas com técnica. Ambiente sério, sem aquela vibe de academia comum.",
  },
  {
    name: "Camila Andrade",
    initial: "C",
    color: "#1E88E5",
    date: "há 1 mês",
    rating: 5,
    text: "Faço Muay Thai com o Pedro há 1 ano e meio. Perdi 12kg, ganhei autoconfiança e fiz amizades de verdade. Recomendo demais para mulheres que querem se sentir fortes.",
  },
  {
    name: "Bruno Sampaio",
    initial: "B",
    color: "#43A047",
    date: "há 3 semanas",
    rating: 5,
    text: "Já treinei em outras academias de boxe e nenhuma chega perto da metodologia do CT Pedro Albuquerque. Atenção individualizada, mesmo nas turmas grandes.",
  },
  {
    name: "Larissa Cardoso",
    initial: "L",
    color: "#8E24AA",
    date: "há 2 meses",
    rating: 5,
    text: "Os professores são super atenciosos com iniciantes. Não tem julgamento, não tem ego. Você evolui no seu ritmo, mas com cobrança certa.",
  },
  {
    name: "Diego Faria",
    initial: "D",
    color: "#FB8C00",
    date: "há 1 semana",
    rating: 5,
    text: "Estrutura excelente, equipamentos novos e bem conservados. Único ponto: horário lotado no fim do dia. Vale a pena chegar mais cedo.",
  },
  {
    name: "Juliana Reis",
    initial: "J",
    color: "#00897B",
    date: "há 3 meses",
    rating: 5,
    text: "Comecei kickboxing pelo condicionamento e fiquei pelo ambiente. É como uma segunda família, mas que te empurra pra ser melhor todo dia.",
  },
];

// Substituir pelo Place ID real do Google Maps para abrir o review form
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=REPLACE_WITH_PLACE_ID";
const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/CT+Pedro+Albuquerque";

const avgRating = (
  testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
).toFixed(1);

const GoogleG = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

const Stars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i <= rating
            ? "fill-[#FBBC05] text-[#FBBC05]"
            : "fill-white/10 text-white/10"
        }`}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  const { ref, visible } = useReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section
      id="depoimentos"
      data-testid="testimonials-section"
      ref={ref}
      className="relative bg-[#0a0a0b] py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute top-0 right-0 hidden lg:block pointer-events-none">
        <span className="font-display text-[8rem] text-white/[0.025] leading-none tracking-tighter select-none">
          REVIEWS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div
          className={`grid lg:grid-cols-12 gap-10 mb-12 md:mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--brand-accent)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--brand-accent)] font-semibold">
                Depoimentos
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Quem treina,
              <br />
              <span className="text-white/40">recomenda.</span>
            </h2>
          </div>

          {/* Aggregate rating card (Google style) */}
          <div className="lg:col-span-5 lg:col-start-8 flex">
            <div
              data-testid="google-rating-card"
              className="w-full bg-black border border-white/10 p-6 md:p-7 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <GoogleG className="w-7 h-7" />
                  <span className="text-sm font-semibold text-white/80">
                    Google Reviews
                  </span>
                </div>
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="google-profile-link"
                  className="text-white/40 hover:text-[var(--brand-accent)] transition-colors"
                  aria-label="Ver no Google"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-4 flex items-end gap-4">
                <div className="font-display text-5xl md:text-6xl text-white leading-none">
                  {avgRating}
                </div>
                <div className="pb-1">
                  <Stars rating={Math.round(avgRating)} />
                  <div className="text-xs text-white/40 mt-1.5">
                    Baseado em {testimonials.length}+ avaliações
                  </div>
                </div>
              </div>

             <Button
  onClick={() => 
    window.open(
      "https://www.google.com/search?sca_esv=498f31acae8dba9f&sxsrf=ANbL-n7QHtvLo-M4R7BzeYd1DtaCHu1H5w:1778875239274&q=ct+pedro+albuquerque&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWPPjy1QuBRX8tAaGMSPvNLQZHkV5aliPYPi-eFqCrTykc_NES_jjLnihkqux4XNKOH_9apB9h6Zpi8OpBLw7PALfFxIjcke1twkOKq1uZboGVLJXeMz658O6WZwnzSFczVRgC8%3D&sa=X&ved=2ahUKEwjCh_LViryUAxU9ILkGHXHkLSEQrrQLegQIHRAA&biw=1879&bih=925&dpr=1", 
      "_blank"
    )
  }
  data-testid="leave-google-review-button"
  className="mt-5 bg-white hover:bg-white/90 text-black font-semibold uppercase tracking-[0.12em] text-xs rounded-none h-11 border-0 w-full"
>
  <GoogleG className="w-4 h-4 mr-2" />
  Deixar uma avaliação
</Button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: visible ? "300ms" : "0ms" }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="pl-4 md:pl-6 min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <ReviewCard testimonial={t} index={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="see-all-reviews-link"
              className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors uppercase tracking-[0.18em]"
            >
              Ver todas no Google
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                data-testid="carousel-prev"
                aria-label="Anterior"
                className="w-12 h-12 border border-white/15 flex items-center justify-center text-white hover:bg-[var(--brand-accent)] hover:border-[var(--brand-accent)] hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-white/15"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                data-testid="carousel-next"
                aria-label="Próximo"
                className="w-12 h-12 border border-white/15 flex items-center justify-center text-white hover:bg-[var(--brand-accent)] hover:border-[var(--brand-accent)] hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-white/15"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ testimonial, index }) => {
  const t = testimonial;
  return (
    <article
      data-testid={`testimonial-card-${index}`}
      className="group relative h-full bg-black border border-white/10 p-7 md:p-8 hover:border-[var(--brand-accent)]/40 transition-all duration-500 flex flex-col"
    >
      {/* Top row: avatar + name + Google G */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-base flex-shrink-0"
            style={{ background: t.color }}
            aria-hidden="true"
          >
            {t.initial}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white truncate">
              {t.name}
            </div>
            <div className="text-[11px] text-white/40 mt-0.5">
              Local Guide · {t.date}
            </div>
          </div>
        </div>
        <GoogleG className="w-4 h-4 flex-shrink-0 mt-1" />
      </div>

      {/* Stars */}
      <Stars rating={t.rating} />

      {/* Review text */}
      <p className="mt-4 text-sm md:text-[15px] text-white/65 leading-relaxed flex-1">
        "{t.text}"
      </p>

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/40">
        <span>Aluno verificado</span>
        <span className="text-[var(--brand-accent)]">/ {String(index + 1).padStart(2, "0")}</span>
      </div>
    </article>
  );
};
