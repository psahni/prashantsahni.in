---
name: tailwind-css-review
description: Comprehensive Tailwind CSS v4 & Design System code review skill enforcing theme variable consistency, CSS custom property mapping (@theme inline), class modularity, responsive design standards, and elimination of hardcoded values. Trigger when reviewing styling, theme variables, or Tailwind CSS code.
---

# Tailwind CSS v4 & Design System Review Skill

This skill provides a structured framework for auditing Tailwind CSS v4 implementations, design system tokens, CSS variable consistency, and component class modularity.

---

## 🔍 Review Categories & Checklist

### 1. Theme Variable & Design Token Compliance
- **Design Token Usage**: Verify that design system color tokens (`--bg-ivory`, `--forest-primary`, `--lime-accent`, `--text-muted`, `--border-warm`, `--bg-surface`) are used systematically.
- **Elimination of Magic Values**: Flag hardcoded hex values (e.g., `#17372D`, `#C8F04A`, `#D9D8D0`, `#F5F3ED`) scattered inside component utility strings. Recommend substituting with theme token utilities or Tailwind theme variables.
- **Tailwind v4 `@theme inline` Alignment**: Ensure theme variables are declared inside `@theme inline` blocks in `globals.css` so Tailwind utility classes resolve them correctly.

### 2. Class Modularity & Cleanliness
- **Component Class Hierarchy**: Ensure utility classes follow a consistent logical order (Layout → Flex/Grid → Spacing → Typography → Background/Borders → Effects/Transitions).
- **Redundancy & Overrides**: Check for conflicting utility classes on the same element (e.g., `p-4 px-6` or `text-sm text-base`).
- **Dry Styling Patterns**: Identify repeated, complex utility strings that should be extracted into semantic CSS utility classes in `globals.css` or shared component primitives.

### 3. Responsive & Layout Best Practices
- **Breakpoint Modifier Hygiene**: Verify clean mobile-first design using responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`). Ensure mobile viewports stack layouts naturally without horizontal scrolling (`overflow-x`).
- **Flexbox & Grid Layout Integrity**: Confirm grid gap properties, container maximum widths (`max-w-[1180px]`), and responsive column counts.
- **Aspect Ratio & Geometry**: Check dynamic scaling of SVGs, visual containers, and aspect ratio modifiers.

### 4. Accessibility & Interactive States
- **State Feedback**: Ensure interactive elements (`<a>`, `<button>`, `<input>`) have clear `hover:`, `focus:`, and `active:` visual feedback.
- **Color Contrast Ratios**: Confirm text colors (`--forest-primary`, `--text-muted`) maintain compliant WCAG AA contrast against background surfaces (`--bg-ivory`, `--bg-surface`).
- **Focus Rings**: Verify visible focus indicators for keyboard navigation accessibility.

---

## 📋 Standard Review Output Structure

When executing a Tailwind CSS review using this skill, present findings in this format:

1. 🎯 **Overall Styling & Theme Compliance Score** (A/B/C/D)
2. 🎨 **Theme Token & CSS Variable Analysis**
3. 🧩 **Class Modularity & Extraction Recommendations**
4. 📱 **Responsive & Layout Consistency**
5. ✅ **Verification Commands** (`npm run lint`, `npm run build`)
