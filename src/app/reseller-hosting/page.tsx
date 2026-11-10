import React from "react";
import { Metadata } from "next";
import {
  Users,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Lock,
  RotateCcw,
  Sparkles,
  Server,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { Button } from "@/components/ui/Button";
import { ResellerProfitCalculator } from "@/components/hosting/ResellerProfitCalculator";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";
import { RESELLER_HOSTING_PLANS } from "@/data/hosting-plans";

export const metadata: Metadata = {
  title: "Linux Reseller Hosting from ₹299/mo | Free WHMCS License | ShrotiHost",
  description:
    "White-label cPanel reseller hosting powered by WHM, LiteSpeed Enterprise, and NVMe storage. Free WHMCS license on annual billing and flat-rate renewals.",
  openGraph: {
    title: "White-Label Reseller Hosting | ShrotiHost",
    description:
      "Start your own web hosting company with WHM control, 100% white-label nameservers, and free WHMCS license on annual commitments.",
    url: "https://shrotihost.in/reseller-hosting",
  },
};

export default function ResellerHostingPage() {
  const resellerFeatures = [
    {
      title: "100% White-Label Branding",
      description: "Use your own custom private nameservers (e.g. ns1.youragency.com). ShrotiHost's name is completely invisible to your end clients.",
      iconName: "ShieldCheck"
    },
    {
      title: "Web Host Manager (WHM) Access",
      description: "Easily create, terminate, suspend, and resize cPanel accounts. Set custom disk and bandwidth limits per client with intuitive GUI tools.",
      iconName: "Layers"
    },
    {
      title: "Free WHMCS Billing License",
      description: "Automate client signup, credit card / UPI invoicing, recurring billing, and support ticketing with a free WHMCS license on annual commitments.",
      iconName: "Zap"
    },
    {
      title: "LiteSpeed + LSCache for All Accounts",
      description: "Every client cPanel account you create automatically benefits from LiteSpeed Enterprise server-level acceleration and free SSL.",
      iconName: "Server"
    },
    {
      title: "Automated Daily JetBackups",
      description: "Offsite backups are generated daily for every sub-account. You and your clients can restore files or MySQL databases with 1-click.",
      iconName: "RotateCcw"
    },
    {
      title: "Same Price on Renewal",
      description: "Keep your business margins predictable. We never hike the price of your reseller account when your subscription renews.",
      iconName: "Sparkles"
    }
  ];

  const resellerFaqs = [
    {
      question: "Can my clients tell that I am reselling ShrotiHost infrastructure?",
      answer: "No. Our reseller hosting is 100% white-label. You configure your own private nameservers (ns1.yourbrand.com, ns2.yourbrand.com), and the cPanel interface displays your company logo and support contact."
    },
    {
      question: "How do I get the Free WHMCS license?",
      answer: "The free WHMCS billing and automation license is included with any Reseller hosting plan purchased on an annual billing commitment. Simply open a ticket after signing up, and our team will issue and activate your WHMCS license."
    },
    {
      question: "Do I handle technical support for my clients, or does ShrotiHost?",
      answer: "As the reseller, you provide primary front-line support to your clients. ShrotiHost supports you 24/7 as your infrastructure partner—if you encounter a server-level issue, our team resolves it immediately via WhatsApp or priority ticket."
    },
    {
      question: "Can I upgrade my reseller plan as my client base expands?",
      answer: "Yes, you can upgrade seamlessly from Reseller Starter (25 accounts) to Growth (50 accounts), Pro (100 accounts), or Infinity (Unlimited) directly in your client portal with prorated billing and zero client disruption."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-600/15 via-indigo-500/10 to-transparent blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Hosting", href: "/shared-hosting" },
              { label: "Reseller Hosting" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>WHM Admin • White-Label Nameservers • Free WHMCS on Annual</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Launch & Scale Your White-Label Web Hosting Business
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Create and manage isolated cPanel accounts for your clients. Earn high-margin monthly recurring revenue with our <strong className="text-white font-semibold">same renewal price guarantee</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% White-Label
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                WHM Master Control
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Free WHMCS License
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                Daily JetBackups
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROFIT CALCULATOR SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ResellerProfitCalculator />
        </div>
      </section>

      {/* 3. PRICING GRID */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Reseller Packages"
            title="Linux Reseller Hosting Plans"
            subtitle="All plans feature unlimited NVMe storage (FUP), unmetered bandwidth, LiteSpeed Enterprise, and free WHMCS on annual billing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {RESELLER_HOSTING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESELLER ARCHITECTURE FEATURES */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-slate-950/60 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Reseller Infrastructure"
            title="Everything You Need to Run an Agency Hosting Fleet"
            subtitle="Built on robust enterprise hardware with automated billing and security tools."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {resellerFeatures.map((feat, idx) => (
              <FeatureCard
                key={idx}
                iconName={feat.iconName}
                title={feat.title}
                description={feat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESELLER FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Common Questions"
            title="Reseller Hosting FAQs"
            subtitle="Learn about nameserver configuration, WHMCS activation, and account isolation."
          />

          <FAQAccordion items={resellerFaqs} />
        </div>
      </section>

      {/* 6. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="reseller-hosting" />

      {/* 7. BOTTOM CTA */}
      <CTASection
        eyebrow="Start Your Agency Fleet"
        title="Ready to Build Your Recurring Hosting Revenue?"
        subtitle="Sign up for Reseller Starter at ₹299/mo or Reseller Growth at ₹499/mo. Risk-free 7-day money-back guarantee."
        primaryCtaText="Start Reselling Now"
        primaryCtaHref="#reseller-starter"
      />
    </div>
  );
}
