import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Terminal,
  Code2,
  Headphones,
  FileText,
  MapPin,
  Clock,
  CheckCircle,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers at ShrotiHost | Remote Engineering & Support Jobs in India",
  description:
    "Join the ShrotiHost team. We're a remote-first Indian technology company hiring Linux support engineers, full-stack developers, and cloud specialists.",
  openGraph: {
    title: "Careers at ShrotiHost | Join Our Remote Team",
    description:
      "Work on high-concurrency cloud infrastructure and modern web applications. Explore open positions and our engineering culture.",
    url: "https://shrotihost.in/careers",
  },
};

interface OpenRole {
  id: string;
  title: string;
  department: "Infrastructure & Support" | "Engineering" | "Sales & Pre-Sales" | "Content";
  type: "Full-time" | "Part-time" | "Contract";
  location: "Remote (India)";
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export default function CareersPage() {
  const openRoles: OpenRole[] = [
    {
      id: "linux-support-engineer",
      title: "Linux & Hosting Support Engineer",
      department: "Infrastructure & Support",
      type: "Full-time",
      location: "Remote (India)",
      description:
        "Provide direct technical assistance to web hosting clients. Troubleshoot cPanel, LiteSpeed, DNS propagation, SSL certificates, and website migrations with speed and empathy.",
      responsibilities: [
        "Respond to client support tickets and WhatsApp inquiries within strict SLAs",
        "Perform seamless cPanel-to-cPanel and manual website migrations with zero downtime",
        "Diagnose PHP errors, MySQL database connection issues, and WordPress memory exhaustion",
        "Maintain and monitor server health across CloudLinux nodes"
      ],
      requirements: [
        "Strong familiarity with Linux command-line, cPanel/WHM, and DNS records (A, MX, TXT)",
        "Experience debugging WordPress and PHP CMS platforms",
        "Excellent written communication skills in English and Hindi",
        "Prior web hosting or system administration experience is a plus"
      ]
    },
    {
      id: "fullstack-developer",
      title: "Full-Stack Engineer (Next.js & TypeScript)",
      department: "Engineering",
      type: "Full-time",
      location: "Remote (India)",
      description:
        "Build and scale user interfaces, client portals, and bespoke web solutions. Work with modern React 19, Next.js App Router, Tailwind CSS, and Node.js microservices.",
      responsibilities: [
        "Develop clean, accessible, and performant UI components using React and TypeScript",
        "Integrate client-side features with RESTful backend APIs and WHMCS billing hooks",
        "Optimize web vital metrics (LCP, CLS, INP) across mobile and desktop viewports",
        "Collaborate on custom client engineering projects from architecture to deployment"
      ],
      requirements: [
        "Proficiency with modern JavaScript/TypeScript, Next.js, and Tailwind CSS",
        "Understanding of server-side rendering, API routes, and state management",
        "Familiarity with Git version control and modern deployment workflows",
        "Passion for crafting pixel-perfect, accessible user interfaces"
      ]
    },
    {
      id: "pre-sales-specialist",
      title: "Hosting Pre-Sales & Migration Specialist",
      department: "Sales & Pre-Sales",
      type: "Full-time",
      location: "Remote (India)",
      description:
        "Act as the first technical contact for prospective clients. Understand their hosting requirements, suggest appropriate plan tiers, and coordinate onboarding migrations.",
      responsibilities: [
        "Guide inbound prospects on WhatsApp and website chat to the best hosting tier",
        "Audit existing client hosting setups to estimate migration complexity",
        "Explain our same-price-on-renewal philosophy and money-back guarantee",
        "Assist agency clients with Reseller and VPS sizing inquiries"
      ],
      requirements: [
        "Solid grasp of web hosting fundamentals (domains, bandwidth, NVMe, VPS)",
        "Friendly, patient, and highly articulate communication style",
        "Ability to translate technical hosting concepts into simple business benefits",
        "Experience in customer success or pre-sales is preferred"
      ]
    },
    {
      id: "technical-content-writer",
      title: "Technical Content Writer & Cloud Evangelist",
      department: "Content",
      type: "Contract",
      location: "Remote (India)",
      description:
        "Author clear, actionable guides, hosting comparisons, and tutorial articles that genuinely teach developers and site owners how to optimize their web infrastructure.",
      responsibilities: [
        "Write in-depth, hands-on tutorials on WordPress optimization, DNS, and server setups",
        "Produce objective comparison guides breaking down hosting technologies",
        "Create step-by-step knowledgebase articles for client self-service",
        "Collaborate with engineering to verify code snippets and configuration steps"
      ],
      requirements: [
        "Demonstrated experience writing about web hosting, cloud servers, or web development",
        "Ability to explain intricate sysadmin topics in plain, accessible language",
        "Comfortable researching technical documentation and running test installations",
        "Portfolio of published technical articles or blog posts"
      ]
    }
  ];

  const cultureValues = [
    {
      title: "Autonomy & High Ownership",
      description:
        "We hire capable people and trust them. You have direct ownership over your domain, whether writing code or solving tricky server problems.",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "100% Remote Across India",
      description:
        "We are a distributed team. Work from the comfort of your home anywhere in India with flexible hours and asynchronous collaboration.",
      icon: <MapPin className="w-6 h-6 text-cyan-600" />
    },
    {
      title: "Craftsmanship Over Haste",
      description:
        "We care deeply about clean code, robust server configs, and polished UI. We don't cut corners or push fragile hacks into production.",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Radical Transparency",
      description:
        "Just like our customer pricing, we communicate openly internally. Feedback is direct, respectful, and focused on collective improvement.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Company", href: "/about" },
              { label: "Careers" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 mb-4 shadow-card">
              <Briefcase className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>We&apos;re Hiring • 100% Remote in India</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              Build India&apos;s Most Transparent Cloud Platform
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
              Join an engineering-led team that values craftsmanship, autonomy, and honesty. We are building the next generation of cloud hosting and digital engineering tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="#open-roles" size="lg" variant="primary">
                View Open Positions
              </Button>
              <Button href="/about" size="lg" variant="secondary">
                About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CULTURE & VALUES PILLARS */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0 mb-4">
                    {val.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#F9FAFB] mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS DIRECTORY */}
      <section id="open-roles" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto space-y-12">
          <SectionHeading
            eyebrow="Opportunities"
            title="Current Open Positions"
            subtitle="Explore our active openings across engineering, systems infrastructure, and pre-sales."
          />

          <div className="space-y-8">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="bg-[#111827] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-card hover:border-white/20 transition-all flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start"
              >
                <div className="space-y-6 flex-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-semibold text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/30 px-2.5 py-0.5 rounded-full">
                        {role.department}
                      </span>
                      <span className="text-[11px] font-semibold text-[#10B981] bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                        {role.type}
                      </span>
                      <span className="text-[11px] font-semibold text-[#9CA3AF] bg-[#0B0F19] border border-white/10 px-2.5 py-0.5 rounded-full">
                        {role.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">{role.title}</h3>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB]">
                        What You Will Do:
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((item, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs text-[#9CA3AF] leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-[#06B6D4] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB]">
                        What We Are Looking For:
                      </h4>
                      <ul className="space-y-2">
                        {role.requirements.map((item, reqIdx) => (
                          <li key={reqIdx} className="flex items-start gap-2 text-xs text-[#9CA3AF] leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Application Card */}
                <div className="w-full lg:w-72 bg-[#0B0F19] rounded-xl p-6 border border-white/10 flex flex-col justify-between shrink-0 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB] mb-2">
                      Ready to Apply?
                    </h4>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      Email your resume or GitHub / portfolio link directly to our engineering leadership.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <Button
                      href={`mailto:careers@shrotihost.in?subject=Application:%20${encodeURIComponent(role.title)}`}
                      className="w-full font-bold"
                      variant="primary"
                      rightIcon={<Send className="w-3.5 h-3.5 ml-2" />}
                    >
                      Apply for Role
                    </Button>
                    <p className="text-[11px] text-center text-[#9CA3AF]">
                      Response within 48 business hours
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SELECTIVE DARK SECTION: PERKS & BENEFITS */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F19] text-[#F9FAFB] border-y border-white/10">
        <div className="max-w-[1720px] mx-auto space-y-12">
          <SectionHeading
            isDark={true}
            eyebrow="Benefits & Perks"
            title="How We Support Our Team"
            subtitle="Competitive compensation, total location flexibility, and tools to do your best work."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-card">
              <h3 className="text-base font-bold text-[#F9FAFB] mb-2">Competitive Compensation</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Fair, transparent salary packages benchmarked against modern Indian tech industry standards with regular performance evaluations.
              </p>
            </div>

            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-card">
              <h3 className="text-base font-bold text-[#F9FAFB] mb-2">Free Cloud Infrastructure</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Every team member receives complimentary high-tier NVMe web hosting, Cloud VPS instances, and domain credits for personal side-projects.
              </p>
            </div>

            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-card">
              <h3 className="text-base font-bold text-[#F9FAFB] mb-2">Flexible Asynchronous Work</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                We respect your personal time and focus hours. No unnecessary marathon meetings—we communicate clearly through written tickets and Slack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <CTASection
        eyebrow="Don't See Your Specific Role?"
        title="We Are Always Eager to Meet Talented Builders"
        subtitle="If you are passionate about cloud infrastructure, Linux systems, or modern React frontend engineering, send an open application."
        primaryCtaText="Send Open Application"
        primaryCtaHref="mailto:careers@shrotihost.in?subject=Open%20Application%20-%20ShrotiHost"
        secondaryCtaText="Explore Our Mission"
        secondaryCtaHref="/about"
      />
    </div>
  );
}
