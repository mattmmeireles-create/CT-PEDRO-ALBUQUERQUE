import { Button } from "./ui/button";
import { ArrowRight, Flame } from "lucide-react";
import useReveal from "../hooks/useReveal";

export const Hero = () => {
  const { ref, visible } = useReveal();

  return (
    <section
      id="top"
      data-testid="hero-section"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background layered effects */}
      <div className="absolute inset-0 z-0">
        {/* radial spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(255,23,68,0.18) 0%, rgba(0,0,0,0) 55%)",
          }}
        />
        {/* diagonal vertical lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 100%",
          }}
        />
        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div
            className={`lg:col-span-8 transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/10 mb-8">
              <Flame className="w-3.5 h-3.5 text-[var(--brand-accent)]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--brand-accent)] font-semibold">
                Centro de Combate de Elite
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-display uppercase text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-tight text-white"
            >
              Vença seu maior
              <br />
              adversário todos
              <br />
              os dias:{" "}
              <span className="text-[var(--brand-accent)] italic font-display">
                você mesmo.
              </span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-8 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed"
            >
              Treinamento de combate de elite para quem busca{" "}
              <span className="text-white">performance</span>,{" "}
              <span className="text-white">disciplina</span> e{" "}
              <span className="text-white">resultados reais</span>. Saia da zona
              de conforto.
            </p>

            <div
              id="cta"
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                data-testid="hero-cta-button"
                onClick={() =>
                  document
                    .getElementById("modalidades")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-black font-bold uppercase tracking-[0.15em] text-sm md:text-base rounded-none h-14 px-8 border-0 shadow-[0_0_0_0_rgba(255,23,68,0)] hover:shadow-[0_0_40px_-5px_rgba(255,23,68,0.6)] transition-all"
              >
                Ganhar 1 Aula Grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-3 text-white/50 text-xs md:text-sm">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-black"
                      style={{
                        background: `linear-gradient(135deg, hsl(${
                          0 + i * 12
                        }, 60%, 30%), hsl(${0 + i * 20}, 70%, 12%))`,
                      }}
                    />
                  ))}
                </div>
                <span>
                  <span className="text-white font-semibold">+150</span>{" "}
                  alunos ativos
                </span>
              </div>
            </div>
          </div>

          {/* Right stat block */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 delay-300 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Big number stack */}
              <div className="border-l-2 border-[var(--brand-accent)] pl-6 space-y-8">
                <Stat number="10" label="Anos forjando atletas reais" />
                <Stat number="05" label="Coaches certificados" />
                <Stat number="800" label="Cal/sessão em alta intensidade" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/30 text-[10px] uppercase tracking-[0.4em] flex flex-col items-center gap-2">
        <span>Role</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div>
    <div className="font-display text-5xl md:text-6xl text-white leading-none tracking-tight">
      {number}
    </div>
    <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/50 max-w-[180px]">
      {label}
    </div>
  </div>
);
