import React from "react";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { HostingPlan } from "@/data/hosting-plans";
import { Button } from "./Button";

interface PricingCardProps {
  plan: HostingPlan;
  billingCycle?: "monthly" | "semiAnnual" | "annual";
  currencySymbol?: string;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  billingCycle = "monthly",
  currencySymbol = "₹",
  className = "",
}) => {
  const getPrice = () => {
    if (billingCycle === "annual" && plan.priceAnnual) {
      return Math.round(plan.priceAnnual / 12);
    }
    if (billingCycle === "semiAnnual" && plan.priceSemiAnnual) {
      return Math.round(plan.priceSemiAnnual / 6);
    }
    return plan.priceMonthly;
  };

  const currentPrice = getPrice();

  return (
    <div
      className={`relative flex flex-col rounded-2xl transition-all duration-200 bg-[#111827] ${
        plan.popular
          ? "border-2 border-[#4F46E5] shadow-2xl shadow-indigo-950/40 lg:-translate-y-2 z-10"
          : "border border-white/10 hover:border-white/20 shadow-card hover:shadow-card-hover"
      } p-6 sm:p-8 ${className}`}
    >
      {/* Featured / Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4F46E5] text-white shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
          <span>{plan.featuredBadge || "Most Popular"}</span>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#F9FAFB]">{plan.name}</h3>
        {plan.tierSubtitle && (
          <p className="mt-1.5 text-xs sm:text-sm text-[#9CA3AF] min-h-[38px] leading-relaxed">
            {plan.tierSubtitle}
          </p>
        )}
      </div>

      {/* Pricing Landmark */}
      <div className="mb-6 pb-6 border-b border-white/10">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#9CA3AF]">{currencySymbol}</span>
          <span className="text-4xl sm:text-5xl font-extrabold text-[#F9FAFB] tracking-tight">
            {currentPrice}
          </span>
          <span className="text-sm text-[#9CA3AF] font-medium">/month</span>
        </div>

        {/* Renewal Guarantee */}
        {plan.renewalPriceSame ? (
          <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#10B981]" />
            <span>Same price on renewal • Zero price hike</span>
          </div>
        ) : (
          <p className="mt-2 text-xs text-[#9CA3AF]">Standard renewal rates apply</p>
        )}

        {plan.setupFee !== undefined && plan.setupFee > 0 && (
          <p className="mt-1.5 text-xs text-[#9CA3AF]">
            + {currencySymbol}{plan.setupFee} one-time setup fee
          </p>
        )}
      </div>

      {/* Core Resources Highlights */}
      <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs bg-[#0B0F19] p-3 rounded-xl border border-white/10">
        <div>
          <span className="text-[#9CA3AF] block text-[11px]">Websites</span>
          <span className="text-[#F9FAFB] font-bold text-xs">{plan.websites}</span>
        </div>
        <div>
          <span className="text-[#9CA3AF] block text-[11px]">Storage</span>
          <span className="text-[#F9FAFB] font-bold text-xs">{plan.storage}</span>
        </div>
        <div>
          <span className="text-[#9CA3AF] block text-[11px]">RAM</span>
          <span className="text-[#F9FAFB] font-bold text-xs">{plan.ram}</span>
        </div>
        <div>
          <span className="text-[#9CA3AF] block text-[11px]">CPU Core</span>
          <span className="text-[#F9FAFB] font-bold text-xs">{plan.cpu}</span>
        </div>
      </div>

      {/* Feature Bullet List */}
      <div className="flex-1 mb-8">
        <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">
          Included Specifications:
        </p>
        <ul className="space-y-2.5">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF]">
              <Check className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Direct Order CTA */}
      <div className="mt-auto pt-2">
        <Button
          variant={plan.popular ? "primary" : "secondary"}
          size="lg"
          href={plan.orderUrl}
          isExternal={true}
          className={`w-full font-bold ${
            plan.popular
              ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-indigo-600/20"
              : "bg-[#1F2937] hover:bg-[#374151] text-[#F9FAFB] border border-white/10"
          }`}
        >
          {plan.ctaText || "Deploy Plan Now"}
        </Button>
        <p className="text-center text-[11px] text-[#9CA3AF] mt-2">
          Instant cPanel setup • 7-day money-back guarantee
        </p>
      </div>
    </div>
  );
};
