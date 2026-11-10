# ShrotiHost — Full Website Redesign & Frontend Engineering Assessment

A complete, production-ready redesign and rebuild of the public web presence for **ShrotiHost** (`https://shrotihost.in/`), engineered with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Project Overview

This codebase implements the complete public-facing architecture of ShrotiHost across **30 distinct public routes**, **9 statically generated blog articles**, and **5 canonical redirects**.

### Core Tech Stack
* **Framework:** Next.js 15.5.29 (App Router, Server Components by default)
* **Library:** React 19
* **Language:** TypeScript 5.8
* **Styling:** Tailwind CSS with custom glassmorphism design tokens
* **Icons:** Lucide React
* **Static Generation:** 100% statically pre-rendered (`SSG`) with `generateStaticParams` for blog guides and dynamic XML sitemap generation.

---

## 2. Route Directory & Architecture

| Route | Page Name | Key Features |
| :--- | :--- | :--- |
| `/` | **Homepage** | Hero, domain search bar, tabbed hosting matrix, value pillars, Trustpilot link, FAQs |
| `/shared-hosting` | **NVMe Shared Hosting** | 4 pricing tiers (₹49 to ₹249), billing selector, full specification comparison table |
| `/wordpress-hosting` | **Managed WordPress** | AccelerateWP, LSCache benchmarks, Redis object cache, WordPress FAQ |
| `/unlimited-hosting` | **Unlimited NVMe Hosting** | Bronze to Diamond tiers, Fair Use Policy (FUP) resource disclosure |
| `/reseller-hosting` | **WHM Reseller Hosting** | 4 reseller tiers, white-label WHM, interactive Reseller Profit Calculator |
| `/vps` | **Cloud VPS Hosting** | 8 KVM cloud VPS configurations (Spark to Apex), transparent setup fees |
| `/domains` | **Domain Search & TLDs** | Domain search simulator, 12-TLD live filterable pricing table, transfer guide |
| `/services` | **Digital Services Hub** | Engineering process, tech stack badges, flexible engagement models |
| `/web-development` | **Custom Web Development** | Modern Next.js stack, deliverables checklist, consultation contact form |
| `/app-development` | **Mobile App Development** | React Native/Flutter capabilities, push notification architecture |
| `/ecommerce-development` | **E-Commerce Development** | UPI & Indian gateway integrations (Razorpay, Cashfree), WooCommerce speed |
| `/saas-development` | **SaaS Engineering** | Multi-tenant architecture, subscription billing logic, cloud deployment |
| `/whmcs-modules` | **WHMCS Addons** | WaShroti (WhatsApp), Smart Gateway Fees, Social Proof Premium |
| `/about` | **About ShrotiHost** | Founder Priyanshu Shroti, MSME Udyam `UDYAM-UP-36-0017127`, milestone timeline |
| `/contact` | **Contact & Support** | Department routing, Hathras UP registered address, interactive contact form |
| `/careers` | **Careers in India** | Remote-first engineering culture, 4 detailed technical job openings |
| `/blog` | **Knowledgebase Hub** | Interactive category filters, search input, featured article spotlight |
| `/blog/[slug]` | **9 Technical Guides** | Markdown prose rendering, sticky sidebar with contextual hosting recommendations |
| `/terms` | **Terms of Service** | UP legal jurisdiction, billing cycles via portal, account responsibilities |
| `/privacy` | **Privacy Policy** | India DPDP Act 2023 compliance, zero sale of personal data |
| `/refund` | **Refund Policy** | 7-day money-back guarantee, explicit exclusions for domains & VPS |
| `/acceptable-use-policy` | **AUP** | IT Act 2000 compliance, anti-spam thresholds, resource abuse rules |

### Canonical Redirects
* `/terms-and-conditions` -> `/terms`
* `/privacy-policy` -> `/privacy`
* `/refund-policy` -> `/refund`
* `/vps-hosting` -> `/vps`
* `/domain-registration` -> `/domains`

---

## 3. Data Integrity & Verification Standards

In accordance with assessment rules prohibiting fabricated business claims:
1. **Accurate Pricing:** All prices match the official store catalog (`portal.shrotihost.in`), including the verified flat-rate renewal policy.
2. **Operational Uptime Target:** Described accurately as a **99.9% High Uptime Target** backed by LiteSpeed and CloudLinux infrastructure (not an unverified financial SLA credit).
3. **Frontend Craftsmanship:** Replaced unverified score guarantees with **Performance-First Architecture**.
4. **Authentic Social Proof:** Fictional review personas have been removed and replaced with a direct link to ShrotiHost's public [Trustpilot Reviews](https://www.trustpilot.com/review/shrotihost.in) and official MSME verification (`UDYAM-UP-36-0017127`).
5. **Simulated Domain Search:** Clearly designated as a simulated frontend demo with instant deep-links to the live registry cart.

Detailed verification records are maintained in [**`CONTENT-VERIFICATION.md`**](./CONTENT-VERIFICATION.md).

---

## 4. Getting Started & Local Development

### Prerequisites
* **Node.js:** v18.18.0 or newer (tested on Node v22.17.0)
* **NPM:** v9.0.0 or newer

### Installation
```bash
# Clone or navigate to the project directory
cd ShortiHost_Redesign

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
# Type check and build static HTML pages
npm run build

# Start the production server
npm run start
```

---

## 5. Assessment Documentation Register

* [**`FINAL-QA-REPORT.md`**](./FINAL-QA-REPORT.md): Complete audit of routes, production build trace, live HTTP test results, and limitations.
* [**`route-inventory.csv`**](./route-inventory.csv): 35-item route inventory cataloging page families, CTAs, and QA statuses.
* [**`CONTENT-VERIFICATION.md`**](./CONTENT-VERIFICATION.md): Data verification register cross-checking all claims against official sources.
* [**`INFORMATION-ARCHITECTURE.md`**](./INFORMATION-ARCHITECTURE.md): Sitemap, navigation hierarchy, and user journeys.
* [**`UX-AUDIT.md`**](./UX-AUDIT.md): Heuristic analysis and prioritized improvement matrix.
* [**`DESIGN-SYSTEM.md`**](./DESIGN-SYSTEM.md): Visual identity tokens, colors, typography, and card patterns.
* [**`DESIGN-RATIONALE.md`**](./DESIGN-RATIONALE.md): Architectural decisions and UX problem-solving rationale.
* [**`AI-TOOL-DISCLOSURE.md`**](./AI-TOOL-DISCLOSURE.md): Transparent disclosure of AI tool usage and methodology.
