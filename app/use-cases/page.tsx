"use client"

import { useEffect, useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingHelpButton from "@/components/ui/floating-help-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  GraduationCap,
  Building2,
  Users,
  Briefcase,
  Target,
  Award,
  Globe,
  FileText,
  School,
  Zap,
  Users2,
  Calendar,
  Star,
  Calculator,
} from "lucide-react"
import { handlePageLoadScroll } from "@/utils/navigation"
import Link from "next/link"

const categoryNavigation = [
  { id: "corporate-training", name: "Corporate Training", icon: Building2 },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "events-conferences", name: "Events & Workshops", icon: Calendar },
  { id: "recruitment", name: "Recruitment", icon: Briefcase },
  { id: "success-stories", name: "Success Stories", icon: Award },
  { id: "roi-calculator", name: "ROI Calculator", icon: Target },
]

const successStories = [
  {
    quote:
      "LivQuiz transformed our classroom dynamics completely. Student engagement went through the roof, and we're seeing 40% better test scores. The real-time feedback helps me adjust my teaching instantly.",
    author: "Sarah Johnson",
    role: "High School Biology Teacher",
    avatar: "👩‍🏫",
    impact: "40% better test scores",
  },
  {
    quote:
      "We reduced our onboarding time by 50% while improving knowledge retention. New employees love the interactive approach, and managers can track progress in real-time. It's a game-changer.",
    author: "Michael Chen",
    role: "HR Director, TechCorp",
    avatar: "👨‍💼",
    impact: "50% faster onboarding",
  },
  {
    quote:
      "Our CME completion rates increased by 85%, and feedback from medical staff has been overwhelmingly positive. The mobile accessibility means they can learn during breaks or at home.",
    author: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer",
    avatar: "⚕️",
    impact: "85% higher completion",
  },
  {
    quote:
      "Conference attendance and engagement metrics improved dramatically. Attendees stay focused throughout sessions, and the interactive elements have become a highlight of our events.",
    author: "James Wilson",
    role: "Event Manager, Global Summit",
    avatar: "🎤",
    impact: "92% satisfaction rate",
  },
]

const useCases = [
  {
    icon: Building2,
    title: "Corporate Training",
    subtitle: "Boost Employee Development with Interactive Learning",
    description:
      "Empower your workforce with engaging training modules, skill assessments, and real-time quizzes designed to enhance retention and drive measurable outcomes.",
    features: [
      "Streamline employee onboarding and compliance training",
      "Evaluate skills and performance with actionable insights",
      "Foster teamwork through interactive multiplayer quizzes",
      "Performance evaluation",
    ],
    image:
      "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    stats: { companies: "1K+", employees: "100K+", completion: "95%" },
    id: "corporate-training",
    headerTitle: "🏢 Corporate Training & Development",
    headerSubtitle:
      "Boost employee engagement and measure training effectiveness with interactive corporate learning solutions",
    subCases: [
      {
        icon: Building2,
        title: "Skills Assessment & Certification",
        description: "Evaluate employee competencies and track professional development progress with secure testing.",
        features: [
          "Technical skill evaluations",
          "Compliance training verification",
          "Professional certification tracking",
          "Performance review integration",
          "Career development planning",
        ],
      },
      {
        icon: Zap,
        title: "Microlearning & Just-in-Time Training",
        description: "Deliver bite-sized learning moments and quick knowledge checks throughout the workday.",
        features: [
          "Daily knowledge boosters",
          "Quick procedure reminders",
          "Safety protocol refreshers",
          "Product knowledge updates",
          "Team building activities",
        ],
      },
      {
        icon: Users2,
        title: "Company-Wide Training Programs",
        description:
          "Deploy consistent training across multiple locations and departments with centralized management.",
        features: [
          "Multi-location training coordination",
          "Department-specific modules",
          "Progress tracking across teams",
          "Manager dashboard reporting",
          "Training ROI measurement",
        ],
      },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Revolutionize Learning for Students and Educators",
    description:
      "Transform classrooms and online courses with interactive quizzes that promote engagement and improve knowledge retention.",
    features: [
      "Track student progress and assign personalized homework",
      "Organize quizzes easily to fit your curriculum needs",
      "Boost classroom participation with live instructor-led quizzes",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    stats: { users: "50K+", quizzes: "500K+", satisfaction: "98%" },
    id: "education",
    headerTitle: "🎓 Education & Academic Learning",
    headerSubtitle: "Transform classrooms and online learning environments with interactive, engaging quiz experiences",
    subCases: [
      {
        icon: School,
        title: "Higher Education Lectures",
        description: "Enhance large lecture halls with interactive Q&A sessions and comprehension checks.",
        features: [
          "Mid-lecture comprehension checks",
          "Anonymous question submission",
          "Interactive polling during presentations",
          "Exam preparation sessions",
          "Group study coordination",
        ],
      },
      {
        icon: Globe,
        title: "Remote & Hybrid Learning",
        description: "Bridge the gap between in-person and virtual learning with engaging online interactions.",
        features: [
          "Virtual classroom activities",
          "Asynchronous homework assignments",
          "Breakout room competitions",
          "Home learning support",
          "Parent-teacher engagement tools",
        ],
      },
      {
        icon: FileText,
        title: "Assessment & Testing",
        description: "Create secure, fair, and comprehensive assessments with advanced anti-cheating features.",
        features: [
          "Timed examinations",
          "Standardized test preparation",
          "Formative assessments",
          "Placement testing",
          "Certification exams",
        ],
      },
    ],
  },
  {
    icon: Users,
    title: "Events & Conferences",
    subtitle: "Create Engaging and Interactive Event Experiences",
    description:
      "Capture audience attention with live quizzes and polls that bring energy and participation to your presentations.",
    features: [
      "Run real-time quizzes and polls for instant feedback",
      "Moderate sessions with live controls for smooth interaction",
    ],
    image:
      "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    stats: { events: "5K+", participants: "2M+", engagement: "92%" },
    id: "events-conferences",
    headerTitle: "🎪 Events, Conferences & Workshops",
    headerSubtitle: "Engage audiences and gather feedback at live events with interactive polling and Q&A sessions",
    subCases: [
      {
        icon: Calendar,
        title: "Workshop & Training Sessions",
        description: "Make workshops more interactive and measure learning outcomes effectively.",
        features: [
          "Interactive skill-building exercises",
          "Knowledge checks throughout sessions",
          "Group collaboration activities",
          "Real-time progress tracking",
          "Post-workshop assessments",
        ],
      },
      {
        icon: Target,
        title: "Competitions & Tournaments",
        description: "Host engaging knowledge competitions and tournaments with live leaderboards.",
        features: [
          "Academic competitions",
          "Team building challenges",
          "Industry knowledge contests",
          "Live championship brackets",
          "Award ceremony integration",
        ],
      },
      {
        icon: Globe,
        title: "Webinars & Virtual Events",
        description: "Enhance virtual events with interactive elements that keep remote audiences engaged.",
        features: [
          "Live polling during presentations",
          "Q&A session management",
          "Breakout room activities",
          "Virtual networking games",
          "Attendee feedback collection",
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Recruitment",
    subtitle: "Simplify Candidate Assessment with Customized Quizzes",
    description: "Make hiring smarter and faster by using skill-based quizzes to evaluate candidates objectively.",
    features: [
      "Build tailored skill and technical assessments",
      "Gather performance data to support hiring decisions",
      "Prepare candidates with practice quizzes",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1664304752635-3e0d8d8185e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXIlMjBjYXJ8ZW58MHx8MHx8fDA%3D",
    stats: { hires: "25K+", companies: "800+", accuracy: "89%" },
    id: "recruitment",
    headerTitle: "💼 Recruitment & Hiring",
    headerSubtitle: "Make hiring smarter and faster with skill-based quizzes to evaluate candidates objectively",
    subCases: [
      {
        icon: Target,
        title: "Technical Skills Assessment",
        description: "Evaluate technical competencies with coding challenges and problem-solving scenarios.",
        features: [
          "Programming skill tests",
          "Technical problem solving",
          "Code review assessments",
          "System design challenges",
          "Real-world scenario testing",
        ],
      },
      {
        icon: Users,
        title: "Behavioral Assessment",
        description: "Assess soft skills and cultural fit through interactive scenario-based questions.",
        features: [
          "Situational judgment tests",
          "Communication skills evaluation",
          "Leadership potential assessment",
          "Team collaboration scenarios",
          "Cultural fit evaluation",
        ],
      },
      {
        icon: FileText,
        title: "Pre-Employment Screening",
        description: "Streamline initial candidate screening with automated assessments and scoring.",
        features: [
          "Automated candidate filtering",
          "Skills-based ranking",
          "Time-efficient screening",
          "Bias reduction tools",
          "Comprehensive reporting",
        ],
      },
    ],
  },
]

export default function UseCasesPage() {
  const [activeSection, setActiveSection] = useState("corporate-training")
  const [roiInputs, setRoiInputs] = useState({
    employees: 100,
    sessions: 12,
    hourlyCost: 25,
    timeSaved: 1,
  })

  useEffect(() => {
    handlePageLoadScroll()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 140 // Account for sticky header
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
      const sections = [...useCases.map((useCase) => useCase.id), "success-stories", "roi-calculator"]
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

  const calculateROI = () => {
    const totalTimeSaved = roiInputs.employees * roiInputs.sessions * roiInputs.timeSaved
    const totalCostSavings = totalTimeSaved * roiInputs.hourlyCost
    const annualLivQuizCost = 2400
    const roi = ((totalCostSavings - annualLivQuizCost) / annualLivQuizCost) * 100
    const paybackMonths = Math.ceil(annualLivQuizCost / (totalCostSavings / 12))

    return {
      timeSaved: totalTimeSaved,
      costSavings: totalCostSavings,
      roi: Math.round(roi),
      paybackMonths: paybackMonths,
    }
  }

  const roiResults = calculateROI()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                🎯 LivQuiz Powers Success Across Industries
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From classrooms to boardrooms, LivQuiz helps educators, trainers, and leaders deliver impactful learning
                experiences that inspire engagement and deliver measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">2M+</div>
                <div className="text-gray-600">Active Users</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">10M+</div>
                <div className="text-gray-600">Quizzes Created</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Countries</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40 max-lg:hidden">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {categoryNavigation.map((category) => (
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

        {/* Use Cases */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="space-y-16">
              {useCases.map((useCase, index) => (
                <div key={index} id={useCase.id}>
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <div className="flex flex-col items-center bg-white rounded-3xl px-8 py-6 shadow-sm border border-gray-200 mb-8">
                      {useCase.headerTitle.includes(" ") && (
                        <div className="text-5xl mb-4">{useCase.headerTitle.split(" ")[0]}</div>
                      )}
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {useCase.headerTitle.includes(" ")
                          ? useCase.headerTitle.substring(useCase.headerTitle.indexOf(" ") + 1)
                          : useCase.headerTitle}
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{useCase.headerSubtitle}</p>
                    </div>
                  </motion.div>

                  {/* Main Use Case */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                      <div className="flex flex-col items-center text-center space-y-4 mb-6 md:flex-row md:text-left md:space-x-4 md:space-y-0">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <useCase.icon className="w-8 h-8 text-purple-600" />
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{useCase.title}</h2>
                          <p className="text-lg text-purple-600 font-semibold">{useCase.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{useCase.description}</p>

                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {useCase.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {Object.entries(useCase.stats).map(([key, value], statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                     
                    </div>

                    <div
                      className={`${index % 2 === 1 ? "lg:col-start-1" : ""}  flex items-center justify-center h-full`}
                    >
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                        <Image
                          src={useCase.image || "/placeholder.svg"}
                          alt={`${useCase.title} use case`}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Sub-case Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                  >
                    {useCase.subCases.map((subCase, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: subIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center p-6 rounded-lg bg-sky-50 border border-sky-100 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <subCase.icon className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{subCase.title}</h3>
                        <p className="text-gray-600 mb-4">{subCase.description}</p>
                        <ul className="text-left text-gray-500 space-y-2 list-disc list-inside mt-auto">
                          {subCase.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section
          id="success-stories"
          className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700"
        >
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex flex-col items-center mb-6">
                <Star className="w-8 h-8 text-yellow-300 mb-3" />
                <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">Success Stories</h2>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Real results from real organizations using LivQuiz to transform their learning experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-8 right-4 bg-green-400 text-green-900 px-1.5 py-0.5 rounded-full text-[10px] font-semibold">
                    {story.impact}
                  </div>

                  <div className="flex items-center space-x-4 mb-6 pt-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      {story.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{story.author}</h4>
                      <p className="text-white/80">{story.role}</p>
                    </div>
                  </div>

                  <blockquote className="text-lg italic text-white leading-relaxed">"{story.quote}"</blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section id="roi-calculator" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex flex-col items-center mb-6">
                <Calculator className="w-8 h-8 text-[#6052CC]" />
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center">Calculate Your ROI</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estimate the potential return on investment for implementing LivQuiz in your organization
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Input Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Organization Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Number of Employees/Students
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.employees}
                          onChange={(e) => setRoiInputs({ ...roiInputs, employees: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="1"
                          placeholder="100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Training Sessions per Year
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.sessions}
                          onChange={(e) => setRoiInputs({ ...roiInputs, sessions: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="1"
                          placeholder="12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Average Hourly Cost ($)
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.hourlyCost}
                          onChange={(e) => setRoiInputs({ ...roiInputs, hourlyCost: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="1"
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Time Saved per Session (hours)
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.timeSaved}
                          onChange={(e) => setRoiInputs({ ...roiInputs, timeSaved: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="0"
                          step="0.5"
                          placeholder="1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Estimated Savings</h3>
                    <div className="bg-gradient-to-br from-[#9333ea] to-purple-600 text-white rounded-2xl p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">{roiResults.timeSaved.toLocaleString()}</div>
                          <div className="text-sm opacity-90">Hours Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">${roiResults.costSavings.toLocaleString()}</div>
                          <div className="text-sm opacity-90">Cost Savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">{roiResults.roi}%</div>
                          <div className="text-sm opacity-90">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">{roiResults.paybackMonths}</div>
                          <div className="text-sm opacity-90">Month Payback</div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-lg font-semibold mb-2">Annual Savings</div>
                          <div className="text-4xl font-bold">${roiResults.costSavings.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                      <p className="text-green-800 text-sm">
                        💡 <strong>Pro Tip:</strong> These calculations are based on conservative estimates. Many
                        organizations see even greater returns through improved engagement and retention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                Ready to transform your industry?
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of organizations who rely on LivQuiz to create engaging, interactive learning and
                assessment experiences that drive real results.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingHelpButton />
    </div>
  )
}
