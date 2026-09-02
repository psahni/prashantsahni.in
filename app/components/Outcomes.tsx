export default function Outcomes() {
  const outcomes = [
    { value: "80%", label: "Reduction in research and news-discovery effort" },
    { value: "50–60%", label: "Increase in engineering productivity using AI agents" },
    { value: "50%", label: "Reduction in merchant onboarding time" },
    { value: "60%", label: "Reduction in third-party geolocation costs" },
    { value: "30%", label: "Increase in customer-care agent productivity" },
    { value: "70–80%", label: "Improvement in product-search performance" },
  ];

  return (
    <section className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-12">
          MEASURABLE OUTCOMES
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {outcomes.map((stat) => (
            <div key={stat.label} className="border-t border-[#dededb] pt-[30px]">
              <strong className="block text-4xl lg:text-5xl font-bold text-[#4f46e5] mb-2">
                {stat.value}
              </strong>
              <p className="text-[#656565] text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
