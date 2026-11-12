import React from "react";
import { Check, ArrowRight } from "lucide-react";
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

  // Structured Title + Description pairs matching the clean reference format
  const getStructuredFeatures = () => {
    const items: { title: string; description: string }[] = [];

    // 1. Websites / Account Scope
    if (plan.id.includes("reseller")) {
      items.push({
        title: plan.websites,
        description: "Independent cPanel accounts with overselling & WHM control",
      });
    } else if (plan.id.includes("vps")) {
      items.push({
        title: "Full Root SSH Access",
        description: "Dedicated KVM instance with custom OS choice & dedicated IPv4",
      });
    } else {
      items.push({
        title: plan.websites,
        description: "Isolated cPanel account with Softaculous 1-click WordPress install",
      });
    }

    // 2. Storage
    items.push({
      title: plan.storage,
      description: "Pure PCIe Gen4 direct NVMe storage for sub-second page loads",
    });

    // 3. Compute (RAM & CPU)
    items.push({
      title: `${plan.ram} • ${plan.cpu}`,
      description: "Guaranteed container compute resources with CloudLinux CageFS",
    });

    // 4. Server & Caching Speed
    if (plan.id.includes("wordpress")) {
      items.push({
        title: "LiteSpeed Enterprise + Redis",
        description: "Pre-configured LSCache and Redis Object Cache for WooCommerce",
      });
    } else if (plan.id.includes("vps")) {
      items.push({
        title: "1 Gbps Dedicated Port",
        description: "Unmetered high-throughput bandwidth with Tier-1 Anti-DDoS",
      });
    } else {
      items.push({
        title: "LiteSpeed Web Server",
        description: "High-concurrency HTTP/3 web server with automated LSCache",
      });
    }

    // 5. Renewal & Guarantee
    items.push({
      title: "Flat Renewal Guarantee",
      description: "Renew at the same rate forever with free daily JetBackups",
    });

    return items;
  };

  const structuredFeatures = getStructuredFeatures();

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl bg-[#111827] transition-all duration-200 ${
        plan.popular
          ? "border-2 border-[#4F46E5] shadow-xl shadow-indigo-950/40"
          : "border border-white/10 hover:border-white/20 shadow-card hover:bg-[#1F2937]/30"
      } p-6 sm:p-7 ${className}`}
    >
      <div>
        {/* Top Header Row matching the reference image */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-[#F9FAFB] tracking-tight">
            {plan.name}
          </h3>
          {plan.popular && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#1F2937] text-[#F9FAFB] border border-white/15 shadow-sm">
              {plan.featuredBadge || "POPULAR"}
            </span>
          )}
        </div>

        {/* Price Row */}
        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight">
            {currencySymbol}{currentPrice}
          </span>
          <span className="text-sm text-[#9CA3AF] font-medium">/ month</span>
        </div>

        {/* Subtitle / Tagline */}
        <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF] font-normal leading-relaxed min-h-[38px]">
          {plan.tierSubtitle || "All-in-one cloud hosting solution for your business"}
        </p>

        {/* Clean Divider Line */}
        <div className="my-6 border-b border-white/10" />

        {/* Feature List: Title + Sub-description matching reference image */}
        <div className="space-y-4 sm:space-y-5">
          {structuredFeatures.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[#06B6D4]">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#F9FAFB] leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Order CTA at Bottom */}
      <div className="mt-8 pt-4 border-t border-white/5">
        <Button
          variant={plan.popular ? "primary" : "secondary"}
          size="lg"
          href={plan.orderUrl}
          isExternal={true}
          className={`w-full font-semibold rounded-xl py-3 shadow-md ${
            plan.popular
              ? "bg-[#4F46E5] hover:bg-indigo-500 text-white shadow-indigo-600/25"
              : "bg-[#1F2937] hover:bg-[#374151] text-[#F9FAFB] border border-white/10"
          }`}
        >
          {plan.ctaText || "Deploy Plan Now"}
        </Button>
        <p className="text-center text-[11px] text-[#9CA3AF] mt-2.5 font-medium">
          Instant setup • 7-day money-back guarantee
        </p>
      </div>
    </div>
  );
};
