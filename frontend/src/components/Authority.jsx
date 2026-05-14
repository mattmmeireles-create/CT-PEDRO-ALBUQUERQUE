import { ShieldCheck, Cog, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import useReveal from "../hooks/useReveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Ambiente Blindado",
    subtitle: "Sem Ego",
    description:
      "Comunidade selecionada, zero tolerância à arrogância. Aqui você treina com respeito, foco e segurança — do iniciante ao avançado.",
    tag: "Cultura",
  },
  {
    icon: Cog,
    title: "Metodologia Própria",
    subtitle: "Sistema VNG",
    description:
      "Sete anos refinando uma progressão técnica que combina fundamentos clássicos, condicionamento moderno e mentalidade de competição.",
    tag: "Método",
  },
  {
    icon: Building2,
    title: "Infraestrutura de Elite",
    subtitle: "Equipamento Profissional",
    description:
      "Equipamentos efetivos e qualificados para o seu treino render o máximo.",
    tag: "Estrutura",
  },
];

export const Authority = () => {
  const { ref, visible } = useReveal();

  return (
    <section
      id="autoridade"
      data-testid="authority-section"
      ref={ref}
      className="relative bg-black py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(255,23,68,0.10) 0%, rgba(0,0,0,0) 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div
          className={`grid lg:grid-cols-12 gap-10 mb-16 md:mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--brand-accent)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--brand-accent)] font-semibold">
                Autoridade
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Por que treinar
              <br />
              <span className="text-white/40">no CT Pedro Albuquerque.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-xl">
              Nós não só vivemos a academia nós vivemos a transformação. Aqui o
              treinamento é levado a sério, e cada detalhe — do tatame ao coach
              — foi construído para forjar atletas e mentes resilientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((p, i) => (
            <PillarCard
              key={p.title}
              pillar={p}
              index={i}
              parentVisible={visible}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-20 md:mt-28 border border-white/10 bg-gradient-to-r from-[#0d0d0e] to-black p-8 md:p-12 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: visible ? "500ms" : "0ms" }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand-accent)] mb-3">
                Oferta limitada
              </div>
              <h3 className="font-display uppercase text-3xl md:text-4xl text-white leading-tight tracking-tight">
                7 dias. Sem custo.
                <br />
                <span className="text-white/50">Sem desculpa.</span>
              </h3>
            </div>
            <Button
              data-testid="authority-cta-button"
              onClick={() =>
                window.open(
                  `https://wa.me/5521982478764?text=${encodeURIComponent(
                    "Olá! Vi o site e quero agendar minha aula experimental gratuita."
                  )}`,
                  "_blank"
                )
              }
              className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-black font-bold uppercase tracking-[0.15em] text-sm md:text-base rounded-none h-14 px-8 border-0 transition-all hover:shadow-[0_0_40px_-5px_rgba(255,23,68,0.6)]"
            >
              Ganhar 1 aula Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarCard = ({ pillar, index, parentVisible }) => {
  const Icon = pillar.icon;
  return (
    <article
      data-testid={`pillar-card-${index}`}
      className={`group relative bg-[#0a0a0b] border border-white/5 p-8 md:p-10 hover:border-[var(--brand-accent)]/40 transition-all duration-500
        ${parentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: parentVisible ? `${index * 120}ms` : "0ms" }}
    >
      <div className="flex items-start justify-between mb-10">
        <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)]/10 transition-all">
          <Icon className="w-5 h-5 text-white group-hover:text-[var(--brand-accent)] transition-colors" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
          / {pillar.tag}
        </span>
      </div>

      <h3 className="font-display uppercase text-2xl md:text-3xl text-white tracking-tight leading-tight">
        {pillar.title}
      </h3>
      <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-accent)] font-medium">
        {pillar.subtitle}
      </div>

      <p className="mt-6 text-sm md:text-base text-white/55 leading-relaxed">
        {pillar.description}
      </p>
    </article>
  );
};
