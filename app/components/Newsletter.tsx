export default function Newsletter() {
  return (
    <section id="newsletter" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-10 lg:p-14 overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-violet-200 font-medium text-sm mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                LinkedIn Newsletter
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
                Dev, Design &amp; Architecture
              </h2>
              <p className="text-violet-200 leading-relaxed mb-6">
                I write about software engineering, system design, architecture patterns, and engineering leadership.
                Practical insights for developers who want to level up — from coding to cloud to team building.
              </p>
              <div className="flex flex-wrap gap-3">
                {["System Design", "Clean Architecture", "Engineering Culture", "Cloud & DevOps", "Leadership"].map(
                  (tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/15 text-white text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full lg:max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.9 20.45H3.78V9H6.9v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">LinkedIn Newsletter</p>
                    <p className="text-violet-300 text-xs">by Prashant Sahni</p>
                  </div>
                </div>
                <p className="text-violet-200 text-sm mb-5">
                  Join engineers and leaders who read about real-world engineering challenges and solutions.
                </p>
                <a
                  href="https://www.linkedin.com/newsletters/dev-design-architecture-7216775623950704640/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-violet-50 text-violet-700 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  Subscribe Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
