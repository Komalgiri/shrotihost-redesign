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
  const companyPillars = [
    {
      title: "Same Price on Renewal",
      description:
        "The hosting industry is notorious for 70% introductory discounts that spike by 300% on renewal. At ShrotiHost, the price you subscribe to is the exact price you pay year after year.",
      icon: <RotateCcw className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Pure NVMe & LiteSpeed",
      description:
        "We never deploy spinning mechanical disks or slow SATA SSDs. All production clusters run enterprise PCIe 4.0 NVMe solid-state storage paired with LiteSpeed Enterprise web servers.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Direct Engineer Support",
      description:
        "No canned tier-1 call-center responses. When you open a support ticket or reach out on WhatsApp, you speak directly with technical hosting engineers who manage server infrastructure.",
      icon: <MessageSquare className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "CloudLinux Account Isolation",
      description:
        "Every shared hosting tenant is caged inside their own Lightweight Virtual Environment (LVE) with dedicated RAM and CPU allocations, preventing noisy-neighbor degradation.",
      icon: <Lock className="w-6 h-6 text-indigo-400" />
    }
  ];

  const timelineMilestones = [
    {
      year: "2023",
      title: "Founded in Hathras, Uttar Pradesh",
      description:
        "Priyanshu Shroti founded ShrotiHost with a focused goal: delivering fast, transparent web hosting for Indian students, developers, and small businesses without predatory pricing traps."
    },
    {
      year: "2024",
      title: "LiteSpeed & MSME Registration",
      description:
        "Upgraded all shared infrastructure to LiteSpeed Enterprise web servers with LSCache. Officially registered under the Ministry of MSME, Government of India (UDYAM-UP-36-0017127)."
    },
    {
      year: "2025",
      title: "Cloud VPS & WHMCS Modules Suite",
      description:
        "Launched KVM Cloud VPS servers across regional datacenters. Released commercial WHMCS automation plugins including WaShroti and Smart Gateway Fees for web hosting providers."
    },
    {
      year: "2026",
      title: "Next-Gen Platform Architecture",
      description:
        "Complete platform re-engineering with Next.js App Router, enhanced automated daily JetBackup snapshots, and expansion of custom web development and digital services."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Company", href: "/about" },
              { label: "About Us" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>Registered Indian MSME • UDYAM-UP-36-0017127</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Architecting Developer-First Cloud Infrastructure & Software
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2023 by Priyanshu Shroti, ShrotiHost combines high-performance NVMe cloud infrastructure with honest, predictable pricing and dedicated engineer support.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/shared-hosting" size="lg" variant="primary">
                Explore Hosting Plans
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE STATS STRIP */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-none">2023</p>
                <p className="text-xs text-slate-500 mt-1">Year Founded</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-none">MSME</p>
                <p className="text-xs text-slate-500 mt-1">UDYAM-UP-36-0017127</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-none">PCIe 4.0</p>
                <p className="text-xs text-slate-500 mt-1">Pure NVMe Storage</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-none">Flat Rate</p>
                <p className="text-xs text-slate-500 mt-1">Same Price on Renewal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & MISSION SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200/80">
                <Users className="w-3.5 h-3.5 text-cyan-600" />
                <span>Leadership & Vision</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built to Fix Everything Frustrating About Indian Web Hosting
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When Priyanshu Shroti founded ShrotiHost in Hathras, Uttar Pradesh, the Indian hosting market was dominated by massive hosting conglomerates utilizing deceptive introductory pricing: deeply discounted first-year rates that renewed at 4x to 5x higher costs, crammed onto oversubscribed Apache servers with spinning hard drives.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ShrotiHost was founded on the opposite philosophy: complete financial transparency, enterprise PCIe 4.0 NVMe hardware, LiteSpeed web server technology, and direct access to infrastructure engineers rather than automated call centers.
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span>Ruheri, Hathras, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Govt. of India MSME Registered</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center font-extrabold text-white text-2xl shadow-md">
                  PS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Priyanshu Shroti</h3>
                  <p className="text-xs text-indigo-600 font-medium">Founder & Chief Architect</p>
                  <p className="text-[11px] text-slate-500">Shroti Enterprises</p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-indigo-600 pl-4 leading-relaxed">
                &ldquo;Our promise is simple: the price you pay on your first invoice is the exact price you pay on renewal. We believe long-term customer trust is built through technical excellence and radical transparency.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Independent Reviews:</span>
                <a
                  href="https://www.trustpilot.com/review/shrotihost.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-semibold"
                >
                  <span>Trustpilot Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTIVE DARK SECTION: CORE OPERATING PRINCIPLES */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            isDark={true}
            eyebrow="Our Guiding Values"
            title="The Principles That Drive Our Infrastructure"
            subtitle="Every server we rack, script we deploy, and policy we write is guided by four foundational commitments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 hover:border-indigo-500/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TIMELINE / JOURNEY */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones in Our Growth"
            subtitle="From a local hosting initiative to a comprehensive cloud infrastructure and software engineering provider."
          />

          <div className="relative border-l-2 border-indigo-100 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
            {timelineMilestones.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 shadow-sm" />
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-full">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <CTASection
        eyebrow="Join Hundreds of Satisfied Clients"
        title="Ready to Build Your Online Presence on ShrotiHost?"
        subtitle="Get started today with our 7-day money-back guarantee, free site migration, and flat renewal rates."
        primaryCtaText="Get Started from ₹49/mo"
        primaryCtaHref="/shared-hosting"
        secondaryCtaText="Contact Sales Team"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
