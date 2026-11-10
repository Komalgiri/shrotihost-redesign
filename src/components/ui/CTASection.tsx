import React from "react";
import { ShieldCheck, Zap, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showWhatsApp?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = "Risk-Free Guarantee",
  title = "Ready to Experience High-Speed NVMe Cloud Hosting?",
  subtitle = "Migrate your existing website for free, or start fresh with our 7-day money-back guarantee. Zero price hikes on renewal.",
  primaryCtaText = "Explore Hosting Plans",
  primaryCtaHref = "/shared-hosting",
  secondaryCtaText = "Chat on WhatsApp",
  secondaryCtaHref = "https://wa.me/919582129099",
  showWhatsApp = true,
}) => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto rounded-3xl bg-[#111827] border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden shadow-card text-[#F9FAFB]">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {eyebrow && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 mb-4">
              <Zap className="w-3.5 h-3.5 text-[#06B6D4]" />
              {eyebrow}
            </span>
          )}

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              href={primaryCtaHref}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto font-bold"
            >
              {primaryCtaText}
            </Button>

            {showWhatsApp && (
              <Button
                variant="whatsapp"
                size="lg"
                href={secondaryCtaHref}
                isExternal={true}
                leftIcon={<MessageSquare className="w-4 h-4" />}
                className="w-full sm:w-auto font-bold"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>

          {/* Guarantees strip */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9CA3AF]">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>7-Day Money-Back Guarantee</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#06B6D4]" />
              <span>100% Free Website Migration</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Flat Renewal Guarantee (No Hikes)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
