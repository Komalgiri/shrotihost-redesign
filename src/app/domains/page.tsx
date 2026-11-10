import React from "react";
import { Metadata } from "next";
import {
  Globe,
  Search,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ExternalLink,
  Layers,
  Server,
  FileText,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { DomainSearchManager } from "@/components/domains/DomainSearchManager";
import { TldPricingTable } from "@/components/domains/TldPricingTable";
import { RelatedHostingProducts } from "@/components/hosting/RelatedHostingProducts";

export const metadata: Metadata = {
  title: "Domain Name Search & Registration from ₹259 | .in, .com, .org | ShrotiHost",
  description:
    "Register and transfer top-level domains (.in at ₹714, .com at ₹1,169). Includes free DNS records management, WHOIS privacy protection, and transparent renewal pricing.",
  openGraph: {
    title: "Domain Name Registration & Search | ShrotiHost",
    description:
      "Find your perfect domain. Transparent first-year, renewal, and transfer rates across popular TLD extensions.",
    url: "https://shrotihost.in/domains",
  },
};

export default function DomainsPage() {
  const domainPerks = [
    {
      title: "Free DNS Zone Management",
      description: "Manage your A, AAAA, CNAME, MX, and TXT records easily through our control panel without paying extra fees.",
      iconName: "Server"
    },
    {
      title: "WHOIS Privacy Protection",
      description: "Shield your personal phone number, physical address, and email from spammers and automated telemarketing scrapers.",
      iconName: "ShieldCheck"
    },
    {
      title: "Email & Domain Forwarding",
      description: "Direct incoming traffic or forward emails (e.g. contact@yourbrand.in) straight to your primary personal inbox.",
      iconName: "Globe"
    },
    {
      title: "Automated Domain Locking",
      description: "Protect your high-value digital asset against unauthorized transfers or hijacking attempts with registrar lock.",
      iconName: "Lock"
    }
  ];

  const transferSteps = [
    {
      step: "01",
      title: "Unlock Your Domain",
      description: "Log into your existing registrar (GoDaddy, Namecheap, BigRock) and turn off the Registrar Transfer Lock."
    },
    {
      step: "02",
      title: "Obtain EPP / Auth Code",
      description: "Request your unique authorization secret code from your current registrar's domain management screen."
    },
    {
      step: "03",
      title: "Initiate Transfer on ShrotiHost",
      description: "Enter your domain name and EPP authorization code in our portal checkout. Transfer adds a full 1-year extension."
    },
    {
      step: "04",
      title: "Approve Email & Complete",
      description: "Click the confirmation link sent to the administrative email on file. The registry completes transfer with zero downtime."
    }
  ];

  const domainFaqs = [
    {
      question: "How long does domain registration take to become active?",
      answer: "Domain registration is instantaneous upon successful payment verification. DNS records propagate across global root nameservers within a few minutes up to a maximum of 2 to 4 hours."
    },
    {
      question: "Will my website experience downtime during a domain transfer?",
      answer: "No! As long as you do not change your nameservers during the transfer window, your existing website, SSL certificate, and mailboxes continue operating without a single second of interruption."
    },
    {
      question: "Can I register a domain without buying hosting right now?",
      answer: "Yes, you can register and park your domain with ShrotiHost today and connect it to a hosting plan whenever you are ready to build your website."
    },
    {
      question: "Are domain registrations eligible for refunds?",
      answer: "No. Consistent with our published Refund Policy and ICANN registry regulations, domain registrations, transfers, and renewals are strictly non-refundable once issued by the central registry."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION & SEARCH MANAGER */}
      <section className="relative pt-6 sm:pt-10 pb-12 overflow-hidden bg-tech-grid">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Domains", href: "/domains" },
              { label: "Search & Registration" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-4 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>Instant Registration • Free DNS Tools • Transparent Pricing</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Find and Secure Your Ideal Domain Name
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Register .in, .com, .org, and modern extensions with upfront renewal rates, zero hidden transfer penalties, and free DNS management.
            </p>
          </div>

          {/* Interactive Domain Search Manager */}
          <DomainSearchManager />
        </div>
      </section>

      {/* 2. COMPREHENSIVE TLD PRICING TABLE */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="TLD Directory"
            title="Domain Registration & Renewal Pricing Matrix"
            subtitle="Transparent first-year, annual renewal, and transfer fees across popular top-level domains."
          />

          <TldPricingTable />
        </div>
      </section>

      {/* 3. DOMAIN INCLUSIONS & FEATURES */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Included with Every Domain"
            title="Everything You Need to Manage Your Web Identity"
            subtitle="Zero add-on charges for standard domain controls, security, and DNS mapping."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainPerks.map((perk, idx) => (
              <FeatureCard
                key={idx}
                iconName={perk.iconName}
                title={perk.title}
                description={perk.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOMAIN TRANSFER GUIDE */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Zero Downtime"
            title="How to Transfer Your Domain to ShrotiHost"
            subtitle="Switching registrars is simple, keeps your website live, and adds a full additional year of registration."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {transferSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 relative flex flex-col justify-between border border-slate-200/80 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-3xl font-extrabold text-indigo-600/30 block mb-3 font-mono">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="secondary"
              size="md"
              href="https://portal.shrotihost.in/cart.php?a=add&domain=transfer"
              isExternal={true}
              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Initiate Domain Transfer on Portal
            </Button>
          </div>
        </div>
      </section>

      {/* 5. DOMAIN FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Common Inquiries"
            title="Domain Registration & Transfer FAQs"
            subtitle="Straightforward answers on ICANN regulations, transfer locks, and DNS propagation."
          />

          <FAQAccordion items={domainFaqs} />
        </div>
      </section>

      {/* 6. RELATED HOSTING PRODUCTS */}
      <RelatedHostingProducts currentSlug="domains" />

      {/* 7. BOTTOM CTA */}
      <CTASection
        eyebrow="Pair Domain with Cloud Hosting"
        title="Get Fast NVMe Hosting with Your New Domain"
        subtitle="Bundle your domain with our NVMe Shared Hosting starting at ₹49/month with our flat renewal guarantee."
        primaryCtaText="Explore Hosting Plans"
        primaryCtaHref="/shared-hosting"
      />
    </div>
  );
}
