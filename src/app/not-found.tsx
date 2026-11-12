import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  Globe,
  HardDrive,
  BookOpen,
  ArrowRight,
  Home,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ShrotiHost",
  description: "The page you are looking for does not exist. Explore our high-speed NVMe cloud hosting, domains, and developer services.",
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "Shared Hosting",
      description: "Fast LiteSpeed NVMe plans starting from ₹49/month with flat renewals.",
      href: "/shared-hosting",
      icon: <Server className="w-5 h-5 text-[#06B6D4]" />,
    },
    {
      title: "Cloud VPS",
      description: "High-concurrency KVM virtual servers with full root access.",
      href: "/vps",
      icon: <HardDrive className="w-5 h-5 text-[#4F46E5]" />,
    },
    {
      title: "Search Domains",
      description: "Register .in for ₹714/yr or .com for ₹1,169/yr with free DNS management.",
      href: "/domains",
      icon: <Globe className="w-5 h-5 text-[#10B981]" />,
    },
    {
      title: "Technical Guides",
      description: "Tutorials on DNS configuration, LiteSpeed caching, and WordPress speed.",
      href: "/blog",
      icon: <BookOpen className="w-5 h-5 text-[#06B6D4]" />,
    },
  ];

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-tech-grid">
      <div className="relative max-w-2xl w-full text-center space-y-8">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Error 404 • Resource Not Found</span>
        </div>

        {/* Large Visual Headline */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-[#F9FAFB] tracking-tight">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB]">
            Looking for a missing cloud endpoint?
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-lg mx-auto">
            The page or resource you requested has moved, expired, or does not exist. Use the shortcuts below to return to your dashboard or hosting services.
          </p>
        </div>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-4 rounded-xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all hover:bg-[#1F2937] group flex items-start gap-3 shadow-card"
            >
              <div className="p-2 rounded-lg bg-[#0B0F19] border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#F9FAFB] group-hover:text-white flex items-center gap-1">
                  <span>{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#06B6D4]" />
                </p>
                <p className="text-xs text-[#9CA3AF] mt-0.5 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/5">
          <Button variant="primary" size="lg" href="/" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="https://wa.me/919582129099"
            isExternal={true}
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-[#10B981]" />
            <span>Contact Engineer on WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

