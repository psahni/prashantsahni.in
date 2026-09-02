export default function WhatIDo() {
  const cards = [
    {
      title: "Build a product",
      description:
        "Turn product ideas and requirements into working software quickly, using short feedback cycles and AI-accelerated development.",
      tags: ["Prototype", "MVP", "Production"],
      cta: "Build with me →",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Fix what's slowing you down",
      description:
        "Diagnose problems across the frontend, backend, database and architecture — and fix them at the root.",
      tags: ["Performance", "Architecture", "Reliability"],
      cta: "Solve a problem →",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Scale your product",
      description:
        "Make growing systems faster, more resilient and easier to operate.",
      tags: ["Architecture", "Cloud", "Databases", "DevOps", "Scalability"],
      cta: "Scale with me →",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
          WHAT I DO
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-none tracking-[-0.06em] text-[#111111]">
          BUILD. FIX. SCALE.
        </h2>
        <p className="text-[#656565] text-lg mt-3">
          Three ways I can help with your product.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-[#dededb] border border-[#dededb] mt-12">
          {cards.map((card) => (
            <article key={card.title} className="bg-[#fafaf9] p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold text-[#111111] mb-3">{card.title}</h3>
                <p className="text-[#656565] text-sm leading-relaxed mb-6">{card.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block border border-[#dededb] px-2 py-1 text-[10px] font-mono text-[#656565] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                className="text-xs font-bold text-[#111111] hover:text-[#4f46e5] transition-colors inline-flex items-center gap-1 mt-4"
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
