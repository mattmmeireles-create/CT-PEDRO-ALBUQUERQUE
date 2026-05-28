import React from "react";

const modalities = [
  {
    code: "01",
    name: "Boxe",
    tagline: "A Nobre Arte",
    description:
      "A 'Nobre Arte' não é sobre bater, é sobre precisão. Queime até 800 calorias enquanto domina a técnica dos grandes campeões.",
    stat: "800",
    statLabel: "kcal / sessão",
    schedule: ["08:00", "20:00"],
  },
  {
    code: "02",
    name: "Muay Thai",
    tagline: "Arte das Oito Armas",
    description:
      "A 'Arte das Oito Armas'. Aprenda a usar cotovelos, joelhos e canelas com eficiência máxima em um treino de alta intensidade.",
    stat: "08",
    statLabel: "pontos de impacto",
    schedule: ["10:00", "19:00"],
  },
  {
    code: "03",
    name: "Kickboxing",
    tagline: "Explosão & Definição",
    description:
      "A fusão perfeita entre a agilidade do boxe e o impacto dos chutes. Ideal para quem quer explosão muscular e definição rápida.",
    stat: "100%",
    statLabel: "alta intensidade",
    schedule: ["09:00", "18:00", "21:00"],
  },
];

export const Modalities = () => {
  return (
    <section id="modalidades" className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="flex items-center gap-3 mb-12">
          <span className="h-8 w-1.5 bg-[var(--brand-accent)] block" />
          <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wider font-black">
            Nossas Modalidades
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {modalities.map((item) => (
            <div 
              key={item.code} 
              className="border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[var(--brand-accent)] group"
            >
              <div>
                {/* Código e Tagline */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono tracking-widest text-white/40">
                    // MODALIDADE {item.code}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] bg-white/5 px-2 py-1 text-[var(--brand-accent)]">
                    {item.tagline}
                  </span>
                </div>

                {/* Nome da Modalidade */}
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight font-display mb-4 group-hover:text-[var(--brand-accent)] transition-colors">
                  {item.name}
                </h3>

                {/* Descrição */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Rodapé do Card (Stats e Horários empilhados verticalmente) */}
              <div className="border-t border-white/5 pt-6 mt-auto flex flex-col gap-5">
                
                {/* Estatística Principal */}
                <div>
                  <div className="text-2xl font-black text-white leading-none">
                    {item.stat}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40 mt-1">
                    {item.statLabel}
                  </div>
                </div>

                {/* Horários - Agora posicionados embaixo e maiores */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
                    Horários das Aulas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.schedule.map((time) => (
                      <span 
                        key={time} 
                        className="text-base sm:text-lg font-bold bg-white/10 px-3.5 py-1.5 font-mono text-white tracking-wide border border-white/5 rounded-none"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Modalities;
