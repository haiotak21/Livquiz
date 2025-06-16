"use client"

import { useEffect, useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
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
  Play,
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
    subtitle: "Replace boring presentations with live quizzes your team will love",
    description:
      "Ditch the death-by-PowerPoint. Run live quizzes during training sessions, create skill assessments, and turn learning into a game that keeps everyone engaged while you track real results.",
    features: [
      "Live training sessions – Keep everyone awake and participating",
      "Skill assessments – Test knowledge before and after training",
      "Team competitions – Turn learning into friendly competition",
      "Instant feedback – See what's working and what isn't in real-time",
    ],
    image:
      "https://i.pinimg.com/736x/7c/ec/f4/7cecf437d35e8f4dedf34cd9752a370a.jpg",
    stats: { companies: "50+", employees: "200+", completion: "95%" },
    id: "corporate-training",
    headerTitle: "🏢 Corporate Training & Development",
    headerSubtitle:
      "Transform training with interactive quizzes that engage and measure",
    subCases: [],
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Turn passive learners into active participants with live quizzes",
    description:
      "Stop lecturing to blank stares. Run live quizzes that get every student involved, whether you're teaching in-person or online. See who gets it, who needs help, and keep everyone engaged from start to finish.",
    features: [
      "Everyone participates – No more silent classrooms or empty Zoom faces",
      "Instant feedback – Know immediately if students understand the material",
      "Track learning – See exactly where each student needs extra help",
      "Make it fun – Turn review sessions into exciting competitions",
    ],
    image:
      "https://i.pinimg.com/736x/1e/7a/9b/1e7a9bbb6365ed8bf76e33fbb30382ea.jpg",
    stats: { users: "10k+", quizzes: "1M+", satisfaction: "99%" },
    id: "education",
    headerTitle: "🎓 Education & Academic Learning",
    headerSubtitle: "Make learning stick with interactive quizzes students actually want to participate in",
    subCases: [],
  },
  {
    icon: Users,
    title: "Events & Conferences",
    subtitle: "Wake up your audience with interactive quizzes that get everyone involved",
    description:
      "Stop presenting to a room of people staring at their phones. Run live quizzes and polls that get every attendee participating, whether they're in the front row or joining virtually.",
    features: [
      "Break the ice – Get people talking and engaged from the start",
      "Keep attention – No more nodding off during long presentations",
      "Instant feedback – See what your audience thinks in real-time",
      "Boost participation – Even shy attendees join in anonymously",
    ],
    image:
      "https://i.pinimg.com/736x/53/ad/26/53ad26540af77b9ae763c69f7e732f82.jpg",
    stats: { events: "200+", participants: "5k+", engagement: "92%" },
    id: "events-conferences",
    headerTitle: "🎪 Events, Conferences & Workshops",
    headerSubtitle: "Turn sleepy audiences into engaged participants with live quizzes and polls",
    subCases: [],
  },
  {
    icon: Briefcase,
    title: "Recruitment",
    subtitle: "Find the right people faster with quizzes that test actual job skills",
    description: "Skip the resume guesswork and lengthy interviews that tell you nothing about real abilities. Create custom quizzes that test the exact skills you need, so you know who can actually do the work before you hire them.",
    features: [
      "Test real skills – See who can actually code, write, or solve problems",
      "Save interview time – Screen out unqualified candidates early",
      "Remove bias – Focus on ability, not impressive-sounding resumes",
      "Compare fairly – Give every candidate the same objective test",
    ],
    image:
      "https://i.pinimg.com/736x/e9/a2/3f/e9a23fa3c1bb10f468d18e3e666c7a2f.jpg",
    stats: { hires: "100+", companies: "20+", accuracy: "89%" },
    id: "recruitment",
    headerTitle: "💼 Recruitment & Hiring",
    headerSubtitle: "Stop guessing who can do the job – use skill quizzes to hire with confidence",
    subCases: [],
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
              LivQuiz Drives Results Across Every Industry
              Whether you're teaching students, training employees, or leading teams, LivQuiz makes learning interactive and engaging while delivering real, measurable outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-gray-600">Active Users</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Play className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-gray-600">Quizzes and Flashcards</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Countries</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
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
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                      {useCase.headerTitle}
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                      {useCase.headerSubtitle}
                    </p>
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col text-left"
                      >
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                          <subCase.icon className="w-6 h-6 text-purple-600" />
                        </div>
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
    </div>
  )
}
