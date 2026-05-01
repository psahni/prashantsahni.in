import { lora } from "@/app/fonts";

interface LeadBannerProps {
  line1: string;
  line2?: string;
  highlight?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
}

function withHighlight(text: string, highlight: string | undefined) {
  if (!highlight) return text;
  const parts = text.split(highlight);
  if (parts.length < 2) return text;
  return (
    <>
      {parts[0]}
      <span className="relative inline-block">
        {highlight}
        <span
          aria-hidden="true"
          className="absolute left-0 bottom-0.5 w-3/4 h-[3px] bg-violet-400 rounded-full"
        />
      </span>
      {parts[1]}
    </>
  );
}

export default function LeadBanner({
  line1,
  line2,
  highlight,
  subtext,
  ctaText = "Let's Build Together",
  ctaHref = "#contact",
}: LeadBannerProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className={`${lora.className} text-3xl md:text-5xl font-bold italic text-white leading-tight mb-5`}>
          {line2 ? withHighlight(line1, undefined) : withHighlight(line1, highlight)}
          {line2 && (
            <>
              <br />
              {withHighlight(line2, highlight)}
            </>
          )}
        </p>

        {subtext && (
          <p className={`${lora.className} text-slate-300 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed`}>
            {subtext}
          </p>
        )}

        <div className="mt-10">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-violet-900/50"
          >
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
