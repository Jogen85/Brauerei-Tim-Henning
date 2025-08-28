# Repository Guidelines

## Project Structure & Module Organization
- `app/` – Next.js App Router. Site routes under `app/(site)/…`; API under `app/api/…`; embedded Sanity Studio at `/studio`.
- `components/` – Reusable UI (Hero, BeerCard, EventList, ContactForm).
- `lib/` – Sanity client/queries and helpers.
- `sanity/` + `sanity.config.ts` – Sanity schemas (beer, event, site) and Studio config.
- `.env.example` – Required environment variables (copy to `.env.local`).

## Build, Test, and Development Commands
- `npm i` – Install dependencies.
- `npm run dev` – Start local dev server (Turbopack) at `http://localhost:3000`.
- `npm run build` – Production build.
- `npm start` – Run production server.
- `npm run lint` – Lint with Next/ESLint config.

## Coding Style & Naming Conventions
- TypeScript strict mode; 2‑Space indentation.
- Components: PascalCase (`components/Hero.tsx`), routes: kebab/segment (`app/(site)/biere/[slug]`).
- Tailwind CSS v4 with `@theme` tokens (`primary`, `sand`, `accent`, …). Prefer utility classes; avoid inline styles except for dynamic swatches.
- Keep components small, server components by default; use `"use client"` only when needed (forms/interactivity).

## Testing Guidelines
- Current: No test suite committed. When adding tests, prefer:
  - Unit: Vitest + Testing Library (React).
  - E2E: Playwright for core flows (Biere, Termine, Kontakt).
- Naming: Mirror source path under `tests/` (e.g., `tests/app/biere.spec.ts`).

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `style:`, `test:`.
- PRs: clear description, scope, before/after screenshots for UI, link issues, list env/config changes, and test notes.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` for: Sanity IDs/tokens, Resend/SMTP, Turnstile keys, `NEXT_PUBLIC_SITE_URL`.
- Verify email domain (Resend) or configure SMTP; restrict Sanity tokens to read where possible.
- Images are served from `cdn.sanity.io` (whitelisted in `next.config.mjs`).

## Architecture Overview
- Next.js (App Router, ISR) + Tailwind v4 theme tokens.
- Sanity as headless CMS; content fetched via GROQ; Studio embedded at `/studio`.
