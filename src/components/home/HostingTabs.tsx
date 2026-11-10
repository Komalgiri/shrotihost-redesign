"use client";

import React, { useState } from "react";
import { Server, Flame, Infinity, Users, Terminal, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import {
  SHARED_HOSTING_PLANS,
  WORDPRESS_HOSTING_PLANS,
  UNLIMITED_HOSTING_PLANS,
  RESELLER_HOSTING_PLANS,
  VPS_HOSTING_PLANS,
} from "@/data/hosting-plans";
import { PricingCard } from "../ui/PricingCard";

export const HostingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "shared" | "wordpress" | "unlimited" | "reseller" | "vps"
  >("shared");

  const tabs = [
    {
      id: "shared" as const,
      label: "Shared NVMe",
      startingPrice: "From ₹49/mo",
      icon: <Server className="w-4 h-4 text-blue-600" />,
      plans: SHARED_HOSTING_PLANS,
      viewAllHref: "/shared-hosting",
      description: "Fast cPanel hosting with LiteSpeed web servers and guaranteed same renewal price."
    },
    {
      id: "wordpress" as const,
      label: "WordPress Hosting",
      startingPrice: "From ₹69/mo",
      icon: <Flame className="w-4 h-4 text-amber-500" />,
      plans: WORDPRESS_HOSTING_PLANS,
      viewAllHref: "/wordpress-hosting",
      description: "Pre-tuned for WooCommerce and WordPress with Redis object cache and LSCache."
    },
    {
      id: "unlimited" as const,
      label: "Unlimited Hosting",
      startingPrice: "From ₹69/mo",
      icon: <Infinity className="w-4 h-4 text-teal-600" />,
      plans: UNLIMITED_HOSTING_PLANS,
      viewAllHref: "/unlimited-hosting",
      description: "Unmetered NVMe SSD storage and data transfer under Fair Use Policy (FUP)."
    },
    {
      id: "reseller" as const,
      label: "Reseller Hosting",
      startingPrice: "From ₹299/mo",
      icon: <Users className="w-4 h-4 text-emerald-600" />,
      plans: RESELLER_HOSTING_PLANS,
      viewAllHref: "/reseller-hosting",
      description: "White-label cPanel accounts with WHM control panel and overselling enabled."
    },
    {
      id: "vps" as const,
      label: "Cloud VPS",
      startingPrice: "From ₹499/mo",
      icon: <Terminal className="w-4 h-4 text-purple-600" />,
      plans: VPS_HOSTING_PLANS.slice(0, 4),
      viewAllHref: "/vps",
      description: "Virtual private servers with dedicated KVM vCPU, root SSH access, and 1 Gbps port."
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div>
      {/* Tab Switcher Pills */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200/90 inline-flex flex-wrap justify-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-white text-slate-950 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/50"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-slate-200/70 text-slate-600"
                  }`}
                >
                  {tab.startingPrice}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Intro Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-8 px-2 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{currentTab.label}</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{currentTab.description}</p>
        </div>
        <Link
          href={currentTab.viewAllHref}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
        >
          <span>View Detailed Specs & Matrix</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentTab.plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Footnote Banner */}
      <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 max-w-4xl mx-auto">
        <span className="flex items-center gap-1.5 text-slate-700 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>All plans backed by our 7-day money-back guarantee and flat renewal rates.</span>
        </span>
        <span className="text-slate-400">All prices exclusive of applicable 18% GST</span>
      </div>
    </div>
  );
};
