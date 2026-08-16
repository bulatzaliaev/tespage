# Save Room Retro Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the current Astro site as a nostalgic retrowave gaming home for Save Room.

**Architecture:** Keep the site static and data-driven. Update global design tokens, page/component copy, and video/collection data without adding dependencies.

**Tech Stack:** Astro 7, TypeScript data modules, CSS, Node built-in test runner.

## Global Constraints

Use the current YouTube handle: `https://www.youtube.com/@saveroomorg`.
Use verified current channel ID `UCg0WNfzVoBBLV5c6Rv3BJeA` for embedded video data.
Keep edits scoped to site source, docs, tests, and README.
Do not overwrite unrelated pre-existing git deletions.

---

### Task 1: Content Guardrail

**Files:**
- Create: `tests/site-content.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: source files as text.
- Produces: `pnpm test` command that validates channel/content expectations.

- [ ] **Step 1: Write the failing test**

```js
import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('site content is aligned with the current Save Room retro gaming channel', () => {
  const videos = read('src/data/videos.ts');
  const collections = read('src/data/collections.ts');
  const home = read('src/pages/index.astro');
  const css = read('src/styles/global.css');

  assert.match(videos, /UCg0WNfzVoBBLV5c6Rv3BJeA/);
  assert.match(videos, /aQ59I9gCUp4/);
  assert.match(videos, /LZA-h9yUV50/);
  assert.match(collections, /Classic RPGs/);
  assert.match(home, /retro gaming/i);
  assert.match(css, /scanline/i);
  assert.doesNotMatch(`${home}\n${collections}`, /declutter|storage with intention|calmer rooms|home organization/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site-content.test.mjs`

Expected: FAIL because the current site still contains home-organization copy and no verified channel ID.

- [ ] **Step 3: Add npm script**

Add `"test": "node --test tests/site-content.test.mjs"` to `package.json`.

### Task 2: Channel Data

**Files:**
- Modify: `src/data/videos.ts`
- Modify: `src/data/collections.ts`
- Modify: `README.md`

**Interfaces:**
- Consumes: public YouTube feed data.
- Produces: populated `videos`, updated `collections`, and channel context in docs.

- [ ] **Step 1: Replace video data**

Populate representative current-channel videos with IDs `BDY1_5OIbuY`, `juIYO8JM_nU`, `rGMCZWNrrjg`, `Qn41pK2zgOM`, `aQ59I9gCUp4`, `FboMv14C3oA`, and `LZA-h9yUV50`.

- [ ] **Step 2: Replace collections**

Use three content lanes: `Classic RPGs`, `Retro Hardware`, and `Workbench`.

- [ ] **Step 3: Update README**

Describe the site as an Astro 7 retro gaming channel home and note that video metadata is sourced from the public YouTube feed.

### Task 3: Visual Rebrand

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/SiteHeader.astro`
- Modify: `src/components/SiteFooter.astro`
- Modify: `src/components/CollectionCard.astro`
- Modify: `src/components/VideoGrid.astro`
- Modify: `src/components/SubscribeCta.astro`
- Modify: `src/components/SectionHeading.astro`

**Interfaces:**
- Consumes: existing CSS variables and component class names.
- Produces: dark retrowave visual system with scanlines, neon buttons, and compact readable cards.

- [ ] **Step 1: Update global tokens**

Replace soft lifestyle colors with CRT/retrowave colors and add `--scanline`.

- [ ] **Step 2: Update shared components**

Change wordmark, footer, cards, video grid, section links, and CTA to use arcade/CRT language and styling.

### Task 4: Page Copy

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/watch.astro`
- Modify: `src/pages/collections/index.astro`
- Modify: `src/pages/collections/[slug].astro`
- Modify: `src/pages/about.astro`
- Modify: `src/pages/contact.astro`
- Modify: `src/pages/404.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Consumes: updated `videos` and `collections`.
- Produces: site pages that match retro gaming channel positioning.

- [ ] **Step 1: Replace home page**

Use hero copy, latest-video section, content lane section, and quote aligned to retro gaming.

- [ ] **Step 2: Replace supporting pages**

Update Watch, Collections, collection detail, About, Contact, 404, and default SEO descriptions.

### Task 5: Verification

**Files:**
- No source changes expected.

**Interfaces:**
- Consumes: completed tasks.
- Produces: passing test and build output.

- [ ] **Step 1: Run content tests**

Run: `pnpm test`

Expected: PASS.

- [ ] **Step 2: Run production build**

Run: `pnpm build`

Expected: PASS.
