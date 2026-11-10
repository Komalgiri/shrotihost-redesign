import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ShrotiHost | High-Performance NVMe Cloud Hosting & Custom Software",
  description:
    "Fast, reliable NVMe cloud hosting powered by LiteSpeed, cPanel, and Imunify360. Flat-rate renewals with zero price hikes. Custom web and app engineering by Shroti Enterprises.",
  keywords: [
    "ShrotiHost",
    "NVMe Shared Hosting",
    "LiteSpeed Hosting India",
    "WordPress Hosting",
    "Reseller Hosting",
    "Cloud VPS",
    "Same Renewal Price Hosting",
    "Custom Web Development India",
    "WHMCS Modules"
  ],
  authors: [{ name: "Shroti Enterprises" }],
  creator: "Shroti Enterprises",
  publisher: "ShrotiHost",
  metadataBase: new URL("https://shrotihost.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shrotihost.in",
    siteName: "ShrotiHost",
    title: "ShrotiHost | High-Performance NVMe Cloud Hosting",
    description:
      "LiteSpeed NVMe hosting starting from ₹49/month with flat renewal rates. 99.9% high uptime target, free migrations, and 24/7 human support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAFBFD] text-slate-800 antialiased flex flex-col justify-between selection:bg-blue-600/15 selection:text-blue-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
