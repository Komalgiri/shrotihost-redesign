import React from "react";
import { Metadata } from "next";
import {
  Globe,
  Zap,
  Code2,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Laptop,
  Compass,
  FileCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { WEB_DEV_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Custom Web Development Services | Next.js & React Engineering | ShrotiHost",
  description:
    "Bespoke web design, frontend engineering, and full-stack development. Built with Next.js, React, TypeScript, and deployed on LiteSpeed NVMe cloud.",
  openGraph: {
    title: "Custom Web Development | ShrotiHost Engineering",
    description:
      "Modern, responsive web applications engineered for raw speed and business conversion. Free consultation and transparent timelines.",
    url: "https://shrotihost.in/web-development",
  },
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      title: "Corporate & Brand Websites",
      description: "Polished, authoritative websites that communicate company credibility, convert prospects, and reflect brand identity with precision typography and micro-interactions.",
      icon: <Laptop className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "High-Speed Landing Pages",
      description: "Conversion-optimized landing pages built for performance marketing campaigns, delivering sub-second load times and frictionless lead generation forms.",
      icon: <Zap className="w-6 h-6 text-cyan-600" />
    },
    {
      title: "Headless Web Portals & Dashboards",
      description: "Dynamic React and Next.js customer portals integrated with secure REST and GraphQL APIs, authentication, and role-based data permissions.",
      icon: <Code2 className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Core Web Vitals Optimization",
      description: "Comprehensive audits and re-architecting of sluggish legacy websites to pass Google Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms).",
      icon: <Cpu className="w-6 h-6 text-amber-600" />
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Architecture",
      description: "We map out user flows, information architecture, functional requirements, and technical dependencies to establish a precise project blueprint."
    },
    {
      step: "02",
      title: "UI/UX & Design Tokens",
      description: "Interactive Figma wireframes and high-fidelity mockups crafted with responsive design systems, accessible color contrast, and typographic hierarchy."
    },
    {
      step: "03",
      title: "Component Engineering",
      description: "Modular development using Next.js, React, TypeScript, and Tailwind CSS. Clean, maintainable code with strict type-safety and zero boilerplate bloat."
    },
    {
      step: "04",
      title: "QA & Performance Testing",
      description: "Rigorous cross-browser testing, mobile touch validation, WCAG 2.1 AA accessibility audits, and Core Web Vitals benchmarking."
    },
    {
      step: "05",
      title: "Cloud Launch & Handover",
      description: "Automated deployment directly to LiteSpeed NVMe cloud infrastructure with SSL, CDN, automated JetBackup snapshots, and complete code ownership."
    }
  ];

  const techStackBadges = [
    "Next.js (App Router)",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PHP / Laravel",
    "PostgreSQL",
    "MySQL",
    "Redis Cache",
    "Docker",
    "WordPress / Headless",
    "Git CI/CD"
  ];

  const deliverables = [
    "100% intellectual property & source code repository ownership",
    "Fully responsive layouts tested across iOS, Android, and Desktop",
    "Performance-first architecture and Google PageSpeed optimization",
    "On-page technical SEO foundation, sitemap.xml & OpenGraph social cards",
    "Automated contact form routing with email notifications & WhatsApp integration",
    "Comprehensive technical documentation & admin handover walkthrough",
    "30-day post-launch warranty and bug-fixing support"
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Custom Web Development" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 mb-4 shadow-card">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Next.js • React • TypeScript • Performance-Optimized</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              Custom Web Design & Frontend Engineering That Scales
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              We engineer bespoke, lightning-fast websites that turn visitors into paying customers. Deployed directly on our high-performance cloud hosting for maximum uptime and zero latency.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#inquiry-form"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Architecture Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#process"
              >
                Our 5-Stage Engineering Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENGINEERING CAPABILITIES MATRIX */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Build"
            title="Engineered for Performance, Security and Growth"
            subtitle="Tailored digital solutions engineered with clean code, accessible components, and modern architecture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-7 sm:p-8 flex items-start gap-5 border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all"
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

      {/* 3. SELECTIVE DARK SECTION: PRODUCTION TECH STACK */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading
            isDark={true}
            eyebrow="Modern Tech Stack"
            title="Battle-Tested Technologies, Zero Outdated Bloat"
            subtitle="We build exclusively with modern frameworks that provide superior developer velocity, long-term maintainability, and sub-second page rendering."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mt-10">
            {techStackBadges.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] text-xs sm:text-sm font-semibold hover:border-[#4F46E5] hover:text-[#06B6D4] transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 5-STAGE ENGINEERING PROCESS */}
      <section id="process" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Methodology"
            title="Transparent 5-Stage Engineering Lifecycle"
            subtitle="How we take your idea from initial napkin wireframe to high-traffic production reality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {developmentProcess.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-6 relative flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#06B6D4]/30 block mb-3 font-mono">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#F9FAFB] mb-2">{step.title}</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DELIVERABLES & GUARANTEES CHECKLIST */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#111827] rounded-2xl p-8 sm:p-12 border border-white/10 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#10B981] shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#F9FAFB]">What You Receive on Every Project</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">Strict quality commitments backed by written contractual deliverables.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#9CA3AF]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE PROJECT INQUIRY FORM */}
      <section id="inquiry-form" className="relative px-4 sm:px-6 lg:px-8 py-12 bg-[#0B0F19] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Start Your Project Discovery"
            subtitle="Tell us about your project specifications, target timeline, and goals. We will provide a formal roadmap and transparent quote within 24 hours."
          />

          <ContactForm initialService="Custom Web Development" />
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Common Inquiries"
            title="Web Development FAQs"
            subtitle="Straightforward answers regarding process, technology stack, ownership, and maintenance."
          />

          <FAQAccordion items={WEB_DEV_FAQS} />
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <CTASection
        eyebrow="Let's Build Together"
        title="Ready to Transform Your Online Presence?"
        subtitle="Schedule a free technical architecture consultation with our senior engineering team."
        primaryCtaText="Submit Project Inquiry"
        primaryCtaHref="#inquiry-form"
      />
    </div>
  );
}
