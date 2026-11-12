"use client";

import React from "react";
import Link from "next/link";
import {
  Server,
  Flame,
  Users,
  Terminal,
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { Button } from "../ui/Button";

export const HostingCategoryShowcase: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Asymmetric Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large Flagship Showcase: NVMe Shared Hosting (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-[#111827] rounded-3xl border border-white/10 p-7 sm:p-9 shadow-card flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all">
          {/* High-Resolution 3D NVMe Hardware Visual Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/nvme-speed-card.jpg"
              alt="PCIe Gen4 NVMe Server Hardware"
              className="w-full h-full object-cover object-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/85 to-[#111827]/40" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#4F46E5]">
                  <Server className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#06B6D4]">
                    Flagship Infrastructure
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">
                    NVMe cPanel Shared Hosting
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#9CA3AF] block">Starting at</span>
                <span className="text-2xl font-extrabold text-[#F9FAFB]">₹49<span className="text-xs font-normal text-[#9CA3AF]">/mo</span></span>
              </div>
            </div>

            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
              Engineered with pure PCIe Gen4 NVMe solid-state storage and LiteSpeed Enterprise web servers. Delivers up to 12x faster time-to-first-byte (TTFB) compared to traditional Apache hosts, with zero predatory renewal price hikes.
            </p>

            {/* Micro spec matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 text-xs">
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Storage Engine</span>
                <strong className="text-[#F9FAFB] font-semibold">PCIe Gen4 NVMe</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Web Server</span>
                <strong className="text-[#F9FAFB] font-semibold">LiteSpeed + HTTP/3</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Control Panel</span>
                <strong className="text-[#F9FAFB] font-semibold">Latest cPanel</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Security Sandbox</span>
                <strong className="text-[#F9FAFB] font-semibold">CloudLinux CageFS</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Automated Backups</span>
                <strong className="text-[#F9FAFB] font-semibold">JetBackup 5 Daily</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Renewal Guarantee</span>
                <strong className="text-[#10B981] font-semibold">Same Price Forever</strong>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#9CA3AF] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>4 scalable tiers: Launch, Grow, Turbo, Infinity</span>
            </span>
            <Button
              variant="primary"
              size="md"
              href="/shared-hosting"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-indigo-600/20"
            >
              Explore NVMe Plans
            </Button>
          </div>
        </div>

        {/* Specialized Showcase: Managed WordPress (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-[#111827] rounded-2xl border border-white/10 p-7 sm:p-9 shadow-card flex flex-col justify-between relative group hover:border-white/20 transition-all">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-amber-500">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Optimized CMS
                  </span>
                  <h3 className="text-xl font-bold text-[#F9FAFB]">
                    Managed WordPress
                  </h3>
                </div>
              </div>
              <span className="text-xl font-extrabold text-[#F9FAFB]">₹69<span className="text-xs font-normal text-[#9CA3AF]">/mo</span></span>
            </div>

            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
              Pre-configured with LiteSpeed Cache (LSCache), Redis Object Caching, and AccelerateWP smart PHP optimization. Built to handle WooCommerce flash sales and heavy traffic bursts effortlessly.
            </p>

            <ul className="space-y-2.5 mb-6 text-xs text-[#9CA3AF]">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                <span>AccelerateWP Smart PHP Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                <span>Dedicated Redis Object Cache Instance</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                <span>1-Click Safe Staging & Cloning Tools</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                <span>Automatic WordPress Core & Plugin Patching</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-[#9CA3AF]">Pre-tuned WooCommerce stack</span>
            <Link
              href="/wordpress-hosting"
              className="text-xs font-bold text-[#06B6D4] hover:text-cyan-300 inline-flex items-center gap-1"
            >
              <span>View WP Plans</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Row: Reseller & VPS (2 equal columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WHM Reseller Hosting */}
        <div className="bg-[#111827] rounded-2xl border border-white/10 p-7 sm:p-8 shadow-card flex flex-col justify-between group hover:border-white/20 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-emerald-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981]">
                    Agency & Freelancer Platform
                  </span>
                  <h3 className="text-xl font-bold text-[#F9FAFB]">
                    WHM Reseller Hosting
                  </h3>
                </div>
              </div>
              <span className="text-xl font-extrabold text-[#F9FAFB]">₹299<span className="text-xs font-normal text-[#9CA3AF]">/mo</span></span>
            </div>

            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">
              Launch your own branded web hosting business or manage client accounts under one master WHM panel. 100% white-label with private nameservers and overselling enabled.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-[#9CA3AF] mb-6 bg-[#0B0F19] p-3 rounded-xl border border-white/10">
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Control</span>
                <strong className="text-[#F9FAFB]">Full WHM Access</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Branding</span>
                <strong className="text-[#F9FAFB]">Custom White-Label</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Overselling</span>
                <strong className="text-[#10B981]">Enabled by Default</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Calculator</span>
                <strong className="text-[#06B6D4]">Interactive Profit Tool</strong>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-[#9CA3AF]">Startup to Elite Reseller</span>
            <Button
              variant="secondary"
              size="sm"
              href="/reseller-hosting"
              className="bg-[#1F2937] text-[#F9FAFB] border border-white/10 hover:bg-[#374151]"
            >
              Explore Reseller
            </Button>
          </div>
        </div>

        {/* Dedicated KVM Cloud VPS */}
        <div className="bg-[#111827] rounded-3xl border border-white/10 p-7 sm:p-8 shadow-card flex flex-col justify-between group hover:border-white/20 transition-all relative overflow-hidden">
          {/* High-Resolution 3D VPS Compute Hardware Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/vps-compute-card.jpg"
              alt="Dedicated KVM Compute Node"
              className="w-full h-full object-cover object-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/85 to-[#111827]/40" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-purple-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    Dedicated Compute
                  </span>
                  <h3 className="text-xl font-bold text-[#F9FAFB]">
                    Cloud KVM VPS
                  </h3>
                </div>
              </div>
              <span className="text-xl font-extrabold text-[#F9FAFB]">₹499<span className="text-xs font-normal text-[#9CA3AF]">/mo</span></span>
            </div>

            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">
              High-performance KVM virtual machines with guaranteed dedicated CPU cores, RAM, and NVMe disk. Full root SSH access, automated snapshots, and 1 Gbps unmetered uplink.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-[#9CA3AF] mb-6 bg-[#0B0F19]/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Virtualization</span>
                <strong className="text-[#F9FAFB]">Hardware KVM</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Access</span>
                <strong className="text-[#F9FAFB]">Full Root SSH</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Port Speed</span>
                <strong className="text-[#F9FAFB]">1 Gbps Uplink</strong>
              </div>
              <div>
                <span className="text-[#9CA3AF] block text-[11px]">Configs</span>
                <strong className="text-[#F9FAFB]">8 Tiers (Spark to Apex)</strong>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-[#9CA3AF]">KVM · root access</span>
            <Button
              variant="secondary"
              size="sm"
              href="/vps"
              className="bg-[#1F2937] text-[#F9FAFB] border border-white/10 hover:bg-[#374151]"
            >
              Explore Cloud VPS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
