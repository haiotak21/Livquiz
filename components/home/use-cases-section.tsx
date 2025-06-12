"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, GraduationCap, Users, Briefcase } from "lucide-react"

const useCases = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "For Students & Teachers",
    description:
      "Transform classrooms with interactive quizzes that make learning engaging and fun. Perfect for homework, assessments, and review sessions.",
    features: ["Classroom Management", "Progress Tracking","Flashcards & Study Sets", "Live Exam Mode"],
    image: "https://bing.com/th/id/BCO.fd4cf7ef-df68-4444-9d5f-50d795a99cb9.png",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Corporate Training",
    subtitle: "For Workplace Learning",
    description:
      "Enhance employee training programs with interactive content that improves retention and engagement across your organization.",
    features: ["Skills Assessment", "Compliance Training", "Team Building", "Performance Analytics"],
    image: "https://bing.com/th/id/BCO.2718b9ee-c4ab-4a6d-b233-612c179e99f9.png",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
]

export default function UseCasesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="use-cases">
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
            🎯 Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Perfect for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           From classrooms to boardrooms, LivQuiz adapts to your needs with powerful features designed for diverse learning environments.
          </p>
        </motion.div>

        {/* Use Cases - All sections now have consistent styling */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16 lg:items-stretch`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center space-y-2 lg:flex-row lg:text-left lg:space-x-4 lg:space-y-0">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl`}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{useCase.title}</h3>
                    <p className="text-lg text-gray-600">{useCase.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{useCase.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCase.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      whileHover={{ scale: 1.05 }}
                      className={`${useCase.bgColor} p-4 rounded-xl border border-white/50 hover:shadow-md transition-all duration-200 text-left`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${useCase.color} rounded-full`}></div>
                        <span className="font-medium text-gray-800">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                
              </div>

              {/* Image */}
              <motion.div whileHover={{ scale: 1.02 }} className="flex-1 flex flex-col h-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src={useCase.image || "/placeholder.svg"}
                    alt={`${useCase.title} use case`}
                    width={600}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-3xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
