"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, ShieldCheck, Check } from "lucide-react";
import {
  SHARED_HOSTING_PLANS,
  WORDPRESS_HOSTING_PLANS,
  UNLIMITED_HOSTING_PLANS,
  RESELLER_HOSTING_PLANS,
  MASTER_RESELLER_HOSTING_PLANS,
  VPS_HOSTING_PLANS,
  HostingPlan,
} from "@/data/hosting-plans";
import { PricingCard } from "../ui/PricingCard";

type CategoryId =
  | "shared"
  | "wordpress"
  | "unlimited"
  | "reseller"
  | "master-reseller"
  | "vps"
  | "whmcs-modules";

type Currency = "USD" | "INR";
type BillingCycle = "monthly" | "semiAnnual" | "annual";

export const HostingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>("shared");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [currency, setCurrency] = useState<Currency>("INR");
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  // Conversion rate: 1 USD ≈ 80 INR
  const convertPrice = (priceInInr: number): string => {
    if (currency === "INR") {
      return priceInInr.toString();
    }
    // Clean SaaS USD pricing
    if (priceInInr <= 50) return "0.99";
    if (priceInInr <= 70) return "0.99";
    if (priceInInr <= 100) return "1.49";
    if (priceInInr <= 130) return "1.69";
    if (priceInInr <= 160) return "1.99";
    if (priceInInr <= 200) return "2.49";
    if (priceInInr <= 250) return "2.99";
    if (priceInInr <= 320) return "3.99";
    if (priceInInr <= 500) return "6.49";
    if (priceInInr <= 600) return "7.49";
    if (priceInInr <= 900) return "10.99";
    if (priceInInr <= 1000) return "12.49";
    if (priceInInr <= 1100) return "13.99";
    if (priceInInr <= 1500) return "18.99";
    if (priceInInr <= 1700) return "21.99";
    return (priceInInr / 80).toFixed(2);
  };

  const getDisplayPrice = (plan: HostingPlan): string => {
    let priceInr = plan.priceMonthly;
    if (billingCycle === "annual" && plan.priceAnnual) {
      priceInr = Math.round(plan.priceAnnual / 12);
    } else if (billingCycle === "semiAnnual" && plan.priceSemiAnnual) {
      priceInr = Math.round(plan.priceSemiAnnual / 6);
    }
    return convertPrice(priceInr);
  };

  const currencySymbol = currency === "USD" ? "$" : "₹";

  // Dedicated WHMCS modules plans data
  const WHMCS_MODULE_PLANS: HostingPlan[] = [
    {
      id: "washroti-module",
      name: "WaShroti WhatsApp",
      tierSubtitle: "Real-time client WhatsApp notifications for WHMCS",
      priceMonthly: 199,
      renewalPriceSame: true,
      popular: true,
      featuredBadge: "POPULAR",
      websites: "1 WHMCS Domain",
      storage: "Meta Cloud API",
      ram: "Automated Triggers",
      cpu: "PHP 8.1 - 8.2",
      bandwidth: "Instant Delivery",
      emailAccounts: "Full Merge Fields",
      ctaText: "Order WaShroti Module",
      orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules/washroti",
      features: [
        "Instant Invoice & Payment Alerts",
        "Ticket Reply Notifications",
        "Supports Official Meta WhatsApp API",
        "Dynamic WHMCS Merge Fields",
        "12 Months Free Updates",
      ],
    },
    {
      id: "smart-gateway-module",
      name: "Smart Gateway Fees",
      tierSubtitle: "Pass payment gateway fees transparently to protect margins",
      priceMonthly: 249,
      renewalPriceSame: true,
      popular: false,
      websites: "1 WHMCS Domain",
      storage: "Razorpay / Stripe",
      ram: "Fixed + % Surcharges",
      cpu: "PHP 8.1 - 8.2",
      bandwidth: "Cart Line-Item",
      emailAccounts: "Exemption Rules",
      ctaText: "Order Gateway Fees",
      orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules/gateway-fees",
      features: [
        "Percentage + Fixed Surcharge Rules",
        "Exempt High-Margin Products",
        "Razorpay, Cashfree, Stripe & PayPal",
        "Full Invoice Reconciliation",
        "12 Months Free Updates",
      ],
    },
    {
      id: "social-proof-module",
      name: "Social Proof Alerts",
      tierSubtitle: "Display live sales popups to boost visitor conversions",
      priceMonthly: 299,
      renewalPriceSame: true,
      popular: false,
      websites: "1 WHMCS Domain",
      storage: "Cart Live Feed",
      ram: "Custom Styling",
      cpu: "PHP 8.1 - 8.2",
      bandwidth: "Mobile Optimized",
      emailAccounts: "Privacy Shield",
      ctaText: "Order Social Proof",
      orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules",
      features: [
        "Recent Purchase Activity Popups",
        "Anonymized Customer Locations",
        "Custom Timing & Positioning",
        "Verified Boost to Checkout Conversion",
        "12 Months Free Updates",
      ],
    },
  ];

  const categories = [
    {
      id: "shared" as const,
      label: "Shared Hosting",
      title: "Simple, honest pricing",
      subtitle: "Every plan renews at the price listed here, on every billing cycle. No increase later.",
      plans: SHARED_HOSTING_PLANS,
      viewAllHref: "/shared-hosting",
    },
    {
      id: "wordpress" as const,
      label: "WordPress Hosting",
      title: "Managed WordPress tuned for raw speed",
      subtitle: "Pre-configured LSCache, dedicated Redis object caching, and 1-click staging.",
      plans: WORDPRESS_HOSTING_PLANS.slice(0, 3),
      viewAllHref: "/wordpress-hosting",
    },
    {
      id: "unlimited" as const,
      label: "Unlimited Hosting",
      title: "Unmetered high-capacity cloud hosting",
      subtitle: "Unmetered NVMe SSD storage and bandwidth under fair use with daily JetBackups.",
      plans: UNLIMITED_HOSTING_PLANS.slice(0, 3),
      viewAllHref: "/unlimited-hosting",
    },
    {
      id: "reseller" as const,
      label: "Reseller Hosting",
      title: "Start your own hosting business",
      subtitle: "Full WHM, white-label, free WHMCS on annual plans. Your brand, our servers.",
      plans: RESELLER_HOSTING_PLANS.slice(0, 3),
      viewAllHref: "/reseller-hosting",
    },
    {
      id: "master-reseller" as const,
      label: "Master Reseller Hosting",
      title: "Launch your multi-tier reseller empire",
      subtitle: "Create sub-reseller WHM accounts, overselling enabled, and private white-label nameservers.",
      plans: MASTER_RESELLER_HOSTING_PLANS.slice(0, 3),
      viewAllHref: "/master-reseller-hosting",
    },
    {
      id: "vps" as const,
      label: "VPS",
      title: "Dedicated KVM cloud virtual machines",
      subtitle: "Dedicated vCPU cores, full root SSH access, guaranteed RAM, and unmetered 1 Gbps port.",
      plans: VPS_HOSTING_PLANS.slice(0, 3),
      viewAllHref: "/vps",
    },
    {
      id: "whmcs-modules" as const,
      label: "Whatsapp Notification Modules/Plugins",
      title: "Automate client notifications with WaShroti",
      subtitle: "Instant WhatsApp alerts for invoices, payment confirmations, and support tickets.",
      plans: WHMCS_MODULE_PLANS,
      viewAllHref: "/whmcs-modules",
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <div className="space-y-8 select-none text-left">
      {/* 1. TOP EDITORIAL HEADING MATCHING USER REQUEST */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#06B6D4]">
            Store • {currentCategory.label}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
            {currentCategory.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-3xl leading-relaxed pt-0.5">
            {currentCategory.subtitle}
          </p>
        </div>

        {/* Billing Cycle Pill Selector (Monthly / 6 Months / Yearly) */}
        <div className="inline-flex items-center p-1 rounded-2xl bg-[#111827] border border-white/10 shrink-0 shadow-sm">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              billingCycle === "monthly"
                ? "bg-[#4F46E5] text-white shadow-sm font-bold"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("semiAnnual")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              billingCycle === "semiAnnual"
                ? "bg-[#4F46E5] text-white shadow-sm font-bold"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5"
            }`}
          >
            6 Months
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              billingCycle === "annual"
                ? "bg-[#4F46E5] text-white shadow-sm font-bold"
                : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* 2. CATEGORY PILL TABS + CURRENCY DROPDOWN ROW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
        {/* Horizontal Scrollable Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 min-w-0 flex-1">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? "bg-[#3B1F54] border border-[#A855F7] text-[#F3E8FF] shadow-md font-bold"
                    : "bg-[#111827] border border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Currency Selector on Right (USD / INR) */}
        <div className="relative shrink-0 self-end md:self-auto">
          <button
            type="button"
            onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
            className="flex items-center gap-1.5 bg-[#111827] border border-white/10 hover:border-white/20 px-3.5 py-2 rounded-xl text-xs font-bold text-[#F9FAFB] shadow-sm transition-colors focus:outline-none"
            aria-label="Select Currency"
            aria-expanded={currencyDropdownOpen}
          >
            <span>{currency === "USD" ? "$ USD" : "₹ INR"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#9CA3AF] transition-transform duration-200 ${
                currencyDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {currencyDropdownOpen && (
            <>
              {/* Invisible Click Outside Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setCurrencyDropdownOpen(false)}
              />
              <div className="absolute right-0 top-full mt-1.5 w-32 bg-[#111827] border border-white/15 rounded-xl shadow-2xl p-1 z-50">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("USD");
                    setCurrencyDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    currency === "USD"
                      ? "bg-[#4F46E5] text-white"
                      : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5"
                  }`}
                >
                  <span>$ USD</span>
                  {currency === "USD" && <Check className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("INR");
                    setCurrencyDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    currency === "INR"
                      ? "bg-[#4F46E5] text-white"
                      : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5"
                  }`}
                >
                  <span>₹ INR</span>
                  {currency === "INR" && <Check className="w-3.5 h-3.5" />}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 3. PRICING CARDS (4 COLUMNS FOR 4 PLANS, 3 COLUMNS FOR 3 PLANS) */}
      <div
        className={`grid grid-cols-1 ${
          currentCategory.plans.length >= 4
            ? "sm:grid-cols-2 lg:grid-cols-4 gap-5"
            : "md:grid-cols-3 gap-6 sm:gap-8"
        } pt-2`}
      >
        {currentCategory.plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            billingCycle={billingCycle}
            currencySymbol={currencySymbol}
            customPrice={getDisplayPrice(plan)}
          />
        ))}
      </div>

      {/* 4. FOOTER NOTE & DEEP DIVE LINK */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-xs text-[#9CA3AF]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>All plans include flat-rate renewal guarantee and 7-day money-back assurance.</span>
        </div>
        <Link
          href={currentCategory.viewAllHref}
          className="inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-cyan-300 transition-colors"
        >
          <span>View all specs & full matrix</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
