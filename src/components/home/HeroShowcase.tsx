"use client";

import React, { useState } from "react";
import { Check, CheckCircle2, FileText, Star, Plus, Link as LinkIcon, MapPin } from "lucide-react";
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
  });

  return (
    <div className="relative w-full max-w-[680px] mx-auto lg:ml-auto select-none pt-2 pb-6">
      {/* 1. AMBIENT GLOW BACKDROP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-gradient-to-tr from-indigo-600/25 via-cyan-500/20 to-transparent blur-[130px] pointer-events-none" />

      {/* 2. DUAL ORGANIC SWOOPING PORTAL (MATCHING REFERENCE MOCKUP EXACTLY) */}
      <div className="relative w-full h-[520px] sm:h-[600px] md:h-[640px] overflow-visible">
        <svg
          viewBox="0 0 700 700"
          className="w-full h-full drop-shadow-2xl overflow-visible select-none"
        >
          <defs>
            {/* Shape 1: Left Swooping Petal Ribbon */}
            <clipPath id="hero-left-organic">
              <path d="M 330,0 C 270,90 140,160 80,280 C 10,420 50,560 170,640 C 260,700 360,670 410,580 C 450,500 420,400 390,300 C 360,190 350,90 360,0 Z" />
            </clipPath>

            {/* Shape 2: Right Arched Canopy */}
            <clipPath id="hero-right-organic">
              <path d="M 430,0 C 420,100 435,210 470,310 C 510,420 530,520 470,640 L 700,640 L 700,180 C 700,70 600,0 480,0 Z" />
            </clipPath>
          </defs>

          {/* Continuous Photographic Image mapped across both organic shapes */}
          <image
            href={imageSrc}
            x="0"
            y="0"
            width="700"
            height="700"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hero-left-organic)"
          />
          <image
            href={imageSrc}
            x="0"
            y="0"
            width="700"
            height="700"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hero-right-organic)"
          />

          {/* Architectural Glass Highlights / Contours */}
          <path
            d="M 330,0 C 270,90 140,160 80,280 C 10,420 50,560 170,640 C 260,700 360,670 410,580 C 450,500 420,400 390,300 C 360,190 350,90 360,0 Z"
            fill="none"
            className="stroke-slate-300/40 dark:stroke-white/20"
            strokeWidth="1.5"
          />
          <path
            d="M 430,0 C 420,100 435,210 470,310 C 510,420 530,520 470,640 L 700,640 L 700,180 C 700,70 600,0 480,0 Z"
            fill="none"
            className="stroke-slate-300/40 dark:stroke-white/20"
            strokeWidth="1.5"
          />
        </svg>

        {/* =========================================================================
            3. FLOATING UI WIDGET CARDS MATCHING REFERENCE MOCKUP EXACTLY
            ========================================================================= */}

        {/* CARD 1: CHECKLIST CARD (Left side, overlapping the swooping curve) */}
        <div className="absolute -left-2 sm:-left-6 md:-left-8 lg:-left-10 top-[26%] sm:top-[28%] z-20 w-[240px] sm:w-[275px] md:w-[290px] bg-white/95 dark:bg-[#111827]/95 border border-slate-100 dark:border-white/15 rounded-[28px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)] dark:shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-[#F9FAFB] tracking-tight mb-3.5">
            Checklist
          </h3>

          <div className="space-y-2.5">
            {/* Item 1: Pill row with empty checkbox */}
            <div
              onClick={() => setChecklist((prev) => ({ ...prev, nvme: !prev.nvme }))}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 cursor-pointer group transition-all"
            >
              <span
                className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border-2 transition-all ${
                  checklist.nvme
                    ? "bg-[#3B82F6] border-[#3B82F6] text-white"
                    : "bg-transparent border-slate-300 dark:border-white/30 group-hover:border-slate-500"
                }`}
              >
                {checklist.nvme && <Check className="w-3 h-3 stroke-[3]" />}
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-[#F9FAFB] leading-tight">
                Approve event budget
              </span>
            </div>

            {/* Sub-action link matching "+ Add budget" in reference */}
            <div className="pl-4">
              <button
                type="button"
                className="text-xs font-bold text-[#3B82F6] hover:text-blue-600 inline-flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add budget</span>
              </button>
            </div>

            {/* Item 2: Pill row with checked blue checkbox */}
            <div
              onClick={() => setChecklist((prev) => ({ ...prev, litespeed: !prev.litespeed }))}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 cursor-pointer group transition-all"
            >
              <span
                className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border-2 transition-all ${
                  checklist.litespeed
                    ? "bg-[#3B82F6] border-[#3B82F6] text-white"
                    : "bg-transparent border-slate-300 dark:border-white/30 group-hover:border-slate-500"
                }`}
              >
                {checklist.litespeed && <Check className="w-3 h-3 stroke-[3]" />}
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-[#F9FAFB] leading-tight">
                Set-up RSVP email
              </span>
            </div>
          </div>

          {/* Footer link matching reference */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10">
            <Link
              href="/shared-hosting"
              className="text-[11px] font-medium text-slate-400 dark:text-[#9CA3AF] hover:text-[#3B82F6] inline-flex items-center gap-1.5 transition-colors"
            >
              <LinkIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">Read: Event Planning Tactics for 2026</span>
            </Link>
          </div>
        </div>

        {/* CARD 2: VENUE / LOCATION PILL (Top Right overlapping the right canopy) */}
        <div className="absolute right-2 sm:right-6 md:right-8 top-[10%] sm:top-[12%] z-20 bg-white/95 dark:bg-[#111827]/95 border border-slate-100 dark:border-white/15 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.12)] dark:shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
          {/* Black Rating Badge attached to top right corner */}
          <div className="absolute -top-3 -right-2 bg-slate-950 dark:bg-black text-white text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md border border-white/20">
            <span>4.9</span>
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          </div>

          {/* Venue & Location Row */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-[#9CA3AF] font-medium">
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">
              Venue
            </span>
            <span className="text-slate-300 dark:text-white/20">•</span>
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>New York / Delhi-NCR</span>
          </div>

          {/* Title & Blue Verified Badge Row */}
          <div className="flex items-center gap-2 mt-1">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-[#F9FAFB] tracking-tight">
              Industrial loft
            </h4>
            <span className="w-4 h-4 rounded-full bg-[#1D9BF0] flex items-center justify-center text-white shrink-0 shadow-sm">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
          </div>
        </div>

        {/* CARD 3: PAYMENT SCHEDULE & INVOICE CARD (Bottom Right) */}
        <div className="absolute -right-2 sm:-right-4 md:-right-6 bottom-0 sm:bottom-2 z-20 w-[270px] sm:w-[310px] md:w-[330px] bg-white/95 dark:bg-[#111827]/95 border border-slate-100 dark:border-white/15 rounded-[28px] p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.15)] dark:shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-[#F9FAFB] tracking-tight mb-3">
            Payment schedule
          </h4>

          {/* Invoice Header Row */}
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-white/10">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-700 dark:text-amber-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-base font-bold text-slate-900 dark:text-[#F9FAFB]">
              Invoice
            </span>
          </div>

          {/* Amount & Payment Method 2-Column Grid */}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <div>
              <p className="text-[11px] text-slate-400 dark:text-[#9CA3AF] font-medium">Amount</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-[#F9FAFB]">₹47,620 INR</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400 dark:text-[#9CA3AF] font-medium">Payment method</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Credit card</p>
            </div>
          </div>

          {/* Discount & Paid Badge Row */}
          <div className="pt-3 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-extrabold text-[#3B82F6]">
              Discount 15%
            </span>
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded-full">
              Paid
            </span>
          </div>

          {/* Amount & Due Date 2-Column Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div>
              <p className="text-[11px] text-slate-400 dark:text-[#9CA3AF] font-medium">Amount</p>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F9FAFB]">₹7,000 INR</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400 dark:text-[#9CA3AF] font-medium">Due date</p>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">10/23/2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
