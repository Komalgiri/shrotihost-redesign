"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Zap, Info, ChevronDown } from "lucide-react";
import { SHARED_HOSTING_PLANS } from "@/data/hosting-plans";
import { SHARED_HOSTING_SPECS } from "@/data/hosting-features";
import { PricingCard } from "@/components/ui/PricingCard";

export const SharedHostingPricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "semiAnnual" | "annual">("monthly");
  const [activeSpecCategory, setActiveSpecCategory] = useState<string>("all");

  return (
    <div className="space-y-16">
      {/* Billing Cycle Selector */}
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === "monthly"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("semiAnnual")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === "semiAnnual"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            6 Months
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all relative ${
              billingCycle === "annual"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Annual (Best Value)</span>
            <span className="hidden sm:inline-block ml-1.5 text-[10px] uppercase font-bold bg-cyan-400 text-slate-950 px-1.5 py-0.5 rounded">
              Save 15%
            </span>
          </button>
        </div>

        <p className="text-xs text-slate-400">
          <span className="text-emerald-400 font-semibold">✓ Flat Renewal Rate:</span> Your renewal invoice is calculated at the exact same monthly cost.
        </p>
      </div>

      {/* 4-Tier Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
        {SHARED_HOSTING_PLANS.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            billingCycle={billingCycle}
          />
        ))}
      </div>

      {/* SIDE-BY-SIDE TECHNICAL SPECIFICATION COMPARISON TABLE */}
      <div className="pt-12 border-t border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Detailed Technical Specification Comparison
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Transparent resource allocations and software configurations across every shared hosting tier.
          </p>
        </div>

        {/* Responsive Table Wrapper with Horizontal Scroll */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950 text-slate-200 text-xs sm:text-sm">
                <th className="py-4 px-6 font-bold w-1/3">Feature / Specification</th>
                <th className="py-4 px-4 font-bold text-center">
                  Launch
                  <span className="block text-xs font-normal text-slate-400">₹49/mo</span>
                </th>
                <th className="py-4 px-4 font-bold text-center bg-indigo-950/20 text-indigo-300">
                  Grow (Popular)
                  <span className="block text-xs font-normal text-indigo-400">₹79/mo</span>
                </th>
                <th className="py-4 px-4 font-bold text-center">
                  Turbo
                  <span className="block text-xs font-normal text-slate-400">₹149/mo</span>
                </th>
                <th className="py-4 px-4 font-bold text-center">
                  Infinity
                  <span className="block text-xs font-normal text-slate-400">₹249/mo</span>
                </th>
              </tr>
            </thead>

            {/* Table Body Categories */}
            <tbody>
              {SHARED_HOSTING_SPECS.map((category, cIdx) => (
                <React.Fragment key={cIdx}>
                  <tr className="bg-slate-950/80 border-y border-slate-800/80">
                    <td
                      colSpan={5}
                      className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-indigo-400"
                    >
                      {category.title}
                    </td>
                  </tr>

                  {category.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors text-xs sm:text-sm text-slate-300"
                    >
                      <td className="py-3.5 px-6 font-medium text-slate-200 flex items-center gap-1.5">
                        <span>{row.name}</span>
                        {row.tooltip && (
                          <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">{row.launch}</td>
                      <td className="py-3.5 px-4 text-center bg-indigo-950/15 font-semibold text-white">
                        {row.grow}
                      </td>
                      <td className="py-3.5 px-4 text-center">{row.turbo}</td>
                      <td className="py-3.5 px-4 text-center">{row.infinity}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

