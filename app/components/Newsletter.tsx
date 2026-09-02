export default function Newsletter() {
  return (
    <section className="py-24 lg:py-[120px] border-t border-[#dededb]">
      <div className="max-w-[1180px] mx-auto px-7 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <p className="text-[#4f46e5] font-mono text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
            MY LINKEDIN NEWSLETTER
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-none tracking-[-0.06em] text-[#111111] mb-4">
            BUILDING SOFTWARE IN THE AI ERA.
          </h2>
          <p className="text-[#656565] text-lg">
            Notes on product engineering, AI tools and building better software.
          </p>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/newsletters/dev-design-architecture-7216775623950704640/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#111111] hover:text-[#4f46e5] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            Subscribe on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}

