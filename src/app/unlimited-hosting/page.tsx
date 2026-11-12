import React from "react";
import { Metadata } from "next";
import {
  Infinity,
  Zap,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Info,
  Lock,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { UNLIMITED_HOSTING_PLANS } from "@/data/hosting-plans";

export const metadata: Metadata = {
  title: "Unlimited NVMe Hosting from ₹69/mo | Unmetered Storage | ShrotiHost",
  description:
    "Unmetered NVMe SSD storage and data transfer with transparent Fair Use Policy. LiteSpeed web server, cPanel, and flat renewal prices with zero hikes.",
  openGraph: {
    title: "Unlimited NVMe Web Hosting | ShrotiHost",
    description:
      "Host your websites with unmetered NVMe SSD storage and bandwidth. Transparent fair-use rules and same-price renewals.",
    url: "https://shrotihost.in/unlimited-hosting",
  },
};

export default function UnlimitedHostingPage() {
  const fupPoints = [
    {
      title: "Legitimate Website Files",
      description: "Storage is designated for your active website files, scripts, databases, and media. Accounts may not be used as personal cloud backup drives or file-sharing hubs."
    },
    {
      title: "Fair Inode Capacity",
      description: "Generous inode limits (up to 500,000 files on Diamond) prevent runaway file proliferation while giving standard websites room to grow for years."
    },
    {
      title: "Proactive CloudLinux LVE Limits",
      description: "Each account enjoys guaranteed CPU and RAM isolation to ensure unmetered bandwidth never impacts server stability or neighboring clients."
    },
    {
      title: "Same Renewal Price Guarantee",
      description: "Unlike hosts that hike renewal rates by 400%, our unlimited hosting renews at the exact initial listed monthly cost."
    }
  ];

  const unlimitedFaqs = [
    {
      question: "What does 'Unlimited NVMe Storage' actually mean?",
      answer: "Unlimited (or unmetered) NVMe storage means we do not set a rigid gigabyte disk cap on your web files, images, and databases. As long as your files belong to your live, functioning website and comply with our Fair Use Policy, you will never receive disk quota overage fees."
    },
    {
      question: "Are there any file type restrictions on Unlimited Hosting?",
      answer: "Yes, consistent with industry standard hosting policies, your storage must not be used as an offsite backup repository, video distribution mirror, torrent seedbox, or public file-hosting service. Legitimate e-commerce catalogs, blogs, portfolios, and web apps are 100% compliant."
    },
    {
      question: "Can I host multiple domains on the Diamond Plan?",
      answer: "Yes! The Diamond plan allows you to host unlimited websites within your cPanel account using addon domains, all backed by unmetered NVMe storage and bandwidth."
    },
    {
      question: "What backup protection is provided?",
      answer: "Every unlimited hosting tier includes automated daily JetBackup snapshots stored offsite. You can restore your entire account, individual databases, or files directly from cPanel at any time."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 bg-[#0B0F19] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/shared-hosting" },
              { label: "Unlimited NVMe Hosting" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 mb-4 shadow-card">
              <Infinity className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Unmetered NVMe SSD • Unmetered Bandwidth • Transparent FUP</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F9FAFB] tracking-tight leading-tight">
              Unlimited NVMe Hosting with Transparent Policies
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Grow your web presence without worrying about disk quota overages. Powered by LiteSpeed Enterprise and protected by our <strong className="text-[#F9FAFB] font-bold">same renewal price guarantee</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-[#F9FAFB]">
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                Unmetered NVMe Disk
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                LiteSpeed Enterprise
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#4F46E5]" />
                cPanel + Softaculous
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Flat Renewal Rates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Unlimited Plans"
            title="Unmetered Storage Packages"
            subtitle="Choose between Bronze, Gold, Platinum, and Diamond tiers based on how many websites you wish to host."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {UNLIMITED_HOSTING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENT FAIR USE POLICY (FUP) CALLOUT BOX */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-950">Our Fair Use Policy (FUP), Explained Honestly</h3>
              <p className="text-xs sm:text-sm text-slate-500">Zero fine-print surprises: understand how unmetered resources work.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {fupPoints.map((point, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>{point.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UNLIMITED FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Unlimited Hosting FAQs"
            subtitle="Clear answers about storage allowances, inodes, and usage parameters."
          />

          <FAQAccordion items={unlimitedFaqs} />
        </div>
      </section>

      {/* 5. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="unlimited-hosting" />

      {/* 6. BOTTOM CTA */}
      <CTASection
        eyebrow="Unmetered Freedom"
        title="Host Without Storage Limits Starting at ₹69/mo"
        subtitle="Backed by LiteSpeed NVMe performance, cPanel control, and our 7-day money-back guarantee."
        primaryCtaText="Choose Your Unlimited Plan"
        primaryCtaHref="#unlimited-bronze"
      />
    </div>
  );
}
