export default function WorkProcess() {
  const steps = [
    {
      num: "01",
      name: "Understand",
      description: "Problem, users, goals and constraints.",
    },
    {
      num: "02",
      name: "Build",
      description: "Create a working solution quickly with AI-accelerated development.",
    },
    {
      num: "03",
      name: "Show",
      description: "Put real software in front of people early.",
    },
    {
      num: "04",
      name: "Learn & Improve",
      description: "Iterate, refine and scale based on feedback.",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-[120px] bg-[#17372D] text-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div>
            <p className="text-[#C8F04A] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
              HOW I WORK
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-[-0.06em] text-[#F5F3ED]">
              BUILD FIRST.<br />
              <span className="text-[#C8F04A]">LEARN FASTER.</span>
            </h2>
            <p className="text-[#D9D8D0]/80 text-base sm:text-lg mt-[24px] leading-relaxed max-w-[500px]">
              Traditional software development can spend weeks in discovery, strategy and planning before anyone sees something real. AI changes the economics of building software. I still spend time understanding the problem, defining constraints and making the right architectural decisions. But instead of disappearing into a long planning cycle, I move quickly toward a working implementation.
            </p>
          </div>

          {/* Right column — Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#F5F3ED]/5 border border-[#F5F3ED]/15 p-6 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#C8F04A]/50 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="font-mono text-sm font-bold text-[#17372D] bg-[#C8F04A] px-2.5 py-1 rounded">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-[#F5F3ED]">{step.name}</h3>
                    <p className="text-xs sm:text-sm text-[#D9D8D0]/70 mt-0.5">{step.description}</p>
                  </div>
                </div>
                <span className="text-[#C8F04A] font-mono text-sm hidden sm:inline">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Positioning Statement */}
        <div className="mt-16 pt-8 border-t border-[#F5F3ED]/15 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg sm:text-xl font-bold text-[#F5F3ED] tracking-tight">
            AI accelerates the implementation.{" "}
            <span className="text-[#C8F04A]">Engineering judgment keeps it production-ready.</span>
          </p>
          <a
            href="#contact"
            className="bg-[#C8F04A] text-[#17372D] px-5 py-2.5 rounded font-bold text-xs hover:bg-[#C8F04A]/90 transition-colors whitespace-nowrap"
          >
            Start a project →
          </a>
        </div>
      </div>
    </section>
  );
}

