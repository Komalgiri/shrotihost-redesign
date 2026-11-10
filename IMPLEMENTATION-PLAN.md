# ShrotiHost – Engineering Implementation Plan & Representative Page Blueprints

**Project:** ShrotiHost Full Website Redesign & Production Frontend Engineering  
**Lead Architect:** Senior Frontend Engineer & UI/UX Designer  
**Status:** Approved for Implementation  
**Technology Stack:** Next.js (App Router), React 18/19, TypeScript, Tailwind CSS, Lucide React Icons  
**Target Coverage:** 30 Distinct Public Routes + 5 Canonical Redirects

---

## 1. Architectural Strategy & Phased Roadmap

To ensure 100% route coverage, zero broken links, robust type safety, and maximum component reusability, implementation is partitioned into eight structured phases:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: DISCOVERY, AUDIT & ARCHITECTURE (Completed)                         │
│ Route Inventory (30 routes), UX Audit, IA Blueprint, Design System Tokens   │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE 2: CORE SCAFFOLDING & COMPONENT FOUNDATION                            │
│ Next.js App Router setup, Tailwind theme, Navbar, Footer, MegaMenu, TLD bar │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE 3: REPRESENTATIVE PAGES IMPLEMENTATION                                │
│ 1. Homepage (/)                                                             │
│ 2. Hosting Product Blueprint (/shared-hosting)                              │
│ 3. Non-Commerce Service Blueprint (/web-development)                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE 4: HOSTING SUITE & DOMAIN SUITE                                       │
│ /wordpress-hosting, /unlimited-hosting, /reseller-hosting, /vps, /domains    │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE 5: SOFTWARE & DIGITAL SERVICES SUITE                                  │
│ /services, /app-development, /ecommerce-development, /saas-development,     │
│ /whmcs-modules                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE 6: COMPANY, SUPPORT & KNOWLEDGE BASE                                  │
│ /about, /contact, /careers, /blog (Index + 9 comprehensive guides)          │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE 7: LEGAL POLICIES & CANONICAL REDIRECTS                               │
│ /terms, /privacy, /refund, /acceptable-use-policy, 301 Next.js redirects    │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE 8: QA, ACCESSIBILITY, CORE WEB VITALS & VERIFICATION                  │
│ WCAG 2.1 AA audit, mobile responsive validation, build & export test        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Deep-Dive Blueprints for Representative Pages

### 2.1 Representative Page 1: Homepage (`/`)
* **Page Role:** The central gateway establishing brand authority, presenting high-level hosting offerings, providing instant domain searches, and routing users efficiently to specialized products or software services.
* **Layout & Section Breakdown:**
  1. **Top Announcement Ticker:** `⚡ High-Speed NVMe SSD + LiteSpeed Web Servers | Flat Renewal Guarantee | 24/7 WhatsApp Support`
  2. **Hero Landmark:**
     - High-impact headline: *"Cloud Hosting & Engineering Engineered for High Performance"*
     - Subtitle emphasizing local speed, NVMe storage, and the flat-rate renewal guarantee.
     - Dual CTA group: `[ Explore Hosting Plans ]` (Primary indigo button) + `[ Custom Software Solutions ]` (Secondary slate button).
     - Trust metrics strip: `99.9% Uptime SLA`, `₹49/mo Starting Price`, `7-Day Money-Back Guarantee`, `MSME Udyam Certified`.
  3. **Interactive Domain Availability Bar:**
     - Search input with TLD selector (`.in`, `.com`, `.org`, `.co.in`, `.net`, `.xyz`).
     - Live pricing indicator bar showing registration and renewal costs (e.g. `.in` at ₹714, `.com` at ₹1,169).
  4. **Core Hosting Matrix (Interactive Tabs):**
     - Tabs for `Shared NVMe`, `WordPress`, `Unlimited`, `Reseller`, and `Cloud VPS`.
     - Direct plan comparison cards showcasing pricing, RAM, vCPU, and direct checkout triggers.
  5. **Exploded Infrastructure Architecture Stack:**
     - Visual breakdown of server hardware: NVMe PCIe SSDs -> LiteSpeed Enterprise Web Server -> CloudLinux CageFS Isolation -> Imunify360 WAF -> JetBackup Automated Offsite Backups.
  6. **Software Development & WHMCS Modules Spotlight:**
     - Highlights custom engineering services: Web Apps, E-Commerce, SaaS, and proprietary WHMCS modules (WhatsApp Gateway, Surcharge Manager).
  7. **Customer Reviews & Social Proof:**
     - Verified customer reviews, Trustpilot rating badge, and real-world performance metrics.
  8. **Comprehensive FAQ Accordion:**
     - 6 key questions regarding migration, renewal price guarantees, cPanel access, and Indian payment methods.
  9. **Bottom Conversion Banner:**
     - Clear call-to-action inviting users to migrate or start risk-free with the 7-day guarantee.

### 2.2 Representative Page 2: Hosting Product Page (`/shared-hosting`)
* **Page Role:** High-conversion e-commerce product page for NVMe Shared Hosting. Serves as the archetype template for WordPress, Unlimited, and Reseller hosting pages.
* **Layout & Section Breakdown:**
  1. **Breadcrumb Trail:** `Home / Hosting / NVMe Shared Hosting`
  2. **Product Hero Section:**
     - Headline: *"High-Performance NVMe Shared Hosting with Flat Renewal Pricing"*
     - Subhead highlighting cPanel, LiteSpeed Web Server, and free automated website migrations.
     - Trust Badges: `cPanel Included`, `Imunify360 Protected`, `Daily JetBackup`, `Same Price on Renewal`.
  3. **Billing Cycle Selector:**
     - Interactive toggle: `Monthly` | `Semi-Annual` | `Annual (Best Value)`.
  4. **4-Tier Pricing Grid:**
     - **Launch Plan (₹49/mo):** 1 Website, 10 GB NVMe, 1.5 GB RAM, 1 Core CPU, 5 Email Accounts, Unmetered Bandwidth.
     - **Grow Plan (₹79/mo - Featured / Best Value):** 5 Websites, 25 GB NVMe, 2 GB RAM, 1.5 Cores CPU, 20 Email Accounts, Unmetered Bandwidth.
     - **Turbo Plan (₹149/mo):** 10 Websites, 100 GB NVMe, 3 GB RAM, 2 Cores CPU, 50 Email Accounts, Unmetered Bandwidth.
     - **Infinity Plan (₹249/mo):** 25 Websites, 250 GB NVMe, 4 GB RAM, 3 Cores CPU, Unlimited Mailboxes, Unmetered Bandwidth.
     - *Every card explicitly states:* `✓ Renews at same price (₹XX/mo)` and `✓ 7-Day Money-Back Guarantee`.
  5. **Interactive Full Specification Comparison Table:**
     - Side-by-side technical table with sticky first column (features) and responsive scrolling.
     - Groups: Server Resources (CPU, RAM, Storage, Inodes), Email Features, Security & SSL, Developer Tools (PHP 8.x, Git, SSH access, phpMyAdmin).
  6. **Hardware & Security Deep-Dive Cards:**
     - LiteSpeed vs Apache performance comparison; CloudLinux OS isolation explainer.
  7. **Zero-Downtime Migration Banner:**
     - 3-step walkthrough: "Sign up -> Submit cPanel details -> Our engineers migrate your site for free".
  8. **Hosting Specific FAQ Accordion:**
     - Clarifications on inode limits, SSL auto-renewal, backup restoration, and refund procedures.

### 2.3 Representative Page 3: Non-Commerce Service Page (`/web-development`)
* **Page Role:** High-trust B2B engineering consultation page for custom website development. Serves as the archetype template for App Development, SaaS Development, and E-Commerce.
* **Layout & Section Breakdown:**
  1. **Breadcrumb Trail:** `Home / Services / Custom Web Development`
  2. **Service Hero Landmark:**
     - Headline: *"Custom Web Design & Frontend Engineering That Scales"*
     - Subhead emphasizing speed (90+ Core Web Vitals), bespoke responsive architecture, and direct cloud integration.
     - CTA Group: `[ Schedule Architecture Consultation ]` + `[ View Tech Stack & Deliverables ]`.
  3. **Engineering Capabilities Matrix:**
     - Cards covering: Bespoke Corporate Websites, High-Speed Landing Pages, Headless Frontend Portals, Performance Optimization & Audits.
  4. **Production Tech Stack Grid:**
     - Visual badges for Next.js, React, Tailwind CSS, TypeScript, Node.js, PHP/Laravel, PostgreSQL, and Redis.
  5. **5-Stage Engineering Lifecycle Roadmap:**
     - Step 1: *Discovery & Requirements Gathering*
     - Step 2: *UI/UX Wireframing & Design System*
     - Step 3: *Component Development & API Integration*
     - Step 4: *Cross-Browser Testing & Core Web Vitals QA*
     - Step 5: *Cloud Deployment & Managed Hosting Handover*
  6. **Guarantees & Project Deliverables Checklist:**
     - 100% source code ownership, clean documentation, responsive mobile parity, automated CI/CD setup, 30 days post-launch support.
  7. **Interactive Project Scope Inquiry Form:**
     - Interactive fields for Project Type, Estimated Timeline, Budget Tier, and Project Description.
     - Direct WhatsApp routing fallback for rapid chat consultations.

---

## 3. Data Architecture & Source of Truth

To ensure total accuracy across the entire site and prevent duplicate code, all plan specifications, domain prices, blog articles, and legal texts will be modeled in strongly-typed TypeScript configuration files:

```
src/
├── data/
│   ├── hosting-plans.ts    # Exact specs & pricing for Shared, WP, Unlimited, Reseller, VPS
│   ├── domain-pricing.ts   # Exact registration, renewal, and transfer rates
│   ├── services.ts         # Service offerings, deliverables, and tech stacks
│   ├── blog-articles.ts    # Complete content & metadata for all 9 guides
│   ├── faqs.ts             # Global and product-specific FAQ repositories
│   └── legal-policies.ts   # Terms, Privacy (DPDP), Refund, and AUP content
```

### 3.1 Strict Accuracy Checklist (Verified Live Data)
- **Shared Hosting:** Launch (₹49), Grow (₹79), Turbo (₹149), Infinity (₹249) / mo.
- **WordPress Hosting:** WP Starter (₹69), WP Business (₹119), WP Performance (₹229), WP Ultimate (₹379) / mo.
- **Unlimited Hosting:** Bronze (₹69), Gold (₹109), Platinum (₹139), Diamond (₹179) / mo. (Qualified by Fair Use Policy).
- **Reseller Hosting:** Starter (₹299, 25 accounts), Growth (₹499, 50 accounts), Pro (₹799, 100 accounts), Infinity (₹1,299, Unlimited accounts).
- **VPS Hosting:** Spark (₹499 + ₹249 setup), Pulse (₹899), Core (₹1,199), Power (₹2,199), Forge (₹2,799), Surge (₹4,499), Titan (₹5,499), Apex (₹8,999).
- **Domain TLDs:** `.com` (Reg ₹1,169 / Ren ₹1,299), `.in` (Reg ₹714 / Ren ₹779), `.org` (Reg ₹1,039 / Ren ₹1,559), `.net` (₹1,689), `.co.in` (Reg ₹649 / Ren ₹779), `.xyz` (Sale ₹259 / Ren ₹2,079).
- **Legal Entity:** Shroti Enterprises (MSME Udyam: `UDYAM-UP-36-0017127`, Ruheri, Hathras, Uttar Pradesh 204101).
- **Support Channels:** `support@shrotihost.in`, `info@shrotihost.in`, WhatsApp `+91 95821 29099`.
- **Guarantee Policy:** 7-Day Money-Back Guarantee for Shared, WordPress, Unlimited, Reseller. Domains, renewals, and VPS are non-refundable.

---

## 4. Execution Plan & Next Steps

Following approval of Phase 1 discovery documents, Phase 2 will commence immediately with:
1. Initializing the Next.js App Router workspace with TypeScript and Tailwind CSS.
2. Configuring `tailwind.config.ts` with the approved design tokens.
3. Building the shared header (MegaMenu + Currency Switcher + Announcement Bar) and comprehensive footer.
4. Implementing the representative pages (Homepage, Shared Hosting, Web Development) followed by the complete 30-route suite.

