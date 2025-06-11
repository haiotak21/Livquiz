"use client"

import { useEffect, useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { handlePageLoadScroll } from "@/utils/navigation"
import Link from "next/link"
import {
  Check,
  X,
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  BookOpen,
  Monitor,
  Lightbulb,
  Share2,
  TrendingUp,
  Presentation,
  Target,
  Smartphone,
  Activity,
  GraduationCap,
  Building2,
  Globe,
  Link as LinkIcon,
  FileText,
  Settings,
  Palette,
  HeadphonesIcon,
  Award,
  Bot,

} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Easy Quiz Creation",
    description: "Create professional quizzes in minutes using our intuitive drag-and-drop builder.",
    benefits: ["Multiple question types", "Custom themes", "Media integration", "Real-time preview"],
  },
  {
    icon: Users,
    title: "Live Interactive Sessions",
    description: "Host real-time quiz events with dynamic engagement features.",
    benefits: ["Unlimited participants", "Live leaderboards", "Real-time responses", "Audience engagement"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain detailed insights to track performance and learning outcomes.",
    benefits: ["Performance tracking", "Detailed reports", "Progress monitoring", "Export reports"],
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and infrastructure for peace of mind.",
    benefits: [
      "Data encryption",
      "GDPR compliant",
      "Secure cloud hosting",
      "Regular automated backups",
      "99.9% uptime guarantee",
    ],
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Stay in control with precise timing and scheduling options.",
    benefits: ["Custom timers", "Scheduled quizzes", "Auto-submission", "Time tracking"],
  },
  {
    icon: BookOpen,
    title: "Learning Management",
    description: "Seamlessly manage learners, track progress, and issue certifications.",
    benefits: ["Course creation tools", "Student management", "Grade tracking", "Certification"],
  },
]

// Enterprise Solutions
const enterpriseSolutions = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security features including SSO, SAML, LDAP integration, and comprehensive audit trails.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description:
      "Complete white-label solutions with your branding, custom domains, and personalized user experiences.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Dedicated account managers, 24/7 support, training programs, and SLA guarantees.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
]

// Exam Builder Features
const examFeatures = [
  {
    number: "01",
    title: "Exam Protection",
    description:
      "Protect your exam with passwords, access codes, or email invitations. Set expiration dates and limits for exam access.",
    color: "bg-yellow-400",
    shape: "rounded-full",
    textColor: "text-gray-900",
  },
  {
    number: "02",
    title: "Exam Builder",
    description:
      "Create an exam with multiple question types like multiple choice, true/false, and more. Customize scoring and feedback settings.",
    color: "bg-purple-400",
    shape: "rounded-2xl",
    textColor: "text-gray-900",
  },
  {
    number: "03",
    title: "Eliminate Cheating",
    description: "Stop students from cheating to ensure that the results are reliable.",
    color: "bg-pink-400",
    shape: "rounded-full",
    textColor: "text-gray-900",
  },
  {
    number: "04",
    title: "Send and Arrange Your Exams",
    description: "Share your exam online with registered users or set it for a specific date and time.",
    color: "bg-green-400",
    shape: "rounded-2xl",
    textColor: "text-gray-900",
  },
  {
    number: "05",
    title: "All Results at Your Fingertips",
    description:
      "Exam results are displayed in real-time, with in-depth details such as exam duration and average score.",
    color: "bg-blue-400",
    shape: "rounded-full",
    textColor: "text-gray-900",
  },
]

const liveQuizFeatures = [
  {
    icon: Presentation,
    title: "Interactive Presentations",
    description: "Incorporate quizzes directly into your presentations to boost engagement and knowledge retention.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description:
      "Track participant responses and performance in real-time to adjust your teaching or presentation on the fly.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Target,
    title: "Customizable Feedback",
    description:
      "Provide instant feedback and explanations to help participants understand the correct answers and improve their knowledge.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]

export default function ProductsPage() {
  const [activeSection, setActiveSection] = useState("platform-editions")

  useEffect(() => {
    handlePageLoadScroll()

    const handleScroll = () => {
      const sections = ["platform-editions", "amazing-tools", "live-quizzes", "exam-builder", "enterprise", "ecosystem"]

      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  LivQuiz – The Powerful Online Quiz Maker.
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your teaching, training, or team development with interactive quizzes built to captivate and
                  educate.
                </p>
                <button
                  onClick={() => window.location.href = "https://livquiz.com/auth/sign-up"}
                  className="block mx-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  Sign Up - It's free
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gray-100 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300">
                  <Image
                    src="https://images.unsplash.com/photo-1596061343518-bdcae243ceca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww"
                    alt="LivQuiz Product Interface"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Product Interface Preview
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-3 overflow-x-auto max-lg:hidden">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {[
                { id: "platform-editions", name: "Platform Editions", icon: GraduationCap },
                { id: "amazing-tools", name: "Amazing Tools", icon: Zap },
                { id: "live-quizzes", name: "Live Quizzes", icon: Users },
                { id: "exam-builder", name: "Exam Builder", icon: FileText },
                { id: "enterprise", name: "Enterprise", icon: Shield },
                { id: "ecosystem", name: "Ecosystem", icon: Globe },
              ].map((category) => (
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
        </div>

        {/* Platform Editions Section */}
        <section id="platform-editions" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Platform Editions</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized versions of LivQuiz designed for specific use cases and environments
              </p>
            </motion.div>

            {/* Education Edition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">LivQuiz for Education</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform classrooms with interactive quizzes that make learning engaging and fun. Perfect for homework, assessments, and review sessions.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Education Edition Card (Image) */}
                <div className="lg:col-span-1">
                  <Image
                    src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXIlMjBjYXJ8ZW58MHx8MHx8fDA%3D"
                    alt="Education Edition"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>

                {/* Feature Cards Grid */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Classroom Management</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Progress Tracking</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Flashcards & Study Sets</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Live Exam Mode</h4>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Edition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">LivQuiz for Business</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Enhance employee training programs with interactive content that improves retention and engagement across your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Business Edition Card (Image) */}
                <div className="lg:col-span-1">
                  <Image
                    src="https://images.unsplash.com/photo-1531920327645-347e96a7f31e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww"
                    alt="Business Edition"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>

                {/* Feature Cards Grid */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Skills Assessment</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Compliance Training</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Team Building</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Performance Analytics</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Amazing Tools Section */}
        <section id="amazing-tools" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Amazing Tools to Build Expert Quizzes
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover powerful features designed to make quiz creation effortless and effective.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col text-left"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-3 mb-6 text-left">
                    {feature.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Builder Section */}
        <section id="exam-builder" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            {/* Yellow Pill Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg mb-8">
                Exam Builder
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Ultimate Solution For Creating And Delivering <span className="font-black">Professional Exams</span>{" "}
                Online
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {examFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-full mb-6 flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${feature.textColor}`}>{feature.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className={`${feature.textColor} text-lg leading-relaxed mb-6 text-left`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Quizzes Section */}
        <section id="live-quizzes" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Live Quizzes</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Engage your audience with real-time interactive quizzes that bring energy and excitement to any event or
                classroom.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Real-Time Interactive Experience</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Create memorable experiences with live quizzes that keep participants engaged and excited. Perfect for
                  classrooms, conferences, team building, and training sessions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Unlimited participants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Real-time leaderboards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instant feedback and scoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Multi-device compatibility</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww"
                    alt="Live Quizzes Interface"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveQuizFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <section id="enterprise" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Enterprise Solutions</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Scalable, secure, and customizable solutions designed for large organizations with advanced
                requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-white text-[#6052CC] hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-gray-200"
                onClick={() => window.location.href = "/contact"}
              >
                Request Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Product Ecosystem Section */}
        <section id="ecosystem" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Our Product Ecosystem</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive suite of tools and integrations that work seamlessly together to enhance your learning
                and assessment experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile Apps</h3>
                <p className="text-gray-600 text-sm">Native iOS and Android applications</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certifications</h3>
                <p className="text-gray-600 text-sm">Digital badges and certificate generation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Learning Tools</h3>
                <p className="text-gray-600 text-sm">Smart Quiz generation and Flashcards, personalized feedback, and real-time performance insights.

</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#7c3aed]">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Quizzes?
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of educators, trainers, and organizations who trust LivQuiz to deliver engaging learning
                experiences.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}