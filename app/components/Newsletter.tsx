export default function Newsletter() {
  return (
    <section className="py-24 lg:py-[120px] border-t border-[#D9D8D0] bg-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7 flex flex-col md:flex-row md:items-center justify-between gap-8 bg-[#FFFDF8] border border-[#D9D8D0] p-8 sm:p-12 rounded-lg shadow-sm">
        <div>
          <p className="text-[#17372D] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
            LINKEDIN NEWSLETTER
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-none tracking-[-0.06em] text-[#17372D] mb-4">
            BUILDING SOFTWARE IN THE AI ERA.
          </h2>
          <p className="text-[#66706A] text-base sm:text-lg max-w-[620px]">
            I write about AI-assisted development, software architecture, engineering practices, performance, and building better products in the AI era.
          </p>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/newsletters/dev-design-architecture-7216775623950704640/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#17372D] text-[#F5F3ED] px-6 py-3.5 rounded font-bold text-xs hover:bg-[#17372D]/90 transition-colors inline-flex items-center gap-2 group whitespace-nowrap shadow-sm"
          >
            Subscribe on LinkedIn <span className="text-[#C8F04A] font-mono group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}


