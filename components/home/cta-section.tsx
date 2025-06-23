"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl';

const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
  },
}

export default function CTASection() {
  const t = useTranslations('HomePage');
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
          </div>

          <div className="relative w-full flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center">
            {/* Floating Images */}
           

            {/* Main Content */}
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-full mx-auto px-4"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('ctaReady')}</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 max-w-full mx-auto break-words">
                  {t('ctaHeadline1')}{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                    {t('ctaHeadline2')}
                  </span>
                </h2>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full mx-auto">
                  {t('ctaSubtitle')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://livquiz.com/auth/sign-up">
                    <Button className="px-8 py-4 w-[280.9px] h-[40px] bg-gradient-to-r from-purple-600 to-pruple-600 hover:from-purple-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg group">
                      {t('ctaStart')}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="px-8 py-4 w-[280.9px] h-[40px] border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-2xl transition-all duration-200 text-lg"
                    >
                      {t('ctaDemo')}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{t('ctaFree')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{t('ctaNoCard')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{t('ctaSetup')}</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Images */}
           
          </div>

          {/* Mobile Floating Images */}
   
        </div>
      </div>
    </section>
  )
}
