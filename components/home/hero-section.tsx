"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play, Users, Zap, Award, Globe } from "lucide-react"
import Link from "next/link"
import StickyButtonsFooter from "@/components/layout/StickyButtonsFooter"

const stats = [
  { icon: Users, value: "10k+", label: "Active users" },
  { icon: Play, value: "1M+", label: "Quizzes and Flashcards" },
  { icon: Globe, value: "50+", label: "county" },
  { icon: Zap, value: "99.9%", label: "Uptime" },
]

export default function HeroSection() {
  const [quizCode, setQuizCode] = useState("")
  const [showQuizInput, setShowQuizInput] = useState(false)
  const quizInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showQuizInput && quizInputRef.current) {
      quizInputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showQuizInput]);

  return (
    <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 overflow-hidden" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            The Ultimate Tool For{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
              Fun & Effective
            </span>{" "}
            Learning
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            LivQuiz makes learning engaging, collaborative, and impactful. Whether you're a student, educator, or
            professional, create, play, or host quizzes in real time — on any device.
          </motion.p>

          {/* Combined Buttons for Join Quizzes and Sign Up - Only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex flex-col sm:flex-row gap-4 justify-center mb-16 items-center"
          >
          
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="">
              <Button
                onClick={() => setShowQuizInput(true)}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                Join Quiz
              </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://livquiz.com/auth/sign-up">
                <Button
                  className="px-8 py-4 bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                >
                  Sign Up - It's free
                </Button>
              </Link>
            </motion.div>
          </motion.div>


          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1681681082088-ccd590564f7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="LivQuiz Dashboard Preview"
                width={900}
                height={300}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Session</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">247 Players</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3">
                    <IconComponent className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
      <StickyButtonsFooter setShowQuizInput={setShowQuizInput} />
    </section>
  )
}
