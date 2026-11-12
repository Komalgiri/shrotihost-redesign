"use client";

import React, { useState } from "react";
import { Check, Info, Table2 } from "lucide-react";
import { SHARED_HOSTING_PLANS } from "@/data/hosting-plans";
import { SHARED_HOSTING_SPECS } from "@/data/hosting-features";
import { PricingCard } from "@/components/ui/PricingCard";

const PLAN_COLUMNS = [
  { key: "launch" as const, label: "Launch", price: "₹49/mo", featured: false },
  { key: "grow" as const, label: "Grow", price: "₹79/mo", featured: true },
  { key: "turbo" as const, label: "Turbo", price: "₹149/mo", featured: false },
  { key: "infinity" as const, label: "Infinity", price: "₹249/mo", featured: false },
];

function SpecCellValue({ value }: { value: string }) {
  const normalized = value.toLowerCase();
  const isAffirmative =
    normalized === "yes" ||
    normalized.startsWith("yes ") ||
    normalized === "included" ||
    normalized.startsWith("included");

  if (isAffirmative) {
    return (
      <span className="inline-flex items-center justify-center gap-1.5 text-[#10B981] font-semibold">
        <Check className="w-3.5 h-3.5 shrink-0" aria-hidden />
        <span className="text-[#F9FAFB] font-medium">{value}</span>
      </span>
    );
  }

  return <span className="text-[#9CA3AF] font-medium">{value}</span>;
}

export const SharedHostingPricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "semiAnnual" | "annual">("monthly");

  return (
    <div className="space-y-16">
      {/* Billing Cycle Selector */}
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#111827] border border-white/10 shadow-card">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === "monthly"
                ? "bg-[#1F2937] text-[#F9FAFB] shadow-md border border-white/20 font-bold"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]/50"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("semiAnnual")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === "semiAnnual"
                ? "bg-[#1F2937] text-[#F9FAFB] shadow-md border border-white/20 font-bold"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]/50"
            }`}
          >
            6 Months
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all relative ${
              billingCycle === "annual"
                ? "bg-[#1F2937] text-[#F9FAFB] shadow-md border border-white/20 font-bold"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]/50"
            }`}
          >
            <span>Annual (Best Value)</span>
            <span className="hidden sm:inline-block ml-1.5 text-[10px] uppercase font-bold bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30 px-1.5 py-0.5 rounded">
              Save 15%
            </span>
          </button>
        </div>

        <p className="text-xs text-[#9CA3AF]">
          <span className="text-[#10B981] font-semibold">✓ Flat Renewal Rate:</span> Your renewal invoice is calculated at the exact same monthly cost.
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

      {/* Technical specification matrix — theme tokens (dark + html.light overrides) */}
      <div className="pt-12 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 max-w-4xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#06B6D4]">
              <Table2 className="w-3.5 h-3.5" />
              <span>Full spec matrix</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F9FAFB] tracking-tight">
              Detailed Technical Specification Comparison
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-2xl">
              Transparent resource allocations and software configurations across every shared hosting tier.
            </p>
          </div>
          <p className="text-[11px] text-[#9CA3AF] sm:text-right shrink-0">
            Swipe horizontally on mobile · Grow column highlighted
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111827] shadow-card overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] opacity-80" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px] border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#0B0F19]/90 text-left">
                  <th
                    scope="col"
                    className="sticky left-0 z-20 min-w-[200px] sm:min-w-[240px] py-4 pl-5 pr-4 font-bold text-[#F9FAFB] bg-[#0B0F19]/95 backdrop-blur-sm border-r border-white/10"
                  >
                    Feature / specification
                  </th>
                  {PLAN_COLUMNS.map((plan) => (
                    <th
                      key={plan.key}
                      scope="col"
                      className={`py-4 px-3 sm:px-4 text-center font-bold text-[#F9FAFB] ${
                        plan.featured
                          ? "bg-[#4F46E5]/15 border-x border-[#4F46E5]/25 relative"
                          : ""
                      }`}
                    >
                      {plan.featured && (
                        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-wider text-[#818CF8] px-2 py-0.5 rounded-full bg-[#4F46E5]/20 border border-[#4F46E5]/30">
                          Popular
                        </span>
                      )}
                      <span className={plan.featured ? "block mt-5" : "block"}>{plan.label}</span>
                      <span className="block text-[11px] font-semibold text-[#06B6D4] mt-0.5">
                        {plan.price}
                      </span>
                      <span className="block text-[10px] font-medium text-[#9CA3AF] mt-1">
                        Same on renewal
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SHARED_HOSTING_SPECS.map((category, cIdx) => (
                  <React.Fragment key={cIdx}>
                    <tr className="border-y border-white/10 bg-[#1F2937]/35">
                      <td
                        colSpan={5}
                        className="py-2.5 pl-5 pr-4 text-[11px] font-bold uppercase tracking-wider text-[#818CF8]"
                      >
                        {category.title}
                      </td>
                    </tr>
                    {category.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={`border-b border-white/[0.06] transition-colors hover:bg-[#1F2937]/25 ${
                          rIdx % 2 === 1 ? "bg-[#0B0F19]/25" : ""
                        }`}
                      >
                        <th
                          scope="row"
                          className="sticky left-0 z-10 py-3.5 pl-5 pr-4 font-medium text-left text-[#F9FAFB] bg-[#111827] border-r border-white/10"
                        >
                          <div className="flex items-start gap-2">
                            <span className="leading-snug">{row.name}</span>
                            {row.tooltip && (
                              <Info
                                className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0 mt-0.5"
                                aria-label="More information available"
                              />
                            )}
                          </div>
                        </th>
                        {PLAN_COLUMNS.map((plan) => (
                          <td
                            key={plan.key}
                            className={`py-3.5 px-3 sm:px-4 text-center align-middle ${
                              plan.featured ? "bg-[#4F46E5]/10 border-x border-[#4F46E5]/15" : ""
                            }`}
                          >
                            <SpecCellValue value={row[plan.key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
