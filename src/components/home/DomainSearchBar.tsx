"use client";

import React, { useState } from "react";
import { Search, ArrowRight, ShieldCheck, Check, Sparkles, ExternalLink } from "lucide-react";
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
    <div className="w-full">
      {/* Outer Card with Crisp Border and Layered Surface */}
      <div className="bg-[#111827] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-card">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-indigo-300 bg-[#4F46E5]/15 border border-[#4F46E5]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Instant Domain Registration</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] tracking-tight">
            Claim Your Digital Identity in Seconds
          </h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
            Search official domain availability with free DNS management, SSL certificates, and direct WHMCS provisioning.
          </p>
        </div>

        {/* Search Input Box */}
        <form
          onSubmit={handleSearch}
          className="relative max-w-3xl mx-auto bg-[#0B0F19] border border-white/10 hover:border-[#4F46E5]/50 focus-within:border-[#4F46E5] rounded-xl p-2 transition-all flex flex-col sm:flex-row items-center gap-2"
        >
          <div className="flex items-center gap-3 w-full px-3 py-1 flex-1">
            <Search className="w-5 h-5 text-[#9CA3AF] shrink-0" />
            <input
              type="text"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              placeholder="Enter your ideal domain name (e.g. yourbrand)"
              className="w-full bg-transparent text-[#F9FAFB] placeholder:text-[#9CA3AF] text-sm sm:text-base focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
            <select
              value={selectedTld}
              onChange={(e) => setSelectedTld(e.target.value)}
              className="bg-[#111827] border border-white/10 text-[#F9FAFB] rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            >
              <option value=".in">.in (₹714/yr)</option>
              <option value=".com">.com (₹1,169/yr)</option>
              <option value=".co.in">.co.in (₹649/yr)</option>
              <option value=".org">.org (₹1,039/yr)</option>
              <option value=".net">.net (₹1,689/yr)</option>
              <option value=".xyz">.xyz (₹259/yr)</option>
            </select>

            <Button
              type="submit"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-indigo-600/20"
            >
              Check Availability
            </Button>
          </div>
        </form>

        {/* Popular TLD Pricing Chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs max-w-4xl mx-auto">
          <span className="text-[#9CA3AF] font-medium mr-1 text-[11px] uppercase tracking-wider hidden sm:inline">
            Popular TLDs:
          </span>
          {DOMAIN_TLD_LIST.slice(0, 6).map((item) => (
            <button
              key={item.tld}
              type="button"
              onClick={() => setSelectedTld(item.tld)}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 text-xs ${
                selectedTld === item.tld
                  ? "bg-[#1F2937] border-white/20 text-[#F9FAFB] font-bold shadow-sm"
                  : "bg-[#0B0F19] border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]"
              }`}
            >
              <span className="font-bold text-[#F9FAFB]">{item.tld}</span>
              <span className="text-[#9CA3AF] font-mono">₹{item.registerPrice}/yr</span>
              {item.sale && (
                <span className="text-[9px] uppercase font-bold text-cyan-400 bg-cyan-950 px-1 py-0.2 rounded border border-cyan-800">
                  Sale
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 text-xs text-[#9CA3AF]">
          <span className="inline-flex items-center gap-1 text-[#9CA3AF]">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Free DNS Management & Privacy Protection</span>
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 text-[#9CA3AF]">
            <Check className="w-4 h-4 text-[#06B6D4]" />
            <span>Instant Cart Provisioning via WHMCS</span>
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 text-[#9CA3AF]">
            <Check className="w-4 h-4 text-[#06B6D4]" />
            <span>Flat Renewal Price Guarantee</span>
          </span>
        </div>
      </div>
    </div>
  );
};
