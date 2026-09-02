export default function ProductOptimization() {
  const painPoints = [
    "Slow pages and poor Core Web Vitals",
    "API bottlenecks and timeouts",
    "Database queries that do not scale",
    "Cloud infrastructure costs too high",
    "Technical debt slowing delivery",
    "Unreliable systems and incidents",
  ];

  return (
    <section className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        {/* Left column */}
        <div>
          <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
            ALREADY HAVE A PRODUCT?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-[-0.06em] text-[#111111]">
            MAKE IT FASTER.<br />
            MAKE IT SCALE.
          </h2>
          <p className="text-[#656565] text-lg mt-6 leading-relaxed mb-8">
            Find and fix the constraints that keep your product from moving forward.
          </p>
          <a
            href="#contact"
            className="text-sm font-bold text-[#111111] hover:text-[#4f46e5] transition-colors inline-flex items-center gap-1"
          >
            Talk about a performance or scaling problem →
          </a>
        </div>

        {/* Right column — Pain points grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-[#dededb] border border-[#dededb]">
          {painPoints.map((point) => (
            <div
              key={point}
              className="bg-[#fafaf9] p-6 text-sm text-[#656565] flex items-center min-h-[90px]"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
