# ShrotiHost — Full Website Redesign & Frontend Engineering Architecture

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.16-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](#)
[![Deployment](https://img.shields.io/badge/SSG-36%2F36_Pre--rendered-success)](#)

---

### 📋 Assessment Submission Metadata (Section 10A)

| Submission Field | Details |
| :--- | :--- |
| **GitHub Repository** | [`https://github.com/Komalgiri/shrotihost-redesign`](https://github.com/Komalgiri/shrotihost-redesign) |
| **Deployment Branch** | `main` |
| **Commit Reference** | `b430eb1` (and continuous syncs) |
| **Live Website** | [`https://shrotihost-redesign-omega.vercel.app/`](https://shrotihost-redesign-omega.vercel.app/) |
| **Hosting Provider** | Vercel (Auto-deploys on push to `main`) |
| **Deployment Evidence** | Next.js production build (`36/36 static pages prerendered`), 0 errors, auto-triggered on Git push to `main` |

---

A complete, production-ready redesign and rebuild of the public web presence for **ShrotiHost** ([`shrotihost.in`](https://shrotihost.in/)), engineered from the ground up using **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 📑 Table of Contents
1. [Project Overview & Motivation](#1-project-overview--motivation)
2. [Key Architecture & Highlights](#2-key-architecture--highlights)
3. [Technology Stack](#3-technology-stack)
4. [Project Directory Tour](#4-project-directory-tour)
5. [Route Directory & Feature Inventory](#5-route-directory--feature-inventory)
6. [Interactive Components & Features](#6-interactive-components--features)
7. [Design System & Tokens](#7-design-system--tokens)
8. [Data Integrity & Compliance Standards](#8-data-integrity--compliance-standards)
9. [Local Development & Setup](#9-local-development--setup)
10. [Build & Deployment Instructions](#10-build--deployment-instructions)
11. [Assessment Documentation Register](#11-assessment-documentation-register)

---

## 1. Project Overview & Motivation

**ShrotiHost** is an Indian cloud web hosting and digital solutions provider founded by Priyanshu Shroti, registered as a verified MSME in Uttar Pradesh (`UDYAM-UP-36-0017127`). 

### Problem Statement (Legacy Site Audit)
The legacy web presence had several technical and UX bottlenecks:
- Fragmented navigation lacking clear separation between web hosting tiers, cloud infrastructure, and custom software engineering services.
- Outdated aesthetics with low visual hierarchy, missing responsive touch targets, and generic template styling.
- Lack of interactive exploration tools (such as live reseller profit calculators, clear domain pricing tables, and category-filtered technical knowledge hubs).
- Ambiguous claims and missing regulatory compliance notices under the Indian Digital Personal Data Protection (DPDP) Act 2023.

### Redesign Objectives
1. **Modern Dark-Mode Aesthetic:** Tailored glassmorphism palette inspired by modern cloud developer platforms (Vercel, Supabase, Linear).
2. **Lightning-Fast Core Web Vitals:** 100% static pre-rendering (SSG) with zero runtime client-side JavaScript for static content.
3. **Transparent Indian Hosting Realities:** Authentic INR (`₹`) pricing, GST-exclusive transparency, explicit Fair Use Policies (FUP), and direct links to ShrotiHost's public Trustpilot profile.
4. **Comprehensive Information Architecture:** 30 bespoke routes, 9 technical blog articles with full static generation, 5 canonical HTTP 301 redirects, dynamic XML sitemaps, and strict TypeScript data models.

---

## 2. Key Architecture & Highlights

* **Server Components by Default:** Page layouts, prose, marketing copy, and SEO meta are rendered strictly as React Server Components (RSC) to minimize hydration overhead and client bundle size.
* **Granular Client Islands:** Client interactivity (`"use client"`) is restricted exclusively to interactive widgets:
  - Dynamic billing cycle selector (Monthly vs Annually vs Triennially)
  - Reseller Profit & Margin Calculator
  - Live TLD Pricing & Domain Search Simulator
  - Searchable Knowledgebase Hub with real-time tag filters
  - Accessible Mobile Navigation Drawer with backdrop blur
* **SEO-First Routing & Metadata:** Dynamic metadata generation for all routes, OpenGraph/Twitter Cards, structured JSON-LD ready layout, dynamic `sitemap.xml`, and strict crawler directives via `robots.ts`.
* **Canonical 301 Redirect Middleware:** Edge-compatible middleware (`src/middleware.ts`) handling legacy URL variants (`/terms-and-conditions`, `/privacy-policy`, `/refund-policy`, `/vps-hosting`, `/domain-registration`) with permanent HTTP 301 headers.
* **India-First Legal & Compliance:** Full suite of compliant legal documents tailored to Indian IT Act 2000 and DPDP Act 2023 regulations, featuring dispute jurisdiction in Hathras, Uttar Pradesh.

---

## 3. Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `15.1.0` | App Router, Server Components, SSG, Middleware |
| **Runtime Library** | [React](https://react.dev/) | `19.0.0` | React 19 Concurrent Features, Server Components |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.7.2` | Full static type safety across routes, props, and data models |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `3.4.16` | Custom dark-slate palette, glassmorphism utilities, grid system |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.468.0` | Accessible, tree-shakable SVG icon system |
| **CSS Processing** | [PostCSS](https://postcss.org/) / Autoprefixer | `^8.4.49` | Modern vendor prefixing and CSS minification |

---

## 4. Project Directory Tour

```
shrotihost-redesign/
├── .github/                   # CI/CD workflows and actions (if applicable)
├── public/                    # Static assets, logos, and favicon
├── src/
│   ├── app/                   # Next.js App Router (30 routes + sitemap + robots)
│   │   ├── about/             # Company background, MSME credentials & founder
│   │   ├── acceptable-use-policy/ # AUP policy & resource usage thresholds
│   │   ├── app-development/   # Mobile App Engineering (iOS/Android/Cross-platform)
│   │   ├── blog/              # Knowledgebase Hub & [slug] static dynamic guides
│   │   │   ├── [slug]/        # Pre-rendered Markdown-style guide pages
│   │   │   └── page.tsx       # Searchable & filterable blog directory
│   │   ├── careers/           # Open positions & engineering culture
│   │   ├── contact/           # Office address, contact forms & department routing
│   │   ├── domains/           # Domain pricing, TLD matrix & transfer guide
│   │   ├── ecommerce-development/ # E-commerce solutions & payment gateways
│   │   ├── privacy/           # DPDP Act 2023 compliant Privacy Policy
│   │   ├── refund/            # 7-Day Refund Policy & exclusions
│   │   ├── reseller-hosting/  # WHM Reseller plans & interactive calculator
│   │   ├── saas-development/  # Custom SaaS Architecture & Cloud deployment
│   │   ├── services/          # Full digital engineering services catalog
│   │   ├── shared-hosting/    # NVMe cPanel shared hosting tiers & full matrix
│   │   ├── terms/             # Legal terms of service (UP jurisdiction)
│   │   ├── unlimited-hosting/ # NVMe Unlimited hosting with FUP resource specs
│   │   ├── vps/               # KVM Cloud VPS hosting with spec sliders
│   │   ├── web-development/   # Next.js & Full-stack development services
│   │   ├── whmcs-modules/     # Specialized WHMCS automation modules
│   │   ├── wordpress-hosting/ # LiteSpeed + AccelerateWP managed WordPress hosting
│   │   ├── globals.css        # Tailwind directives, custom glassmorphism classes
│   │   ├── layout.tsx         # Root layout (Announcement bar, Navbar, Footer)
│   │   ├── not-found.tsx      # Branded custom 404 error page
│   │   ├── page.tsx           # Homepage (Hero, hosting tabs, domain search, FAQs)
│   │   ├── robots.ts          # Search crawler directives
│   │   └── sitemap.ts         # Dynamic XML sitemap generator
│   ├── components/            # Reusable UI component architecture
│   │   ├── blog/              # Blog directory search & filter components
│   │   ├── domains/           # Domain search manager & TLD pricing table
│   │   ├── home/              # Domain search bar, hosting tier tabs
│   │   ├── hosting/           # Pricing cards, comparison matrix, profit calculator
│   │   ├── layout/            # Navbar, Footer, AnnouncementBar, MobileDrawer
│   │   ├── legal/             # Clean legal document reader layout
│   │   └── ui/                # Buttons, Cards, Modals, Accordions, Breadcrumbs
│   ├── data/                  # Decoupled TypeScript data stores
│   │   ├── blog-articles.ts   # 9 statically compiled technical articles
│   │   ├── domain-pricing.ts  # TLD rates, renewals, transfers & popular extensions
│   │   ├── faqs.ts            # Category-indexed FAQ repositories
│   │   ├── hosting-features.ts# Technical specifications for comparison tables
│   │   ├── hosting-plans.ts   # Pricing, specs, and WHMCS cart direct URLs
│   │   ├── legal-content.ts   # Formal legal policy articles & sections
│   │   ├── navigation.ts      # Header, Footer, and Service catalog links
│   │   └── services.ts        # Deliverables, tech stacks, and agency case studies
│   └── middleware.ts          # Canonical HTTP 301 redirect engine
├── AI-TOOL-DISCLOSURE.md      # Full transparency statement of AI pair programming
├── CONTENT-VERIFICATION.md    # Fact-checking against live portal & registry sources
├── DESIGN-RATIONALE.md        # Architectural decisions and design philosophy
├── DESIGN-SYSTEM.md           # Tokens, color palette, typography, elevation rules
├── FINAL-QA-REPORT.md         # Production verification & route audit matrix
├── INFORMATION-ARCHITECTURE.md# Sitemap tree, customer personas & conversion funnels
├── UX-AUDIT.md                # Heuristic analysis & UX remediation register
├── route-inventory.csv        # Comprehensive route and CTA tracking matrix
├── package.json               # Package manifests and script definitions
├── tailwind.config.ts         # Custom theme configuration & extensions
└── tsconfig.json              # Strict TypeScript compiler options
```

---

## 5. Route Directory & Feature Inventory

### 🗺️ Scope & Route Coverage (Sections 01, 03 & Rubric Dimension 1)

| Page Family | Implemented Routes | Key Features & Implementation Depth |
| :--- | :--- | :--- |
| **Core** | `/`, `/about`, `/contact`, `/careers` | Pixel-matched hero, interactive infrastructure telemetry visualizer, verified MSME credential (`UDYAM-UP-36-0017127`), accessible contact form with honest validation/demo states, WhatsApp direct links. |
| **Hosting Products** | `/shared-hosting`, `/wordpress-hosting`, `/unlimited-hosting`, `/reseller-hosting`, `/master-reseller-hosting`, `/vps`, `/hosting` | Fully typed data structures (`src/data/hosting-plans.ts`), interactive billing cycle toggles (Monthly/Annual), live Reseller Profit Margin calculator, pure NVMe + LiteSpeed specifications, direct WHMCS portal cart links. |
| **Domains** | `/domains` | Live TLD pricing matrix (.in, .com, .org, .net, .co.in, etc.), instant domain search bar with extension switcher, zero fake availability results, transparent first-year vs renewal pricing. |
| **Software Services** | `/services`, `/web-development`, `/app-development`, `/ecommerce-development`, `/saas-development`, `/whmcs-modules` | Distinct architectural layouts, technical stack badges, step-by-step engineering workflows, project deliverables, and customized project inquiry CTAs. |
| **Editorial (Blog)** | `/blog`, `/blog/[slug]` (9 static articles) | Clean long-form editorial typography, reading time estimates, author credits, tag/category filters, dynamic table of contents, related articles, and full SSG pre-rendering. |
| **Legal & Compliance** | `/terms`, `/privacy`, `/refund`, `/acceptable-use` (and canonical `/legal/*` aliases) | Fully compliant with Indian IT Act 2000 and DPDP Act 2023, Hathras Uttar Pradesh jurisdiction, sticky section jump-navigation, and transparent refund caveat policies. |
| **System States** | `/404`, Empty/No-result search states | Custom branded 404 page with recovery navigation, active filter reset mechanisms in Domain search and Knowledgebase. |

### 📋 Full Route Directory & Pre-render Status

| Route | Page Name | Primary Focus / Features | Pre-render Mode |
| :--- | :--- | :--- | :---: |
| `/` | **Homepage** | Hero domain search, tabbed hosting matrix, value pillars, Trustpilot proof, FAQs | `Static` |
| `/shared-hosting` | **NVMe Shared Hosting** | 4 pricing tiers (₹49 to ₹249/mo), billing cycle toggles, full 18-row spec matrix | `Static` |
| `/wordpress-hosting` | **Managed WordPress** | AccelerateWP, LSCache benchmarks, Redis caching, 1-click staging | `Static` |
| `/unlimited-hosting` | **Unlimited NVMe Hosting** | Bronze to Diamond tiers, Fair Use Policy (FUP) transparency callout | `Static` |
| `/reseller-hosting` | **WHM Reseller Hosting** | 4 reseller tiers, white-label WHM, interactive Reseller Profit Calculator | `Static` |
| `/master-reseller-hosting` | **Master Reseller Hosting** | 3 tiers (₹599-₹1,699), 3-tier hierarchy visualizer, Sub-WHM authority, overselling enabled | `Static` |
| `/vps` | **Cloud VPS Hosting** | 8 KVM VPS configurations (Spark to Apex), transparent one-time setup fee breakdown | `Static` |
| `/domains` | **Domain Search & TLDs** | Domain search simulator, 12-TLD live filterable pricing table, ICANN/Registry guide | `Static` |
| `/services` | **Digital Services Hub** | Engineering process, tech stack badges, flexible engagement models | `Static` |
| `/web-development` | **Custom Web Development** | Modern Next.js stack, deliverables checklist, consultation contact form | `Static` |
| `/app-development` | **Mobile App Development** | React Native/Flutter cross-platform capabilities, push notification architecture | `Static` |
| `/ecommerce-development` | **E-Commerce Development** | UPI & Indian gateway integrations (Razorpay, Cashfree), WooCommerce optimization | `Static` |
| `/saas-development` | **SaaS Engineering** | Multi-tenant architecture, subscription billing logic, cloud deployment | `Static` |
| `/whmcs-modules` | **WHMCS Addons** | WaShroti (WhatsApp alerts), Smart Gateway Fees, Social Proof Premium | `Static` |
| `/about` | **About ShrotiHost** | Founder Priyanshu Shroti, MSME Udyam `UDYAM-UP-36-0017127`, milestone timeline | `Static` |
| `/contact` | **Contact & Support** | Department routing (Sales/Tech/Abuse), Hathras UP registered address, contact form | `Static` |
| `/careers` | **Careers in India** | Remote-first engineering culture, 4 detailed technical job openings & benefits | `Static` |
| `/blog` | **Knowledgebase Hub** | Interactive category filters, search input, featured article spotlight | `Static` |
| `/blog/[slug]` | **9 Technical Guides** | Statically generated markdown prose rendering, sticky sidebar with contextual plans | `SSG (9 slugs)` |
| `/terms` | **Terms of Service** | UP legal jurisdiction, billing cycles via portal, account responsibilities | `Static` |
| `/privacy` | **Privacy Policy** | India DPDP Act 2023 compliance, zero sale of personal data | `Static` |
| `/refund` | **Refund Policy** | 7-day money-back guarantee, explicit exclusions for domains & VPS licenses | `Static` |
| `/acceptable-use-policy` | **AUP** | IT Act 2000 compliance, anti-spam thresholds, resource abuse rules | `Static` |

### Canonical 301 Redirect Map
Configured in `src/middleware.ts` to preserve legacy SEO equity:
- `/terms-and-conditions` $\rightarrow$ `/terms` (HTTP 301)
- `/privacy-policy` $\rightarrow$ `/privacy` (HTTP 301)
- `/refund-policy` $\rightarrow$ `/refund` (HTTP 301)
- `/vps-hosting` $\rightarrow$ `/vps` (HTTP 301)
- `/domain-registration` $\rightarrow$ `/domains` (HTTP 301)

---

## 6. Interactive Components & Features

### 🧮 Interactive Reseller Profit Calculator
Located at `/reseller-hosting`, this client component enables prospective web agencies to model business viability:
* Select base ShrotiHost reseller plan (Startup, Business, Pro, Elite)
* Set custom end-client selling price per cPanel account (₹99 – ₹499/mo)
* Visualize monthly gross revenue, ShrotiHost cost, net profit, and profit margin (%) in real time.

### 🔍 Simulated Domain Search & TLD Table
Located at `/domains` and the Homepage:
* Instant search simulation across `.in`, `.com`, `.org`, `.net`, `.co`, and `.xyz`.
* Realistic status tags (Available vs Taken) with direct deep-links to the live WHMCS cart (`https://portal.shrotihost.in/cart.php?a=add&domain=register`).
* Transparent display of 1st-year registration fees vs renewal fees (flat rate policy).

### 📚 Knowledgebase Hub with Dynamic Tag Filtering
Located at `/blog`:
* Live client-side instant search across title and summaries.
* Multi-category filtering (WordPress, Security, Caching, Linux, DNS).
* 9 statically pre-rendered in-depth guides with reading time indicators and contextual hosting recommendations.

---

## 7. Design System & Tokens

The redesign uses a refined cloud infrastructure visual identity with a warm off-white canvas, deep navy typography, and official brand accents, with selective technical dark surfaces:

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| **Brand Primary** | `#4F46E5` | Cobalt / Indigo — Primary CTA buttons, brand badges, active links (from logo) |
| **Brand Accent** | `#06B6D4` | Electric Cyan — Telemetry highlights, latency counters, speed indicators (from logo) |
| **Canvas Background** | `#FAFBFD` | Warm Off-White — Page body canvas with architectural grid overlay |
| **Card Surface** | `#FFFFFF` | Crisp White — Surface cards with `#E2E8F0` border and layered shadows |
| **Dark Technical Surface**| `#0B0F19` | Deep Obsidian — Hardware racks, server blueprints, and terminal telemetry |
| **Typography (Headings)** | `#0F172A` | Deep Navy (Slate 900) — High-contrast editorial titles |
| **Typography (Body)** | `#334155` | Charcoal (Slate 700) — Legible descriptions, specifications, and long-form prose |
| **Success / Verified** | `#10B981` | Emerald 500 — Live status, checkmarks, MSME badge |

---

## 8. Data Integrity & Compliance Standards

To ensure credibility and prevent deceptive marketing practices, this codebase enforces strict content standards:
1. **Accurate Pricing:** Every plan tier matches the verified live WHMCS store (`portal.shrotihost.in`), with transparent footnotes detailing GST exclusiveness.
2. **Target vs Guarantee:** Replaced ambiguous "99.9% Financial SLA" with an accurate **99.9% High Uptime Target** backed by LiteSpeed Enterprise web server and CloudLinux OS.
3. **No Fabricated Social Proof:** Eliminated fictional customer testimonials. Social proof is backed strictly by verified **Trustpilot customer reviews** and government MSME registration (`UDYAM-UP-36-0017127`).
4. **Data Protection (DPDP Act 2023):** Privacy terms written specifically for Indian data subjects, including right of grievance redressal, purpose limitation, and Hathras, UP jurisdiction.

---

## 9. Local Development & Setup

### Prerequisites
* **Node.js:** `v18.18.0` or higher (tested on Node `v22.x`)
* **Package Manager:** `npm` (included with Node.js) or `pnpm`

### Installation
```bash
# Clone the repository
git clone https://github.com/Komalgiri/shrotihost-redesign.git

# Navigate into project directory
cd shrotihost-redesign

# Install dependencies
npm install
```

### Running Locally
```bash
# Launch development server on http://localhost:3000
npm run dev
```

### Linting & Type Checking
```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run Next.js linter
npm run lint
```

---

## 10. Build & Deployment Instructions

### Production Static Build
```bash
# Build optimized production bundle
npm run build

# Start local production preview
npm run start
```

### Deploying to Vercel
This project is optimized for 1-click deployment on [Vercel](https://vercel.com/):
1. Import repository `Komalgiri/shrotihost-redesign`.
2. Framework preset will automatically detect **Next.js**.
3. No environment variables are mandatory for public frontend static rendering.
4. Click **Deploy**.

---

## 11. Assessment Documentation Register

For in-depth architectural audits and evaluation rubrics, refer to the included companion documentation:

* [**`FINAL-QA-REPORT.md`**](./FINAL-QA-REPORT.md) — Comprehensive QA verification matrix, production build analysis, and route audit log.
* [**`EVALUATION-SELF-ASSESSMENT.md`**](./EVALUATION-SELF-ASSESSMENT.md) — 100-point rubric breakdown and candidate guide for the 30-minute live review and change request.
* [**`route-inventory.csv`**](./route-inventory.csv) — 37-row route inventory cataloging routes, page types, primary CTAs, and QA verification.
* [**`CONTENT-VERIFICATION.md`**](./CONTENT-VERIFICATION.md) — Source-of-truth register cross-verifying pricing, specs, and business credentials.
* [**`INFORMATION-ARCHITECTURE.md`**](./INFORMATION-ARCHITECTURE.md) — Global sitemap, navigation taxonomy, and user journeys.
* [**`UX-AUDIT.md`**](./UX-AUDIT.md) — Heuristic UX evaluation, conversion blockers, and architectural solutions.
* [**`DESIGN-SYSTEM.md`**](./DESIGN-SYSTEM.md) — Component tokens, color contrast ratios, and typography scale.
* [**`DESIGN-RATIONALE.md`**](./DESIGN-RATIONALE.md) — In-depth architectural trade-offs and UX problem-solving rationale.
* [**`AI-TOOL-DISCLOSURE.md`**](./AI-TOOL-DISCLOSURE.md) — Transparent disclosure of AI tool usage, prompts, and human oversight.

---

### Author & Engineering Attribution
* **Engineering & Architecture:** Senior Frontend Engineer & UI/UX Designer
* **AI Pair Programmer:** Antigravity (Google DeepMind)
* **Client / Subject:** [ShrotiHost](https://shrotihost.in/) (Founder: Priyanshu Shroti | MSME: `UDYAM-UP-36-0017127`)
