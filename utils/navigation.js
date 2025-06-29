"use client"

import { useRouter } from "next/navigation"

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80 // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

// Custom hook for navigation
export const useNavigation = () => {
  const router = useRouter()
  
  const navigateToSection = (href) => {
    if (href.includes("#")) {
      const [path, sectionId] = href.split("#")

      // If we're on the same page, just scroll
      if (!path || window.location.pathname === path) {
        setTimeout(() => scrollToSection(sectionId), 100)
        return
      }

      // Navigate to a different page and store the section to scroll to
      sessionStorage.setItem("scrollToSection", sectionId)
      router.push(path)
    } else {
      router.push(href)
    }
  }

  return { navigateToSection }
}

export const handlePageLoadScroll = () => {
  const sectionToScroll = sessionStorage.getItem("scrollToSection")
  if (sectionToScroll) {
    sessionStorage.removeItem("scrollToSection")
    setTimeout(() => scrollToSection(sectionToScroll), 500)
  }
}