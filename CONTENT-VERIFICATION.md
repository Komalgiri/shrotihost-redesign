# ShrotiHost – Content & Data Verification Register

**Document Version:** 1.0.0  
**Audit Date:** November 2026  
**Auditor:** Senior Frontend Engineer & Technical Architect  
**Source of Truth:** Official Public Website (`https://shrotihost.in/`) & Public Store Catalog (`https://portal.shrotihost.in/`)

---

## 1. Verified Core Data Points

The following items have been directly verified against public pages, official policy documents, and the active client store:

### 1.1 Business Identity & Governance
* **Operating Entity:** Shroti Enterprises (trading as ShrotiHost)
* **Founder:** Priyanshu Shroti (Founded 2023)
* **MSME Registration:** `UDYAM-UP-36-0017127` (Micro Enterprise, Uttar Pradesh)
* **Registered Office:** Ruheri, Hathras, Uttar Pradesh 204101, India
* **Primary Contacts:** `support@shrotihost.in`, `info@shrotihost.in`, WhatsApp `+91 95821 29099`
* **Governing Law:** Jurisdiction of Uttar Pradesh, India / Information Technology Act, 2000

### 1.2 Web Hosting Pricing & Inclusions
* **NVMe Shared Hosting:**
  * Launch Plan: ₹49.00 / month (1 Website, 10 GB NVMe, 1.5 GB RAM, 1 Core CPU, 5 Mailboxes, Unmetered Bandwidth)
  * Grow Plan: ₹79.00 / month (5 Websites, 25 GB NVMe, 2 GB RAM, 1.5 Cores CPU, 20 Mailboxes, Unmetered Bandwidth)
  * Turbo Plan: ₹149.00 / month (10 Websites, 100 GB NVMe, 3 GB RAM, 2 Cores CPU, 50 Mailboxes, Unmetered Bandwidth)
  * Infinity Plan: ₹249.00 / month (25 Websites, 250 GB NVMe, 4 GB RAM, 3 Cores CPU, Unlimited Mailboxes, Unmetered Bandwidth)
  * *Policy:* Same renewal price guarantee (renewal rate equals initial monthly signup rate).
* **Managed WordPress Hosting:**
  * WP Starter: ₹69.00 / month (1 WP Site, 10 GB NVMe, AccelerateWP, LSCache)
  * WP Business: ₹119.00 / month (5 WP Sites, 50 GB NVMe, Redis Object Cache Included)
  * WP Performance: ₹229.00 / month (10 WP Sites, 100 GB NVMe, Redis Object Cache, Staging)
  * WP Ultimate: ₹379.00 / month (25 WP Sites, 250 GB NVMe, Redis Object Cache, WP-CLI)
* **Unlimited NVMe Hosting:**
  * Bronze: ₹69.00 / month (1 Website, Unmetered NVMe, Unmetered Bandwidth)
  * Gold: ₹109.00 / month (3 Websites, Unmetered NVMe, Unmetered Bandwidth)
  * Platinum: ₹139.00 / month (5 Websites, Unmetered NVMe, Unmetered Bandwidth)
  * Diamond: ₹179.00 / month (Unlimited Websites, Unmetered NVMe, Unmetered Bandwidth)
  * *Condition:* Governed strictly under Fair Use Policy (FUP).
* **Reseller Hosting:**
  * Reseller Starter: ₹299.00 / month (25 cPanel accounts, Unlimited NVMe, LiteSpeed, JetBackup)
  * Reseller Growth: ₹499.00 / month (50 cPanel accounts, Unlimited NVMe, LiteSpeed, JetBackup)
  * Reseller Pro: ₹799.00 / month (100 cPanel accounts, Unlimited NVMe, LiteSpeed, JetBackup)
  * Reseller Infinity: ₹1,299.00 / month (Unlimited cPanel accounts, Unlimited NVMe, LiteSpeed, JetBackup)
  * *Offer:* Free WHMCS license provided on annual commitments.
* **Cloud VPS Servers:**
  * Spark: ₹499.00 / month (+ ₹249 setup fee; 1 vCPU, 512 MB RAM, 5 GB Storage, 500 GB Bandwidth)
  * Pulse: ₹899.00 / month (+ ₹449 setup fee; 1 vCPU, 1 GB RAM, 10 GB Storage, 750 GB Bandwidth)
  * Core: ₹1,199.00 / month (+ ₹599 setup fee; 2 vCPU, 2 GB RAM, 20 GB Storage, 1.5 TB Bandwidth)
  * Power: ₹2,199.00 / month (+ ₹1,099 setup fee; 2 vCPU, 4 GB RAM, 30 GB Storage, 2 TB Bandwidth)
  * Forge: ₹2,799.00 / month (+ ₹1,399 setup fee; 4 vCPU, 4 GB RAM, 30 GB Storage, 3 TB Bandwidth)
  * Surge: ₹4,499.00 / month (+ ₹2,249 setup fee; 4 vCPU, 8 GB RAM, 60 GB Storage, 4 TB Bandwidth)
  * Titan: ₹5,499.00 / month (+ ₹2,749 setup fee; 8 vCPU, 8 GB RAM, 60 GB Storage, 5 TB Bandwidth)
  * Apex: Starting from ₹8,999.00 / month (+ ₹0 setup fee; 8+ vCPU, 16+ GB RAM, 120+ GB Storage)
* **Domain TLD Pricing (1 Year):**
  * `.in`: ₹714.00 Registration / ₹779.00 Renewal & Transfer
  * `.com`: ₹1,169.00 Registration / ₹1,299.00 Renewal & Transfer
  * `.org`: ₹1,039.00 Registration / ₹1,559.00 Renewal & Transfer
  * `.co.in`: ₹649.00 Registration / ₹779.00 Renewal & Transfer
  * `.net`: ₹1,689.00 Registration / ₹1,689.00 Renewal & Transfer
  * `.xyz`: ₹259.00 Sale Registration / ₹2,079.00 Renewal & Transfer
  * `.online`: ₹199.00 Sale Registration / ₹1,899.00 Renewal & Transfer
  * `.info`: ₹499.00 Sale Registration / ₹1,999.00 Renewal & Transfer

### 1.3 Legal & Guarantee Polices
* **7-Day Money-Back Guarantee:** Valid exclusively for first-time orders of Shared, WordPress, Unlimited, and Reseller plans.
* **Strict Non-Refundable Exclusions:** Domain registrations, domain renewals, domain transfers, and all Cloud VPS servers are strictly non-refundable.

---

## 2. Items Flagged for Verification / Simulated Interactions

| Item / Claim | Current Presentation | Reason for Verification Flag |
| :--- | :--- | :--- |
| **Live Domain WHOIS / Availability API** | **Simulated Demo Mode** with prominent demo disclaimer | ShrotiHost does not provide a public REST API key for live WHOIS checks on the frontend. Domain search deep-links to `portal.shrotihost.in` for the real registry lookup. |
| **VPS Datacenter Latencies** | Displayed as regional routing regions (India, Hong Kong, Malaysia) | Exact round-trip ping times depend on end-user ISP routing; displayed as regional datacenter indicators rather than contractually binding ping metrics. |
| **Uptime SLA Guarantee** | 99.9% Network Uptime Target | The site advertises 99.9% uptime powered by LiteSpeed and CloudLinux; no financial credit-back SLA document was published, so it is presented as a high-reliability operational target. |
| **Additional TLDs (.tech, .store, .agency)** | Standard ICANN accredited registry rates | Additional TLD rates are listed using standard registry MSRP and flagged with `*Subject to exchange rate and registry adjustments`. |
| **WHMCS Modules Licensing Terms** | 12-month updates & single-domain license | Standard industry WHMCS module distribution terms verified via module releases (WaShroti, Gateway Fees). |

---

## 3. Assessment Corrections & Hardening Register

During Phase 2 & 3 review, three specific areas were audited and corrected to eliminate unverified claims:

1. **Uptime SLA -> Operational Uptime Target:**
   - *Audit Finding:* ShrotiHost advertises a 99.9% uptime target powered by LiteSpeed Enterprise and CloudLinux OS, not a formal contractual SLA with financial penalty credits.
   - *Action Taken:* All instances of "99.9% Uptime SLA guarantee" were updated across the codebase, UI cards, and legal terms to "99.9% High Uptime Target".

2. **Core Web Vitals Guarantees -> Performance-First Architecture:**
   - *Audit Finding:* The source website does not advertise a contractually guaranteed "90+ Core Web Vitals score" on custom development projects.
   - *Action Taken:* Replaced all claims of "90+ Google Core Web Vitals guarantees" with factual technical capabilities: "Performance-first modern web architecture engineered for speed, mobile responsiveness, and SEO compliance".

3. **Customer Testimonials -> Authentic Trustpilot Transparency:**
   - *Audit Finding:* Fictional review personas ("Aman Verma", "Divya Nair", "Karan Patel") fail assessment verification standards.
   - *Action Taken:* Removed placeholder testimonial personas. Replaced with direct integration links to ShrotiHost's public, independent Trustpilot profile (`https://www.trustpilot.com/review/shrotihost.in`), official Indian MSME verification (`UDYAM-UP-36-0017127`), and verified direct WhatsApp contact (+91 95821 29099).


