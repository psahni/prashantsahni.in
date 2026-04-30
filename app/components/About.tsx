import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — content */}
          <div>
            <span className="inline-flex items-center gap-2 text-violet-600 font-medium text-sm mb-3">
              <span className="w-6 h-0.5 bg-violet-600 inline-block" />
              About Me
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              I am an experienced{" "}
              <span className="text-violet-600">Engineering Leader</span> and Developer
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              With over 15 years of experience in software engineering, I specialize in building scalable,
              high‑performance systems and leading cross‑functional engineering teams. My expertise spans
              the full software development lifecycle — from architecture design to production deployment.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I&apos;m passionate about clean code, system design, and mentoring developers to grow.
              I bring strong communication skills to bridge the gap between business goals and technical execution,
              ensuring teams deliver value iteratively and reliably.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Location", value: "New Delhi, India" },
                { label: "Email", value: "techlead.ps@gmail.com" },
                // { label: "Focus", value: "Backend & Cloud" },
                // { label: "Availability", value: "Open to Opportunities" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block">{item.label}</span>
                    <span className="text-sm font-medium text-gray-700">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium px-7 py-3 rounded-full transition-colors shadow-lg shadow-violet-200"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-8 border border-violet-100">
              <div className="w-32 h-32 rounded-2xl mx-auto mb-6 relative overflow-hidden shadow-xl ring-4 ring-violet-100">
                <Image
                  src="/profile.jpg"
                  alt="Prashant Sahni"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Prashant Sahni</h3>
                <p className="text-violet-600 font-medium mt-1">Engineering Leader &amp; Developer</p>
                <p className="text-gray-500 text-sm mt-1">New Delhi, India</p>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                {[
                  {
                    href: "https://github.com/psahni",
                    label: "GitHub",
                    icon: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.9c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.17c0 .3.2.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/in/prashantsahni5/",
                    label: "LinkedIn",
                    icon: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.9 20.45H3.78V9H6.9v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
                      </svg>
                    ),
                  },
                  {
                    href: "mailto:techlead.ps@gmail.com",
                    label: "Email",
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:border-violet-400 hover:text-violet-600 flex items-center justify-center text-gray-500 transition-colors shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
