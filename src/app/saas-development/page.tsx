import React from "react";
import { Metadata } from "next";
import {
  Cpu,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Database,
  Lock,
  Sparkles,
  ArrowRight,
  Layers,
  FileCheck,
  Users,
  Repeat,
  Server,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "SaaS Development & Custom Cloud Software Engineering | ShrotiHost",
  description:
    "Engineering scalable multi-tenant SaaS applications, microservices, and customer portals. Subscription billing (Stripe/Razorpay), RBAC permissions, and cloud provisioning.",
  openGraph: {
    title: "SaaS Development & Cloud Software | ShrotiHost Engineering",
    description:
      "From MVP to scalable production. Multi-tenant architecture, automated subscription billing, and enterprise cloud infrastructure.",
    url: "https://shrotihost.in/saas-development",
  },
};

export default function SaasDevelopmentPage() {
  const saasCapabilities = [
    {
      title: "Multi-Tenant Cloud Architecture",
      description: "Secure database tenancy models (schema-per-tenant or isolated row keys) guaranteeing complete customer data privacy, GDPR, and DPDP Act compliance.",
      icon: <Database className="w-6 h-6 text-violet-400" />
    },
    {
      title: "Automated Subscription Billing & Dunning",
      description: "Integrations with Stripe and Razorpay Subscriptions handling recurring invoicing, multi-tier plan upgrades, prorated billing, and automated dunning recovery.",
      icon: <Repeat className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description: "Granular permission hierarchies (Owner, Admin, Manager, Member, Viewer) with multi-user team invites, activity audit logs, and SSO capabilities.",
      icon: <Users className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "API-First Architecture & Webhooks",
      description: "Comprehensive RESTful and GraphQL endpoints with HMAC-signed webhooks, enabling your customers to build custom third-party integrations.",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />
    }
  ];

  const sprintRoadmap = [
    {
      step: "Sprint 1",
      title: "Architecture & Auth",
      description: "Database schema design, multi-tenant tenancy boundaries, secure JWT/Session authentication, and base UI component system."
    },
    {
      step: "Sprint 2",
      title: "Core Business Logic",
      description: "Developing the primary product workflow, user dashboards, data ingestion pipelines, and customer-facing features."
    },
    {
      step: "Sprint 3",
      title: "Billing & Integrations",
      description: "Integrating Stripe / Razorpay subscriptions, webhook handlers, customer billing portals, and transactional notifications."
    },
    {
      step: "Sprint 4",
      title: "Security & QA Hardening",
      description: "Penetration testing, rate limiting, SQL injection defense, CORS verification, and high-concurrency load testing."
    },
    {
      step: "Sprint 5",
      title: "Cloud Deployment",
      description: "Provisioning Dockerized production servers on ShrotiHost KVM Cloud VPS with automated CI/CD and offsite JetBackups."
    }
  ];

  const techStack = [
    "Next.js (App Router)",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "Docker",
    "Stripe Subscriptions",
    "Razorpay Subscriptions",
    "Tailwind CSS"
  ];

  const deliverables = [
    "100% intellectual property & source code repository ownership",
    "Full customer dashboard and superadmin back-office management portal",
    "Automated recurring subscription billing and customer invoice receipts",
    "Documented REST / GraphQL API endpoints with interactive Swagger UI",
    "Dockerized container configuration ready for automated CI/CD deployment",
    "Automated daily offsite database snapshot backup schedule",
    "60-day post-launch technical warranty and bug-fixing commitment"
  ];

  const saasFaqs = [
    {
      question: "How long does it take to develop a SaaS MVP from scratch?",
      answer: "A functional, production-ready SaaS MVP (including authentication, core workflow, multi-tenant database, and subscription billing) typically requires 8 to 12 weeks of focused sprint cycles."
    },
    {
      question: "Can ShrotiHost host and maintain our SaaS infrastructure?",
      answer: "Yes! Unlike agencies that leave you to manage AWS or GCP alone, we configure, deploy, and monitor your application on our high-compute KVM Cloud VPS servers with automated JetBackup daily backups and 24/7 sysadmin incident response."
    },
    {
      question: "How do you guarantee data security between different tenants?",
      answer: "We implement strict tenancy isolation at both the database and ORM query middleware levels. All queries automatically inject tenant identifier filters, preventing Tenant A from ever accessing or modifying records belonging to Tenant B."
    },
    {
      question: "Do we retain full ownership of the intellectual property (IP)?",
      answer: "Yes, 100%. All code, database schemas, architectural diagrams, and assets are the exclusive intellectual property of your company upon milestone settlement."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-violet-600/20 via-indigo-500/10 to-transparent blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "SaaS & Custom Software" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Tenant Architecture • Subscription Billing • Cloud Provisioning</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              SaaS & Custom Cloud Software Engineering
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We architect, engineer, and deploy scalable multi-tenant web applications from MVP to cloud production. High-concurrency database schemas, recurring billing, and automated infrastructure.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#inquiry-form"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Book Architecture Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#roadmap"
              >
                Explore Sprint Roadmap
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES MATRIX */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Core Architecture"
            title="Engineered for Scalability & Multi-Tenancy"
            subtitle="Built on modern cloud design patterns to support thousands of concurrent business accounts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {saasCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-7 sm:p-8 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECH STACK */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-slate-950/60 border-y border-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading
            eyebrow="SaaS Tech Stack"
            title="Battle-Tested Full-Stack Cloud Stack"
            subtitle="Strict type-safety, robust ORMs, and containerized microservices."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold hover:border-violet-500/50 hover:text-white transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPRINT ROADMAP */}
      <section id="roadmap" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Agile Delivery"
            title="5-Sprint SaaS Development Roadmap"
            subtitle="How we structure multi-week engineering sprints to take your product from requirements to production launch."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {sprintRoadmap.map((sprint, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between border-slate-800 hover:border-violet-500/40 transition-colors"
              >
                <div>
                  <span className="text-2xl font-extrabold text-violet-400/50 block mb-3 font-mono">
                    {sprint.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{sprint.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {sprint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DELIVERABLES */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 sm:p-12 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Your SaaS Deliverables & Guarantee</h3>
              <p className="text-xs sm:text-sm text-slate-400">Written contractual commitments backed by complete IP handover.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="inquiry-form" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Architectural Intake"
            title="Start Your SaaS Discovery"
            subtitle="Tell us about your multi-tenant product concept, target market, and timeline. Our technical architect will review your requirements within 24 hours."
          />

          <ContactForm initialService="SaaS & Custom Software" />
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Common Inquiries"
            title="SaaS Development FAQs"
            subtitle="Clear answers on tenancy isolation, infrastructure hosting, and IP protection."
          />

          <FAQAccordion items={saasFaqs} />
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <CTASection
        eyebrow="From Concept to Scale"
        title="Ready to Architect Your Cloud SaaS Platform?"
        subtitle="Schedule a free technical architecture consultation with ShrotiHost software leads today."
        primaryCtaText="Book Architecture Call"
        primaryCtaHref="#inquiry-form"
      />
    </div>
  );
}

