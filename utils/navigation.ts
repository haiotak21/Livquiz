export const scrollToSection = (sectionId: string) => {
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

export const navigateToSection = (href: string) => {
  if (href.includes("#")) {
    const [path, sectionId] = href.split("#")

    // If we're on the same page, just scroll
    if (!path || window.location.pathname === path) {
      setTimeout(() => scrollToSection(sectionId), 100)
      return
    }

    // If we need to navigate to a different page, store the section to scroll to
    sessionStorage.setItem("scrollToSection", sectionId)
    window.location.href = path
  } else {
    window.location.href = href
  }
}

// Function to handle scroll on page load
export const handlePageLoadScroll = () => {
  const sectionToScroll = sessionStorage.getItem("scrollToSection")
  if (sectionToScroll) {
    sessionStorage.removeItem("scrollToSection")
    setTimeout(() => scrollToSection(sectionToScroll), 500)
  }
}
