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
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/80 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Instant Domain Registration</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Claim Your Digital Identity in Seconds
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Search official domain availability with free DNS management, SSL certificates, and direct WHMCS provisioning.
          </p>
        </div>

        {/* Search Input Box */}
        <form
          onSubmit={handleSearch}
          className="relative max-w-3xl mx-auto bg-slate-50 border-2 border-slate-200 hover:border-indigo-400 focus-within:border-indigo-600 rounded-xl p-2 transition-all flex flex-col sm:flex-row items-center gap-2"
        >
          <div className="flex items-center gap-3 w-full px-3 py-1 flex-1">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              placeholder="Enter your ideal domain name (e.g. yourbrand)"
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
            <select
              value={selectedTld}
              onChange={(e) => setSelectedTld(e.target.value)}
              className="bg-white border border-slate-300 text-slate-900 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full sm:w-auto font-semibold"
            >
              Check Availability
            </Button>
          </div>
        </form>

        {/* Popular TLD Pricing Chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs max-w-4xl mx-auto">
          <span className="text-slate-400 font-medium mr-1 text-[11px] uppercase tracking-wider hidden sm:inline">
            Popular TLDs:
          </span>
          {DOMAIN_TLD_LIST.slice(0, 6).map((item) => (
            <button
              key={item.tld}
              type="button"
              onClick={() => setSelectedTld(item.tld)}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 text-xs ${
                selectedTld === item.tld
                  ? "bg-indigo-50 border-indigo-300 text-indigo-700 font-bold shadow-xs"
                  : "bg-slate-50/70 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100/70"
              }`}
            >
              <span className="font-bold text-slate-900">{item.tld}</span>
              <span className="text-slate-500 font-mono">₹{item.registerPrice}/yr</span>
              {item.sale && (
                <span className="text-[9px] uppercase font-bold text-cyan-700 bg-cyan-50 px-1 py-0.2 rounded border border-cyan-200">
                  Sale
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Free DNS Management & Privacy Protection</span>
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 text-slate-600">
            <Check className="w-4 h-4 text-indigo-600" />
            <span>Instant Cart Provisioning via WHMCS</span>
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 text-slate-600">
            <Check className="w-4 h-4 text-indigo-600" />
            <span>Flat Renewal Price Guarantee</span>
          </span>
        </div>
      </div>
    </div>
  );
};
