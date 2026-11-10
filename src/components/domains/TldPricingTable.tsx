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
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter extension (e.g. .in)"
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-4 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-slate-200 text-xs sm:text-sm">
              <th className="py-4 px-6 font-bold">Extension</th>
              <th className="py-4 px-4 font-bold">Purpose / Target Audience</th>
              <th className="py-4 px-4 font-bold text-center">Registration (1 Yr)</th>
              <th className="py-4 px-4 font-bold text-center">Renewal (1 Yr)</th>
              <th className="py-4 px-4 font-bold text-center">Transfer</th>
              <th className="py-4 px-6 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTlds.length > 0 ? (
              filteredTlds.map((item) => (
                <tr
                  key={item.tld}
                  className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors text-xs sm:text-sm text-slate-300"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-white text-base font-mono">
                        {item.tld}
                      </span>
                      {item.sale && (
                        <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                          Sale
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-400 max-w-xs">
                    {item.description}
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-white font-mono">
                    ₹{item.registerPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center text-slate-300 font-mono">
                    ₹{item.renewPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400 font-mono">
                    ₹{item.transferPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      href={`https://portal.shrotihost.in/cart.php?a=add&domain=register&tld=${item.tld.replace(
                        ".",
                        ""
                      )}`}
                      isExternal={true}
                      rightIcon={<ExternalLink className="w-3 h-3" />}
                    >
                      Register
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-500 text-xs">
                  No domain extensions match your search filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] text-slate-500 text-center">
        * All prices exclude applicable taxes (such as GST) calculated during checkout on the client portal. Multi-year registration discounts available.
      </p>
    </div>
  );
};

