"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { handlePageLoadScroll } from "@/utils/navigation";
import {
  Check,
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  BookOpen,
  Presentation,
  TrendingUp,
  Target,
  Smartphone,
  FileText,
  Palette,
  HeadphonesIcon,
  Bot,
  MonitorSmartphone,
  GraduationCap,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    icon: Zap,
    titleKey: "features0Title",
    descriptionKey: "features0Desc",
    benefitsKeys: [
      "features0Benefit0",
      "features0Benefit1",
      "features0Benefit2",
      "features0Benefit3",
    ],
  },
  {
    icon: Users,
    titleKey: "features1Title",
    descriptionKey: "features1Desc",
    benefitsKeys: [
      "features1Benefit0",
      "features1Benefit1",
      "features1Benefit2",
      "features1Benefit3",
    ],
  },
  {
    icon: BarChart3,
    titleKey: "features2Title",
    descriptionKey: "features2Desc",
    benefitsKeys: [
      "features2Benefit0",
      "features2Benefit1",
      "features2Benefit2",
      "features2Benefit3",
    ],
  },
  {
    icon: Shield,
    titleKey: "features3Title",
    descriptionKey: "features3Desc",
    benefitsKeys: [
      "features3Benefit0",
      "features3Benefit1",
      "features3Benefit2",
      "features3Benefit3",
      "features3Benefit4",
    ],
  },
  {
    icon: Clock,
    titleKey: "features4Title",
    descriptionKey: "features4Desc",
    benefitsKeys: [
      "features4Benefit0",
      "features4Benefit1",
      "features4Benefit2",
      "features4Benefit3",
    ],
  },
  {
    icon: BookOpen,
    titleKey: "features5Title",
    descriptionKey: "features5Desc",
    benefitsKeys: [
      "features5Benefit0",
      "features5Benefit1",
      "features5Benefit2",
      "features5Benefit3",
    ],
  },
];

const enterpriseSolutions = [
  {
    icon: Shield,
    titleKey: "enterpriseSecurityTitle",
    descriptionKey: "enterpriseSecurityDesc",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Palette,
    titleKey: "customBrandingTitle",
    descriptionKey: "customBrandingDesc",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: HeadphonesIcon,
    titleKey: "dedicatedSupportTitle",
    descriptionKey: "dedicatedSupportDesc",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

const examFeatures = [
  {
    number: "01",
    titleKey: "examProtectionTitle",
    descriptionKey: "examProtectionDesc",
    color: "bg-yellow-400",
    textColor: "text-gray-900",
  },
  {
    number: "02",
    titleKey: "examBuilderTitle",
    descriptionKey: "examBuilderDesc",
    color: "bg-purple-400",
    textColor: "text-gray-900",
  },
  {
    number: "03",
    titleKey: "eliminateCheatingTitle",
    descriptionKey: "eliminateCheatingDesc",
    color: "bg-pink-400",
    textColor: "text-gray-900",
  },
  {
    number: "04",
    titleKey: "sendAndArrangeYourExamsTitle",
    descriptionKey: "sendAndArrangeYourExamsDesc",
    color: "bg-green-400",
    textColor: "text-gray-900",
  },
  {
    number: "05",
    titleKey: "allResultsAtYourFingertipsTitle",
    descriptionKey: "allResultsAtYourFingertipsDesc",
    color: "bg-blue-400",
    textColor: "text-gray-900",
  },
];

const liveQuizFeatures = [
  {
    icon: Presentation,
    titleKey: "interactivePresentationsTitle",
    descriptionKey: "interactivePresentationsDesc",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    titleKey: "realTimeAnalyticsTitle",
    descriptionKey: "realTimeAnalyticsDesc",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Target,
    titleKey: "customizableFeedbackTitle",
    descriptionKey: "customizableFeedbackDesc",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const [activeSection, setActiveSection] = useState("platform-editions");

  useEffect(() => {
    handlePageLoadScroll();

    const handleScroll = () => {
      const sections = [
        "platform-editions",
        "amazing-tools",
        "exam-builder",
        "live-quizzes",
        "enterprise",
        "ecosystem",
      ];
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetBottom
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  {t("heroTitle")}
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("heroDescription")}
                </p>
                <button
                  onClick={() =>
                    (window.location.href = "https://livquiz.com/auth/sign-up")
                  }
                  className="block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-base font-semibold"
                >
                  {t("signUpButton")}
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gray-100 rounded-2xl shadow-lg overflow-hidden border-2 border-gray-300">
                  <Image
                    src="https://i.pinimg.com/736x/37/0a/9b/370a9b19484bbe091673d2e3932c1a8f.jpg"
                    alt="LivQuiz Product Interface"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {t("productInterfacePreview")}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Sticky Navigation */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-3 overflow-x-auto max-lg:hidden">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {[
                { id: "platform-editions", name: t("navPlatformEditions"), icon: GraduationCap },
                { id: "amazing-tools", name: t("navAmazingTools"), icon: Zap },
                { id: "exam-builder", name: t("navExamBuilder"), icon: FileText },
                { id: "live-quizzes", name: t("navLiveQuizzes"), icon: Users },
                { id: "enterprise", name: t("navEnterprise"), icon: Shield },
                { id: "ecosystem", name: t("navEcosystem"), icon: Globe },
              ].map((category) => (
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
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Platform Editions Section */}
        <section id="platform-editions" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">{t("platformEditionsTitle")}</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("platformEditionsDesc")}
              </p>
            </motion.div>
            {/* Education Edition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("educationEditionTitle")}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t("educationEditionDesc")}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Education Edition Card (Image) */}
                <div className="lg:col-span-1">
                  <Image
                    src="https://i.pinimg.com/736x/43/5d/55/435d5520095eeb014f0064a6de16e966.jpg"
                    alt="Education Edition"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                {/* Feature Cards Grid */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("educationFeature0")}</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("educationFeature1")}</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("educationFeature2")}</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("educationFeature3")}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Business Edition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("businessEditionTitle")}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t("businessEditionDesc")}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Business Edition Card (Image) */}
                <div className="lg:col-span-1">
                  <Image
                    src="https://i.pinimg.com/736x/52/59/99/525999ede2a8c482eaf97be6f511f411.jpg"
                    alt="Business Edition"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                {/* Feature Cards Grid */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("businessFeature0")}</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("businessFeature1")}</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("businessFeature2")}</h4>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{t("businessFeature3")}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Amazing Tools Section */}
        <section id="amazing-tools" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                {t("amazingToolsTitle")}
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("amazingToolsDesc")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col text-left"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(feature.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{t(feature.descriptionKey)}</p>
                  <ul className="space-y-3 mb-6 text-left">
                    {feature.benefitsKeys.map((benefitKey, bIndex) => (
                      <li key={bIndex} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{t(benefitKey)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Exam Builder Section */}
        <section id="exam-builder" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            {/* Yellow Pill Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg mb-8">
                {t("examBuilderPill")}
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t("examBuilderTitleMain")}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {examFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-full mb-6 flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${feature.textColor}`}>{feature.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                    <p className={`${feature.textColor} text-lg leading-relaxed mb-6 text-left`}>
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Live Quizzes Section */}
        <section id="live-quizzes" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">{t("liveQuizzesTitle")}</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("liveQuizzesDesc")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{t("liveQuizzesFeatureTitle")}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t("liveQuizzesFeatureDesc")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{t("liveQuizzesBenefit0")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{t("liveQuizzesBenefit1")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{t("liveQuizzesBenefit2")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{t("liveQuizzesBenefit3")}</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <div className="relative h-full">
                  <Image
                    src="https://i.pinimg.com/736x/4f/e8/ee/4fe8ee1c0bded8129ab26a513d7e9178.jpg"
                    alt="Live Quizzes Interface"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveQuizFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t(feature.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(feature.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Enterprise Solutions Section */}
        <section id="enterprise" className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">{t("enterpriseTitle")}</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("enterpriseDesc")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(solution.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(solution.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-white text-[#6052CC] hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-gray-200"
                onClick={() => (window.location.href = "/contact")}
              >
                {t("requestDemoButton")}
              </Button>
            </motion.div>
          </div>
        </section>
        {/* Our Product Ecosystem Section */}
        <section id="ecosystem" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">{t("ecosystemTitle")}</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("ecosystemDesc")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t("ecosystemFeature0Title")}</h3>
                <p className="text-gray-600 text-sm">{t("ecosystemFeature0Desc")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MonitorSmartphone className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t("ecosystemFeature1Title")}</h3>
                <p className="text-gray-600 text-sm">{t("ecosystemFeature1Desc")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t("ecosystemFeature2Title")}</h3>
                <p className="text-gray-600 text-sm">{t("ecosystemFeature2Desc")}</p>
              </motion.div>
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
                {t("ctaTitle")}
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                {t("ctaDesc")}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 