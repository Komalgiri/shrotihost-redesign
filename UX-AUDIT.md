# ShrotiHost – Comprehensive UX/UI Audit & Usability Analysis

**Target Domain:** https://shrotihost.in/  
**Audit Conducted By:** Senior Frontend Engineer, UI/UX Designer & Technical Architect  
**Date:** November 2026  
**Scope:** Complete public-facing web properties, hosting flows, domain search, service portfolios, company profiles, blog/knowledge base, and legal policies.

---

## 1. Executive Summary

ShrotiHost (operated by Shroti Enterprises, MSME Udyam: `UDYAM-UP-36-0017127`) delivers high-value cloud hosting (NVMe SSDs, LiteSpeed Web Server, CloudLinux, Imunify360) and specialized software engineering at highly competitive price points (NVMe shared hosting starting from ₹49/month). 

However, the existing public-facing website suffers from significant usability frictions, inconsistent information hierarchy, disconnected user journeys, and missed conversion opportunities. While the infrastructure technology is modern, the frontend presentation fails to communicate that engineering excellence effectively.

This audit details the structural, visual, and behavioral shortcomings of the current website, evaluates them using Nielsen Norman Group heuristics, and establishes a prioritized roadmap for the redesign.

---

## 2. Detailed UX/UI Heuristic Evaluation

### 2.1 Visual Design Inconsistencies & Aesthetics
* **Color Palette Discordance:** The current interface alternates between inconsistent shades of navy, dark slate, bright indigo, and occasional neon accents without a unified token system. Status colors (e.g. green for uptime, blue for features) lack consistent semantic definitions.
* **Typographic Hierarchy Breakdown:** Headings across different product pages use haphazard font sizes, line heights, and letter-spacing (`tracking-tight` on some pages, standard on others). Long-form prose (especially in legal policies and technical blog articles) lacks comfortable reading widths (`max-w-prose`), leading to 120+ character line lengths that strain readability.
* **Component Disconnect:** Product cards across Shared Hosting, WordPress Hosting, and VPS use completely distinct padding, border radiuses, and shadow elevations, giving the impression of separate micro-sites rather than a unified company product suite.
* **Iconography Incoherence:** Lucide icons and third-party SVGs are mixed without consistent stroke weights (some 1.5px, some 2px, some filled), creating visual noise.

### 2.2 Navigation & Information Architecture Friction
* **Mega-Menu Confusion:** Dropdowns in the primary header suffer from poor grouping. Hosting products (Shared, WordPress, Unlimited, Reseller, VPS) are presented in flat lists without guidance for users who don't know the difference between "Shared" and "Unlimited".
* **Missing Breadcrumbs:** Sub-pages (such as individual blog articles, specific hosting tiers, and individual service pages) omit breadcrumb trails, leaving users disoriented when arriving via search engines or direct links.
* **Portal vs. Marketing Site Boundary Disconnect:** When users click "Order Now" or "Check Domain", they are abruptly kicked to `portal.shrotihost.in` without a pre-populated cart or unified header/footer context, creating high drop-off rates.
* **Footer Overload:** The footer contains redundant links mixed with sparse columns, lacking clear categorization into Products, Services, Company, Support, and Legal.

### 2.3 Poor Content Hierarchy & Scannability
* **Feature Dumping vs. Outcome-Driven Messaging:** Product pages list server specifications (e.g., "CloudLinux LVE, CageFS, mod_lsapi") without explaining what they mean for the customer (e.g., "Your site won't crash when your neighbor gets a traffic spike").
* **Opaque "Unlimited" Hosting Terms:** The Unlimited Hosting page advertises "Unlimited NVMe Storage & Bandwidth" without directly clarifying Fair Use Policy (FUP) thresholds (inodes, CPU limits), causing skepticism among technical buyers.
* **Buried Renewal Price Guarantees:** ShrotiHost's strongest differentiator—**"Same Price on Renewal"** with zero predatory price hikes—is buried in body paragraphs instead of being prominently displayed next to the pricing tags.
* **Dense Wall-of-Text Legal Policies:** The Terms of Service, Privacy Policy (DPDP Act), Refund Policy, and Acceptable Use Policy are presented as unbroken blocks of legal prose without sticky navigation, section anchors, or plain-English summary cards.

### 2.4 Weak CTA Placement & Conversion Funnel Gaps
* **Unclear Primary vs. Secondary CTAs:** Pages often display multiple competing buttons of identical visual weight (e.g., "View Plans", "Contact Us", "Live Chat", "Client Login") above the fold, inducing choice paralysis.
* **Passive Domain Search:** The homepage domain search bar displays static extensions without dynamic feedback, clear renewal rate disclosures, or direct cart integration.
* **Missing Sticky Action Bar on Mobile:** When users scroll through lengthy pricing comparison tables on mobile devices, the pricing tier headers and "Select Plan" buttons scroll out of view, forcing frustrating back-and-forth scrolling.
* **Inflexible Billing Term Toggles:** Hosting cards present monthly rates without intuitive toggles for semi-annual or annual commitments, obscuring potential multi-month savings or annual perks (like free WHMCS on reseller plans).

### 2.5 Mobile Responsiveness & Touch Target Deficits
* **Overflowing Data Tables:** Detailed technical comparison tables on hosting and VPS pages overflow horizontally without sticky first columns (feature labels), making mobile spec comparison nearly impossible.
* **Sub-Optimal Touch Targets:** Dropdown menu triggers, footer links, and pagination buttons fall below the WCAG 2.1 recommended 44x44px touch target minimum.
* **Intrusive Floating Widgets:** The floating WhatsApp support button frequently overlaps critical bottom navigation elements, sticky cookie banners, or checkout action buttons on smaller mobile screens (viewport width < 380px).

### 2.6 Missing User Journeys & Critical Paths
1. **The First-Time Website Builder Journey:** A student or beginner looking to host their first portfolio has no interactive wizard to help them choose between Shared Launch (₹49/mo) and WordPress Starter (₹69/mo).
2. **The Agency / Freelancer Reseller Journey:** Agencies looking to host 20+ clients lack an interactive profit margin calculator to see how much they can charge their clients versus the ShrotiHost Reseller plan cost (₹299/mo).
3. **The VPS Scaler Journey:** High-traffic store owners have no diagnostic self-assessment tool ("Is my site ready for VPS?") despite having a blog post on the topic.
4. **The Custom Development Prospect Journey:** Potential clients for web or SaaS development are presented with generic contact forms rather than a structured project scope questionnaire.

---

## 3. Prioritized Improvement Matrix

We prioritize redesign interventions using the **Impact vs. Effort** framework to maximize business conversion, performance, and user trust:

| Priority | Issue / Opportunity | Impact | Effort | Strategic Recommendation |
| :--- | :--- | :---: | :---: | :--- |
| **P0 (Critical)** | **Pricing Matrix & Same-Renewal Trust Badge** | Very High | Medium | Build a responsive pricing component with monthly/annual billing toggles, explicit renewal rate disclosures, and prominent "No Renewal Hike" badges. |
| **P0 (Critical)** | **Unified Component Design System** | Very High | High | Implement a robust Tailwind CSS design token architecture (neutral slate surfaces, brand indigo/cyan accents, Lucide icons, accessible contrast). |
| **P0 (Critical)** | **Mobile Comparison Table Overhaul** | High | Medium | Implement sticky-header and sticky-feature-column comparison tables with swipeable horizontal cards for mobile screens. |
| **P1 (High)** | **Information Architecture & Mega-Menu Redesign** | High | Medium | Reorganize top navigation into clean, categorized dropdowns with contextual descriptions, iconography, and direct action links. |
| **P1 (High)** | **Interactive Domain Search Experience** | High | Medium | Build a real-time domain search component with TLD tabs (.com, .in, .org), clear 1st-year vs renewal rate indicators, and instant deep-linking. |
| **P1 (High)** | **Legal & Policy Hub Experience** | Medium | Low | Transform all legal documents into structured layouts with sticky table of contents, searchable clauses, and plain-English summary cards. |
| **P2 (Medium)** | **Interactive Calculators & Decision Tools** | High | High | Develop a Reseller Profit Calculator, a VPS Sizing Diagnostic, and a Website Development Scope Estimator. |
| **P2 (Medium)** | **Blog & Technical Knowledge Hub Optimization** | Medium | Medium | Redesign the blog listing with category pills, read times, search filtering, and contextual hosting product callouts inside articles. |
| **P2 (Medium)** | **WhatsApp & Support Channel Harmonization** | Medium | Low | Replace intrusive floating button with an accessible, non-overlapping floating support hub with department routing (Sales, Technical, Migration). |

---

## 4. Key Target Personas & Core Journeys

### Persona A: The Student / Beginner Developer (Aarav, 21)
* **Goal:** Host a personal portfolio or college capstone project on a reliable server with minimal budget.
* **Pain Points:** Confused by hosting jargon (inodes, cPanel, LSCache); afraid of surprise automatic renewals and hidden charges.
* **Optimized Journey:** Homepage Hero -> "Shared Hosting from ₹49/mo" -> Clear plan card highlighting 1 Website, 10 GB NVMe, Free SSL -> "Same renewal price" guarantee -> Smooth 1-click transition to cart.

### Persona B: The Freelance WordPress Designer (Sneha, 29)
* **Goal:** Deploy client websites fast with zero maintenance headaches and maximum page speed.
* **Pain Points:** Slow TTFB on budget hosts, complicated caching configurations, slow client onboarding.
* **Optimized Journey:** Navigation -> "WordPress Hosting" -> Visual benchmark showing LiteSpeed + Redis acceleration -> WP Business Plan (₹119/mo, 5 sites) -> Free migration request CTA.

### Persona C: The Digital Agency Founder (Vikram, 36)
* **Goal:** Consolidate 40 client websites under a white-label WHM reseller account to generate recurring monthly hosting revenue.
* **Pain Points:** High cPanel licensing costs, rigid limits, poor reseller backup tools.
* **Optimized Journey:** Navigation -> "Reseller Hosting" -> Reseller Profit Calculator -> Reseller Growth (50 accounts, ₹499/mo) with Free WHMCS on annual term -> Instant setup.

### Persona D: The Startup CTO / Founder (Rohan, 32)
* **Goal:** Find a trusted Indian engineering partner to architect and build a SaaS MVP or high-traffic custom web platform.
* **Pain Points:** Flaky freelance developers, agencies that don't understand cloud infrastructure, opaque hourly billing.
* **Optimized Journey:** Navigation -> "Services" -> "SaaS & Web Development" -> Process breakdown (Sprint roadmap, tech stack, SLA) -> Schedule Architecture Call.

---

## 5. Accessibility & Inclusivity (WCAG 2.1 AA Compliance)

1. **Color Contrast:** All body text must achieve a minimum contrast ratio of 4.5:1 against its background; large text (18pt+) must achieve 3:1.
2. **Keyboard Navigation:** Full focus trap inside mobile menus and modal dialogs, visible `:focus-visible` rings on all interactive elements.
3. **Screen Readers:** Semantic HTML5 (`<header>`, `<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`), accurate `aria-expanded` and `aria-controls` on accordions and dropdowns.
4. **Reduced Motion:** Respect user `prefers-reduced-motion: reduce` by disabling smooth scroll loops and transform transitions.
5. **No Blind Data Claims:** All technical specifications must be clearly explained without misleading claims (e.g. clearly qualifying "Unmetered Bandwidth" with acceptable network use standards).

