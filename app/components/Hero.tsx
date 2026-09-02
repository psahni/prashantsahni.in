export default function Hero() {
  return (
    <section className="pt-24 lg:pt-[140px] pb-24 border-b-0">
      <div className="max-w-[1180px] mx-auto px-7 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div>
          <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] mb-[22px] uppercase">
            AI-ACCELERATED PRODUCT ENGINEERING
          </p>
          <h1 className="text-[2.5rem] sm:text-[3.6rem] lg:text-[4.6rem] font-bold leading-[0.98] tracking-[-0.06em] text-[#111111] max-w-[780px]">
            <span className="whitespace-nowrap">BUILD WITH AI.</span><br />
            <span className="text-[#4f46e5]">SHIP FASTER.</span>
          </h1>
          <p className="text-[#656565] text-lg sm:text-xl max-w-[620px] my-[30px] font-normal leading-relaxed">
            I help founders and teams turn ideas into working software using AI-accelerated development and help existing products become faster, more reliable and ready to scale.
          </p>
          
          <div className="flex gap-3 flex-wrap items-center">
            <a
              href="#contact"
              className="bg-[#111111] text-white px-5 py-3.5 font-bold text-sm hover:bg-black/90 transition-colors inline-flex items-center gap-1.5"
            >
              Let&apos;s talk →
            </a>
            <a
              href="#work"
              className="bg-transparent text-[#111111] border border-[#dededb] px-5 py-3.5 font-bold text-sm hover:border-[#111111] transition-colors inline-flex items-center gap-1.5"
            >
              See my work →
            </a>
          </div>

          <div className="border-t border-[#dededb] grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[55px] pt-[18px] text-xs sm:text-sm text-[#656565]">
            <div>
              <b className="block text-[#111111] font-bold text-base">15+ years</b>
              engineering experience
            </div>
            <div>
              <b className="block text-[#111111] font-bold text-base">AI-accelerated</b>
              development
            </div>
            <div>
              <b className="block text-[#111111] font-bold text-base">Performance</b>
              &amp; scale
            </div>
          </div>
        </div>

        {/* Right Column — Product Loop Graphic */}
        <div className="flex justify-center">
          <div className="product-loop-container w-full max-w-[440px]">
            <div className="product-loop-circle">
              <span className="text-center font-bold text-[#111111] text-lg leading-tight">
                BUILD FIRST.<br />
                <span className="text-[#4f46e5]">LEARN FASTER.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

