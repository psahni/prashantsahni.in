export default function WorkTogether() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 text-violet-600 font-medium text-sm mb-4">
          <span className="w-6 h-0.5 bg-violet-600 inline-block" />
          Collaboration
          <span className="w-6 h-0.5 bg-violet-600 inline-block" />
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need a senior engineer for your team, an architecture review, or a technical lead to drive your product — I&apos;d love to hear about your challenge.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              ),
              title: "System Design",
              desc: "Architecture review, HLD/LLD, scalability consulting",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              title: "Full-Stack Development",
              desc: "End-to-end product development from backend to frontend",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Engineering Leadership",
              desc: "Team building, technical mentoring, delivery planning",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-left hover:border-violet-200 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-xl shadow-violet-200 text-lg"
        >
          Start a Conversation
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
