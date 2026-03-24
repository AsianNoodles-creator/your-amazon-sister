# Wensey — Your Amazon Sister Website

## What This Is
Next.js 15 App Router website for **Your Amazon Sister LLC** — Wensey McComb's Amazon coaching brand.
This is the main marketing website (not the funnel). See `../wensey-lander/` for the webinar funnel.

## Business Info
- Legal name: **Your Amazon Sister LLC**
- Brand name: **Your Amazon Sister**
- Founder: Wensey McComb
- Focus: Amazon reselling education and coaching, primarily for women
- Socials: @wenseymccomb (Instagram, TikTok, YouTube)

## Services & Pricing
| Service | Price | Format |
|---|---|---|
| 4 Week Group Training | $297 | 4 × 1hr weekly live sessions |
| 4 Week Mentorship | $999 | 1-on-1 with Wensey |
| 12 Week Mentorship | $3,500 | 1-on-1 with Wensey |
| Wholesale Workshop | $397 | 1-day group intensive (3 hrs) |
| Done For You | $10,000 | Full service — Wensey's team does everything |

## Stats Used on Site
- 20+ Students
- $1M+ Student Revenue
- 2+ Years Selling on Amazon
- 98% Satisfaction Rate

## Tech Stack
- Next.js 15, React, TypeScript, Tailwind CSS
- CSS variables for theming (defined in `src/app/globals.css`)
- `src/app/` — App Router pages
- `src/components/` — Shared components

## Pages
| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — hero, stats, services, community photos, student wins, how it works |
| `/about` | `src/app/about/page.tsx` | Full story, offerings, values, CTA |
| `/contact` | `src/app/contact/page.tsx` | Contact form (fake success — NOT wired to backend) |
| `/privacy` | `src/app/privacy/page.tsx` | A2P-compliant privacy policy |
| `/terms` | `src/app/terms/page.tsx` | Terms of service |

## Key Components
| Component | Purpose |
|---|---|
| `Lightbox.tsx` | Portal-based image lightbox (keyboard nav, counter, click-outside-to-close) |
| `AnimateOnScroll.tsx` | Intersection Observer scroll animation wrapper |
| `TiltCard.tsx` | Mouse-tilt effect card |
| `CountUp.tsx` | Animated number counter |
| `Navbar.tsx` | Site navigation |
| `Footer.tsx` | Site footer |
| `ParticleCanvas.tsx` | Decorative canvas particle effect |
| `ScrollProgress.tsx` | Scroll progress bar |

## Photos (`/public/`)
**Student Wins** — verified username mapping:
- `win-5.png` → Russell — $105,506/mo
- `win-2023wins.png` → HHCH2022 — ~$100K/mo
- `win-30day.png` → Community Member — $45,380/mo
- `win-3.png` → AngieD — $9,689/mo
- `win-1.png` → Pamfba — $2,036/day
- `win-2.png` → DocRaye — $2,321/mo
- `win-4.png` → AngelaMarie — $1,021/mo
- `win-6.png` → Jose O — $715/12 days

**Community in Action** (homepage section):
- `win-action1.png` through `win-action4.png`

**About/CTA photos:**
- `wensey-about.png` — hero photo on About page
- `4th.png` — circular avatar used in closing CTAs

## Still Needed
- Community platform link (Discord/Facebook group) — referenced in copy but not linked
- Contact form backend (Resend / Formspree / GHL webhook / booking link)
- Deployment — site has never gone live

## Rules
- Always archive to `_archive/` before removing any file or component. Never hard delete.
- Do not commit without explicit request.
- Testimonial quotes must come from real student screenshots — never fabricate.
