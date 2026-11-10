export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Hosting" | "WordPress" | "Domains" | "Infrastructure" | "Development";
  readTime: string;
  publishDate: string;
  author: string;
  featured?: boolean;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "shared-vs-reseller-hosting",
    title: "Shared vs Reseller Hosting: Which One Do You Actually Need?",
    excerpt: "Many people confuse shared and reseller hosting as different performance tiers. In reality, they solve two entirely different structural questions: hosting your own sites vs managing isolated accounts for clients.",
    category: "Hosting",
    readTime: "6 min read",
    publishDate: "July 21, 2026",
    author: "ShrotiHost Technical Team",
    featured: true,
    content: `Many people confuse shared and reseller hosting as different performance rungs on the same ladder. In reality, they solve two entirely different operational questions.

### The Fundamental Question

* **Shared Hosting:** *"Where should my website live?"*  
  Shared hosting is built for an individual website owner, business, or portfolio. Even if you host 5 or 10 websites on an account, all of those domains share the exact same cPanel login, same file structure, and same billing invoice.
* **Reseller Hosting:** *"How do I manage and isolate hosting for other people?"*  
  Reseller hosting gives you access to Web Host Manager (WHM). WHM allows you to create completely separate, isolated cPanel accounts for each of your clients. Client A can never access Client B's files, and you can brand the login screen with your agency's name.

### When to Pick Shared Hosting

Choose shared hosting if:
1. All websites belong to you, your immediate family, or your single organization.
2. You don't need to give external clients direct cPanel access to manage their own databases or mailboxes.
3. You want the most cost-effective solution with zero server-level administration overhead.

### When to Upgrade to Reseller Hosting

Choose reseller hosting if:
1. You run a web design agency, freelance consultancy, or IT service firm.
2. You want to charge your clients ₹300 to ₹1,000/month for hosting and generate steady recurring revenue.
3. You require strict cPanel security isolation between different client stores or web apps.
4. You want to offer custom private nameservers (e.g. \`ns1.yourbrand.com\`) and automated WHMCS billing.`
  },
  {
    slug: "when-should-you-upgrade",
    title: "When Should You Upgrade to a VPS? Five Real Signals",
    excerpt: "Are you hitting 503 or 508 errors on shared hosting? Here are five measurable, real-world signals that your website has genuinely outgrown shared hosting.",
    category: "Infrastructure",
    readTime: "6 min read",
    publishDate: "August 19, 2026",
    author: "ShrotiHost Technical Team",
    content: `Moving from shared hosting to a Virtual Private Server (VPS) is a major milestone for any growing website. However, many site owners upgrade prematurely due to bad caching or unoptimized code.

Here are the five real signals that prove you are genuinely ready for a Cloud VPS:

### 1. Repeated 503 and 508 Resource Limit Errors
On shared hosting with CloudLinux, when your site exhausts its allocated memory (RAM) or concurrent entry processes (EP), visitors see \`508 Resource Limit Is Reached\` or \`503 Service Unavailable\`. If these errors persist after enabling LiteSpeed Cache, you have hit your plan's physical ceiling.

### 2. Sluggish Response Times During Predictable Peaks
If your Time to First Byte (TTFB) spikes from 200ms to 2,500ms whenever an email newsletter drops or a promotion launches, your database queries are queuing up waiting for shared CPU cycles.

### 3. Need for Custom Daemons, Runtimes, or Node.js Services
Shared hosting accommodates standard PHP and select Python/Node apps, but cannot run background persistent daemons, Redis servers on non-standard ports, custom Docker containers, or headless browser rendering services. A VPS gives you complete root access.

### 4. PCI-DSS and Strict Security Compliance
If your enterprise handles high-value credit card processing or sensitive patient data, compliance standards often mandate dedicated IP addresses, isolated OS kernels, and custom firewall rule chains.

### 5. High-Volume E-Commerce or Membership Concurrency
Dynamic stores running WooCommerce or membership communities cannot cache 100% of their pages because visitors have unique shopping carts. These uncached requests demand dedicated CPU and RAM.`
  },
  {
    slug: "vps-vs-shared-hosting",
    title: "VPS vs Shared Hosting: The Honest Comparison",
    excerpt: "A transparent side-by-side comparison of virtualization, resource isolation, administrative burden, and cost between shared hosting and cloud VPS.",
    category: "Infrastructure",
    readTime: "6 min read",
    publishDate: "August 19, 2026",
    author: "ShrotiHost Technical Team",
    content: `Choosing between shared hosting and a VPS comes down to the tradeoff between managed simplicity and total operational control.

### Shared Hosting: Managed Simplicity
In a shared environment, hundreds of accounts share one powerful physical server. Software like CloudLinux isolates accounts into virtual cages (LVE), while our sysadmins handle OS security patches, PHP updates, and firewall configuration.
* **Pros:** Extremely affordable (from ₹49/mo), zero server maintenance required, includes cPanel and daily backups.
* **Cons:** Strict CPU and RAM caps; no root access; cannot modify global web server configuration.

### Cloud VPS: Dedicated Power & Root Control
With a VPS, hypervisor virtualization (KVM) carves out dedicated virtual CPU cores, guaranteed RAM, and isolated disk space that belong solely to your instance.
* **Pros:** Guaranteed compute resources, full root SSH access, install any software package or Linux distro (Ubuntu, Debian, AlmaLinux).
* **Cons:** Higher cost (from ₹499/mo); requires Linux command-line knowledge or purchasing a server control panel.`
  },
  {
    slug: "what-is-litespeed-hosting",
    title: "What is LiteSpeed Hosting? Why Your Server Software Matters",
    excerpt: "Explore how LiteSpeed Web Server and LSCache outperform traditional Apache and Nginx setups, delivering faster TTFB and handling heavy traffic spikes.",
    category: "Infrastructure",
    readTime: "6 min read",
    publishDate: "August 19, 2026",
    author: "ShrotiHost Technical Team",
    content: `Web hosting companies frequently tout server hardware like NVMe SSDs and multi-core CPUs. But the server software listening for incoming HTTP requests is equally decisive for your site's loading speed.

### The Problem with Traditional Apache
Apache web server operates on a process-driven model: each visitor connection spawns a new worker thread. When 500 visitors arrive simultaneously, Apache consumes gigabytes of memory managing threads, causing high latency.

### How LiteSpeed Solves This
LiteSpeed Enterprise is built on an event-driven architecture similar to Nginx, but with 100% drop-in Apache compatibility (supporting \`.htaccess\` rewrite rules). A single CPU core can handle thousands of concurrent requests with negligible memory consumption.

### LiteSpeed Cache (LSCache) Superpower
LiteSpeed features server-level caching that integrates directly with WordPress and WooCommerce via the free LSCache plugin. Dynamic HTML pages are cached in server RAM and served in under 50 milliseconds, bypassing PHP and MySQL entirely.`
  },
  {
    slug: "dns-records-explained",
    title: "DNS Records Explained: A, AAAA, CNAME, MX and TXT",
    excerpt: "A plain-English reference guide breaking down the five essential DNS records you will actually use for your domain, email, and verification.",
    category: "Domains",
    readTime: "7 min read",
    publishDate: "August 19, 2026",
    author: "ShrotiHost Technical Team",
    content: `The Domain Name System (DNS) acts as the phonebook of the internet. Here are the five records you will interact with most:

### 1. A Record (Address Record)
* **What it does:** Maps a human-readable domain name to an IPv4 address.
* **Example:** \`yourdomain.com -> 103.150.186.25\`

### 2. AAAA Record (IPv6 Address Record)
* **What it does:** Maps a domain name to a modern 128-bit IPv6 address.
* **Example:** \`yourdomain.com -> 2400:cb00:2048:1::c629:d7a2\`

### 3. CNAME Record (Canonical Name)
* **What it does:** Creates an alias pointing one domain name to another domain name.
* **Example:** \`www.yourdomain.com -> yourdomain.com\`

### 4. MX Record (Mail Exchange)
* **What it does:** Directs incoming email to the servers responsible for handling mailboxes.
* **Example:** \`Priority 10 -> mail.yourdomain.com\` or Google Workspace / Zoho Mail.

### 5. TXT Record (Text Record)
* **What it does:** Holds arbitrary human- and machine-readable text used for domain ownership verification, SPF, DKIM, and DMARC security.`
  },
  {
    slug: "in-or-com-choosing-a-domain-in-india",
    title: ".in vs .com: Choosing the Right Domain Name in India",
    excerpt: "Should your Indian startup or business choose .in or .com? Compare audience targeting, SEO impact, availability, and pricing.",
    category: "Domains",
    readTime: "6 min read",
    publishDate: "June 11, 2026",
    author: "ShrotiHost Technical Team",
    content: `When launching a website in India, one of the earliest decisions is choosing between India's country-code top-level domain (\`.in\`) and the global standard (\`.com\`).

### When to Pick .in (India ccTLD)
1. **Local Audience Focus:** If 90%+ of your customers reside in India, \`.in\` immediately signals local presence, local currency, and local shipping.
2. **SEO Geotargeting Advantage:** Google automatically associates \`.in\` with Indian search intent.
3. **Better Availability:** Many brand names that are long squatted on \`.com\` remain readily available on \`.in\` at ₹714/year.

### When to Pick .com (Global gTLD)
1. **International Ambitions:** If you sell SaaS, export products, or target clients in the US, Europe, or Southeast Asia, \`.com\` is universally recognized.
2. **Defensive Brand Protection:** If your budget allows, registering both \`.com\` and \`.in\` prevents competitors from acquiring your name.`
  },
  {
    slug: "10-ways-to-speed-up-wordpress",
    title: "10 Ways to Speed Up WordPress (That Actually Work)",
    excerpt: "Cut your WordPress page load times in half with 10 actionable, production-tested optimizations for Core Web Vitals.",
    category: "WordPress",
    readTime: "8 min read",
    publishDate: "June 24, 2026",
    author: "ShrotiHost Technical Team",
    content: `Slow WordPress sites hurt SEO rankings and drain sales conversions. Here are 10 proven optimizations that deliver real speed gains:

1. **Host on LiteSpeed Web Server:** Switch to a LiteSpeed host and configure the free LiteSpeed Cache (LSCache) plugin.
2. **Enable Redis Object Cache:** Cache complex database queries in memory to prevent repeated MySQL executions.
3. **Upgrade to PHP 8.2 or 8.3:** PHP 8.x executes requests up to 30% faster than legacy PHP 7.4.
4. **Convert Images to WebP/AVIF:** Compress images and deliver modern formats that are 40% smaller than JPEGs.
5. **Clean Orphaned Database Rows:** Regularly purge post revisions, transient options, and spam comments using WP-Optimize.
6. **Audit and Eliminate Slow Plugins:** Use Query Monitor to find bloated plugins slowing down admin and frontend requests.
7. **Minify and Combine CSS/JS:** Defer non-critical JavaScript to prevent render-blocking resources.
8. **Implement Cloudflare CDN:** Cache static assets at edge data centers closest to your visitors.
9. **Limit External HTTP Requests:** Reduce external tracking pixels, font loaders, and widgets that introduce third-party latency.
10. **Enable HTTP/3 and QUIC:** Ensure your web server supports HTTP/3 for faster multiplexed connections over mobile networks.`
  },
  {
    slug: "website-development-cost",
    title: "Website Development Cost in India: Real Numbers, Zero Fluff",
    excerpt: "What does it actually cost to build a website in India? A realistic breakdown covering single-page sites, corporate portals, and custom SaaS platforms.",
    category: "Development",
    readTime: "7 min read",
    publishDate: "August 19, 2026",
    author: "ShrotiHost Technical Team",
    content: `Web development pricing in India ranges from ₹5,000 to ₹10,00,000+. To budget effectively, you need to understand what actually drives engineering costs.

### Tier 1: 5-Page Standard Business Website (₹15,000 - ₹35,000)
Ideal for local clinics, consultancies, and micro-enterprises. Includes responsive design, home, about, services, contact form, and Google Maps integration.

### Tier 2: Dynamic E-Commerce Store (₹35,000 - ₹95,000)
Online storefront with product variations, UPI/Razorpay payment integration, shipping rates, automated GST invoices, and mobile-optimized checkout.

### Tier 3: Custom Headless Web App or SaaS MVP (₹1,00,000 - ₹3,50,000+)
Bespoke software built with Next.js, Node.js, and PostgreSQL featuring user authentication, multi-tenant databases, custom dashboards, and subscription billing.`
  },
  {
    slug: "how-to-transfer-a-domain",
    title: "How to Transfer a Domain: Step by Step, Without Downtime",
    excerpt: "A complete walkthrough to safely transfer your domain from GoDaddy, Namecheap, or other registrars to ShrotiHost with zero website or email downtime.",
    category: "Domains",
    readTime: "6 min read",
    publishDate: "August 19, 2026",
    author: "ShrotiHost Technical Team",
    content: `Transferring your domain to ShrotiHost is simple, safe, and extends your domain registration by an additional full year.

### Step 1: Unlock Your Domain at Your Current Registrar
Log into your existing registrar (GoDaddy, Namecheap, BigRock) and set Domain Lock to **Off**.

### Step 2: Request the EPP / Authorization Code
Find the **Transfer Out** or **Auth Code** setting to receive your unique alphanumeric transfer secret.

### Step 3: Disable WHOIS Privacy Temporarily
Ensure the administrative email on file is accessible so you can approve the ICANN transfer verification email.

### Step 4: Initiate Transfer on ShrotiHost
Visit \`shrotihost.in/domains\`, enter your domain name under Transfer, and provide the EPP code.

### Step 5: Confirm and Await ICANN Completion
Approve the transfer confirmation email. The registry completes the transfer within 5 to 7 calendar days with zero downtime for your website.`
  }
];

