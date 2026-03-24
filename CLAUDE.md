# Branden Beardsley — Resume Site

## Project Overview
Multi-page static HTML resume site targeting the **Stripe PM, Payments Intelligence** role.
Deployed on Vercel at **branden.cellix.ai**.

## Architecture
- Multi-page static HTML/CSS site (no framework, no build step)
- Shared external stylesheet: `assets/styles.css`
- Shared nav JS: `assets/nav.js`
- Vercel static deployment with `cleanUrls: true`
- DNS managed in Cloudflare (A record → 76.76.21.21, DNS only)

## File Structure
```
index.html           — Landing page (Stripe application)
resume.html          — PDF resume viewer + download
cellix.html          — Cellix.AI product showcase
pm-philosophy.html   — PM Philosophy page
assets/
  styles.css         — Shared stylesheet
  nav.js             — Nav dropdown + hamburger toggle
  resume.pdf         — Downloadable resume
vercel.json          — Vercel config (cleanUrls)
```

## Pages
- `/` — Landing page with hero, stats, evidence grid, case studies, cellix teaser, skills
- `/resume` — Embedded PDF viewer with download button
- `/cellix` — Full Cellix.AI product showcase (dispute automation, monitoring, fraud prevention)
- `/pm-philosophy` — PM principles and how they were applied to Cellix.ai

## Navigation
```
Home    Resume ▾         Cellix.AI    PM Philosophy    [Apply at Stripe →]
          ├ View Resume
          └ Download PDF
```

## Key URLs
- **Production:** https://branden.cellix.ai
- **Vercel:** https://branden-resume.vercel.app
- **GitHub:** https://github.com/brandenbeardsley2021/branden-resume
- **Vercel project:** cellix/branden-resume

## Deployment
- `vercel --prod` to deploy
- GitHub repo is NOT auto-linked to Vercel (deploy manually or via CLI)
- Domain: branden.cellix.ai (Cloudflare DNS → Vercel)

## Owner
Branden Beardsley — branden.beardsley@gmail.com — Chicago, IL
Payments Performance Manager @ Adyen | Founder @ Cellix.ai
