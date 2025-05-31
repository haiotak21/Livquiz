"use client"

import { useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingHelpButton from "@/components/ui/floating-help-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { handlePageLoadScroll } from "@/utils/navigation"
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
  Link,
  FileText,
  Settings,
  Palette,
  HeadphonesIcon,
  Award,
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

// Feature Comparison Data
const comparisonFeatures = [
  { name: "Quiz Participants", free: "50", pro: "Unlimited", team: "Unlimited", enterprise: "Unlimited" },
  { name: "Monthly Quizzes", free: "5", pro: "Unlimited", team: "Unlimited", enterprise: "Unlimited" },
  { name: "Question Types", free: "Basic", pro: "✓", team: "✓", enterprise: "✓" },
  { name: "Advanced Analytics", free: "✗", pro: "✓", team: "✓", enterprise: "✓" },
  { name: "Exam Mode", free: "✗", pro: "✓", team: "✓", enterprise: "✓" },
  { name: "Custom Branding", free: "✗", pro: "✓", team: "✓", enterprise: "✓" },
  { name: "Team Collaboration", free: "✗", pro: "✗", team: "✓", enterprise: "✓" },
  { name: "LMS Integration", free: "✗", pro: "✗", team: "✓", enterprise: "✓" },
  { name: "API Access", free: "✗", pro: "✗", team: "Limited", enterprise: "Full" },
  { name: "Priority Support", free: "✗", pro: "Email", team: "Phone & Chat", enterprise: "24/7 Dedicated" },
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

// LMS Features
const lmsFeatures = [
  {
    icon: Monitor,
    title: "Course Builder",
    description: "You can create a course in minutes with the intuitive course builder interface.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Lightbulb,
    title: "Quiz Maker",
    description: "You can create a quiz with various question types, such as multiple choice, true/false, and more.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Monitor,
    title: "Centralized Portal",
    description:
      "Access all your learning materials from any device, Web-based platform for seamless learning, Compatible with mobile, tablet, and desktop",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Share2,
    title: "Course Sharing",
    description: "You can share your course with anyone via a link, embed code, email, or social media.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Course Tracking",
    description: "You can monitor and analyse your course progress and results with reports and analytics.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
]

// Live Quizzes Features
const liveQuizFeatures = [
  {
    icon: Presentation,
    title: "Quiz Presenter",
    description: "Deliver your live quiz to your audience using an online device.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Activity,
    title: "Performance Tracking",
    description:
      "Players will remain engaged and excited during the game since they will receive rapid feedback and score modifications.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Smartphone,
    title: "Quiz Taker",
    description: "Join a live quiz using any online device, such as a smartphone, tablet, or laptop.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Quiz Tracker",
    description: "Monitor and analyze the results of your live quiz with reports and analytics.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Target,
    title: "Organized and Engaging",
    description: "You can host the live quiz either face-to-face or online.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]

// Exam Builder Features
const examFeatures = [
  {
    number: "01",
    title: "Exam Protection",
    description:
      "Protect your exam with passwords, access codes, or email invitations. Set expiration dates and limits for exam access.",
    color: "bg-yellow-200",
    shape: "rounded-full",
  },
  {
    number: "02",
    title: "Exam Builder",
    description:
      "Create an exam with multiple question types like multiple choice, true/false, and more. Customize scoring and feedback settings.",
    color: "bg-purple-200",
    shape: "rounded-2xl",
  },
  {
    number: "03",
    title: "Eliminate Cheating",
    description: "Stop students from cheating to ensure that the results are reliable.",
    color: "bg-pink-200",
    shape: "rounded-full",
  },
  {
    number: "04",
    title: "Send and Arrange Your Exams",
    description: "Share your exam online with registered users or set it for a specific date and time.",
    color: "bg-green-200",
    shape: "rounded-2xl",
  },
  {
    number: "05",
    title: "All Results at Your Fingertips",
    description:
      "Exam results are displayed in real-time, with in-depth details such as exam duration and average score.",
    color: "bg-blue-200",
    shape: "rounded-full",
  },
]

export default function ProductsPage() {
  useEffect(() => {
    handlePageLoadScroll()
  }, [])

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
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  Sign Up - It's free
                </Button>
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

        {/* Platform Editions Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Education Edition */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-36 h-36 bg-blue-500 rounded-2xl flex flex-col items-center justify-center text-white p-4">
                    <GraduationCap className="w-12 h-12 mb-2" />
                    <div className="text-center">
                      <div className="font-bold">LivQuiz</div>
                      <div className="text-xs">Optimized for K-12 and higher education</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">LivQuiz for Education</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Specially designed for educational institutions with features that support curriculum standards,
                      grade management, and student privacy compliance.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <Monitor className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Computer Sharing</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Parent Portal</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">FERPA Compliance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Grade Integration</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-semibold">
                  Learn More
                </Button>
              </motion.div>

              {/* Business Edition */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-36 h-36 bg-purple-500 rounded-2xl flex flex-col items-center justify-center text-white p-4">
                    <Building2 className="w-12 h-12 mb-2" />
                    <div className="text-center">
                      <div className="font-bold">LivQuiz</div>
                      <div className="text-xs">Optimized for K-12 and higher education</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">LivQuiz for Business</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tailored for corporate training, employee development, and professional certification programs
                      with advanced reporting and compliance features.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">HR Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <Award className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Certification Management</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full py-2 px-4">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Compliance Reporting</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-semibold">
                  Learn More
                </Button>
              </motion.div>
            </div>
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
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Feature Comparison</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Compare features across all our plans to find the perfect fit for your needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Plan Feature Comparison</h3>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Free</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Pro</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Team</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                        <td className="p-6 text-center">
                          {feature.free === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.free === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span
                              className={feature.free === "Basic" ? "text-orange-600 font-medium" : "text-gray-900"}
                            >
                              {feature.free}
                            </span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.pro === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.pro === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className={feature.pro === "Email" ? "text-green-600 font-medium" : "text-gray-900"}>
                              {feature.pro}
                            </span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.team === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.team === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span
                              className={
                                feature.team === "Limited"
                                  ? "text-orange-600 font-medium"
                                  : feature.team === "Phone & Chat"
                                    ? "text-green-600 font-medium"
                                    : "text-gray-900"
                              }
                            >
                              {feature.team}
                            </span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.enterprise === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.enterprise === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span
                              className={
                                feature.enterprise === "Full"
                                  ? "text-green-600 font-medium"
                                  : feature.enterprise === "24/7 Dedicated"
                                    ? "text-green-600 font-medium"
                                    : "text-gray-900"
                              }
                            >
                              {feature.enterprise}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LMS Section */}
        <section id="lms" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold mb-6">LMS</div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                How the LivQuiz LMS Platform Can Transform Your{" "}
                <span className="font-black">Learning and Training</span> Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lmsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Quizzes Section */}
        <section id="live-quizzes" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative mx-auto w-80 h-96">
                  <Image
                    src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXIlMjBjYXJ8ZW58MHx8MHx8fDA%3D"
                    alt="Live Quiz Mobile Interface"
                    width={900}
                    height={800}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold mb-6">
                  Live Quizzes, Real-Time Engagement
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-12">
                  Create and Deliver <span className="font-black">Interactive Quizzes</span> in Real-Time
                </h2>

                <div className="space-y-8">
                  {liveQuizFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div
                        className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Exam Builder Section */}
        <section id="exam-builder" className="py-16 lg:py-24 bg-orange-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold mb-6">
                Exam Builder
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
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
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative"
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 ${feature.color} ${feature.shape} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-2xl font-bold text-gray-700">{feature.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>

                  {/* Decorative shapes */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <div className={`w-8 h-8 ${feature.color} ${feature.shape}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">Enterprise Solutions</h2>
              <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
                Scalable, secure, and customizable solutions for large organizations and institutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-white/80 leading-relaxed">{solution.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Contact Sales Team
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-purple text-purple hover:bg-purple hover:text-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Request Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Ecosystem Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
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
                Comprehensive solutions for every learning environment and educational need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">LivQuiz Web Platform</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Full-featured web application with complete quiz creation, hosting, and analytics capabilities.
                    Perfect for classrooms, training sessions, and remote learning.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-6 py-2 font-medium"
                  >
                    Explore Web Platform
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Smartphone className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">LivQuiz Mobile Apps</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Native iOS and Android applications optimized for on-the-go learning and participation. Seamless
                    sync with web platform for cross-device continuity.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full px-6 py-2 font-medium"
                  >
                    Download Apps
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Link className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">LivQuiz API & Integrations</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Powerful APIs and integrations for LMS platforms, educational tools, and custom applications. Build
                    LivQuiz functionality into your existing workflows.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-full px-6 py-2 font-medium"
                  >
                    View API Docs
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Settings className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">LivQuiz Enterprise</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Scalable enterprise solution with advanced security, compliance features, custom branding, and
                    dedicated support for large organizations.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-6 py-2 font-medium"
                  >
                    Contact Sales
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Easy to Use Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Easy to use</h2>
                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                  Our intuitive interface makes it simple for anyone to create professional quizzes. No technical skills
                  required - just your creativity and content.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Drag-and-drop quiz builder</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Pre-built templates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">One-click publishing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instant sharing options</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gray-100 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300">
                  <Image
                    src="https://images.unsplash.com/photo-1636853394243-27ae67ff0f1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww"
                    alt="Easy to use interface"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    User Interface Demo
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-purple-600">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                Ready to create amazing quizzes?
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of educators and trainers using LivQuiz for interactive learning.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingHelpButton />
    </div>
  )
}
