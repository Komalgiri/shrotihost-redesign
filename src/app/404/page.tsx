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

export default function Custom404Page() {
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
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 shadow-card">
            <HelpCircle className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Error 404 • Resource Not Found</span>
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
            Lost in the Cloud?
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or doesn&apos;t exist. Explore popular destinations below or return home.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button
            href="https://wa.me/919582129099"
            isExternal
            size="lg"
            variant="secondary"
            leftIcon={<MessageSquare className="w-4 h-4" />}
          >
            Ask on WhatsApp
          </Button>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-8 border-t border-white/10 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] text-center mb-6">
            Popular Destinations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="bg-[#111827] rounded-xl p-4 border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F9FAFB] group-hover:text-[#06B6D4] transition-colors flex items-center gap-1">
                    <span>{link.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#06B6D4]" />
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
