export default function Footer() {
  return (
    <footer className="border-t border-[#F5F3ED]/15 py-[40px] pb-[70px] bg-[#17372D] text-[#F5F3ED]">
      <div className="max-w-[1180px] mx-auto px-7 flex flex-wrap justify-between items-center gap-[30px] text-sm text-[#D9D8D0]/80">
        <div>
          <b className="text-[#F5F3ED] font-bold block text-base flex items-center gap-2">
            Prashant K. Sahni
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
          </b>
          <div className="text-xs text-[#D9D8D0]/70 mt-0.5">AI-Accelerated Product Engineering</div>
        </div>

        <div className="flex flex-wrap items-center gap-2 font-medium">
          <a href="#work" className="hover:text-[#C8F04A] transition-colors">Work</a> ·
          <a href="#process" className="hover:text-[#C8F04A] transition-colors">How I Work</a> ·
          <a href="#expertise" className="hover:text-[#C8F04A] transition-colors">Expertise</a> ·
          <a href="#about" className="hover:text-[#C8F04A] transition-colors">About</a> ·
          <a href="#contact" className="hover:text-[#C8F04A] transition-colors">Let&apos;s Talk</a>
        </div>

        <div className="flex items-center gap-3 font-medium">
          <a
            href="https://www.linkedin.com/in/prashantsahni5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8F04A] transition-colors"
          >
            LinkedIn
          </a>
          ·
          <a
            href="https://github.com/psahni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8F04A] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}


