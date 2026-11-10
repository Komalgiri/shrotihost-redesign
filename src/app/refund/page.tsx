import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { REFUND_POLICY } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | 7-Day Guarantee | ShrotiHost",
  description:
    "ShrotiHost 7-day money-back guarantee policy for shared, WordPress, unlimited, and reseller hosting. Explicit exclusions for domains and VPS servers.",
  openGraph: {
    title: "Refund & Cancellation Policy | ShrotiHost",
    description:
      "Full terms for our 7-day money-back guarantee, refund request procedures, and non-refundable exclusions.",
    url: "https://shrotihost.in/refund",
  },
};

export default function RefundPage() {
  return <LegalPageLayout document={REFUND_POLICY} currentPath="/refund" />;
}

