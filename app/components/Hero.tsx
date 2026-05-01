import Image from "next/image";
import { lora } from "@/app/fonts";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-slate-100"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — profile card */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-5">
              <div className="min-w-60 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/profile.jpg"
                  alt="Prashant Sahni"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                />
              </div>
              {/* Social icons — vertical, right of image */}
              <div className="flex flex-col lg:flex-row gap-3">
                <a
                  href="https://github.com/psahni"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-violet-600 hover:shadow-lg transition-all border border-gray-100"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.9c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.17c0 .3.2.66.79.55C20.22 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/prashantsahni5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 hover:text-violet-600 hover:shadow-lg transition-all border border-gray-100"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.9 20.45H3.78V9H6.9v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 text-violet-600 font-medium text-sm mb-4">
              <span className="w-6 h-0.5 bg-violet-600 inline-block" />
              Engineering Leader &amp; Developer
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Hi,</span>
              <span className="block">I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Prashant Sahni
                </span>
              </span>
            </h1>
            <blockquote className={`${lora.className} relative text-xl italic text-gray-700 mb-8 leading-relaxed max-w-lg`}>
              <span className="block text-6xl text-violet-400 leading-none mb-2 select-none">&ldquo;</span>
              <span className="block">
                I partner with founders, co-owning the vision, to take ideas from zero to launch with co-founder energy and engineering depth.
              </span>
              <span className="block text-6xl text-violet-400 leading-none mt-2 text-right select-none">&rdquo;</span>
            </blockquote>
            <div className="flex flex-wrap gap-4">
              {/* <a
                href="https://drive.google.com/file/d/1ClaJnhOHoysJ8ZEslhvXiIt3w7dtMOu_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium px-7 py-3 rounded-full transition-colors shadow-lg shadow-violet-200"
              >
                Download Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a> */}
              <div className="relative inline-block">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full">
                  <span className="border-travel-dot" />
                </span>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-violet-50 hover:bg-violet-100 border-2 border-violet-300 hover:border-violet-500 text-violet-700 hover:text-violet-900 font-medium px-7 py-3 rounded-full transition-all shadow-sm hover:shadow-md hover:shadow-violet-200 group"
                >
                  View Work
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "30+", label: "Projects Delivered" },
                { value: <>7<span className="lg:hidden">*</span><span className="hidden lg:inline text-sm font-medium whitespace-nowrap"> (3 Product based)</span></>, label: "Organizations" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-violet-600 whitespace-nowrap">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-violet-500 italic text-right lg:hidden">* 3 products based</p>
          </div>
        </div>
      </div>
      <style>{`
        .border-travel-dot {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #7c3aed;
          box-shadow: 0 0 10px 5px rgba(124, 58, 237, 0.5);
          offset-path: inset(0 round 9999px);
          offset-distance: 0%;
          opacity: 0;
          animation: dotRoundTrip 1.6s ease-in-out 0.9s 1 forwards;
        }
        @keyframes dotRoundTrip {
          0%   { offset-distance: 0%;   opacity: 1; }
          95%  { offset-distance: 95%;  opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
