import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  MessageSquare,
  Server,
  Zap,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, BlogPost } from "@/data/blog-articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | ShrotiHost Knowledgebase",
    };
  }

  return {
    title: `${post.title} | ShrotiHost Technical Guide`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      url: `https://shrotihost.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles (excluding current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.featured)
  ).slice(0, 2);

  // Recommended hosting product based on category
  const productRecommendation =
    post.category === "WordPress"
      ? {
          title: "Managed WordPress Cloud",
          price: "₹69/mo",
          features: ["LiteSpeed Enterprise", "LSCache Acceleration", "Redis Object Cache"],
          href: "/wordpress-hosting",
          cta: "View WordPress Plans",
        }
      : post.category === "Domains"
      ? {
          title: "India .in & Global .com",
          price: "₹714/yr",
          features: ["Free DNS Management", "2 Free Email Forwards", "No Transfer Fees"],
          href: "/domains",
          cta: "Register Domain",
        }
      : post.category === "Infrastructure"
      ? {
          title: "High-Performance Cloud VPS",
          price: "₹499/mo",
          features: ["Dedicated KVM Compute", "Full Root SSH Access", "Weekly offsite backups"],
          href: "/vps",
          cta: "Deploy Cloud VPS",
        }
      : {
          title: "NVMe Shared Hosting",
          price: "₹49/mo",
          features: ["Pure NVMe Storage", "Same Price on Renewal", "Free cPanel Migration"],
          href: "/shared-hosting",
          cta: "Explore Shared Plans",
        };

  // Helper to render simple markdown-like prose
  const renderContent = (rawContent: string) => {
    const paragraphs = rawContent.split("\n\n");

    return paragraphs.map((block, idx) => {
      const trimmed = block.trim();

      // Heading 3
      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="text-xl sm:text-2xl font-bold text-[#F9FAFB] mt-8 mb-4 tracking-tight"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      // Unordered list block
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").map((line) => line.replace(/^[\*\-]\s+/, ""));
        return (
          <ul key={idx} className="space-y-2.5 my-4">
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
      }

      // Ordered list block
      if (/^\d+\.\s+/.test(trimmed)) {
        const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, ""));
        return (
          <ol key={idx} className="space-y-2.5 my-4 list-decimal list-inside text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="pl-1">
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ol>
        );
      }

      // Standard paragraph
      return (
        <p
          key={idx}
          className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    });
  };

  // Helper to format inline bold and code tags safely
  const formatInline = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F9FAFB] font-semibold">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-[#0B0F19] border border-white/10 text-[#06B6D4] font-mono text-xs">$1</code>')
      .replace(/\*(.*?)\*/g, '<em class="text-[#F9FAFB] italic">$1</em>');
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. ARTICLE HERO & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-[#9CA3AF] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                {post.readTime}
              </span>
              <span className="text-[#9CA3AF] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9CA3AF]" />
                {post.publishDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed border-l-2 border-[#4F46E5] pl-4 italic">
              {post.excerpt}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#9CA3AF]">
              <div className="w-7 h-7 rounded-full bg-[#4F46E5]/20 border border-[#4F46E5]/40 flex items-center justify-center text-[#06B6D4] font-bold">
                S
              </div>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Body */}
          <article className="lg:col-span-8 bg-[#111827] rounded-2xl p-6 sm:p-10 sm:p-12 border border-white/10 shadow-card">
            <div className="prose prose-invert max-w-none text-[#9CA3AF]">
              {renderContent(post.content)}
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Knowledgebase</span>
              </Link>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-[#9CA3AF]">Need help implementing this?</span>
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10B981] hover:text-emerald-400 font-semibold flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Engineer</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Contextual Hosting Recommendation */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-white/10 shadow-card space-y-4">
              <span className="text-[11px] font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Recommended Solution
              </span>

              <div>
                <h4 className="text-lg font-bold text-[#F9FAFB]">{productRecommendation.title}</h4>
                <p className="text-xs text-[#9CA3AF] mt-1">Starting from {productRecommendation.price}</p>
              </div>

              <ul className="space-y-2 text-xs text-[#9CA3AF]">
                {productRecommendation.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button href={productRecommendation.href} className="w-full" variant="primary">
                  {productRecommendation.cta}
                </Button>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="bg-[#0B0F19] rounded-2xl p-6 border border-white/10 space-y-3">
              <h4 className="text-sm font-bold text-[#F9FAFB]">Free Migration Assistance</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Switching from another provider? Our sysadmins migrate your cPanel accounts, databases, and emails with zero downtime.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="secondary" className="w-full" size="sm">
                  Request Free Migration
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. RELATED GUIDES */}
      {relatedPosts.length > 0 && (
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB]">Related Technical Guides</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relPost) => (
                <div
                  key={relPost.slug}
                  className="bg-[#111827] rounded-2xl p-6 border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-2 py-0.5 rounded-full">
                        {relPost.category}
                      </span>
                      <span className="text-[#9CA3AF]">{relPost.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-[#F9FAFB] group-hover:text-[#06B6D4] transition-colors">
                      <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                    </h4>

                    <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2">
                      {relPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <Link
                      href={`/blog/${relPost.slug}`}
                      className="text-xs font-semibold text-[#06B6D4] group-hover:text-[#22D3EE] inline-flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BOTTOM CTA */}
      <CTASection
        eyebrow="Enterprise Cloud Hosting"
        title="Experience LiteSpeed NVMe Hosting Today"
        subtitle="Test our high-performance infrastructure risk-free with our 7-day money-back guarantee."
        primaryCtaText="Get Started from ₹49/mo"
        primaryCtaHref="/shared-hosting"
        secondaryCtaText="Talk to an Engineer"
        secondaryCtaHref="https://wa.me/919582129099"
      />
    </div>
  );
}
