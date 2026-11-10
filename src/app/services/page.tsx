import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Globe,
  Smartphone,
  ShoppingBag,
  Cpu,
  Puzzle,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Code2,
  Users,
  Repeat,
  Terminal,
  Server,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { SERVICES_LIST } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital & Software Development Services | ShrotiHost Engineering",
  description:
    "End-to-end digital engineering partner. Custom web development, mobile apps, e-commerce storefronts, SaaS architecture, and WHMCS automation modules.",
  openGraph: {
    title: "Digital & Software Development Services | ShrotiHost",
    description:
      "Bespoke software engineered for performance, deployed directly onto our LiteSpeed NVMe cloud network.",
    url: "https://shrotihost.in/services",
  },
};

export default function ServicesPage() {
  const engagementModels = [
    {
      title: "Fixed-Scope Milestone Projects",
      badge: "Most Common",
      description: "Ideal for clearly defined websites, landing pages, or mobile apps. Fixed price, guaranteed milestones, and transparent delivery deadlines.",
      icon: <CheckCircle2 className="w-6 h-6 text-indigo-600" />,
      features: [
        "Fixed project budget with no hidden costs",
        "Milestone-based payment schedule",
        "Clear contractual deliverables checklist",
        "30-day post-launch warranty included"
      ]
    },
    {
      title: "Dedicated Engineering Sprints",
      badge: "Best for Startups",
      description: "Direct engineering capacity for startups building MVPs, SaaS products, or dynamic custom platforms needing agile flexibility.",
      icon: <Code2 className="w-6 h-6 text-cyan-600" />,
      features: [
        "Bi-weekly sprint planning and demos",
        "Direct communication with lead engineers",
        "Flexible backlog prioritization",
        "Continuous integration & deployment"
      ]
    },
    {
      title: "Managed Cloud & Infrastructure Retainers",
      badge: "Ongoing Support",
      description: "Continuous server monitoring, security patching, performance maintenance, and dedicated priority support for mission-critical portals.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      features: [
        "24/7 uptime monitoring & rapid incident response",
        "Automated daily offsite backups with JetBackup",
        "Security audits & dependency vulnerability patching",
        "Dedicated priority WhatsApp & ticket support"
      ]
    }
  ];

  const servicesFaqs = [
    {
      question: "How does ShrotiHost differ from a traditional software agency?",
      answer: "Traditional agencies build software and then hand you off to find separate web hosting, which often causes finger-pointing between developers and sysadmins. Because ShrotiHost is both a software engineering team and a high-performance cloud host, we architect, code, deploy, and maintain your platform on our own optimized LiteSpeed NVMe servers with unified accountability."
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs)?",
      answer: "Yes, absolutely. We routinely execute mutual NDAs prior to in-depth technical discovery to protect your proprietary algorithms, product concepts, and business logic."
    },
    {
      question: "What is your typical project payment structure?",
      answer: "For fixed-price projects, we typically structure payments in milestones: 40% initial deposit upon architectural sign-off, 30% upon beta staging deployment, and 30% upon final QA, cloud deployment, and code repository handover."
    },
    {
      question: "Can I commission custom WHMCS modules or payment gateway integrations?",
      answer: "Yes! Alongside our popular public modules (WaShroti, Smart Gateway Fees), we build bespoke WHMCS provisioning modules, server registrar plugins, and payment gateway adapters for hosting businesses worldwide."
    }
  ];

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "web-development":
        return <Globe className="w-6 h-6 text-indigo-600" />;
      case "app-development":
        return <Smartphone className="w-6 h-6 text-cyan-600" />;
      case "ecommerce-development":
        return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
      case "saas-development":
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case "whmcs-modules":
        return <Puzzle className="w-6 h-6 text-amber-600" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Overview & Portfolio" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 mb-4 shadow-card">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Full-Stack Engineering • Cloud Integration • Dedicated Support</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              Software & Digital Engineering Services
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              From bespoke responsive websites and mobile apps to scalable SaaS platforms and WHMCS automation tools. We design, build, and deploy digital products engineered for raw speed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#inquiry-form"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Free Project Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#catalog"
              >
                Explore Service Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE SERVICES CATALOG */}
      <section id="catalog" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Complete Engineering Service Suite"
            subtitle="Explore our specialized development verticals, typical project turnaround timelines, and core deliverables."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="bg-[#111827] rounded-2xl p-7 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.slug)}
                    </div>
                    <span className="text-[11px] font-semibold text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#06B6D4]" />
                      {service.turnaroundTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-1.5">{service.title}</h3>
                  <p className="text-xs font-semibold text-[#06B6D4] mb-3">{service.tagline}</p>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB]">
                      Key Highlights:
                    </p>
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0F19] border border-white/10 text-[#9CA3AF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    variant="outline"
                    size="md"
                    href={`/${service.slug}`}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="w-full text-center"
                  >
                    View {service.title} Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTIVE DARK SECTION: INFRASTRUCTURE-TUNED SOFTWARE DEPLOYMENT */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            isDark={true}
            eyebrow="The ShrotiHost Advantage"
            title="Unified Engineering & Cloud Infrastructure"
            subtitle="Why building with a cloud host beats traditional agencies: zero configuration friction, instant deployment, and end-to-end accountability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Native Server Optimization</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Code tuned specifically for LiteSpeed Enterprise, HTTP/3 QUIC, and NVMe block storage. No generic shared host bottlenecks or unoptimized PHP limits.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Git-Driven CI/CD Pipelines</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Automated continuous integration and deployment. Push to your Git repository triggers automated linting, test suites, and zero-downtime deployment.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Single Point of Contact</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                No finger-pointing between agency developers and third-party hosting tech support. One engineering team takes full ownership of both code and servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT MODELS */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Collaboration Options"
            title="Flexible Client Engagement Models"
            subtitle="Whether you need a turn-key project build, dedicated engineers, or ongoing managed infrastructure support."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-7 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                      {model.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#06B6D4] bg-[#06B6D4]/15 px-2.5 py-1 rounded-full border border-[#06B6D4]/30">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">{model.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {model.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="#inquiry-form"
                    className="w-full text-center"
                  >
                    Select Engagement Model
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PROJECT INQUIRY FORM */}
      <section id="inquiry-form" className="relative px-4 sm:px-6 lg:px-8 py-12 bg-[#0B0F19] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Start Your Project"
            title="Tell Us About Your Vision"
            subtitle="Submit your project details for an architectural review and transparent quote from our engineering leads."
          />

          <ContactForm initialService="Custom Software Solutions" />
        </div>
      </section>

      {/* 6. SERVICES FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Common Questions"
            title="Services & Engagement FAQs"
            subtitle="Straightforward answers regarding contracts, code ownership, NDAs, and payment structures."
          />

          <FAQAccordion items={servicesFaqs} />
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <CTASection
        eyebrow="Architectural Excellence"
        title="Ready to Build Your Next Digital Product?"
        subtitle="Schedule a free technical architecture consultation with ShrotiHost engineers today."
        primaryCtaText="Start Project Discovery"
        primaryCtaHref="#inquiry-form"
      />
    </div>
  );
}
