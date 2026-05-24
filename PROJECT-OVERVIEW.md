# Mivan Global Suite — Project Overview

## Project Summary
A complete, professional business website built for **Mivan Global Ltd.** using **Next.js (App Router)** with **Tailwind CSS**. The website showcases digital services including e-commerce operations, custom software development, and industry-specific solutions.

---

## Pages Built (11 Total)

### Main Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, industries, case studies, Mivan advantage |
| About Us | `/about` | Company story, team, how we work, methodology |
| Case Studies | `/case-studies` | Industries served, success methodology, sectors timeline |
| Contact | `/contact` | Contact form, response info |
| FAQ | `/faq` | Category cards, accordion Q&A |

### Services Pages
| Page | Route | Description |
|------|-------|-------------|
| E-commerce Operations | `/services/ecommerce-operations` | Amazon, eBay, TikTok Shop management |
| Custom Development | `/services/custom-development` | B2B portals, apps, integrations |

### Industry Pages
| Page | Route | Description |
|------|-------|-------------|
| Law Firms | `/industries/law-firms` | Legal practice automation |
| Wholesale & Importers | `/industries/wholesale-importers` | Inventory & supply chain tools |
| E-commerce Operators | `/industries/ecommerce-operators` | Online store growth |
| Mobile Phone Importers | `/industries/mobile-phone-importers` | IMEI tracking, import compliance |

---

## Components Built (6 Total)

| Component | Description |
|-----------|-------------|
| `Navbar.js` | Fixed navbar with transparent-to-solid scroll effect, dropdown menus, mobile menu |
| `Footer.js` | Full footer with navigation links, social icons (LinkedIn, YouTube, GitHub, X, Instagram, Facebook) |
| `CTASection.js` | Reusable call-to-action section used across all pages |
| `ScrollReveal.js` | Scroll-triggered animation component |
| `AnimatedCounter.js` | Animated number counter for stats |
| `MouseFollower.js` | Custom mouse cursor effect |

---

## Design & Styling

- **Theme:** Light background throughout (white / gray-50) — dark only for hero sections and footer
- **Color Accents:** Blue (`blue-600`) for main sections, Violet (`violet-600`) for law/development pages
- **Hero Sections:** Dark background (`gray-950`) with visible background images (opacity 55%) and gradient overlays
- **Typography:** All-caps bold headings, clean sans-serif body text
- **Animations:** Scroll reveal animations, hover effects, image zoom on cards
- **Responsive:** Fully mobile-friendly with hamburger menu

---

## Key Features

- ✅ **Sticky Navbar** — transparent on hero, solid white on scroll
- ✅ **Dropdown Menus** — hover dropdowns for Services, Industries, Company
- ✅ **Hero Sections** — background images with gradient overlays on every page
- ✅ **Image Cards** — hover zoom, colored tag badges
- ✅ **ScrollReveal Animations** — elements animate in as user scrolls
- ✅ **Animated Stats Counter** — numbers count up on scroll
- ✅ **Custom Logo** — Mivan Global logo in navbar and browser tab (favicon)
- ✅ **Social Media Icons** — LinkedIn, YouTube, GitHub, X, Instagram, Facebook in footer
- ✅ **Copyright Footer** — "Copyright © 2026 Mivan Global Ltd. All Rights Reserved."
- ✅ **Chat Widget** — LeadConnector chat widget integrated
- ✅ **SEO Meta Tags** — title and description set for all pages
- ✅ **Mobile Responsive** — works on all screen sizes

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| Next.js 15 (App Router) | Framework |
| Tailwind CSS v4 | Styling |
| React | UI Components |
| next/image | Optimized images |
| next/font | Google Fonts (Inter) |
| Vercel | Deployment |
| GitHub | Version Control |

---

## Deployment

- **GitHub Repo:** https://github.com/Allahison/Mivn-Globel-Website
- **Platform:** Vercel
- **Branch:** `main` (auto-deploys on every push)

---

## Pages Structure

```
app/
├── page.js                          → Home
├── about/page.js                    → About Us
├── case-studies/page.js             → Case Studies
├── contact/page.js                  → Contact
├── faq/page.js                      → FAQ
├── services/
│   ├── ecommerce-operations/page.js → E-commerce Operations
│   └── custom-development/page.js   → Custom Development
└── industries/
    ├── law-firms/page.js            → Law Firms
    ├── wholesale-importers/page.js  → Wholesale & Importers
    ├── ecommerce-operators/page.js  → E-commerce Operators
    └── mobile-phone-importers/page.js → Mobile Phone Importers

components/
├── Navbar.js
├── Footer.js
├── CTASection.js
├── ScrollReveal.js
├── AnimatedCounter.js
└── MouseFollower.js
```

---

*Built by Claude (Anthropic) for Mivan Global Ltd. — 2026*
