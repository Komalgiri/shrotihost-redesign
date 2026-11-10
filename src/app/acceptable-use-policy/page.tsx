import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { ACCEPTABLE_USE_POLICY } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Acceptable Use Policy (AUP) | Cloud Infrastructure Rules | ShrotiHost",
  description:
    "Review ShrotiHost Acceptable Use Policy: prohibited content under Indian IT Act 2000, zero tolerance for spam/malware, and resource abuse prevention.",
  openGraph: {
    title: "Acceptable Use Policy | ShrotiHost Infrastructure Rules",
    description:
      "Standards for secure, legal, and respectful use of ShrotiHost NVMe servers and cloud network.",
    url: "https://shrotihost.in/acceptable-use-policy",
  },
};

export default function AcceptableUsePolicyPage() {
  return (
    <LegalPageLayout
      document={ACCEPTABLE_USE_POLICY}
      currentPath="/acceptable-use-policy"
    />
  );
}

