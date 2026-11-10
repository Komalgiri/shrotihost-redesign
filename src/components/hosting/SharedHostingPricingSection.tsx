"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Zap, Info, ChevronDown } from "lucide-react";
import { SHARED_HOSTING_PLANS } from "@/data/hosting-plans";
import { SHARED_HOSTING_SPECS } from "@/data/hosting-features";
import { PricingCard } from "@/components/ui/PricingCard";

export const SharedHostingPricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "semiAnnual" | "annual">("monthly");

  return (
    <div className="space-y-16">
      {/* Billing Cycle Selector */}
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-xs">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === "monthly"
                ? "bg-white text-slate-950 shadow-sm border border-slate-200/70"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("semiAnnual")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === "semiAnnual"
                ? "bg-white text-slate-950 shadow-sm border border-slate-200/70"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            6 Months
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all relative ${
              billingCycle === "annual"
                ? "bg-white text-slate-950 shadow-sm border border-slate-200/70"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            <span>Annual (Best Value)</span>
            <span className="hidden sm:inline-block ml-1.5 text-[10px] uppercase font-bold bg-cyan-100 text-cyan-800 border border-cyan-200 px-1.5 py-0.5 rounded">
              Save 15%
            </span>
          </button>
        </div>

        <p className="text-xs text-slate-500">
          <span className="text-emerald-700 font-semibold">✓ Flat Renewal Rate:</span> Your renewal invoice is calculated at the exact same monthly cost.
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
      <div className="pt-12 border-t border-slate-200/90">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Detailed Technical Specification Comparison
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Transparent resource allocations and software configurations across every shared hosting tier.
          </p>
        </div>

        {/* Responsive Table Wrapper with Horizontal Scroll */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm">
                <th className="py-4 px-6 font-bold w-1/3">Feature / Specification</th>
                <th className="py-4 px-4 font-bold text-center">
                  Launch
                  <span className="block text-xs font-normal text-slate-500">₹49/mo</span>
                </th>
                <th className="py-4 px-4 font-bold text-center bg-indigo-50/50 text-indigo-900">
                  Grow (Popular)
                  <span className="block text-xs font-normal text-indigo-700">₹79/mo</span>
                </th>
                <th className="py-4 px-4 font-bold text-center">
                  Turbo
                  <span className="block text-xs font-normal text-slate-500">₹149/mo</span>
                </th>
                <th className="py-4 px-4 font-bold text-center">
                  Infinity
                  <span className="block text-xs font-normal text-slate-500">₹249/mo</span>
                </th>
              </tr>
            </thead>

            {/* Table Body Categories */}
            <tbody>
              {SHARED_HOSTING_SPECS.map((category, cIdx) => (
                <React.Fragment key={cIdx}>
                  <tr className="bg-slate-50/80 border-y border-slate-200/80">
                    <td
                      colSpan={5}
                      className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-indigo-700"
                    >
                      {category.title}
                    </td>
                  </tr>

                  {category.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors text-xs sm:text-sm text-slate-700"
                    >
                      <td className="py-3.5 px-6 font-medium text-slate-900 flex items-center gap-1.5">
                        <span>{row.name}</span>
                        {row.tooltip && (
                          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">{row.launch}</td>
                      <td className="py-3.5 px-4 text-center bg-indigo-50/30 font-semibold text-slate-950">
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
