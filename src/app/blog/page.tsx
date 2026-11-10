import React from "react";
import type { Metadata } from "next";
import { BookOpen, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { BlogDirectory } from "@/components/blog/BlogDirectory";
import { BLOG_POSTS } from "@/data/blog-articles";

export const metadata: Metadata = {
  title: "Technical Blog & Hosting Knowledgebase | ShrotiHost",
  description:
    "In-depth guides on LiteSpeed web servers, NVMe shared vs reseller hosting, DNS records, domain transfers, and WordPress speed optimization.",
  openGraph: {
    title: "ShrotiHost Blog | Technical Tutorials & Hosting Insights",
    description:
      "Production-tested technical advice for developers, website owners, and hosting resellers.",
    url: "https://shrotihost.in/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-600/20 via-cyan-500/10 to-transparent blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Resources", href: "/blog" },
              { label: "Technical Blog" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Engineering & Knowledge Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hosting Tutorials, Architecture & Insights
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore in-depth technical guides written by practicing infrastructure engineers. From DNS configurations to LiteSpeed caching and server sizing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE DIRECTORY & SEARCH */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-7xl mx-auto">
          <BlogDirectory posts={BLOG_POSTS} />
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <CTASection
        eyebrow="Fast Cloud Hosting"
        title="Put These Insights into Practice with ShrotiHost"
        subtitle="Deploy your website on high-speed PCIe NVMe storage powered by LiteSpeed Enterprise and 24/7 human support."
        primaryCtaText="Explore Hosting Plans"
        primaryCtaHref="/shared-hosting"
        secondaryCtaText="Check Domain Pricing"
        secondaryCtaHref="/domains"
      />
    </div>
  );
}

