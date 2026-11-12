import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Puzzle, Globe, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageSection } from "@/components/ui/PageSection";

export const metadata: Metadata = {
  title: "Portfolio & WHMCS Modules | ShrotiHost",
  description:
    "Public-facing work from Shroti Host: WHMCS automation modules (WaShroti, gateway fees) and custom engineering services—no fabricated client logos.",
  openGraph: {
    title: "Portfolio | ShrotiHost",
    url: "https://shrotihost.in/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="pb-16 section-surface-base text-[#F9FAFB]">
      <section className="relative pt-6 sm:pt-10 pb-12 overflow-hidden bg-tech-grid border-b border-white/10">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <Breadcrumbs items={[{ label: "Portfolio" }]} />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Verified public work</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">What we ship</h1>
            <p className="mt-3 text-sm text-[#9CA3AF] leading-relaxed">
              The live site points here for recent work, including WHMCS modules sold on the store. We do not display
              unnamed client logos or invented case studies—only products and services you can verify publicly.
            </p>
          </div>
        </div>
      </section>

      <PageSection tone="alt" border="y">
        <SectionHeading
          eyebrow="Product catalog"
          title="Modules and engineering you can verify"
          subtitle="Every item below links to documentation or a live service page—no placeholder case studies."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 shadow-card hover:border-white/20 transition-all">
            <Puzzle className="w-8 h-8 text-[#06B6D4]" />
            <h2 className="mt-4 text-xl font-bold">WHMCS modules</h2>
            <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
              WaShroti WhatsApp notifications, Smart Gateway Fees allocator, and Social Proof Premium—documented on the
              modules page with live portal checkout links.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/whmcs-modules" size="md">
                Explore modules
              </Button>
              <a
                href="https://portal.shrotihost.in/index.php?rp=/store/whmcs-modules"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#818CF8] hover:text-[#06B6D4]"
              >
                Store catalog
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8 shadow-card hover:border-white/20 transition-all">
            <Globe className="w-8 h-8 text-[#818CF8]" />
            <h2 className="mt-4 text-xl font-bold">Custom engineering</h2>
            <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
              Websites, apps, e-commerce, SaaS, and bespoke software built by the team that operates the hosting
              platform—scoped per project with written milestones.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#9CA3AF]">
              <li>
                <Link href="/web-development" className="hover:text-[#F9FAFB] inline-flex items-center gap-1">
                  Web development <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/app-development" className="hover:text-[#F9FAFB] inline-flex items-center gap-1">
                  App development <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/custom-software" className="hover:text-[#F9FAFB] inline-flex items-center gap-1">
                  Custom software <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </PageSection>

      <PageSection tone="base" border="y">
        <SectionHeading
          eyebrow="Start a project"
          title="Need something built on this infrastructure?"
          subtitle="Contact routes to sales and engineering—form submissions on this site are demo-only."
        />
        <Button href="/contact" size="lg">
          Contact the team
        </Button>
      </PageSection>
    </div>
  );
}
