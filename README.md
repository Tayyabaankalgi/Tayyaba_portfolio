# Nisarga-style Portfolio (Next.js + Tailwind + Framer Motion)

A sleek, scroll‑based personal site inspired by minimal developer portfolios.

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Run the dev server
npm run dev

# 3) Open http://localhost:3000
```

## Customize

- Edit your name, bio: `components/Hero.tsx`, `app/layout.tsx`
- Navigation: `lib/data.ts`
- Services / Projects data: `lib/data.ts`
- Colors / theme: `tailwind.config.ts`
- Images: replace files in `/public`

## Deploy to Vercel

- Push the project to a GitHub repo.
- Import the repo at vercel.com (New Project).
- Framework preset: **Next.js**.
- Build command: `next build`, Output: `.next`
- That’s it. Connect your domain if you have one.

## Notes

The contact form is a demo. Plug in a provider like Formspree, Resend, or your own API.
