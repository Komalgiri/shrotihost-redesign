import React from "react";
import { Metadata } from "next";
import {
  Layers,
  Users,
  ShieldCheck,
  Zap,
  Server,
  RotateCcw,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Cpu,
  Share2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { Button } from "@/components/ui/Button";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { MASTER_RESELLER_HOSTING_PLANS } from "@/data/hosting-plans";

export const metadata: Metadata = {
  title: "Master Reseller Hosting from ₹599/mo | Sell cPanel & WHM Resellers | ShrotiHost",
  description:
    "Launch your own multi-tier web hosting company. Master Reseller Hosting gives you the power to create and sell both cPanel shared hosting and WHM Reseller accounts with overselling enabled.",
  openGraph: {
    title: "Master Reseller Hosting with Overselling | ShrotiHost",
    description:
      "Sell cPanel accounts and Sub-Reseller WHM accounts. NVMe SSD speeds, LiteSpeed Enterprise, 100% white label branding, and flat-rate renewals.",
    url: "https://shrotihost.in/master-reseller-hosting",
  },
};

export default function MasterResellerHostingPage() {
  const masterFeatures = [
    {
      title: "Create Sub-Reseller Accounts",
      description:
        "Unlike standard reseller hosting which only lets you sell shared cPanel accounts, Master Reseller lets you provision entire WHM reseller packages to your own resellers.",
      iconName: "Layers",
    },
    {
      title: "Overselling Enabled by Default",
      description:
        "Allocate disk and bandwidth to your clients beyond physical disk space as long as actual usage stays within limits, maximizing your revenue and profit margins.",
      iconName: "Zap",
    },
    {
      title: "100% Unbranded White-Label",
      description:
        "Custom private nameservers (ns1.yourcompany.com), custom hostname SSL, and customized cPanel/WHM branding keep ShrotiHost completely invisible.",
      iconName: "ShieldCheck",
    },
    {
      title: "LiteSpeed Enterprise + LSCache",
      description:
        "Every sub-reseller and end-user website benefits from LiteSpeed web servers delivering up to 10x faster TTFB compared to traditional Apache hosts.",
      iconName: "Server",
    },
    {
      title: "Automated Offsite JetBackups",
      description:
        "Multi-point daily disaster recovery snapshots. Restore entire cPanel accounts, single MySQL databases, cron jobs, or DNS zones with a single click.",
      iconName: "RotateCcw",
    },
    {
      title: "Flat Renewal Guarantee",
      description:
        "Your monthly or annual subscription rate is permanently locked. No sudden 200% price hikes at renewal, protecting your agency's cash flow.",
      iconName: "Sparkles",
    },
  ];

  const comparisonRows = [
    {
      feature: "Can create Shared cPanel accounts",
      reseller: "Yes",
      master: "Yes",
      highlight: false,
    },
    {
      feature: "Can create Sub-Reseller WHM accounts",
      reseller: "No (Shared only)",
      master: "Yes (Full Sub-WHM capability)",
      highlight: true,
    },
    {
      feature: "Overselling feature enabled",
      reseller: "Standard packages",
      master: "Fully enabled (Zero artificial caps)",
      highlight: true,
    },
    {
      feature: "Private Nameservers (ns1/ns2.yourdomain)",
      reseller: "Yes",
      master: "Yes + Reverse DNS support",
      highlight: false,
    },
    {
      feature: "LiteSpeed Enterprise Web Server",
      reseller: "Included",
      master: "Included across all accounts",
      highlight: false,
    },
    {
      feature: "Imunify360 WAF Security Shield",
      reseller: "Included",
      master: "Included across all tiers",
      highlight: false,
    },
    {
      feature: "Billing Automation",
      reseller: "WHMCS module ready",
      master: "WHMCS / Clientexec ready + Free license on Annual",
      highlight: false,
    },
  ];

  const masterFaqs = [
    {
      question: "What is the primary difference between Reseller and Master Reseller Hosting?",
      answer:
        "Standard Reseller Hosting allows you to create and sell cPanel accounts to end users. Master Reseller Hosting adds an elevated tier of permissions: you can sell standard cPanel accounts AND sell WHM Reseller accounts to third parties who then sell cPanel accounts to their own clients.",
    },
    {
      question: "What does 'Overselling Enabled' mean?",
      answer:
        "Overselling allows you to allocate more resources (disk space and bandwidth) across your client packages than your physical plan quota, provided the total actual disk space consumed by all active accounts does not exceed your limit. This is standard agency practice because most web clients utilize less than 15% of their allocated storage.",
    },
    {
      question: "Can my sub-resellers also create sub-resellers?",
      answer:
        "No, sub-resellers receive standard WHM permissions allowing them to manage cPanel end-users. This maintains strict hierarchy, resource fairness, and server stability.",
    },
    {
      question: "Do you offer free migration for existing reseller accounts?",
      answer:
        "Yes! Our hostmaster engineering team will migrate your existing WHM reseller or cPanel accounts from your current host to ShrotiHost with zero downtime, completely free of charge.",
    },
    {
      question: "Will my end clients or sub-resellers know about ShrotiHost?",
      answer:
        "Never. Everything is completely white-label. Your clients log in via your domain, your nameservers (ns1.yourdomain.com), and your custom branding.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />

        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/shared-hosting" },
              { label: "Master Reseller Hosting" },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                Two-Tier Agency Hosting Infrastructure
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Sell cPanel accounts{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  and WHM Reseller accounts.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Elevate your agency above standard hosting resellers. Master Reseller Hosting gives you full
                authority to provision sub-reseller WHM accounts, oversell resources safely, and build a recurring
                multitenant hosting empire on LiteSpeed NVMe hardware.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button size="lg" href="#plans" className="shadow-lg shadow-blue-600/15">
                  View Master Plans from ₹599/mo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" href="#architecture">
                  How Master Reseller Works
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Sub-WHM Reseller Authority</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Overselling Enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Flat Renewal Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Tier Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl text-slate-100 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-300 font-semibold">Hierarchy Engine v4.2</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                    WHM + Sub-Resellers
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Tier 1: Master Reseller (You) */}
                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/40 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        Tier 1: Master Reseller (You)
                        <span className="px-1.5 py-0.2 text-[10px] bg-blue-500/20 text-blue-300 rounded">Full Authority</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Control panel to manage sub-resellers, set quotas, and supervise end-user accounts.
                      </p>
                    </div>
                  </div>

                  {/* Down arrow connector */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-4 bg-slate-700" />
                  </div>

                  {/* Tier 2: Sub-Resellers */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Tier 2: Your Sub-Resellers (WHM)</div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Clients who buy reseller hosting from you and operate their own WHM control panels.
                      </p>
                    </div>
                  </div>

                  {/* Down arrow connector */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-4 bg-slate-700" />
                  </div>

                  {/* Tier 3: End Clients */}
                  <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Tier 3: End-User Clients (cPanel)</div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Direct website owners running WordPress, WooCommerce, and business mailboxes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>LiteSpeed Enterprise Kernel</span>
                  <span className="text-emerald-400 font-mono font-medium">Overselling Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRICING SECTION */}
      <section id="plans" className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Master Reseller Hosting Plans"
          subtitle="Scale your hosting company with clear resource quotas and our permanent same-renewal-price guarantee."
          centered={true}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTER_RESELLER_HOSTING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          *Unlimited accounts are subject to server resource limits and ShrotiHost Fair Use Policies. All plans include 
          free account migration, Let's Encrypt SSL, and JetBackup automated remote protection.
        </div>
      </section>

      {/* 3. ARCHITECTURE & WHY MASTER RESELLER */}
      <section id="architecture" className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono font-semibold uppercase tracking-wider">
              Strategic Revenue Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Why Master Reseller changes your agency economics.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Standard shared hosting resellers earn around ₹99 to ₹199 per cPanel account. With a Master Reseller
              subscription, you can charge ₹999 to ₹2,499 per sub-reseller WHM package—allowing you to reach profitability
              with a fraction of the client volume.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-cyan-400 font-mono text-2xl font-bold">10x - 15x</div>
              <div className="text-sm font-semibold text-white">Higher ARPU per Account</div>
              <p className="text-xs text-slate-400">
                Reseller packages command substantially higher recurring retainers than single website accounts.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-cyan-400 font-mono text-2xl font-bold">100%</div>
              <div className="text-sm font-semibold text-white">White Label Discretion</div>
              <p className="text-xs text-slate-400">
                End users and sub-resellers never see ShrotiHost nameservers, hostnames, or system links.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-cyan-400 font-mono text-2xl font-bold">Zero</div>
              <div className="text-sm font-semibold text-white">Renewal Inflation</div>
              <p className="text-xs text-slate-400">
                Unlike competitors who double invoice costs in year two, your margin is locked forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Breakdown"
          title="Standard Reseller vs. Master Reseller"
          subtitle="Compare features side-by-side to choose the exact tier that fits your agency model."
          centered={true}
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Capability / Specification</th>
                  <th className="py-4 px-6 text-slate-600">Standard Reseller</th>
                  <th className="py-4 px-6 text-blue-700 bg-blue-50/50">Master Reseller</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? "bg-blue-50/30" : "hover:bg-slate-50/50"}>
                    <td className="py-3.5 px-6 font-medium text-slate-900">{row.feature}</td>
                    <td className="py-3.5 px-6">{row.reseller}</td>
                    <td className="py-3.5 px-6 font-semibold text-blue-900 bg-blue-50/20">{row.master}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES GRID */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Enterprise Capabilities"
          title="Engineered for turn-key hosting businesses"
          subtitle="Everything you need to operate a secure, rapid-response web hosting brand without managing raw Linux kernels."
          centered={true}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masterFeatures.map((feat, idx) => (
            <FeatureCard
              key={idx}
              title={feat.title}
              description={feat.description}
              iconName={feat.iconName}
            />
          ))}
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently asked about Master Reseller"
          subtitle="Clear, honest answers about sub-reseller quotas, software compatibility, and terms."
          centered={true}
        />

        <div className="mt-10">
          <FAQAccordion items={masterFaqs} />
        </div>
      </section>

      {/* 7. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentHref="/master-reseller-hosting" />

      {/* 8. CTA SECTION */}
      <CTASection
        eyebrow="Instant Activation"
        title="Ready to launch your own multi-tier hosting brand?"
        subtitle="Deploy your Master Reseller environment today with instant provisioning, automated WHM credentials, and our zero-risk money-back guarantee."
        primaryCtaText="Deploy Master Reseller"
        primaryCtaHref="#plans"
        secondaryCtaText="Consult an Infrastructure Specialist"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
