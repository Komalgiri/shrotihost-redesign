import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  Flame,
  Infinity,
  Users,
  Layers,
  Terminal,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SharedHostingPricingSection } from "@/components/hosting/SharedHostingPricingSection";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { PageSection } from "@/components/ui/PageSection";

export const metadata: Metadata = {
  title: "Web Hosting Plans in India | NVMe LiteSpeed from ₹49/mo",
  description:
    "Compare ShrotiHost shared, WordPress, unlimited, reseller, master reseller, and VPS hosting. Flat renewal pricing, free SSL, and LiteSpeed NVMe on every line.",
  openGraph: {
    title: "Web Hosting Plans | ShrotiHost",
    description: "Honest INR hosting with LiteSpeed, NVMe, and same renewal price.",
    url: "https://shrotihost.in/hosting",
  },
};

const HOSTING_LINES = [
  {
    href: "/shared-hosting",
    title: "NVMe Shared Hosting",
    price: "From ₹49/mo",
    description: "cPanel + LiteSpeed for portfolios, blogs, and business sites.",
    icon: Server,
  },
  {
    href: "/wordpress-hosting",
    title: "Managed WordPress",
    price: "From ₹69/mo",
    description: "LSCache, AccelerateWP, and Redis on higher tiers.",
    icon: Flame,
  },
  {
    href: "/unlimited-hosting",
    title: "Unlimited NVMe",
    price: "From ₹69/mo",
    description: "Unmetered storage and bandwidth under transparent FUP.",
    icon: Infinity,
  },
  {
    href: "/reseller-hosting",
    title: "Reseller Hosting",
    price: "From ₹299/mo",
    description: "White-label WHM and cPanel accounts for agencies.",
    icon: Users,
  },
  {
    href: "/master-reseller-hosting",
    title: "Master Reseller",
    price: "From ₹599/mo",
    description: "Sell cPanel and sub-reseller WHM with overselling.",
    icon: Layers,
  },
  {
    href: "/vps",
    title: "Cloud VPS",
    price: "From ₹499/mo",
    description: "KVM servers with root SSH and weekly backups.",
    icon: Terminal,
  },
];

export default function HostingHubPage() {
  return (
    <div className="pb-16 section-surface-base text-[#F9FAFB]">
      <section className="relative pt-6 sm:pt-10 pb-12 overflow-hidden bg-tech-grid border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <Breadcrumbs items={[{ label: "Hosting" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4] mb-3">
              Live route: /hosting
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F9FAFB]">
              Fast hosting, priced honestly
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
              On the public site, this URL introduces NVMe shared hosting and links to every hosting product.
              Allocated CPU and RAM on every tier, LiteSpeed and NVMe, free SSL and migration—renewals match the
              price listed here.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/shared-hosting" size="lg">
                Compare shared plans
              </Button>
              <Button href="/domains" variant="secondary" size="lg">
                Register a domain
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PageSection tone="alt" border="y">
          <SectionHeading
            eyebrow="Product lines"
            title="Pick your hosting stack"
            subtitle="Same renewal price guarantee on every self-service plan. Taxes calculated at checkout on the client portal."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {HOSTING_LINES.map((line) => {
              const Icon = line.icon;
              return (
                <Link
                  key={line.href}
                  href={line.href}
                  className="group rounded-2xl border border-white/10 bg-[#111827] p-6 hover:border-[#4F46E5]/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/15 flex items-center justify-center text-[#818CF8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#06B6D4]">{line.price}</span>
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-[#F9FAFB] group-hover:text-white">
                    {line.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#9CA3AF]">{line.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#818CF8]">
                    View plans
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
      </PageSection>

      <PageSection tone="base" border="y">
        <SectionHeading
          eyebrow="Shared hosting"
          title="Simple, honest pricing"
          subtitle="Every plan renews at the price listed for your billing cycle. No increase later."
        />
        <SharedHostingPricingSection />
      </PageSection>

      <PageSection tone="alt" border="y">
        <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 shadow-card">
          <h2 className="text-lg font-bold text-[#F9FAFB]">Every plan includes</h2>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-[#9CA3AF]">
            {[
              "NVMe SSD storage",
              "Unmetered bandwidth (FUP applies)",
              "Free SSL certificates",
              "Daily JetBackup snapshots",
              "cPanel + Softaculous",
              "LiteSpeed + LSCache",
              "CloudLinux isolation",
              "Imunify360 + DDoS filtering",
              "Free website migration",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <RelatedHostingProducts currentHref="/hosting" />
    </div>
  );
}
