"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  Server,
  Flame,
  Infinity,
  Users,
  Terminal,
  Globe,
  Smartphone,
  ShoppingBag,
  Cpu,
  Puzzle,
  Building2,
  Mail,
  Briefcase,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { MAIN_NAV_LINKS } from "@/data/navigation";
import { Button } from "../ui/Button";
import { MobileDrawer } from "./MobileDrawer";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR">("INR");

  const getIcon = (name?: string) => {
    switch (name) {
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-amber-400" />;
      case "Infinity":
        return <Infinity className="w-5 h-5 text-cyan-400" />;
      case "Users":
        return <Users className="w-5 h-5 text-emerald-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-violet-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case "Puzzle":
        return <Puzzle className="w-5 h-5 text-amber-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-indigo-400" />;
      case "Mail":
        return <Mail className="w-5 h-5 text-cyan-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      default:
        return <Server className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center font-extrabold text-white text-lg sm:text-xl shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform duration-200">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-none">
                Shroti<span className="text-indigo-400">Host</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                Cloud & Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with MegaMenu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV_LINKS.map((navItem) => {
              if (navItem.hasMegaMenu && navItem.groups) {
                const isOpen = activeDropdown === navItem.label;
                return (
                  <div
                    key={navItem.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(navItem.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        isOpen
                          ? "text-white bg-slate-800/80"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                      }`}
                    >
                      <span>{navItem.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-indigo-400" : "text-slate-500"
                        }`}
                      />
                    </button>

                    {/* MegaMenu Dropdown Surface */}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 w-[620px] -ml-8 animate-in fade-in duration-150 z-50">
                        <div className="bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-5 overflow-hidden">
                          <div className="grid grid-cols-2 gap-6">
                            {navItem.groups.map((group, idx) => (
                              <div key={idx} className="space-y-3">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-2">
                                  {group.title}
                                </h4>
                                <div className="space-y-1">
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                                    >
                                      <div className="w-9 h-9 rounded-lg bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
                                        {getIcon(item.iconName)}
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                          <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                                            {item.label}
                                          </span>
                                          {item.badge && (
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                                              {item.badge}
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Dropdown Banner Footnote */}
                          <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 bg-slate-950/40 -mx-5 -mb-5 px-5 py-3">
                            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>Flat renewal price on all shared hosting plans</span>
                            </span>
                            <Link
                              href="/shared-hosting"
                              onClick={() => setActiveDropdown(null)}
                              className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
                            >
                              <span>View All Plans</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{navItem.label}</span>
                  {navItem.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {navItem.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions (Currency + Client Portal + CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs text-slate-400">
              {(["INR", "USD", "EUR"] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-1 rounded font-medium transition-colors ${
                    currency === curr
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "hover:text-white"
                  }`}
                >
                  {curr === "INR" ? "₹ INR" : curr === "USD" ? "$ USD" : "€ EUR"}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              href="https://portal.shrotihost.in"
              isExternal={true}
            >
              Client Login
            </Button>

            <Button
              variant="primary"
              size="sm"
              href="/shared-hosting"
              rightIcon={<Zap className="w-3.5 h-3.5" />}
            >
              Explore Hosting
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

