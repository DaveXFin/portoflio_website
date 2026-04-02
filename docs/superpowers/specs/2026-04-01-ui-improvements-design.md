# UI Improvements Design

**Date:** 2026-04-01  
**Status:** Approved  

---

## Overview

Three focused improvements to the portfolio website UI:
1. Widen the overall layout and card text sizes for better readability
2. Darken light mode cards so they are clearly visible against the background
3. Add a Projects section below Work Experience with a 2-column grid of project cards

---

## 1. Layout & Readability

**Max-width:** Body widened from `max-w-xl` (576px) to `max-w-3xl` (768px) in `app/layout.tsx`. This gives cards more breathing room across all sections.

**Text sizes in experience cards (`app/components/experience.tsx`):**
- Company / period subtitle: `sm` → `md`
- Bullet point text: `sm` → `md`
- Expanded details text: `sm` → `md`
- "Learn more / Show less" label: `xs` → `sm`

**Text sizes in project cards (`app/components/project-card.tsx`):**
- Description: `text-sm` → `text-base`
- Tech stack pills: `text-xs` → `text-sm`
- Link labels: `text-xs` → `text-sm`

---

## 2. Light Mode Card Fix

All glass cards updated in `app/global.css` from `rgba(255,255,255,0.65)` to `rgba(220,220,220,0.9)` and border opacity increased from `0.2` to `0.3`. Applies to:
- `.experience-card`
- `.welcome-card`
- `.profile-header`
- `.project-card` (new)

Dark mode values remain unchanged.

---

## 3. Projects Section

### New Component: `app/components/project-card.tsx`

A `ProjectCard` component with the following props:
```ts
interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  index: number;
}
```

Card anatomy (top to bottom):
- **Screenshot area** (h-44): displays `imageUrl` if provided, otherwise a placeholder icon
- **Name**: `text-lg font-semibold`
- **Description**: `text-base leading-relaxed`
- **Tech stack pills**: small rounded tags with `project-card-tag` styling
- **Links row**: GitHub icon + "GitHub" label, external link icon + "Live Demo" label — opens in new tab

Matches the existing glass-card aesthetic (same backdrop blur, border, hover lift animation as experience cards).

### Page Integration (`app/page.tsx`)

A `projects` array is defined at the top of `Page()` with fields: `name`, `description`, `techStack`, `githubUrl`, `demoUrl`, `imageUrl`.

Below the `<Timeline>` block:
```tsx
<h2 className="intro-title mt-12 mb-8 text-2xl font-semibold tracking-tight">
  Projects
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  {projects.map((project, index) => (
    <ProjectCard key={index} index={index} {...project} />
  ))}
</div>
```

**Pre-populated projects:** Travel Buddy, dVox, Document Translation Platform. URLs and images left as empty strings — fill in when available.

---

## Files Changed

| File | Change |
|------|--------|
| `app/layout.tsx` | `max-w-xl` → `max-w-3xl` |
| `app/global.css` | Light mode card backgrounds darkened; project card styles added |
| `app/components/experience.tsx` | Font sizes bumped up |
| `app/components/project-card.tsx` | New component |
| `app/page.tsx` | Projects array + Projects section added |
