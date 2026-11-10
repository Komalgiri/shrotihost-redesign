export interface ServiceOffering {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
  techStack: string[];
  turnaroundTime: string;
  ctaText: string;
}

export const SERVICES_LIST: ServiceOffering[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Custom Web Development",
    tagline: "High-performance, bespoke websites engineered for speed and conversion",
    description: "From corporate landing pages to complex responsive web platforms, we engineer clean, accessible, and ultra-fast websites built for maximum performance and conversion.",
    iconName: "Globe",
    turnaroundTime: "2 to 4 weeks",
    ctaText: "Request Web Quote",
    benefits: [
      "Performance-first architecture engineered for high speed and mobile responsiveness",
      "Tailored modern design with zero boilerplate template bloat",
      "Seamless responsive performance across mobile, tablet, and desktop",
      "SEO-ready metadata, schema markup, and OpenGraph tags built-in",
      "Direct deployment and optimization on LiteSpeed NVMe cloud infrastructure"
    ],
    deliverables: [
      "Figma UI/UX design mockups & design system tokens",
      "Production-ready Next.js / React / Tailwind CSS codebase",
      "Automated CI/CD build and deployment pipelines",
      "Integrated contact forms and analytics tracking",
      "30 days post-launch warranty and technical support"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PHP/Laravel", "PostgreSQL", "Redis"]
  },
  {
    id: "app-dev",
    slug: "app-development",
    title: "Mobile App Development",
    tagline: "Cross-platform iOS and Android apps with native performance",
    description: "We build intuitive, fluid mobile applications that empower users on smartphones and tablets, backed by secure, scalable cloud APIs.",
    iconName: "Smartphone",
    turnaroundTime: "6 to 12 weeks",
    ctaText: "Discuss App Project",
    benefits: [
      "Single codebase efficiency for both iOS and Android stores",
      "Smooth 60fps native feel and responsive user animations",
      "Offline-first local caching and seamless background synchronization",
      "Comprehensive end-to-end encryption for user credentials and data"
    ],
    deliverables: [
      "Cross-platform application built with React Native / Flutter",
      "High-concurrency RESTful or GraphQL backend API microservices",
      "Firebase / APNs Push notification architecture",
      "App Store and Google Play Store submission & approval assistance"
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "Docker"]
  },
  {
    id: "ecommerce-dev",
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    tagline: "High-converting online stores tuned for Indian payment gateways",
    description: "Maximize sales with lightning-fast WooCommerce and headless storefronts integrated with Razorpay, Cashfree, PhonePe, Paytm, and automated shipping APIs.",
    iconName: "ShoppingBag",
    turnaroundTime: "3 to 6 weeks",
    ctaText: "Build Online Store",
    benefits: [
      "Instant checkout flows optimized for UPI (GPay, PhonePe) and cards",
      "Automated GST billing, invoices, and shipping label generation",
      "Redis object caching ensuring sub-second catalog page loads",
      "Abandoned cart recovery and WhatsApp order alert integrations"
    ],
    deliverables: [
      "Custom WooCommerce or Headless Commerce storefront",
      "Payment gateway credentials verification & live API hookup",
      "Product catalog imports, variations, and inventory management",
      "Automated transactional email and WhatsApp notification triggers"
    ],
    techStack: ["WooCommerce", "WordPress", "Next.js Commerce", "Razorpay", "Cashfree", "Stripe", "Redis"]
  },
  {
    id: "saas-dev",
    slug: "saas-development",
    title: "SaaS & Cloud Software",
    tagline: "Architecting scalable multi-tenant web applications from MVP to scale",
    description: "Partner with an engineering team that understands both code and hosting infrastructure to turn your vision into a scalable, secure software-as-a-service product.",
    iconName: "Cpu",
    turnaroundTime: "8 to 16 weeks",
    ctaText: "Book Architecture Call",
    benefits: [
      "Multi-tenant database isolation ensuring customer data boundaries",
      "Subscription billing logic with automated renewal and dunning",
      "Role-Based Access Control (RBAC) and team permission management",
      "Full API-first design ready for third-party integrations and webhooks"
    ],
    deliverables: [
      "Complete SaaS web application with customer and admin portals",
      "Cloud architecture provisioning on Docker and Linux VPS instances",
      "Automated database migrations, backup schedules, and monitoring",
      "Full IP ownership and comprehensive technical documentation"
    ],
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Docker", "Redis", "Stripe / Razorpay Subscriptions"]
  },
  {
    id: "whmcs-dev",
    slug: "whmcs-modules",
    title: "WHMCS Modules & Automation",
    tagline: "Specialized plugins to streamline hosting billing, support & sales",
    description: "Custom-built WHMCS automation modules trusted by web hosting providers across India and internationally to recover transaction fees and automate customer WhatsApp alerts.",
    iconName: "Puzzle",
    turnaroundTime: "Instant License / 1 week for custom",
    ctaText: "Explore Modules",
    benefits: [
      "WaShroti: Automated WhatsApp alerts for invoices, payment confirmations, and support tickets",
      "Smart Gateway Fees: Legally recover payment processing fees with granular product exceptions",
      "Social Proof Premium: Live conversion popup widgets tailored for WHMCS order forms",
      "Compatible with WHMCS v8.x, PHP 8.1 / 8.2, and standard ionCube loaders"
    ],
    deliverables: [
      "Signed ionCube module archive ready for 1-click WHMCS upload",
      "Admin settings interface integrated into WHMCS system settings",
      "12 months of software updates and compatibility patches",
      "Direct technical installation support from ShrotiHost engineers"
    ],
    techStack: ["PHP 8.1+", "WHMCS API", "WhatsApp Business API", "MySQL", "JavaScript"]
  }
];

