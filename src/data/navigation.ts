export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
  iconName?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const MAIN_NAV_LINKS = [
  {
    label: "Hosting",
    href: "/shared-hosting",
    hasMegaMenu: true,
    groups: [
      {
        title: "Web Hosting Infrastructure",
        items: [
          {
            label: "NVMe Shared Hosting",
            href: "/shared-hosting",
            badge: "From ₹49/mo",
            description: "High-speed LiteSpeed cPanel hosting with same renewal price.",
            iconName: "Server"
          },
          {
            label: "Managed WordPress Hosting",
            href: "/wordpress-hosting",
            badge: "Redis Included",
            description: "Pre-tuned with LiteSpeed Cache and AccelerateWP acceleration.",
            iconName: "Flame"
          },
          {
            label: "Unlimited NVMe Hosting",
            href: "/unlimited-hosting",
            badge: "Unmetered",
            description: "Unmetered storage and bandwidth under transparent Fair Use.",
            iconName: "Infinity"
          }
        ]
      },
      {
        title: "Advanced & Agency",
        items: [
          {
            label: "Reseller Hosting",
            href: "/reseller-hosting",
            badge: "Free WHMCS",
            description: "White-label cPanel accounts with WHM to sell hosting.",
            iconName: "Users"
          },
          {
            label: "Master Reseller Hosting",
            href: "/master-reseller-hosting",
            badge: "Sub-WHM",
            description: "Sell both cPanel accounts and WHM Reseller accounts with overselling.",
            iconName: "Layers"
          },
          {
            label: "Cloud VPS Servers",
            href: "/vps",
            badge: "Root Access",
            description: "KVM virtual private servers with 1 Gbps port and weekly backups.",
            iconName: "Terminal"
          }
        ]
      }
    ]
  },
  {
    label: "Domains",
    href: "/domains",
    badge: ".in from ₹714",
    hasMegaMenu: false
  },
  {
    label: "Services",
    href: "/services",
    hasMegaMenu: true,
    groups: [
      {
        title: "Software & Digital Engineering",
        items: [
          {
            label: "Custom Web Development",
            href: "/web-development",
            badge: "Next.js / React",
            description: "Modern, responsive websites built with Next.js, React and Tailwind.",
            iconName: "Globe"
          },
          {
            label: "Mobile App Development",
            href: "/app-development",
            description: "Native-feel cross-platform iOS and Android apps.",
            iconName: "Smartphone"
          },
          {
            label: "E-Commerce Development",
            href: "/ecommerce-development",
            badge: "UPI & Cards",
            description: "High-converting online stores with Indian payment gateways.",
            iconName: "ShoppingBag"
          }
        ]
      },
      {
        title: "SaaS & Automation",
        items: [
          {
            label: "SaaS & Cloud Software",
            href: "/saas-development",
            description: "Multi-tenant software architecture from MVP to production.",
            iconName: "Cpu"
          },
          {
            label: "WHMCS Modules & Plugins",
            href: "/whmcs-modules",
            badge: "WaShroti",
            description: "WhatsApp notifications and payment gateway fee allocators.",
            iconName: "Puzzle"
          },
          {
            label: "All Services Overview",
            href: "/services",
            description: "Explore our full software engineering portfolio and approach.",
            iconName: "Layers"
          }
        ]
      }
    ]
  },
  {
    label: "Company",
    href: "/about",
    hasMegaMenu: true,
    groups: [
      {
        title: "About ShrotiHost",
        items: [
          {
            label: "About Our Company",
            href: "/about",
            description: "Founded in 2023 by Priyanshu Shroti, MSME Udyam registered.",
            iconName: "Building2"
          },
          {
            label: "Contact & Support",
            href: "/contact",
            badge: "24/7 WhatsApp",
            description: "Departmental routing for sales, migrations, and billing.",
            iconName: "Mail"
          },
          {
            label: "Careers",
            href: "/careers",
            badge: "We're Hiring",
            description: "Remote-first opportunities in engineering, support, and marketing.",
            iconName: "Briefcase"
          }
        ]
      }
    ]
  },
  {
    label: "Blog",
    href: "/blog",
    hasMegaMenu: false
  }
];

export const FOOTER_SECTIONS = [
  {
    title: "Hosting Products",
    links: [
      { label: "NVMe Shared Hosting", href: "/shared-hosting" },
      { label: "Managed WordPress Hosting", href: "/wordpress-hosting" },
      { label: "Unlimited NVMe Hosting", href: "/unlimited-hosting" },
      { label: "Reseller Hosting", href: "/reseller-hosting" },
      { label: "Master Reseller Hosting", href: "/master-reseller-hosting" },
      { label: "Cloud VPS Hosting", href: "/vps" }
    ]
  },
  {
    title: "Domains & Infrastructure",
    links: [
      { label: "Domain Name Search", href: "/domains" },
      { label: "Domain Transfer Guide", href: "/blog/how-to-transfer-a-domain" },
      { label: "DNS Records Explained", href: "/blog/dns-records-explained" },
      { label: ".in vs .com Domains", href: "/blog/in-or-com-choosing-a-domain-in-india" },
      { label: "LiteSpeed Architecture", href: "/blog/what-is-litespeed-hosting" }
    ]
  },
  {
    title: "Software Development",
    links: [
      { label: "Custom Web Development", href: "/web-development" },
      { label: "Mobile App Development", href: "/app-development" },
      { label: "E-Commerce Development", href: "/ecommerce-development" },
      { label: "SaaS & Cloud Software", href: "/saas-development" },
      { label: "WHMCS Modules & Plugins", href: "/whmcs-modules" },
      { label: "Development Services Hub", href: "/services" }
    ]
  },
  {
    title: "Company & Support",
    links: [
      { label: "About ShrotiHost", href: "/about" },
      { label: "Contact & Department Routing", href: "/contact" },
      { label: "Careers (Remote-First)", href: "/careers" },
      { label: "Technical Blog & Guides", href: "/blog" },
      { label: "Client Portal Login", href: "https://portal.shrotihost.in" }
    ]
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy (DPDP Act)", href: "/privacy" },
      { label: "Refund Policy (7-Day Guarantee)", href: "/refund" },
      { label: "Acceptable Use Policy", href: "/acceptable-use-policy" }
    ]
  }
];

