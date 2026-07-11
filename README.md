# Fariha Rayhan Mim — Portfolio

Bold, modern full-stack developer portfolio. Built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Edit your content

Everything you'll want to change lives in **one file**: [`lib/content.js`](lib/content.js).
Update your name, intro, social links, skills, and projects there — no need to touch the components.

To add a résumé button: drop `resume.pdf` into `/public` and set `resumeUrl: "/resume.pdf"` in `lib/content.js`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects **Next.js** — just click **Deploy**.
4. (Optional) Add a custom domain under Project → Settings → Domains.

## Design notes

- **Signature:** an interactive "stack" (Interface → Logic → Data) in the hero that
  literally illustrates full-stack — hover each layer to expand it.
- **Palette:** ink `#0B0A14`, iris `#7C6BFF`, mint `#46E5B7`, coral `#FF8A5B`.
- **Type:** Space Grotesk (display) · Inter (body) · JetBrains Mono (labels).
- Responsive to mobile, keyboard-focus visible, and `prefers-reduced-motion` respected.
