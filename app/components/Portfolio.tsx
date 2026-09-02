export default function Portfolio() {
  const featuredProjects = [
    {
      title: "DRO",
      category: "AI Financial Research Platform",
      problem: "Financial analysts spent hours manually discovering, reading, and synthesizing market news.",
      whatIDid: "Designed & built an AI-assisted search and discovery workflow with automated content intelligence.",
      result: "80% reduction in research effort and faster time-to-insight for decision-makers.",
      tech: ["AI Agents", "React", "Next.js", "Python", "Vector Search"],
      featured: true,
    },
    {
      title: "Merchant Lending Platform",
      category: "Embedded FinTech Workflow",
      problem: "Complex manual underwriting and fragmented onboarding caused high drop-offs.",
      whatIDid: "Engineered automated merchant verification, risk scoring, and instant loan approval flows.",
      result: "50% reduction in merchant onboarding time and increased application completion.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      featured: true,
    },
  ];

  const standardProjects = [
    {
      title: "Centralized KYC Application",
      category: "Identity & Verification",
      problem: "Disparate compliance tools led to manual review overhead and high operational costs.",
      whatIDid: "Built a single operational hub unifying ID verification, fraud checks, and audit trails.",
      result: "30% increase in customer-care agent productivity across all verification pipelines.",
      tech: ["Next.js", "TypeScript", "AWS", "Docker"],
    },
    {
      title: "ICF Website Rebuild",
      category: "Digital Publishing & Content",
      problem: "Legacy CMS caused slow page loads, publishing friction, and poor mobile engagement.",
      whatIDid: "Architected a headless publishing system with optimized frontend rendering and structured schemas.",
      result: "Sub-second page loads and zero layout shifts across editorial articles.",
      tech: ["Next.js", "Sanity CMS", "Vercel", "Tailwind CSS"],
    },
    {
      title: "Moda Operandi",
      category: "E-Commerce Engineering",
      problem: "High-traffic product search and checkout bottlenecks during luxury trunkshow launches.",
      whatIDid: "Optimized catalog indexing, API response caching, and frontend bundle performance.",
      result: "70–80% improvement in product-search performance under heavy concurrent traffic.",
      tech: ["React", "GraphQL", "APIs", "Performance Optimization"],
    },
    {
      title: "Odigo",
      category: "Enterprise Cloud Contact Center",
      problem: "Agents struggled with context switching across disconnected customer interaction tools.",
      whatIDid: "Developed real-time agent desktop software, routing APIs, and operational analytics.",
      result: "Streamlined agent workflows and improved first-contact resolution rates.",
      tech: ["React", "Python", "Cloud Infrastructure", "Distributed Systems"],
    },
  ];

  return (
    <section id="work" className="py-24 lg:py-[120px] border-t border-[#D9D8D0] bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#17372D] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
          SELECTED WORK
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-none tracking-[-0.06em] text-[#17372D] mb-12">
          FEATURED CASE STUDIES
        </h2>

        {/* Featured Projects Grid (2 Columns) */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="bg-[#FFFDF8] border border-[#D9D8D0] p-8 sm:p-10 rounded-lg shadow-sm hover:border-[#17372D] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#17372D] font-bold bg-[#F5F3ED] px-2.5 py-1 rounded border border-[#D9D8D0] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#66706A] uppercase">Featured</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#17372D] mb-4">{project.title}</h3>

                <div className="space-y-3 text-sm text-[#66706A] mb-6">
                  <div>
                    <strong className="text-[#17372D] font-mono text-xs uppercase block">Problem:</strong>
                    <span>{project.problem}</span>
                  </div>
                  <div>
                    <strong className="text-[#17372D] font-mono text-xs uppercase block">What I did:</strong>
                    <span>{project.whatIDid}</span>
                  </div>
                  <div>
                    <strong className="text-[#17372D] font-mono text-xs uppercase block">Result:</strong>
                    <span className="text-[#17372D] font-semibold">{project.result}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#D9D8D0]/60">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-[#17372D] bg-[#F5F3ED] border border-[#D9D8D0] px-2.5 py-1 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Standard Projects Grid (2x2) */}
        <div className="grid md:grid-cols-2 gap-6">
          {standardProjects.map((project) => (
            <article
              key={project.title}
              className="bg-[#FFFDF8] border border-[#D9D8D0] p-7 rounded-lg shadow-sm hover:border-[#17372D] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#66706A] uppercase">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#17372D] mb-3">{project.title}</h3>

                <div className="space-y-2 text-xs sm:text-sm text-[#66706A] mb-6">
                  <p><strong className="text-[#17372D]">Problem:</strong> {project.problem}</p>
                  <p><strong className="text-[#17372D]">Result:</strong> <span className="text-[#17372D] font-semibold">{project.result}</span></p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D9D8D0]/60">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-[#17372D] bg-[#F5F3ED] border border-[#D9D8D0] px-2 py-0.5 rounded-sm">
                    {t}
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


