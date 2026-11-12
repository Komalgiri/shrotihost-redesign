export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "How does the flat renewal price guarantee work?",
    answer: "The price you choose at signup is the price you pay at renewal for the same plan. No introductory-rate surprises and no price hikes. Any optional add-ons are always shown separately."
  },
  {
    question: "Do you offer free website migration from other web hosts?",
    answer: "Yes, we handle complete website, database, and email migrations from your previous host with zero downtime at no extra cost. Our technical engineers perform end-to-end testing before switching DNS."
  },
  {
    question: "Where are your hosting servers physically located?",
    answer: "Hosting and billing run on ShrotiHost's own client portal infrastructure. Operations are based in Ruheri, Hathras, Uttar Pradesh; support is answered by the same team that runs the servers. We do not publish a specific facility address beyond what is listed on our contact page."
  },
  {
    question: "Which payment methods are accepted?",
    answer: "Through our secure client portal, we accept all primary Indian payment methods including instant UPI (Google Pay, PhonePe, Paytm), RuPay, Visa, Mastercard, and Net Banking across 50+ banks."
  },
  {
    question: "How fast are custom software and mobile app projects delivered?",
    answer: "Standard MVPs and custom software modules are typically delivered in 4 to 8 weeks, backed by structured 2-week agile sprint cycles, live staging demos, and written milestone deliverables."
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

