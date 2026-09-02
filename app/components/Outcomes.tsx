export default function Outcomes() {
  const outcomes = [
    { value: "80%", label: "Reduction in research/news-discovery effort" },
    { value: "50–60%", label: "Increase in engineering productivity using AI agents" },
    { value: "50%", label: "Reduction in merchant onboarding time" },
    { value: "60%", label: "Reduction in third-party geolocation costs" },
    { value: "30%", label: "Increase in customer-care agent productivity" },
    { value: "70–80%", label: "Improvement in product-search performance" },
  ];

  return (
    <section className="py-24 lg:py-[120px] border-t border-[#D9D8D0] bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#17372D] font-mono text-[12px] font-bold tracking-[0.18em] uppercase mb-12 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
          MEASURABLE OUTCOMES
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((stat) => (
            <div key={stat.label} className="bg-[#FFFDF8] border border-[#D9D8D0] p-8 rounded-lg shadow-sm hover:border-[#17372D] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#C8F04A]" />
                <strong className="block text-4xl lg:text-5xl font-bold text-[#17372D] tracking-tight">
                  {stat.value}
                </strong>
              </div>
              <p className="text-[#66706A] text-sm leading-relaxed font-normal">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

