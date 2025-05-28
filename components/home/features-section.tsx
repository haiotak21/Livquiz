"use client"

import { motion } from "framer-motion"
import { Users, Play, BarChart3, Shield, Clock, BookOpen, Zap, Globe, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Live Multiplayer Quizzes",
    description:
      "Host real-time quizzes with unlimited participants. Perfect for classrooms, training sessions, and group challenges.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Play,
    title: "Instructor Control Panel",
    description: "Control flow, reveal questions one at a time, view live stats, manage players — all with full instructor/tutor access.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track individual and group stats, question performance, leaderboard insights, and quiz-level analytics.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Anti-Cheating Technology",
    description: "One-question-at-a-time reveal, countdowns, guest name obfuscation Guest<x>, and restricted creation permissions.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Clock,
    title: "Resumable Progress",
    description: "Auto-saves progress even when disconnected or exiting — for solo and assigned quizzes.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "All-in-One Learning Suite",
    description: "Supports quizzes, flashcards, exams, certifications — fully integrated, no need for third-party tools.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Real-time scoring and submission stats during live sessions, helping players learn immediately.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Fully responsive on mobile, tablet, and desktop; designed for accessibility and broad device compatibility.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Award,
    title: "Gamification & Rewards",
    description: "Leaderboards and competitive features are built-in. (Badges/XP systems can be marked as future if not live yet.)",
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
           Unlock the tools that make LivQuiz a complete solution for students, teachers, tutors, and professionals.
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
