export default function Portfolio() {
  const projects = [
    {
      title: "DRO",
      subtitle: "AI-Powered Financial News Platform",
      description: "Made financial news discovery faster and more focused with an AI-assisted research experience.",
      tags: ["AI", "React", "Python"],
    },
    {
      title: "Merchant Lending Platform",
      subtitle: "Embedded Lending Workflow",
      description: "Simplified complex underwriting and onboarding flows into a clearer merchant experience.",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Centralized KYC Application",
      subtitle: "One Place for KYC Operations",
      description: "Reworked fragmented verification workflows to improve visibility and reduce manual effort.",
      tags: ["Next.js", "TypeScript", "AWS"],
    },
    {
      title: "ICF",
      subtitle: "Modern Website Rebuild",
      description: "Rebuilt a content-led website around a faster, more maintainable publishing foundation.",
      tags: ["Next.js", "Sanity", "Vercel"],
    },
    {
      title: "Moda Operandi",
      subtitle: "E-Commerce Platform",
      description: "Supported a high-touch commerce experience with resilient, performance-minded platform work.",
      tags: ["React", "APIs", "Performance"],
    },
    {
      title: "Odigo",
      subtitle: "Contact Center Platform",
      description: "Built enterprise software that helps contact center teams serve customers more effectively.",
      tags: ["React", "Python", "Cloud"],
    },
  ];

  return (
    <section id="work" className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
          SELECTED WORK
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-none tracking-[-0.06em] text-[#111111]">
          SELECTED WORK
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[#dededb] border border-[#dededb] mt-12">
          {projects.map((project) => (
            <article key={project.title} className="bg-[#fafaf9] p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-[10px] font-mono text-[#656565] uppercase tracking-wider mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-[#111111] mb-3">{project.title}</h3>
                <p className="text-[#656565] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#dededb]/60">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-[#656565] bg-white border border-[#dededb] px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

