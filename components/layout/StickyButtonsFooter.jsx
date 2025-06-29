"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'

export default function StickyButtonsFooter({ setShowQuizInput }) {
  const t = useTranslations('HomePage')
  const locale = useLocale()
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-50 flex flex-row gap-2 justify-center items-center md:hidden"
    >
      <div className="flex flex-row gap-2 w-full min-w-0">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-0">
          <Link href="">
            <Button
              onClick={() => setShowQuizInput(true)}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base break-words min-w-0"
            >
              {t('heroJoinQuiz')}
            </Button>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-0">
          <Link href="https://livquiz.com/auth/sign-up">
            <Button
              className="w-full py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base break-words min-w-0"
            >
              {locale === 'fr' ? "S'inscrire" : t('heroSignUp')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}