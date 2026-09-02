export default function About() {
  return (
    <section id="about" className="py-24 lg:py-[120px] border-t border-[#D9D8D0] bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* Left column */}
        <div>
          <p className="text-[#17372D] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
            ABOUT
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-[-0.06em] text-[#17372D]">
            ENGINEERING EXPERIENCE.<br />
            PRODUCT THINKING.<br />
            HANDS-ON EXECUTION.
          </h2>
        </div>

        {/* Right column */}
        <div>
          <div className="space-y-4 text-[#66706A] text-base sm:text-lg leading-relaxed font-normal mb-8">
            <p>
              I&apos;ve spent 15+ years building software, designing systems and solving difficult engineering problems across FinTech, AI, E-commerce and enterprise software.
            </p>
            <p>
              My experience spans product engineering, distributed systems, cloud infrastructure, DevOps, performance and AI-enabled engineering workflows.
            </p>
            <p>
              Today, I combine that engineering experience with AI-accelerated development to shorten the distance between an idea and working software.
            </p>
          </div>

          <blockquote className="border-l-4 border-[#C8F04A] bg-[#FFFDF8] border-r border-t border-b border-[#D9D8D0] p-6 rounded-r-lg text-lg font-bold text-[#17372D] my-8 leading-snug shadow-sm">
            I DON&apos;T BELIEVE AI REPLACES ENGINEERING JUDGMENT. I BELIEVE IT LETS EXPERIENCED ENGINEERS MOVE FASTER.
          </blockquote>

          <div className="mt-8 pt-6 border-t border-[#D9D8D0]">
            <span className="text-xs font-mono text-[#66706A] uppercase tracking-wider block mb-1">
              Certification
            </span>
            <b className="text-[#17372D] font-bold text-base flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
              AWS Certified Solutions Architect – Associate
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}


