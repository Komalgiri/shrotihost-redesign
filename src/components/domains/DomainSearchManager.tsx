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
        className="relative bg-white border-2 border-slate-200 hover:border-indigo-400 focus-within:border-indigo-600 rounded-2xl p-2.5 sm:p-3 shadow-sm transition-all flex flex-col sm:flex-row items-center gap-2.5"
      >
        <div className="flex items-center gap-3 w-full px-3 py-1 flex-1">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (searchError) setSearchError(null);
            }}
            placeholder="Search your brand name (e.g. yourstartup)"
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
          <select
            value={selectedTld}
            onChange={(e) => setSelectedTld(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            variant="primary"
            size="md"
            disabled={isSearching}
            className="w-full sm:w-auto font-bold shrink-0 min-w-[120px]"
          >
            {isSearching ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Searching...</span>
              </>
            ) : (
              <>
                <span>Search</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Validation Error Message */}
      {searchError && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{searchError}</span>
        </div>
      )}

      {/* Search Result Card (Demo Simulated State) */}
      {searchResult && (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xl sm:text-2xl font-bold text-slate-950 font-mono">
                  {searchResult.domain}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Available (Demo)
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Renewable annually at ₹{searchResult.renewPrice}/year with free DNS management.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Registration:</span>
                <span className="text-2xl font-black text-slate-950 font-mono">
                  ₹{searchResult.price}
                </span>
                <span className="text-xs text-slate-500">/1st yr</span>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => handlePortalRedirect(searchResult.domain)}
                className="font-bold"
              >
                <span>Order on Portal</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Honest Demo State Disclosure Notice */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-semibold">Simulated Search Demonstration: </strong>
              <span>
                This frontend simulation does not query the live EPP domain registry API directly. Clicking &ldquo;Order on Portal&rdquo; checks real-time global availability and completes registration on the live WHMCS client portal.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Popular Extensions Quick Filter Ribbon */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
        <span className="text-slate-400 font-medium mr-1 hidden sm:inline text-[11px] uppercase tracking-wider">
          Top Extensions:
        </span>
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
            className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 text-xs ${
              selectedTld === item.tld
                ? "bg-indigo-50 border-indigo-300 text-indigo-700 font-bold shadow-xs"
                : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100"
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
    </div>
  );
};
