"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
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
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { MAIN_NAV_LINKS } from "@/data/navigation";
import { Button } from "../ui/Button";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>("Hosting");

  if (!isOpen) return null;

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  const getIcon = (name?: string) => {
    const iconClass = "w-4 h-4 text-blue-600";
    switch (name) {
      case "Server":
        return <Server className={iconClass} />;
      case "Flame":
        return <Flame className="w-4 h-4 text-amber-500" />;
      case "Infinity":
        return <Infinity className="w-4 h-4 text-teal-600" />;
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
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white border-l border-slate-200 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-blue-500 shadow-sm p-1.5">
                <Server className="w-full h-full" />
              </div>
              <span className="font-extrabold text-lg text-slate-950 tracking-tight">
                Shroti<span className="text-blue-600">Host</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="mt-6 space-y-2">
            {MAIN_NAV_LINKS.map((link) => {
              if (link.hasMegaMenu && link.groups) {
                const isExpanded = expandedSection === link.label;
                return (
                  <div key={link.label} className="border-b border-slate-100 pb-2">
                    <button
                      onClick={() => toggleSection(link.label)}
                      className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180 text-blue-600" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-2 pr-1 pt-1 pb-3 space-y-4">
                        {link.groups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {group.title}
                            </span>
                            <div className="space-y-1 pl-1">
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                                >
                                  {getIcon(item.iconName)}
                                  <span>{item.label}</span>
                                  {item.badge && (
                                    <span className="ml-auto text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700">
                                      {item.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 px-2 rounded-lg text-sm font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <Button
            variant="primary"
            size="md"
            href="/shared-hosting"
            className="w-full"
            onClick={onClose}
          >
            Explore NVMe Hosting
          </Button>

          <Button
            variant="secondary"
            size="md"
            href="https://portal.shrotihost.in"
            isExternal={true}
            className="w-full"
          >
            <span>Client Login</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-400" />
          </Button>

          <a
            href="https://wa.me/919582129099"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Support: +91 95821 29099</span>
          </a>
        </div>
      </div>
    </div>
  );
};
