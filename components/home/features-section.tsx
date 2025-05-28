"use client"

import { motion } from "framer-motion"
import { Users, Play, BarChart3, Shield, Clock, BookOpen, Zap, Globe, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Live Multiplayer Quizzes",
    description:
      "Real-time quiz sessions with unlimited participants. Perfect for classrooms, events, and team building.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Play,
    title: "Instructor Control Panel",
    description: "Complete control over quiz flow, timing, and participant management with real-time moderation tools.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Detailed insights into performance, learning patterns, and progress tracking with exportable reports.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Anti-Cheating Technology",
    description: "Secure quiz delivery with randomized questions, time limits, and advanced monitoring systems.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Clock,
    title: "Resumable Progress",
    description: "Never lose progress with auto-save functionality and seamless session recovery capabilities.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "All-in-One Learning Suite",
    description: "Quizzes, flashcards, exams, certifications, and LMS integration in one comprehensive platform.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Real-time scoring and immediate feedback to enhance learning outcomes and engagement.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Multi-language support, mobile-responsive design, and accessibility features for inclusive learning.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Award,
    title: "Gamification & Rewards",
    description: "Leaderboards, badges, achievements, and point systems to motivate and engage learners.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50" id="features">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
              Interactive Learning
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive features that make LivQuiz the ultimate platform for creating engaging
            educational experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon || (() => null) // Fallback if icon is missing

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div
                  className={`${feature.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/50`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg">
              Explore All Features →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
