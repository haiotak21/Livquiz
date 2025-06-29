"use client"

import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)

// Optional: Include handlePageLoadScroll if part of this file
export const handlePageLoadScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}