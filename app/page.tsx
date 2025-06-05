"use client"

import { useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import UseCasesSection from "@/components/home/use-cases-section"
import HowItWorksSection from "@/components/home/how-it-works-section"
import DemoSection from "@/components/home/demo-section"
import CTASection from "@/components/home/cta-section"
import { handlePageLoadScroll } from "@/utils/navigation"

export default function Home() {
  useEffect(() => {
    handlePageLoadScroll()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <DemoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
