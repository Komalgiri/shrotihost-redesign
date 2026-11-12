import React from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0B0F19] border-b border-white/5 text-[#9CA3AF] text-xs py-2 px-4 sm:px-6 lg:px-10 xl:px-12 select-none">
      <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Value Proposition Strip */}
        <div className="flex items-center gap-2.5 overflow-hidden truncate text-[11px] sm:text-xs">
          <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
          <span className="text-[#F9FAFB] font-medium">LiteSpeed + NVMe hosting</span>
          <span className="text-white/20">/</span>
          <span className="text-[#9CA3AF]">LiteSpeed Enterprise</span>
          <span className="text-white/20 hidden md:inline">/</span>
          <span className="text-[#9CA3AF] hidden md:inline">Flat renewal. No surprises.</span>
          <span className="text-white/20 hidden lg:inline">/</span>
          <a
            href="https://wa.me/919582129099"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#10B981] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
            <span>+91 95821 29099</span>
          </a>
        </div>

        {/* Right: Client Portal Link */}
        <div className="flex items-center gap-3 shrink-0 text-xs">
          <a
            href="https://portal.shrotihost.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#9CA3AF] hover:text-[#F9FAFB] font-medium transition-colors text-[11px] sm:text-xs"
          >
            <span>Client portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
