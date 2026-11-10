"use client";

import React, { useState } from "react";
import {
  Server,
  Activity,
  Shield,
  Cpu,
  HardDrive,
  Wifi,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const InfrastructureVisualizer: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<"shared" | "vps" | "reseller">("shared");

  const profileSpecs = {
    shared: {
      title: "Shared NVMe Node",
      cpu: "AMD EPYC™ 7763 (Shared Core Pool)",
      cpuLoad: 24,
      ioSpeed: "3,480 MB/s",
      ramType: "DDR4 ECC 3200MHz",
      isolation: "CloudLinux CageFS Virtual Container",
      webServer: "LiteSpeed Enterprise + LSCache",
      uplink: "10 Gbps Tier-1 Dual Redundant",
      status: "Optimal Performance",
    },
    vps: {
      title: "Cloud KVM VPS Instance",
      cpu: "Dedicated KVM vCPU (High Priority)",
      cpuLoad: 42,
      ioSpeed: "3,850 MB/s (Direct NVMe)",
      ramType: "Guaranteed Dedicated RAM",
      isolation: "Hardware Kernel Level KVM",
      webServer: "Custom OS / Full Root SSH",
      uplink: "1 Gbps Unmetered Dedicated Port",
      status: "Dedicated Compute",
    },
    reseller: {
      title: "WHM Reseller Cluster",
      cpu: "Multi-Tenant Balanced Pool",
      cpuLoad: 31,
      ioSpeed: "3,200 MB/s",
      ramType: "DDR4 ECC Allocated per cPanel",
      isolation: "Independent cPanel Accounts",
      webServer: "LiteSpeed + Automated WHM Provisioning",
      uplink: "10 Gbps Anti-DDoS Filtered",
      status: "Multi-Tenant Active",
    },
  };

  const current = profileSpecs[activeProfile];

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Shell Frame with layered depth */}
      <div className="relative rounded-2xl bg-[#111827] border border-white/10 shadow-2xl overflow-hidden font-sans text-left">
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-[#0B0F19] border-b border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            </div>
            <span className="font-mono text-[#9CA3AF] text-[11px] ml-1.5">
              node-in-del01.shrotihost.net
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[#10B981] font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              14ms Ping (Delhi-NCR)
            </span>
          </div>
        </div>

        {/* Profile Switcher Pills */}
        <div className="p-3 bg-[#0B0F19]/60 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider px-2">
            Architecture:
          </span>
          {(["shared", "vps", "reseller"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveProfile(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeProfile === key
                  ? "bg-[#4F46E5] text-white shadow-sm"
                  : "bg-[#1F2937] text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#374151]"
              }`}
            >
              {key === "shared" ? "NVMe Shared" : key === "vps" ? "Cloud VPS" : "WHM Reseller"}
            </button>
          ))}
        </div>

        {/* Main Telemetry & Server Rack Grid */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/10">
              <div className="flex items-center justify-between text-[#9CA3AF] mb-1.5">
                <span className="text-[11px] font-medium flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-[#4F46E5]" />
                  CPU Load
                </span>
                <span className="text-xs font-mono text-[#10B981] font-bold">{current.cpuLoad}%</span>
              </div>
              <div className="w-full bg-[#1F2937] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#4F46E5] h-full rounded-full transition-all duration-500"
                  style={{ width: `${current.cpuLoad}%` }}
                />
              </div>
              <p className="text-[10px] text-[#9CA3AF] mt-1 truncate">{current.cpu.split("(")[0]}</p>
            </div>

            <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/10">
              <div className="flex items-center justify-between text-[#9CA3AF] mb-1.5">
                <span className="text-[11px] font-medium flex items-center gap-1">
                  <HardDrive className="w-3.5 h-3.5 text-[#06B6D4]" />
                  NVMe I/O
                </span>
                <span className="text-xs font-mono text-[#06B6D4] font-bold">{current.ioSpeed.split(" ")[0]}</span>
              </div>
              <div className="w-full bg-[#1F2937] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#06B6D4] h-full rounded-full w-[82%]" />
              </div>
              <p className="text-[10px] text-[#9CA3AF] mt-1">PCIe Gen4 Direct</p>
            </div>

            <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/10 col-span-2 sm:col-span-1">
              <div className="flex items-center justify-between text-[#9CA3AF] mb-1.5">
                <span className="text-[11px] font-medium flex items-center gap-1">
                  <Wifi className="w-3.5 h-3.5 text-[#10B981]" />
                  Network Uplink
                </span>
                <span className="text-xs font-mono text-[#10B981] font-bold">10 Gbps</span>
              </div>
              <div className="w-full bg-[#1F2937] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#10B981] h-full rounded-full w-[35%]" />
              </div>
              <p className="text-[10px] text-[#9CA3AF] mt-1">Anti-DDoS Shield</p>
            </div>
          </div>

          {/* Visual Server Blades Stack */}
          <div className="space-y-2 bg-[#0B0F19]/80 p-3 rounded-xl border border-white/10">
            <div className="flex items-center justify-between text-[11px] text-[#9CA3AF] font-mono pb-1 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <Server className="w-3 h-3 text-[#4F46E5]" />
                Physical Blade Topology (Tier-IV Noida DC)
              </span>
              <span className="text-[#10B981] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Power / Cooling N+1
              </span>
            </div>

            {/* Blade 1 */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#111827] border border-white/10 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                </div>
                <span className="font-mono text-[#F9FAFB] font-medium">L1-WEB-PROC-01</span>
                <span className="text-[10px] bg-[#4F46E5]/20 text-indigo-300 border border-[#4F46E5]/40 px-1.5 py-0.2 rounded font-mono">
                  LiteSpeed 6.2
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#9CA3AF]">0.08s TTFB</span>
            </div>

            {/* Blade 2 */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#111827] border border-white/10 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </div>
                <span className="font-mono text-[#F9FAFB] font-medium">L2-NVME-ARRAY-01</span>
                <span className="text-[10px] bg-[#06B6D4]/20 text-cyan-300 border border-[#06B6D4]/40 px-1.5 py-0.2 rounded font-mono">
                  RAID-10 Protected
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#9CA3AF]">Pure SSD</span>
            </div>

            {/* Blade 3 */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#111827] border border-white/10 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                </div>
                <span className="font-mono text-[#F9FAFB] font-medium">L3-SECURITY-ISOL</span>
                <span className="text-[10px] bg-[#4F46E5]/20 text-indigo-300 border border-[#4F46E5]/40 px-1.5 py-0.2 rounded font-mono">
                  CageFS + Imunify
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#9CA3AF]">Zero Leakage</span>
            </div>
          </div>

          {/* Active Profile Summary */}
          <div className="pt-2 flex items-center justify-between text-xs text-[#9CA3AF] border-t border-white/10">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#4F46E5]" />
              <span>
                Isolation Engine: <strong className="text-[#F9FAFB] font-medium">{current.isolation}</strong>
              </span>
            </div>
            <Link
              href={activeProfile === "shared" ? "/shared-hosting" : activeProfile === "vps" ? "/vps" : "/reseller-hosting"}
              className="text-[#06B6D4] hover:text-cyan-300 font-medium inline-flex items-center gap-1"
            >
              <span>Explore Specs</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Conceptual Disclaimer Bar */}
        <div className="px-4 py-2 bg-[#0B0F19] border-t border-white/10 text-[10px] text-[#9CA3AF] flex items-center justify-between">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
            Simulated Infrastructure Telemetry — Conceptual Node Preview
          </span>
          <span className="hidden sm:inline">Tier-IV Datacenter • India</span>
        </div>
      </div>
    </div>
  );
};
