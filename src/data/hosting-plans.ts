export interface HostingPlan {
  id: string;
  name: string;
  tierSubtitle?: string;
  priceMonthly: number;
  priceSemiAnnual?: number;
  priceAnnual?: number;
  setupFee?: number;
  renewalPriceSame: boolean;
  popular?: boolean;
  featuredBadge?: string;
  websites: string;
  storage: string;
  ram: string;
  cpu: string;
  bandwidth: string;
  emailAccounts: string;
  features: string[];
  ctaText: string;
  orderUrl: string;
  specsSummary?: {
    cpanel: boolean;
    liteSpeed: boolean;
    freeSsl: boolean;
    dailyBackups: boolean;
    imunify360: boolean;
    redisCache?: boolean;
    rootAccess?: boolean;
  };
}

export const SHARED_HOSTING_PLANS: HostingPlan[] = [
  {
    id: "shared-launch",
    name: "Launch Plan",
    tierSubtitle: "Perfect for students, portfolios and small personal blogs",
    priceMonthly: 49,
    priceSemiAnnual: 279,
    priceAnnual: 499,
    renewalPriceSame: true,
    popular: false,
    websites: "1 Website",
    storage: "10 GB NVMe SSD",
    ram: "1.5 GB Dedicated RAM",
    cpu: "1 Core CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "5 Professional Mailboxes",
    ctaText: "Order Launch Plan",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/shared-hosting/launch",
    features: [
      "1 Website hosted",
      "10 GB Ultra-fast NVMe Storage",
      "1.5 GB Dedicated RAM allocation",
      "1 vCPU Core with CloudLinux isolation",
      "Unmetered Monthly Bandwidth (FUP)",
      "5 Custom Email Addresses",
      "LiteSpeed Enterprise Web Server",
      "cPanel Control Panel + Softaculous 1-click",
      "Free Let's Encrypt Wildcard SSL",
      "Automated JetBackup Daily Backups",
      "Imunify360 Proactive Security WAF",
      "Flat Renewal Guarantee: Same price forever"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true
    }
  },
  {
    id: "shared-grow",
    name: "Grow Plan",
    tierSubtitle: "Most popular for freelancers, creators and growing businesses",
    priceMonthly: 79,
    priceSemiAnnual: 449,
    priceAnnual: 799,
    renewalPriceSame: true,
    popular: true,
    featuredBadge: "Most Popular",
    websites: "5 Websites",
    storage: "25 GB NVMe SSD",
    ram: "2 GB Dedicated RAM",
    cpu: "1.5 Cores CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "20 Professional Mailboxes",
    ctaText: "Order Grow Plan",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/shared-hosting/grow",
    features: [
      "5 Websites hosted",
      "25 GB Ultra-fast NVMe Storage",
      "2 GB Dedicated RAM allocation",
      "1.5 vCPU Cores with CloudLinux isolation",
      "Unmetered Monthly Bandwidth",
      "20 Custom Email Addresses",
      "LiteSpeed Enterprise + LSCache",
      "cPanel Control Panel + 400+ 1-click apps",
      "Free AutoSSL Certificates",
      "Automated JetBackup Daily Restores",
      "Imunify360 Malware Defense & Firewall",
      "Free Website Migration Assistance",
      "Flat Renewal Guarantee: No price hikes"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true
    }
  },
  {
    id: "shared-turbo",
    name: "Turbo Plan",
    tierSubtitle: "Built for busy portals, content hubs and active clients",
    priceMonthly: 149,
    priceSemiAnnual: 849,
    priceAnnual: 1499,
    renewalPriceSame: true,
    popular: false,
    websites: "10 Websites",
    storage: "100 GB NVMe SSD",
    ram: "3 GB Dedicated RAM",
    cpu: "2 Cores CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "50 Professional Mailboxes",
    ctaText: "Order Turbo Plan",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/shared-hosting/turbo",
    features: [
      "10 Websites hosted",
      "100 GB High-Performance NVMe Storage",
      "3 GB Dedicated RAM allocation",
      "2 vCPU Cores CloudLinux LVE limits",
      "Unmetered Monthly Bandwidth",
      "50 Custom Email Addresses",
      "LiteSpeed Enterprise + HTTP/3 support",
      "cPanel + Staging Environment",
      "Free AutoSSL on all domains",
      "JetBackup Daily Backups with 30-day retention",
      "Imunify360 Active Shield",
      "Free Priority Website Migration",
      "Flat Renewal Guarantee: ₹149/mo on renewal"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true
    }
  },
  {
    id: "shared-infinity",
    name: "Infinity Plan",
    tierSubtitle: "Maximum shared resources for power users and multiple sites",
    priceMonthly: 249,
    priceSemiAnnual: 1399,
    priceAnnual: 2499,
    renewalPriceSame: true,
    popular: false,
    websites: "25 Websites",
    storage: "250 GB NVMe SSD",
    ram: "4 GB Dedicated RAM",
    cpu: "3 Cores CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "Unlimited Mailboxes",
    ctaText: "Order Infinity Plan",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/shared-hosting/infinity",
    features: [
      "25 Websites hosted",
      "250 GB Enterprise NVMe SSD Storage",
      "4 GB Dedicated RAM allocation",
      "3 vCPU Cores CloudLinux isolation",
      "Unmetered High-Speed Bandwidth",
      "Unlimited Mailboxes & Forwarders",
      "LiteSpeed Enterprise + LSAPI acceleration",
      "cPanel Control Panel + Git Version Control",
      "Free AutoSSL Certificates",
      "Automated JetBackup Daily Restores",
      "Imunify360 WAF + Real-Time Virus Scanning",
      "Free VIP Migration for all 25 sites",
      "Flat Renewal Guarantee: ₹249/mo on renewal"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true
    }
  }
];

export const WORDPRESS_HOSTING_PLANS: HostingPlan[] = [
  {
    id: "wp-starter",
    name: "WP Starter",
    tierSubtitle: "Tuned for single WordPress blogs and business landing pages",
    priceMonthly: 69,
    renewalPriceSame: true,
    popular: false,
    websites: "1 WordPress Site",
    storage: "10 GB NVMe SSD",
    ram: "1.5 GB RAM",
    cpu: "1 Core CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "5 Mailboxes",
    ctaText: "Deploy WP Starter",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/wordpress-hosting/starter",
    features: [
      "1 WordPress Installation",
      "10 GB Pure NVMe Storage",
      "LiteSpeed Cache (LSCache) Preconfigured",
      "AccelerateWP Optimization Suite",
      "Free SSL & Daily JetBackup",
      "Automated Core WP Updates",
      "Imunify360 WordPress Firewall Protection"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true,
      redisCache: false
    }
  },
  {
    id: "wp-business",
    name: "WP Business",
    tierSubtitle: "Includes Redis Object Cache for WooCommerce and dynamic traffic",
    priceMonthly: 119,
    renewalPriceSame: true,
    popular: true,
    featuredBadge: "Best Value for WooCommerce",
    websites: "5 WordPress Sites",
    storage: "50 GB NVMe SSD",
    ram: "2.5 GB RAM",
    cpu: "2 Cores CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "25 Mailboxes",
    ctaText: "Deploy WP Business",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/wordpress-hosting/business",
    features: [
      "5 WordPress Installations",
      "50 GB Pure NVMe Storage",
      "Redis Object Cache Server Included",
      "LiteSpeed Enterprise + LSCache",
      "AccelerateWP Pro Active Caching",
      "1-Click WordPress Staging Environment",
      "WooCommerce Optimized Database Stack",
      "Free Automated Migration"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true,
      redisCache: true
    }
  },
  {
    id: "wp-performance",
    name: "WP Performance",
    tierSubtitle: "For heavy publishers, online courses and high-volume WooCommerce",
    priceMonthly: 229,
    renewalPriceSame: true,
    popular: false,
    websites: "10 WordPress Sites",
    storage: "100 GB NVMe SSD",
    ram: "4 GB RAM",
    cpu: "3 Cores CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "50 Mailboxes",
    ctaText: "Deploy WP Performance",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/wordpress-hosting/performance",
    features: [
      "10 WordPress Installations",
      "100 GB Pure NVMe Storage",
      "Dedicated Redis Object Cache Instance",
      "LiteSpeed Enterprise + HTTP/3 QUIC",
      "AccelerateWP Pro Performance Module",
      "Staging + Git Version Integration",
      "Free SSL, Daily JetBackup, Imunify360"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true,
      redisCache: true
    }
  },
  {
    id: "wp-ultimate",
    name: "WP Ultimate",
    tierSubtitle: "Maximum agency capacity for 25 high-traffic WordPress websites",
    priceMonthly: 379,
    renewalPriceSame: true,
    popular: false,
    websites: "25 WordPress Sites",
    storage: "250 GB NVMe SSD",
    ram: "6 GB RAM",
    cpu: "4 Cores CPU",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "Unlimited Mailboxes",
    ctaText: "Deploy WP Ultimate",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/wordpress-hosting/ultimate",
    features: [
      "25 WordPress Installations",
      "250 GB Enterprise NVMe SSD",
      "Redis Object Cache Instance Included",
      "LiteSpeed Enterprise + AccelerateWP Pro",
      "WP-CLI & SSH Developer Access",
      "Automated JetBackup Daily Restoration",
      "VIP Priority Support & Migrations"
    ],
    specsSummary: {
      cpanel: true,
      liteSpeed: true,
      freeSsl: true,
      dailyBackups: true,
      imunify360: true,
      redisCache: true
    }
  }
];

export const UNLIMITED_HOSTING_PLANS: HostingPlan[] = [
  {
    id: "unlimited-bronze",
    name: "Bronze Plan",
    tierSubtitle: "Unmetered NVMe storage for a single growing website",
    priceMonthly: 69,
    renewalPriceSame: true,
    popular: false,
    websites: "1 Website",
    storage: "Unmetered NVMe SSD*",
    ram: "1.5 GB RAM",
    cpu: "1 Core CPU",
    bandwidth: "Unmetered Bandwidth*",
    emailAccounts: "10 Mailboxes",
    ctaText: "Choose Bronze",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/unlimited-hosting/bronze",
    features: [
      "1 Website",
      "Unmetered NVMe Storage (Governed by FUP)",
      "Unmetered Monthly Bandwidth",
      "LiteSpeed Web Server",
      "cPanel Control Panel",
      "Free SSL & Daily Backups"
    ]
  },
  {
    id: "unlimited-gold",
    name: "Gold Plan",
    tierSubtitle: "Host 3 websites with unmetered storage and bandwidth",
    priceMonthly: 109,
    renewalPriceSame: true,
    popular: true,
    featuredBadge: "Most Popular",
    websites: "3 Websites",
    storage: "Unmetered NVMe SSD*",
    ram: "2 GB RAM",
    cpu: "1.5 Cores CPU",
    bandwidth: "Unmetered Bandwidth*",
    emailAccounts: "30 Mailboxes",
    ctaText: "Choose Gold",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/unlimited-hosting/gold",
    features: [
      "3 Websites",
      "Unmetered NVMe Storage (FUP compliant)",
      "Unmetered Bandwidth",
      "LiteSpeed Web Server",
      "Free SSL Certificates",
      "JetBackup Daily Backups"
    ]
  },
  {
    id: "unlimited-platinum",
    name: "Platinum Plan",
    tierSubtitle: "Host 5 websites with unmetered NVMe storage and mailboxes",
    priceMonthly: 139,
    renewalPriceSame: true,
    popular: false,
    websites: "5 Websites",
    storage: "Unmetered NVMe SSD*",
    ram: "3 GB RAM",
    cpu: "2 Cores CPU",
    bandwidth: "Unmetered Bandwidth*",
    emailAccounts: "50 Mailboxes",
    ctaText: "Choose Platinum",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/unlimited-hosting/platinum",
    features: [
      "5 Websites",
      "Unmetered NVMe Storage (FUP compliant)",
      "Unmetered Bandwidth",
      "LiteSpeed Web Server",
      "cPanel + Softaculous",
      "Imunify360 Protection"
    ]
  },
  {
    id: "unlimited-diamond",
    name: "Diamond Plan",
    tierSubtitle: "Host unlimited websites with unmetered disk and data transfer",
    priceMonthly: 179,
    renewalPriceSame: true,
    popular: false,
    websites: "Unlimited Websites*",
    storage: "Unmetered NVMe SSD*",
    ram: "4 GB RAM",
    cpu: "3 Cores CPU",
    bandwidth: "Unmetered Bandwidth*",
    emailAccounts: "Unlimited Mailboxes",
    ctaText: "Choose Diamond",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/unlimited-hosting/diamond",
    features: [
      "Unlimited Websites (Under Fair Use Policy)",
      "Unmetered NVMe Storage",
      "Unmetered Bandwidth",
      "LiteSpeed Enterprise",
      "Unlimited Mailboxes",
      "Free SSL & Daily Restores"
    ]
  }
];

export const RESELLER_HOSTING_PLANS: HostingPlan[] = [
  {
    id: "reseller-starter",
    name: "Reseller Starter",
    tierSubtitle: "Start your white-label hosting business with 25 cPanel accounts",
    priceMonthly: 299,
    renewalPriceSame: true,
    popular: false,
    websites: "25 cPanel Accounts",
    storage: "Unlimited NVMe SSD*",
    ram: "Allocated per cPanel",
    cpu: "Allocated per cPanel",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "Unlimited per cPanel",
    ctaText: "Start Reselling",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/reseller-hosting/starter",
    features: [
      "25 Separate cPanel Client Accounts",
      "Web Host Manager (WHM) Control",
      "Unlimited NVMe Storage (FUP)",
      "Unmetered Bandwidth",
      "100% White-Label (Custom Nameservers)",
      "LiteSpeed Web Server with LSCache",
      "Automated JetBackup Daily Restores",
      "Free WHMCS License on Annual Term"
    ]
  },
  {
    id: "reseller-growth",
    name: "Reseller Growth",
    tierSubtitle: "Scale up to 50 client cPanel accounts with full brand isolation",
    priceMonthly: 499,
    renewalPriceSame: true,
    popular: true,
    featuredBadge: "Recommended for Agencies",
    websites: "50 cPanel Accounts",
    storage: "Unlimited NVMe SSD*",
    ram: "Allocated per cPanel",
    cpu: "Allocated per cPanel",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "Unlimited per cPanel",
    ctaText: "Scale to Growth",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/reseller-hosting/growth",
    features: [
      "50 Separate cPanel Client Accounts",
      "WHM Admin Access with Account Packaging",
      "Unlimited NVMe Storage (FUP)",
      "Unmetered Bandwidth",
      "Private White-Label Nameservers",
      "LiteSpeed Web Server",
      "Automated JetBackup Daily Restores",
      "Free WHMCS License on Annual Term"
    ]
  },
  {
    id: "reseller-pro",
    name: "Reseller Pro",
    tierSubtitle: "Manage up to 100 client accounts with white-label WHM power",
    priceMonthly: 799,
    renewalPriceSame: true,
    popular: false,
    websites: "100 cPanel Accounts",
    storage: "Unlimited NVMe SSD*",
    ram: "Allocated per cPanel",
    cpu: "Allocated per cPanel",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "Unlimited per cPanel",
    ctaText: "Scale to Pro",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/reseller-hosting/pro",
    features: [
      "100 Separate cPanel Client Accounts",
      "WHM Admin Access",
      "Unlimited NVMe Storage (FUP)",
      "Unmetered Bandwidth",
      "Private Custom Nameservers",
      "LiteSpeed Enterprise & Imunify360",
      "Automated Daily JetBackups",
      "Free WHMCS License on Annual Term"
    ]
  },
  {
    id: "reseller-infinity",
    name: "Reseller Infinity",
    tierSubtitle: "Unlimited cPanel accounts for established web development agencies",
    priceMonthly: 1299,
    renewalPriceSame: true,
    popular: false,
    websites: "Unlimited cPanel Accounts*",
    storage: "Unlimited NVMe SSD*",
    ram: "Allocated per cPanel",
    cpu: "Allocated per cPanel",
    bandwidth: "Unmetered Bandwidth",
    emailAccounts: "Unlimited per cPanel",
    ctaText: "Order Reseller Infinity",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/reseller-hosting/infinity",
    features: [
      "Unlimited cPanel Accounts (Fair Use Policy)",
      "WHM Master Control Panel",
      "Unlimited NVMe SSD Storage",
      "Unmetered High-Speed Bandwidth",
      "100% White-Label Branding",
      "LiteSpeed Enterprise + CloudLinux",
      "Automated Daily JetBackups",
      "Free WHMCS License on Annual Term"
    ]
  }
];

export const VPS_HOSTING_PLANS: HostingPlan[] = [
  {
    id: "vps-spark",
    name: "VPS Spark",
    tierSubtitle: "Entry-level cloud VM with root access for testing & lightweight tools",
    priceMonthly: 499,
    setupFee: 249,
    renewalPriceSame: true,
    websites: "Custom (Root Access)",
    storage: "5 GB Fast SSD",
    ram: "512 MB RAM",
    cpu: "1 vCPU",
    bandwidth: "500 GB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Spark",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/spark",
    features: [
      "1 vCPU Core",
      "512 MB Dedicated RAM",
      "5 GB High-Speed Storage",
      "500 GB Monthly Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root SSH Access",
      "1 Gbps Network Port Speed",
      "Weekly Offsite Automated Backups",
      "Choice of Ubuntu, Debian, AlmaLinux"
    ],
    specsSummary: {
      cpanel: false,
      liteSpeed: false,
      freeSsl: true,
      dailyBackups: false,
      imunify360: false,
      rootAccess: true
    }
  },
  {
    id: "vps-pulse",
    name: "VPS Pulse",
    tierSubtitle: "Balanced starter VM for personal projects and small production tools",
    priceMonthly: 899,
    setupFee: 449,
    renewalPriceSame: true,
    websites: "Custom (Root Access)",
    storage: "10 GB Fast SSD",
    ram: "1 GB RAM",
    cpu: "1 vCPU",
    bandwidth: "750 GB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Pulse",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/pulse",
    features: [
      "1 vCPU Core",
      "1 GB Dedicated RAM",
      "10 GB High-Speed Storage",
      "750 GB Monthly Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root SSH Access",
      "1 Gbps Port Speed",
      "Weekly Offsite Automated Backups"
    ],
    specsSummary: {
      cpanel: false,
      liteSpeed: false,
      freeSsl: true,
      dailyBackups: false,
      imunify360: false,
      rootAccess: true
    }
  },
  {
    id: "vps-core",
    name: "VPS Core",
    tierSubtitle: "Most popular VPS for web apps, APIs and active microservices",
    priceMonthly: 1199,
    setupFee: 599,
    renewalPriceSame: true,
    popular: true,
    featuredBadge: "Most Popular VPS",
    websites: "Custom (Root Access)",
    storage: "20 GB Fast SSD",
    ram: "2 GB RAM",
    cpu: "2 vCPU",
    bandwidth: "1.5 TB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Core",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/core",
    features: [
      "2 vCPU Cores",
      "2 GB Dedicated RAM",
      "20 GB High-Speed Storage",
      "1.5 TB Monthly Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root SSH Access",
      "1 Gbps Port Speed",
      "Weekly Offsite Automated Backups"
    ],
    specsSummary: {
      cpanel: false,
      liteSpeed: false,
      freeSsl: true,
      dailyBackups: false,
      imunify360: false,
      rootAccess: true
    }
  },
  {
    id: "vps-power",
    name: "VPS Power",
    tierSubtitle: "4 GB RAM workhorse for growing traffic and multi-container workloads",
    priceMonthly: 2199,
    setupFee: 1099,
    renewalPriceSame: true,
    websites: "Custom (Root Access)",
    storage: "30 GB Fast SSD",
    ram: "4 GB RAM",
    cpu: "2 vCPU",
    bandwidth: "2 TB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Power",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/power",
    features: [
      "2 vCPU Cores",
      "4 GB Dedicated RAM",
      "30 GB High-Speed Storage",
      "2 TB Monthly Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root SSH Access",
      "1 Gbps Port Speed",
      "Weekly Offsite Automated Backups"
    ],
    specsSummary: {
      cpanel: false,
      liteSpeed: false,
      freeSsl: true,
      dailyBackups: false,
      imunify360: false,
      rootAccess: true
    }
  },
  {
    id: "vps-forge",
    name: "VPS Forge",
    tierSubtitle: "4 vCPUs and 4 GB RAM for compute-heavy tasks and background workers",
    priceMonthly: 2799,
    setupFee: 1399,
    renewalPriceSame: true,
    websites: "Custom (Root Access)",
    storage: "30 GB Fast SSD",
    ram: "4 GB RAM",
    cpu: "4 vCPU",
    bandwidth: "3 TB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Forge",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/forge",
    features: [
      "4 vCPU Cores",
      "4 GB Dedicated RAM",
      "30 GB Storage",
      "3 TB Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root Access",
      "1 Gbps Port Speed"
    ]
  },
  {
    id: "vps-surge",
    name: "VPS Surge",
    tierSubtitle: "High-memory 8 GB RAM instance for heavy databases and high concurrency",
    priceMonthly: 4499,
    setupFee: 2249,
    renewalPriceSame: true,
    websites: "Custom (Root Access)",
    storage: "60 GB Fast SSD",
    ram: "8 GB RAM",
    cpu: "4 vCPU",
    bandwidth: "4 TB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Surge",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/surge",
    features: [
      "4 vCPU Cores",
      "8 GB Dedicated RAM",
      "60 GB Storage",
      "4 TB Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root Access",
      "Weekly Backups"
    ]
  },
  {
    id: "vps-titan",
    name: "VPS Titan",
    tierSubtitle: "8 vCPUs and 8 GB RAM for enterprise microservices and heavy production",
    priceMonthly: 5499,
    setupFee: 2749,
    renewalPriceSame: true,
    websites: "Custom (Root Access)",
    storage: "60 GB Fast SSD",
    ram: "8 GB RAM",
    cpu: "8 vCPU",
    bandwidth: "5 TB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Titan",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/titan",
    features: [
      "8 vCPU Cores",
      "8 GB Dedicated RAM",
      "60 GB Storage",
      "5 TB Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root Access"
    ]
  },
  {
    id: "vps-apex",
    name: "VPS Apex",
    tierSubtitle: "Top-tier cloud compute for high-scale enterprise applications",
    priceMonthly: 8999,
    setupFee: 0,
    renewalPriceSame: true,
    websites: "Custom (Root Access)",
    storage: "120 GB Fast SSD",
    ram: "16 GB RAM",
    cpu: "8 vCPU",
    bandwidth: "8 TB Monthly Transfer",
    emailAccounts: "Self-Managed",
    ctaText: "Deploy VPS Apex",
    orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/vps/apex",
    features: [
      "8+ vCPU Cores",
      "16 GB Dedicated RAM",
      "120 GB High-Performance Storage",
      "8 TB Bandwidth",
      "1 Dedicated IPv4 Address",
      "Full Root SSH Access",
      "Priority Technical Support"
    ]
  }
];

