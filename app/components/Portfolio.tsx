const projects = [
  {
    title: "Ticket Booking System",
    description:
      "A full-stack event ticketing platform built with Go (booking server), Next.js (event management app), and React + TypeScript (customer frontend). Designed for high concurrency and real-time seat availability.",
    tags: ["Go", "Next.js", "React", "TypeScript"],
    github: "https://github.com/psahni/ticket_booking_system",
    category: "Full Stack",
  },
  {
    title: "MERN Stack E-Commerce",
    description:
      "Feature-rich e-commerce application built on the MERN stack. Includes product catalog, cart management, order processing, and user authentication — a complete shopping experience end to end.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/psahni/mern-stack-e-commerce",
    category: "Full Stack",
  },
  {
    title: "Tweet Fetcher",
    description:
      "A Node.js application that fetches and displays a public Twitter/X timeline. Demonstrates REST API integration, async data handling, and clean separation of concerns in backend service design.",
    tags: ["Node.js", "REST API", "JavaScript"],
    github: "https://github.com/psahni/Tweet-fetcher",
    category: "Backend",
  },
  {
    title: "AWS SAA Prep",
    description:
      "Curated study material and practice resources for the AWS Certified Solutions Architect Associate (SAA-C03) exam. Covers IAM, EC2, S3, VPC, RDS, Lambda, and more with architectural best practices.",
    tags: ["AWS", "Cloud", "Architecture"],
    github: "https://github.com/psahni/aws_saa_prep",
    category: "Cloud",
  },
  {
    title: "Algo & Problem Solving",
    description:
      "A growing collection of algorithmic solutions and data-structure implementations written in Go. Covers sorting, graph traversal, dynamic programming, and common coding-interview problem patterns.",
    tags: ["Go", "Algorithms", "Data Structures"],
    github: "https://github.com/psahni/algo_and_problem_solving",
    category: "CS Fundamentals",
  },
  {
    title: "Mongo Node API Provider",
    description:
      "A RESTful API service built with Node.js and MongoDB. Demonstrates CRUD operations, middleware architecture, data modelling, and API versioning patterns suitable for production microservices.",
    tags: ["Node.js", "MongoDB", "REST API"],
    github: "https://github.com/psahni/mongo-node-api-provider",
    category: "Backend",
  },
];

const categoryColors: Record<string, string> = {
  "Full Stack": "bg-violet-100 text-violet-700",
  Backend: "bg-indigo-100 text-indigo-700",
  Cloud: "bg-sky-100 text-sky-700",
  "CS Fundamentals": "bg-emerald-100 text-emerald-700",
};

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
            A selection of projects spanning backend systems, full-stack apps, cloud architecture, and open-source tooling.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 flex flex-col"
            >
              {/* Placeholder image area */}
              <div className="h-44 bg-gradient-to-br from-violet-100 via-indigo-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-200/40 to-transparent" />
                <div className="relative text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm mx-auto mb-2 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      categoryColors[project.category] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.category}
                  </span>
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

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-violet-600 hover:text-violet-800 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.9c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.17c0 .3.2.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  View on GitHub
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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
