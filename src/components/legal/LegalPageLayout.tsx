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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>{document.entityName} • {document.registrationNumber}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {document.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {document.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Last Updated: {document.lastUpdated}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Jurisdiction: Hathras, Uttar Pradesh, India</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEGAL POLICY NAVIGATION TABS */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
            {legalNavTabs.map((tab) => {
              const isActive = currentPath === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
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
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-indigo-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
              <CheckCircle className="w-4 h-4 text-indigo-600" />
              <span>Plain-English Summary (At a Glance)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {document.plainEnglishSummary.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
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
          <aside className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm lg:sticky lg:top-24 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-100">
              Document Sections
            </h3>

            <nav className="space-y-1.5">
              {document.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block text-xs text-slate-600 hover:text-indigo-600 py-1 transition-colors"
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Questions regarding legal terms or compliance?
              </p>
              <a
                href="mailto:support@shrotihost.in"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@shrotihost.in</span>
              </a>
            </div>
          </aside>

          {/* Detailed Policy Text */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-10">
            {document.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28 space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
                  {section.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Corporate Entity Verification Footer */}
            <div className="pt-8 border-t border-slate-100 space-y-2 text-xs text-slate-600 bg-slate-50 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl border-t border-slate-200">
              <p className="font-semibold text-slate-900">Legal Notice & Registered Entity</p>
              <p>Operating Entity: {document.entityName}</p>
              <p>Ministry of MSME Udyam Registration: {document.registrationNumber}</p>
              <p>Registered Address: {document.registeredOffice}</p>
              <p className="text-[11px] text-slate-500 pt-2">
                Governing Law: Republic of India. Subject to the legal jurisdiction of courts in Uttar Pradesh, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
