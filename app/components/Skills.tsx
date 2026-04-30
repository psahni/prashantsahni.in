const skillCategories = [
  {
    title: "Backend",
    color: "from-violet-500 to-indigo-600",
    lightColor: "bg-violet-50 border-violet-200",
    textColor: "text-violet-700",
    skills: ["Go", "Node.js", "Ruby", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    title: "Frontend",
    color: "from-indigo-500 to-blue-600",
    lightColor: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-700",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Cloud & DevOps",
    color: "from-sky-500 to-cyan-600",
    lightColor: "bg-sky-50 border-sky-200",
    textColor: "text-sky-700",
    skills: ["AWS (Certified)", "Docker", "CI/CD", "GitHub Actions",  "Kubernetes"],
  },
  {
    title: "Databases",
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-700",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "DynamoDB"],
  },
  {
    title: "System Design",
    color: "from-orange-500 to-amber-600",
    lightColor: "bg-orange-50 border-orange-200",
    textColor: "text-orange-700",
    skills: ["HLD",  "LLD", "Event-Driven", "Kafka", "Scalability", "CAP Theorem", "Rate Limiting"],
  },
  {
    title: "Engineering Leadership",
    color: "from-pink-500 to-rose-600",
    lightColor: "bg-pink-50 border-pink-200",
    textColor: "text-pink-700",
    skills: [ "Stakeholder Management", "Hiring", "Code Review", "Technical Mentoring", "Roadmap Planning", "Delievery", "Cross Team Colloboaration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-violet-600 font-medium text-sm mb-3">
            <span className="w-6 h-0.5 bg-violet-600 inline-block" />
            What I Know
            <span className="w-6 h-0.5 bg-violet-600 inline-block" />
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Skills &amp; Expertise</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A diverse technology stack built over a decade of shipping production-grade software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className={`bg-gradient-to-r ${cat.color} px-5 py-4`}>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${cat.lightColor} ${cat.textColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
