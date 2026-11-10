"use client";

import React, { useState } from "react";
import { Search, Loader2, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, ExternalLink, Info } from "lucide-react";
import { DOMAIN_TLD_LIST } from "@/data/domain-pricing";
import { Button } from "../ui/Button";

export const DomainSearchManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTld, setSelectedTld] = useState(".in");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    tld: string;
    price: number;
    renewPrice: number;
    availableDemo: boolean;
  } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError(null);
    setSearchResult(null);

    const cleaned = searchTerm.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "");
    if (!cleaned) {
      setSearchError("Please enter a domain name to search.");
      return;
    }

    // Basic domain validation (alphanumeric and hyphens, no invalid symbols)
    const domainPattern = /^[a-z0-9][a-z0-9-]*(\.[a-z]{2,})?$/;
    if (!domainPattern.test(cleaned)) {
      setSearchError("Domain names can only contain letters, numbers, and hyphens, and cannot start with a hyphen.");
      return;
    }

    setIsSearching(true);

    // Simulate search delay with demo notification
    setTimeout(() => {
      setIsSearching(false);
      let baseName = cleaned;
      let tld = selectedTld;

      if (cleaned.includes(".")) {
        const parts = cleaned.split(".");
        baseName = parts[0];
        tld = `.${parts.slice(1).join(".")}`;
      }

      const tldConfig = DOMAIN_TLD_LIST.find((t) => t.tld === tld) || {
        tld,
        registerPrice: 999,
        renewPrice: 1199,
        transferPrice: 1199,
      };

      setSearchResult({
        domain: `${baseName}${tld}`,
        tld,
        price: tldConfig.registerPrice,
        renewPrice: tldConfig.renewPrice,
        availableDemo: true,
      });
    }, 600);
  };

  const handlePortalRedirect = (domainToOrder: string) => {
    const url = `https://portal.shrotihost.in/cart.php?a=add&domain=register&query=${encodeURIComponent(
      domainToOrder
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Input Box */}
      <form
        onSubmit={handleSearch}
        className="relative bg-slate-900/90 border-2 border-indigo-500/50 hover:border-indigo-500 rounded-2xl p-2.5 sm:p-3 shadow-2xl shadow-indigo-950/50 backdrop-blur-md transition-all flex flex-col sm:flex-row items-center gap-2.5"
      >
        <div className="flex items-center gap-3 w-full px-3 py-1 flex-1">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (searchError) setSearchError(null);
            }}
            placeholder="Search your brand name (e.g. yourstartup)"
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
            <option value=".store">.store (₹299)</option>
            <option value=".tech">.tech (₹399)</option>
          </select>

          <Button
            type="submit"
            variant="accent"
            size="md"
            disabled={isSearching}
            className="w-full sm:w-auto font-bold min-w-[110px]"
          >
            {isSearching ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Checking...</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <span>Check Domain</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
        </div>
      </form>

      {/* Validation Error Message */}
      {searchError && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-150">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
          <span>{searchError}</span>
        </div>
      )}

      {/* Search Result Banner (Clearly Marked as Demo Simulation with Live Registry Deep Link) */}
      {searchResult && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-xl space-y-4 animate-in fade-in duration-200">
          {/* Demo Notice Disclaimer */}
          <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>Simulated Demo Result:</strong> Live registry availability is verified directly at checkout. Click below to verify in real-time.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                  {searchResult.domain}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready to Register
                </span>
              </div>
              <p className="text-xs text-slate-400">
                1st Year Registration: <strong className="text-white font-mono">₹{searchResult.price}</strong> • Renewal Rate: <span className="font-mono">₹{searchResult.renewPrice}/yr</span>
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => handlePortalRedirect(searchResult.domain)}
              rightIcon={<ExternalLink className="w-4 h-4" />}
              className="shrink-0 font-bold"
            >
              Verify & Register on Portal
            </Button>
          </div>
        </div>
      )}

      {/* Popular Extensions Quick Filter Ribbon */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
        <span className="text-slate-500 font-medium mr-1 hidden sm:inline">Popular Extensions:</span>
        {DOMAIN_TLD_LIST.slice(0, 6).map((item) => (
          <button
            key={item.tld}
            type="button"
            onClick={() => {
              setSelectedTld(item.tld);
              if (searchTerm) {
                const base = searchTerm.split(".")[0];
                setSearchTerm(base);
              }
            }}
            className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-2 ${
              selectedTld === item.tld
                ? "bg-indigo-600/20 border-indigo-500 text-white font-semibold"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300"
            }`}
          >
            <span className="font-bold text-white">{item.tld}</span>
            <span className="text-slate-400">₹{item.registerPrice}/yr</span>
            {item.sale && (
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-1 py-0.2 rounded">
                Sale
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-1">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Free DNS Records Management</span>
        </span>
        <span>•</span>
        <span>Free Privacy WHOIS Guard</span>
        <span>•</span>
        <span>Instant Activation</span>
      </div>
    </div>
  );
};

