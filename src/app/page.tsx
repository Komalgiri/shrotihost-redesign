import React from "react";
import Link from "next/link";
import {
  Server,
  Zap,
  ShieldCheck,
  RotateCcw,
  HardDrive,
  Lock,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  ShoppingBag,
  Cpu,
  Puzzle,
  Star,
  Layers,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { DomainSearchBar } from "@/components/home/DomainSearchBar";
import { HostingTabs } from "@/components/home/HostingTabs";
import { HOMEPAGE_FAQS } from "@/data/faqs";
import { INFRASTRUCTURE_PILLARS } from "@/data/hosting-features";
import { SERVICES_LIST } from "@/data/services";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO LANDMARK */}
      <section className="relative pt-12 sm:pt-20 pb-8 overflow-hidden">
        {/* Ambient lighting glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>NVMe PCIe Storage • LiteSpeed Web Servers • Same Renewal Price</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            High-Performance Cloud & NVMe Hosting in India.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience ultra-fast loading with LiteSpeed Enterprise and pure NVMe SSDs. We guarantee the <strong className="text-white font-semibold">exact same price on renewal</strong> with zero predatory rate hikes.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/shared-hosting"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Hosting from ₹49/mo
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="/services"
              leftIcon={<Layers className="w-4 h-4 text-cyan-400" />}
            >
              Custom Software Solutions
            </Button>
          </div>

          {/* Core Trust Metrics Strip */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">₹49/mo</p>
                <p className="text-xs text-slate-400 mt-1">Starting price</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">99.9%</p>
                <p className="text-xs text-slate-400 mt-1">High Uptime Target</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">7 Days</p>
                <p className="text-xs text-slate-400 mt-1">Money-back guarantee</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">MSME</p>
                <p className="text-xs text-slate-400 mt-1">Registered Enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE DOMAIN AVAILABILITY BAR */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-7xl mx-auto">
          <DomainSearchBar />
        </div>
      </section>

      {/* 3. CORE HOSTING MATRIX (INTERACTIVE TABS) */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Transparent Cloud Hosting"
            title="Engineered for Raw Speed, Priced for Growth"
            subtitle="Choose between NVMe shared hosting, managed WordPress, unmetered storage, white-label reseller, or dedicated root VPS instances."
          />

          <HostingTabs />
        </div>
      </section>

      {/* 4. EXPLODED INFRASTRUCTURE ARCHITECTURE STACK */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-slate-950/60 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Under The Hood"
            title="The Enterprise Hardware & Security Stack"
            subtitle="Every hosting plan is powered by a modern, isolated hardware and software pipeline designed for maximum uptime and sub-second response times."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INFRASTRUCTURE_PILLARS.map((pillar, idx) => (
              <FeatureCard
                key={idx}
                iconName={pillar.iconName}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>

          {/* Migration Highlight Banner */}
          <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Already Hosting Elsewhere? We Migrate Your Site for Free!
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  Our system engineers will transfer your cPanel files, MySQL databases, and emails with zero downtime.
                </p>
              </div>
            </div>

            <Button
              variant="accent"
              size="md"
              href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20would%20like%20to%20request%20free%20website%20migration%20support."
              isExternal={true}
              className="shrink-0 font-bold"
            >
              Request Free Migration
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SOFTWARE DEVELOPMENT & WHMCS MODULES SPOTLIGHT */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3.5">
                Precision Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Software & Web Development Services
              </h2>
              <p className="mt-3 text-base text-slate-400 max-w-2xl">
                We build modern digital products deployed straight onto our cloud hosting network—single partner from domain to production.
              </p>
            </div>

            <Link
              href="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Explore All Engineering Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                    {service.slug === "web-development" && <Globe className="w-6 h-6" />}
                    {service.slug === "app-development" && <Smartphone className="w-6 h-6" />}
                    {service.slug === "ecommerce-development" && <ShoppingBag className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs font-medium text-cyan-400 mb-3">{service.tagline}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Timeline: {service.turnaroundTime}</span>
                  <Link
                    href={`/${service.slug}`}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Proprietary WHMCS Modules Highlight */}
          <div className="mt-8 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-slate-900/90 to-indigo-950/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Puzzle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Featured Product
                </span>
                <h4 className="text-lg font-bold text-white">
                  WHMCS WhatsApp Notification Module (WaShroti) & Payment Surcharge
                </h4>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  Automate invoice reminders, OTPs, and ticket updates directly to clients via WhatsApp API. Used by web hosts across India and globally.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="md"
              href="/whmcs-modules"
              className="shrink-0"
            >
              Explore WHMCS Modules
            </Button>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED PUBLIC REVIEWS & CREDIBILITY */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-slate-950/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Radical Transparency"
            title="Independent Reviews & Verified Credentials"
            subtitle="We don't gate or fabricate customer testimonials. Review our public Trustpilot profile, government business registration, and direct engineer access."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-indigo-500/30">
              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-300 ml-2">Trustpilot Profile</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Public Trustpilot Reviews</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Check unfiltered reviews and customer feedback on our independent public Trustpilot profile. Every customer is invited to rate our server performance, migration speed, and support quality.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://www.trustpilot.com/review/shrotihost.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Read Trustpilot Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Registered Indian MSME</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Operating with full legal transparency as a verified micro-enterprise registered with the Ministry of Micro, Small & Medium Enterprises, Government of India.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">UDYAM-UP-36-0017127</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Direct Engineer Contact</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  No automated chatbots or call-center scripts. Get immediate answers to your technical hosting questions directly from infrastructure engineers over WhatsApp and priority tickets.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Chat: +91 95821 29099</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our cloud hosting, renewal policies, and migrations."
          />

          <FAQAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 8. BOTTOM CONVERSION CTA BANNER */}
      <CTASection
        eyebrow="7-Day Risk-Free Guarantee"
        title="Ready to Launch on India's Fastest NVMe Cloud?"
        subtitle="Sign up for our NVMe Shared Hosting starting at ₹49/month with our flat renewal guarantee. We migrate your site for free."
        primaryCtaText="Get Started Now"
        primaryCtaHref="/shared-hosting"
      />
    </div>
  );
}

