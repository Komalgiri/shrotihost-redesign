import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { TERMS_OF_SERVICE } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service | Legal Service Agreement | ShrotiHost",
  description:
    "Review ShrotiHost Terms of Service: account responsibilities, billing cycles via client portal, service availability commitments, and Uttar Pradesh jurisdiction.",
  openGraph: {
    title: "Terms of Service | ShrotiHost",
    description:
      "Binding terms of service between customers and Shroti Enterprises (UDYAM-UP-36-0017127).",
    url: "https://shrotihost.in/terms",
  },
};

export default function TermsPage() {
  return <LegalPageLayout document={TERMS_OF_SERVICE} currentPath="/terms" />;
}

