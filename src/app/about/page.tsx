import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Server,
  Zap,
  RotateCcw,
  MessageSquare,
  Lock,
  Globe,
  Award,
  Users,
  Building,
  CheckCircle,
  ExternalLink,
  MapPin,
  Calendar,
  FileText,
  ArrowRight,
  Terminal,
  Smartphone,
  Puzzle,
  ChevronRight,
  CheckCircle2,
  HardDrive,
  Activity,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About ShrotiHost | High-Performance Cloud Hosting & Engineering",
  description:
    "Learn about ShrotiHost: founded by Priyanshu Shroti in 2023, registered under Indian MSME (UDYAM-UP-36-0017127), and committed to flat-rate renewal pricing and pure NVMe performance.",
  openGraph: {
    title: "About ShrotiHost | Cloud Infrastructure & Engineering",
    description:
      "Our mission, infrastructure, and leadership. Discover why developers, agencies, and founders choose ShrotiHost.",
    url: "https://shrotihost.in/about",
  },
};

export default function AboutPage() {
  const timelineMilestones = [
    {
      year: "2023",
      title: "Founded in Hathras, Uttar Pradesh",
      description:
        "Priyanshu Shroti founded ShrotiHost with a focused goal: delivering fast, transparent web hosting for Indian students, developers, and small businesses without predatory pricing traps.",
    },
    {
      year: "2024",
      title: "LiteSpeed & MSME Registration",
      description:
        "Upgraded all shared infrastructure to LiteSpeed Enterprise web servers with LSCache. Officially registered under the Ministry of MSME, Government of India (UDYAM-UP-36-0017127).",
    },
    {
      year: "2025",
      title: "Cloud VPS & WHMCS Modules Suite",
      description:
        "Launched KVM Cloud VPS servers across regional datacenters. Released commercial WHMCS automation plugins including WaShroti and Smart Gateway Fees for web hosting providers globally.",
    },
    {
      year: "2026",
      title: "Next-Gen Platform Architecture",
      description:
        "Complete platform re-engineering with Next.js App Router, enhanced automated daily JetBackup snapshots, and expansion of custom web development and digital services.",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 bg-[#0B0F19] text-[#F9FAFB]">
      {/* 1. TOP HERO BANNER WITH ORGANIC CURVE & CIRCULAR VISUAL PORTAL */}
      <section className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0B132B]/80 to-[#0B0F19] border-b border-white/5 rounded-b-[36px] sm:rounded-b-[48px] lg:rounded-b-[64px]">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <Breadcrumbs
            items={[
              { label: "Company", href: "/about" },
              { label: "About Us" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-6 lg:mt-10">
            {/* LEFT COLUMN: Narrative & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* MSME Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/15 text-[#06B6D4] border border-[#06B6D4]/30 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Registered Indian MSME • UDYAM-UP-36-0017127</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.15]">
                Architecting Developer-First{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A5B4FC]">
                  Cloud Infrastructure
                </span>{" "}
                & Software.
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl leading-relaxed">
                Founded in 2023 by Priyanshu Shroti in Hathras, Uttar Pradesh, ShrotiHost combines pure enterprise PCIe 4.0 NVMe storage with honest flat-rate renewals and direct senior engineer support.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button href="#mission" size="lg" variant="primary">
                  <span>Explore our mission</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  <span>Contact engineering</span>
                </Button>
              </div>

              {/* Bottom Pagination / Indicator Dots matching reference mockup */}
              <div className="pt-8 border-t border-white/10 flex items-center gap-6 text-xs text-[#9CA3AF] font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#06B6D4] font-bold">01</span>
                  <span>Pure NVMe</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#818CF8] font-bold">02</span>
                  <span>Flat Renewals</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#10B981] font-bold">03</span>
                  <span>Engineer Support</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Circular Visual Portal matching reference image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer Glow Halo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#4F46E5]/20 via-[#06B6D4]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Circular Portal Frame */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 rounded-full p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
                  {/* Inner Dark Chamber with Telemetry Graphic */}
                  <div className="w-full h-full rounded-full bg-[#111827] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    {/* Background grid */}
                    <div className="absolute inset-0 bg-tech-grid opacity-30" />

                    <div className="relative z-10 space-y-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#06B6D4] mx-auto shadow-inner">
                        <Server className="w-7 h-7" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F9FAFB]">
                        Tier-IV Noida Datacenter
                      </h3>
                      <p className="text-xs text-[#9CA3AF] max-w-[200px] mx-auto">
                        Ultra-low latency peering across India with LiteSpeed Enterprise clusters.
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-[10px] font-bold border border-[#10B981]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        <span>All Systems 100% Operational</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top-Left Lightning Badge matching reference */}
                <div className="absolute -top-3 -left-3 bg-[#111827] border border-white/15 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-left pr-1">
                    <p className="text-[10px] font-bold text-[#9CA3AF] uppercase">Speed Benchmark</p>
                    <p className="text-xs font-extrabold text-[#F9FAFB]">12x Faster TTFB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "OUR MISSION" SECTION MATCHING REFERENCE MOCKUP */}
      <section id="mission" className="relative px-4 sm:px-6 lg:px-10 xl:px-12 scroll-mt-24">
        <div className="w-full max-w-[1720px] mx-auto">
          {/* Centered Heading */}
          <SectionHeading
            eyebrow="Radical Transparency"
            title="Our Core Mission"
            subtitle="Built from day one to eliminate the hidden fees, predatory renewal price hikes, and poor support that have long defined the web hosting industry."
          />

          {/* Unified 2-Column Rounded Mission Card */}
          <div className="bg-[#111827] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
            {/* Subtle ambient light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Visual Hardware & Telemetry Box */}
            <div className="lg:col-span-5 bg-[#0B0F19] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#06B6D4]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB]">
                    Production Hardware Matrix
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-[#10B981] border border-emerald-500/30">
                  Verified
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#111827] border border-white/5">
                  <span className="text-[#9CA3AF]">Storage Fabric</span>
                  <span className="font-bold text-[#F9FAFB]">PCIe Gen4 NVMe (Direct)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#111827] border border-white/5">
                  <span className="text-[#9CA3AF]">Web Server Daemon</span>
                  <span className="font-bold text-[#06B6D4]">LiteSpeed Enterprise + LSCache</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#111827] border border-white/5">
                  <span className="text-[#9CA3AF]">Kernel Isolation</span>
                  <span className="font-bold text-[#818CF8]">CloudLinux OS + CageFS</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#111827] border border-white/5">
                  <span className="text-[#9CA3AF]">Renewal Policy</span>
                  <span className="font-bold text-[#10B981]">Same Price Forever (0% Hike)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111827]/70 border border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4F46E5]/20 border border-[#4F46E5]/30 flex items-center justify-center text-[#818CF8] shrink-0 font-bold text-xs">
                  MSME
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-bold text-[#F9FAFB]">Government of India Registered</p>
                  <p className="text-[#9CA3AF] mt-0.5">Udyam Registration: UDYAM-UP-36-0017127</p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Narrative with Highlighted Phrases */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] uppercase tracking-wider">
                <span className="w-4 h-[2px] bg-[#06B6D4]" />
                <span>The ShrotiHost Standard</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] tracking-tight">
                Empowering businesses with uncompromised infrastructure and permanent pricing integrity.
              </h3>

              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                When Priyanshu Shroti founded ShrotiHost, the Indian market was flooded with hosting corporations offering 70% first-year discounts only to ambush customers with <strong className="text-[#F9FAFB]">unannounced 300% to 500% renewal rate hikes</strong> on oversubscribed, spinning disk infrastructure.
              </p>

              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                We set out to build a platform guided by an uncompromising principle: <strong className="text-[#10B981]">the price you sign up with is the price you pay on every subsequent renewal</strong>. No asterisks, no renewal penalties, and zero compromises on hardware quality.
              </p>

              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Every website on ShrotiHost is powered by <strong className="text-[#06B6D4]">enterprise LiteSpeed web servers</strong> and <strong className="text-[#818CF8]">PCIe 4.0 NVMe drives</strong>, monitored around the clock by experienced systems engineers who answer your questions directly without call-center bureaucracy.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Flat Renewal Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                  <span>24/7 Human WhatsApp & Tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                  <span>Free Website Migrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOUD INFRASTRUCTURE & HARDWARE SOLUTIONS (3 Elevated Cards with Floating Circle Icons) */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Infrastructure Solutions"
            title="Enterprise Cloud Equipment & Architecture"
            subtitle="Engineered with modern hardware components to provide rock-solid reliability and low-latency response times."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 pt-6">
            {/* Card 1: Datacenter */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-[#06B6D4]/50 hover:bg-[#1F2937]/30 transition-all shadow-xl group">
              {/* Floating Top Circle Icon Badge matching screenshot */}
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#06B6D4] shadow-xl group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                Tier-IV Noida Datacenter
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Deployed in premier Noida facilities with <strong className="text-[#F9FAFB]">N+1 redundant power</strong>, multi-carrier network uplinks, and sub-15ms regional latency across India.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/shared-hosting"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#06B6D4] hover:text-cyan-300 transition-colors"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: NVMe & LiteSpeed */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-[#4F46E5]/50 hover:bg-[#1F2937]/30 transition-all shadow-xl group">
              {/* Floating Top Circle Icon Badge */}
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#818CF8] shadow-xl group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                LiteSpeed & Pure NVMe
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Direct <strong className="text-[#F9FAFB]">PCIe Gen4 NVMe arrays</strong> delivering up to 12x faster page loads with HTTP/3 QUIC acceleration and integrated server-side LSCache.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/wordpress-hosting"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#818CF8] hover:text-indigo-300 transition-colors"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: CloudLinux & Isolation */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-emerald-500/50 hover:bg-[#1F2937]/30 transition-all shadow-xl group">
              {/* Floating Top Circle Icon Badge */}
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#10B981] shadow-xl group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                CloudLinux & Isolation
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Operating system-level <strong className="text-[#F9FAFB]">CageFS virtual tenancy</strong> with dedicated RAM and CPU allotments, Imunify360 WAF, and automated malware mitigation.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/vps"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] hover:text-emerald-300 transition-colors"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIGITAL ENGINEERING & CONSULTING SERVICES (3 Dark Elevated Cards) */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12 py-10 bg-[#0B0F19]">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Consulting Services"
            title="Custom Software & Digital Solutions"
            subtitle="End-to-end full-stack digital engineering services tailored for modern startups, platforms, and hosting providers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 pt-6">
            {/* Service 1: Web Development */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-[#818CF8]/50 hover:bg-[#1F2937]/40 transition-all shadow-xl group">
              {/* Top Circular Badge */}
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#818CF8] shadow-xl group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                Custom Web Engineering
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Bespoke <strong className="text-[#F9FAFB]">Next.js, React, and TypeScript</strong> web platforms built with reusable layouts, server-side pre-rendering, and blazing Core Web Vitals.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/web-development"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#818CF8] hover:text-indigo-300 transition-colors"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 2: Mobile Apps */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-[#06B6D4]/50 hover:bg-[#1F2937]/40 transition-all shadow-xl group">
              {/* Top Circular Badge */}
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#06B6D4] shadow-xl group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                Mobile App Development
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Native-feel <strong className="text-[#F9FAFB]">React Native and Flutter</strong> applications featuring offline caching, push notifications, and secure Indian payment gateway integrations.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#06B6D4] hover:text-cyan-300 transition-colors"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 3: WHMCS & SaaS */}
            <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:border-emerald-500/50 hover:bg-[#1F2937]/40 transition-all shadow-xl group">
              {/* Top Circular Badge */}
              <div className="w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center text-[#10B981] shadow-xl group-hover:scale-110 transition-transform">
                <Puzzle className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                WHMCS & Cloud Automation
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Custom <strong className="text-[#F9FAFB]">WHMCS modules</strong> including WhatsApp alert dispatchers, dynamic payment fee calculators, and server hook automations for global hosting providers.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/whmcs-modules"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] hover:text-emerald-300 transition-colors"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER LEADERSHIP & VERIFIED CREDENTIALS */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="bg-[#111827] rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30">
                <Users className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Leadership & Legal Governance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
                Built and Governed on Real Customer Accountability
              </h2>

              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                ShrotiHost is operated by Shroti Enterprises, with primary operations in Hathras, Uttar Pradesh. Rather than hiding behind offshore shell corporations, all policies, dispute forums, and service terms are governed by the laws of India.
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#06B6D4]" />
                  <span>Ruheri, Hathras, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>MSME Reg: UDYAM-UP-36-0017127</span>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="lg:col-span-5 bg-[#0B0F19] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#4F46E5] flex items-center justify-center font-extrabold text-white text-2xl shadow-md">
                  PS
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F9FAFB]">Priyanshu Shroti</h3>
                  <p className="text-xs text-[#06B6D4] font-medium">Founder & Chief Architect</p>
                  <p className="text-[11px] text-[#9CA3AF]">Shroti Enterprises</p>
                </div>
              </div>

              <blockquote className="text-xs text-[#9CA3AF] italic border-l-2 border-[#4F46E5] pl-4 leading-relaxed">
                &ldquo;Our promise is simple: the price you pay on your first invoice is the exact price you pay on renewal. We believe long-term customer trust is built through technical excellence and radical transparency.&rdquo;
              </blockquote>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">Independent Reviews:</span>
                <a
                  href="https://www.trustpilot.com/review/shrotihost.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10B981] hover:text-emerald-400 flex items-center gap-1 font-semibold"
                >
                  <span>Trustpilot Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHRONOLOGICAL MILESTONES ROADMAP */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="w-full max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Milestone Timeline"
            title="Our Evolution & Technical Roadmap"
            subtitle="From a grassroots hosting initiative in Uttar Pradesh to a multi-product cloud and engineering platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {timelineMilestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-6 border border-white/10 shadow-card hover:border-[#4F46E5]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#818CF8] font-mono">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-bold text-[#F9FAFB] mt-2 tracking-tight">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-bold text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Milestone Achieved</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
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
