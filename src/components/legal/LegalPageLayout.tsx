import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building,
  Calendar,
  MapPin,
  FileText,
  Mail,
  CheckCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import type { LegalDocument } from "@/data/legal-content";

interface LegalPageLayoutProps {
  document: LegalDocument;
  currentPath: string;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  document,
  currentPath,
}) => {
  const legalNavTabs = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. HEADER & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-6 overflow-hidden bg-tech-grid">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Legal", href: "/terms" },
              { label: document.title },
            ]}
          />

          <div className="mt-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 shadow-card">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>{document.entityName} • {document.registrationNumber}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F9FAFB] tracking-tight">
              {document.title}
            </h1>

            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl leading-relaxed">
              {document.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#9CA3AF] pt-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>Last Updated: {document.lastUpdated}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>Jurisdiction: Hathras, Uttar Pradesh, India</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEGAL POLICY NAVIGATION TABS */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
            {legalNavTabs.map((tab) => {
              const isActive = currentPath === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#4F46E5] text-white shadow-sm font-bold"
                      : "bg-[#111827] border border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] hover:border-white/20"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PLAIN ENGLISH SUMMARY BANNER */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-card space-y-4">
            <div className="flex items-center gap-2 text-[#06B6D4] font-bold text-sm">
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
              <span>Plain-English Summary (At a Glance)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {document.plainEnglishSummary.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN LEGAL TEXT & SIDEBAR TOC */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Contents */}
          <aside className="lg:col-span-4 bg-[#111827] rounded-2xl p-6 border border-white/10 shadow-card lg:sticky lg:top-24 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB] pb-2 border-b border-white/10">
              Document Sections
            </h3>

            <nav className="space-y-1.5">
              {document.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block text-xs text-[#9CA3AF] hover:text-[#06B6D4] py-1 transition-colors"
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                Questions regarding legal terms or compliance?
              </p>
              <a
                href="mailto:support@shrotihost.in"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#06B6D4] hover:text-[#22D3EE]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@shrotihost.in</span>
              </a>
            </div>
          </aside>

          {/* Detailed Policy Text */}
          <div className="lg:col-span-8 bg-[#111827] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-card space-y-10">
            {document.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28 space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#F9FAFB] tracking-tight border-b border-white/10 pb-2">
                  {section.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Corporate Entity Verification Footer */}
            <div className="pt-8 border-t border-white/10 space-y-2 text-xs text-[#9CA3AF] bg-[#0B0F19] -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl border-t border-white/10">
              <p className="font-semibold text-[#F9FAFB]">Legal Notice & Registered Entity</p>
              <p>Operating Entity: {document.entityName}</p>
              <p>Ministry of MSME Udyam Registration: {document.registrationNumber}</p>
              <p>Registered Address: {document.registeredOffice}</p>
              <p className="text-[11px] text-[#9CA3AF] pt-2">
                Governing Law: Republic of India. Subject to the legal jurisdiction of courts in Uttar Pradesh, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
