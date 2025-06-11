"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Users, BarChart3, Zap, Clock, Shield } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Create Your Quiz",
    description:
      "Use our intuitive drag-and-drop builder to create engaging quizzes with multiple question types, media, and custom themes.",
    features: ["Multiple question types", "Rich media support", "Study set", "Exams"],
    image: "https://i.pinimg.com/736x/88/59/95/88599567283a293d73dd39acdbf650b0.jpg",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    number: "02",
    title: "Share & Engage",
    description:
      "Share your quiz with participants through various methods and host live interactive sessions that keep everyone engaged.",
    features: ["Multiple sharing options", "Live sessions", "Real-time participation", "Mobile-friendly"],
    image: "https://i.pinimg.com/736x/0a/18/5f/0a185f66bac0cf3020df5186753119d7.jpg",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    number: "03",
    title: "Track & Analyze",
    description:
      "Monitor performance with detailed analytics and insights that help you understand learning patterns and improve outcomes.",
    features: ["Real-time analytics", "Performance tracking", "Detailed reports", "Export capabilities"],
    image: "https://i.pinimg.com/736x/f1/5f/1d/f15f1de1d6b7c90bfc7a1c6302c9d280.jpg",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
]

const features = [
  {
    icon: Zap,
    title: "Easy to create Quiz/Flashcard/study set/Exam",
    description: "Create and launch",
  },
  {
    icon: Users,
    title: "Multiplayer feature",
    description: "Host sessions with participants simultaneously",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights into participant performance and engagement",
  },
  {
    icon: Clock,
    title: "Avaliblity",
    description: "Your quizzes are accessible anytime, anywhere, on any device",
  },
  {
    icon: Play,
    title: "Interactive Experience",
    description: "Gamified learning with leaderboards, timers, and instant feedback",
  },
]

export default function HowItWorksPage() {
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
              How LivQuiz Works
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how simple it is to create, share, and analyze interactive quizzes that captivate your audience
              and drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Three Simple Steps to Success</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From creation to analysis, LivQuiz makes it easy to deliver engaging quiz experiences.
            </p>
          </motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                } lg:items-stretch`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center`}>
                      <span className={`text-2xl font-bold ${step.iconColor}`}>{step.number}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{step.title}</h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{step.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex flex-col h-full`}>
                  <div className="relative h-full">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={`${step.title} illustration`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">See LivQuiz in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Watch our quick demo to see how easy it is to create engaging quizzes that captivate your audience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-3"
                >
                  <Play className="w-6 h-6" />
                  <span>Watch Demo</span>
                </Button>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of educators and trainers who rely on LivQuiz to create engaging, interactive learning experiences.
            </p>
            <Link href="https://livquiz.com/auth/sign-up">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
              >
                Start Creating Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
)
}
