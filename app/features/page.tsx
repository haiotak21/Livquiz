"use client"

import { useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingHelpButton from "@/components/ui/floating-help-button"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { handlePageLoadScroll } from "@/utils/navigation"
import {
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  Smartphone,
  Monitor,
  Globe,
  Award,
  Lightbulb,
  Play,
  CheckCircle,
  Gamepad2,
} from "lucide-react"

const heroFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create quizzes in minutes, not hours",
  },
  {
    icon: Users,
    title: "Unlimited Players",
    description: "Host sessions with thousands of participants",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights and detailed reports",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime",
  },
]

const mainFeatures = [
  {
    icon: Lightbulb,
    title: "Intuitive Quiz Builder",
    description: "Create professional quizzes with our drag-and-drop interface. No technical skills required.",
    features: ["Multiple question types", "Rich media support", "Custom Tags", "Exams"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Play,
    title: "Live Interactive Sessions",
    description: "Engage your audience with real-time quizzes that keep everyone participating.",
    features: ["Live leaderboards", "Real-time responses", "Instant feedback"],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get detailed insights into performance and learning outcomes with comprehensive reports.",
    features: ["Performance tracking", "Progress monitoring", "Export reports", "Data export"],
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Anti-Cheating Technology",
    description: "Ensure fair assessments with our advanced security features and monitoring systems.",
    features: ["Randomized questions", "Time limits", "Browser lockdown", "Plagiarism detection"],
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Clock,
    title: "Smart Time Management",
    description: "Advanced timing controls and scheduling features for better quiz management.",
    features: ["Custom timers", "Auto-submission", "Scheduled quizzes", "Time tracking"],
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Multi-language support and accessibility features for inclusive learning experiences.",
    features: ["Multi-language", "Mobile responsive", "Tablet responsive"],
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
]

const platformFeatures = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Optimized for all devices with native mobile apps",
  },
  {
    icon: Monitor,
    title: "Web Based",
    description: "No downloads required, works in any browser",
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description: "Points, badges, and leaderboards to boost engagement",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Issue certificates and track achievements",
  },
]

export default function FeaturesPage() {
  useEffect(() => {
    handlePageLoadScroll()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Mobile mockup */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative mx-auto w-80 h-[600px] lg:w-96 lg:h-[700px]">
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center justify-between px-6 text-xs font-medium">
                        <span>10:12</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        </div>
                      </div>

                      {/* Quiz Interface */}
                      <div className="pt-8 p-4 h-full">
                        {/* Header */}
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Award className="w-8 h-8 text-yellow-800" />
                          </div>
                          <h3 className="font-bold text-lg">Science Quiz</h3>
                        </div>

                        {/* Question */}
                        <div className="bg-pink-100 rounded-2xl p-4 mb-6">
                          <p className="text-sm font-medium mb-4">1. How many planets are blue?</p>
                          <div className="space-y-2">
                            <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                              <span className="text-sm">Three</span>
                              <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                            </div>
                            <div className="bg-green-100 rounded-lg p-3 flex items-center justify-between border-2 border-green-500">
                              <span className="text-sm font-medium">One</span>
                              <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            </div>
                            <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                              <span className="text-sm">Two</span>
                              <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                            </div>
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="mb-6">
                          <div className="flex justify-between text-xs text-gray-600 mb-2">
                            <span>Question 1 of 5</span>
                            <span>68 points</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full w-1/5"></div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3">
                          Done
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Make Quality Learning Content <span className="text-yellow-800">Fast And Easy</span> For Business,
                  School, Or Personal Use.
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                  Create engaging quizzes, assessments, and interactive content that captivates your audience and drives
                  real learning outcomes.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  >
                    Sign Up - It's free
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Features */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {heroFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-yellow-800" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Powerful Features for Every Learning Need
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the comprehensive tools that make LivQuiz the ultimate platform for creating engaging
                educational experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${feature.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Built for Every Platform</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access LivQuiz anywhere, anytime, on any device. Our platform is designed for maximum compatibility and
                ease of use.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-[#6052CC] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-[#6052CC]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-purple-600">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">Trusted by Millions Worldwide</h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join the global community of educators, trainers, and organizations using LivQuiz.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "2M+", label: "Active Users" },
                { number: "10M+", label: "Quizzes Created" },
                { number: "150+", label: "Countries" },
                { number: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Learning Experience?
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Start creating engaging quizzes today. No Requirment, no setup fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-600"
                  >
                    Start Free Trial
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingHelpButton />
    </div>
  )
}
