# ANTIGRAVITY.md — Workspace Context & Conventions

## Overview
This repository contains the official portfolio website of **Prashant Sahni** (Engineering Leader & Full-Stack Developer).
It is a modern, single-page application (SPA) built using Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Resend for serverless contact email handling.

---

## Tech Stack & Architecture

- **Framework**: [Next.js 16](file:///e:/Prashant/development/2026/prashantsahni.in/package.json) (App Router, Turbopack, React 19)
- **Active Theme**: **Jupiter Theme** (Editorial, high-contrast, AI-accelerated product engineering design system)
- **Styling**: [Tailwind CSS v4](file:///e:/Prashant/development/2026/prashantsahni.in/app/globals.css) (`@tailwindcss/postcss`) with custom CSS variables
- **Typography (Jupiter Theme)**:
  - **Display / Headings**: `Space Grotesk` (`next/font/google`)
  - **Body Text**: `Inter` (`next/font/google`)
  - **Monospace Eyebrow**: `JetBrains Mono` (`next/font/google`)
- **Color Palette (Jupiter Theme)**:
  - Light Stone Background: `#fafaf9`
  - Dark Ink Foreground: `#111111`
  - Indigo Accent: `#4f46e5`
  - Muted Slate Text: `#656565`
  - Border Lines: `#dededb`
  - Dark Mode Sprint Section: `#111111` background with `#818cf8` indigo accent
- **Language**: TypeScript (`tsconfig.json` with strict configuration)
- **Email Service**: Resend API integration via serverless Route Handler ([`app/api/contact/route.ts`](file:///e:/Prashant/development/2026/prashantsahni.in/app/api/contact/route.ts))
- **Deployment**: Vercel Serverless

---

## Code Base Structure (`app/` focus)

```
prashantsahni.in/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Resend email handler endpoint (POST)
│   ├── components/
│   │   ├── About.tsx            # Experience, journey & career background
│   │   ├── Contact.tsx          # Interactive contact form linked to Resend API
│   │   ├── Footer.tsx           # Social links & copyright section
│   │   ├── Hero.tsx             # Main hero presentation card & headline
│   │   ├── LeadBanner.tsx       # Highlight callout banners
│   │   ├── Navbar.tsx           # Sticky navigation header
│   │   ├── Newsletter.tsx       # Substack / Newsletter sign-up section
│   │   ├── Portfolio.tsx        # Case studies & featured engineering projects
│   │   ├── Skills.tsx           # Technical architecture & stack breakdown
│   │   ├── TypewriterHeading.tsx# Typewriter dynamic text component
│   │   ├── WorkProcess.tsx      # How I work & leader/developer methodology
│   │   └── WorkTogether.tsx     # Advisory / co-founder collaboration pitch
│   ├── fonts/                   # WOFF2 font files (Lora, Sentient)
│   ├── fonts.ts                 # Local font loader configurations
│   ├── globals.css              # Tailwind v4 import & CSS custom properties
│   ├── layout.tsx               # Root layout & Metadata (SEO / OpenGraph)
│   └── page.tsx                 # Single Page Application composition
├── public/                      # Static image assets (pic1.jpg, pic2.jpg, icons)
├── AGENTS.md                    # Antigravity agent guidelines
├── ANTIGRAVITY.md               # Context documentation
├── CLAUDE.md                    # Legacy context reference file pointing to AGENTS.md
└── package.json                 # Dependency manifests & npm scripts
```

---

## Development & Operations Guidelines

### Key Commands
- `npm run dev`: Start local development server (http://localhost:3000)
- `npm run build`: Production build with Next.js compiler
- `npm start`: Run production server locally
- `npm run lint`: Run ESLint checks

### Environment Variables
Environment variables must be configured in `.env.local` (not committed to git):
```env
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=your-email@domain.com
```

### Engineering & Component Conventions
1. **App Router Conventions**: All pages and components utilize Next.js 16 App Router architecture. Component imports use the `@/app/` path alias.
2. **Modular SPA Sections**: Section components in `app/components/` must remain self-contained, responsive, and accessible. Smooth scrolling anchor links (`#portfolio`, `#contact`, etc.) map to section IDs.
3. **Styling Tokens**: Tailwind CSS v4 class utilities with inline custom properties in `globals.css` handle colors, gradients, and font variables.
4. **Form Handling**: Contact submission calls `/api/contact` using fetch `POST` JSON payloads. Handle loading, success, and error states gracefully in UI components.
