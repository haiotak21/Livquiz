"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { handlePageLoadScroll } from "@/utils/navigation"
import {
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  Bot,
  Play,
  CheckCircle,
  Gamepad2,
  Edit3,
  ImageIcon,
  FolderOpen,
  UserCheck,
  Timer,
  Activity,
  Smartphone,
  TrendingUp,
  Trophy,
  Lock,
  GraduationCap,
  QrCode,
  Monitor,
  Target,
  BotMessageSquare,
} from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

// TODO: Add all translation keys for features, descriptions, and section headings to FeaturesPage in en.json, fr.json, es.json

const heroFeatures = [
  {
    icon: Zap,
    titleKey: "heroFeatureTitle0",
    descriptionKey: "heroFeatureDesc0",
  },
  {
    icon: Users,
    titleKey: "heroFeatureTitle1",
    descriptionKey: "heroFeatureDesc1",
  },
  {
    icon: BarChart3,
    titleKey: "heroFeatureTitle2",
    descriptionKey: "heroFeatureDesc2",
  },
  {
    icon: Shield,
    titleKey: "heroFeatureTitle3",
    descriptionKey: "heroFeatureDesc3",
  },
]

const featureCategories = [
  { id: "creation", nameKey: "categoryCreation", icon: Edit3 },
  { id: "instructor", nameKey: "categoryInstructor", icon: UserCheck },
  { id: "multiplayer", nameKey: "categoryMultiplayer", icon: Gamepad2 },
  { id: "analytics", nameKey: "categoryAnalytics", icon: BarChart3 },
  { id: "ai feature", nameKey: "categoryAi", icon: Bot },
  { id: "security", nameKey: "categorySecurity", icon: Shield },
]

const creationFeatures = [
  {
    icon: Edit3,
    titleKey: "creationFeature0Title",
    id:"quizmaker",
    descriptionKey: "creationFeature0Desc",
    featuresKeys: [
      "creationFeature0Feature0",
      "creationFeature0Feature1",
      "creationFeature0Feature2",
      "creationFeature0Feature3",
      "creationFeature0Feature4",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: ImageIcon,
    titleKey: "creationFeature1Title",
    descriptionKey: "creationFeature1Desc",
    featuresKeys: [
      "creationFeature1Feature0",
      "creationFeature1Feature1",
      "creationFeature1Feature2",
      "creationFeature1Feature3",
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: FolderOpen,
    titleKey: "creationFeature2Title",
    descriptionKey: "creationFeature2Desc",
    featuresKeys: [
      "creationFeature2Feature0",
      "creationFeature2Feature1",
      "creationFeature2Feature2",
      "creationFeature2Feature3",
    ],
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Target,
    titleKey: "creationFeature3Title",
    descriptionKey: "creationFeature3Desc",
    featuresKeys: [
      "creationFeature3Feature0",
      "creationFeature3Feature1",
      "creationFeature3Feature2",
    ],
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
]

const instructorFeatures = [
  {
    icon: Play,
    id:"quizmaker",
    titleKey: "instructorFeature0Title",
    descriptionKey: "instructorFeature0Desc",
    featuresKeys: [
      "instructorFeature0Feature0",
      "instructorFeature0Feature1",
      "instructorFeature0Feature2",
      "instructorFeature0Feature3",
    ],
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Users,
    titleKey: "instructorFeature1Title",
    descriptionKey: "instructorFeature1Desc",
    featuresKeys: [
      "instructorFeature1Feature0",
      "instructorFeature1Feature1",
      "instructorFeature1Feature2",
      "instructorFeature1Feature3",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Timer,
    titleKey: "instructorFeature2Title",
    descriptionKey: "instructorFeature2Desc",
    featuresKeys: [
      "instructorFeature2Feature0",
      "instructorFeature2Feature1",
      "instructorFeature2Feature2",
      "instructorFeature2Feature3",
    ],
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
]

const multiplayerFeatures = [
  {
    icon: Activity,
    titleKey: "multiplayerFeature0Title",
    descriptionKey: "multiplayerFeature0Desc",
    featuresKeys: [
      "multiplayerFeature0Feature0",
      "multiplayerFeature0Feature1",
      "multiplayerFeature0Feature2",
      "multiplayerFeature0Feature3",
    ],
    color: "bg-purple-100",
    visual: {
      icon: Zap,
      titleKey: "multiplayerFeature0VisualTitle",
      subtitleKey: "multiplayerFeature0VisualSubtitle",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Smartphone,
    titleKey: "multiplayerFeature1Title",
    descriptionKey: "multiplayerFeature1Desc",
    featuresKeys: [
      "multiplayerFeature1Feature0",
      "multiplayerFeature1Feature1",
      "multiplayerFeature1Feature2",
      "multiplayerFeature1Feature3",
    ],
    color: "bg-blue-100",
    visual: {
      icon: QrCode,
      titleKey: "multiplayerFeature1VisualTitle",
      subtitleKey: "multiplayerFeature1VisualSubtitle",
      bgColor: "bg-blue-600",
    },
  },
]

const analyticsFeatures = [
  {
    icon: BarChart3,
    titleKey: "analyticsFeature0Title",
    descriptionKey: "analyticsFeature0Desc",
    featuresKeys: [
      "analyticsFeature0Feature0",
      "analyticsFeature0Feature1",
      "analyticsFeature0Feature2",
    ],
    color: "bg-purple-100",
    visual: {
      icon: TrendingUp,
      titleKey: "analyticsFeature0VisualTitle",
      subtitleKey: "analyticsFeature0VisualSubtitle",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Trophy,
    titleKey: "analyticsFeature1Title",
    descriptionKey: "analyticsFeature1Desc",
    featuresKeys: [
      "analyticsFeature1Feature0",
      "analyticsFeature1Feature1",
    ],
    color: "bg-yellow-100",
    visual: {
      icon: Trophy,
      titleKey: "analyticsFeature1VisualTitle",
      subtitleKey: "analyticsFeature1VisualSubtitle",
      bgColor: "bg-yellow-600",
    },
  },
]

const aifeature = [
  {
    icon: Bot,
    titleKey: "aiFeature0Title",
    descriptionKey: "aiFeature0Desc",
    featuresKeys: [
      "aiFeature0Feature0",
      "aiFeature0Feature1",
      "aiFeature0Feature2",
    ],
    color: "bg-green-100",
    visual: {
      icon: Bot,
      titleKey: "aiFeature0VisualTitle",
      subtitleKey: "aiFeature0VisualSubtitle",
      bgColor: "bg-green-600",
    },
  },
  {
    icon: Bot,
    titleKey: "aiFeature1Title",
    descriptionKey: "aiFeature1Desc",
    featuresKeys: [
      "aiFeature1Feature0",
      "aiFeature1Feature1",
      "aiFeature1Feature2",
    ],
    color: "bg-red-100",
    visual: {
      icon: Bot,
      titleKey: "aiFeature1VisualTitle",
      subtitleKey: "aiFeature1VisualSubtitle",
      bgColor: "bg-red-600",
    },
  },
]

const securityFeatures = [
  {
    icon: GraduationCap,
    titleKey: "securityFeature0Title",
    descriptionKey: "securityFeature0Desc",
    featuresKeys: [
      "securityFeature0Feature0",
      "securityFeature0Feature1",
      "securityFeature0Feature2",
      "securityFeature0Feature3",
    ],
    color: "bg-purple-100",
    visual: {
      icon: GraduationCap,
      titleKey: "securityFeature0VisualTitle",
      subtitleKey: "securityFeature0VisualSubtitle",
      bgColor: "bg-purple-600",
    },
  },
  {
    icon: Lock,
    titleKey: "securityFeature1Title",
    descriptionKey: "securityFeature1Desc",
    featuresKeys: [
      "securityFeature1Feature0",
      "securityFeature1Feature1",
      "securityFeature1Feature2",
      "securityFeature1Feature3",
    ],
    color: "bg-red-100",
    visual: {
      icon: Lock,
      titleKey: "securityFeature1VisualTitle",
      subtitleKey: "securityFeature1VisualSubtitle",
      bgColor: "bg-red-600",
    },
  },
]

const platformFeatures = [
  {
    icon: Zap,
    titleKey: "platformFeature0Title",
    descriptionKey: "platformFeature0Desc",
    featuresKeys: ["platformFeature0Feature0"],
  },
  {
    icon: Users,
    titleKey: "platformFeature1Title",
    descriptionKey: "platformFeature1Desc",
    featuresKeys: ["platformFeature1Feature0"],
  },
  {
    icon: BarChart3,
    titleKey: "platformFeature2Title",
    descriptionKey: "platformFeature2Desc",
    featuresKeys: ["platformFeature2Feature0"],
  },
  {
    icon: Clock,
    titleKey: "platformFeature3Title",
    descriptionKey: "platformFeature3Desc",
    featuresKeys: ["platformFeature3Feature0"],
  },
  {
    icon: Shield,
    titleKey: "platformFeature4Title",
    descriptionKey: "platformFeature4Desc",
    featuresKeys: ["platformFeature4Feature0"],
  },
  {
    icon: Play,
    titleKey: "platformFeature5Title",
    descriptionKey: "platformFeature5Desc",
    featuresKeys: ["platformFeature5Feature0"],
  },
]

export default function FeaturesPage() {
  const t = useTranslations('FeaturesPage')
  const [activeSection, setActiveSection] = useState("creation")

  useEffect(() => {
    handlePageLoadScroll()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 160 // Account for sticky headers
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = featureCategories.map((cat) => cat.id)
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Mobile mockup */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative mx-auto w-80 h-[600px] lg:w-96 lg:h-[700px]">
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gray-800 rounded-[3rem] p-2">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center justify-between px-6 text-xs font-medium">
                        <span>10:12</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        </div>
                      </div>

                      {/* Quiz Interface */}
                      <div className="pt-8 p-4 h-full relative">
                        <Image
                          src="https://i.pinimg.com/736x/ae/0e/71/ae0e715f679c334b939ac44edd3435fc.jpg"
                          alt="Quiz Interface Image"
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-[2.5rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 flex flex-col items-center"
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('heroTitle')}
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                {t('heroDescription')}
                </p>
                <Link href="https://livquiz.com/auth/sign-up" className="block mx-auto">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  >
                    <span>{t('signUpButton')}</span>
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Hero Features */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {heroFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-yellow-800" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-gray-700">{t(feature.descriptionKey)}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Feature Categories Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6 max-lg:hidden">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {featureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === category.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{t(category.nameKey)}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz Creation & Content Management */}
        <section id="creation" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="hidden lg:flex w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Edit3 className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                {t('creationTitle')}
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('creationDescription')}
              </p>
            </motion.div>

            {/* Fixed equal height cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {creationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${feature.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                >
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t(feature.descriptionKey)}</p>
                  <ul className="space-y-2 mt-auto">
                    {feature.featuresKeys.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Instructor Control */}
        <section id="instructor" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="hidden lg:flex w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                {t('instructorTitle')}
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('instructorDescription')}
              </p>
            </motion.div>

            {/* Fixed equal height cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructorFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${feature.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                >
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{t(feature.descriptionKey)}</p>
                  <ul className="space-y-2 mt-auto">
                    {feature.featuresKeys.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Multiplayer Quiz Games */}
        <section id="multiplayer" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="hidden lg:flex w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Gamepad2 className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  {t('multiplayerTitle')}
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('multiplayerDescription')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {multiplayerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t(feature.descriptionKey)}</p>
                      <ul className="space-y-3">
                        {feature.featuresKeys.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.visual.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{t(feature.visual.titleKey)}</h4>
                      <p className="text-white/90">{t(feature.visual.subtitleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Student Progress */}
        <section id="analytics" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="hidden lg:flex w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                {t('analyticsTitle')}
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('analyticsDescription')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t(feature.descriptionKey)}</p>
                      <ul className="space-y-3">
                        {feature.featuresKeys.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.visual.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{t(feature.visual.titleKey)}</h4>
                      <p className="text-white/90">{t(feature.visual.subtitleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/*Ai feature */}
        <section id="ai feature" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="hidden lg:flex w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <BotMessageSquare className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                {t('aiFeatureTitle')}
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('aiFeatureDescription')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {aifeature.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t(feature.descriptionKey)}</p>
                      <ul className="space-y-3">
                        {feature.featuresKeys.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.visual.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{t(feature.visual.titleKey)}</h4>
                      <p className="text-white/90">{t(feature.visual.subtitleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Exam Integrity */}
        <section id="security" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="hidden lg:flex w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                {t('securityTitle')}
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('securityDescription')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text content side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t(feature.descriptionKey)}</p>
                      <ul className="space-y-3">
                        {feature.featuresKeys.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual card side */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex items-center h-full`}>
                    <div
                      className={`${feature.visual.bgColor} rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col justify-center`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.visual.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{t(feature.visual.titleKey)}</h4>
                      <p className="text-white/90">{t(feature.visual.subtitleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#7c3aed]">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              {t('ctaTitle')}
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {t('ctaDescription')}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
