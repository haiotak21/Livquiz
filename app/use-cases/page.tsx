"use client"

import { useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingHelpButton from "@/components/ui/floating-help-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, Building2, Users, Briefcase, Target, Award } from "lucide-react"
import { handlePageLoadScroll } from "@/utils/navigation"

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
    image: "https://images.unsplash.com/photo-1622481178814-529856e39ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    stats: { companies: "1K+", employees: "100K+", completion: "95%" },
    id: "corporate-training",
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
    image: "https://images.unsplash.com/photo-1600510424051-30d592a75353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    stats: { users: "50K+", quizzes: "500K+", satisfaction: "98%" },
    id: "education",
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
    image: "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    stats: { events: "5K+", participants: "2M+", engagement: "92%" },
    id: "events-conferences",
  },
  {
    icon: Briefcase,
    title: "Recruitment",
    subtitle: "Simplify Candidate Assessment with Customized Quizzes",
    description:
      "Make hiring smarter and faster by using skill-based quizzes to evaluate candidates objectively.",
    features: [
      "Build tailored skill and technical assessments",
      "Gather performance data to support hiring decisions",
      "Prepare candidates with practice quizzes",
    ],
    image: "https://images.unsplash.com/photo-1549458395-e14f2e6d39c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    stats: { hires: "25K+", companies: "800+", accuracy: "89%" },
    id: "recruitment",
  },
]

export default function UseCasesPage() {
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
                From classrooms to boardrooms, LivQuiz helps educators, trainers, and leaders deliver impactful learning experiences that inspire engagement and deliver measurable results.
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

        {/* Use Cases */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="space-y-24">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  id={useCase.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
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
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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

                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
                      Learn More
                    </Button>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={`${useCase.title} use case`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
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
                Ready to transform your industry?
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of organizations who rely on LivQuiz to create engaging, interactive learning and assessment experiences that drive real results.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                Start Your Free Trial
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
