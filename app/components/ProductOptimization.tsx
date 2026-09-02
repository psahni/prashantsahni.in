export default function ProductOptimization() {
  const painPoints = [
    { title: "Slow pages / Core Web Vitals", detail: "Frontend rendering & layout shifts" },
    { title: "Slow APIs & timeouts", detail: "Latency & response bottlenecks" },
    { title: "Backend bottlenecks", detail: "Concurrency & resource contention" },
    { title: "Database performance", detail: "Indexing, N+1 queries & locking" },
    { title: "High infrastructure costs", detail: "Cloud footprint & over-provisioning" },
    { title: "Scaling problems", detail: "Load spikes & traffic thresholds" },
    { title: "Architecture constraints", detail: "Tightly coupled legacy services" },
    { title: "Deployment & reliability", detail: "Downtime, errors & monitoring gaps" },
    { title: "Technical debt", detail: "Slow iteration & risky releases" },
  ];

  return (
    <section className="py-24 lg:py-[120px] border-t border-[#D9D8D0] bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        {/* Left column */}
        <div>
          <p className="text-[#17372D] font-mono text-[12px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
            ALREADY HAVE A PRODUCT?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-[-0.06em] text-[#17372D]">
            MAKE IT FASTER.<br />
            <span className="text-[#17372D]">MAKE IT SCALE.</span>
          </h2>
          <p className="text-[#66706A] text-base sm:text-lg mt-6 leading-relaxed mb-8 max-w-[480px]">
            You don&apos;t always need a rewrite. Sometimes you need to understand what&apos;s actually slowing the system down.
          </p>
          <a
            href="#contact"
            className="bg-[#17372D] text-[#F5F3ED] px-6 py-3.5 rounded font-bold text-xs hover:bg-[#17372D]/90 transition-colors inline-flex items-center gap-2 group shadow-sm"
          >
            Solve a performance problem <span className="text-[#C8F04A] font-mono group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Right column — Pain points grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-[#FFFDF8] border border-[#D9D8D0] p-5 rounded-lg text-sm text-[#17372D] flex flex-col justify-between hover:border-[#17372D] transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
                <span className="font-bold">{point.title}</span>
              </div>
              <span className="text-xs text-[#66706A] pl-3.5 font-mono">{point.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

