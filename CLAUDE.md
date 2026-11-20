# CLAUDE.md

Guidance for Claude Code when working in this repository.

@AGENTS.md

## Status: rebrand in progress

The site is being rebuilt from Create React App + MUI into Next.js on the `rebrand` branch; `main` still holds the old CRA site that is live on Vercel. Phases:

0. Brand copy (`src/content/site.ts`), done
1. Next.js foundation, design tokens, layout, home page, done
2. Content migrated to typed files in `src/content/`, articles to MDX, assets deduplicated, done
3. All pages built: `/work` (+ `/work/[slug]`), `/experience`, `/open-source`, `/writing` (+ `/writing/[slug]`), `/now`, `/uses`; home has featured work, latest writing and testimonials, done
4. SEO (sitemap, robots, generated OG images, JSON-LD, RSS, icons), WCAG AA contrast, Lighthouse a11y 100, done
5. Launch: switch the Vercel deployment; update `site.url` if a custom domain is used

## Commands

```bash
npm run dev     # dev server
npm run build   # production build (also type-checks)
npm run lint    # ESLint
```

## Stack

- Next.js 16 (App Router, Turbopack) with `cacheComponents` and `partialPrefetching` enabled. This version differs from older Next.js; read `node_modules/next/dist/docs/` before using an API you're unsure of.
- React 19, TypeScript (strict), Tailwind CSS v4.
- `motion` for animation, `lucide-react` for UI icons, `react-icons/fa6` for brand logos (lucide v1 has none).
- Vercel Analytics + Speed Insights in the root layout (their scripts 404 locally; that's expected).

## Conventions

- **Everything is static.** The root layout exports `ensureStatic = "navigation"`, so the build fails if any route would render per request. Don't read cookies/headers or use `new Date()` in server components; use `'use cache'` for anything fetched at build time.
- **Content lives in `src/content/`** as typed TS. Components never hard-code copy, links or numbers. Every claim must be traceable to `cv.tex`.
- **Design tokens** are CSS variables in `src/app/globals.css` (`--bg`, `--surface`, `--fg`, `--muted`, `--accent`, ...) exposed as Tailwind colours (`bg-surface`, `text-muted`, `text-accent`). Never use raw hex values in components.
- **Theme**: `data-theme="dark|light"` on `<html>`, set before paint by `themeScript` (in `theme-toggle.tsx`) from `localStorage`. Use the `dark:` variant; dark is the default.
- **Motion**: wrap scroll-in content in `<Reveal>` (IntersectionObserver + CSS in globals.css, no animation library). Content is only hidden when the head script has set `data-js`, so it stays visible without JS, and the animation is off for `prefers-reduced-motion`.
- **Metadata**: every page exports `pageMetadata({ title, description, path })` from `lib/metadata.ts`. Next replaces `openGraph`/`alternates` per page instead of merging, so this helper sets canonical, og:url, og:title and the RSS link together. Pass `hasOwnImage: true` on routes with their own `opengraph-image.tsx`; an explicit `images` entry would override that file.
- **SEO files**: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/icon.tsx` / `apple-icon.tsx` (SM monogram), `app/opengraph-image.tsx` plus per-project and per-article `opengraph-image.tsx` (template in `lib/og.tsx`, Geist TTFs from the `geist` package), `app/writing/rss.xml/route.ts`. Structured data via `<JsonLd>`: Person + WebSite on home, CreativeWork per project, BlogPosting per article.
- **Colour tokens are WCAG AA**: `--subtle` is the lowest-contrast text colour (≥ 4.8:1 on every surface in both themes); don't add lighter text colours.
- Old CRA routes (`/projects`, `/experiences`, `/publications`, `/blog`) are 308-redirected in `next.config.ts`.

## Layout

- `src/app/`: routes (`layout.tsx`, `page.tsx`, one folder per page)
- `src/components/`: shared UI (`site-header`, `site-footer`, `section`, `page-header`, `container`, `reveal`, `tag`, `project-card`, `project-status`, `industry-icon`, `post-list`); `components/home/` for home sections; `components/work/work-grid.tsx` is the client-side industry filter
- `src/content/`: all site content as typed TS
  - `site.ts`: brand, nav, socials, industries, metrics, pillars
  - `projects.ts`: projects with industries, period, links, statically imported cover/screens
  - `experience.ts`: roles newest first (`YYYY-MM` dates, `end: null` = present)
  - `stack.ts`: skills grouped as in the CV (no proficiency percentages)
  - `open-source.ts`: pub.dev packages (with fallback stats) and community profiles
  - `writing/index.ts` + `writing/<slug>.mdx`: article metadata and bodies
  - `now.ts`, `uses.ts`: content for /now and /uses (bump `now.updated` on edit)
  - `testimonials.ts`: home section is hidden while this list is empty
- `src/assets/projects/<slug>/`: `cover.*` (4:3 tile) and `screen-N.*` (portrait screenshots)
- `src/lib/live-stats.ts`: pub.dev / GitHub / Stack Overflow stats, `'use cache'` + `cacheLife("days")`, snapshot fallback on failure
- `src/lib/writing.ts`: post lookup, reading time (from the MDX file), date formatting
- `src/mdx-components.tsx`: required by `@next/mdx`; external links open in a new tab
- `src/lib/cn.ts`: `clsx` + `tailwind-merge` helper

## Adding content

- **Project**: add images under `src/assets/projects/<slug>/`, import them and add an entry to `projects.ts`. Tag `industries`; set `featured` for the home page. Without a `cover`, the card shows the first industry's icon.
- **Experience**: dates are `YYYY-MM`, or `YYYY` when only the year is known (no duration is shown then).
- **Arabic text** renders fine on pages, but the OG image renderer can't shape it; `lib/og.tsx` strips Arabic from preview images automatically.
- **Article**: add `src/content/writing/<slug>.mdx` (no H1; the page renders the title) and an entry in `writing/index.ts`. Plain `<` or `{` outside code must be escaped in MDX.
- **MDX plugins** go in `next.config.ts` by name as strings (Turbopack can't take functions).
- `dynamicParams` doesn't exist with `cacheComponents`: dynamic routes use `generateStaticParams` plus `notFound()` for unknown params.
