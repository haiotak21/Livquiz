"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, GraduationCap } from "lucide-react"
import { useTranslations } from "next-intl"

const useCases = [
  {
    icon: GraduationCap,
    titleKey: "useCasesEducationTitle",
    subtitleKey: "useCasesEducationSubtitle",
    descriptionKey: "useCasesEducationDescription",
    featuresKeys: [
      "useCasesEducationFeature0",
      "useCasesEducationFeature1",
      "useCasesEducationFeature2",
      "useCasesEducationFeature3",
    ],
    image: "https://i.pinimg.com/736x/8e/ea/b8/8eeab845675094e7aceefe109b8df12f.jpg",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Building2,
    titleKey: "useCasesCorporateTitle",
    subtitleKey: "useCasesCorporateSubtitle",
    descriptionKey: "useCasesCorporateDescription",
    featuresKeys: [
      "useCasesCorporateFeature0",
      "useCasesCorporateFeature1",
      "useCasesCorporateFeature2",
      "useCasesCorporateFeature3",
    ],
    image: "https://i.pinimg.com/736x/4b/66/16/4b6616458972652aca68a4cf2802b6bc.jpg", 
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
]

export default function UseCasesSection() {
  const t = useTranslations("HomePage")
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
            {t("useCasesHeader")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("useCasesTitle1")}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              {t("useCasesTitle2")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("useCasesSubtitle")}
          </p>
        </motion.div>

        {/* Use Cases */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
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
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{t(useCase.titleKey)}</h3>
                      <p className="text-lg text-gray-600">{t(useCase.subtitleKey)}</p>
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{t(useCase.descriptionKey)}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCase.featuresKeys.map((featureKey, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`${useCase.bgColor} p-4 rounded-xl border border-white/50 hover:shadow-md transition-all duration-200 text-left`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${useCase.color} rounded-full`}></div>
                          <span className="font-medium text-gray-800">{t(featureKey)}</span>
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
                      alt={`${t(useCase.titleKey)} use case`}
                      width={600}
                      height={400}
                      style={{ objectFit: "cover" }}
                      className="rounded-3xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}