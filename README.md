# Kinshuk Saxena — Portfolio Frontend

A responsive, animation-rich portfolio built with React, TypeScript, Vite and Tailwind CSS. It presents Kinshuk's experience, project case studies, contact flow and role-specific resume library with accessible fallbacks for motion and WebGL effects.

## Highlights

- Responsive navigation, dark/light theme and glass interface surfaces
- Interactive OGL project reel with a searchable grid/list project catalog
- React Bits Tech Text, Dither Veil and Lightfall visual effects
- Detailed project pages for ENGINOVA, PEHCHAAN 2.0, DRISHTI, METIS-C and earlier work
- Five downloadable resume variants with configurable Google Drive share links
- Contact form connected to the separate Express/MongoDB/Resend backend
- Route-level code splitting, reduced-motion support and WebGL fallbacks

## Tech stack

- React 18 + TypeScript
- Vite 8
- Tailwind CSS 3
- React Router 6
- Framer Motion
- OGL/WebGL
- Lucide icons

## Local setup

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The local site is served by Vite, normally at `http://localhost:5173`.

Configure the API URL in `.env.local`:

```env
VITE_API_URL=http://localhost:5000
```

Start the backend separately from `../PORTFOLIO-BACKEND`.

## Resume share links

PDFs live in `public/resumes`. Downloads work without external services. To make the copy/open actions use Google Drive, add the matching public share URLs to `.env.local`:

```env
VITE_RESUME_BACKEND_DRIVE_URL=https://drive.google.com/...
VITE_RESUME_GENERAL_DRIVE_URL=https://drive.google.com/...
VITE_RESUME_QA_DRIVE_URL=https://drive.google.com/...
VITE_RESUME_FULLSTACK_DRIVE_URL=https://drive.google.com/...
VITE_RESUME_UPDATED_DRIVE_URL=https://drive.google.com/...
```

Only variables prefixed with `VITE_` are exposed to the browser. Do not put private credentials in a `VITE_` variable.

## React Bits Pro / Shatter Type

The repository currently includes an accessible local shard-heading fallback because no React Bits Pro license key was available during integration. To install the licensed component:

1. Add `REACTBITS_LICENSE_KEY` to `.env.local` (without a `VITE_` prefix).
2. Run `npx react-bits-pro init` to initialize shadcn and the authenticated registries.
3. Run `npx shadcn@latest add @reactbits-starter/shatter-type-tw`.
4. Replace the implementation behind `src/components/ui/ShatterText.tsx` while preserving its small `text`, `as` and `className` API.

Never commit `.env.local` or the license key.

## Project structure

```text
src/
├── components/
│   ├── effects/       # FlexCarousel, DitherVeil, TechText, Lightfall
│   ├── home/          # Hero and project experiences
│   ├── layout/        # Navigation, page shell and footer
│   └── ui/            # Shared cards, glass surfaces and headings
├── data/projects.ts   # Typed portfolio content
├── pages/             # Route-level pages
└── index.css          # Theme tokens, glass system and global motion rules
public/
├── projects/          # Local project cover artwork
└── resumes/           # Downloadable PDF variants
```

## Commands

```bash
npm run dev       # development server
npm run build     # production build
npm run typecheck # TypeScript without emitting files
npm run lint      # ESLint
npm run check     # typecheck, lint and production build
npm run preview   # preview the production bundle
```

## Accessibility and performance

- Essential headings remain semantic even when rendered with canvas effects.
- `prefers-reduced-motion` disables non-essential transitions and shard movement.
- Glass surfaces fall back to opaque cards if `backdrop-filter` is unsupported.
- Effects release animation frames, listeners and WebGL contexts on unmount.
- Interactive controls have keyboard focus states, labels and mobile-sized targets.

## Deployment

The repository contains `vercel.json` for Vercel SPA routing. Set `VITE_API_URL` and optional resume Drive URLs in the deployment environment, then run `npm run build`. The production output is generated in `dist/`.

The backend must allow the deployed frontend origin through its `FRONTEND_URLS` configuration.

## Content notes

- PEHCHAAN activity classifications are AI-assisted estimates for human review.
- ENGINOVA findings identify evidence outside configured limits; they do not confirm a mechanical cause.
- METIS-C sector and infrastructure data are illustrative, while submitted HyP3 coherence jobs are real and may consume credits.
