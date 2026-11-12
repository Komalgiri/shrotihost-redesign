"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { MobileDrawer } from "./MobileDrawer";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const hostingItems = [
    { label: "Shared NVMe", href: "/shared-hosting" },
    { label: "WordPress", href: "/wordpress-hosting" },
    { label: "Unlimited", href: "/unlimited-hosting" },
    { label: "Reseller", href: "/reseller-hosting" },
    { label: "Master Reseller", href: "/master-reseller-hosting" },
    { label: "Cloud VPS", href: "/vps" },
  ];

  const softwareItems = [
    { label: "Web Development", href: "/web-development" },
    { label: "App Development", href: "/app-development" },
    { label: "E-Commerce", href: "/ecommerce-development" },
    { label: "SaaS Engineering", href: "/saas-development" },
    { label: "WHMCS Modules", href: "/whmcs-modules" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo matching the screenshot */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-[#111827] border border-white/15 flex items-center justify-center p-2 group-hover:border-[#4F46E5]/60 transition-colors shadow-sm">
              <div className="flex items-end gap-1 h-5">
                <span className="w-1 h-2 rounded-full bg-[#818CF8]" />
                <span className="w-1 h-3 rounded-full bg-[#6366F1]" />
                <span className="w-1 h-5 rounded-full bg-[#4F46E5]" />
                <span className="w-1 h-3.5 rounded-full bg-[#06B6D4]" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="font-bold text-xl text-[#F9FAFB] tracking-tight">
                shrotihost
              </span>
              <span className="font-semibold text-xl text-[#06B6D4]">
                .in
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Hosting Dropdown matching screenshot */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("hosting")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                aria-expanded={activeDropdown === "hosting"}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === "hosting"
                    ? "text-[#F9FAFB] bg-white/5"
                    : "text-[#9CA3AF] hover:text-[#F9FAFB]"
                }`}
              >
                <span>Hosting</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "hosting" ? "rotate-180 text-[#06B6D4]" : "text-[#9CA3AF]"
                  }`}
                />
              </button>

              {/* Exact Floating Dropdown Menu from Screenshot */}
              {activeDropdown === "hosting" && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-in fade-in duration-150 z-50">
                  <div className="bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                    <div className="space-y-1">
                      {hostingItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-white/5 text-[#F9FAFB] text-sm font-medium transition-colors group"
                        >
                          <span className="group-hover:text-white transition-colors">{item.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Domains */}
            <Link
              href="/domains"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
            >
              Domains
            </Link>

            {/* 3. Software Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("software")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                aria-expanded={activeDropdown === "software"}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === "software"
                    ? "text-[#F9FAFB] bg-white/5"
                    : "text-[#9CA3AF] hover:text-[#F9FAFB]"
                }`}
              >
                <span>Software services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "software" ? "rotate-180 text-[#06B6D4]" : "text-[#9CA3AF]"
                  }`}
                />
              </button>

              {activeDropdown === "software" && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-in fade-in duration-150 z-50">
                  <div className="bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                    <div className="space-y-1">
                      {softwareItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-white/5 text-[#F9FAFB] text-sm font-medium transition-colors group"
                        >
                          <span className="group-hover:text-white transition-colors">{item.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                      <div className="pt-1.5 mt-1 border-t border-white/10">
                        <Link
                          href="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-4 py-2 rounded-xl hover:bg-[#4F46E5]/15 text-[#06B6D4] text-xs font-semibold"
                        >
                          <span>All Software Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. About */}
            <Link
              href="/about"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
            >
              About
            </Link>

            {/* 5. Contact */}
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA: Theme Toggle + Login + Client Portal Pill Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-sm font-semibold text-[#9CA3AF] hover:text-[#F9FAFB] px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Login
            </Link>
            <a
              href="https://portal.shrotihost.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4F46E5] hover:bg-indigo-500 text-white font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-indigo-600/25 transition-all"
            >
              <span>Client portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Trigger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-[#F9FAFB] hover:bg-[#1F2937] transition-colors border border-white/10"
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
