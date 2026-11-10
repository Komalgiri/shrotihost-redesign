import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const destination = EXACT_301_REDIRECTS[pathname];

  if (destination) {
    // Explicitly return exact HTTP 301 Moved Permanently
    return NextResponse.redirect(new URL(destination, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/terms-and-conditions",
    "/terms-of-service",
    "/privacy-policy",
    "/refund-policy",
    "/cancellation-policy",
    "/vps-hosting",
    "/domain-registration",
    "/domain",
    "/whmcs",
  ],
};

