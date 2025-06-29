import { NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"
import { routing } from "./lib/routing"

const intlMiddleware = createMiddleware(routing)

export default function middleware(request) {
  // Force / to /en
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url))
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}