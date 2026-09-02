export default function Skills() {
  const capabilities = [
    {
      title: "Product Engineering",
      description: "React, Next.js, TypeScript, Frontend Architecture",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Backend Engineering",
      description: "Python, Go, Node.js, Distributed Systems",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "Data & Databases",
      description: "PostgreSQL, Redis, NoSQL, Sanity CMS",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, GCP, Vercel, Docker, Kubernetes, CI/CD",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 001-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "Performance & Scale",
      description: "Frontend Performance, Backend Optimization, Scalability",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "AI & Engineering Productivity",
      description: "LLM Agents, LangChain, RAG, Vector Databases, MLOps",
      icon: (
        <svg className="w-6 h-6 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.596 15.12a2 2 0 00-1.783.58l-.707.707a1 1 0 000 1.414l5.657 5.657a1 1 0 001.414 0l.707-.707a2 2 0 00.58-1.783l-.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022L10.5 4.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="expertise" className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
          ENGINEERING CAPABILITY
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-none tracking-[-0.06em] text-[#111111]">
          ENGINEERING DEPTH,<br />
          <span className="text-[#4f46e5]">ACCELERATED BY AI.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[#dededb] border border-[#dededb] mt-12">
          {capabilities.map((item) => (
            <article key={item.title} className="bg-[#fafaf9] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-[#656565] text-sm leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-xs text-[#656565] mt-6 italic">
          The stack is not fixed. I can work with the technologies your product requires.
        </p>
      </div>
    </section>
  );
}

