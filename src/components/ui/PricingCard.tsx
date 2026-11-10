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
      className={`relative flex flex-col rounded-2xl transition-all duration-200 ${
        plan.popular
          ? "bg-slate-900/90 border-2 border-indigo-500 shadow-xl shadow-indigo-950/40 lg:-translate-y-2 z-10"
          : "bg-slate-900/60 border border-slate-800 hover:border-slate-700 shadow-lg"
      } p-6 sm:p-8 ${className}`}
    >
      {/* Featured / Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{plan.featuredBadge || "Most Popular"}</span>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        {plan.tierSubtitle && (
          <p className="mt-1.5 text-xs sm:text-sm text-slate-400 min-h-[38px] leading-relaxed">
            {plan.tierSubtitle}
          </p>
        )}
      </div>

      {/* Pricing Landmark */}
      <div className="mb-6 pb-6 border-b border-slate-800">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-slate-300">{currencySymbol}</span>
          <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentPrice}
          </span>
          <span className="text-sm text-slate-400 font-medium">/month</span>
        </div>

        {/* Renewal Guarantee */}
        {plan.renewalPriceSame ? (
          <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>Same price on renewal • No price hike</span>
          </div>
        ) : (
          <p className="mt-2 text-xs text-slate-500">Standard renewal rates apply</p>
        )}

        {plan.setupFee !== undefined && plan.setupFee > 0 && (
          <p className="mt-1.5 text-xs text-slate-400">
            + {currencySymbol}{plan.setupFee} one-time setup fee
          </p>
        )}
      </div>

      {/* Core Resources Highlights */}
      <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
        <div>
          <span className="text-slate-500 block">Websites</span>
          <span className="text-slate-200 font-semibold">{plan.websites}</span>
        </div>
        <div>
          <span className="text-slate-500 block">Storage</span>
          <span className="text-slate-200 font-semibold">{plan.storage}</span>
        </div>
        <div>
          <span className="text-slate-500 block">RAM</span>
          <span className="text-slate-200 font-semibold">{plan.ram}</span>
        </div>
        <div>
          <span className="text-slate-500 block">CPU Core</span>
          <span className="text-slate-200 font-semibold">{plan.cpu}</span>
        </div>
      </div>

      {/* Feature Checklist */}
      <div className="space-y-3 mb-8 flex-1">
        <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Included Features:
        </p>
        <ul className="space-y-2.5">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Primary CTA */}
      <Button
        variant={plan.popular ? "primary" : "secondary"}
        size="lg"
        href={plan.orderUrl}
        isExternal={true}
        className="w-full text-center"
      >
        {plan.ctaText || "Select Plan"}
      </Button>

      <p className="mt-3 text-center text-xs text-slate-500">
        ✓ 7-Day Money-Back Guarantee
      </p>
    </div>
  );
};

