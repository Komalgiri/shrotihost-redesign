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
        <div className="bg-[#111827] p-1.5 rounded-2xl border border-white/10 inline-flex flex-wrap justify-center gap-1 shadow-card">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#1F2937] text-[#F9FAFB] shadow-md border border-white/20 font-bold"
                    : "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]/50"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-[#4F46E5]/20 text-indigo-300 border border-[#4F46E5]/40"
                      : "bg-[#0B0F19] text-[#9CA3AF]"
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
          <h3 className="text-lg font-bold text-[#F9FAFB]">{currentTab.label}</h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">{currentTab.description}</p>
        </div>
        <Link
          href={currentTab.viewAllHref}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#06B6D4] hover:text-cyan-300 transition-colors shrink-0"
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
      <div className="mt-8 p-4 rounded-xl bg-[#111827] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF] max-w-4xl mx-auto">
        <span className="flex items-center gap-1.5 text-[#F9FAFB] font-medium">
          <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
          <span>All plans backed by our 7-day money-back guarantee and flat renewal rates.</span>
        </span>
        <span className="text-[#9CA3AF]">All prices exclusive of applicable 18% GST</span>
      </div>
    </div>
  );
};
