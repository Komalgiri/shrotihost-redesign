# ShrotiHost Redesign — AI Tool Disclosure & Methodology Statement

**Assessment:** ShrotiHost Full Website Redesign & Frontend Engineering Assessment  
**Assistant:** Antigravity (Google DeepMind)  
**Date:** November 10, 2026  
**Auditor / Engineer:** Senior Frontend Engineer, UI/UX Designer & Technical Architect  

---

## 1. Scope of AI Tool Assistance

In accordance with ethical coding and transparent engineering standards, this document discloses the utilization of AI pair-programming tooling during the redesign and implementation of the ShrotiHost website.

Antigravity was employed as an agentic AI pair programmer to assist across the full software development lifecycle, encompassing discovery, information architecture, frontend component engineering, automated testing, and quality assurance.

---

## 2. Detailed Task Breakdown & AI Utilization

| Engineering Phase | AI Utilization | Human Engineer Oversight & Verification |
| :--- | :--- | :--- |
| **Phase 1: Discovery & Analysis** | Assisted in parsing public store routes, compiling `route-inventory.csv`, drafting `INFORMATION-ARCHITECTURE.md`, and formulating `UX-AUDIT.md`. | Verified all 30 public routes and 5 redirects; ensured no private customer portals or administrative endpoints were accessed. |
| **Phase 1: Design System Planning** | Extracted brand palette from official logo (`#4F46E5` indigo, `#06B6D4` cyan, deep slate backgrounds) and authored `DESIGN-SYSTEM.md`. | Validated color contrast ratios for WCAG 2.1 AA compliance (12:1 text contrast); specified responsive breakpoints and elevation tokens. |
| **Phase 2 & 3: Component Engineering** | Generated boilerplate TypeScript interfaces, layout components (`Navbar`, `Footer`, `Breadcrumbs`), and product pages (`/shared-hosting`, `/wordpress-hosting`, `/unlimited-hosting`, `/reseller-hosting`, `/vps`, `/domains`). | Enforced Server Components by default; restricted client components to interactive widgets; verified exact product pricing against store catalog. |
| **Phase 4 & 5: Services & Company Pages** | Implemented digital services pages (`/web-development`, `/whmcs-modules`), company pages (`/about`, `/contact`, `/careers`), and knowledgebase hub (`/blog`, `/blog/[slug]`). | Verified MSME registration number (`UDYAM-UP-36-0017127`), founder identity (Priyanshu Shroti), and Hathras, UP office location. |
| **Data Verification & Claim Hardening** | Identified unverified claims during audit (`CONTENT-VERIFICATION.md`). | **Critical Intervention:** Removed unverified "99.9% SLA" and "90+ Core Web Vitals guarantees"; eliminated fictional customer personas and substituted authentic Trustpilot links. |
| **Phase 6: Compliance & Testing** | Built legal templates (`/terms`, `/privacy`, `/refund`, `/acceptable-use-policy`) and executed headless browser tests. | Confirmed DPDP Act 2023 alignment; validated 308 permanent redirect headers and HTTP 200 responses across all routes. |

---

## 3. Human Oversight & Critical Interventions

While AI accelerated code generation and refactoring, all architectural decisions, compliance evaluations, and data verification standards were governed by strict human engineering principles:

1. **Elimination of Fabricated Claims:**
   - When initial drafts included placeholder review personas ("Aman Verma", "Divya Nair", "Karan Patel"), they were immediately rejected and replaced with ShrotiHost's public [Trustpilot Reviews](https://www.trustpilot.com/review/shrotihost.in) and verified Indian MSME credentials.
   - All claims of a contractual "99.9% SLA" were downgraded to an accurate "99.9% High Uptime Target" powered by LiteSpeed and CloudLinux.
   - Guaranteed "90+ Core Web Vitals" scores were replaced with factual descriptions of modern responsive Next.js frontend architecture.
2. **Transparent Simulation of APIs:**
   - Domain search availability checks were explicitly designated as a **Simulated Demo Mode** with prominent disclaimers and live deep-links to prevent misleading the user.
3. **Architecture Quality:**
   - Kept the client JavaScript bundle minimal (only 103 kB shared JS) by keeping all static layouts, legal policies, and blog articles as React Server Components.

---

## 4. Verification & Reproducibility Statement

Every file in this repository has been compiled and validated locally:
* **TypeScript:** `npx tsc --noEmit` verified with **0 errors**.
* **Production Build:** `npm run build` verified with **35/35 static pages** generated.
* **Server Verification:** Executed live server tests verifying HTTP status codes and redirect headers.
* **Visual Testing:** Captured real headless Chrome screenshots across desktop and mobile viewports.

