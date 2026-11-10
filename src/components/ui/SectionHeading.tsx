import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  isDark = true,
  className = "",
}) => {
  return (
    <div
      className={`max-w-3xl mb-10 md:mb-14 ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 bg-[#4F46E5]/15 text-indigo-300 border border-[#4F46E5]/30 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-[#F9FAFB]"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3 text-base sm:text-lg leading-relaxed text-[#9CA3AF]"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
