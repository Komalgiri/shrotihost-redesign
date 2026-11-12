export interface SpecRow {
  name: string;
  tooltip?: string;
  launch: string;
  grow: string;
  turbo: string;
  infinity: string;
}

export interface SpecCategory {
  title: string;
  rows: SpecRow[];
}

export const SHARED_HOSTING_SPECS: SpecCategory[] = [
  {
    title: "Core Resources & Limits",
    rows: [
      { name: "Websites Hosted", launch: "1 Website", grow: "5 Websites", turbo: "10 Websites", infinity: "25 Websites" },
      { name: "NVMe SSD Storage", launch: "10 GB NVMe", grow: "50 GB NVMe", turbo: "100 GB NVMe", infinity: "250 GB NVMe" },
      { name: "Dedicated RAM", launch: "1.5 GB", grow: "2.0 GB", turbo: "3.0 GB", infinity: "4.0 GB" },
      { name: "CPU Allocation", launch: "1.0 Core", grow: "1.5 Cores", turbo: "2.0 Cores", infinity: "3.0 Cores" },
      { name: "Bandwidth", launch: "Unmetered", grow: "Unmetered", turbo: "Unmetered", infinity: "Unmetered" },
      { name: "Entry Processes (EP)", launch: "20 EP", grow: "30 EP", turbo: "40 EP", infinity: "50 EP" },
      { name: "Inode Limit (Files)", launch: "250,000", grow: "350,000", turbo: "500,000", infinity: "750,000" },
      { name: "IO Speed", launch: "20 MB/s", grow: "30 MB/s", turbo: "50 MB/s", infinity: "100 MB/s" }
    ]
  },
  {
    title: "Server & Software Stack",
    rows: [
      { name: "Web Server", launch: "LiteSpeed Enterprise", grow: "LiteSpeed Enterprise", turbo: "LiteSpeed Enterprise", infinity: "LiteSpeed Enterprise" },
      { name: "Control Panel", launch: "cPanel Latest", grow: "cPanel Latest", turbo: "cPanel Latest", infinity: "cPanel Latest" },
      { name: "CloudLinux Isolation", launch: "Yes (CageFS)", grow: "Yes (CageFS)", turbo: "Yes (CageFS)", infinity: "Yes (CageFS)" },
      { name: "PHP Versions", launch: "PHP 7.4 - 8.3", grow: "PHP 7.4 - 8.3", turbo: "PHP 7.4 - 8.3", infinity: "PHP 7.4 - 8.3" },
      { name: "Node.js & Python Selector", launch: "Yes", grow: "Yes", turbo: "Yes", infinity: "Yes" },
      { name: "1-Click Installer", launch: "Softaculous (400+ Apps)", grow: "Softaculous (400+ Apps)", turbo: "Softaculous (400+ Apps)", infinity: "Softaculous (400+ Apps)" }
    ]
  },
  {
    title: "Security & Backups",
    rows: [
      { name: "SSL Certificate", launch: "Free Let's Encrypt", grow: "Free Let's Encrypt", turbo: "Free Let's Encrypt", infinity: "Free Let's Encrypt" },
      { name: "Automated Daily Backups", launch: "JetBackup Daily", grow: "JetBackup Daily", turbo: "JetBackup Daily", infinity: "JetBackup Daily" },
      { name: "Backup Retention", launch: "7 Days", grow: "14 Days", turbo: "30 Days", infinity: "30 Days" },
      { name: "Imunify360 WAF", launch: "Yes (Active Shield)", grow: "Yes (Active Shield)", turbo: "Yes (Active Shield)", infinity: "Yes (Active Shield)" },
      { name: "DDoS Protection", launch: "Advanced L3/L4", grow: "Advanced L3/L4", turbo: "Advanced L3/L4", infinity: "Advanced L3/L4" },
      { name: "DDoS Filtering Port", launch: "1 Gbps Port", grow: "1 Gbps Port", turbo: "1 Gbps Port", infinity: "1 Gbps Port" }
    ]
  },
  {
    title: "Email & Domains",
    rows: [
      { name: "Email Accounts", launch: "5 Accounts", grow: "20 Accounts", turbo: "50 Accounts", infinity: "Unlimited" },
      { name: "Subdomains", launch: "5 Subdomains", grow: "20 Subdomains", turbo: "50 Subdomains", infinity: "Unlimited" },
      { name: "MySQL Databases", launch: "5 Databases", grow: "20 Databases", turbo: "50 Databases", infinity: "Unlimited" },
      { name: "Webmail Access", launch: "Roundcube", grow: "Roundcube", turbo: "Roundcube", infinity: "Roundcube" },
      { name: "SpamAssassin Filter", launch: "Included", grow: "Included", turbo: "Included", infinity: "Included" }
    ]
  }
];

export const INFRASTRUCTURE_PILLARS = [
  {
    iconName: "Zap",
    title: "LiteSpeed Enterprise Web Server",
    description: "Event-driven architecture delivering up to 12x faster page response times and handling 4x more concurrent connections than Apache."
  },
  {
    iconName: "HardDrive",
    title: "Pure PCIe NVMe Storage",
    description: "Ultra-low latency solid-state drives delivering 3,500+ MB/s read/write throughput, eliminating database bottlenecks."
  },
  {
    iconName: "ShieldCheck",
    title: "CloudLinux OS + CageFS",
    description: "Each account is placed in its own secure virtualized lightweight container (LVE), preventing a noisy neighbor from consuming your CPU or RAM."
  },
  {
    iconName: "Lock",
    title: "Imunify360 Proactive Security",
    description: "Multi-layered defense with AI-driven Web Application Firewall (WAF), real-time malware scanner, and automatic botnet defense."
  },
  {
    iconName: "RotateCcw",
    title: "JetBackup Daily Snapshots",
    description: "Automated offsite daily backups with single-click self-service restores for files, databases, mailboxes, and DNS zones right from cPanel."
  },
  {
    iconName: "Clock",
    title: "99.9% Uptime Target",
    description: "LiteSpeed Enterprise, CloudLinux, and NVMe storage on redundant infrastructure. We publish a 99.9% uptime target—not a financial SLA."
  }
];

