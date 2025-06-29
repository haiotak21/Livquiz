"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { QrCode, Users, Play, Smartphone, Monitor } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const demoMethods = [
  {
    icon: QrCode,
    titleKey: "demoMethodQRCodeTitle",
    descriptionKey: "demoMethodQRCodeDescription",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    titleKey: "demoMethodAccessCodeTitle",
    descriptionKey: "demoMethodAccessCodeDescription",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Play,
    titleKey: "demoMethodSoloTitle",
    descriptionKey: "demoMethodSoloDescription",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
]

const platforms = [
  { icon: Smartphone, nameKey: "demoPlatformMobile" },
  { icon: Monitor, nameKey: "demoPlatformDesktop" },
]

export default function DemoSection() {
  const t = useTranslations("HomePage")
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-purple-50" id="demo">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t("demoHeader")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("demoTitle1")}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
              {t("demoTitle2")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("demoSubtitle")}
          </p>
        </motion.div>

        {/* Demo Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {demoMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div
                  className={`${method.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-white/50`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${method.color} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">{t(method.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed min-h-[52px]">{t(method.descriptionKey)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Interactive Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 mb-12 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">{t("demoReadyTitle")}</h3>
            <p className="text-gray-600 mb-8">{t("demoReadySubtitle")}</p>

            <div className="flex flex-col gap-3 justify-center w-full">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full min-w-0">
                <Link href="/contact">
                  <Button className="w-full py-3 md:py-2 px-4 md:px-3 bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base md:text-sm break-words min-w-0">
                    {t("demoTryDemoQuiz")}
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full min-w-0">
                <Link href="https://livquiz.com/auth/sign-up">
                  <Button
                    variant="outline"
                    className="w-full py-3 md:py-2 px-4 md:px-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-2xl transition-all duration-200 text-base md:text-sm break-words min-w-0"
                  >
                    {t("demoJoinLiveSession")}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="flex flex-row flex-nowrap justify-center items-center gap-x-1 pt-8 border-t border-gray-100 overflow-x-auto">
            <span className="text-gray-500 font-medium text-sm">{t("demoAvailableOn")}</span>
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              return (
                <motion.div key={index} whileHover={{ scale: 1.1 }} className="flex items-center space-x-1 text-gray-600">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{t(platform.nameKey)}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">{t("demoLiveNow")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}