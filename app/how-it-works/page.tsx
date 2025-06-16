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
      "Build quizzes fast with our drag-and-drop builder. Choose from multiple question types, add images and videos, then customize your theme. No technical skills needed.",
    image: "https://i.pinimg.com/736x/24/3d/66/243d664a6b9a07fc696f628fcdbfb59b.jpg",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    number: "02",
    title: "Share & Engage",
    description:
      "Get everyone participating instantly. Share your quiz link or run it live in front of your audience. Works on any device, anywhere.",
    image: "https://i.pinimg.com/736x/4f/92/49/4f9249311efc63c4a1a1a3fb78f4acb7.jpg",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    number: "03",
    title: "Track & Analyze",
    description:
      "See what's working with real-time results. Get instant feedback and detailed reports that show you exactly how people performed and what they learned.",
    image: "https://i.pinimg.com/736x/2c/9f/43/2c9f4398c7e7b7c4e5f5f026a30028f1.jpg",
    color: "bg-green-100",
    iconColor: "text-green-600",
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
            Create engaging quizzes in minutes that get real participation and measurable results
            </p>
          </motion.div>
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
              Create engaging quizzes in minutes, not hours
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
  {/*    <section className="py-16 lg:py-24 bg-white">
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

      */}

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
