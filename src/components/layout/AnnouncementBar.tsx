import React from "react";
import { Zap, MessageSquare, ExternalLink } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-slate-950 border-b border-slate-800 text-slate-300 text-xs py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Value Proposition Ticker */}
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="inline-flex items-center gap-1 font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded text-[11px] shrink-0 border border-indigo-500/20">
            <Zap className="w-3 h-3 text-indigo-400" />
            <span>NVMe SPEED</span>
          </span>
          <span className="truncate text-slate-300">
            LiteSpeed Web Servers + Same Price on Renewal Guarantee
          </span>
        </div>

        {/* Right: Quick Channels */}
        <div className="flex items-center gap-4 shrink-0 text-slate-400">
          <a
            href="https://wa.me/919582129099"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors hidden sm:inline-flex"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp: +91 95821 29099</span>
          </a>

          <span className="hidden sm:inline text-slate-700">|</span>

          <a
            href="https://portal.shrotihost.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors"
          >
            <span>Client Portal</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

