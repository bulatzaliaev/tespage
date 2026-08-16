# Save Room Brand Home Design

## Goal

Replace the existing starter application with a polished, fast, content-led brand home for the Save Room YouTube channel. The site should make the channel’s organizing and home-lifestyle content easy to understand, browse, and continue on YouTube.

## Audience and positioning

The primary audience is people looking for approachable inspiration around organizing, decluttering, room resets, storage, and calmer everyday spaces. The tone is warm, practical, encouraging, and editorial rather than clinical or overly minimal.

## Visual direction

Use a warm editorial home aesthetic:

- Cream and warm-stone surfaces
- Deep olive/forest as the anchor color
- Terracotta/coral accents for energy and calls to action
- Serif display typography paired with a highly legible sans-serif
- Large image-led video cards and generous whitespace
- Restrained paper/textile texture only where it improves atmosphere

The visual system must remain high contrast, responsive, and readable. Decorative texture must never carry meaning or reduce legibility.

## Sitemap

- `/` — brand promise, featured video, latest videos, collections, and subscribe CTA
- `/watch` — complete video library with accessible category filtering
- `/collections` — curated topic overview
- `/collections/[slug]` — individual collection detail pages
- `/about` — channel mission, editorial philosophy, and YouTube link
- `/contact` — collaboration/business inquiry guidance
- `/404` — branded not-found experience

## Content model

Video metadata lives in one typed data module at `src/data/videos.ts`. Each video has an id, title, YouTube URL, thumbnail URL, category, short description, duration label, publication label, and featured flag. Collections live in `src/data/collections.ts` and reference video ids rather than duplicating content.

Only publicly verifiable channel content should be presented as an existing video. If a video’s metadata cannot be verified, it must not be invented; the implementation should use a clearly marked editorial placeholder or omit it until verified.

## Architecture

Use a new Astro 7 static project with TypeScript and no client framework by default. Shared Astro components should own layout, navigation, cards, collection treatments, calls to action, and footer behavior. The watch page may use a small native browser script for filtering and must remain usable without JavaScript by showing the complete list.

The site should use semantic landmarks, skip navigation, visible focus states, keyboard-operable controls, descriptive link labels, reduced-motion support, and responsive behavior from small screens upward. YouTube content should link to or embed the source without copying video media.

## SEO and performance

- Centralized document metadata and canonical URLs
- Page-specific titles/descriptions and Open Graph image support
- Sitemap and robots configuration suitable for a static deployment
- Local optimized assets where possible; remote YouTube thumbnails only when necessary
- Avoid unnecessary JavaScript and dependencies
- Use lazy loading for below-the-fold media and explicit image dimensions to reduce layout shift

## Verification

The rebuilt project must pass Astro type checking and a production build. The final review should also inspect generated routes, mobile layout behavior, keyboard navigation, filter fallback behavior, and the absence of stale starter content.

