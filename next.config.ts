import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/refund",
        permanent: true,
      },
      {
        source: "/cancellation-policy",
        destination: "/refund",
        permanent: true,
      },
      {
        source: "/vps-hosting",
        destination: "/vps",
        permanent: true,
      },
      {
        source: "/domain-registration",
        destination: "/domains",
        permanent: true,
      },
      {
        source: "/domain",
        destination: "/domains",
        permanent: true,
      },
      {
        source: "/whmcs",
        destination: "/whmcs-modules",
        permanent: true,
      },
      {
        source: "/aup",
        destination: "/acceptable-use-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

