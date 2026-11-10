export interface TldPricing {
  tld: string;
  registerPrice: number;
  renewPrice: number;
  transferPrice: number;
  popular?: boolean;
  sale?: boolean;
  category: "popular" | "indian" | "business" | "tech";
  description: string;
}

export const DOMAIN_TLD_LIST: TldPricing[] = [
  {
    tld: ".in",
    registerPrice: 714,
    renewPrice: 779,
    transferPrice: 779,
    popular: true,
    sale: false,
    category: "indian",
    description: "India's official ccTLD. Ideal for targeting Indian consumers and establishing local authority."
  },
  {
    tld: ".com",
    registerPrice: 1169,
    renewPrice: 1299,
    transferPrice: 1299,
    popular: true,
    sale: false,
    category: "popular",
    description: "The global commercial gold standard. Instantly recognized by customers worldwide."
  },
  {
    tld: ".org",
    registerPrice: 1039,
    renewPrice: 1559,
    transferPrice: 1559,
    popular: false,
    sale: false,
    category: "popular",
    description: "The primary domain for non-profits, open-source software, communities, and institutions."
  },
  {
    tld: ".co.in",
    registerPrice: 649,
    renewPrice: 779,
    transferPrice: 779,
    popular: true,
    sale: false,
    category: "indian",
    description: "Trusted commercial extension for companies, traders, and entrepreneurs in India."
  },
  {
    tld: ".net",
    registerPrice: 1689,
    renewPrice: 1689,
    transferPrice: 1689,
    popular: false,
    sale: false,
    category: "tech",
    description: "Historic internet infrastructure extension, favored by networking, tech, and telecom firms."
  },
  {
    tld: ".xyz",
    registerPrice: 259,
    renewPrice: 2079,
    transferPrice: 2079,
    popular: false,
    sale: true,
    category: "tech",
    description: "Dynamic modern domain popular among developers, Web3 projects, and creative portfolios."
  },
  {
    tld: ".online",
    registerPrice: 199,
    renewPrice: 1899,
    transferPrice: 1899,
    popular: false,
    sale: true,
    category: "business",
    description: "Direct, memorable extension for bringing any offline business or brand into the digital realm."
  },
  {
    tld: ".info",
    registerPrice: 499,
    renewPrice: 1999,
    transferPrice: 1999,
    popular: false,
    sale: true,
    category: "business",
    description: "The standard top-level domain for information directories, product guides, and resource hubs."
  },
  {
    tld: ".store",
    registerPrice: 299,
    renewPrice: 2499,
    transferPrice: 2499,
    popular: false,
    sale: true,
    category: "business",
    description: "Purpose-built for retail, merchandise, and e-commerce storefronts."
  },
  {
    tld: ".tech",
    registerPrice: 399,
    renewPrice: 2799,
    transferPrice: 2799,
    popular: false,
    sale: true,
    category: "tech",
    description: "Modern extension designed specifically for tech startups, developers, and SaaS products."
  },
  {
    tld: ".site",
    registerPrice: 199,
    renewPrice: 1899,
    transferPrice: 1899,
    popular: false,
    sale: true,
    category: "business",
    description: "Versatile, affordable web extension suitable for any website, portfolio, or landing page."
  },
  {
    tld: ".biz",
    registerPrice: 899,
    renewPrice: 1599,
    transferPrice: 1599,
    popular: false,
    sale: false,
    category: "business",
    description: "Dedicated top-level domain for commercial businesses and corporate ventures."
  }
];
