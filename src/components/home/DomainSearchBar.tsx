"use client";

import React, { useState } from "react";
import { Search, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { DOMAIN_TLD_LIST } from "@/data/domain-pricing";
import { Button } from "../ui/Button";

export const DomainSearchBar: React.FC = () => {
  const [domainName, setDomainName] = useState("");
  const [selectedTld, setSelectedTld] = useState(".in");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDomain = domainName.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "");
    if (!cleanDomain) return;

    const fullDomain = cleanDomain.includes(".") ? cleanDomain : `${cleanDomain}${selectedTld}`;
    const targetUrl = `https://portal.shrotihost.in/cart.php?a=add&domain=register&query=${encodeURIComponent(
      fullDomain
    )}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input Box */}
      <form
        onSubmit={handleSearch}
        className="relative bg-slate-900/90 border-2 border-indigo-500/40 hover:border-indigo-500 rounded-2xl p-2 sm:p-2.5 shadow-2xl shadow-indigo-950/40 backdrop-blur-md transition-all flex flex-col sm:flex-row items-center gap-2"
      >
        <div className="flex items-center gap-3 w-full px-3 py-1.5 flex-1">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            placeholder="Type your ideal domain name (e.g. mynewbrand)"
            className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
          <select
            value={selectedTld}
            onChange={(e) => setSelectedTld(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value=".in">.in (₹714)</option>
            <option value=".com">.com (₹1,169)</option>
            <option value=".co.in">.co.in (₹649)</option>
            <option value=".org">.org (₹1,039)</option>
            <option value=".net">.net (₹1,689)</option>
            <option value=".xyz">.xyz (₹259)</option>
          </select>

          <Button
            type="submit"
            variant="accent"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto font-bold"
          >
            Search
          </Button>
        </div>
      </form>

      {/* Popular TLD Pricing Ribbon */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
        <span className="text-slate-500 font-medium mr-1 hidden sm:inline">Popular TLDs:</span>
        {DOMAIN_TLD_LIST.slice(0, 6).map((item) => (
          <div
            key={item.tld}
            onClick={() => setSelectedTld(item.tld)}
            className={`cursor-pointer px-3 py-1.5 rounded-lg border transition-all flex items-center gap-2 ${
              selectedTld === item.tld
                ? "bg-indigo-600/20 border-indigo-500 text-white font-semibold"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300"
            }`}
          >
            <span className="font-bold text-white">{item.tld}</span>
            <span className="text-slate-400">₹{item.registerPrice}/yr</span>
            {item.sale && (
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                Sale
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-500">
        <span className="inline-flex items-center gap-1 text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Free DNS Management & Privacy Protection</span>
        </span>
        <span>•</span>
        <span className="text-slate-400">Instant Automated Provisioning</span>
      </div>
    </div>
  );
};

