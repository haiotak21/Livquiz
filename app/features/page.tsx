"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { handlePageLoadScroll } from "@/utils/navigation"
import {
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  Bot,
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
  Target,
  BotMessageSquare,
} from "lucide-react"
import Link from "next/link"

const heroFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build quizzes in minutes",
  },
  {
    icon: Users,
    title: "Unlimited Players",
    description: "No limit on participants",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live results & reports",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Always secure & available",
  },
]

const featureCategories = [
  { id: "creation", name: "Quiz Creation", icon: Edit3 },
  { id: "instructor", name: "Instructor Control", icon: UserCheck },
  { id: "multiplayer", name: "Live Multiplayer", icon: Gamepad2 },
  { id: "analytics", name: "Analytics", icon: BarChart3 },
  { id: "ai feature", name: "Ai", icon: Bot },
  { id: "security", name: "Security", icon: Shield },
  
]

const creationFeatures = [
  {
    icon: Edit3,
    title: "Different Question Types",
    id:"quizmaker",
    description: "Choose from multiple choice, true/false, fill-in-the-blank, and more to match your teaching style.",
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
    title: "Add Images & Videos",
    description: "Upload images, videos, audio, and PDFs to make your quizzes more engaging.",
    features: [
      "Image uploads",
      "Audio uploads",
      "PDF uploads",
      "Video uploads",
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: FolderOpen,
    title: "Stay Organized",
    description: "Save time by organizing, copying, and reusing your quizzes with smart management tools.",
    features: [
      "Clone and duplicate quizzes/flashcards/study sets",
      "Share quizzes with friends",
      "Bulk editing capabilities",
      "Tags and categorization",
    ],
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Target,
    title: "Flashcards & Study Tools",
    description: "Turn your quizzes into flashcards and study materials for individual or group practice.",
    features: [
      "Create standalone flashcards and study sets",
      "Organize by Tag, subject, or difficulty",
      "Enable self-study and group practice modes",
    ],
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
]

const instructorFeatures = [
  {
    icon: Play,
    id:"quizmaker",
    title: "Control the Session",
    description: "Start, pause, skip questions, and guide your quiz at your own pace.",
    features: [
      "Manual question reveal control",
      "Start, pause, and end sessions",
      "Skip questions when needed",
      "Real-time session monitoring",
    ],
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Users,
    title: "Manage Students",
    description: "Remove disruptive students, monitor progress, and keep your classroom focused.",
    features: [
      "Remove disruptive participants",
      "Mute or restrict players",
      "Monitor individual progress",
      "View submission status",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Timer,
    title: "Set Time Limits",
    description: "Choose how long students have for each question and the overall session.",
    features: [
      "Per-question time limits",
      "Overall session timers",
      "Extended time for special needs",
      "Countdown displays",
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
    title: "Simple Access Options",
    description:
      "Students can join your quiz in seconds using whichever method works best for them.",
    features: [
      "Scan QR codes to join instantly",
      "Enter simple room codes",
      "Click shared links",
      "Play without creating accounts",
    ],
    color: "bg-blue-100",
    visual: {
      icon: QrCode,
      title: "Scan to Join",
      subtitle: "Students scan a QR code and they're in - no downloads or accounts needed",
      bgColor: "bg-blue-600",
    },
  },
]

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description:
      "See how each student is performing and where they need extra help.",
    features: [
      "Track individual students",
      "See response times and scores",
      "Monitor progress over time",
    ],
    color: "bg-purple-100",
    visual: {
      icon: TrendingUp,
      title: "Smart Insights",
      subtitle: "Get clear recommendations on how to improve your teaching based on quiz results.",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Trophy,
    title: "Live Leaderboards",
    description: "Students see their rankings update in real-time, creating excitement and healthy competition.",
    features: [
      "Real-time ranking updates",
      "Multiple ranking criteria",
    ],
    color: "bg-yellow-100",
    visual: {
      icon: Trophy,
      title: "Leaderboards & Competition",
      subtitle: "Keep students motivated with fun leaderboards and friendly competition.",
      bgColor: "bg-yellow-600",
    },
  },
]

const aifeature = [
  {
    icon: Bot,
    title: "Auto-Generate Quizzes",
    description:
      "Upload documents or enter topics and get instant quizzes with smart questions and explanations.",
    features: [
      "AI Quiz Generator: Instantly generate quizzes from text, documents, or topics using AI.",
      "Smart Question Suggestions: Get AI-driven suggestions while building quizzes to save time and improve quality.",
      "Answer Explanation Generator: Auto-generate clear, simple explanations for each question to support deeper understanding.",
    ],
    color: "bg-green-100",
    visual: {
      icon: Bot,
      title: "Auto-Generate Quizzes",
      subtitle: "Create quizzes from any topic or document in seconds.",
      bgColor: "bg-green-600",
    },
  },
  {
    icon: Bot,
    title: "Auto-Generate Flashcards",
    description: "Turn your notes into flashcards automatically and get smart study reminders.",
    features: [
      "Instant Flashcard Creation: Automatically generate flashcards from notes, documents, or any text input using AI.",
      "Key Concept Detection: Let AI identify and extract essential terms, definitions, and ideas for you.",
      "AI-Powered Review Scheduler: Stay on track with intelligent reminders and review timing based on proven memory retention techniques.",
    ],
    color: "bg-red-100",
    visual: {
      icon: Bot,
      title: "Turn any text into flashcards instantly.",
      subtitle: "Generate flashcard automatically using topics or documents.",
      bgColor: "bg-red-600",
    },
  },

]

const securityFeatures = [
  {
    icon: GraduationCap,
    title: "Professional Exam Mode",
    description:
      "Run formal assessments with timed sessions, randomized questions, and secure reporting.",
    features: [
      "Timed exams",
      "Mixed-up questions",
      "Secure submissions",
      "Official reports",
    ],
    color: "bg-purple-100",
    visual: {
      icon: GraduationCap,
      title: "Certification Ready",
      subtitle: "Professional-grade security for official testing and certifications",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Lock,
    title: "Stop Cheating",
    description:
      "Smart security features that catch suspicious behavior and keep exams fair.",
    features: [
      "One question at a time",
      "Navigation controls",
      "Activity monitoring",
      "Suspicious behavior alerts",
    ],
    color: "bg-red-100",
    visual: {
      icon: Lock,
      title: "Fair Testing",
      subtitle: "Advanced security without slowing things down",
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
                initial={{ opacity: 0, x: -30 }}
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
                      <div className="pt-8 p-4 h-full relative">
                        <Image
                          src="https://i.pinimg.com/736x/ae/0e/71/ae0e715f679c334b939ac44edd3435fc.jpg"
                          alt="Quiz Interface Image"
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-[2.5rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 flex flex-col items-center"
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Build Engaging <span className="text-yellow-800">Learning Content</span> in Minutes.
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Create quizzes and interactive content that keeps people engaged and learning.
                </p>
                <Link href="https://livquiz.com/auth/sign-up" className="block mx-auto">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  >
                    <span>Sign Up - It's free</span>
                  </Button>
                </Link>
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
          <div className="container max-w-7xl mx-auto px-4 lg:px-6 max-lg:hidden">
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
                <div className="hidden lg:flex w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Edit3 className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Build & Organize Your Quizzes
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Build engaging quizzes and keep all your content organized.
              </p>
            </motion.div>

            {/* Fixed equal height cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {creationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${feature.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                >
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2 mt-auto">
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
                <div className="hidden lg:flex w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Instructor Dashboard
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Control your quiz sessions with easy-to-use tools that help you manage students and keep everyone engaged.
              </p>
            </motion.div>

            {/* Fixed equal height cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructorFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${feature.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                >
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{feature.description}</p>
                  <ul className="space-y-2 mt-auto">
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
                <div className="hidden lg:flex w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
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
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
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

        {/* Track Student Progress */}
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
                <div className="hidden lg:flex w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Track Student Progress
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Get detailed reports on student performance to see what's working and what needs improvement.
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
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
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
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

        {/*Ai feature */}
        <section id="ai feature" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="hidden lg:flex w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <BotMessageSquare className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Let AI Help Create Your Content
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Save time with AI that automatically creates quizzes and flashcards from your materials, so you can focus on teaching.
              </p>
            </motion.div>

            <div className="space-y-16">
              {aifeature.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
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
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
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
                <div className="hidden lg:flex w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">Secure Testing & Anti-Cheating</h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Run secure exams and certifications with built-in anti-cheating features that keep assessments fair and reliable.
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
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
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
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
              Ready to Get Started?
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              See why educators love using our quiz tools to make learning fun and effective.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
