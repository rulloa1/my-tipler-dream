# My Tipler Dream

A luxury interior design portfolio for Tipler Design — built with React, Vite, TypeScript, and Supabase.

## Features

- **Portfolio Gallery** — Curated design albums across categories: pools, kitchens, lighting, finishes, and more
- **Project Detail Views** — Full-screen gallery lightboxes with smooth transitions
- **Services Pages** — Detailed service offerings with visual storytelling
- **Admin Panel** — Password-protected admin gallery for managing project images
- **Authentication** — Magic link / email auth via Supabase
- **Animations** — Framer Motion scroll and entrance animations throughout
- **v2 Redesign** — An alternate brutalist/minimalist version in `v2-redesign/`

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Supabase (database, auth, storage)
- Framer Motion
- OpenAI integration

## Getting Started

```bash
npm install
cp .env.example .env
# Fill in your Supabase and OpenAI credentials in .env
npm run dev
```

## Environment Variables

See `.env.example` for required variables:
- `VITE_SUPABASE_URL` — Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Your Supabase anon/public key
- `VITE_OPENAI_API_KEY` — OpenAI API key (optional, for AI features)

## Project Structure

```
src/
├── pages/          # Route-level page components
├── components/     # Shared UI components
├── lib/            # Supabase client, utilities
└── App.tsx         # Routes and layout

v2-redesign/        # Alternate brutalist redesign (standalone Vite app)
```

## v2 Redesign

The `v2-redesign/` folder contains a standalone brutalist/minimalist redesign called **Aethereal**. To run it separately:

```bash
cd v2-redesign
npm install
npm run dev
```
