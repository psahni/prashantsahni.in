---
name: nextjs-code-review
description: Comprehensive Next.js 16 (App Router), React 19, and TypeScript code review skill enforcing performance, security, SEO, accessibility, component modularity, and server/client boundary best practices. Trigger when performing code reviews or auditing Next.js applications.
---

# Next.js 16 (App Router) Code Review Skill

This skill provides a structured framework for performing comprehensive code reviews on Next.js 16+ applications using React 19, TypeScript, and Tailwind CSS.

---

## 🔍 Review Categories & Checklist

### 1. Server vs. Client Component Boundaries
- **Default to Server Components**: Ensure components are Server Components by default unless interactive state (`useState`, `useEffect`, `useContext`) or browser APIs (`window`, `localStorage`, event handlers) are explicitly required.
- **Leaf Node `"use client"` Placement**: Push `"use client"` directives down to the smallest possible leaf components to maximize server-side rendering benefits and minimize JavaScript bundle size sent to the browser.
- **Hydration Protection**: Check for non-deterministic values (e.g. `Math.random()`, `Date.now()`, or browser-only attributes) that could cause SSR vs. Client hydration mismatch errors. Ensure `suppressHydrationWarning` is used only where strictly necessary.

### 2. Performance & Asset Optimization
- **`next/image` Usage**: Verify all images use `next/image` with explicit `alt`, `width`/`height` or `fill`, proper `sizes` attribute for responsive srcset, and `priority` on above-the-fold hero images.
- **`next/font` Optimization**: Ensure fonts are imported via `next/font/google` or `next/font/local` to eliminate render-blocking external network requests and prevent Cumulative Layout Shift (CLS).
- **Bundle Optimization**: Check for heavy 3rd-party library imports. Use `dynamic()` with loading fallbacks for large interactive components.
- **Route Handler Caching**: Verify `fetch()` caching strategies (`cache: 'force-cache'`, `revalidate`, or `no-store`) are explicitly specified in data fetching calls.

### 3. Security & Secret Management
- **Environment Variable Scope**: Audit environment variables. Ensure sensitive secrets (`RESEND_API_KEY`, database credentials, private tokens) are never prefixed with `NEXT_PUBLIC_`.
- **API Route Validation**: Ensure all Next.js Route Handlers (`app/api/*/route.ts`) validate incoming request bodies (using `zod` or explicit type checks) and return typed JSON responses with appropriate HTTP status codes (`400`, `401`, `404`, `500`).
- **Sanitization**: Ensure user-supplied input rendered in components is sanitized to prevent XSS.

### 4. Component Modularity & Code Quality
- **Single Responsibility Principle**: Confirm UI sections are broken down into clean, modular components inside `app/components/`.
- **TypeScript Strictness**: Enforce strict types for component props, async function returns, and API payloads. Avoid `any`.
- **Tailwind CSS Best Practices**: Ensure Tailwind classes use predefined color/spacing design tokens instead of arbitrary ad-hoc magic values.

### 5. SEO & Accessibility (a11y)
- **Metadata Configuration**: Ensure `export const metadata: Metadata` in `layout.tsx` or `page.tsx` includes title, description, OpenGraph tags, and canonical URLs.
- **Semantic HTML Structure**: Enforce `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, and a single `<h1>` tag per page.
- **Accessibility**: Verify interactive elements (`<button>`, `<a>`, `<input>`) have descriptive `aria-label`, visible focus rings, and proper keyboard navigation support.

---

## 📋 Standard Code Review Output Structure

When executing a code review using this skill, present findings in this format:

1. 🎯 **Overall Summary & Quality Grade** (A/B/C/D)
2. 🚨 **Critical / Security Issues** (Must fix before production)
3. ⚡ **Performance & Optimization Opportunities**
4. 🛠️ **Architecture & Component Refactoring Recommendations**
5. ✅ **Verification Commands** (`npm run lint`, `npm run build`)
