"use client"

import { useEffect, useState } from "react"
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
  Play,
  CheckCircle,
  Gamepad2,
  Edit3,
  ImageIcon,
  FolderOpen,
  UserCheck,
  Timer,
  Activity,
  Smartphone,
  TrendingUp,
  Trophy,
  Lock,
  GraduationCap,
  QrCode,
  Monitor,
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

const featureCategories = [
  { id: "creation", name: "Quiz Creation", icon: Edit3 },
  { id: "instructor", name: "Instructor Control", icon: UserCheck },
  { id: "multiplayer", name: "Live Multiplayer", icon: Gamepad2 },
  { id: "analytics", name: "Analytics", icon: BarChart3 },
  { id: "security", name: "Security", icon: Shield },
]

const creationFeatures = [
  {
    icon: Edit3,
    title: "Multiple Question Types",
    description: "Create diverse, engaging quizzes with various question formats to suit any learning objective.",
    features: [
      "Multiple Choice Questions (MCQ)",
      "True/False Questions",
      "Fill in the Blank",
      "Short Answer Questions",
      "Image-based Questions",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: ImageIcon,
    title: "Rich Media Support",
    description: "Enhance your quizzes with multimedia content to create more engaging learning experiences.",
    features: [
      "Image uploads and embedding",
      "Mathematical formulas and equations",
      "Rich text formatting",
      "Visual content integration",
      "Custom styling options",
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: FolderOpen,
    title: "Organization & Reusability",
    description: "Efficiently organize and reuse your quiz content with powerful management tools.",
    features: [
      "Clone and duplicate quizzes",
      "Folder and collection organization",
      "Share quizzes with colleagues",
      "Template creation and reuse",
      "Bulk editing capabilities",
    ],
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
]

const instructorFeatures = [
  {
    icon: Play,
    title: "Live Quiz Moderation",
    description: "Complete control over quiz flow and pacing to match your teaching style and student needs.",
    features: [
      "Manual question reveal control",
      "Start, pause, and end sessions",
      "Skip questions when needed",
      "Adjust timing on the fly",
      "Real-time session monitoring",
    ],
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Users,
    title: "Player Management",
    description: "Maintain a positive learning environment with comprehensive participant management tools.",
    features: [
      "Remove disruptive participants",
      "Assign teams and groups",
      "Mute or restrict players",
      "Monitor individual progress",
      "View submission status",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Timer,
    title: "Flexible Timing Controls",
    description: "Customize timing to match your educational objectives and student capabilities.",
    features: [
      "Per-question time limits",
      "Overall session timers",
      "Extended time for special needs",
      "Countdown displays",
      "Time warnings and alerts",
    ],
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
]

const multiplayerFeatures = [
  {
    icon: Activity,
    title: "Real-Time Synchronization",
    description:
      "Experience seamless real-time quiz sessions where all participants see questions simultaneously, creating an engaging competitive environment that keeps everyone focused and motivated.",
    features: [
      "Synchronized question reveal across all devices",
      "Live countdown timers for added excitement",
      "Instant answer submission and feedback",
      "Real-time leaderboard updates",
    ],
    color: "bg-purple-100",
    visual: {
      icon: Zap,
      title: "Lightning-Fast Responses",
      subtitle: "Sub-second response times ensure everyone stays in sync",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Smartphone,
    title: "Flexible Access Methods",
    description:
      "Multiple ways for participants to join sessions, making it easy for anyone to participate regardless of their setup or preparation level.",
    features: [
      "QR code scanning for instant access",
      "Simple access codes for quick joining",
      "Direct link sharing options",
      "Guest participation without signup",
    ],
    color: "bg-blue-100",
    visual: {
      icon: QrCode,
      title: "Scan & Play",
      subtitle: "One scan, instant access to live quiz sessions",
      bgColor: "bg-blue-600",
    },
  },
]

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Comprehensive Performance Metrics",
    description:
      "Gain deep insights into learning patterns and quiz performance with detailed analytics that help improve educational outcomes.",
    features: [
      "Individual student performance tracking",
      "Group and class-wide statistics",
      "Question-level difficulty analysis",
      "Response time and accuracy metrics",
      "Progress over time visualization",
    ],
    color: "bg-purple-100",
    visual: {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      subtitle: "Transform quiz results into actionable learning insights",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Trophy,
    title: "Interactive Leaderboards",
    description: "Motivate students and create healthy competition with dynamic leaderboards and achievement tracking.",
    features: [
      "Real-time ranking updates",
      "Multiple ranking criteria",
      "Achievement badges and rewards",
      "Historical performance comparison",
      "Customizable display options",
    ],
    color: "bg-yellow-100",
    visual: {
      icon: Trophy,
      title: "Competitive Learning",
      subtitle: "Gamify education with engaging competitions",
      bgColor: "bg-yellow-600",
    },
  },
]

const securityFeatures = [
  {
    icon: GraduationCap,
    title: "Exam & Certification Mode",
    description:
      "Conduct secure, professional assessments with features designed for high-stakes testing and certification programs.",
    features: [
      "Controlled-flow exam delivery",
      "Timed assessment sessions",
      "Question randomization",
      "Secure answer submission",
      "Certification-ready reporting",
    ],
    color: "bg-purple-100",
    visual: {
      icon: GraduationCap,
      title: "Professional Testing",
      subtitle: "Certification-grade security and reliability",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Lock,
    title: "Anti-Cheating Measures",
    description:
      "Comprehensive security features that maintain assessment integrity while preserving a positive user experience.",
    features: [
      "One-question-at-a-time reveal",
      "Controlled navigation restrictions",
      "Session monitoring capabilities",
      "Identity verification features",
      "Suspicious activity detection",
    ],
    color: "bg-red-100",
    visual: {
      icon: Lock,
      title: "Secure Assessment",
      subtitle: "Maintain integrity without compromising usability",
      bgColor: "bg-red-600",
    },
  },
]

const platformFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Create and launch your first quiz in under 5 minutes",
  },
  {
    icon: Users,
    title: "Unlimited Participants",
    description: "Host sessions with thousands of participants simultaneously",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights into participant performance and engagement",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your quizzes are accessible anytime, anywhere, on any device",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with GDPR compliance and data protection",
  },
  {
    icon: Play,
    title: "Interactive Experience",
    description: "Gamified learning with leaderboards, timers, and instant feedback",
  },
]

export default function FeaturesPage() {
  const [activeSection, setActiveSection] = useState("creation")

  useEffect(() => {
    handlePageLoadScroll()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 160 // Account for sticky headers
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = featureCategories.map((cat) => cat.id)
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
                            <Trophy className="w-8 h-8 text-yellow-800" />
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

        {/* Feature Categories Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {featureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === category.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz Creation & Content Management */}
        <section id="creation" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Edit3 className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  Quiz Creation & Content Management
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Build engaging, professional quizzes with our intuitive creation tools and flexible content management
                system.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creationFeatures.map((feature, index) => (
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

        {/* Advanced Instructor Control */}
        <section id="instructor" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  Advanced Instructor Control
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Take complete control of your quiz sessions with powerful moderation and management tools designed for
                educators.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructorFeatures.map((feature, index) => (
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

        {/* Live Multiplayer Quiz Games */}
        <section id="multiplayer" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Gamepad2 className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  Live Multiplayer Quiz Games
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Transform learning into an exciting, competitive experience with real-time multiplayer quiz sessions.
              </p>
            </motion.div>

            <div className="space-y-16">
              {multiplayerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.visual.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{feature.visual.title}</h4>
                      <p className="text-white/90">{feature.visual.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Analytics & Insights */}
        <section id="analytics" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  Advanced Analytics & Insights
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Make data-driven decisions about learning and teaching with comprehensive analytics and performance
                tracking.
              </p>
            </motion.div>

            <div className="space-y-16">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.visual.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{feature.visual.title}</h4>
                      <p className="text-white/90">{feature.visual.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Exam Integrity */}
        <section id="security" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">Security & Exam Integrity</h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Maintain academic integrity and secure assessment delivery with comprehensive anti-cheating and security
                features.
              </p>
            </motion.div>

            <div className="space-y-16">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.visual.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{feature.visual.title}</h4>
                      <p className="text-white/90">{feature.visual.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Every Platform */}
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
              {[
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
                  icon: Trophy,
                  title: "Certifications",
                  description: "Issue certificates and track achievements",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-purple-600" />
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
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                Trusted by Millions Worldwide
              </h2>
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
                Start creating engaging quizzes today. No requirements, no setup fees.
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
