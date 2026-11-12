import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Puzzle,
  Clock,
  Code2,
  Rocket,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICES_LIST } from "@/data/services";

const TOP_SERVICES = SERVICES_LIST.slice(0, 3);

const serviceVisuals: Record<
  string,
  {
    icon: React.ReactNode;
    accent: string;
    accentBorder: string;
    iconBg: string;
  }
> = {
  "web-development": {
    icon: <Globe className="w-5 h-5" />,
    accent: "text-[#818CF8]",
    accentBorder: "hover:border-[#4F46E5]/40",
    iconBg: "bg-[#4F46E5]/15 border-[#4F46E5]/30 text-[#818CF8]",
  },
  "app-development": {
    icon: <Smartphone className="w-5 h-5" />,
    accent: "text-[#06B6D4]",
    accentBorder: "hover:border-[#06B6D4]/40",
    iconBg: "bg-[#06B6D4]/15 border-[#06B6D4]/30 text-[#06B6D4]",
  },
  "ecommerce-development": {
    icon: <ShoppingBag className="w-5 h-5" />,
    accent: "text-[#10B981]",
    accentBorder: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/15 border-emerald-500/30 text-[#10B981]",
  },
};

const PIPELINE = [
  { step: "01", label: "Scope & architecture", icon: Code2 },
  { step: "02", label: "Engineering sprints", icon: Rocket },
  { step: "03", label: "Deploy on NVMe", icon: Server },
] as const;

export const ServicesEngineeringShowcase: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-7">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="max-w-2xl space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#06B6D4]">
            <span className="w-4 h-0.5 bg-[#06B6D4]" />
            <span>Full-stack engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
            Software & Web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#06B6D4]">
              Development Services
            </span>
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            One partner from domain and hosting through production—stacks tuned for LiteSpeed NVMe.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {PIPELINE.map(({ step, label, icon: Icon }) => (
              <span
                key={step}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#9CA3AF] bg-[#111827] border border-white/10 rounded-lg px-2.5 py-1"
              >
                <span className="font-mono text-[#4F46E5]">{step}</span>
                <Icon className="w-3 h-3 text-[#06B6D4]" />
                <span className="text-[#F9FAFB]">{label}</span>
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] hover:border-[#06B6D4]/40 hover:text-[#06B6D4] transition-all shrink-0 self-start"
        >
          Explore all services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
        {TOP_SERVICES.map((service) => {
          const visuals = serviceVisuals[service.slug] ?? serviceVisuals["web-development"];

          return (
            <article
              key={service.id}
              className={`group flex flex-col h-full rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-6 shadow-card transition-colors hover:bg-[#1F2937]/50 ${visuals.accentBorder}`}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${visuals.iconBg}`}>
                  {visuals.icon}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#9CA3AF] border border-white/10 px-2 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 text-[#06B6D4]" />
                  {service.turnaroundTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight leading-snug">{service.title}</h3>
              <p className={`mt-0.5 text-[10px] font-semibold uppercase tracking-wide leading-snug ${visuals.accent}`}>
                {service.tagline}
              </p>
              <p className="mt-2.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed line-clamp-3">
                {service.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {service.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-xs text-[#9CA3AF] leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-1">
                {service.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#0B0F19] border border-white/10 text-[#9CA3AF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  href={`/${service.slug}`}
                  rightIcon={<ArrowRight className="w-3 h-3" />}
                  className="text-xs"
                >
                  {service.ctaText}
                </Button>
              </div>
            </article>
          );
        })}
      </div>

      <div className="rounded-2xl border border-amber-500/20 bg-[#111827] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Puzzle className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">WHMCS modules</span>
            <h4 className="text-base font-bold text-[#F9FAFB] mt-0.5 leading-snug">
              WaShroti & Smart Payment Surcharge
            </h4>
            <p className="mt-1 text-xs text-[#9CA3AF] leading-relaxed line-clamp-2">
              WhatsApp invoice alerts, OTPs, and ticket updates for hosting providers.
            </p>
          </div>
        </div>
        <Button variant="secondary" size="sm" href="/whmcs-modules" className="shrink-0">
          Explore modules
        </Button>
      </div>
    </div>
  );
};
