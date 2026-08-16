# Save Room

An Astro 7 brand home for the Save Room YouTube channel.

## Commands

```sh
nvm use
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The project uses Node 22.12.0 or newer, declared in `.nvmrc` and `package.json`.

## Content

The editorial collections live in `src/data/collections.ts`. Verified YouTube video metadata belongs in `src/data/videos.ts`; the current environment could not expose individual video metadata from the channel page, so the site safely links visitors to the official channel until those entries can be verified.
