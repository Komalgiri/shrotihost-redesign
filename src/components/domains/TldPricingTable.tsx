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
                  ? "bg-white text-slate-950 border-slate-200/80 shadow-sm font-bold"
                  : "bg-slate-100 text-slate-600 border-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter extension (e.g. .in)"
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
          />
        </div>
      </div>

      {/* TLD Table Wrapper */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm">
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
                <td colSpan={5} className="py-12 text-center text-slate-500 text-sm">
                  No extensions matched your filter &ldquo;{searchFilter}&rdquo;. Try another term.
                </td>
              </tr>
            ) : (
              filteredTlds.map((item) => (
                <tr
                  key={item.tld}
                  className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors text-xs sm:text-sm"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-950 font-mono text-base">
                        {item.tld}
                      </span>
                      {item.sale && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 border border-cyan-200 px-2 py-0.5 rounded-full">
                          <Tag className="w-3 h-3" />
                          <span>Promo</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 block mt-0.5">{item.description}</span>
                  </td>

                  <td className="py-4 px-4 text-center font-bold text-slate-950 font-mono">
                    ₹{item.registerPrice}/yr
                  </td>

                  <td className="py-4 px-4 text-center text-slate-600 font-mono">
                    ₹{item.renewPrice}/yr
                  </td>

                  <td className="py-4 px-4 text-center text-slate-600 font-mono">
                    ₹{item.transferPrice}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={`https://portal.shrotihost.in/cart.php?a=add&domain=register&tld=${item.tld.replace(/^\./, "")}`}
                      isExternal={true}
                      className="text-xs font-semibold"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footnote Disclosures */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 text-slate-700 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>All domain registrations include free DNS Zone Management and Email Forwarding.</span>
        </span>
        <span className="text-slate-400">All prices exclusive of applicable 18% GST</span>
      </div>
    </div>
  );
};
