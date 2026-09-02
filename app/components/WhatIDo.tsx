export default function WhatIDo() {
  const cards = [
    {
      number: "01",
      title: "BUILD",
      description:
        "Have an idea that needs to become real? I help turn product ideas and requirements into working software quickly, using short feedback cycles and AI-accelerated development.",
      tags: ["Prototype", "MVP", "Production"],
      cta: "Build with me →",
    },
    {
      number: "02",
      title: "FIX",
      description:
        "Slow application? Unreliable backend? Database bottleneck? Technical debt? I diagnose problems across the frontend, backend, database and architecture — and fix them at the root.",
      tags: ["Performance", "Architecture", "Reliability"],
      cta: "Solve a problem →",
    },
    {
      number: "03",
      title: "SCALE",
      description:
        "Growing product or increasing traffic? I help make systems faster, more resilient and easier to operate.",
      tags: ["Architecture", "Cloud", "Databases", "DevOps"],
      cta: "Scale with me →",
    },
  ];

  return (
    <section className="py-24 lg:py-[120px] border-t border-[#D9D8D0] bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#17372D] font-mono text-[12px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
          CORE SERVICES
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-none tracking-[-0.06em] text-[#17372D]">
          BUILD. FIX. SCALE.
        </h2>
        <p className="text-[#66706A] text-lg mt-3 max-w-[540px]">
          Three ways I help founders and engineering teams build faster and scale better.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((card) => (
            <article
              key={card.number}
              className="bg-[#FFFDF8] border border-[#D9D8D0] p-8 flex flex-col justify-between min-h-[340px] rounded-lg shadow-sm hover:border-[#17372D] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-[#17372D] bg-[#F5F3ED] px-2.5 py-1 rounded border border-[#D9D8D0] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
                    {card.number}
                  </span>
                  <span className="text-xs font-mono text-[#66706A] uppercase tracking-wider">Service</span>
                </div>
                <h3 className="text-2xl font-bold text-[#17372D] mb-3 group-hover:text-[#17372D] transition-colors">{card.title}</h3>
                <p className="text-[#66706A] text-sm leading-relaxed mb-6 font-normal">{card.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-[#D9D8D0]/60">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block border border-[#D9D8D0] bg-[#F5F3ED] px-2.5 py-1 text-[11px] font-mono text-[#17372D] uppercase rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#17372D] hover:opacity-80 transition-opacity inline-flex items-center gap-1.5"
                >
                  {card.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

