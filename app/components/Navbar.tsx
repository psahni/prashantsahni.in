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
    <header className="sticky top-0 bg-[#fafaf9e8] border-b border-[#dededb] backdrop-blur-md z-50">
      <div className="max-w-[1180px] mx-auto px-7 h-[72px] flex items-center justify-between">
        <a href="#top" className="bg-[#111111] text-[#fafaf9] px-2.5 py-1.5 font-bold text-sm tracking-tight hover:opacity-90 transition-opacity">
          PS
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#656565]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#111111] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-bold text-sm text-[#111111] hover:text-[#4f46e5] transition-colors flex items-center gap-1"
        >
          Let&apos;s Talk <span className="text-[#4f46e5]">→</span>
        </a>

        <button
          className="md:hidden p-2 text-[#111111]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fafaf9] border-t border-[#dededb] px-7 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#656565] hover:text-[#111111] font-medium py-1"
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

