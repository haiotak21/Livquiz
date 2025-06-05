"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Create",
    description: "Create engaging quizzes with various question types, rich media, and flexible configuration options.",
    features: ["Multiple question types", "Flashcards & Study Sets", "Exams & Certifications", "Rich Media (images, formulas, formatting)", "Custom Timer & Scoring Options"],
    image: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    bgColor: "bg-blue-50",
    borderColor: "border-purple-200",
  },
  {
    number: "02",
    title: "Host or Share",
    description: "Host live sessions or share links to engage players on any device, instantly.",
    features: ["Multiple sharing options", "Live sessions", "Real-time participation", "Mobile-friendly", "Guest Access (No Signup Needed)"],
    image: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-pink-50",
    borderColor: "border-purple-200",
  },
  {
    number: "03",
    title: "Play",
    description: "Join live quizzes with a host-provided code and track your performance instantly with in-depth stats and leaderboards.",
    features: ["Real-time analytics", "Performance tracking", "Detailed reports", "Export capabilities"],
    image: "https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    bgColor: "bg-yellow-50",
    borderColor: "border-purple-200",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="how-it-works">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How does{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">LivQuiz</span>{" "}
            work?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            LivQuiz is a great way to create and take quizzes. It is easy to use and it offers a variety of features
            that make it a valuable tool for education, entertainment, and marketing.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div
                className={`${step.bgColor} ${step.borderColor} border-2 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-6 text-lg font-bold text-purple-600">
                  {index + 1}
                </div>

                {/* Image Container - This is where the images should be displayed */}
                <div className="mb-8 relative">
                  <div className="relative w-full h-48 bg-white rounded-2xl shadow-inner border-2 border-dashed border-gray-300 overflow-hidden">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={`${step.title} illustration`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay for better text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{step.description}</p>

                {/* Features List */}
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg">
                  Try This Step
                </Button>
              </div>
            </motion.div>
          ))}
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
            <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg">
              Get Started Now →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
