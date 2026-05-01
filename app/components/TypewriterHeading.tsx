"use client";

import { useState, useEffect, useRef } from "react";

interface Token {
  text: string;
  className?: string;
}

interface TypewriterHeadingProps {
  tokens: Token[];
  className?: string;
  interval?: number;
}

export default function TypewriterHeading({
  tokens,
  className,
  interval = 160,
}: TypewriterHeadingProps) {
  const [started, setStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || visibleCount >= tokens.length) return;
    const timer = setTimeout(() => setVisibleCount((v) => v + 1), interval);
    return () => clearTimeout(timer);
  }, [started, visibleCount, tokens.length, interval]);

  return (
    <h2 ref={ref} className={className}>
      {tokens.map((token, i) => (
        <span
          key={i}
          className={`${token.className ?? ""} ${i < visibleCount ? "opacity-100" : "opacity-0"}`}
        >
          {token.text}
        </span>
      ))}
      {started && visibleCount < tokens.length && (
        <span className="inline-block w-[2px] h-[0.85em] bg-violet-500 animate-pulse align-middle ml-1" />
      )}
    </h2>
  );
}
