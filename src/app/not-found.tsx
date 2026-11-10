import React from "react";
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

export default function NotFound() {
  const quickLinks = [
    {
      title: "Shared Hosting",
      description: "Fast LiteSpeed NVMe plans starting from ₹49/month with flat renewals.",
      href: "/shared-hosting",
      icon: <Server className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: "Cloud VPS",
      description: "High-concurrency KVM virtual servers with full root access.",
      href: "/vps",
      icon: <HardDrive className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: "Search Domains",
      description: "Register .in for ₹714/yr or .com for ₹1,169/yr with free DNS management.",
      href: "/domains",
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Technical Guides",
      description: "Tutorials on DNS configuration, LiteSpeed caching, and WordPress speed.",
      href: "/blog",
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
    },
  ];

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-tech-grid">
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>Error 404 • Resource Not Found</span>
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Lost in the Cloud?
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
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
        <div className="pt-8 border-t border-slate-200 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-6">
            Popular Destinations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                    <span>{link.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-indigo-600" />
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
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
