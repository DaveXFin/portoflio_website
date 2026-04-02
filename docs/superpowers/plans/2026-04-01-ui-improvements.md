# UI Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Widen the portfolio layout, darken light mode cards for legibility, bump card text sizes, and add a Projects section with a 2-column grid below Work Experience.

**Architecture:** All style changes live in `app/global.css` (CSS classes) and Tailwind utilities inline on components. The new `ProjectCard` component mirrors the existing `WorkExperienceCard` pattern — glass card style, Framer Motion enter/hover animations, no external state. Project data is a plain array in `page.tsx`, same pattern as the `experiences` array.

**Tech Stack:** Next.js 14, Tailwind CSS v4, Chakra UI, Framer Motion

---

## Files

| File | Role |
|------|------|
| `app/layout.tsx` | Body max-width |
| `app/global.css` | Card background colours, new `.project-card*` classes |
| `app/components/experience.tsx` | Font size bumps |
| `app/components/project-card.tsx` | New component — created |
| `app/page.tsx` | Projects data array + Projects section |
| `public/projects/` | Screenshot images (one per project) |

---

## Task 1: Verify layout width and light mode card fix

**Files:**
- Read: `app/layout.tsx`
- Read: `app/global.css`

- [ ] **Step 1: Confirm body width change**

Open `app/layout.tsx` and verify line 58 reads:
```tsx
<body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
```

- [ ] **Step 2: Confirm light mode card backgrounds**

Open `app/global.css` and verify `.experience-card`, `.welcome-card`, and `.profile-header` all read:
```css
background-color: rgba(220, 220, 220, 0.9);
border: 1px solid rgba(55, 65, 81, 0.3);
```

- [ ] **Step 3: Visual check in browser**

Run `npm run dev` and open `http://localhost:3000`.  
Toggle to **light mode**. Cards should look clearly distinct from the `#F7F7F7` page background — no near-invisible ghost cards.  
Toggle to **dark mode**. Cards should look unchanged (dark navy, not grey).

- [ ] **Step 4: Commit if not already committed**

```bash
git add app/layout.tsx app/global.css
git commit -m "fix: widen layout to max-w-3xl and darken light mode cards"
```

---

## Task 2: Verify experience card text size bump

**Files:**
- Read: `app/components/experience.tsx`

- [ ] **Step 1: Confirm font size changes in experience.tsx**

Open `app/components/experience.tsx` and verify these values:

```tsx
// Company / period subtitle — line ~50
<Text fontSize="md" className="experience-card-subtitle" fontWeight="medium">

// Bullet text — line ~58
<Text
  fontSize="md"
  className="experience-card-text"

// Expanded details text — line ~89
<Text fontSize="md" className="experience-card-back-text" lineHeight="tall">

// Learn more / Show less label — line ~108
<Text fontSize="sm" className="experience-card-subtitle" fontStyle="italic">
```

- [ ] **Step 2: Visual check**

In the browser, click an experience card to expand it.  
Bullet text, subtitle, and expanded details should all be noticeably larger than before (Chakra `md` ≈ 16px vs previous `sm` ≈ 14px).

- [ ] **Step 3: Commit**

```bash
git add app/components/experience.tsx
git commit -m "fix: bump experience card text sizes for readability"
```

---

## Task 3: Verify ProjectCard component

**Files:**
- Read: `app/components/project-card.tsx`

- [ ] **Step 1: Confirm component exists and props match**

Open `app/components/project-card.tsx`. Verify the interface:
```tsx
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

- [ ] **Step 2: Confirm text sizes**

In the same file verify:
```tsx
// Description
<p className="project-card-text text-base leading-relaxed">{description}</p>

// Tech pills
className="project-card-tag text-sm font-medium px-2 py-0.5 rounded-full"

// Links
className="project-card-link flex items-center gap-1.5 text-sm font-medium"
```

- [ ] **Step 3: Visual check in browser**

Scroll to the Projects section.  
- Cards should appear in a 2-col grid on desktop, 1-col on mobile.  
- Each card shows the image placeholder icon (grey area), name, description, tech pills, and link row.  
- Hover a card — it should lift 4px upward.

- [ ] **Step 4: Commit**

```bash
git add app/components/project-card.tsx app/global.css
git commit -m "feat: add ProjectCard component with glass-card style"
```

---

## Task 4: Add project screenshots

**Files:**
- Create: `public/projects/travel-buddy.png`
- Create: `public/projects/dvox.png`
- Create: `public/projects/translation-platform.png`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add screenshot images**

Place one screenshot per project in `public/projects/`. Recommended size: 1200×675px (16:9). Filename must match exactly:
- `public/projects/travel-buddy.png`
- `public/projects/dvox.png`
- `public/projects/translation-platform.png`

If no screenshots are ready yet, skip to Step 3 — the placeholder icon will show instead.

- [ ] **Step 2: Update imageUrl values in page.tsx**

Open `app/page.tsx` and update the `projects` array:
```tsx
const projects = [
  {
    name: "Travel Buddy",
    description: "An all-in-one travel planning app focused on giving users a stress-free planning experience while connecting them with local culture and unique experiences.",
    techStack: ["React Native", "TypeScript", "Expo", "Node.js"],
    githubUrl: "",          // add when available
    demoUrl: "",            // add when available
    imageUrl: "/projects/travel-buddy.png",
  },
  {
    name: "dVox",
    description: "A decentralized micro-blogging application built on the Ethereum blockchain, allowing users to own their content through smart contract technology.",
    techStack: ["Solidity", "Ethereum", "React Native", "Firebase"],
    githubUrl: "",
    demoUrl: "",
    imageUrl: "/projects/dvox.png",
  },
  {
    name: "Document Translation Platform",
    description: "An in-house translation platform for the European Medicines Agency, reducing translation turnaround from days to minutes and saving 120k€ annually.",
    techStack: ["Python", "Flask", "React", "Docker"],
    githubUrl: "",
    demoUrl: "",
    imageUrl: "/projects/translation-platform.png",
  },
];
```

- [ ] **Step 3: Visual check**

Reload `http://localhost:3000`. Each project card should now show the screenshot image filling the top area (object-cover). If image is missing, the grey placeholder icon shows — which is correct fallback behaviour.

- [ ] **Step 4: Commit**

```bash
git add public/projects/ app/page.tsx
git commit -m "feat: add project screenshots and wire imageUrl fields"
```

---

## Task 5: Add project GitHub and demo URLs

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Fill in URLs**

Open `app/page.tsx`. For each project that has a public GitHub repo or live demo, fill in the corresponding field:

```tsx
// Example for Travel Buddy
githubUrl: "https://github.com/yourusername/travel-buddy",
demoUrl: "",   // leave empty if no live demo yet
```

Leave fields as `""` for projects that are private or not yet deployed — the link row simply won't render that button.

- [ ] **Step 2: Verify links open correctly**

In the browser, click a GitHub or Live Demo link. It should open in a new tab (`target="_blank"`). Verify no console warnings about `rel="noopener noreferrer"` (already set in the component).

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add project URLs to projects array"
```

---

## Self-Review

**Spec coverage:**
- [x] Wider layout — Task 1
- [x] Light mode card fix — Task 1
- [x] Experience card text sizes — Task 2
- [x] ProjectCard component — Task 3
- [x] Projects section on page — Task 3 (visual check) + Task 4/5 (data)
- [x] Screenshot image — Task 4
- [x] Tech stack pills — Task 3
- [x] GitHub / demo links — Task 5

**Gaps:** None. All spec requirements covered.

**Placeholders:** None. All code blocks are complete. Empty strings for URLs are intentional pending data, not placeholder text.

**Type consistency:** `ProjectCardProps` interface defined in Task 3 Step 1 matches usage in `page.tsx` in Tasks 4–5.
