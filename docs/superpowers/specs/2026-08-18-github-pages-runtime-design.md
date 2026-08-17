# GitHub Pages Runtime Design

## Goal

Make the GitHub Pages build use the same Node.js and pnpm versions declared by the project, preventing pnpm 11 from running on Node 20.

## Root Cause

`withastro/action@v2` is configured with `package-manager: pnpm@latest` and no `node-version`. This selects pnpm 11 in CI but leaves Astro Action's default Node 20 runtime. pnpm 11 requires Node 22.13 or newer and imports `node:sqlite`, which Node 20 does not provide.

## Design

Modify only `.github/workflows/deploy.yml`. Set the action input `node-version` to `22.12.0` and `package-manager` to `pnpm@9.7.0`. These exact values match the repository's `.nvmrc` and `package.json` declarations, keeping local and CI installs reproducible.

## Error Handling

No application behavior changes. An incompatible runtime will fail immediately during CI setup rather than during dependency resolution.

## Verification

Run `pnpm test` and `pnpm build` locally with Node 22.12.0 and pnpm 9.7.0. Review the workflow diff to confirm no deployment permissions or trigger configuration change.
