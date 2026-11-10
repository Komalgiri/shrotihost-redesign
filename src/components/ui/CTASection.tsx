import React from "react";
import { ShieldCheck, Zap, MessageSquare } from "lucide-react";
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
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-indigo-950/20 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            {eyebrow}
          </span>
        )}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href={primaryCtaHref}>
            {primaryCtaText}
          </Button>

          {showWhatsApp && (
            <Button
              variant="whatsapp"
              size="lg"
              href={secondaryCtaHref}
              isExternal={true}
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>

        {/* Guarantees strip */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>7-Day Money-Back Guarantee</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>100% Free Website Migration</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Flat Renewal Guarantee (No Hikes)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

