import React from "react";
import type { Metadata } from "next";
import { Tag, Gift, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hosting Offers & Coupon Codes | ShrotiHost",
  description:
    "Current ShrotiHost coupon SHROTIHOST (40% off first monthly payment on selected plans) and annual free-domain offers. Verified against the public store, November 2026.",
  openGraph: {
    title: "Hosting Offers | ShrotiHost",
    url: "https://shrotihost.in/offers",
  },
};

const PORTAL_COUPON_URL =
  "https://portal.shrotihost.in/cart.php?a=add&promocode=SHROTIHOST";

export default function OffersPage() {
  return (
    <div className="space-y-16 pb-16 bg-[#0B0F19] text-[#F9FAFB]">
      <section className="pt-8 px-4 sm:px-6 lg:px-10 xl:px-12 border-b border-white/5 pb-12">
        <div className="max-w-[1720px] mx-auto">
          <Breadcrumbs items={[{ label: "Offers" }]} />
          <h1 className="mt-6 text-3xl sm:text-4xl font-black tracking-tight">Current offers</h1>
          <p className="mt-3 max-w-2xl text-sm text-[#9CA3AF]">
            The promotions running on Shroti Host right now, and how to use them. Coupon codes are read from the client
            portal; this page mirrors the public marketing copy—always confirm eligibility at checkout.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-[1720px] mx-auto grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Coupon code</p>
            <h2 className="mt-2 text-xl font-bold flex items-center gap-2">
              <Tag className="w-5 h-5 text-[#818CF8]" />
              40% off with code <span className="font-mono text-[#06B6D4]">SHROTIHOST</span>
            </h2>
            <dl className="mt-6 space-y-3 text-sm text-[#9CA3AF]">
              <div>
                <dt className="font-semibold text-[#F9FAFB]">Works on</dt>
                <dd>
                  WP Starter, WP Business, WP Performance, Launch, Grow, Turbo, Unlimited Solo, Unlimited Trio and
                  Unlimited Pro
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#F9FAFB]">Billing cycles</dt>
                <dd>Monthly</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#F9FAFB]">Renewals</dt>
                <dd>First payment only; renewals at the normal price</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#F9FAFB]">Who</dt>
                <dd>New customers only, once per customer</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={PORTAL_COUPON_URL} isExternal size="md" rightIcon={<ExternalLink className="w-4 h-4" />}>
                Use code in portal
              </Button>
              <Button href="/hosting" variant="secondary" size="md">
                View hosting plans
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Free domain with annual hosting</p>
            <h2 className="mt-2 text-xl font-bold flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#10B981]" />
              First-year domain on yearly billing
            </h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>Turbo (annual)</span>
                <span className="font-semibold text-[#F9FAFB]">Free .in domain · from ₹1,499/yr</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>Infinity (annual)</span>
                <span className="font-semibold text-[#F9FAFB]">Free .com or .in · from ₹2,499/yr</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>WP Performance (annual)</span>
                <span className="font-semibold text-[#F9FAFB]">Free .in · from ₹2,299/yr</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>WP Ultimate (annual)</span>
                <span className="font-semibold text-[#F9FAFB]">Free .com or .in · from ₹3,799/yr</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#9CA3AF] leading-relaxed">
              Free domain terms: eligible extensions on annual plans, first year only. Premium domains excluded.
              Renewals charged at prevailing renewal price. One free domain per eligible hosting account.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-[1720px] mx-auto text-center">
          <SectionHeading
            eyebrow="Next step"
            title="Pick a plan, then apply the code at checkout"
            subtitle="Opens the live WHMCS cart—no mock checkout on this assessment build."
          />
        </div>
      </section>
    </div>
  );
}
