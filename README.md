# SohelX — Official Website

Bengali tech-tutorial brand site for **SohelX** (LEARN • CREATE • GROW).
Will be deployed at **https://sohelhossain.site** (deploy step is separate —
see below).

## Pages

| Route        | Page              |
| ------------ | ----------------- |
| `/`          | Home — hero banner, latest class, categories, upcoming |
| `/classes`   | ভিডিও ক্লাস — all class video cards |
| `/schedule`  | সাপ্তাহিক শিডিউল — week-by-week upcoming plan |
| `/downloads` | ডাউনলোড — app files + tricks/drive files |
| `/about`     | About / যোগাযোগ — brand intro + Facebook page link |

## Updating content (one-file edit)

**Edit only `data/content.ts`** — every page reads from it. Then redeploy
(Vercel auto-deploys on git push).

- **New class video:** add an entry to `classes` (id, title, category, date,
  status, summary). Set `facebookUrl` after uploading to the Facebook page —
  the "Facebook-এ দেখুন" button appears automatically.
- **Status badges:** `"new"` → নতুন, `"upcoming"` → শীঘ্রই আসছে,
  `"planned"` → পরিকল্পিত.
- **Weekly plan:** edit `schedule` (weeks reference class ids).
- **New download:** add to `downloads` under the right group. Keep
  `url: "#"` and `ready: false` until the real file/Drive link exists —
  the button stays visibly disabled ("শীঘ্রই আসছে").

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass clean)
npm start        # serve the production build
```

## Deploy (for the site owner)

1. Push this folder to GitHub (repo e.g. `sohelx-site`).
2. Import into Vercel (free) — framework preset: Next.js. No env vars needed.
3. In the domain registrar for `sohelhossain.site`, point DNS to Vercel
   (Vercel dashboard → Domains → Add → follow the A/CNAME instructions),
   or move nameservers to Cloudflare first.
4. No database, no secrets — fully static.

## Brand assets

- `public/logo.jpg` — SohelX circular portrait (profile/logo)
- `public/banner.jpg` — SohelX wide banner (home hero)
- Both are the user's own designs — use as-is, never regenerate.
