export default function Hero() {
  return (
    <section className="pt-24 lg:pt-[140px] pb-24 border-b-0 bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div>
          <p className="text-[#17372D] font-mono text-[12px] font-bold tracking-[0.18em] mb-[22px] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8F04A] inline-block shadow-sm" />
            AI-ACCELERATED PRODUCT ENGINEERING
          </p>
          <h1 className="text-[2.6rem] sm:text-[3.8rem] lg:text-[4.8rem] font-bold leading-[0.98] tracking-[-0.06em] text-[#17372D] max-w-[780px]">
            <span className="whitespace-nowrap">BUILD WITH AI.</span><br />
            <span className="text-[#17372D]">SHIP FASTER.</span>
          </h1>
          <p className="text-[#66706A] text-lg sm:text-xl max-w-[620px] my-[30px] font-normal leading-relaxed">
            I help founders and teams turn ideas into working software using AI-accelerated development — and help existing products become faster, more reliable and ready to scale.
          </p>
          
          <div className="flex gap-3.5 flex-wrap items-center">
            <a
              href="#contact"
              className="bg-[#17372D] text-[#F5F3ED] px-6 py-3.5 font-bold text-sm hover:bg-[#17372D]/90 transition-colors inline-flex items-center gap-2 group shadow-sm"
            >
              Let&apos;s talk <span className="text-[#C8F04A] font-mono group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
            <a
              href="#work"
              className="bg-transparent text-[#17372D] border border-[#D9D8D0] px-6 py-3.5 font-bold text-sm hover:border-[#17372D] transition-colors inline-flex items-center gap-2"
            >
              See my work →
            </a>
          </div>

          <div className="border-t border-[#D9D8D0] grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[55px] pt-[18px] text-xs sm:text-sm text-[#66706A]">
            <div>
              <b className="block text-[#17372D] font-bold text-base">15+ years</b>
              engineering experience
            </div>
            <div>
              <b className="block text-[#17372D] font-bold text-base">AI-accelerated</b>
              development
            </div>
            <div>
              <b className="block text-[#17372D] font-bold text-base">Performance</b>
              &amp; scale
            </div>
          </div>
        </div>

        {/* Right Column — Profile Photo + Tagline */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[380px] flex flex-col">
            {/* Photo Container */}
            <div className="overflow-hidden rounded-lg border border-[#D9D8D0] shadow-sm bg-white">
              <img
                src="/headshot.JPG"
                alt="Prashant K. Sahni — Engineering & Product Consultant"
                className="w-full mix-blend-multiply"
                loading="eager"
              />
            </div>

            {/* Editorial Tagline Card */}
            <div className="mt-4 border-l-[3px] border-[#C8F04A] pl-5 py-3">
              <p className="text-[#17372D] text-[15px] font-medium leading-relaxed italic">
                &ldquo;Ship early. Learn fast. Build what matters.&rdquo;
              </p>
              <p className="text-[#66706A] text-xs font-mono tracking-wide mt-1.5 uppercase">
                Prashant K. Sahni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


