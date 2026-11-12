"use client";

import React, { useState } from "react";
import {
  Cpu,
  HardDrive,
  Activity,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const InfrastructureVisualizer: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<"shared" | "vps" | "reseller">("shared");

  const profileSpecs = {
    shared: {
      node: "node-in-del01.shrotihost.net",
      location: "Delhi-NCR latency",
      cpuLoad: "18.4%",
      cpuFill: 18.4,
      cpuStatus: "Balanced",
      ioSpeed: "6.2 GB/s",
      ioBlocksLit: 8,
      storageType: "PCIe Gen4 storage",
    },
    vps: {
      node: "kvm-in-del02.shrotihost.net",
      location: "Delhi-NCR latency",
      cpuLoad: "32.1%",
      cpuFill: 32.1,
      cpuStatus: "Dedicated Core",
      ioSpeed: "6.8 GB/s",
      ioBlocksLit: 9,
      storageType: "Direct KVM NVMe",
    },
    reseller: {
      node: "whm-in-del01.shrotihost.net",
      location: "Delhi-NCR latency",
      cpuLoad: "24.6%",
      cpuFill: 24.6,
      cpuStatus: "Multi-Tenant Balanced",
      ioSpeed: "5.9 GB/s",
      ioBlocksLit: 7,
      storageType: "Isolated LVE Storage",
    },
  };

  const current = profileSpecs[activeProfile];

  return (
    <div className="relative w-full max-w-lg lg:max-w-[580px] lg:ml-auto select-none">
      {/* 1. TOP-RIGHT FLOATING LATENCY PILL */}
      <div className="flex justify-end mb-3 pr-2">
        <div className="inline-flex items-center gap-3 bg-[#111827]/90 border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md">
          <div className="w-8 h-8 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#06B6D4] shrink-0">
            <Activity className="w-4 h-4 text-[#06B6D4]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#9CA3AF]">
              India Latency
            </span>
            <span className="text-sm font-bold text-[#F9FAFB] leading-none mt-0.5">
              14 ms
            </span>
          </div>
          <span className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-[10px] font-bold px-2 py-0.5 rounded-md ml-1">
            -32%
          </span>
        </div>
      </div>

      {/* 2. MAIN SERVER CARD */}
      <div className="rounded-3xl bg-[#111827]/90 border border-white/10 p-5 sm:p-7 shadow-2xl backdrop-blur-xl text-left space-y-5">
        {/* Node Hostname and Location Header */}
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-[#F9FAFB] font-mono tracking-tight">
            {current.node}
          </h3>
          <p className="text-xs text-[#9CA3AF] mt-0.5 font-medium">
            {current.location}
          </p>
        </div>

        {/* Architecture Switcher Tabs */}
        <div className="bg-[#0B0F19]/80 border border-white/5 p-1 rounded-xl flex items-center justify-between sm:justify-start gap-1">
          {(["shared", "vps", "reseller"] as const).map((key) => {
            const isActive = activeProfile === key;
            const labels = {
              shared: "Shared NVMe",
              vps: "Cloud VPS",
              reseller: "WHM Reseller",
            };
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveProfile(key)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-600/30"
                    : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5"
                }`}
              >
                {labels[key]}
              </button>
            );
          })}
        </div>

        {/* Two Metric Boxes Side-by-Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Box 1: CPU LOAD */}
          <div className="bg-[#0B0F19]/90 border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#9CA3AF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                CPU LOAD
              </span>
              <div className="w-6 h-6 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-[#818CF8]">
                <Cpu className="w-3.5 h-3.5 text-[#818CF8]" />
              </div>
            </div>

            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight block">
                {current.cpuLoad}
              </span>
              <div className="w-full h-1.5 bg-[#1F2937] rounded-full overflow-hidden mt-3">
                <div
                  className="h-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8] rounded-full transition-all duration-500"
                  style={{ width: `${current.cpuFill}%` }}
                />
              </div>
            </div>

            <span className="text-[11px] text-[#9CA3AF] font-medium">
              {current.cpuStatus}
            </span>
          </div>

          {/* Box 2: NVME I/O */}
          <div className="bg-[#0B0F19]/90 border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#9CA3AF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                NVME I/O
              </span>
              <div className="w-6 h-6 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-[#06B6D4]">
                <HardDrive className="w-3.5 h-3.5 text-[#06B6D4]" />
              </div>
            </div>

            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight block">
                {current.ioSpeed}
              </span>

              {/* Segmented Cyan Blocks Bar matching the screenshot */}
              <div className="flex items-center gap-1.5 mt-3">
                {Array.from({ length: 10 }).map((_, idx) => {
                  const isLit = idx < current.ioBlocksLit;
                  return (
                    <span
                      key={idx}
                      className={`h-2 flex-1 rounded-[2px] transition-all duration-300 ${
                        isLit
                          ? "bg-[#06B6D4] shadow-[0_0_6px_rgba(6,182,212,0.6)]"
                          : "bg-[#1F2937]"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            <span className="text-[11px] text-[#9CA3AF] font-medium">
              {current.storageType}
            </span>
          </div>
        </div>

        {/* 3. NETWORK STATUS BOTTOM BAR */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase font-bold tracking-wider text-[#9CA3AF]">
                Network Status
              </span>
              <span className="text-xs font-bold text-[#F9FAFB]">
                All systems live
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#9CA3AF] text-[11px] font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>DDoS protected</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#818CF8]" />
              <span>99.9% target</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
