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
  Shield,
  Activity,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { DomainSearchBar } from "@/components/home/DomainSearchBar";
import { HostingTabs } from "@/components/home/HostingTabs";
import { InfrastructureVisualizer } from "@/components/home/InfrastructureVisualizer";
import { HostingCategoryShowcase } from "@/components/home/HostingCategoryShowcase";
import { HOMEPAGE_FAQS } from "@/data/faqs";
import { INFRASTRUCTURE_PILLARS } from "@/data/hosting-features";
import { SERVICES_LIST } from "@/data/services";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. DISTINCTIVE SPLIT-LAYOUT HERO */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-slate-200/80 bg-white overflow-hidden">
        {/* Subtle background technical grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: Editorial Presentation & Copy */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-left">
              {/* Refined Announcement Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Next-Gen NVMe Cloud Infrastructure • India Datacenter</span>
              </div>

              {/* Editorial Headline with controlled line breaks */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
                Cloud hosting and software engineering,{" "}
                <span className="text-indigo-600">built with purpose.</span>
              </h1>

              {/* Convincing Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Enterprise-grade LiteSpeed NVMe servers engineered for sub-second load times with flat-rate renewals — zero predatory price hikes. Backed by verified Indian MSME credentials and hands-on senior engineering.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  href="/shared-hosting"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold shadow-sm"
                >
                  Explore Hosting from ₹49/mo
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href="/services"
                  leftIcon={<Layers className="w-4 h-4 text-indigo-600" />}
                  className="font-semibold"
                >
                  Explore Software Solutions
                </Button>
              </div>

              {/* Clean Trust Indicators Strip */}
              <div className="pt-8 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-slate-950 leading-none">₹49/mo</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Flat Renewal Rate</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-slate-950 leading-none">99.9%</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">High Uptime Target</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600 shrink-0">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-slate-950 leading-none">7 Days</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Money-Back Guarantee</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-slate-950 leading-none">MSME</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Govt. Verified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Infrastructure & Server Telemetry Visualizer */}
            <div className="lg:col-span-6 xl:col-span-5">
              <InfrastructureVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTEGRATED DOMAIN DISCOVERY SUITE */}
      <section className="relative py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DomainSearchBar />
        </div>
      </section>

      {/* 3. HOSTING CATEGORY SHOWCASE (Architectural Feature Grid) */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Comprehensive Cloud Portfolio"
            title="Engineered for Raw Speed, Priced for Long-Term Growth"
            subtitle="Whether launching a single portfolio or managing a multi-tenant client cluster, deploy on purpose-built NVMe hardware with transparent, predictable pricing."
          />

          <HostingCategoryShowcase />
        </div>
      </section>

      {/* 4. FEATURED HOSTING PLANS & INTERACTIVE MATRIX */}
      <section className="relative py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transparent Tiered Plans"
            title="Compare Plans & Select Your Cloud Environment"
            subtitle="Explore our most popular hosting tiers across Shared, WordPress, Unlimited, Reseller, and VPS configurations with real-time billing toggles."
          />

          <HostingTabs />
        </div>
      </section>

      {/* 5. SELECTIVE DARK SECTION: INFRASTRUCTURE & HARDWARE BLUEPRINT */}
      <section className="relative py-20 sm:py-28 bg-[#0B0F19] text-white border-y border-slate-800 overflow-hidden">
        {/* Subtle dark technical grid */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            isDark={true}
            eyebrow="Under The Hood"
            title="Enterprise Hardware & Resilient Security Stack"
            subtitle="Every hosting account runs on isolated, high-frequency infrastructure engineered for sub-second latency and zero cross-tenant contamination."
          />

          {/* 6 Technical Architecture Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INFRASTRUCTURE_PILLARS.map((pillar, idx) => (
              <FeatureCard
                key={idx}
                isDark={true}
                iconName={pillar.iconName}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>

          {/* Integrated Zero-Downtime Migration Banner */}
          <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Already Hosting Elsewhere? We Migrate Your Site for Free!
                </h4>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  Our system engineers will transfer your cPanel files, MySQL databases, and DNS routing with zero downtime. Simply send us your current cPanel backup.
                </p>
              </div>
            </div>

            <Button
              variant="dark-primary"
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

      {/* 6. SOFTWARE & DIGITAL ENGINEERING SERVICES (Editorial Showcase) */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-50 text-cyan-700 border border-cyan-200 mb-3">
                Full-Stack Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Software & Web Development Services
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                We build modern digital products deployed straight onto our cloud hosting network — a single technical partner from domain registration to production deployment.
              </p>
            </div>

            <Link
              href="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <span>Explore All Engineering Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Primary Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 mb-5">
                    {service.slug === "web-development" && <Globe className="w-6 h-6" />}
                    {service.slug === "app-development" && <Smartphone className="w-6 h-6" />}
                    {service.slug === "ecommerce-development" && <ShoppingBag className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">{service.title}</h3>
                  <p className="text-xs font-semibold text-cyan-700 mb-3">{service.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Timeline: {service.turnaroundTime}</span>
                  <Link
                    href={`/${service.slug}`}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Proprietary WHMCS Modules Highlight */}
          <div className="mt-8 rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0">
                <Puzzle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                  Specialized WHMCS Modules
                </span>
                <h4 className="text-lg font-bold text-slate-950">
                  WHMCS WhatsApp Notification Module (WaShroti) & Smart Payment Surcharge
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  Automate invoice reminders, OTPs, and ticket updates directly to clients via WhatsApp API. Used by web hosts across India and globally.
                </p>
              </div>
            </div>

            <Button
              variant="secondary"
              size="md"
              href="/whmcs-modules"
              className="shrink-0 font-semibold"
            >
              Explore WHMCS Modules
            </Button>
          </div>
        </div>
      </section>

      {/* 7. RADICAL TRANSPARENCY & WHY SHROTIHOST */}
      <section className="relative py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Radical Transparency"
            title="Independent Reviews & Verified Business Credentials"
            subtitle="We don't gate or fabricate customer testimonials. Review our public Trustpilot profile, government MSME credentials, and direct senior engineer support."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Trustpilot */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-1.5 text-emerald-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500" />
                  ))}
                  <span className="text-xs font-semibold text-slate-700 ml-2">Trustpilot Profile</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Public Trustpilot Reviews</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Check unfiltered reviews and customer feedback on our independent public Trustpilot profile. Every customer is invited to rate our server performance, migration speed, and support quality.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://www.trustpilot.com/review/shrotihost.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <span>Read Trustpilot Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: MSME Government Verification */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Registered Indian MSME</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Operating with full legal transparency as a verified micro-enterprise registered with the Ministry of Micro, Small & Medium Enterprises, Government of India.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600 font-semibold">UDYAM-UP-36-0017127</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Card 3: Direct Engineer Access */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Direct Engineer Contact</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  No automated chatbots or generic call-center scripts. Get immediate answers to your technical hosting questions directly from infrastructure engineers over WhatsApp and priority tickets.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>Chat: +91 95821 29099</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our cloud hosting, renewal policies, and migrations."
          />

          <FAQAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 9. BOTTOM CONVERSION CTA BANNER */}
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
