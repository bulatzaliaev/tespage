# Save Room Brand Home Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing starter with a polished Astro 7 static brand home for the Save Room YouTube channel.

**Architecture:** Recreate the project in place with Astro 7, TypeScript, and a minimal dependency surface. Store typed videos and collections in `src/data`, render shared Astro components across static routes, and use one small native script for progressive-enhancement filtering on `/watch`.

**Tech Stack:** Astro 7, TypeScript, CSS, native browser JavaScript, YouTube links/thumbnail URLs, Astro sitemap integration if available.

## Global Constraints

- Use Astro 7.x, the latest stable Astro major/version available from the official release channel.
- Do not retain starter UI, copy, components, or unused dependencies from the old project.
- Only publish video metadata that can be verified from Save Room’s public YouTube presence; do not invent titles or URLs.
- Prefer static Astro rendering and zero client framework dependencies.
- Preserve accessibility: semantic landmarks, keyboard navigation, visible focus, reduced motion, and sufficient contrast.
- Verify with `pnpm run build` and inspect generated routes/assets before completion.

---

### Task 1: Recreate the Astro project baseline

**Files:**
- Delete: all existing application files except `.git` and the plan/spec documentation
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `public/`, `src/`

**Interfaces:**
- Produces a clean Astro 7 project with `dev`, `build`, and `preview` scripts.

- [ ] **Step 1: Record the current file list and confirm only the requested project is in scope**

Run `rg --files -g '!node_modules' -g '!dist'` from the repository root and confirm the paths are the existing site plus documentation.

- [ ] **Step 2: Remove the old site files safely**

Delete the old `src/`, `public/`, `package.json`, `pnpm-lock.yaml`, `astro.config.mjs`, `tailwind.config.ts`, `components.json`, and `tsconfig.json`, preserving `.git/`, `docs/`, and repository metadata.

- [ ] **Step 3: Scaffold Astro 7 in the now-empty project root**

Use the latest official Astro initializer in non-interactive mode where supported, choosing a minimal TypeScript project and installing dependencies. If registry access is unavailable, create the equivalent minimal files manually and pin the latest Astro version already verified from official release notes.

- [ ] **Step 4: Verify the baseline project**

Run `pnpm astro --version` and `pnpm run build`. Expected: Astro 7.x is reported and the empty starter builds successfully.

### Task 2: Establish the design system and shared shell

**Files:**
- Create: `src/styles/global.css`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/SiteHeader.astro`
- Create: `src/components/SiteFooter.astro`
- Create: `src/components/Seo.astro`
- Create: `public/favicon.svg`

**Interfaces:**
- `BaseLayout.astro` accepts `title`, `description`, `canonical`, and optional `ogImage` props.
- `SiteHeader.astro` provides links to `/`, `/watch`, `/collections`, `/about`, and `/contact`.

- [ ] **Step 1: Add design tokens and responsive primitives**

Define cream, warm stone, olive, forest, terracotta, coral, ink, border, spacing, radii, shadows, serif and sans font stacks. Add base focus styles, selection styles, reduced-motion handling, responsive container utilities, and button/link treatments.

- [ ] **Step 2: Build the accessible layout shell**

Add skip link, semantic header/nav/main/footer landmarks, mobile navigation that remains keyboard accessible, active-link styling, and a footer with YouTube and contact destinations.

- [ ] **Step 3: Add SEO defaults**

Render title, description, canonical, viewport, theme color, Open Graph, and Twitter metadata. Add JSON-LD for the organization/creator brand where the available data is factual.

- [ ] **Step 4: Build and inspect the shell**

Run `pnpm run build`; expected: no type or build errors and no stale starter text.

### Task 3: Add verified content data and reusable content blocks

**Files:**
- Create: `src/data/videos.ts`
- Create: `src/data/collections.ts`
- Create: `src/components/VideoCard.astro`
- Create: `src/components/CollectionCard.astro`
- Create: `src/components/SectionHeading.astro`
- Create: `src/components/SubscribeCta.astro`
- Create: `src/components/VideoGrid.astro`

**Interfaces:**
- `Video` type: `id`, `title`, `youtubeUrl`, `thumbnailUrl`, `category`, `description`, `duration`, `publishedLabel`, `featured`.
- `Collection` type: `slug`, `title`, `eyebrow`, `description`, `accent`, `videoIds`.
- Cards consume typed `Video`/`Collection` values and expose descriptive accessible links.

- [ ] **Step 1: Gather public channel metadata**

Use the supplied Save Room channel URL and publicly visible video information. Include only confirmed video URLs/titles; omit unverifiable entries rather than fabricating them.

- [ ] **Step 2: Define typed data modules**

Create a small curated set of verified videos and collections for organizing, decluttering, room resets, storage, and routines only when supported by the channel’s actual content.

- [ ] **Step 3: Implement content cards**

Use fixed aspect-ratio image wrappers, explicit dimensions, lazy loading below the fold, category labels, duration metadata, hover/focus states, and links that open the original YouTube content.

- [ ] **Step 4: Verify data integrity**

Add a small TypeScript validation helper or build-time assertions so collection video ids resolve to known videos and every video has a valid YouTube URL.

### Task 4: Implement public routes

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/watch.astro`
- Create: `src/pages/collections/index.astro`
- Create: `src/pages/collections/[slug].astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/404.astro`

**Interfaces:**
- Collection route statically generates one page per `Collection` from `src/data/collections.ts`.
- Watch page renders all videos in the HTML and enhances filtering with a small inline module script.

- [ ] **Step 1: Build the homepage**

Create an editorial hero, featured video panel, latest-video grid, collection strip, brand philosophy block, and YouTube subscribe CTA with responsive composition.

- [ ] **Step 2: Build the watch library**

Render a complete video grid, filter controls with an “All” state, empty-state copy, and no-JavaScript fallback. Keep filter buttons keyboard operable and expose state through `aria-pressed`.

- [ ] **Step 3: Build collection index and detail routes**

Render collection cards on the index and statically generate detail pages with collection intro, matching video grid, and a route back to all collections.

- [ ] **Step 4: Build About, Contact, and 404**

Write concise brand copy, link to the official channel, provide collaboration guidance without inventing contact details, and add a warm branded not-found route.

- [ ] **Step 5: Add sitemap/robots support**

Install/configure the Astro sitemap integration if compatible with the current Astro release. Use the repository’s configured production site URL when one exists; otherwise keep canonical and sitemap URLs relative until deployment supplies the public origin, and add a sensible robots policy.

### Task 5: Verify, polish, and hand off

**Files:**
- Modify: any implementation files required by verification findings
- Create: `README.md`

- [ ] **Step 1: Run static checks and production build**

Run `pnpm run build`; expected: Astro check reports no errors and every requested route generates successfully.

- [ ] **Step 2: Inspect generated output**

Check `dist/` for `/index.html`, `/watch/index.html`, `/collections/index.html`, collection pages, `/about/index.html`, `/contact/index.html`, and `404.html`. Search generated HTML for starter strings and fix any findings.

- [ ] **Step 3: Check repository hygiene**

Run `git diff --check`, `git status --short`, and inspect dependency files to ensure no obsolete starter packages or generated artifacts are tracked.

- [ ] **Step 4: Document local usage**

Replace the starter README with project-specific commands, content editing guidance for `src/data/videos.ts` and `src/data/collections.ts`, and deployment notes.

- [ ] **Step 5: Report verification evidence**

Summarize the implemented routes, the public channel research limitation if any metadata was omitted, and the exact successful verification commands.
