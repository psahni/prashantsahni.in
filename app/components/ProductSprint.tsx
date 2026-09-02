export default function ProductSprint() {
  const pipeline = ["ALIGN", "DEFINE THE SLICE", "BUILD", "SHOW", "ITERATE"];

  const includedItems = [
    "Focused discovery & prioritization",
    "Smallest valuable product slice",
    "Architecture & tech decisions",
    "AI-accelerated implementation",
    "Core user flows & key features",
    "Basic backend logic & APIs",
    "Deployed preview environment",
    "Frequent demos & feedback cycles",
    "Handover & next-step roadmap",
  ];

  return (
    <section className="bg-[#111111] text-[#fafaf9] py-24 lg:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#818cf8] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
          AI PRODUCT SPRINT
        </p>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-[-0.06em]">
          FROM IDEA TO WORKING SOFTWARE{" "}
          <span className="text-[#818cf8]">IN DAYS.</span>
        </h2>
        <p className="text-[#aaaaaa] text-lg sm:text-xl max-w-[680px] mt-6 leading-relaxed">
          A focused sprint to move from an idea to a working, deployed slice of software — with frequent demos and real feedback.
        </p>

        {/* Pipeline Tags */}
        <div className="flex flex-wrap items-center gap-3 mt-8 text-[11px] font-mono text-[#aaaaaa]">
          {pipeline.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="border border-[#333333] px-3 py-1 bg-[#1a1a1a] text-[#818cf8] uppercase font-bold">
                {step}
              </span>
              {i < pipeline.length - 1 && <span className="text-[#555555]">→</span>}
            </span>
          ))}
        </div>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[#333333] border border-[#333333] mt-12">
          {/* Card 1 */}
          <article className="bg-[#111111] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">What&apos;s included</h3>
              <ul className="text-[#aaaaaa] text-sm leading-relaxed space-y-2">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#818cf8] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-[#111111] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Best for</h3>
              <p className="text-[#aaaaaa] text-sm leading-relaxed">
                Founders validating ideas, product teams that need to move fast, and companies testing new features with minimal risk.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-[#111111] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Next step</h3>
              <p className="text-[#aaaaaa] text-sm leading-relaxed mb-6">
                Ready to map out your product slice and get a working prototype in days?
              </p>
            </div>
            <a
              href="#contact"
              className="text-sm font-bold text-[#818cf8] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Discuss a Product Sprint →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
