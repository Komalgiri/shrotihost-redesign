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
import { PageSection } from "@/components/ui/PageSection";

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
    <div className="pb-16 section-surface-base text-[#F9FAFB]">
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
                  <div className="w-full h-full rounded-full overflow-hidden relative group">
                    <img
                      src="/images/datacenter-portal.jpg"
                      alt="ShrotiHost LiteSpeed and NVMe infrastructure"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/25 to-transparent flex items-end justify-center pb-6">
                      <div className="text-center px-4">
                        <span className="text-xs sm:text-sm font-bold text-[#F9FAFB] tracking-tight block">
                          LiteSpeed + NVMe platform
                        </span>
                        <span className="text-[10px] text-[#06B6D4] font-medium">
                          Operated from Hathras, UP · MSME verified
                        </span>
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

      <PageSection id="mission" tone="alt" className="scroll-mt-24" border="y">
          <SectionHeading
            eyebrow="Radical Transparency"
            title="Our Core Mission"
            subtitle="Built from day one to eliminate the hidden fees, predatory renewal price hikes, and poor support that have long defined the web hosting industry."
          />

          {/* Unified 2-Column Rounded Mission Card */}
          <div className="bg-[#111827] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
            {/* Subtle ambient light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Visual Hardware Frame matching reference image */}
            <div className="lg:col-span-5 rounded-2xl border border-white/10 overflow-hidden relative group min-h-[340px] flex flex-col justify-end shadow-2xl">
              <img
                src="/images/nvme-mission.jpg"
                alt="Pure PCIe Gen4 NVMe Cloud Storage"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />

              <div className="relative z-10 p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/30 backdrop-blur-md">
                    PCIe Gen4 NVMe Fabric
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 backdrop-blur-md">
                    MSME Verified
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#F9FAFB] tracking-tight">
                  High-Throughput Enterprise Architecture
                </h4>
                <p className="text-xs text-[#9CA3AF]">
                  Direct PCIe Gen4 data lines with automated daily JetBackup snapshots and LiteSpeed HTTP/3.
                </p>
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
      </PageSection>

      <PageSection tone="base" border="y">
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
                Hosting you can explain
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                We run <strong className="text-[#F9FAFB]">LiteSpeed Enterprise</strong> on{" "}
                <strong className="text-[#F9FAFB]">NVMe storage</strong> with CloudLinux isolation, daily JetBackup
                snapshots, and a published <strong className="text-[#F9FAFB]">99.9% uptime target</strong> (not a
                financial SLA). Operations are based in Ruheri, Hathras, Uttar Pradesh.
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
      </PageSection>

      <PageSection tone="alt" size="compact" border="y">
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
      </PageSection>

      <PageSection tone="base" border="y">
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
      </PageSection>

      <PageSection tone="alt" border="y">
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
      </PageSection>

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
