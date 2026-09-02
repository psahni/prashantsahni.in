export default function ProductSprint() {
  const pipeline = ["ALIGN", "DEFINE", "BUILD", "SHOW", "ITERATE"];

  const includedItems = [
    "Focused discovery & slice definition",
    "Smallest valuable working product slice",
    "Architecture & key tech decisions",
    "AI-accelerated implementation",
    "Core user flows & key UI components",
    "Backend logic & API integrations",
    "Deployed preview environment",
    "Early demos & rapid feedback loops",
    "Clear roadmap for next-phase scaling",
  ];

  return (
    <section className="bg-[#F5F3ED] py-24 lg:py-[120px] border-t border-[#D9D8D0]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#17372D] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
          AI PRODUCT SPRINT
        </p>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-[-0.06em] text-[#17372D]">
          FROM IDEA TO WORKING SOFTWARE{" "}
          <span className="text-[#17372D]">IN DAYS.</span>
        </h2>
        <p className="text-[#66706A] text-lg sm:text-xl max-w-[680px] mt-6 leading-relaxed">
          A focused product-engineering sprint for founders and teams who want to test an idea without spending months in planning and development. Clearly defined product slices can reach a working version in days.
        </p>

        {/* Pipeline Tags */}
        <div className="flex flex-wrap items-center gap-3 mt-8 text-[11px] font-mono">
          {pipeline.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="border border-[#D9D8D0] bg-[#FFFDF8] px-3.5 py-1.5 text-[#17372D] uppercase font-bold rounded flex items-center gap-1.5 shadow-sm">
                <span className="w-1 h-1 rounded-full bg-[#C8F04A]" />
                {step}
              </span>
              {i < pipeline.length - 1 && <span className="text-[#66706A]">→</span>}
            </span>
          ))}
        </div>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <article className="bg-[#FFFDF8] border border-[#D9D8D0] p-8 flex flex-col justify-between rounded-lg shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-[#17372D] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8F04A]" />
                What&apos;s included
              </h3>
              <ul className="text-[#66706A] text-sm leading-relaxed space-y-2.5">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#17372D] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-[#FFFDF8] border border-[#D9D8D0] p-8 flex flex-col justify-between rounded-lg shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-[#17372D] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8F04A]" />
                Best for
              </h3>
              <p className="text-[#66706A] text-sm leading-relaxed mb-6">
                Founders validating new concepts, engineering leaders accelerating critical product features, and teams testing ideas with real software early.
              </p>
              <div className="bg-[#F5F3ED] p-4 rounded border border-[#D9D8D0] mt-4">
                <p className="text-xs font-mono text-[#17372D] uppercase font-bold mb-1">Sprint Goal</p>
                <p className="text-xs text-[#66706A]">Build the right slice → Show real software → Learn quickly → Decide what comes next</p>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-[#FFFDF8] border border-[#D9D8D0] p-8 flex flex-col justify-between rounded-lg shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-[#17372D] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8F04A]" />
                Next step
              </h3>
              <p className="text-[#66706A] text-sm leading-relaxed mb-6">
                Ready to define your product slice and put working software in front of users in days?
              </p>
            </div>
            <a
              href="#contact"
              className="bg-[#17372D] text-[#F5F3ED] px-5 py-3 rounded font-bold text-xs hover:bg-[#17372D]/90 transition-colors inline-flex items-center justify-center gap-2 group"
            >
              Discuss a Product Sprint <span className="text-[#C8F04A] font-mono group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

