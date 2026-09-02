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
    <header className="sticky top-0 bg-ivory/90 border-b border-warm backdrop-blur-md z-50">
      <div className="max-w-[1180px] mx-auto px-7 h-[72px] flex items-center justify-between">
        <a href="#top" className="bg-forest text-ivory px-3 py-1.5 font-bold text-sm tracking-tight hover:opacity-95 transition-opacity flex items-center gap-1.5">
          PS<span className="w-1.5 h-1.5 rounded-full bg-lime" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-muted transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-bold text-sm text-forest hover:opacity-80 transition-opacity flex items-center gap-1.5 group"
        >
          Let&apos;s Talk <span className="text-forest font-mono group-hover:translate-x-0.5 transition-transform">→</span>
        </a>

        <button
          className="md:hidden p-2 text-forest"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-warm px-7 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-forest hover:text-muted font-medium py-1"
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


