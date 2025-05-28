"use client"
import { motion } from "framer-motion"
import { Users, Play, BarChart3, Shield, Clock, BookOpen } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Live Multiplayer",
    description: "Real-time quiz sessions with friends, classmates, or colleagues",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Play,
    title: "Instructor Control",
    description: "Teachers can moderate sessions, reveal questions, and manage timers",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance, accuracy, speed, and progress insights",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    title: "Anti-Cheating",
    description: "Secure delivery with controlled question flow and monitoring",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Clock,
    title: "Resumable Progress",
    description: "Continue where you left off, even if disconnected",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: BookOpen,
    title: "All-in-One Suite",
    description: "Quizzes, flashcards, exams, and certifications in one platform",
    color: "bg-indigo-100 text-indigo-600",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets LivQuiz Apart?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the features that make LivQuiz the ultimate platform for interactive learning and assessment
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
