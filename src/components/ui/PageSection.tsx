import React from "react";

type PageSectionTone = "base" | "alt";
type PageSectionSize = "default" | "compact" | "hero";
type PageSectionBorder = "none" | "y";

interface PageSectionProps {
  children: React.ReactNode;
  tone?: PageSectionTone;
  size?: PageSectionSize;
  withGrid?: boolean;
  border?: PageSectionBorder;
  id?: string;
  className?: string;
  contained?: boolean;
}

const sizeClasses: Record<PageSectionSize, string> = {
  default: "py-16 sm:py-24",
  compact: "py-12 sm:py-16",
  hero: "pt-6 sm:pt-10 pb-16 sm:pb-24",
};

const toneClasses: Record<PageSectionTone, string> = {
  base: "section-surface-base",
  alt: "section-surface-alt",
};

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  tone = "base",
  size = "default",
  withGrid = false,
  border = "none",
  id,
  className = "",
  contained = true,
}) => {
  const borderClass = border === "y" ? "border-y border-white/10" : "";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${toneClasses[tone]} ${sizeClasses[size]} ${borderClass} ${withGrid ? "section-tech-grid" : ""} ${className}`}
    >
      {contained ? (
        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};
