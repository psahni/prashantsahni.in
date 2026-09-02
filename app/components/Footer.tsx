export default function Footer() {
  return (
    <footer className="border-t border-[#dededb] py-[40px] pb-[70px] bg-[#fafaf9]">
      <div className="max-w-[1180px] mx-auto px-7 flex flex-wrap justify-between items-center gap-[30px] text-sm text-[#656565]">
        <div>
          <b className="text-[#111111] font-bold block text-base">Prashant K. Sahni</b>
          <div className="text-xs text-[#656565] mt-0.5">AI-Accelerated Product Engineering</div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a href="#work" className="hover:text-[#111111] transition-colors">Work</a> ·
          <a href="#process" className="hover:text-[#111111] transition-colors">How I Work</a> ·
          <a href="#expertise" className="hover:text-[#111111] transition-colors">Expertise</a> ·
          <a href="#about" className="hover:text-[#111111] transition-colors">About</a> ·
          <a href="#contact" className="hover:text-[#111111] transition-colors">Let&apos;s Talk</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/prashantsahni5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            LinkedIn
          </a>
          ·
          <a
            href="https://github.com/psahni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

