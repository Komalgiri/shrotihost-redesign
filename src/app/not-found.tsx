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
      icon: <Server className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Cloud VPS",
      description: "High-concurrency KVM virtual servers with full root access.",
      href: "/vps",
      icon: <HardDrive className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Search Domains",
      description: "Register .in for ₹714/yr or .com for ₹1,169/yr with free DNS management.",
      href: "/domains",
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Technical Guides",
      description: "Tutorials on DNS configuration, LiteSpeed caching, and WordPress speed.",
      href: "/blog",
      icon: <BookOpen className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-indigo-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>Error 404 • Resource Not Found</span>
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Lost in the Cloud?
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
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
            variant="outline"
            leftIcon={<MessageSquare className="w-4 h-4" />}
          >
            Ask on WhatsApp
          </Button>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-8 border-t border-slate-800 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            Popular Destinations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="glass-card rounded-xl p-4 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1">
                    <span>{link.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-indigo-400" />
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
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

