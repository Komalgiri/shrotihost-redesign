import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  phoneNote?: string;
  showWhatsApp?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = "YOUR NEXT CHAPTER STARTS HERE",
  title = "Let's build something",
  highlightText = "worth remembering.",
  subtitle = "Hosting a new idea or engineering what comes next? We're ready when you are.",
  primaryCtaText = "Explore hosting",
  primaryCtaHref = "/shared-hosting",
  secondaryCtaText = "Start a WhatsApp chat",
  secondaryCtaHref = "https://wa.me/919582129099",
  phoneNote = "+91 95821 29099 · Real people, real answers",
  showWhatsApp = true,
}) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0B0F19] border-t border-white/5 overflow-hidden">
      {/* Subtle top-right ambient indigo glow matching reference mockup */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4F46E5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
          {/* LEFT COLUMN: Eyebrow with Cyan Line, Headline, Subtitle */}
          <div className="max-w-3xl space-y-4 text-left">
            {eyebrow && (
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-[#06B6D4] inline-block" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  {eyebrow}
                </span>
              </div>
            )}

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-[1.12]">
              <span>{title}</span>
              {highlightText && (
                <span className="block text-[#818CF8]">
                  {highlightText}
                </span>
              )}
            </h2>

            {subtitle && (
              <p className="text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed pt-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* RIGHT COLUMN: Stacked Action Buttons & Reassurance Note */}
          <div className="w-full sm:w-80 lg:w-[340px] shrink-0 space-y-3">
            {/* Primary Action Button */}
            <Link
              href={primaryCtaHref}
              className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30 group"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Action Button: WhatsApp */}
            {showWhatsApp && (
              <a
                href={secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#111827] hover:bg-[#1F2937] text-white border border-white/10 hover:border-white/20 font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#F9FAFB]" />
                <span>{secondaryCtaText}</span>
              </a>
            )}

            {/* Phone & Human Support Note */}
            {phoneNote && (
              <p className="text-[11px] sm:text-xs text-[#9CA3AF] text-center pt-1 font-medium select-none">
                {phoneNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
