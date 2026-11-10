import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  MapPin,
  MessageSquare,
  Server,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { FOOTER_SECTIONS } from "@/data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F19] border-t border-white/10 text-[#9CA3AF] text-sm">
      {/* Top Value Strip */}
      <div className="border-b border-white/10 bg-[#111827]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#F9FAFB]">Pure NVMe + LiteSpeed</p>
                <p className="text-[#9CA3AF] text-xs">Up to 12x faster page loads</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#10B981] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#F9FAFB]">Same Renewal Price</p>
                <p className="text-[#9CA3AF] text-xs">Zero predatory renewal hikes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#F9FAFB]">7-Day Guarantee</p>
                <p className="text-[#9CA3AF] text-xs">100% risk-free money-back</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#10B981] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#F9FAFB]">24/7 Human Support</p>
                <p className="text-[#9CA3AF] text-xs">WhatsApp & Priority Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Info (2 columns on large) */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center font-extrabold text-white text-base shadow-sm">
                S
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Shroti<span className="text-indigo-400">Host</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              High-performance cloud hosting, domain registrations, and precision software engineering. Serving students, developers, startups, and agencies across India.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Ruheri, Hathras, Uttar Pradesh 204101, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:support@shrotihost.in" className="hover:text-white transition-colors">
                  support@shrotihost.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 95821 29099
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111827] border border-white/10 text-[11px] text-[#9CA3AF]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>MSME Udyam: UDYAM-UP-36-0017127</span>
              </span>
            </div>
          </div>

          {/* Directory Links from FOOTER_SECTIONS */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9FAFB]">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="hover:text-[#06B6D4] text-[#9CA3AF] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.href.startsWith("http") && (
                        <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] group-hover:text-[#06B6D4]" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accepted Payment Channels Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center flex-wrap gap-2 text-[#9CA3AF]">
            <span className="font-semibold text-[#F9FAFB] mr-1">Accepted Payment Methods:</span>
            <span className="px-2 py-1 rounded bg-[#111827] border border-white/10 text-[#F9FAFB] font-medium">UPI (GPay / PhonePe / Paytm)</span>
            <span className="px-2 py-1 rounded bg-[#111827] border border-white/10 text-[#F9FAFB] font-medium">RuPay</span>
            <span className="px-2 py-1 rounded bg-[#111827] border border-white/10 text-[#F9FAFB] font-medium">Visa</span>
            <span className="px-2 py-1 rounded bg-[#111827] border border-white/10 text-[#F9FAFB] font-medium">Mastercard</span>
            <span className="px-2 py-1 rounded bg-[#111827] border border-white/10 text-[#F9FAFB] font-medium">Net Banking</span>
          </div>

          <div className="text-[#9CA3AF] text-center md:text-right">
            <span>Client & Billing Portal: </span>
            <a
              href="https://portal.shrotihost.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06B6D4] hover:text-[#22D3EE] font-medium ml-1"
            >
              portal.shrotihost.in
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>
            © 2026 ShrotiHost. Operated by Shroti Enterprises. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[#9CA3AF]">
            <Link href="/terms" className="hover:text-[#F9FAFB] transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-[#F9FAFB] transition-colors">
              Privacy (DPDP Act)
            </Link>
            <span>•</span>
            <Link href="/refund" className="hover:text-[#F9FAFB] transition-colors">
              Refunds
            </Link>
            <span>•</span>
            <Link href="/acceptable-use-policy" className="hover:text-[#F9FAFB] transition-colors">
              AUP
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
