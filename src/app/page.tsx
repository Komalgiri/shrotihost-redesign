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
  Cpu,
  Star,
  Sparkles,
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
import { PageSection } from "@/components/ui/PageSection";
import { DomainSearchBar } from "@/components/home/DomainSearchBar";
import { HostingTabs } from "@/components/home/HostingTabs";
import { InfrastructureVisualizer } from "@/components/home/InfrastructureVisualizer";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { HostingCategoryShowcase } from "@/components/home/HostingCategoryShowcase";
import { ServicesEngineeringShowcase } from "@/components/home/ServicesEngineeringShowcase";
import { HOMEPAGE_FAQS } from "@/data/faqs";
import { INFRASTRUCTURE_PILLARS } from "@/data/hosting-features";

export default function HomePage() {
  return (
    <div className="space-y-0 section-surface-base text-[#F9FAFB]">
      {/* 1. DISTINCTIVE HERO SECTION MATCHING SCREENSHOT */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-white/5 section-surface-base overflow-hidden">
        {/* Subtle background technical grid */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: Editorial Presentation & Copy matching reference */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                <Sparkles className="w-4 h-4 text-[#06B6D4]" />
                <span>INDIAN CLOUD. ENGINEERED WITH PURPOSE.</span>
              </div>

              {/* Exact Headline styled with reference decorative accent */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.12]">
                Infrastructure that{" "}
                <br className="hidden sm:inline" />
                moves you{" "}
                <span className="inline-block relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A5B4FC]">
                    forward
                  </span>
                  <span className="absolute -top-1 -right-4 sm:-right-5 text-[#818CF8] font-light text-2xl sm:text-3xl select-none">
                    ˊ
                  </span>
                </span>
              </h1>

              {/* Subtitle Copy */}
              <div className="space-y-2 max-w-xl">
                <p className="text-sm sm:text-base text-[#F9FAFB] font-normal leading-relaxed">
                  High-speed cloud hosting and custom software engineering, built for businesses that expect more.
                </p>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  Enterprise LiteSpeed NVMe servers. Flat-rate renewals, always. Sub-second performance backed by senior engineering support.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/shared-hosting"
                  className="bg-[#4F46E5] hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore hosting from ₹49/mo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="bg-[#111827] hover:bg-[#1F2937] text-white border border-white/10 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore software</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF]" />
                </Link>
              </div>

              {/* Clean Trust Indicators Strip matching "Trusted by" row */}
              <div className="pt-8 border-t border-white/10 max-w-2xl">
                <span className="text-xs uppercase font-bold tracking-wider text-[#9CA3AF] block mb-3.5">
                  Trusted Platform Guarantees
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-[#F9FAFB] leading-none">₹49<span className="text-xs font-normal text-[#9CA3AF]">/mo</span></p>
                    <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Flat renewal rate</p>
                  </div>

                  <div>
                    <p className="text-xl sm:text-2xl font-black text-[#F9FAFB] leading-none">99.9%</p>
                    <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Uptime target</p>
                  </div>

                  <div>
                    <p className="text-xl sm:text-2xl font-black text-[#F9FAFB] leading-none">7 days</p>
                    <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Money-back promise</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-[#10B981]" />
                      <span className="text-xs font-semibold text-[#10B981]">Govt. verified</span>
                    </div>
                    <p className="text-xs text-[#9CA3AF] mt-1 font-medium">MSME registered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Dual Organic Curved Arches & Floating UI Widgets */}
            <div className="lg:col-span-6 xl:col-span-6">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTEGRATED DOMAIN DISCOVERY SUITE */}
      <PageSection tone="alt" size="compact" border="y">
        <SectionHeading
          centered={false}
          className="mb-8 max-w-2xl"
          eyebrow="Domain discovery"
          title="Find your domain with transparent renewal pricing"
          subtitle="Search .in, .com, and popular TLDs—first-year and renewal rates shown before you leave this site."
        />
        <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 shadow-card">
          <DomainSearchBar />
        </div>
      </PageSection>

      {/* 3. HOSTING CATEGORY SHOWCASE (Architectural Feature Grid) */}
      <PageSection tone="base" border="y">
        <SectionHeading
          eyebrow="Comprehensive Cloud Portfolio"
          title="Engineered for Raw Speed, Priced for Long-Term Growth"
          subtitle="Whether launching a single portfolio or managing a multi-tenant client cluster, deploy on purpose-built NVMe hardware with transparent, predictable pricing."
        />

        <HostingCategoryShowcase />
      </PageSection>

      {/* 4. FEATURED HOSTING PLANS & INTERACTIVE MATRIX */}
      <PageSection tone="alt" border="y">
        <HostingTabs />
      </PageSection>

      {/* 5. SELECTIVE DARK SECTION: INFRASTRUCTURE & HARDWARE BLUEPRINT */}
      <PageSection tone="base" border="y" withGrid className="py-20 sm:py-28 text-white">
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
          <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-[#111827] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Already Hosting Elsewhere? We Migrate Your Site for Free!
                </h4>
                <p className="text-sm text-[#9CA3AF] mt-1 max-w-2xl">
                  Our system engineers will transfer your cPanel files, MySQL databases, and DNS routing with zero downtime. Simply send us your current cPanel backup.
                </p>
              </div>
            </div>

            <Button
              variant="dark-primary"
              size="md"
              href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20would%20like%20to%20request%20free%20website%20migration%20support."
              isExternal={true}
              className="shrink-0 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-indigo-600/20"
            >
              Request Free Migration
            </Button>
          </div>
      </PageSection>

      <PageSection tone="alt" size="compact" border="y">
        <ServicesEngineeringShowcase />
      </PageSection>

      {/* 7. RADICAL TRANSPARENCY & WHY SHROTIHOST */}
      <PageSection tone="base" border="y">
          <SectionHeading
            eyebrow="Radical Transparency"
            title="Independent Reviews & Verified Business Credentials"
            subtitle="We don't gate or fabricate customer testimonials. Review our public Trustpilot profile, government MSME credentials, and direct senior engineer support."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Trustpilot */}
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] transition-all">
              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#10B981] text-[#10B981]" />
                  ))}
                  <span className="text-xs font-semibold text-[#9CA3AF] ml-2">Trustpilot Profile</span>
                </div>
                <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">Public Trustpilot Reviews</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  Check unfiltered reviews and customer feedback on our independent public Trustpilot profile. Every customer is invited to rate our server performance, migration speed, and support quality.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <a
                  href="https://www.trustpilot.com/review/shrotihost.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#06B6D4] hover:text-cyan-300 transition-colors"
                >
                  <span>Read Trustpilot Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: MSME Government Verification */}
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] transition-all">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#4F46E5] mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">Registered Indian MSME</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  Operating with full legal transparency as a verified micro-enterprise registered with the Ministry of Micro, Small & Medium Enterprises, Government of India.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#06B6D4] font-semibold">UDYAM-UP-36-0017127</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Card 3: Direct Engineer Access */}
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] transition-all">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#10B981] mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">Direct Engineer Contact</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  No automated chatbots or generic call-center scripts. Get immediate answers to your technical hosting questions directly from infrastructure engineers over WhatsApp and priority tickets.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#10B981] hover:text-emerald-400 transition-colors"
                >
                  <span>Chat: +91 95821 29099</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
      </PageSection>

      {/* 8. FREQUENTLY ASKED QUESTIONS - MATCHING REFERENCE SCREENSHOT */}
      <PageSection tone="alt" className="py-20 lg:py-28" border="y">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Editorial Header & Support Anchor */}
            <div className="lg:col-span-5 text-left space-y-4 lg:sticky lg:top-28">
              {/* Eyebrow Line */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                <span className="w-5 h-0.5 bg-[#06B6D4]" />
                <span>GOOD QUESTIONS, CLEAR ANSWERS</span>
              </div>

              {/* Exact Headline from screenshot */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.18]">
                Nothing hidden.{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A5B4FC]">
                  Just the details.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm pt-2">
                Still wondering about something? Talk to a real person who knows the answer.
              </p>

              {/* Action CTA Link */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F9FAFB] hover:text-[#06B6D4] transition-colors group"
                >
                  <span>Chat with our team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Bottom Reassurance */}
              <div className="pt-10 mt-10 border-t border-white/5 flex items-center gap-2.5 text-xs text-[#9CA3AF]">
                <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[#818CF8] text-[11px] font-bold">
                  ?
                </div>
                <span>We believe clarity is part of good service.</span>
              </div>
            </div>

            {/* Right Column: Numbered Accordion List */}
            <div className="lg:col-span-7">
              <FAQAccordion items={HOMEPAGE_FAQS} />
            </div>
          </div>
      </PageSection>

      {/* 9. BOTTOM CONVERSION CTA BANNER - MATCHING EXACT REFERENCE SCREENSHOT */}
      <CTASection
        eyebrow="YOUR NEXT CHAPTER STARTS HERE"
        title="Let's build something"
        highlightText="worth remembering."
        subtitle="Hosting a new idea or engineering what comes next? We're ready when you are."
        primaryCtaText="Explore hosting"
        primaryCtaHref="/shared-hosting"
        secondaryCtaText="Start a WhatsApp chat"
        secondaryCtaHref="https://wa.me/919582129099"
        phoneNote="+91 95821 29099 · Real people, real answers"
      />
    </div>
  );
}
