import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PORTAL_LOGIN = "https://portal.shrotihost.in/index.php?rp=/login";

/** Permanent redirects preserving live-site URL equity (verified sitemap 2026-11-12). */
const EXACT_301_REDIRECTS: Record<string, string> = {
  "/terms-and-conditions": "/terms",
  "/terms-of-service": "/terms",
  "/privacy-policy": "/privacy",
  "/refund-policy": "/refund",
  "/cancellation-policy": "/refund",
  "/vps-hosting": "/vps",
  "/domain-registration": "/domains",
  "/domain": "/domains",
  "/whmcs": "/whmcs-modules",
  "/legal/terms": "/terms",
  "/legal/privacy": "/privacy",
  "/legal/refund-policy": "/refund",
  "/legal/aup": "/acceptable-use-policy",
  "/acceptable-use": "/acceptable-use-policy",
  "/whmcs-whatsapp-notification-module": "/whmcs-modules#washroti",
  "/whmcs-gateway-fees-allocator": "/whmcs-modules#smart-gateway-fees",
  "/blog/when-to-upgrade-to-vps": "/blog/when-should-you-upgrade",
  "/blog/com-vs-in-domain": "/blog/in-or-com-choosing-a-domain-in-india",
  "/blog/choosing-a-domain-name-india": "/blog/in-or-com-choosing-a-domain-in-india",
  "/blog/speed-up-wordpress-website": "/blog/10-ways-to-speed-up-wordpress",
  "/blog/website-development-cost-in-india": "/blog/website-development-cost",
};

const BLOG_ARCHIVE_REDIRECTS = new Set([
  "/blog/is-unlimited-hosting-really-unlimited",
  "/blog/custom-website-vs-website-builder",
  "/blog/how-to-build-an-mvp",
  "/blog/how-to-choose-web-hosting",
  "/blog/how-to-point-domain-to-hosting",
  "/blog/mobile-app-vs-web-app",
  "/blog/website-development-checklist",
  "/blog/website-hosting-cost-in-india",
  "/blog/what-is-a-vps",
  "/blog/how-to-host-a-website-in-india",
  "/blog/what-is-nvme-hosting",
  "/blog/start-a-hosting-business-in-india",
  "/blog/category/guides",
  "/blog/category/development",
  "/blog/category/domains",
  "/blog/category/vps",
  "/blog/category/business",
  "/blog/category/performance",
  "/blog/category/wordpress",
]);

function redirectTo(request: NextRequest, destination: string, status: 301 | 302 = 301) {
  const [path, hash] = destination.split("#");
  const url = new URL(path, request.url);
  if (hash) {
    url.hash = hash;
  }
  return NextResponse.redirect(url, status);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/login") {
    return NextResponse.redirect(PORTAL_LOGIN, 302);
  }

  const exactDestination = EXACT_301_REDIRECTS[pathname];
  if (exactDestination) {
    return redirectTo(request, exactDestination, 301);
  }

  if (BLOG_ARCHIVE_REDIRECTS.has(pathname)) {
    return redirectTo(request, "/blog", 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/terms-and-conditions",
    "/terms-of-service",
    "/privacy-policy",
    "/refund-policy",
    "/cancellation-policy",
    "/vps-hosting",
    "/domain-registration",
    "/domain",
    "/whmcs",
    "/legal/:path*",
    "/acceptable-use",
    "/whmcs-whatsapp-notification-module",
    "/whmcs-gateway-fees-allocator",
    "/blog/when-to-upgrade-to-vps",
    "/blog/com-vs-in-domain",
    "/blog/choosing-a-domain-name-india",
    "/blog/speed-up-wordpress-website",
    "/blog/website-development-cost-in-india",
    "/blog/is-unlimited-hosting-really-unlimited",
    "/blog/custom-website-vs-website-builder",
    "/blog/how-to-build-an-mvp",
    "/blog/how-to-choose-web-hosting",
    "/blog/how-to-point-domain-to-hosting",
    "/blog/mobile-app-vs-web-app",
    "/blog/website-development-checklist",
    "/blog/website-hosting-cost-in-india",
    "/blog/what-is-a-vps",
    "/blog/how-to-host-a-website-in-india",
    "/blog/what-is-nvme-hosting",
    "/blog/start-a-hosting-business-in-india",
    "/blog/category/:path*",
  ],
};
