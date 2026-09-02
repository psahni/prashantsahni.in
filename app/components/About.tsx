export default function About() {
  return (
    <section id="about" className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* Left column */}
        <div>
          <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
            ABOUT
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-[-0.06em] text-[#111111]">
            ENGINEERING EXPERIENCE.<br />
            PRODUCT THINKING.<br />
            HANDS-ON EXECUTION.
          </h2>
        </div>

        {/* Right column */}
        <div>
          <p className="text-[#656565] text-lg sm:text-xl leading-relaxed mb-8">
            I&apos;m Prashant K. Sahni, a product engineer with 15+ years of experience across FinTech, AI, E-commerce and enterprise software.
          </p>

          <blockquote className="border-l-2 border-[#4f46e5] pl-6 text-xl font-bold text-[#111111] my-8 leading-snug">
            I don&apos;t believe AI replaces engineering judgment. I believe it lets experienced engineers move faster.
          </blockquote>

          <div className="mt-8 pt-6 border-t border-[#dededb]/60">
            <span className="text-xs font-mono text-[#656565] uppercase tracking-wider block mb-1">
              Certification
            </span>
            <b className="text-[#111111] font-bold text-base">
              AWS Certified Solutions Architect – Associate
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}

