import React from "react";
import { Metadata } from "next";
import Link from "next/link";
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
  ExternalLink,
  ChevronRight,
  Activity,
  Cpu,
  RefreshCw,
  Terminal,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <div className="space-y-20 sm:space-y-28 pb-16 bg-[#0B0F19] text-[#F9FAFB]">
      {/* 1. ASYMMETRIC SPLIT HERO WITH LIVE HARDWARE & CONTAINER TELEMETRY */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 bg-[#0B0F19] border-b border-white/5 overflow-hidden">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/hosting" },
              { label: "NVMe Shared Hosting" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mt-6 lg:mt-10">
            {/* LEFT COLUMN: Editorial Presentation & Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                <Sparkles className="w-4 h-4 text-[#06B6D4]" />
                <span>FLAGSHIP NVME CLOUD INFRASTRUCTURE</span>
              </div>

              {/* Exact Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.15]">
                High-Performance NVMe Hosting with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A5B4FC]">
                  Flat Renewal Pricing.
                </span>
              </h1>

              {/* Subtitle Copy */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-[#F9FAFB] font-normal leading-relaxed">
                  Deploy on PCIe Gen4 NVMe arrays and LiteSpeed Enterprise web servers. Sub-second page loads with zero surprise renewal hikes.
                </p>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-xl">
                  Every account includes modern cPanel, automated daily JetBackup snapshots, CloudLinux CageFS isolation, and senior engineering support.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#plans"
                  className="bg-[#4F46E5] hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore Plans from ₹49/mo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20have%20questions%20about%20NVMe%20Shared%20Hosting."
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
                    ₹49<span className="text-xs font-normal text-[#9CA3AF]">/mo</span>
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Flat renewal rate</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-[#F9FAFB] leading-none">99.9%</p>
                  <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Uptime target</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-[#F9FAFB] leading-none">7 days</p>
                  <p className="text-xs text-[#9CA3AF] mt-1.5 font-medium">Money-back promise</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs font-semibold text-[#10B981]">Govt. verified</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-1 font-medium">MSME registered</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Container Telemetry Widget */}
            <div className="lg:col-span-5">
              <div className="relative w-full max-w-lg lg:max-w-[580px] lg:ml-auto select-none">
                {/* Latency Pill */}
                <div className="flex justify-end mb-3 pr-2">
                  <div className="inline-flex items-center gap-3 bg-[#111827]/90 border border-white/10 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-md">
                    <div className="w-7 h-7 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#06B6D4] shrink-0">
                      <Activity className="w-3.5 h-3.5 text-[#06B6D4]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#9CA3AF]">
                        Noida Cluster Latency
                      </span>
                      <span className="text-xs font-bold text-[#F9FAFB] leading-none mt-0.5">
                        14 ms • Pure NVMe
                      </span>
                    </div>
                    <span className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-[10px] font-bold px-2 py-0.5 rounded-md ml-1">
                      Active
                    </span>
                  </div>
                </div>

                {/* Main Telemetry Box */}
                <div className="rounded-3xl bg-[#111827]/90 border border-white/10 p-6 sm:p-7 shadow-2xl backdrop-blur-xl text-left space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[#F9FAFB] font-mono">
                        cpanel-node01.shrotihost.in
                      </h3>
                      <p className="text-xs text-[#9CA3AF] mt-0.5 font-medium">
                        Isolated CloudLinux LVE Container
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#4F46E5]/20 text-indigo-300 border border-[#4F46E5]/30">
                      cPanel Latest
                    </span>
                  </div>

                  {/* Two Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* NVMe Storage Throughput */}
                    <div className="bg-[#0B0F19]/90 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#9CA3AF]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                          NVMe I/O SPEED
                        </span>
                        <HardDrive className="w-3.5 h-3.5 text-[#06B6D4]" />
                      </div>
                      <div className="my-2.5">
                        <span className="text-3xl font-extrabold text-[#F9FAFB] tracking-tight block">
                          6.2 GB/s
                        </span>
                        {/* Segmented Cyan Bars */}
                        <div className="flex items-center gap-1 mt-2.5">
                          {Array.from({ length: 8 }).map((_, idx) => (
                            <span
                              key={idx}
                              className="h-1.5 flex-1 rounded-[2px] bg-[#06B6D4] shadow-[0_0_6px_rgba(6,182,212,0.6)]"
                            />
                          ))}
                          {Array.from({ length: 2 }).map((_, idx) => (
                            <span key={idx} className="h-1.5 flex-1 rounded-[2px] bg-[#1F2937]" />
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] text-[#10B981] font-semibold">
                        ● Direct PCIe Gen4 Bus
                      </span>
                    </div>

                    {/* Dedicated Container RAM & CPU */}
                    <div className="bg-[#0B0F19]/90 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#9CA3AF]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                          LVE CONTAINER
                        </span>
                        <Cpu className="w-3.5 h-3.5 text-[#818CF8]" />
                      </div>
                      <div className="my-2.5">
                        <span className="text-3xl font-extrabold text-[#F9FAFB] tracking-tight block">
                          100% Isolated
                        </span>
                        <div className="w-full h-1.5 bg-[#1F2937] rounded-full overflow-hidden mt-3">
                          <div className="h-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8] rounded-full w-[28%]" />
                        </div>
                      </div>
                      <span className="text-[10px] text-[#9CA3AF] font-medium">
                        CloudLinux CageFS Sandbox
                      </span>
                    </div>
                  </div>

                  {/* Feature Strip */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#9CA3AF]">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span>LiteSpeed HTTP/3</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Imunify360 WAF</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-[#818CF8]" />
                      <span>JetBackup 5 Daily</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRICING & SPEC COMPARISON SECTION */}
      <section id="plans" className="relative px-4 sm:px-6 lg:px-10 xl:px-12 scroll-mt-24">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Tiered Plans"
            title="Select Your NVMe Shared Hosting Environment"
            subtitle="All tiers feature PCIe Gen4 NVMe storage, LiteSpeed Enterprise web servers, cPanel control panel, and our lifetime flat-renewal price guarantee."
          />

          <SharedHostingPricingSection />
        </div>
      </section>

      {/* 3. ARCHITECTURE DEEP DIVE: 3 ELEVATED CARDS WITH FLOATING CIRCLE BADGES */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Server Architecture"
            title="Why LiteSpeed + NVMe Outperforms Standard Hosting"
            subtitle="Engineered from the ground up to eliminate bottlenecks and accelerate WordPress, dynamic CMSs, and PHP scripts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 pt-6">
            {/* Card 1: LiteSpeed */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-[#06B6D4]/50 hover:bg-[#1F2937]/30 transition-all shadow-xl group">
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#06B6D4] shadow-xl group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                Event-Driven LiteSpeed Web Server
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Unlike Apache, LiteSpeed processes thousands of concurrent HTTP requests with minimal memory overhead, cutting TTFB by up to 80% with native HTTP/3 QUIC support.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-1.5 text-xs text-[#06B6D4] font-semibold">
                <span>Integrated LSCache Engine</span>
              </div>
            </div>

            {/* Card 2: Pure NVMe */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-[#4F46E5]/50 hover:bg-[#1F2937]/30 transition-all shadow-xl group">
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#818CF8] shadow-xl group-hover:scale-110 transition-transform">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                PCIe Gen4 NVMe Direct Storage
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Throughput in excess of 6,000 MB/s ensures instantaneous MySQL database queries, rapid static asset delivery, and effortless execution of complex PHP scripts.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-1.5 text-xs text-[#818CF8] font-semibold">
                <span>12x Faster than SATA SSDs</span>
              </div>
            </div>

            {/* Card 3: CloudLinux */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-emerald-500/50 hover:bg-[#1F2937]/30 transition-all shadow-xl group">
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#10B981] shadow-xl group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                CloudLinux CageFS Isolation
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Each cPanel account runs inside an isolated Lightweight Virtual Environment (LVE). Spikes on neighbor accounts can never degrade your dedicated CPU or RAM allocation.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-1.5 text-xs text-[#10B981] font-semibold">
                <span>Zero Noisy-Neighbor Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREE WEBSITE MIGRATION SUITE */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="w-full max-w-[1720px] mx-auto bg-[#111827] rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
              Zero Downtime Transition
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB] tracking-tight">
              Switching from Another Host? We Handle Everything Free.
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl leading-relaxed">
              Never risk losing data or experiencing downtime. Provide your current cPanel backup or access credentials, and our senior systems engineers will migrate your websites, databases, and emails within hours.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            href="https://wa.me/919582129099?text=Hello%20ShrotiHost%20team,%20I%20want%20to%20migrate%20my%20site%20to%20NVMe%20Shared%20Hosting."
            isExternal={true}
            className="shrink-0 font-bold bg-[#4F46E5] hover:bg-[#4338CA] shadow-lg shadow-indigo-600/30"
          >
            Start Free Migration
          </Button>
        </div>
      </section>

      {/* 5. SPLIT 2-COLUMN NUMBERED FAQ */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Editorial Header */}
            <div className="lg:col-span-5 text-left space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                <span className="w-5 h-0.5 bg-[#06B6D4]" />
                <span>GOOD QUESTIONS, CLEAR ANSWERS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.18]">
                Frequently Asked{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A5B4FC]">
                  Questions.
                </span>
              </h2>

              <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm pt-2">
                Have questions about our NVMe shared hosting or renewal policy? Chat with a real engineer.
              </p>

              <div className="pt-4">
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F9FAFB] hover:text-[#06B6D4] transition-colors group"
                >
                  <span>Chat with an engineer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Numbered Accordion List */}
            <div className="lg:col-span-7">
              <FAQAccordion items={SHARED_HOSTING_FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="shared-hosting" />

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
