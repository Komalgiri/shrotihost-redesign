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
    const iconClass = "w-4 h-4 text-blue-600";
    switch (name) {
      case "Server":
        return <Server className={iconClass} />;
      case "Flame":
        return <Flame className="w-4 h-4 text-amber-500" />;
      case "Infinity":
        return <Infinity className="w-4 h-4 text-teal-500" />;
      case "Users":
        return <Users className="w-4 h-4 text-emerald-600" />;
      case "Terminal":
        return <Terminal className="w-4 h-4 text-blue-600" />;
      case "Globe":
        return <Globe className={iconClass} />;
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-teal-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-purple-600" />;
      case "Puzzle":
        return <Puzzle className="w-4 h-4 text-amber-500" />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Building2":
        return <Building2 className={iconClass} />;
      case "Mail":
        return <Mail className="w-4 h-4 text-teal-600" />;
      case "Briefcase":
        return <Briefcase className="w-4 h-4 text-emerald-600" />;
      default:
        return <Server className={iconClass} />;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            {/* Custom Architectural SVG Mark */}
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 shadow-sm group-hover:border-blue-500 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-blue-500 group-hover:scale-105 transition-transform"
              >
                <path
                  d="M4 14.5C4 12.0147 6.01472 10 8.5 10C8.84752 10 9.18374 10.0394 9.50654 10.1143C10.2312 6.57684 13.3496 4 17 4C21.4183 4 25 7.58172 25 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-40"
                />
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="5"
                  rx="1.5"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="#1E293B"
                />
                <circle cx="6" cy="9.5" r="1" fill="#38BDF8" />
                <circle cx="9" cy="9.5" r="1" fill="#34D399" />
                <rect
                  x="3"
                  y="14"
                  width="18"
                  height="5"
                  rx="1.5"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  fill="#1E293B"
                />
                <circle cx="6" cy="16.5" r="1" fill="#38BDF8" />
                <circle cx="9" cy="16.5" r="1" fill="#34D399" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight leading-none">
                Shroti<span className="text-blue-600">Host</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
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
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        isOpen
                          ? "text-blue-600 bg-blue-50/80"
                          : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/70"
                      }`}
                    >
                      <span>{navItem.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {/* MegaMenu Dropdown Surface */}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 w-[620px] -ml-8 animate-in fade-in duration-150 z-50">
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-5 overflow-hidden">
                          <div className="grid grid-cols-2 gap-6">
                            {navItem.groups.map((group, idx) => (
                              <div key={idx} className="space-y-3">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                                  {group.title}
                                </h4>
                                <div className="space-y-1">
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                                        {getIcon(item.iconName)}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                          <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {item.label}
                                          </span>
                                          {item.badge && (
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                              {item.badge}
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
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
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50 -mx-5 -mb-5 px-5 py-3">
                            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Flat renewal price on all shared hosting plans</span>
                            </span>
                            <Link
                              href="/shared-hosting"
                              onClick={() => setActiveDropdown(null)}
                              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
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
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{navItem.label}</span>
                  {navItem.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
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
            <div className="flex items-center bg-slate-100 border border-slate-200/80 rounded-lg p-0.5 text-xs text-slate-600">
              {(["INR", "USD", "EUR"] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-1 rounded font-semibold transition-all ${
                    currency === curr
                      ? "bg-white text-slate-900 shadow-sm"
                      : "hover:text-slate-900"
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
              className="text-slate-700 hover:text-slate-950 font-semibold"
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
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
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
