# Save Room Retro Redesign Design

## Goal

Rework the existing Astro site from a calm home-organization brand into a nostalgic retro gaming home for the current Save Room YouTube channel at `https://www.youtube.com/@saveroomorg`.

## Verified Channel Context

The current YouTube handle resolves to channel `UCg0WNfzVoBBLV5c6Rv3BJeA`, titled `Save Room`, published on August 31, 2024. Its public feed includes retro and PC-gaming topics: Star Wars: Knights of the Old Republic, Heroes of Might and Magic, Morrowind, PSP, World of Warcraft Classic, Age of Empires, and Intel CPU undervolting/stability videos.

## Design Direction

Use a readable retrowave/CRT arcade style: dark navy and near-black surfaces, cyan and magenta neon accents, yellow highlights, subtle scanlines, grid/sun shapes, compact cards, and square-ish UI with small radii. Avoid the current soft lifestyle palette and room-organization language.

## Content Direction

Position Save Room as a retro gaming and PC nostalgia channel. Lead with classic games, old hardware, handhelds, strategy/RPG history, and tuning the machines that keep older games feeling good. Treat Intel/BIOS tuning as the `Workbench` content lane rather than the primary brand promise.

## Architecture

Keep the existing Astro file structure. Update data in `src/data`, shared visual tokens in `src/styles/global.css`, and the visible page/component copy in place. No new runtime dependency is required.

## Testing

Add a Node test that checks the channel URL, representative video IDs, and absence of old home-organization copy in key files. Run it red before implementation and green after implementation, then run `pnpm build`.
