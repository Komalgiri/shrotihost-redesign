import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageSquare,
  LifeBuoy,
  Clock,
  ShieldCheck,
  Server,
  ExternalLink,
  PhoneCall,
  CheckCircle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Support & Sales Assistance | ShrotiHost",
  description:
    "Get in touch with ShrotiHost: WhatsApp chat (+91 95821 29099), 24/7 technical ticketing, email support, and our registered office in Hathras, Uttar Pradesh.",
  openGraph: {
    title: "Contact ShrotiHost Support & Sales",
    description:
      "Direct engineer support via WhatsApp and ticketing. We're here to assist with hosting, migrations, domains, and custom development.",
    url: "https://shrotihost.in/contact",
  },
};

export default function ContactPage() {
  const contactChannels = [
    {
      title: "WhatsApp Direct Chat",
      value: "+91 95821 29099",
      description: "Quick pre-sales questions, renewal inquiries, and fast migration coordination.",
      icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
      actionText: "Chat on WhatsApp",
      actionUrl: "https://wa.me/919582129099",
      badge: "Instant Human Replies",
      external: true,
    },
    {
      title: "24/7 Support Portal",
      value: "portal.shrotihost.in",
      description: "Open official technical tickets for DNS, cPanel, email configs, or VPS management.",
      icon: <LifeBuoy className="w-6 h-6 text-indigo-600" />,
      actionText: "Open Ticket in Portal",
      actionUrl: "https://portal.shrotihost.in/submitticket.php",
      badge: "< 15m Avg Response",
      external: true,
    },
    {
      title: "Official Email Inboxes",
      value: "support@shrotihost.in",
      description: "Direct email for general inquiries, formal RFPs, and corporate communications.",
      icon: <Mail className="w-6 h-6 text-cyan-600" />,
      actionText: "Send Email",
      actionUrl: "mailto:support@shrotihost.in",
      badge: "Sales & Support",
      external: false,
    },
    {
      title: "Registered Head Office",
      value: "Hathras, Uttar Pradesh",
      description: "Shroti Enterprises, Ruheri, Hathras, UP 204101, India. Registered MSME Enterprise.",
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      actionText: "View MSME Registration",
      actionUrl: "/about",
      badge: "UDYAM-UP-36-0017127",
      external: false,
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION & BREADCRUMBS */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Company", href: "/about" },
              { label: "Contact Us" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-[#10B981] border border-emerald-500/30 mb-4 shadow-card">
              <Clock className="w-3.5 h-3.5 text-[#10B981]" />
              <span>24/7 Human Technical Support Active</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              Get in Touch with the ShrotiHost Team
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Have questions about hosting plans, website migrations, or custom software projects? Connect directly with our team across WhatsApp, tickets, or email.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS DIRECTORY */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactChannels.map((channel, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-6 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                      {channel.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/30 px-2.5 py-0.5 rounded-full">
                      {channel.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#F9FAFB]">{channel.title}</h3>
                    <p className="text-sm font-semibold text-[#06B6D4] mt-0.5">{channel.value}</p>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed mt-2">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10">
                  <a
                    href={channel.actionUrl}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F9FAFB] hover:text-[#06B6D4] transition-colors"
                  >
                    <span>{channel.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CONTACT FORM & DEPARTMENT ROUTING */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#4F46E5]/10 text-[#06B6D4] border border-[#06B6D4]/30 mb-3">
                <Mail className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Direct Message Form</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight">
                Send Us a Detailed Message
              </h2>
              <p className="text-sm text-[#9CA3AF] mt-2">
                Fill out the form below. Our team reviews every submission and routes it to the designated department specialist within 1 to 2 business hours.
              </p>
            </div>

            <ContactForm initialService="General Inquiry" />
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Quick Department Routing Card */}
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-card space-y-5">
              <h3 className="text-base font-bold text-[#F9FAFB] border-b border-white/10 pb-3">
                Department Routing Guide
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <p className="font-semibold text-[#F9FAFB]">Pre-Sales & Migration</p>
                  <p className="text-[#9CA3AF] mt-0.5">
                    Questions on selecting the right hosting plan, domain transfer timelines, and zero-downtime website migrations.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="font-semibold text-[#F9FAFB]">Technical Support</p>
                  <p className="text-[#9CA3AF] mt-0.5">
                    Assistance with DNS records, SSL certificates, cPanel configurations, and PHP version switches. Best submitted via the client portal.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="font-semibold text-[#F9FAFB]">Billing & Invoicing</p>
                  <p className="text-[#9CA3AF] mt-0.5">
                    GST invoice generation, renewal receipts, payment method updates, and refund inquiries.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="font-semibold text-[#F9FAFB]">Custom Software Projects</p>
                  <p className="text-[#9CA3AF] mt-0.5">
                    Scoping custom Next.js web applications, mobile apps, e-commerce stores, and WHMCS module integrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Legal & Entity Details */}
            <div className="bg-[#0B0F19] rounded-2xl p-6 border border-white/10 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#06B6D4] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Legal Business Information</span>
              </div>
              <p className="text-[#9CA3AF]">
                <span className="text-[#F9FAFB] font-medium">Trading Name:</span> ShrotiHost
              </p>
              <p className="text-[#9CA3AF]">
                <span className="text-[#F9FAFB] font-medium">Legal Entity:</span> Shroti Enterprises
              </p>
              <p className="text-[#9CA3AF]">
                <span className="text-[#F9FAFB] font-medium">MSME Registration:</span> UDYAM-UP-36-0017127
              </p>
              <p className="text-[#9CA3AF]">
                <span className="text-[#F9FAFB] font-medium">Registered Office:</span> Ruheri, Hathras, Uttar Pradesh 204101, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <CTASection
        eyebrow="Fastest Response via WhatsApp"
        title="Need an Immediate Answer to Your Hosting Question?"
        subtitle="Chat directly with our infrastructure engineers right now on WhatsApp. Average first response in under 5 minutes."
        primaryCtaText="Chat on WhatsApp"
        primaryCtaHref="https://wa.me/919582129099"
        secondaryCtaText="Explore Hosting Plans"
        secondaryCtaHref="/shared-hosting"
      />
    </div>
  );
}
