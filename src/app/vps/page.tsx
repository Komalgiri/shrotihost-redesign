import React from "react";
import { Metadata } from "next";
import {
  Terminal,
  Zap,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Cpu,
  RotateCcw,
  Network,
  Sparkles,
  Server,
  Lock,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { VPS_HOSTING_PLANS } from "@/data/hosting-plans";

export const metadata: Metadata = {
  title: "Cloud VPS Hosting from ₹499/mo | KVM Virtual Private Servers | ShrotiHost",
  description:
    "High-speed KVM Cloud VPS servers with full root access, dedicated vCPU and RAM, 1 Gbps network port speed, and weekly offsite backups.",
  openGraph: {
    title: "Cloud VPS Virtual Private Servers | ShrotiHost",
    description:
      "Enterprise KVM cloud compute instances starting from ₹499/mo. Full root access, Ubuntu/Debian/AlmaLinux OS choices, and 1 Gbps port.",
    url: "https://shrotihost.in/vps",
  },
};

export default function VPSHostingPage() {
  const vpsFeatures = [
    {
      title: "Full Root SSH Access",
      description: "Complete administrative control over your Linux operating system. Install custom runtimes, Docker containers, web servers, or compile from source.",
      iconName: "Terminal"
    },
    {
      title: "True KVM Virtualization",
      description: "Kernel-based Virtual Machine (KVM) technology guarantees that your assigned vCPU cores, RAM, and SSD storage are 100% dedicated to your VM.",
      iconName: "Cpu"
    },
    {
      title: "1 Gbps Network Port Speed",
      description: "Connected to multi-homed Tier-1 transit backbones ensuring low ping and ultra-fast data transfer across India and the Asia-Pacific region.",
      iconName: "Network"
    },
    {
      title: "Choice of Modern Linux OS",
      description: "Deploy with 1-click: Ubuntu 24.04 / 22.04 LTS, Debian 12 / 11, AlmaLinux 9, or Rocky Linux 9 with instant OS reinstall capability.",
      iconName: "Server"
    },
    {
      title: "Weekly Offsite Backups",
      description: "Automated snapshot backups taken weekly and stored in a physically separate storage cluster for disaster recovery.",
      iconName: "RotateCcw"
    },
    {
      title: "Dedicated IPv4 & Reverse DNS",
      description: "Each virtual server includes a clean, dedicated static IPv4 address with configurable rDNS (PTR record) for high email deliverability.",
      iconName: "Lock"
    }
  ];

  const vpsFaqs = [
    {
      question: "Are your VPS servers managed or unmanaged?",
      answer: "Our standard VPS plans are self-managed (unmanaged), providing you with full root access to install and configure software as you see fit. However, our hardware, network routing, and host virtualization layer are managed 24/7 by ShrotiHost engineers."
    },
    {
      question: "Why is there a one-time setup fee on certain VPS tiers?",
      answer: "Setup fees cover the initial physical blade allocation, dedicated IPv4 assignment, network switch provisioning, and OS initialization in the datacenter. The setup fee is billed only once upon original order."
    },
    {
      question: "Are VPS servers eligible for the 7-Day Money-Back Guarantee?",
      answer: "No. Consistent with our published Refund Policy, Cloud VPS servers are strictly non-refundable due to the direct non-recoverable compute and dedicated IPv4 reservation costs incurred immediately upon provisioning."
    },
    {
      question: "Can I reinstall the operating system or reboot my server?",
      answer: "Yes, you have complete self-service power management (Reboot, Shutdown, Boot, Reinstall OS, VNC Web Console) directly within your client portal."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 bg-[#0B0F19] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/shared-hosting" },
              { label: "Cloud VPS Hosting" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 mb-4 shadow-card">
              <Terminal className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Full Root Access • KVM Virtualization • 1 Gbps Port Speed</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F9FAFB] tracking-tight leading-tight">
              High-Compute Cloud VPS Virtual Private Servers
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Deploy isolated KVM instances with dedicated compute power, NVMe storage, and uncompromised Linux control. Engineered for developers, high-traffic portals, and agency fleets.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-[#F9FAFB]">
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                Root SSH Access
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Dedicated vCPU
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                1 Gbps Port Speed
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 flex items-center gap-1.5 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-[#4F46E5]" />
                Dedicated Static IPv4
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="VPS Configurations"
            title="KVM Cloud Compute Tiers"
            subtitle="Transparent pricing from 1 vCPU / 2GB RAM up to 16 vCPU / 64GB RAM. Select the ideal capacity for your workload."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {VPS_HOSTING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. HARDWARE & VIRTUALIZATION BLUEPRINT (Selective Dark Section) */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            isDark={true}
            eyebrow="Virtualization Engine"
            title="Dedicated Hardware Isolation & Full Linux Sovereignty"
            subtitle="No CPU throttling or memory ballooning. Experience reliable bare-metal-like compute for critical applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {vpsFeatures.map((feat, idx) => (
              <FeatureCard
                key={idx}
                isDark={true}
                iconName={feat.iconName}
                title={feat.title}
                description={feat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. VPS FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Cloud VPS Hosting FAQs"
            subtitle="Technical specifics regarding root access, operating system choices, and setup fees."
          />

          <FAQAccordion items={vpsFaqs} />
        </div>
      </section>

      {/* 5. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="vps" />

      {/* 6. BOTTOM CTA */}
      <CTASection
        eyebrow="Dedicated Power"
        title="Deploy Your Dedicated KVM VPS in Minutes"
        subtitle="Full root access, 1 Gbps port speed, and high-frequency NVMe compute starting from ₹499/month."
        primaryCtaText="Deploy Cloud VPS"
        primaryCtaHref="#vps-spark"
      />
    </div>
  );
}
