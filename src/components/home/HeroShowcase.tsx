"use client";

import React, { useState } from "react";
import { Check, CheckCircle2, ShieldCheck, FileText, Star, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

interface HeroShowcaseProps {
  imageSrc?: string;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({
  imageSrc = "/images/hero-datacenter-team.jpg",
}) => {
  const [checklist, setChecklist] = useState({
    nvme: false,
    litespeed: true,
    migration: true,
    renewal: true,
  });

  return (
    <div className="relative w-full max-w-[620px] mx-auto lg:ml-auto select-none pt-4 pb-10">
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-indigo-600/25 via-cyan-500/20 to-transparent blur-[120px] pointer-events-none" />

      {/* DUAL ORGANIC SWOOPING ARCHES MATCHING REFERENCE SCREENSHOT */}
      <div className="relative flex items-center justify-center gap-3.5 sm:gap-5 px-2 sm:px-6">
        {/* 1. LEFT SWOOPING CURVED ARCH */}
        <div className="w-[180px] sm:w-[230px] md:w-[255px] h-[440px] sm:h-[520px] rounded-t-full rounded-b-[90px] overflow-hidden relative shadow-2xl border border-white/10 dark:border-white/10 bg-[#111827] group">
          <img
            src={imageSrc}
            alt="Cloud Infrastructure Engineers collaborating in modern datacenter"
            className="w-full h-full object-cover object-left filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F19]/5 to-[#0B0F19]/30 pointer-events-none" />
        </div>

        {/* 2. RIGHT COMPLEMENTARY SWOOPING CURVED ARCH */}
        <div className="w-[180px] sm:w-[230px] md:w-[255px] h-[390px] sm:h-[470px] rounded-t-full rounded-b-[90px] overflow-hidden relative shadow-2xl border border-white/10 dark:border-white/10 bg-[#111827] mt-8 sm:mt-14 group">
          <img
            src={imageSrc}
            alt="Enterprise Datacenter Server Infrastructure & Telemetry"
            className="w-full h-full object-cover object-right filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F19]/5 to-[#0B0F19]/30 pointer-events-none" />
        </div>
      </div>

      {/* =========================================================================
          FLOATING UI WIDGET CARDS MATCHING REFERENCE MOCKUP EXACTLY
          ========================================================================= */}

      {/* CARD 1: FLOATING CHECKLIST CARD (Left side, overlapping arches) */}
      <div className="absolute -left-2 sm:-left-6 md:-left-10 top-24 sm:top-28 z-20 w-[230px] sm:w-[265px] bg-[#111827]/95 dark:bg-[#111827]/95 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
        <h4 className="text-base sm:text-lg font-black text-[#F9FAFB] tracking-tight mb-3">
          Checklist
        </h4>

        <div className="space-y-2.5">
          {/* Item 1: Unchecked in mockup style */}
          <label className="flex items-center gap-2.5 text-xs text-[#F9FAFB] cursor-pointer group select-none">
            <span
              onClick={() => setChecklist((prev) => ({ ...prev, nvme: !prev.nvme }))}
              className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                checklist.nvme
                  ? "bg-[#4F46E5] border-[#4F46E5] text-white shadow-xs"
                  : "bg-transparent border-white/30 hover:border-white/60"
              }`}
            >
              {checklist.nvme && <Check className="w-3 h-3 stroke-[3]" />}
            </span>
            <span className="leading-snug">Approve event budget</span>
          </label>

          {/* Sub-action link matching "+ Add budget" in reference */}
          <div className="pl-6.5">
            <button
              type="button"
              className="text-[11px] font-semibold text-[#06B6D4] hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3 h-3" />
              <span>Add custom specs</span>
            </button>
          </div>

          {/* Item 2: Checked in blue */}
          <label className="flex items-center gap-2.5 text-xs text-[#F9FAFB] cursor-pointer group select-none pt-1">
            <span
              onClick={() => setChecklist((prev) => ({ ...prev, litespeed: !prev.litespeed }))}
              className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                checklist.litespeed
                  ? "bg-[#4F46E5] border-[#4F46E5] text-white shadow-xs"
                  : "bg-transparent border-white/30 hover:border-white/60"
              }`}
            >
              {checklist.litespeed && <Check className="w-3 h-3 stroke-[3]" />}
            </span>
            <span className="leading-snug">Set-up NVMe + LSCache</span>
          </label>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10">
          <Link
            href="/shared-hosting"
            className="text-[11px] font-medium text-[#9CA3AF] hover:text-[#06B6D4] inline-flex items-center gap-1 transition-colors"
          >
            <span>Read: Hosting Blueprint for 2026</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* CARD 2: FLOATING DATACENTER VENUE PILL (Top Right matching reference) */}
      <div className="absolute right-1 sm:right-4 top-4 sm:top-6 z-20 bg-[#111827]/95 dark:bg-[#111827]/95 border border-white/15 rounded-2xl px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
              Venue
            </span>
            <span className="text-[10px] text-white/30">•</span>
            <span className="text-[10px] text-[#06B6D4] font-semibold">Delhi-NCR</span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <h5 className="text-xs sm:text-sm font-extrabold text-[#F9FAFB] tracking-tight">
              Tier-4 Cloud Node
            </h5>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4] fill-[#06B6D4]/20" />
          </div>
        </div>

        <div className="pl-3 border-l border-white/10 flex items-center gap-1">
          <span className="text-xs font-black text-[#F9FAFB]">4.9</span>
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
        </div>
      </div>

      {/* CARD 3: FLOATING PAYMENT SCHEDULE & INVOICE (Bottom Right matching reference) */}
      <div className="absolute -right-2 sm:-right-4 md:-right-6 bottom-0 sm:bottom-2 z-20 w-[235px] sm:w-[270px] bg-[#111827]/95 dark:bg-[#111827]/95 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] block mb-2.5">
          Payment schedule
        </span>

        {/* Invoice Row */}
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/10">
          <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <FileText className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-[#F9FAFB] leading-none truncate">Invoice #SH-1049</p>
            <p className="text-[10px] text-[#9CA3AF] mt-0.5 truncate">Amount: ₹49.00 / mo</p>
          </div>
        </div>

        <div className="pt-2.5 space-y-2">
          {/* Discount Line matching reference */}
          <div className="flex items-center justify-between text-xs">
            <div className="text-left">
              <span className="text-xs font-bold text-[#F9FAFB] block">Discount 100%</span>
              <span className="text-[10px] text-[#9CA3AF]">Amount: Free Migration</span>
            </div>
            <span className="text-[10px] font-bold text-[#10B981] bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              Paid
            </span>
          </div>

          {/* Due date row */}
          <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/5 text-[#9CA3AF]">
            <span>Due date</span>
            <span className="font-semibold text-[#F9FAFB]">Next monthly cycle</span>
          </div>
        </div>
      </div>
    </div>
  );
};
