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
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 transition-all">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/70 flex items-center justify-center text-indigo-600">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    Flagship Infrastructure
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                    NVMe cPanel Shared Hosting
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Starting at</span>
                <span className="text-2xl font-extrabold text-slate-950">₹49<span className="text-xs font-normal text-slate-500">/mo</span></span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Engineered with pure PCIe Gen4 NVMe solid-state storage and LiteSpeed Enterprise web servers. Delivers up to 12x faster time-to-first-byte (TTFB) compared to traditional Apache hosts, with zero predatory renewal price hikes.
            </p>

            {/* Micro spec matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Storage Engine</span>
                <strong className="text-slate-900 font-semibold">PCIe Gen4 NVMe</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Web Server</span>
                <strong className="text-slate-900 font-semibold">LiteSpeed + HTTP/3</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Control Panel</span>
                <strong className="text-slate-900 font-semibold">Latest cPanel</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Security Sandbox</span>
                <strong className="text-slate-900 font-semibold">CloudLinux CageFS</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Automated Backups</span>
                <strong className="text-slate-900 font-semibold">JetBackup 5 Daily</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Renewal Guarantee</span>
                <strong className="text-emerald-700 font-semibold">Same Price Forever</strong>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>4 scalable tiers: Starter, Plus, Pro, Business</span>
            </span>
            <Button
              variant="primary"
              size="md"
              href="/shared-hosting"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore NVMe Plans
            </Button>
          </div>
        </div>

        {/* Specialized Showcase: Managed WordPress (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 shadow-sm flex flex-col justify-between relative group hover:border-slate-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-600">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    Optimized CMS
                  </span>
                  <h3 className="text-xl font-bold text-slate-950">
                    Managed WordPress
                  </h3>
                </div>
              </div>
              <span className="text-xl font-extrabold text-slate-950">₹69<span className="text-xs font-normal text-slate-500">/mo</span></span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Pre-configured with LiteSpeed Cache (LSCache), Redis Object Caching, and AccelerateWP smart PHP optimization. Built to handle WooCommerce flash sales and heavy traffic bursts effortlessly.
            </p>

            <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>AccelerateWP Smart PHP Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Dedicated Redis Object Cache Instance</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>1-Click Safe Staging & Cloning Tools</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Automatic WordPress Core & Plugin Patching</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">Pre-tuned WooCommerce stack</span>
            <Link
              href="/wordpress-hosting"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
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
        <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Agency & Freelancer Platform
                  </span>
                  <h3 className="text-xl font-bold text-slate-950">
                    WHM Reseller Hosting
                  </h3>
                </div>
              </div>
              <span className="text-xl font-extrabold text-slate-950">₹299<span className="text-xs font-normal text-slate-500">/mo</span></span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Launch your own branded web hosting business or manage client accounts under one master WHM panel. 100% white-label with private nameservers and overselling enabled.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div>
                <span className="text-slate-400 block text-[11px]">Control</span>
                <strong>Full WHM Access</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Branding</span>
                <strong>Custom White-Label</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Overselling</span>
                <strong className="text-emerald-700">Enabled by Default</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Calculator</span>
                <strong className="text-indigo-600">Interactive Profit Tool</strong>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Startup to Elite Reseller</span>
            <Button variant="secondary" size="sm" href="/reseller-hosting">
              Explore Reseller
            </Button>
          </div>
        </div>

        {/* Dedicated KVM Cloud VPS */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/70 flex items-center justify-center text-purple-600">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                    Dedicated Compute
                  </span>
                  <h3 className="text-xl font-bold text-slate-950">
                    Cloud KVM VPS
                  </h3>
                </div>
              </div>
              <span className="text-xl font-extrabold text-slate-950">₹499<span className="text-xs font-normal text-slate-500">/mo</span></span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              High-performance KVM virtual machines with guaranteed dedicated CPU cores, RAM, and NVMe disk. Full root SSH access, automated snapshots, and 1 Gbps unmetered uplink.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div>
                <span className="text-slate-400 block text-[11px]">Virtualization</span>
                <strong>Hardware KVM</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Access</span>
                <strong>Full Root SSH</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Port Speed</span>
                <strong>1 Gbps Uplink</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Configs</span>
                <strong>8 Tiers (Spark to Apex)</strong>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">India Tier-IV Datacenter</span>
            <Button variant="secondary" size="sm" href="/vps">
              Explore Cloud VPS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
