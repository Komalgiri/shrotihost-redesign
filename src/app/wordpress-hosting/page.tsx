import React from "react";
import { Metadata } from "next";
import {
  Flame,
  Zap,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { Button } from "@/components/ui/Button";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { WORDPRESS_HOSTING_PLANS } from "@/data/hosting-plans";

export const metadata: Metadata = {
  title: "Managed WordPress Hosting from ₹69/mo | Redis & LiteSpeed | ShrotiHost",
  description:
    "Ultra-fast Managed WordPress Hosting powered by LiteSpeed Enterprise, LSCache, and Redis Object Cache. Free SSL, daily JetBackups, and same-price renewals.",
  openGraph: {
    title: "Managed WordPress Hosting from ₹69/month | ShrotiHost",
    description:
      "Tuned for WordPress and WooCommerce speed. Pre-configured LiteSpeed Cache, AccelerateWP, and Redis Object Cache.",
    url: "https://shrotihost.in/wordpress-hosting",
  },
};

export default function WordPressHostingPage() {
  const wpFeatures = [
    {
      title: "LiteSpeed Cache (LSCache) Built-in",
      description: "Direct server-level caching that stores dynamic WordPress pages in RAM and serves them in under 50ms, bypassing PHP and MySQL bottlenecks.",
      iconName: "Zap"
    },
    {
      title: "Redis Object Cache Included",
      description: "Available on WP Business and above, dedicated Redis in-memory storage eliminates repetitive database queries for WooCommerce and dynamic sites.",
      iconName: "Database"
    },
    {
      title: "AccelerateWP Optimization Suite",
      description: "CloudLinux AccelerateWP automatically analyzes your WordPress plugins, detects slow database queries, and optimizes critical CSS rendering.",
      iconName: "Sparkles"
    },
    {
      title: "1-Click WordPress Staging",
      description: "Test plugin updates, theme modifications, and custom code in an isolated sandbox clone before pushing changes live with one click.",
      iconName: "Layers"
    },
    {
      title: "Imunify360 WordPress Defense",
      description: "Real-time WordPress firewall protecting against brute-force login attempts, XML-RPC exploits, vulnerability injections, and zero-day malware.",
      iconName: "Lock"
    },
    {
      title: "JetBackup Daily Restore Points",
      description: "Automated daily offsite backups with 1-click restoration for your entire WordPress directory, database tables, or individual files.",
      iconName: "RotateCcw"
    }
  ];

  const wpFaqs = [
    {
      question: "How is WordPress Hosting different from NVMe Shared Hosting?",
      answer: "While both run on our NVMe LiteSpeed infrastructure, WordPress Hosting is specifically pre-configured with WordPress-tuned server caches, AccelerateWP optimization tools, automated core and plugin updates, and Redis Object Cache on WP Business and higher tiers to maximize WooCommerce speed."
    },
    {
      question: "What is Redis Object Cache, and why is it important for WooCommerce?",
      answer: "When a customer browses a WooCommerce store or adds items to their shopping cart, standard page caching must be bypassed. Redis stores the results of complex database queries (like product inventories, customer carts, and pricing rules) directly in server RAM, allowing WooCommerce pages to load up to 5x faster."
    },
    {
      question: "Can I migrate my existing WordPress website for free?",
      answer: "Yes, 100% free. Once you purchase a plan, submit your WordPress admin or cPanel credentials. Our migration engineers will clone your database, files, and emails without any downtime or data loss."
    },
    {
      question: "Do you enforce same-price renewals on WordPress plans?",
      answer: "Yes! Like all our hosting tiers, our WordPress hosting plans feature flat-rate renewals. The price you pay upon initial registration (e.g. ₹69/mo or ₹119/mo) is the exact rate you pay on renewal."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-600/15 via-indigo-500/10 to-transparent blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/shared-hosting" },
              { label: "Managed WordPress Hosting" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/25 mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>LiteSpeed LSCache • AccelerateWP • Redis Object Cache</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Managed WordPress Hosting Tuned for Raw Speed
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Accelerate your blog, business portal, or WooCommerce storefront with LiteSpeed Enterprise and server-level Redis object caching. Guaranteed <strong className="text-white font-semibold">same renewal price forever</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Redis Object Cache
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                LSCache Pre-Configured
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                1-Click Staging & Cloning
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                Flat Renewal Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="WordPress Plans"
            title="Managed WordPress Hosting Tiers"
            subtitle="Choose the capacity you need. All plans include LiteSpeed Enterprise, free SSL, and daily JetBackup snapshots."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {WORDPRESS_HOSTING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORDPRESS SPEED & ARCHITECTURE HIGHLIGHTS */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-slate-950/60 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Platform Features"
            title="Built Exclusively for Modern WordPress & WooCommerce"
            subtitle="Eliminate slow plugins and server bottlenecks with our pre-tuned WordPress infrastructure stack."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {wpFeatures.map((feat, idx) => (
              <FeatureCard
                key={idx}
                iconName={feat.iconName}
                title={feat.title}
                description={feat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FREE WORDPRESS MIGRATION BANNER */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 sm:p-10 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Zero Downtime Transition
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Migrate Your WordPress Site to ShrotiHost For Free
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
              Our WordPress engineers will migrate your full database, theme files, uploads, and WooCommerce store seamlessly. We configure LSCache and Redis so your site flies from day one.
            </p>
          </div>

          <Button
            variant="accent"
            size="lg"
            href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20want%20to%20migrate%20my%20WordPress%20site."
            isExternal={true}
            className="shrink-0 font-bold"
          >
            Request Free WP Migration
          </Button>
        </div>
      </section>

      {/* 5. WORDPRESS FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="WordPress Hosting FAQs"
            subtitle="Common questions about WordPress performance, Redis caching, and plan limits."
          />

          <FAQAccordion items={wpFaqs} />
        </div>
      </section>

      {/* 6. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="wordpress-hosting" />

      {/* 7. BOTTOM CTA */}
      <CTASection
        eyebrow="Risk-Free WordPress Launch"
        title="Experience 5x Faster WordPress Loading Today"
        subtitle="Start with WP Starter at ₹69/mo or WP Business with Redis at ₹119/mo. 7-day money-back guarantee."
        primaryCtaText="Deploy WordPress Now"
        primaryCtaHref="#wp-starter"
      />
    </div>
  );
}
