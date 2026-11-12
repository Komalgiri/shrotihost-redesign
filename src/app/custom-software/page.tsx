import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Code2, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { PageSection } from "@/components/ui/PageSection";
import { PillarCard } from "@/components/ui/PillarCard";

export const metadata: Metadata = {
  title: "Custom Software Development | ShrotiHost",
  description:
    "Bespoke business software, APIs, and integrations engineered in India and deployed on ShrotiHost cloud infrastructure.",
  openGraph: {
    title: "Custom Software | ShrotiHost",
    url: "https://shrotihost.in/custom-software",
  },
};

const DELIVERABLES = [
  "Requirements discovery and written scope",
  "API-first backend (REST or GraphQL)",
  "Admin dashboards and role-based access",
  "Staging environment on ShrotiHost NVMe hosting",
  "Handover documentation and optional retainer support",
];

export default function CustomSoftwarePage() {
  return (
    <div className="pb-16 section-surface-base text-[#F9FAFB]">
      <section className="relative pt-6 sm:pt-10 pb-12 overflow-hidden bg-tech-grid border-b border-white/10">
        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Custom Software" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Bespoke applications</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Custom software</h1>
            <p className="mt-3 text-sm text-[#9CA3AF] leading-relaxed">
              On the public site this route covers bespoke business applications beyond a marketing website—CRMs,
              inventory tools, integrations, and internal portals. We design, build, and host on the same LiteSpeed NVMe
              platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Request a scope call
              </Button>
              <Button href="/saas-development" variant="secondary" size="lg">
                Multi-tenant SaaS
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PageSection tone="alt" border="y">
        <SectionHeading
          eyebrow="Stack layers"
          title="Application, data, and operations—under one roof"
          subtitle="Typed APIs, payment integrations, and production hosting on the same NVMe fabric as our shared cloud."
        />
        <div className="grid md:grid-cols-3 gap-8 sm:gap-6 pt-2">
          <PillarCard accent="indigo" icon={<Code2 className="w-6 h-6" />} title="Application layer">
            PHP/Laravel, Node.js, or Next.js depending on workload—with typed APIs and automated deployments.
          </PillarCard>
          <PillarCard accent="cyan" icon={<Cpu className="w-6 h-6" />} title="Data & integrations">
            Payment gateways (Razorpay, Cashfree), WhatsApp APIs, WHMCS hooks, and third-party ERP connectors.
          </PillarCard>
          <PillarCard accent="emerald" icon={<ShieldCheck className="w-6 h-6" />} title="Operations">
            Hosted on ShrotiHost with JetBackup, Imunify360, and DPDP-conscious data handling documented in our privacy
            policy.
          </PillarCard>
        </div>
      </PageSection>

      <PageSection tone="base" border="y">
        <SectionHeading
          title="Typical deliverables"
          subtitle="Every engagement is fixed-scope or sprint-based with written milestones."
        />
        <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 shadow-card max-w-3xl">
          <ul className="grid sm:grid-cols-1 gap-3">
            {DELIVERABLES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm">
          <Link href="/portfolio" className="text-[#818CF8] font-semibold hover:text-[#06B6D4] inline-flex items-center gap-1">
            See portfolio &amp; WHMCS modules
            <ArrowRight className="w-4 h-4" />
          </Link>
        </p>
      </PageSection>

      <CTASection
        eyebrow="Custom builds"
        title="Tell us what you need"
        highlightText="built."
        subtitle="We respond on WhatsApp and email—no automated ticket mock on this demo."
        primaryCtaText="Contact engineering"
        primaryCtaHref="/contact"
        secondaryCtaText="All services"
        secondaryCtaHref="/services"
        showWhatsApp={false}
      />
    </div>
  );
}
