import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type PillarCardAccent = "cyan" | "indigo" | "emerald";

const accentStyles: Record<
  PillarCardAccent,
  { hoverBorder: string; iconText: string; linkText: string; linkHover: string }
> = {
  cyan: {
    hoverBorder: "hover:border-[#06B6D4]/50",
    iconText: "text-[#06B6D4]",
    linkText: "text-[#06B6D4]",
    linkHover: "hover:text-cyan-300",
  },
  indigo: {
    hoverBorder: "hover:border-[#4F46E5]/50",
    iconText: "text-[#818CF8]",
    linkText: "text-[#818CF8]",
    linkHover: "hover:text-indigo-300",
  },
  emerald: {
    hoverBorder: "hover:border-emerald-500/50",
    iconText: "text-[#10B981]",
    linkText: "text-[#10B981]",
    linkHover: "hover:text-emerald-300",
  },
};

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accent?: PillarCardAccent;
  href?: string;
  linkLabel?: string;
  footer?: React.ReactNode;
  className?: string;
}

export const PillarCard: React.FC<PillarCardProps> = ({
  icon,
  title,
  children,
  accent = "cyan",
  href,
  linkLabel = "Read more",
  footer,
  className = "",
}) => {
  const styles = accentStyles[accent];

  return (
    <div
      className={`bg-[#111827] rounded-3xl border border-white/10 p-7 pt-12 text-center relative hover:bg-[#1F2937]/30 transition-all shadow-xl group ${styles.hoverBorder} ${className}`}
    >
      <div
        className={`w-14 h-14 -top-7 left-1/2 -translate-x-1/2 absolute rounded-2xl bg-[#0B0F19] border border-white/15 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform ${styles.iconText}`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight">{title}</h3>
      <div className="mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">{children}</div>

      {(footer || href) && (
        <div className="mt-6 pt-4 border-t border-white/5">
          {footer}
          {href && (
            <Link
              href={href}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${styles.linkText} ${styles.linkHover}`}
            >
              <span>{linkLabel}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
