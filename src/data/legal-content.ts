export interface PolicySection {
  id: string;
  title: string;
  content: string;
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  lastUpdated: string;
  entityName: string;
  registrationNumber: string;
  registeredOffice: string;
  plainEnglishSummary: string[];
  sections: PolicySection[];
}

export const TERMS_OF_SERVICE: LegalDocument = {
  title: "Terms of Service",
  subtitle: "Governing agreement between customers and ShrotiHost (Shroti Enterprises)",
  lastUpdated: "November 2026",
  entityName: "Shroti Enterprises (trading as ShrotiHost)",
  registrationNumber: "UDYAM-UP-36-0017127",
  registeredOffice: "Ruheri, Hathras, Uttar Pradesh 204101, India",
  plainEnglishSummary: [
    "By signing up or purchasing a hosting service, you agree to these binding terms.",
    "You must be at least 18 years old or supervised by a legal guardian.",
    "Services are billed in advance via portal.shrotihost.in; unpaid invoices can result in suspension.",
    "Chargebacks without prior communication may trigger immediate account suspension.",
    "Governed under the laws and legal jurisdiction of Uttar Pradesh, India."
  ],
  sections: [
    {
      id: "parties",
      title: "1. Agreement & Parties",
      content: "These Terms of Service constitute a legally binding agreement between the client ('User', 'Customer', or 'You') and Shroti Enterprises ('ShrotiHost', 'Company', 'We', or 'Us'), an MSME Udyam registered enterprise in Uttar Pradesh, India (UDYAM-UP-36-0017127). Accessing our website, client portal, or purchasing services signifies unconditional acceptance of these terms."
    },
    {
      id: "accounts",
      title: "2. Account Registration & Security",
      content: "Users must provide accurate, complete, and current contact, billing, and identity information upon registration. You are solely responsible for maintaining the confidentiality of your client portal credentials and cPanel access. Any activity originating from your account credentials is your legal responsibility."
    },
    {
      id: "billing",
      title: "3. Billing, Invoices & Payment Terms",
      content: "All recurring web hosting, domain, and development services are billed in advance according to the billing cycle selected (monthly, semi-annually, annually). Invoices are delivered via email and client portal. Unpaid invoices past their specified due date will trigger automated service suspension within 3 days and permanent data termination after 15 days of continuous overdue status."
    },
    {
      id: "liability",
      title: "4. Limitation of Liability & Service Availability",
      content: "While ShrotiHost provides enterprise hardware with a 99.9% network uptime commitment, we are not liable for indirect, incidental, or consequential damages resulting from downtime, network transit failures, or third-party registry interruptions. Our total liability is capped at the amount paid by the customer for the affected billing period."
    }
  ]
};

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  subtitle: "Complying with India's Digital Personal Data Protection Act (DPDP Act 2023)",
  lastUpdated: "November 2026",
  entityName: "Shroti Enterprises (trading as ShrotiHost)",
  registrationNumber: "UDYAM-UP-36-0017127",
  registeredOffice: "Ruheri, Hathras, Uttar Pradesh 204101, India",
  plainEnglishSummary: [
    "We collect only the essential personal information needed to provision your hosting and domains.",
    "We NEVER sell, trade, or rent your personal data to advertisers or third parties.",
    "Your payment data is processed securely through RBI-compliant payment gateways.",
    "You have the right to review, update, or request the deletion of your personal data."
  ],
  sections: [
    {
      id: "collection",
      title: "1. Information We Collect",
      content: "We collect personal information necessary to deliver hosting services, including your name, email address, phone/WhatsApp contact number, billing postal address, IP address, and browser session logs. We do not store credit card numbers or banking passwords on our servers; all payments are processed directly by certified gateways."
    },
    {
      id: "usage",
      title: "2. Purpose & Use of Data",
      content: "Your data is used strictly to provision web hosting accounts, register domain names with accredited registries (.IN Registry / NIXI, ICANN accredited registrars), deliver invoice receipts, provide customer support, and communicate critical service notifications."
    },
    {
      id: "zero-sale",
      title: "3. Zero Sale of Personal Data",
      content: "ShrotiHost maintains a strict zero-sale privacy standard. We do not sell, rent, monetize, or disclose your personal data to marketing brokers, data aggregators, or external advertisers under any circumstances."
    },
    {
      id: "rights",
      title: "4. User Rights & Data Protection Grievances",
      content: "Under the DPDP Act 2023, you have the right to access, correct, or request the deletion of your data. For data protection inquiries or to exercise your rights, contact our Data Grievance Officer at support@shrotihost.in."
    }
  ]
};

export const REFUND_POLICY: LegalDocument = {
  title: "Refund & Cancellation Policy",
  subtitle: "7-Day Money-Back Guarantee for eligible first-time web hosting orders",
  lastUpdated: "November 2026",
  entityName: "Shroti Enterprises (trading as ShrotiHost)",
  registrationNumber: "UDYAM-UP-36-0017127",
  registeredOffice: "Ruheri, Hathras, Uttar Pradesh 204101, India",
  plainEnglishSummary: [
    "7-Day 100% Money-Back Guarantee on Shared, WordPress, Unlimited, and Reseller plans.",
    "Domain name registrations, transfers, and renewals are strictly NON-REFUNDABLE.",
    "Virtual Private Servers (VPS) are NON-REFUNDABLE due to instant cloud compute provisioning.",
    "Refunds are processed back to the original payment method within 5 to 7 business days."
  ],
  sections: [
    {
      id: "guarantee",
      title: "1. 7-Day Money-Back Guarantee Scope",
      content: "First-time purchasers of Shared Hosting, WordPress Hosting, Unlimited Hosting, and Reseller Hosting are entitled to a full refund within 7 calendar days from the initial order date. No justification is required if requested within this 7-day window."
    },
    {
      id: "non-refundable",
      title: "2. Strictly Non-Refundable Products",
      content: "The following items are completely excluded from refunds: Domain name registrations, domain transfers, and domain renewals (registry fees are non-recoverable); Cloud VPS Virtual Private Servers; WHMCS software licenses and custom modules; and subsequent subscription renewals."
    },
    {
      id: "procedure",
      title: "3. Refund Request Procedure",
      content: "To initiate a refund, submit a support ticket via the client portal (portal.shrotihost.in) under the Billing Department with your invoice number. Approved refunds are credited back to the original payment source (UPI, Card, or Net Banking) within 5 to 7 Indian banking business days."
    }
  ]
};

export const ACCEPTABLE_USE_POLICY: LegalDocument = {
  title: "Acceptable Use Policy (AUP)",
  subtitle: "Standards for legal, secure, and respectful use of our cloud infrastructure",
  lastUpdated: "November 2026",
  entityName: "Shroti Enterprises (trading as ShrotiHost)",
  registrationNumber: "UDYAM-UP-36-0017127",
  registeredOffice: "Ruheri, Hathras, Uttar Pradesh 204101, India",
  plainEnglishSummary: [
    "Zero tolerance for illegal content under Indian law and the Information Technology Act, 2000.",
    "Spam, unsolicited bulk email, phishing, and malware distribution are strictly banned.",
    "Resource abuse such as cryptocurrency mining, open proxies, and Tor nodes is prohibited.",
    "Reseller clients are held responsible for the content and compliance of their sub-accounts."
  ],
  sections: [
    {
      id: "prohibited-content",
      title: "1. Prohibited Content & Indian Law",
      content: "All hosted content must comply with the Information Technology Act, 2000, and Indian penal regulations. We enforce zero tolerance for child sexual abuse material, promotion of terrorism or violence, copyright infringement / pirated software (warez), illegal gambling/betting portals, and fraudulent schemes."
    },
    {
      id: "email-spam",
      title: "2. Email Limits & Anti-Spam",
      content: "Sending unsolicited commercial bulk email (spam) is prohibited. All mailing lists must be opt-in with working unsubscribe mechanisms. To protect server IP reputation, hourly outbound email limits apply per cPanel account."
    },
    {
      id: "resource-abuse",
      title: "3. Prohibited Computational Activities",
      content: "Even on unmetered plans, users may not run cryptocurrency miners, public proxy scripts, VPN endpoints, Tor exit nodes, botnet command controllers, or background Daemons that continuously consume 100% CPU."
    }
  ]
};

