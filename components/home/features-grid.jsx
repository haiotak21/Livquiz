"use client"

import { motion } from "framer-motion"
import { Users, Play, BarChart3, Shield, Clock, BookOpen } from "lucide-react"
import { useTranslations } from "next-intl"

const features = [
  {
    icon: Users,
    titleKey: "gridFeatureTitle0",
    descriptionKey: "gridFeatureDesc0",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Play,
    titleKey: "gridFeatureTitle1",
    descriptionKey: "gridFeatureDesc1",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BarChart3,
    titleKey: "gridFeatureTitle2",
    descriptionKey: "gridFeatureDesc2",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    titleKey: "gridFeatureTitle3",
    descriptionKey: "gridFeatureDesc3",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Clock,
    titleKey: "gridFeatureTitle4",
    descriptionKey: "gridFeatureDesc4",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: BookOpen,
    titleKey: "gridFeatureTitle5",
    descriptionKey: "gridFeatureDesc5",
    color: "bg-indigo-100 text-indigo-600",
  },
]

export default function FeaturesGrid() {
  const t = useTranslations("HomePage")
  return (
    <section className="container max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("featuresGridTitle")}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("featuresGridSubtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p className="text-gray-600">{t(feature.descriptionKey)}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}