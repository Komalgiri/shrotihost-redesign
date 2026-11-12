import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Puzzle,
  MessageSquare,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Code2,
  Terminal,
  Server,
  Zap,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { WHMCS_MODULES_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "WHMCS Modules & Automation Addons | WaShroti & Gateway Fees | ShrotiHost",
  description:
    "Official WHMCS automation modules engineered by ShrotiHost: WaShroti WhatsApp notifications, Smart Gateway Fee surcharges, and Social Proof alerts for WHMCS 8.x.",
  openGraph: {
    title: "WHMCS Modules & Custom Hosting Automation | ShrotiHost",
    description:
      "Production-tested WHMCS addons to automate WhatsApp notifications, recover transaction fees, and boost hosting sales conversions.",
    url: "https://shrotihost.in/whmcs-modules",
  },
};

interface WhmcsModuleItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  specs: { label: string; value: string }[];
  orderUrl: string;
}

export default function WhmcsModulesPage() {
  const modules: WhmcsModuleItem[] = [
    {
      id: "washroti",
      name: "WaShroti – WhatsApp Notification Module",
      tagline: "Automated real-time WhatsApp alerts for WHMCS invoices, payments & support",
      badge: "Best Seller",
      description:
        "Keep hosting clients instantly informed on their preferred messaging channel. Automatically dispatch WhatsApp alerts when invoices are generated, payments are received, service details are provisioned, or support tickets are updated.",
      icon: <MessageSquare className="w-6 h-6 text-[#10B981]" />,
      features: [
        "Automated triggers: Invoice Created, Payment Received, Ticket Opened & Service Provisioned",
        "Supports Official Meta WhatsApp Cloud API and standard QR-based web gateways",
        "Full support for dynamic WHMCS merge fields: {$client_name}, {$amount}, {$invoice_url}",
        "Instant admin notifications for new client registrations, ticket replies, and cancellations",
        "Granular notification toggles: clients can opt in/out per notification channel",
        "Multi-language template support with automated URL shortener integration"
      ],
      specs: [
        { label: "WHMCS Version", value: "v8.5 to v8.10+" },
        { label: "PHP Compatibility", value: "PHP 8.1 & 8.2" },
        { label: "License Type", value: "Single Domain + Free Staging" },
        { label: "Updates Included", value: "12 Months Free Updates" }
      ],
      orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules/washroti"
    },
    {
      id: "smart-gateway-fees",
      name: "Smart Gateway Fees & Surcharges",
      tagline: "Legally pass through payment processing fees and protect hosting margins",
      badge: "Essential Utility",
      description:
        "Stop letting payment gateway transaction charges (Razorpay, Cashfree, PayPal, Stripe) eat into razor-thin shared hosting margins. Automatically add transparent percentage fees or fixed surcharges at checkout with granular exemptions.",
      icon: <CreditCard className="w-6 h-6 text-[#4F46E5]" />,
      features: [
        "Granular fee rules: configure Percentage Fee (e.g. 2%) + Fixed Fee (e.g. ₹5) per gateway",
        "Granular product exemptions: exempt enterprise VPS or high-margin servers from fees",
        "Minimum cart amount threshold to automatically waive fees on high-value transactions",
        "Fully transparent checkout display compliant with Indian payment gateway guidelines",
        "Seamless invoice line-item integration and automated refund fee reconciliation",
        "Instant switching: toggle fees per individual payment method in WHMCS admin"
      ],
      specs: [
        { label: "WHMCS Version", value: "v8.6 to v8.10+" },
        { label: "PHP Compatibility", value: "PHP 8.1 & 8.2" },
        { label: "Supported Gateways", value: "Razorpay, Cashfree, Stripe, PayPal, Instamojo" },
        { label: "License Type", value: "Single Domain + Free Staging" }
      ],
      orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules/gateway-fees"
    },
    {
      id: "social-proof-premium",
      name: "Social Proof Live Purchase Popups",
      tagline: "High-conversion live activity widgets tailored for WHMCS shopping carts",
      badge: "Conversion Booster",
      description:
        "Build trust and trigger FOMO on your WHMCS order forms. Display subtle, attractive real-time notification popups highlighting recent hosting orders, domain registrations, and client signups.",
      icon: <TrendingUp className="w-6 h-6 text-[#06B6D4]" />,
      features: [
        "Displays real recent orders (e.g., 'A customer from Pune just bought Shared Hosting')",
        "Option to configure simulated social proof during initial launch campaigns",
        "Completely mobile responsive with customizable screen corner positioning",
        "Fine-grained timing: configure display duration, loop frequency, and initial delay",
        "Zero external tracking or slow third-party scripts: 100% self-hosted on your WHMCS",
        "Lightweight vanilla JavaScript with sub-50ms footprint and zero page slowdown"
      ],
      specs: [
        { label: "WHMCS Version", value: "v8.0 to v8.10+" },
        { label: "PHP Compatibility", value: "PHP 8.1 & 8.2" },
        { label: "Frontend Footprint", value: "< 4KB Vanilla JS" },
        { label: "License Type", value: "Single Domain + Free Staging" }
      ],
      orderUrl: "https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules/social-proof"
    }
  ];

  const customServices = [
    {
      title: "Custom Payment Gateway Modules",
      description:
        "Integrate regional payment gateways, digital wallets, or crypto processors into WHMCS with full webhook callback verification and automated invoice marking.",
      icon: <CreditCard className="w-5 h-5 text-[#4F46E5]" />
    },
    {
      title: "Domain Registrar Integrations",
      description:
        "Build custom registrar plugins connecting WHMCS to regional domain registries or private resellers with automated WHOIS lookups, registrations, and DNS management.",
      icon: <Server className="w-5 h-5 text-[#06B6D4]" />
    },
    {
      title: "Cloud Provisioning & Server Addons",
      description:
        "Automate the deployment of custom VPS hypervisors, Docker containers, game servers, or SaaS applications immediately upon WHMCS invoice settlement.",
      icon: <Zap className="w-5 h-5 text-[#10B981]" />
    },
    {
      title: "WHMCS Theme & Client Area UX",
      description:
        "Modernize your legacy Six or Twenty-One WHMCS templates with clean, mobile-first layouts, dark mode styling, and simplified multi-step checkout funnels.",
      icon: <Code2 className="w-5 h-5 text-[#06B6D4]" />
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 bg-[#0B0F19] text-[#F9FAFB]">
      {/* 1. HERO SECTION & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "WHMCS Modules & Automation" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/15 text-indigo-300 border border-[#4F46E5]/30 mb-4 shadow-sm">
              <Puzzle className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>WHMCS v8.x & PHP 8.2 Compatible Addons</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              WHMCS Modules & Hosting Automation Built by Hosters
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
              Streamline customer billing, automate instant WhatsApp transaction notifications, and recover payment gateway processing surcharges legally with production-tested WHMCS addons.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="#modules"
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-[#4F46E5] hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25"
              >
                Explore Modules
              </Button>
              <Button
                href="#custom-modules"
                size="lg"
                variant="secondary"
                className="bg-[#111827] hover:bg-[#1F2937] text-[#F9FAFB] border border-white/10"
              >
                Request Custom Module
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION & COMPATIBILITY PILLARS */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-[1720px] mx-auto">
          <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-card grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#4F46E5] shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F9FAFB]">WHMCS 8.5 to 8.10+</p>
                <p className="text-xs text-[#9CA3AF]">Strict standard hook API</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#10B981] shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F9FAFB]">PHP 8.1 & 8.2</p>
                <p className="text-xs text-[#9CA3AF]">IonCube v12+ compiled</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#06B6D4] shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F9FAFB]">Instant Provisioning</p>
                <p className="text-xs text-[#9CA3AF]">Keys generated on payment</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#4F46E5] shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F9FAFB]">Direct Engineer Help</p>
                <p className="text-xs text-[#9CA3AF]">Free installation assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP WHMCS MODULES */}
      <section id="modules" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto space-y-12">
          <SectionHeading
            eyebrow="Commercial Modules"
            title="Production-Tested WHMCS Automation Addons"
            subtitle="Engineered for web hosts, domain registrars, and cloud providers seeking maximum automation and margin protection."
          />

          <div className="space-y-8">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="bg-[#111827] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-card hover:bg-[#1F2937]/50 hover:border-[#4F46E5]/40 transition-all duration-200 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start"
              >
                <div className="space-y-6 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                      {mod.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">{mod.name}</h3>
                        <span className="text-[11px] font-semibold text-indigo-300 bg-[#4F46E5]/20 border border-[#4F46E5]/40 px-2.5 py-0.5 rounded-full">
                          {mod.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">{mod.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB]">Key Features & Automation:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {mod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#9CA3AF]">
                          <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Specification & CTA Card */}
                <div className="w-full lg:w-72 bg-[#0B0F19] rounded-xl p-6 border border-white/10 flex flex-col justify-between shrink-0 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB] mb-4 pb-2 border-b border-white/10">
                      Technical Profile
                    </h4>
                    <div className="space-y-3">
                      {mod.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex flex-col text-xs">
                          <span className="text-[#9CA3AF]">{spec.label}</span>
                          <span className="text-[#F9FAFB] font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <Button
                      href={mod.orderUrl}
                      isExternal
                      className="w-full bg-[#4F46E5] hover:bg-indigo-500 text-white"
                      variant="primary"
                      rightIcon={<ExternalLink className="w-3.5 h-3.5 ml-2" />}
                    >
                      Deploy License
                    </Button>
                    <p className="text-[11px] text-center text-[#9CA3AF]">
                      Instant delivery in client portal
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM WHMCS DEVELOPMENT */}
      <section id="custom-modules" className="relative px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F19] text-[#F9FAFB] border-y border-white/10">
        <div className="max-w-[1720px] mx-auto space-y-12">
          <SectionHeading
            isDark={true}
            eyebrow="Bespoke Engineering"
            title="Custom WHMCS Module Development"
            subtitle="Need a proprietary server provisioning addon, custom payment gateway, or client portal integration? Our team engineers secure, ionCube-ready WHMCS plugins."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customServices.map((svc, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:bg-[#1F2937] hover:border-[#4F46E5]/40 transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0 mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#F9FAFB] mb-2">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-4">
                    {svc.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs text-[#06B6D4] font-medium flex items-center gap-1">
                    <span>1 to 2 week delivery</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INQUIRY FORM */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-[#0B0F19] border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Custom Project Scope"
            title="Request a Custom WHMCS Addon"
            subtitle="Share your integration requirements or technical architecture specifications for a free feasibility estimate."
          />

          <ContactForm initialService="WHMCS Custom Modules" />
        </div>
      </section>

      {/* 6. WHMCS FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Compatibility & Licensing"
            title="WHMCS Modules FAQ"
            subtitle="Clear answers on compatibility, ionCube requirements, license activation, and free staging domains."
          />

          <FAQAccordion items={WHMCS_MODULES_FAQS} />
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <CTASection
        eyebrow="Ready to Automate Your Hosting Operations?"
        title="Deploy ShrotiHost WHMCS Modules in Under 5 Minutes"
        subtitle="Download immediately from the client portal with 12 months of free compatibility updates and dedicated engineer installation assistance."
        primaryCtaText="View Client Store"
        primaryCtaHref="https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919582129099"
      />
    </div>
  );
}
