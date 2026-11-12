import React from "react";
import { Metadata } from "next";
import {
  Smartphone,
  Zap,
  Code2,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Bell,
  Lock,
  FileCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android Engineering | ShrotiHost",
  description:
    "Cross-platform iOS and Android mobile app development using React Native and Flutter. Secure cloud backend APIs, offline synchronization, and App Store approval guarantee.",
  openGraph: {
    title: "Mobile App Development | ShrotiHost Engineering",
    description:
      "Native-feel cross-platform mobile applications engineered for performance, backed by scalable cloud APIs.",
    url: "https://shrotihost.in/app-development",
  },
};

export default function AppDevelopmentPage() {
  const appCapabilities = [
    {
      title: "Cross-Platform iOS & Android",
      description: "Build once and deploy seamlessly across both Apple App Store and Google Play using React Native or Flutter, cutting engineering overhead by up to 40%.",
      icon: <Smartphone className="w-6 h-6 text-[#06B6D4]" />
    },
    {
      title: "Real-Time Push Notifications",
      description: "Direct customer engagement using Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs) with targeted customer segmentation.",
      icon: <Bell className="w-6 h-6 text-[#4F46E5]" />
    },
    {
      title: "Secure Backend Microservices & APIs",
      description: "High-throughput REST and GraphQL backend APIs built on Node.js and PostgreSQL, deployed on our low-latency cloud infrastructure.",
      icon: <Cpu className="w-6 h-6 text-[#4F46E5]" />
    },
    {
      title: "Offline-First Data Synchronization",
      description: "Local device storage caching with SQLite or WatermelonDB ensures your app remains functional and fast even in intermittent connectivity.",
      icon: <ShieldCheck className="w-6 h-6 text-[#10B981]" />
    }
  ];

  const appProcess = [
    {
      step: "01",
      title: "Product UX Wireframes",
      description: "Interactive mobile wireframes mapping out every tap, gesture, modal, and onboarding flow before writing production code."
    },
    {
      step: "02",
      title: "Component Engineering",
      description: "Building responsive 60fps UI components styled for iOS Human Interface Guidelines and Android Material Design."
    },
    {
      step: "03",
      title: "API & Device Integration",
      description: "Hooking up biometrics (FaceID/Fingerprint), GPS camera sensors, payment gateways, and backend database endpoints."
    },
    {
      step: "04",
      title: "Device Lab Testing",
      description: "Comprehensive testing across 20+ real iOS and Android physical screen resolutions, OS versions, and network speeds."
    },
    {
      step: "05",
      title: "App Store Deployment",
      description: "Complete handling of Apple App Store Review and Google Play Console submission, signing, compliance, and public launch."
    }
  ];

  const mobileTechStack = [
    "React Native",
    "Flutter",
    "TypeScript",
    "Swift",
    "Kotlin",
    "Node.js",
    "Firebase FCM",
    "PostgreSQL",
    "Redis",
    "Docker",
    "GraphQL",
    "Fastlane CI/CD"
  ];

  const deliverables = [
    "Full production iOS (.ipa) and Android (.aab) signed release binaries",
    "100% intellectual property & source code repository ownership",
    "Complete App Store and Google Play listing optimization & submission",
    "Documented REST / GraphQL backend API collection (Postman / Swagger)",
    "Cloud database provisioning on ShrotiHost Linux VPS instances",
    "Integrated crash analytics (Firebase Crashlytics / Sentry)",
    "60-day post-launch warranty and bug-fixing commitment"
  ];

  const appFaqs = [
    {
      question: "Should I build native apps or choose cross-platform (React Native/Flutter)?",
      answer: "For 95% of consumer and business applications, modern cross-platform frameworks (React Native or Flutter) deliver indistinguishable 60fps native performance while allowing a single unified codebase to serve both iOS and Android. This dramatically reduces development costs and ensures feature parity."
    },
    {
      question: "Do you assist with Apple App Store and Google Play Store approvals?",
      answer: "Yes, our team handles the entire submission process, including metadata, screenshots, privacy policy disclosures (DPDP/GDPR), permission manifests, and resolving any App Store reviewer inquiries until your app is live."
    },
    {
      question: "How long does a mobile app project typically take?",
      answer: "A standard MVP mobile application typically takes 6 to 10 weeks from discovery to store submission. More complex platforms with custom payment flows, real-time geolocation tracking, or social feeds usually take 10 to 14 weeks."
    },
    {
      question: "Who owns the app source code and developer accounts?",
      answer: "You own 100% of the code, intellectual property, and design assets. We build the app directly linked to your Apple Developer and Google Play Console accounts, ensuring you retain total autonomy."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 bg-[#0B0F19] text-[#F9FAFB]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden bg-tech-grid">
        <div className="relative max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Mobile App Development" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#06B6D4]/10 text-cyan-300 border border-[#06B6D4]/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>React Native • Flutter • iOS & Android • Cloud APIs</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
              Cross-Platform Mobile App Engineering
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              We design and build intuitive, fluid mobile applications that delight users on smartphones and tablets. Backed by scalable cloud infrastructure and guaranteed store approval.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#inquiry-form"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-[#4F46E5] hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25"
              >
                Discuss Your Mobile App
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#capabilities"
                className="bg-[#111827] hover:bg-[#1F2937] text-[#F9FAFB] border border-white/10"
              >
                Explore App Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES MATRIX */}
      <section id="capabilities" className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Engineered for Native Fluidity & Scale"
            subtitle="Explore our cross-platform mobile capabilities, real-time messaging, and cloud backend integrations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {appCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-7 sm:p-8 flex items-start gap-5 border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-[#06B6D4]/40 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">{cap.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MOBILE TECH STACK */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F19] text-[#F9FAFB] border-y border-white/10">
        <div className="max-w-[1720px] mx-auto text-center">
          <SectionHeading
            isDark={true}
            eyebrow="Mobile Tech Stack"
            title="Modern Mobile Architecture Stack"
            subtitle="Zero legacy baggage: we build with modern, high-velocity mobile runtimes and cloud backend services."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mt-10">
            {mobileTechStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] text-xs sm:text-sm font-semibold hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 5-STAGE DEVELOPMENT PROCESS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            title="From Idea to App Store Launch"
            subtitle="A transparent, iterative mobile engineering process that keeps you in complete control."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {appProcess.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-2xl p-6 relative flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-[#06B6D4]/40 transition-all duration-200"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#06B6D4]/40 block mb-3 font-mono">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#F9FAFB] mb-2">{step.title}</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DELIVERABLES CHECKLIST */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#111827] rounded-2xl p-8 sm:p-12 border border-white/10 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center text-[#06B6D4] shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#F9FAFB]">Your Project Deliverables</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">Everything provided upon final deployment and milestone completion.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F9FAFB]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="inquiry-form" className="relative px-4 sm:px-6 lg:px-8 py-12 bg-[#0B0F19] border-y border-white/10">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Start Your Mobile App Discovery"
            subtitle="Share your app idea, desired platforms, and target launch timeline. Our engineering leads will provide an architectural breakdown and quote within 24 hours."
          />

          <ContactForm initialService="Mobile App Development" />
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto">
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Mobile Development FAQs"
            subtitle="Straightforward answers about app store guidelines, cross-platform performance, and post-launch support."
          />

          <FAQAccordion items={appFaqs} />
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <CTASection
        eyebrow="Launch on iOS & Android"
        title="Ready to Build Your Mobile App?"
        subtitle="Schedule a free technical architecture consultation with our mobile engineering leads today."
        primaryCtaText="Submit App Inquiry"
        primaryCtaHref="#inquiry-form"
      />
    </div>
  );
}
