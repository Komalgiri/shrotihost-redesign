import React from "react";
import { Metadata } from "next";
import {
  ShoppingBag,
  Zap,
  CreditCard,
  Truck,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Percent,
  FileCheck,
  Layers,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | WooCommerce & Custom Storefronts | ShrotiHost",
  description:
    "High-converting online store engineering with Indian payment gateways (UPI, Razorpay, Cashfree, PhonePe), automated GST billing, shipping integration, and sub-second catalog speeds.",
  openGraph: {
    title: "E-Commerce Development Services | ShrotiHost Engineering",
    description:
      "Turn store visitors into loyal customers with lightning-fast WooCommerce and headless commerce storefronts.",
    url: "https://shrotihost.in/ecommerce-development",
  },
};

export default function EcommerceDevelopmentPage() {
  const ecommerceCapabilities = [
    {
      title: "Frictionless UPI & Card Checkout",
      description: "Direct integrations with Razorpay, Cashfree, PhonePe, and Paytm, enabling instant one-click UPI checkout, card tokenization, and Net Banking.",
      icon: <CreditCard className="w-6 h-6 text-[#10B981]" />
    },
    {
      title: "Automated GST Invoicing & Compliance",
      description: "Auto-generate B2B and B2C tax invoices with customer GSTIN validation, HSN/SAC code mapping, and integrated state-wise tax breakdown.",
      icon: <Percent className="w-6 h-6 text-[#4F46E5]" />
    },
    {
      title: "Shipping & Courier Logistics Integration",
      description: "Automate order dispatch, AWB tracking generation, and live shipping rate calculators with Shiprocket, Delhivery, Bluedart, and India Post.",
      icon: <Truck className="w-6 h-6 text-[#06B6D4]" />
    },
    {
      title: "WhatsApp Abandoned Cart Recovery",
      description: "Recover up to 25% of abandoned carts with automated WhatsApp alerts and reminders directly to prospective buyers.",
      icon: <MessageSquare className="w-6 h-6 text-[#10B981]" />
    }
  ];

  const ecommerceTech = [
    "WooCommerce",
    "WordPress",
    "Next.js Commerce",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Razorpay API",
    "Cashfree API",
    "Shiprocket API",
    "Redis Object Cache",
    "MySQL",
    "Stripe"
  ];

  const deliverables = [
    "Fully customized, responsive WooCommerce or Headless Commerce storefront",
    "Integrated Indian payment gateways (UPI, RuPay, Visa, Mastercard, Net Banking)",
    "Automated GST invoice generation & downloadable customer tax PDF receipts",
    "Courier shipping integration with automated tracking notifications",
    "Pre-configured LiteSpeed Cache and Redis Object Cache for sub-second speeds",
    "Abandoned cart automated recovery workflows",
    "Complete admin dashboard training & 45 days post-launch support"
  ];

  const ecommerceFaqs = [
    {
      question: "Which platform is better for my store: WooCommerce or custom headless?",
      answer: "For most catalog-based stores and brands (up to 10,000 SKUs), managed WooCommerce hosted on our LiteSpeed NVMe servers with Redis provides the best balance of flexibility, cost-effectiveness, and content control. For high-volume multi-brand marketplaces or complex custom checkout logic, a headless Next.js Commerce architecture is recommended."
    },
    {
      question: "How do you handle Indian payment gateways (UPI, PhonePe, Paytm, Razorpay)?",
      answer: "We integrate officially certified gateway SDKs with server-to-server webhook verification. This ensures that when a customer pays via UPI (Google Pay, PhonePe, Paytm, QR code), the order status updates instantly without phantom order drops or payment sync failures."
    },
    {
      question: "Will my store be able to handle festival sales and heavy traffic spikes?",
      answer: "Yes! Because we host your store on LiteSpeed Enterprise with Redis Object Caching, static pages are served from RAM while dynamic checkout requests are processed with dedicated CloudLinux LVE resources. Your store will not crash when marketing campaigns drive concurrent visitors."
    },
    {
      question: "Do you configure shipping logistics and tracking automatically?",
      answer: "Yes, we integrate shipping aggregators like Shiprocket, Delhivery, or Bluedart directly into your store. When an order is marked ready for dispatch, AWBs are generated automatically, and your customer receives real-time tracking links."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 bg-[#0B0F19] text-[#F9FAFB]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "E-Commerce Development" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#10B981]/10 text-emerald-300 border border-[#10B981]/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
              <span>WooCommerce • UPI Gateways • Automated GST Invoicing • Fast Checkout</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              High-Converting E-Commerce Store Engineering
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Build an online storefront tuned for Indian shoppers. Seamless UPI and card checkouts, automated GST compliance, courier integration, and sub-second catalog speeds on LiteSpeed NVMe cloud.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#inquiry-form"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-[#4F46E5] hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25"
              >
                Build Your Online Store
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#capabilities"
                className="bg-[#111827] hover:bg-[#1F2937] text-[#F9FAFB] border border-white/10"
              >
                Explore Store Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES MATRIX */}
      <section id="capabilities" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Conversion-Focused"
            title="E-Commerce Architecture Built for Sales"
            subtitle="Eliminate checkout friction and automate backend operations from day one."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ecommerceCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-7 sm:p-8 flex items-start gap-5 border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-[#10B981]/40 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">{cap.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. E-COMMERCE GATEWAYS & SECURITY */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F19] text-[#F9FAFB] border-y border-white/10">
        <div className="max-w-[1720px] mx-auto text-center">
          <SectionHeading
            isDark={true}
            eyebrow="E-Commerce Stack"
            title="Reliable Commerce & Payment Gateways"
            subtitle="Built on industry-proven platforms, RBI-compliant payment gateways, and automated logistics networks."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mt-10">
            {ecommerceTech.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] text-xs sm:text-sm font-semibold hover:border-[#10B981] hover:text-[#10B981] transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#111827] rounded-2xl p-8 sm:p-12 border border-white/10 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#10B981] shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#F9FAFB]">Included With Every E-Commerce Build</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">Complete setup from product catalog to bank account disbursement.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F9FAFB]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INQUIRY FORM */}
      <section id="inquiry-form" className="relative px-4 sm:px-6 lg:px-8 py-12 bg-[#0B0F19] border-y border-white/10">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Launch Your Store"
            title="Start Your E-Commerce Discovery"
            subtitle="Tell us about your product range, target launch date, and preferred payment gateways. We will deliver an architectural blueprint and fixed-price quote."
          />

          <ContactForm initialService="E-Commerce Development" />
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Questions & Answers"
            title="E-Commerce Development FAQs"
            subtitle="Clear answers on UPI gateways, traffic concurrency, and ongoing maintenance."
          />

          <FAQAccordion items={ecommerceFaqs} />
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <CTASection
        eyebrow="Start Selling Online"
        title="Ready to Launch a High-Converting Online Store?"
        subtitle="Schedule a free technical architecture consultation with our e-commerce engineering leads today."
        primaryCtaText="Request E-Commerce Quote"
        primaryCtaHref="#inquiry-form"
      />
    </div>
  );
}
