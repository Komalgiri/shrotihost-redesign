import React from "react";
import { Metadata } from "next";
import {
  Server,
  Zap,
  ShieldCheck,
  RotateCcw,
  HardDrive,
  Lock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { SharedHostingPricingSection } from "@/components/hosting/SharedHostingPricingSection";
import { SHARED_HOSTING_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "NVMe Shared Hosting from ₹49/mo | Same Renewal Price | ShrotiHost",
  description:
    "High-speed NVMe shared web hosting powered by LiteSpeed Enterprise and cPanel. Includes free SSL, daily JetBackups, CloudLinux isolation, and flat-rate renewals.",
  openGraph: {
    title: "NVMe Shared Hosting from ₹49/month | ShrotiHost",
    description:
      "LiteSpeed Enterprise web server, NVMe SSD storage, cPanel control panel, and same price on renewal.",
    url: "https://shrotihost.in/shared-hosting",
  },
};

export default function SharedHostingPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/shared-hosting" },
              { label: "NVMe Shared Hosting" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>NVMe SSDs • LiteSpeed Enterprise • cPanel Latest</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              High-Performance NVMe Shared Hosting with Flat Renewal Pricing
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Deploy your website on enterprise LiteSpeed web servers and PCIe NVMe storage. Enjoy predictable billing with our <strong className="text-slate-950 font-bold">same-price-on-renewal guarantee</strong>.
            </p>

            {/* Trust Badges Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                cPanel + Softaculous
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                Imunify360 Security WAF
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Daily JetBackup Restores
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Free Website Migration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRICING & SPEC COMPARISON SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedHostingPricingSection />
        </div>
      </section>

      {/* 3. ARCHITECTURE DEEP DIVE: LITESPEED & CLOUDLINUX (Selective Dark Section) */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            isDark={true}
            eyebrow="Server Architecture"
            title="Why LiteSpeed + NVMe Outperforms Standard Hosting"
            subtitle="Engineered from the ground up to eliminate bottlenecks and accelerate WordPress, dynamic CMSs, and PHP scripts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              isDark={true}
              iconName="Zap"
              title="Event-Driven LiteSpeed Web Server"
              description="Unlike Apache, LiteSpeed processes thousands of concurrent HTTP requests with minimal memory overhead, cutting TTFB by up to 80%."
              badge="Speed"
            />
            <FeatureCard
              isDark={true}
              iconName="ShieldCheck"
              title="CloudLinux CageFS Isolation"
              description="Each cPanel account runs inside an isolated Lightweight Virtual Environment (LVE). A spike on another account never degrades your CPU or RAM."
              badge="Security"
            />
            <FeatureCard
              isDark={true}
              iconName="HardDrive"
              title="PCIe NVMe Gen4 Storage"
              description="Read and write throughput in excess of 3,500 MB/s ensures instantaneous MySQL database queries and lightning-fast file loads."
              badge="Hardware"
            />
          </div>
        </div>
      </section>

      {/* 4. FREE WEBSITE MIGRATION BANNER */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Zero Downtime Transition
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
              Switching from Another Host? We Handle Everything Free.
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
              Don&apos;t risk losing data or experiencing downtime. Provide your current cPanel backup or access details, and our technical migration specialists will migrate your websites, emails, and databases within hours.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20want%20to%20migrate%20my%20site%20to%20NVMe%20Shared%20Hosting."
            isExternal={true}
            className="shrink-0 font-bold"
          >
            Start Free Migration
          </Button>
        </div>
      </section>

      {/* 5. SHARED HOSTING FAQ */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Shared Hosting FAQs"
            subtitle="Get clear, straight answers to common questions about our shared hosting platform."
          />

          <FAQAccordion items={SHARED_HOSTING_FAQS} />
        </div>
      </section>

      {/* 6. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="shared-hosting" />

      {/* 7. BOTTOM CTA */}
      <CTASection
        eyebrow="Get Started Risk-Free"
        title="Launch Your Website on NVMe Shared Hosting Today"
        subtitle="Plans start at just ₹49/month with our flat renewal price guarantee and 7-day money-back assurance."
        primaryCtaText="Order Now from ₹49/mo"
        primaryCtaHref="#shared-launch"
      />
    </div>
  );
}
