# AGENTS

## Core Commands
- Install deps: `npm ci`
- Dev server: `npm run dev` (same as `npm start`)
- Build/preview static output: `npm run build` then `npm run preview`
- Lint: `npm run lint`
- Type + Svelte checks: `npm run check`
- E2E tests (Chromium only): `npm test` (alias of `npm run test:e2e`)
- All Playwright browsers: `npm run test:e2e:all`
- Open Playwright UI: `npm run test:open`

## Verification Order
- Use this order before handing off changes: `npm run lint && npm run check && npm test`.
- CI `release.yml` currently runs `npm test` for the test gate; lint/check are not part of that workflow.

## Testing Quirks
- Playwright config (`playwright.config.ts`) auto-starts the app with `npm run dev` on port `5173` via `webServer`.
- Focus a single spec with Playwright directly, e.g. `npx playwright test e2e/home.spec.ts --project=chromium`.
- On fresh environments, browser install is required: `npm run test:install`.

## App Architecture (SvelteKit)
- Site is static-first: `src/routes/+layout.ts` sets `prerender = true` and `ssr = false`.
- Project content is markdown-driven from `src/content/projects/*.md` and loaded by `import.meta.glob` in `src/lib/content.ts`.
- Frontmatter `hidden: true` excludes a project from generated lists/routes.
- Dynamic project/tag pages are implemented in `src/routes/projects/[slug]` and `src/routes/tags/[slug]`.

## Environment/Deploy Gotchas
- `process.env.HEAD` controls branch-specific behavior:
  - `src/routes/robots.txt/+server.ts`: only `HEAD=main` serves allow-robots.
  - `src/lib/utils/webmanifest.ts`: non-main branches append `(<branch>)` to manifest name (defaults to `local` if unset).
- Netlify builds are hook-gated (`netlify.toml` `ignore` rule). Regular Git pushes alone do not trigger a Netlify build.
- Release/deploy pipeline is `.github/workflows/release.yml` on `main`, `develop`, and `next`: test -> semantic-release -> trigger Netlify hook.
