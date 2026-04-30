const projects = [
  {
    title: "AI News Aggregator",
    description:
      "AI-powered financial news aggregator delivering personalized market news for the UAE. Led alignment across AI/ML, backend, and front-end teams. Owned the Next.js front-end and Sanity CMS layer. Implemented persona-based news summaries pushed from the AI pipeline to the FE.",
    tags: ["Next.js", "Sanity CMS", "Python", "Gen AI", "Vercel"],
    link: null,
    gradient: "from-sky-100 via-blue-50 to-cyan-100",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    iconPath:
      "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
  },
  {
    title: "Rebuilding Consulting Website",
    description:
      "Recreation of icf.com with a modern tech stack. Managed 4 engineers and coordinated with PM, Product, QA, and a technical director. Leveraged Cursor AI with custom rules for accelerated code generation.",
    tags: ["Next.js", "Optimizely CMS", "Vercel"],
    link: "https://www.icf.com",
    gradient: "from-slate-100 via-gray-50 to-stone-100",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-600",
    iconPath:
      "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    title: "Merchant Lending Platform",
    description:
      "FinTech product enabling SMBs to connect with lenders. Led a team of 8 engineers to build the product from scratch. Designed end-to-end loan application workflow with automated interest and tax calculations across diverse loan types.",
    tags: ["Ruby on Rails", "React.js", "Redis", "AWS"],
    link: null,
    gradient: "from-emerald-100 via-green-50 to-teal-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    iconPath:
      "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
  },
  {
    title: "Centralized KYC Application",
    description:
      "Reduced merchant onboarding time by 50%. Designed and deployed the KYC platform from scratch. Integrated third-party verification (Tilaka), a Kafka message queue for multi-client status notifications, and MongoDB for distributed KYC data storage.",
    tags: ["Go", "MongoDB", "Kafka"],
    link: null,
    gradient: "from-violet-100 via-purple-50 to-indigo-100",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    iconPath:
      "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Odigo — CCaaS Platform",
    description:
      "Odigo is an AI-driven CCaaS platform that centralizes customer communications across multiple channels. Built the agent console with softphone and WebRTC integration, and a real-time chat messenger for admin-to-agent communication using the XMPP protocol on an Openfire server.",
    tags: ["React.js", "TypeScript", "Java", "WebRTC"],
    link: null,
    gradient: "from-orange-100 via-amber-50 to-yellow-100",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    iconPath:
      "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    title: "Moda Operandi — Luxury E-Commerce",
    description:
      "E-commerce platform for accessory designers. Delivered product pages, cart, checkout, order management, and payment integration. Extracted order management into a standalone microservice and integrated Algolia for fast product search.",
    tags: ["Ruby on Rails", "JavaScript", "Algolia"],
    link: "https://www.modaoperandi.com",
    gradient: "from-rose-100 via-pink-50 to-fuchsia-100",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    iconPath:
      "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.119-1.243l1.263-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-violet-600 font-medium text-sm mb-3">
            <span className="w-6 h-0.5 bg-violet-600 inline-block" />
            My Work
            <span className="w-6 h-0.5 bg-violet-600 inline-block" />
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Portfolio</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A selection of professional projects spanning FinTech, AI, e-commerce, and enterprise platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 flex flex-col"
            >
              {/* Domain banner */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                <div className={`relative w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center shadow-md`}>
                  <svg className={`w-8 h-8 ${project.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={project.iconPath} />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-violet-600 hover:text-violet-800 font-medium transition-colors"
                  >
                    View Website
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/psahni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-violet-200 hover:border-violet-400 text-violet-700 font-medium px-7 py-3 rounded-full transition-colors"
          >
            View All 130+ Repos on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
