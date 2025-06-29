"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Check, X, Star, Users, Zap, Shield } from "lucide-react"
import { handlePageLoadScroll } from "@/utils/navigation"
import Link from "next/link"
import { useTranslations } from "next-intl"

const planTypes = [
    "Personal",
    "Business",
    "School"
]

const basePlans = {
    Personal: [
        {
            nameKey: "personalBasicName",
            monthlyPrice: 5.99,
            annualPrice: 57.99,
            periodKey: "perMonth",
            descriptionKey: "personalBasicDesc",
            popular: false,
            features: {
                included: [
                    "personalBasicFeature0",
                    "personalBasicFeature1",
                    "personalBasicFeature2",
                    "personalBasicFeature3",
                    "personalBasicFeature4"
                ],
                excluded: ["personalBasicExcluded0"],
            },
            ctaKey: "startNow",
            highlight: false,
        },
        {
            nameKey: "activeLearnerName",
            monthlyPrice: 12.99,
            annualPrice: 123.99,
            periodKey: "perMonth",
            descriptionKey: "activeLearnerDesc",
            popular: true,
            features: {
                included: [
                    "activeLearnerFeature0",
                    "activeLearnerFeature1",
                    "activeLearnerFeature2",
                    "activeLearnerFeature3",
                    "activeLearnerFeature4",
                    "activeLearnerFeature5",
                    "activeLearnerFeature6"
                ],
                excluded: [],
            },
            ctaKey: "startFreeTrial",
            highlight: true,
        },
        {
            nameKey: "activeLearnerProName",
            monthlyPrice: 19.99,
            annualPrice: 191.99,
            periodKey: "perMonth",
            descriptionKey: "activeLearnerProDesc",
            popular: false,
            features: {
                included: [
                    "activeLearnerProFeature0",
                    "activeLearnerProFeature1",
                    "activeLearnerProFeature2",
                    "activeLearnerProFeature3",
                    "activeLearnerProFeature4",
                    "activeLearnerProFeature5",
                    "activeLearnerProFeature6"
                ],
                excluded: [],
            },
            ctaKey: "startNow",
            highlight: false,
        },
    ],
    Business: [
        {
            nameKey: "businessBasicName",
            monthlyPrice: 29.99,
            annualPrice: 287.99,
            periodKey: "perMonth",
            descriptionKey: "businessBasicDesc",
            popular: false,
            features: {
                included: [
                    "businessBasicFeature0",
                    "businessBasicFeature1",
                    "businessBasicFeature2",
                    "businessBasicFeature3",
                    "businessBasicFeature4",
                    "businessBasicFeature5",
                    "businessBasicFeature6",
                    "businessBasicFeature7"
                ],
                excluded: ["businessBasicExcluded0", "businessBasicExcluded1"],
            },
            ctaKey: "startNow",
            highlight: false,
        },
        {
            nameKey: "businessProName",
            monthlyPrice: 69.99,
            annualPrice: 671.99,
            periodKey: "perMonth",
            descriptionKey: "businessProDesc",
            popular: true,
            features: {
                included: [
                    "businessProFeature0",
                    "businessProFeature1",
                    "businessProFeature2",
                    "businessProFeature3",
                    "businessProFeature4",
                    "businessProFeature5",
                    "businessProFeature6"
                ],
                excluded: ["businessProExcluded0"],
            },
            ctaKey: "startNow",
            highlight: true,
        },
    ],
    School: [
        {
            nameKey: "schoolBasicName",
            monthlyPrice: 89.99,
            annualPrice: 863.99,
            periodKey: "perMonth",
            descriptionKey: "schoolBasicDesc",
            popular: false,
            features: {
                included: [
                    "schoolBasicFeature0",
                    "schoolBasicFeature1",
                    "schoolBasicFeature2",
                    "schoolBasicFeature3",
                    "schoolBasicFeature4",
                    "schoolBasicFeature5",
                    "schoolBasicFeature6",
                    "schoolBasicFeature7",
                    "schoolBasicFeature8"
                ],
                excluded: ["schoolBasicExcluded0", "schoolBasicExcluded1"],
            },
            ctaKey: "startNow",
            highlight: false,
        },
        {
            nameKey: "schoolProName",
            monthlyPrice: 149.99,
            annualPrice: 1439.99,
            periodKey: "perMonth",
            descriptionKey: "schoolProDesc",
            popular: true,
            features: {
                included: [
                    "schoolProFeature0",
                    "schoolProFeature1",
                    "schoolProFeature2",
                    "schoolProFeature3",
                    "schoolProFeature4",
                    "schoolProFeature5",
                    "schoolProFeature6",
                    "schoolProFeature7",
                    "schoolProFeature8"
                ],
                excluded: ["schoolProExcluded0", "schoolProExcluded1"],
            },
            ctaKey: "contactSales",
            highlight: true,
        },
        {
            nameKey: "enterpriseName",
            monthlyPrice: 299.99,
            annualPrice: 2879.99,
            periodKey: "perMonth",
            descriptionKey: "enterpriseDesc",
            popular: false,
            features: {
                included: [
                    "enterpriseFeature0",
                    "enterpriseFeature1",
                    "enterpriseFeature2",
                    "enterpriseFeature3",
                    "enterpriseFeature4",
                    "enterpriseFeature5",
                    "enterpriseFeature6"
                ],
                excluded: [],
            },
            ctaKey: "contactSales",
            highlight: false,
        },
    ],
}

const faqs = [
    {
        questionKey: "faqChangePlanQ",
        answerKey: "faqChangePlanA",
    },
    {
        questionKey: "faqTrialQ",
        answerKey: "faqTrialA",
    },
    {
        questionKey: "faqPaymentQ",
        answerKey: "faqPaymentA",
    },
    {
        questionKey: "faqCancelQ",
        answerKey: "faqCancelA",
    },
]

export default function PricingPage() {
    const t = useTranslations('PricingPage')
    const [selectedPlanType, setSelectedPlanType] = useState("Personal")
    const [billingPeriod, setBillingPeriod] = useState("monthly")

    useEffect(() => {
        handlePageLoadScroll()
    }, [])

    const currentPlans = basePlans[selectedPlanType] || basePlans.Personal

    const getDisplayPrice = (plan) => {
        if (typeof plan.monthlyPrice === "string") return plan.monthlyPrice
        if (plan.monthlyPrice === 0) return "$0"

        const price = billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice
        return `$${price}`
    }

    const getSavings = (plan) => {
        if (typeof plan.monthlyPrice === "string" || plan.monthlyPrice === 0) return null
        if (billingPeriod === "annual") {
            const monthlyCost = plan.monthlyPrice * 12
            const annualCost = plan.annualPrice
            const savings = Math.round(((monthlyCost - annualCost) / monthlyCost) * 100)
            return t('savePercent', { percent: savings })
        }
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container max-w-7xl mx-auto px-4 lg:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <motion.h1
                                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                {t('heroTitle')}
                            </motion.h1>
                            <motion.p
                                className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {t('heroSubtitle')}
                            </motion.p>

                            {/* Plan Type Selector */}
                            <motion.div
                                className="flex justify-center mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="bg-gray-100 p-1 rounded-2xl">
                                    <div className="grid grid-cols-3">
                                        {planTypes.map((type) => (
                                            <motion.button
                                                key={type}
                                                onClick={() => setSelectedPlanType(type)}
                                                className={`px-6 sm:px-8 py-3 rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base ${selectedPlanType === type
                                                    ? "bg-purple-600 text-white shadow-lg border border-purple-600"
                                                    : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {t(`planType${type}`)}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Billing Period Toggle */}
                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="bg-white border-2 border-gray-200 p-1 rounded-2xl shadow-sm max-w-full overflow-hidden">
                                    <div className="grid grid-cols-2 relative auto-cols-fr">
                                        <span
                                            className={`absolute top-1 bottom-1 left-1 transition-all duration-300 rounded-xl bg-purple-600 z-0 ${billingPeriod === "monthly" ? "translate-x-0 w-[calc(50%-0.5rem)]" : "translate-x-full w-[calc(50%-0.5rem)]"
                                                }`}
                                            style={{ boxShadow: '0 2px 8px 0 rgba(96,82,204,0.15)' }}
                                        />
                                        <button
                                            onClick={() => setBillingPeriod("monthly")}
                                            className={`relative z-10 min-w-0 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap text-center ${billingPeriod === "monthly" ? "text-white" : "text-gray-600 hover:text-gray-900"
                                                }`}
                                        >
                                            {t('monthly')}
                                        </button>
                                        <button
                                            onClick={() => setBillingPeriod("annual")}
                                            className={`relative z-10 min-w-0 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap flex items-center justify-center ${billingPeriod === "annual" ? "text-white" : "text-gray-600 hover:text-gray-900"
                                                }`}
                                        >
                                            <span>{t('annual')}</span>
                                            <span
                                                className={`ml-2 text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap ${billingPeriod === "annual" ? "bg-white/20 text-white" : "bg-green-100 text-green-800"
                                                    }`}
                                            >
                                                {t('save20')}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Plans */}
                <section className="py-16 bg-gray-50">
                    <div className="container max-w-7xl mx-auto px-4 lg:px-6">
                        <div
                            className={`grid grid-cols-1 ${currentPlans.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : currentPlans.length === 3 ? "md:grid-cols-3 max-w-6xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"} gap-8`}
                        >
                            {currentPlans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative ${plan.highlight ? "ring-2 ring-purple-600 scale-105" : ""}`}
                                >
                                    {plan.popular && (
                                        <motion.div
                                            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                        >
                                            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 border border-purple-600">
                                                <Star className="w-4 h-4" />
                                                <span>{t('mostPopular')}</span>
                                            </span>
                                        </motion.div>
                                    )}

                                    <div className="p-8">
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(plan.nameKey)}</h3>
                                            <div className="mb-4">
                                                <motion.span
                                                    className="text-4xl lg:text-5xl font-bold text-gray-900"
                                                    key={`${plan.nameKey}-${billingPeriod}`}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {getDisplayPrice(plan)}
                                                </motion.span>
                                                <span className="text-gray-600 ml-2">/{t(plan.periodKey)}</span>
                                            </div>
                                            {getSavings(plan) && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4"
                                                >
                                                    {getSavings(plan)}
                                                </motion.div>
                                            )}
                                            <p className="text-gray-600">{t(plan.descriptionKey)}</p>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            {plan.features.included.map((featureKey, featureIndex) => (
                                                <motion.div
                                                    key={featureIndex}
                                                    className="flex items-center space-x-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                                                >
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{t(featureKey)}</span>
                                                </motion.div>
                                            ))}
                                            {plan.features.excluded.map((featureKey, featureIndex) => (
                                                <motion.div
                                                    key={featureIndex}
                                                    className="flex items-center space-x-3 opacity-50"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 0.5, x: 0 }}
                                                    transition={{ duration: 0.3, delay: (plan.features.included.length + featureIndex) * 0.05 }}
                                                >
                                                    <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                                    <span className="text-gray-500">{t(featureKey)}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link href="https://livquiz.com/auth/sign-up">
                                                <Button
                                                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${plan.highlight
                                                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl border border-purple-600"
                                                        : "bg-gray-100 hover:bg-gray-200 text-gray-900 hover:bg-purple-600 hover:text-white border hover:border-purple-600"
                                                        }`}
                                                >
                                                    {t(plan.ctaKey)}
                                                </Button>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Comparison */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container max-w-7xl mx-auto px-4 lg:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('whyChooseTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {t('whyChooseSubtitle')}
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="flex flex-col items-center text-center">
                                <Users className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="font-bold text-lg mb-2">{t('trustedBy')}</h3>
                                <p>{t('trustedByDesc')}</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Zap className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="font-bold text-lg mb-2">{t('easyToUse')}</h3>
                                <p>{t('easyToUseDesc')}</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="font-bold text-lg mb-2">{t('secureReliable')}</h3>
                                <p>{t('secureReliableDesc')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 lg:py-24 bg-gray-50">
                    <div className="container max-w-4xl mx-auto px-4 lg:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('faqTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                                {t('faqSubtitle')}
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{t(faq.questionKey)}</h3>
                                    <p className="text-gray-600">{t(faq.answerKey)}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-purple-600">
                    <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">{t('ctaTitle')}</h2>
                            <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                {t('ctaSubtitle')}
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}