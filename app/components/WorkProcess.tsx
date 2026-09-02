export default function WorkProcess() {
  const steps = [
    { num: "01", name: "UNDERSTAND" },
    {
      num: "02",
      name: "BUILD",
      note: "AI accelerates implementation. Judgment keeps it production-ready.",
    },
    { num: "03", name: "SHOW" },
    { num: "04", name: "LEARN & IMPROVE" },
  ];

  return (
    <section id="process" className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* Left column */}
        <div>
          <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
            A DIFFERENT WAY TO BUILD
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-[-0.06em] text-[#111111]">
            BUILD FIRST.<br />
            LEARN FASTER.
          </h2>
          <p className="text-[#656565] text-lg sm:text-xl mt-[30px] leading-relaxed">
            Get to a useful slice quickly, then use what you learn to make the next decision.
          </p>
        </div>

        {/* Right column — Steps */}
        <div className="border-t border-b border-[#dededb]">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                idx < steps.length - 1 ? "border-b border-[#dededb]" : ""
              }`}
            >
              <div className="flex items-center font-bold text-lg text-[#111111]">
                <span className="text-[#4f46e5] font-mono text-xs mr-6">{step.num}</span>
                {step.name}
              </div>
              {step.note && (
                <span className="text-xs text-[#656565] italic max-w-[280px]">
                  {step.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
