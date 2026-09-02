"use client";

import { useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "How I Work", href: "#process" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#F5F3ED]/90 border-b border-[#D9D8D0] backdrop-blur-md z-50">
      <div className="max-w-[1180px] mx-auto px-7 h-[72px] flex items-center justify-between">
        <a href="#top" className="bg-[#17372D] text-[#F5F3ED] px-3 py-1.5 font-bold text-sm tracking-tight hover:opacity-95 transition-opacity flex items-center gap-1.5">
          PS<span className="w-1.5 h-1.5 rounded-full bg-[#C8F04A]" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#17372D]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#66706A] transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-bold text-sm text-[#17372D] hover:opacity-80 transition-opacity flex items-center gap-1.5 group"
        >
          Let&apos;s Talk <span className="text-[#17372D] font-mono group-hover:translate-x-0.5 transition-transform">→</span>
        </a>

        <button
          className="md:hidden p-2 text-[#17372D]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F5F3ED] border-t border-[#D9D8D0] px-7 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#17372D] hover:text-[#66706A] font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}


