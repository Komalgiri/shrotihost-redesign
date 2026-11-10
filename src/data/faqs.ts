export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "What does your 'Same Price on Renewal' guarantee mean?",
    answer: "Most traditional web hosts attract customers with steep introductory discounts (e.g. 70% off) and then charge 300% to 500% more when the subscription renews. At ShrotiHost, the price you sign up for is the exact price you pay on renewal—month after month, year after year. There are zero surprise rate hikes."
  },
  {
    question: "Do you offer free website migration from my current host?",
    answer: "Yes! All Shared, WordPress, and Unlimited hosting plans include 100% free website migration. Once you place an order, simply submit your cPanel login or full website backup archive to our technical team via ticket or WhatsApp. Our engineers will migrate your files, databases, and emails with zero downtime."
  },
  {
    question: "What is your 7-Day Money-Back Guarantee policy?",
    answer: "We offer a risk-free 7-day money-back guarantee on eligible first-time purchases of Shared Hosting, WordPress Hosting, Unlimited Hosting, and Reseller Hosting. If you are not satisfied within 7 days of signing up, request a refund via support ticket. Note that domain registrations, renewals, and VPS servers are non-refundable as they incur non-recoverable direct infrastructure costs."
  },
  {
    question: "How fast is NVMe storage compared to standard SSDs?",
    answer: "Our PCIe NVMe solid-state drives deliver read/write throughput exceeding 3,500 MB/s—up to 6 times faster than standard SATA SSDs and up to 30 times faster than mechanical HDDs. This significantly accelerates MySQL database queries, PHP execution, and overall website page rendering."
  },
  {
    question: "Which Indian payment methods do you accept?",
    answer: "Through our secure client portal, we accept all primary Indian and international payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), RuPay, Visa, Mastercard, Net Banking across 50+ Indian banks, and digital wallets. Invoices are generated in INR (₹) with proper GST invoicing."
  },
  {
    question: "How do I reach customer support if I run into an issue?",
    answer: "We provide multi-channel human support 24 hours a day, 7 days a week. For pre-sales, migrations, and quick inquiries, you can message us directly on WhatsApp (+91 95821 29099). For technical troubleshooting, DNS changes, and billing assistance, you can open a support ticket in the client portal (portal.shrotihost.in) with average response times under 15 minutes."
  }
];

export const SHARED_HOSTING_FAQS: FAQItem[] = [
  {
    question: "Can I upgrade my shared hosting tier later as my traffic grows?",
    answer: "Yes, you can upgrade between Launch, Grow, Turbo, and Infinity at any time directly through the client portal with a single click. Your upgrade is calculated on a prorated basis, and your files, databases, and configurations are preserved without any downtime."
  },
  {
    question: "What control panel comes with Shared Hosting?",
    answer: "All shared hosting plans include the industry-standard cPanel control panel, bundled with the Softaculous 1-click app installer. Softaculous lets you install over 400 web applications including WordPress, Joomla, Drupal, Laravel, and phpBB in seconds."
  },
  {
    question: "What does 'Unmetered Bandwidth' mean under your Fair Use Policy?",
    answer: "Unmetered bandwidth means we do not cap or charge you for the amount of data transferred to and from your website. You can serve as many visitors as your allocated CPU and RAM can handle. However, hosting accounts cannot be used as public file distribution hubs, video streaming dumps, or backup archives as specified in our Acceptable Use Policy."
  },
  {
    question: "Are daily backups included for free, or do I need an addon?",
    answer: "Automated daily backups powered by JetBackup are included completely free on every shared hosting plan. You can restore individual files, directories, MySQL databases, email mailboxes, or your entire account with one click directly inside cPanel."
  },
  {
    question: "How does CloudLinux protect my website from other users?",
    answer: "CloudLinux isolates each account in a virtualized Lightweight Virtual Environment (LVE) with its own dedicated memory, CPU, and entry process limits. Even if another site on the same physical server experiences a massive DDoS attack or traffic surge, your website's performance and security remain completely unaffected."
  }
];

export const WEB_DEV_FAQS: FAQItem[] = [
  {
    question: "What technologies and frameworks do you use for web development?",
    answer: "We specialize in modern, high-performance web engineering using Next.js (App Router), React, TypeScript, and Tailwind CSS for the frontend, paired with Node.js, PHP/Laravel, PostgreSQL, and Redis for the backend. We also build custom WooCommerce and WordPress solutions when clients require content management autonomy."
  },
  {
    question: "Do I get full ownership of the source code and assets?",
    answer: "Yes, 100%. Upon project completion and final invoice settlement, full intellectual property and source code ownership are transferred directly to your organization, including Git repositories, Figma design files, and deployment configurations."
  },
  {
    question: "How long does a typical custom website build take?",
    answer: "A standard responsive business website (5 to 10 pages) typically takes 2 to 4 weeks from discovery to launch. Complex e-commerce stores with custom payment gateways usually take 4 to 6 weeks, while bespoke SaaS MVPs typically require 8 to 12 weeks."
  },
  {
    question: "Can ShrotiHost also manage and host the completed website?",
    answer: "Absolutely. As both a software engineering team and a cloud infrastructure host, we provide seamless end-to-end service. We deploy your site directly onto our LiteSpeed NVMe servers, configure SSL and DNS, set up automated daily offsite backups, and provide ongoing server maintenance and priority support contracts."
  },
  {
    question: "How do we get started with a new development project?",
    answer: "Submit a project inquiry on our Web Development page or contact us on WhatsApp (+91 95821 29099). We will schedule a free 30-minute technical discovery call to review your specifications, user flows, and timeline, followed by a formal written project proposal and milestone roadmap."
  }
];

export const WHMCS_MODULES_FAQS: FAQItem[] = [
  {
    question: "Which versions of WHMCS are supported by your modules?",
    answer: "Our modules are engineered and rigorously tested against WHMCS v8.7, v8.8, v8.9, and the latest v8.10 releases. We adhere strictly to modern WHMCS hook standards and avoid core file modifications."
  },
  {
    question: "What are the server requirements to run WaShroti and Smart Gateway modules?",
    answer: "Your WHMCS hosting environment requires PHP 8.1 or PHP 8.2, the standard ionCube Loader (v12 or v13), cURL support for secure API dispatch, and MySQL 5.7+ or MariaDB 10.4+."
  },
  {
    question: "How does the license key and domain activation work?",
    answer: "Upon purchase, your license key is provisioned instantly in your ShrotiHost client portal. Each standard license activates one production WHMCS domain plus one staging/testing instance (e.g. staging.yourdomain.com or localhost) at no extra charge."
  },
  {
    question: "Can you build a custom payment gateway or server registrar module for WHMCS?",
    answer: "Yes. In addition to our commercial off-the-shelf modules, we engineer bespoke WHMCS addons including regional payment gateways (UPI, net banking, crypto), custom domain registrars, cloud provisioning APIs, and custom client portal themes."
  },
  {
    question: "Do you offer installation assistance if I encounter an issue?",
    answer: "Yes, every module purchase includes free direct installation support. If you need assistance configuring webhooks, WhatsApp API credentials, or cron triggers, our team is available via priority support ticket or WhatsApp."
  }
];

