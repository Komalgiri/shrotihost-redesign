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
    switch (name) {
      case "Server":
        return <Server className="w-4 h-4 text-indigo-400" />;
      case "Flame":
        return <Flame className="w-4 h-4 text-indigo-400" />;
      case "Infinity":
        return <Infinity className="w-4 h-4 text-indigo-400" />;
      case "Users":
        return <Users className="w-4 h-4 text-indigo-400" />;
      case "Terminal":
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case "Globe":
        return <Globe className="w-4 h-4 text-indigo-400" />;
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-indigo-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case "Puzzle":
        return <Puzzle className="w-4 h-4 text-indigo-400" />;
      case "Building2":
        return <Building2 className="w-4 h-4 text-indigo-400" />;
      case "Mail":
        return <Mail className="w-4 h-4 text-indigo-400" />;
      case "Briefcase":
        return <Briefcase className="w-4 h-4 text-indigo-400" />;
      default:
        return <Server className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-slate-900 border-l border-slate-800 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-800">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-base shadow-md">
                S
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Shroti<span className="text-indigo-400">Host</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-2">
            {MAIN_NAV_LINKS.map((link) => {
              if (link.hasMegaMenu && link.groups) {
                const isExpanded = expandedSection === link.label;
                return (
                  <div key={link.label} className="border-b border-slate-800/60 pb-2">
                    <button
                      onClick={() => toggleSection(link.label)}
                      className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-indigo-400" : "text-slate-500"
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="space-y-4 pl-2 pt-2 pb-3">
                        {link.groups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-2">
                            <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                              {group.title}
                            </span>
                            <div className="space-y-1">
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={onClose}
                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/80 transition-colors group"
                                >
                                  <div className="w-7 h-7 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                                    {getIcon(item.iconName)}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-slate-200 group-hover:text-indigo-300">
                                        {item.label}
                                      </span>
                                      {item.badge && (
                                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </div>
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
                  className="flex items-center justify-between py-3 text-base font-semibold text-white hover:text-indigo-400 transition-colors border-b border-slate-800/60"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
          <Button
            variant="whatsapp"
            size="md"
            href="https://wa.me/919582129099"
            isExternal={true}
            leftIcon={<MessageSquare className="w-4 h-4" />}
            className="w-full"
          >
            WhatsApp Support
          </Button>

          <Button
            variant="secondary"
            size="md"
            href="https://portal.shrotihost.in"
            isExternal={true}
            rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
            className="w-full"
          >
            Client Portal Login
          </Button>
        </div>
      </div>
    </div>
  );
};

