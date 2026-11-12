import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  Zap,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Activity,
  Cpu,
  Database,
  Layers,
  Lock,
  RefreshCw,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { WORDPRESS_HOSTING_PLANS } from "@/data/hosting-plans";
import { PageSection } from "@/components/ui/PageSection";
import { PillarCard } from "@/components/ui/PillarCard";

export const metadata: Metadata = {
  title: "Managed WordPress Hosting from ₹69/mo | LiteSpeed + LSCache | ShrotiHost",
  description:
    "Blazing-fast LiteSpeed WordPress hosting with Redis Object Caching, AccelerateWP, 1-click staging, free migrations, and permanent same-price renewals.",
  openGraph: {
    title: "Managed WordPress Hosting | LiteSpeed NVMe | ShrotiHost",
    description:
      "Enterprise WordPress cloud infrastructure pre-tuned for WooCommerce. Flat renewal price guarantee.",
    url: "https://shrotihost.in/wordpress-hosting",
  },
};

export default function WordPressHostingPage() {
  const wpFaqs = [
    {
      question: "How is WordPress Hosting different from NVMe Shared Hosting?",
      answer:
        "While both run on our NVMe LiteSpeed infrastructure, WordPress Hosting is specifically pre-configured with WordPress-tuned server caches, AccelerateWP optimization tools, automated core and plugin updates, and Redis Object Cache on WP Business and higher tiers to maximize WooCommerce speed.",
    },
    {
      question: "What is Redis Object Cache, and why is it important for WooCommerce?",
      answer:
        "When a customer browses a WooCommerce store or adds items to their shopping cart, standard page caching must be bypassed. Redis stores the results of complex database queries (like product inventories, customer carts, and pricing rules) directly in server RAM, allowing WooCommerce pages to load up to 5x faster.",
    },
    {
      question: "Can I migrate my existing WordPress website for free?",
      answer:
        "Yes, 100% free. Once you purchase a plan, submit your WordPress admin or cPanel credentials. Our migration engineers will clone your database, files, and emails without any downtime or data loss.",
    },
    {
      question: "Do you enforce same-price renewals on WordPress plans?",
      answer:
        "Yes! Like all our hosting tiers, our WordPress hosting plans feature flat-rate renewals. The price you pay upon initial registration (e.g. ₹69/mo or ₹119/mo) is the exact rate you pay on renewal.",
    },
  ];

  return (
    <div className="pb-16 section-surface-base text-[#F9FAFB]">
      {/* 1. ASYMMETRIC SPLIT HERO WITH WORDPRESS SPEED TELEMETRY */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 bg-[#0B0F19] border-b border-white/5 overflow-hidden">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/hosting" },
              { label: "Managed WordPress" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mt-6 lg:mt-10">
            {/* LEFT COLUMN: Editorial Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>MANAGED LITESPEED WORDPRESS INFRASTRUCTURE</span>
              </div>

              {/* Exact Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.15]">
                Managed WordPress Cloud Tuned for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
                  Raw Speed & WooCommerce.
                </span>
              </h1>

              {/* Subtitle Copy */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-[#F9FAFB] font-normal leading-relaxed">
                  Accelerate your storefront, agency portfolio, or publication with LiteSpeed Enterprise and dedicated Redis Object Caching.
                </p>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-xl">
                  Built to handle WooCommerce flash sales and viral traffic bursts without slowdowns. Flat-rate renewals with zero price surprises.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#plans"
                  className="bg-[#4F46E5] hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore WP Plans from ₹69/mo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20have%20questions%20about%20Managed%20WordPress%20Hosting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111827] hover:bg-[#1F2937] text-white border border-white/10 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF]" />
                </a>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
                <div>
                  <p className="text-xl font-bold text-[#F9FAFB] leading-none">
                    ₹69<span className="text-xs font-normal text-[#9CA3AF]">/mo</span>
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Flat renewal rate</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-[#F9FAFB] leading-none">LSCache</p>
                  <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Server-level cache</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-[#F9FAFB] leading-none">Redis</p>
                  <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Object cache ready</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs font-semibold text-[#10B981]">1-Click</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-1 font-medium">Staging & cloning</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: WordPress Speed Telemetry Widget */}
            <div className="lg:col-span-5">
              <div className="relative w-full max-w-lg lg:max-w-[580px] lg:ml-auto select-none">
                {/* Latency Pill */}
                <div className="flex justify-end mb-3 pr-2">
                  <div className="inline-flex items-center gap-3 bg-[#111827]/90 border border-white/10 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-md">
                    <div className="w-7 h-7 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#9CA3AF]">
                        WordPress Benchmark
                      </span>
                      <span className="text-xs font-bold text-[#F9FAFB] leading-none mt-0.5">
                        48 ms TTFB • LSCache Active
                      </span>
                    </div>
                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md ml-1">
                      -80% Time
                    </span>
                  </div>
                </div>

                {/* Main Telemetry Box */}
                <div className="rounded-3xl bg-[#111827]/90 border border-white/10 p-6 sm:p-7 shadow-2xl backdrop-blur-xl text-left space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[#F9FAFB] font-mono">
                        wp-node02.shrotihost.in
                      </h3>
                      <p className="text-xs text-[#9CA3AF] mt-0.5 font-medium">
                        LiteSpeed Web Server + AccelerateWP Engine
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      WooCommerce Tuned
                    </span>
                  </div>

                  {/* Two Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Metric 1: LSCache Speed */}
                    <div className="bg-[#0B0F19]/90 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#9CA3AF]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                          PAGE CACHE HIT
                        </span>
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="my-2.5">
                        <span className="text-3xl font-extrabold text-[#F9FAFB] tracking-tight block">
                          98.6%
                        </span>
                        {/* Amber Segmented Bar */}
                        <div className="flex items-center gap-1 mt-2.5">
                          {Array.from({ length: 9 }).map((_, idx) => (
                            <span
                              key={idx}
                              className="h-1.5 flex-1 rounded-[2px] bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]"
                            />
                          ))}
                          <span className="h-1.5 flex-1 rounded-[2px] bg-[#1F2937]" />
                        </div>
                      </div>
                      <span className="text-[10px] text-amber-400 font-semibold">
                        ● Direct RAM Delivery
                      </span>
                    </div>

                    {/* Metric 2: Redis In-Memory Object Cache */}
                    <div className="bg-[#0B0F19]/90 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#9CA3AF]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                          REDIS CACHE
                        </span>
                        <Database className="w-3.5 h-3.5 text-[#06B6D4]" />
                      </div>
                      <div className="my-2.5">
                        <span className="text-3xl font-extrabold text-[#F9FAFB] tracking-tight block">
                          0.4 ms
                        </span>
                        <div className="w-full h-1.5 bg-[#1F2937] rounded-full overflow-hidden mt-3">
                          <div className="h-full bg-gradient-to-r from-[#06B6D4] to-[#4F46E5] rounded-full w-[95%]" />
                        </div>
                      </div>
                      <span className="text-[10px] text-[#06B6D4] font-medium">
                        Instant DB Lookups
                      </span>
                    </div>
                  </div>

                  {/* Feature Strip */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#9CA3AF]">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>AccelerateWP</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span>1-Click Staging</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Imunify360 WAF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection id="plans" tone="alt" className="scroll-mt-24" border="y">
        <SectionHeading
          eyebrow="WordPress Plans"
          title="Managed WordPress Hosting Tiers"
          subtitle="Choose the capacity you need. All plans include LiteSpeed Enterprise, free SSL certificates, and daily JetBackup snapshots."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {WORDPRESS_HOSTING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </PageSection>

      <PageSection tone="base" border="y">
        <SectionHeading
          eyebrow="Platform Features"
          title="Built Exclusively for Modern WordPress & WooCommerce"
          subtitle="Eliminate slow plugins and database bottlenecks with our pre-tuned WordPress infrastructure stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 pt-6">
          <PillarCard
            accent="cyan"
            icon={<Flame className="w-6 h-6 text-amber-400" />}
            title="LiteSpeed Cache (LSCache)"
            footer={<span className="text-xs text-amber-400 font-semibold">Integrated LSCache Plugin</span>}
          >
            Direct server-level caching that stores dynamic WordPress pages in server RAM and serves them in under 50ms, completely bypassing slow PHP compilation.
          </PillarCard>
          <PillarCard
            accent="cyan"
            icon={<Database className="w-6 h-6" />}
            title="Redis Object Cache"
            footer={<span className="text-xs text-[#06B6D4] font-semibold">Accelerated WooCommerce Speed</span>}
          >
            Dedicated in-memory Redis instances eliminate repetitive database queries for WooCommerce carts, product inventories, and dynamic customer sessions.
          </PillarCard>
          <PillarCard
            accent="emerald"
            icon={<Layers className="w-6 h-6" />}
            title="1-Click Staging & Defense"
            footer={<span className="text-xs text-[#10B981] font-semibold">Zero Live Site Risk</span>}
          >
            Test new plugins and themes in an isolated staging sandbox before pushing changes live. Real-time Imunify360 WAF stops brute-force exploits automatically.
          </PillarCard>
        </div>
      </PageSection>

      <PageSection tone="alt" border="y">
        <div className="bg-[#111827] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Zero Downtime Transition
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB] tracking-tight">
              Migrate Your WordPress Site to ShrotiHost For Free
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl leading-relaxed">
              Our WordPress systems engineers will migrate your full database, theme files, uploads, and WooCommerce store seamlessly. We configure LSCache and Redis so your site flies from day one.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20want%20to%20migrate%20my%20WordPress%20site."
            isExternal={true}
            className="shrink-0 font-bold bg-[#4F46E5] hover:bg-[#4338CA] shadow-lg shadow-indigo-600/30"
          >
            Request Free WP Migration
          </Button>
        </div>
      </PageSection>

      <PageSection tone="base" border="y">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Editorial Header */}
            <div className="lg:col-span-5 text-left space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                <span className="w-5 h-0.5 bg-amber-400" />
                <span>WORDPRESS ANSWERS, NO HYPE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.18]">
                Frequently Asked{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
                  Questions.
                </span>
              </h2>

              <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm pt-2">
                Have questions about LiteSpeed caching, Redis object memory, or WooCommerce migration? Ask our WordPress team.
              </p>

              <div className="pt-4">
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F9FAFB] hover:text-amber-400 transition-colors group"
                >
                  <span>Chat with an engineer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Numbered Accordion List */}
            <div className="lg:col-span-7">
              <FAQAccordion items={wpFaqs} />
            </div>
          </div>
      </PageSection>

      {/* 6. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="wordpress-hosting" />

      {/* 7. SIGNATURE BOTTOM CTA */}
      <CTASection
        eyebrow="YOUR NEXT CHAPTER STARTS HERE"
        title="Let's build something"
        highlightText="worth remembering."
        subtitle="Hosting a new idea or engineering what comes next? We're ready when you are."
        primaryCtaText="Explore hosting"
        primaryCtaHref="#plans"
        secondaryCtaText="Start a WhatsApp chat"
        secondaryCtaHref="https://wa.me/919582129099"
        phoneNote="+91 95821 29099 · Real people, real answers"
      />
    </div>
  );
}
