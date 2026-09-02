export default function Skills() {
  const capabilities = [
    {
      title: "Product Engineering",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Frontend Architecture"],
    },
    {
      title: "Backend",
      skills: ["Python", "Go", "Node.js", "Ruby on Rails", "APIs", "Distributed Systems"],
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "PostGIS", "NoSQL", "Redis", "Sanity CMS"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Vercel", "Docker", "Kubernetes", "Kafka", "CI/CD", "Observability"],
    },
    {
      title: "Performance & Scale",
      skills: ["Frontend Performance", "Backend Optimization", "Database Optimization", "Scalability", "Reliability"],
    },
    {
      title: "AI & Engineering Productivity",
      skills: ["LLM Agent Orchestration", "LangChain", "LangGraph", "RAG", "Prompt Engineering", "Vector Databases", "MLOps", "AI Infrastructure"],
    },
  ];

  return (
    <section id="expertise" className="py-24 lg:py-[120px] border-t border-[#D9D8D0] bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#17372D] font-mono text-[12px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
          ENGINEERING EXPERTISE
        </p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-none tracking-[-0.06em] text-[#17372D]">
          ENGINEERING DEPTH,<br />
          <span className="text-[#17372D]">ACCELERATED BY AI.</span>
        </h2>

        {/* Callout banner */}
        <div className="mt-8 p-6 bg-[#FFFDF8] border border-[#D9D8D0] rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-mono font-bold text-[#17372D] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8F04A]" />
              THE STACK IS NOT FIXED.
            </h3>
            <p className="text-[#66706A] text-sm mt-1">
              I can work with the framework, infrastructure and technology choices your product requires.
            </p>
          </div>
        </div>

        {/* 6 Structured Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {capabilities.map((item) => (
            <article key={item.title} className="bg-[#FFFDF8] border border-[#D9D8D0] p-7 rounded-lg shadow-sm hover:border-[#17372D] transition-colors flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#17372D] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#F5F3ED] text-[#17372D] text-xs font-mono px-2.5 py-1 rounded border border-[#D9D8D0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


