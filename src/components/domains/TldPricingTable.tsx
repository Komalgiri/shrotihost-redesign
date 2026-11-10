"use client";

import React, { useState } from "react";
import { Search, ExternalLink, ShieldCheck, Tag } from "lucide-react";
import { DOMAIN_TLD_LIST, TldPricing } from "@/data/domain-pricing";
import { Button } from "../ui/Button";

export const TldPricingTable: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const categories = [
    { id: "all", label: "All TLDs" },
    { id: "indian", label: "Indian (.in / .co.in)" },
    { id: "popular", label: "Popular (.com / .org)" },
    { id: "business", label: "Business (.store / .online)" },
    { id: "tech", label: "Tech (.tech / .xyz / .net)" },
  ];

  const filteredTlds = DOMAIN_TLD_LIST.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.tld.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.description.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Category Pills & Search Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                activeCategory === cat.id
                  ? "bg-[#1F2937] text-[#F9FAFB] border-white/20 shadow-sm font-bold"
                  : "bg-[#111827] text-[#9CA3AF] border-white/10 hover:text-[#F9FAFB] hover:bg-[#1F2937]/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter extension (e.g. .in)"
            className="w-full bg-[#111827] border border-white/10 rounded-xl pl-9 pr-4 py-1.5 text-xs text-[#F9FAFB] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] shadow-xs"
          />
        </div>
      </div>

      {/* TLD Table Wrapper */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#111827] shadow-card">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-white/10 bg-[#0B0F19] text-[#F9FAFB] text-xs sm:text-sm">
              <th className="py-4 px-6 font-bold">Extension (TLD)</th>
              <th className="py-4 px-4 font-bold text-center">Registration (1st Year)</th>
              <th className="py-4 px-4 font-bold text-center">Annual Renewal</th>
              <th className="py-4 px-4 font-bold text-center">Transfer Price</th>
              <th className="py-4 px-6 text-right font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTlds.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-[#9CA3AF] text-sm">
                  No extensions matched your filter &ldquo;{searchFilter}&rdquo;. Try another term.
                </td>
              </tr>
            ) : (
              filteredTlds.map((item) => (
                <tr
                  key={item.tld}
                  className="border-b border-white/5 hover:bg-[#1F2937]/50 transition-colors text-xs sm:text-sm text-[#F9FAFB]"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[#F9FAFB] font-mono text-base">
                        {item.tld}
                      </span>
                      {item.sale && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30 px-2 py-0.5 rounded-full">
                          <Tag className="w-3 h-3" />
                          <span>Promo</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#9CA3AF] block mt-0.5">{item.description}</span>
                  </td>

                  <td className="py-4 px-4 text-center font-bold text-[#F9FAFB] font-mono">
                    ₹{item.registerPrice}/yr
                  </td>

                  <td className="py-4 px-4 text-center text-[#9CA3AF] font-mono">
                    ₹{item.renewPrice}/yr
                  </td>

                  <td className="py-4 px-4 text-center text-[#9CA3AF] font-mono">
                    ₹{item.transferPrice}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={`https://portal.shrotihost.in/cart.php?a=add&domain=register&tld=${item.tld.replace(/^\./, "")}`}
                      isExternal={true}
                      className="text-xs font-semibold bg-[#1F2937] hover:bg-[#374151] text-[#F9FAFB] border border-white/10"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-3 h-3 ml-1 text-[#9CA3AF]" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footnote Disclosures */}
      <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 text-xs text-[#9CA3AF] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 text-[#F9FAFB] font-medium">
          <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
          <span>All domain registrations include free DNS Zone Management and Email Forwarding.</span>
        </span>
        <span className="text-[#9CA3AF]">All prices exclusive of applicable 18% GST</span>
      </div>
    </div>
  );
};
