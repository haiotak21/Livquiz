"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Users,
  Briefcase,
  Target,
  Award,
  Globe,
  FileText,
  School,
  Zap,
  Users2,
  Calendar,
  Star,
  Calculator,
  Play,
} from "lucide-react";
import { handlePageLoadScroll } from "@/utils/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const categoryNavigation = [
  { id: "corporate-training", nameKey: "navCorporateTraining", icon: Building2 },
  { id: "education", nameKey: "navEducation", icon: GraduationCap },
  { id: "events-conferences", nameKey: "navEventsConferences", icon: Calendar },
  { id: "recruitment", nameKey: "navRecruitment", icon: Briefcase },
  { id: "success-stories", nameKey: "navSuccessStories", icon: Award },
  { id: "roi-calculator", nameKey: "navROICalculator", icon: Target },
];

const useCases = [
  {
    icon: Building2,
    titleKey: "corporateTrainingTitle",
    subtitleKey: "corporateTrainingSubtitle",
    descriptionKey: "corporateTrainingDescription",
    featuresKeys: [
      "corporateTrainingFeature0",
      "corporateTrainingFeature1",
      "corporateTrainingFeature2",
      "corporateTrainingFeature3",
    ],
    image: "https://i.pinimg.com/736x/7c/ec/f4/7cecf437d35e8f4dedf34cd9752a370a.jpg",
    stats: [
      { value: "50+", labelKey: "corporateTrainingStatCompanies" },
      { value: "200+", labelKey: "corporateTrainingStatEmployees" },
      { value: "95%", labelKey: "corporateTrainingStatCompletion" },
    ],
    id: "corporate-training",
    headerTitleKey: "corporateTrainingHeaderTitle",
    headerSubtitleKey: "corporateTrainingHeaderSubtitle",
    subCases: [],
  },
  {
    icon: GraduationCap,
    titleKey: "educationTitle",
    subtitleKey: "educationSubtitle",
    descriptionKey: "educationDescription",
    featuresKeys: [
      "educationFeature0",
      "educationFeature1",
      "educationFeature2",
      "educationFeature3",
    ],
    image: "https://i.pinimg.com/736x/1e/7a/9b/1e7a9bbb6365ed8bf76e33fbb30382ea.jpg",
    stats: [
      { value: "10k+", labelKey: "educationStatUsers" },
      { value: "1M+", labelKey: "educationStatQuizzes" },
      { value: "99%", labelKey: "educationStatSatisfaction" },
    ],
    id: "education",
    headerTitleKey: "educationHeaderTitle",
    headerSubtitleKey: "educationHeaderSubtitle",
    subCases: [],
  },
  {
    icon: Users,
    titleKey: "eventsConferencesTitle",
    subtitleKey: "eventsConferencesSubtitle",
    descriptionKey: "eventsConferencesDescription",
    featuresKeys: [
      "eventsConferencesFeature0",
      "eventsConferencesFeature1",
      "eventsConferencesFeature2",
      "eventsConferencesFeature3",
    ],
    image: "https://i.pinimg.com/736x/53/ad/26/53ad26540af77b9ae763c69f7e732f82.jpg",
    stats: [
      { value: "200+", labelKey: "eventsConferencesStatEvents" },
      { value: "5k+", labelKey: "eventsConferencesStatParticipants" },
      { value: "92%", labelKey: "eventsConferencesStatEngagement" },
    ],
    id: "events-conferences",
    headerTitleKey: "eventsConferencesHeaderTitle",
    headerSubtitleKey: "eventsConferencesHeaderSubtitle",
    subCases: [],
  },
  {
    icon: Briefcase,
    titleKey: "recruitmentTitle",
    subtitleKey: "recruitmentSubtitle",
    descriptionKey: "recruitmentDescription",
    featuresKeys: [
      "recruitmentFeature0",
      "recruitmentFeature1",
      "recruitmentFeature2",
      "recruitmentFeature3",
    ],
    image: "https://i.pinimg.com/736x/e9/a2/3f/e9a23fa3c1bb10f468d18e3e666c7a2f.jpg",
    stats: [
      { value: "100+", labelKey: "recruitmentStatHires" },
      { value: "20+", labelKey: "recruitmentStatCompanies" },
      { value: "89%", labelKey: "recruitmentStatAccuracy" },
    ],
    id: "recruitment",
    headerTitleKey: "recruitmentHeaderTitle",
    headerSubtitleKey: "recruitmentHeaderSubtitle",
    subCases: [],
  },
];

const successStories = [
  {
    quoteKey: "successStory0Quote",
    authorKey: "successStory0Author",
    roleKey: "successStory0Role",
    avatar: "👩‍🏫",
    impactKey: "successStory0Impact",
  },
  {
    quoteKey: "successStory1Quote",
    authorKey: "successStory1Author",
    roleKey: "successStory1Role",
    avatar: "👨‍💼",
    impactKey: "successStory1Impact",
  },
  {
    quoteKey: "successStory2Quote",
    authorKey: "successStory2Author",
    roleKey: "successStory2Role",
    avatar: "⚕️",
    impactKey: "successStory2Impact",
  },
  {
    quoteKey: "successStory3Quote",
    authorKey: "successStory3Author",
    roleKey: "successStory3Role",
    avatar: "🎤",
    impactKey: "successStory3Impact",
  },
];

export default function UseCasesPage() {
  const t = useTranslations("UseCasesPage");
  const [activeSection, setActiveSection] = useState("corporate-training");
  const [roiInputs, setRoiInputs] = useState({
    employees: 100,
    sessions: 12,
    hourlyCost: 25,
    timeSaved: 1,
  });

  useEffect(() => {
    handlePageLoadScroll();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...useCases.map((useCase) => useCase.id), "success-stories", "roi-calculator"];
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateROI = () => {
    const totalTimeSaved = roiInputs.employees * roiInputs.sessions * roiInputs.timeSaved;
    const totalCostSavings = totalTimeSaved * roiInputs.hourlyCost;
    const annualLivQuizCost = 2400;
    const roi = ((totalCostSavings - annualLivQuizCost) / annualLivQuizCost) * 100;
    const paybackMonths = Math.ceil(annualLivQuizCost / (totalCostSavings / 12));
    return {
      timeSaved: totalTimeSaved,
      costSavings: totalCostSavings,
      roi: Math.round(roi),
      paybackMonths: paybackMonths,
    };
  };
  const roiResults = calculateROI();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t("heroTitle")}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("heroDescription")}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-gray-600">{t("statActiveUsers")}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Play className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-gray-600">{t("statQuizzes")}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">{t("statCountries")}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">{t("statUptime")}</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40 max-lg:hidden">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {categoryNavigation.map((category) => (
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

        {/* Use Cases */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="space-y-16">
              {useCases.map((useCase, index) => (
                <div key={index} id={useCase.id}>
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                      {t(useCase.headerTitleKey)}
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                      {t(useCase.headerSubtitleKey)}
                    </p>
                  </motion.div>

                  {/* Main Use Case */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} flex flex-col h-full`}>
                      <div className="flex flex-col items-center text-center space-y-4 mb-6 md:flex-row md:text-left md:space-x-4 md:space-y-0">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <useCase.icon className="w-8 h-8 text-purple-600" />
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{t(useCase.titleKey)}</h2>
                          <p className="text-lg text-purple-600 font-semibold">{t(useCase.subtitleKey)}</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t(useCase.descriptionKey)}</p>

                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {useCase.featuresKeys.map((featureKey, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{t(featureKey)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {useCase.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                            <div className="text-sm text-gray-600 capitalize">{t(stat.labelKey)}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`${index % 2 === 1 ? "lg:col-start-1" : ""}  flex items-center justify-center h-full`}
                    >
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                        <Image
                          src={useCase.image || "/placeholder.svg"}
                          alt={t(useCase.titleKey) + " use case"}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Sub-case Cards */}
                  {useCase.subCases && useCase.subCases.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                    >
                      {useCase.subCases.map((subCase, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col text-left"
                        >
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            <subCase.icon className="w-6 h-6 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{t(subCase.titleKey)}</h3>
                          <p className="text-gray-600 mb-4">{t(subCase.descriptionKey)}</p>
                          <ul className="text-left text-gray-500 space-y-2 list-disc list-inside mt-auto">
                            {subCase.featuresKeys.map((featureKey, featureIndex) => (
                              <li key={featureIndex}>{t(featureKey)}</li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section
          id="success-stories"
          className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700"
        >
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex flex-col items-center mb-6">
                <Star className="w-8 h-8 text-yellow-300 mb-3" />
                <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">{t("successStoriesTitle")}</h2>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {t("successStoriesDescription")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-8 right-4 bg-green-400 text-green-900 px-1.5 py-0.5 rounded-full text-[10px] font-semibold">
                    {t(story.impactKey)}
                  </div>
                  <div className="flex items-center space-x-4 mb-6 pt-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      {story.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t(story.authorKey)}</h4>
                      <p className="text-white/80">{t(story.roleKey)}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-white leading-relaxed">"{t(story.quoteKey)}"</blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section id="roi-calculator" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex flex-col items-center mb-6">
                <Calculator className="w-8 h-8 text-[#6052CC]" />
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center">{t("roiCalculatorTitle")}</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("roiCalculatorDescription")}
              </p>
            </motion.div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Input Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("roiCalculatorDetailsTitle")}</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {t("roiEmployeesLabel")}
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.employees}
                          onChange={(e) => setRoiInputs({ ...roiInputs, employees: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="1"
                          placeholder="100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {t("roiSessionsLabel")}
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.sessions}
                          onChange={(e) => setRoiInputs({ ...roiInputs, sessions: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="1"
                          placeholder="12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {t("roiHourlyCostLabel")}
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.hourlyCost}
                          onChange={(e) => setRoiInputs({ ...roiInputs, hourlyCost: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="1"
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {t("roiTimeSavedLabel")}
                        </label>
                        <Input
                          type="number"
                          value={roiInputs.timeSaved}
                          onChange={(e) => setRoiInputs({ ...roiInputs, timeSaved: Number(e.target.value) || 0 })}
                          className="rounded-xl border-gray-300 h-12 text-lg"
                          min="0"
                          step="0.5"
                          placeholder="1"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Results Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("roiResultsTitle")}</h3>
                    <div className="bg-gradient-to-br from-[#9333ea] to-purple-600 text-white rounded-2xl p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">{roiResults.timeSaved.toLocaleString()}</div>
                          <div className="text-sm opacity-90">{t("roiTimeSaved")}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">${roiResults.costSavings.toLocaleString()}</div>
                          <div className="text-sm opacity-90">{t("roiCostSavings")}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">{roiResults.roi}%</div>
                          <div className="text-sm opacity-90">{t("roiROI")}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">{roiResults.paybackMonths}</div>
                          <div className="text-sm opacity-90">{t("roiPayback")}</div>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-lg font-semibold mb-2">{t("roiAnnualCost")}</div>
                          <div className="text-4xl font-bold">${roiResults.costSavings.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                      <p className="text-green-800 text-sm">
                        💡 <strong>{t("roiProTipLabel")}</strong> {t("roiProTip")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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