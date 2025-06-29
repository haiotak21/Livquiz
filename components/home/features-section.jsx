"use client"

import { motion } from "framer-motion"
import { Users, Play, BarChart3, Shield, Clock, BookOpen, Zap, Sparkles, FileStack } from "lucide-react"
import { useTranslations } from "next-intl"

const features = [
  {
    icon: Users,
    titleKey: "featureTitle0",
    descriptionKey: "featureDesc0",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Sparkles,
    titleKey: "featureTitle1",
    descriptionKey: "featureDesc1",
    color: "from-red-500 to-red-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FileStack,
    titleKey: "featureTitle2",
    descriptionKey: "featureDesc2",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Play,
    titleKey: "featureTitle3",
    descriptionKey: "featureDesc3",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: BarChart3,
    titleKey: "featureTitle4",
    descriptionKey: "featureDesc4",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    titleKey: "featureTitle5",
    descriptionKey: "featureDesc5",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Clock,
    titleKey: "featureTitle6",
    descriptionKey: "featureDesc6",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BookOpen,
    titleKey: "featureTitle7",
    descriptionKey: "featureDesc7",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Zap,
    titleKey: "featureTitle8",
    descriptionKey: "featureDesc8",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
  },
]

export default function FeaturesSection() {
  const t = useTranslations("HomePage")
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
            {t("featuresHeader")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("featuresTitle1")}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
              {t("featuresTitle2")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("featuresSubtitle")}
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
                  className={`${feature.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/50 flex flex-col items-center text-center`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {t(feature.descriptionKey)}
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
      </div>
    </section>
  )
}