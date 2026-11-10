import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { PRIVACY_POLICY } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | DPDP Act 2023 Compliance | ShrotiHost",
  description:
    "ShrotiHost Privacy Policy under India's Digital Personal Data Protection Act 2023. We collect only essential provisioning data and never sell personal information.",
  openGraph: {
    title: "Privacy Policy | ShrotiHost Data Protection",
    description:
      "Strict data privacy principles complying with India's DPDP Act 2023. Zero sale of customer data.",
    url: "https://shrotihost.in/privacy",
  },
};

export default function PrivacyPage() {
  return <LegalPageLayout document={PRIVACY_POLICY} currentPath="/privacy" />;
}

