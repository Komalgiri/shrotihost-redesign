"use client";

import React, { useState } from "react";
import { Server, Flame, Infinity, Users, Terminal, ArrowRight } from "lucide-react";
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
      icon: <Server className="w-4 h-4" />,
      plans: SHARED_HOSTING_PLANS,
      viewAllHref: "/shared-hosting",
      description: "Fast cPanel hosting with LiteSpeed web servers and same renewal price."
    },
    {
      id: "wordpress" as const,
      label: "WordPress Hosting",
      startingPrice: "From ₹69/mo",
      icon: <Flame className="w-4 h-4 text-amber-400" />,
      plans: WORDPRESS_HOSTING_PLANS,
      viewAllHref: "/wordpress-hosting",
      description: "Pre-tuned for WooCommerce and WordPress with Redis cache and LSCache."
    },
    {
      id: "unlimited" as const,
      label: "Unlimited Hosting",
      startingPrice: "From ₹69/mo",
      icon: <Infinity className="w-4 h-4 text-cyan-400" />,
      plans: UNLIMITED_HOSTING_PLANS,
      viewAllHref: "/unlimited-hosting",
      description: "Unmetered NVMe SSD storage and data transfer under Fair Use Policy."
    },
    {
      id: "reseller" as const,
      label: "Reseller Hosting",
      startingPrice: "From ₹299/mo",
      icon: <Users className="w-4 h-4 text-emerald-400" />,
      plans: RESELLER_HOSTING_PLANS,
      viewAllHref: "/reseller-hosting",
      description: "White-label cPanel accounts with WHM and free WHMCS on annual billing."
    },
    {
      id: "vps" as const,
      label: "Cloud VPS",
      startingPrice: "From ₹499/mo",
      icon: <Terminal className="w-4 h-4 text-violet-400" />,
      plans: VPS_HOSTING_PLANS.slice(0, 4), // show first 4 on home
      viewAllHref: "/vps",
      description: "Virtual private servers with dedicated vCPU, full root SSH access and 1 Gbps port."
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div>
      {/* Tab Switcher Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-12">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                isActive
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive
                    ? "bg-indigo-800 text-indigo-100"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {tab.startingPrice}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Context Banner */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <p className="text-sm text-slate-300 font-medium">
          {currentTab.description}
        </p>
      </div>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
        {currentTab.plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* View Full Comparison Link */}
      <div className="mt-12 text-center">
        <Link
          href={currentTab.viewAllHref}
          className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group"
        >
          <span>View Detailed Specs & Comparison for {currentTab.label}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

