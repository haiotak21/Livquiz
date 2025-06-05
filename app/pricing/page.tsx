"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingHelpButton from "@/components/ui/floating-help-button"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Check, X, Star, Users, Zap, Shield } from "lucide-react"
import { handlePageLoadScroll } from "@/utils/navigation"

const planTypes = ["Personal", "Business", "School"]

const basePlans = {
  Personal: [
    {
      name: "Personal Basic",
      monthlyPrice: 5.99,
      annualPrice: 57.99,
      period: "per month",
      description: "Perfect for individual users getting started",
      popular: false,
      features: {
        included: [
          "Up to 5 quizzes per month",
          "Basic question types",
          "Up to 25 participants per quiz",
          "Up to 25 participants per quiz",
          "Basic analytics",
          "Community support",
          "LivQuiz branding",
        ],
        excluded: ["Custom branding", "Advanced analytics", "Priority support", "API access"],
      },
      cta: "Get Started Free",
      highlight: false,
    },
    {
      name: "Active Learner",
      monthlyPrice: 12.99,
      annualPrice: 123.99, // 20% discount
      period: "per month",
      description: "Best for individual educators and trainers",
      popular: true,
      features: {
        included: [
          "Unlimited quizzes",
          "All question types",
          "Up to 100 participants per quiz",
          "Advanced analytics & reports",
          "Priority email support",
          "Custom branding",
          "Export results",
          "Quiz templates",
        ],
        excluded: ["Team collaboration", "API access", "SSO integration"],
      },
      cta: "Start 14-Day Free Trial",
      highlight: true,
    },
    {
      name: "Active Learner Pro",
      monthlyPrice: 19.99,
      annualPrice: 191.99, // 20% discount
      period: "per month",
      description: "Advanced features for power users",
      popular: false,
      features: {
        included: [
          "Everything in Pro",
          "Up to 500 participants per quiz",
          "Advanced integrations",
          "White-label options",
          "Priority phone support",
          "Custom themes",
          "Advanced security",
          "API access",
        ],
        excluded: [],
      },
      cta: "Start Free Trial",
      highlight: false,
    },
  ],
  Business: [
    {
      name: "Business Basic",
      monthlyPrice: 29.99,
      annualPrice: 287.99, // 20% discount
      period: "per month",
      description: "Perfect for small to medium teams",
      popular: false,
      features: {
        included: [
          "Everything in Premium",
          "Up to 1000 participants per quiz",
          "Team collaboration",
          "Advanced analytics",
          "Priority support",
          "Custom branding",
          "Export results",
          "Integration support",
        ],
        excluded: ["Dedicated support", "Custom development"],
      },
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Business Pro",
      monthlyPrice: 69.99,
      annualPrice: 671.99, // 20% discount
      period: "per month",
      description: "For large organizations with advanced needs",
      popular: true,
      features: {
        included: [
          "Everything in Team",
          "Unlimited participants",
          "API access",
          "SSO integration",
          "Dedicated account manager",
          "Custom integrations",
          "Advanced security features",
          "SLA guarantee",
          "White-label solution",
          "Custom training",
        ],
        excluded: [],
      },
      cta: "Contact Sales",
      highlight: true,
    },
    {
      name: "Custom",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      period: "contact us",
      description: "Tailored solutions for enterprise needs",
      popular: false,
      features: {
        included: [
          "Everything in Enterprise",
          "Custom development",
          "Dedicated infrastructure",
          "24/7 phone support",
          "On-premise deployment",
          "Custom SLA",
          "Unlimited everything",
          "Personal success manager",
        ],
        excluded: [],
      },
      cta: "Contact Sales",
      highlight: false,
    },
  ],
  School: [
    {
      name: "School Basic",
      monthlyPrice: 89.99,
      annualPrice: 863.99, // 20% discount
      period: "per month",
      description: "Perfect for individual teachers and classrooms",
      popular: false,
      features: {
        included: [
          "Unlimited quizzes",
          "All question types",
          "Up to 200 students per quiz",
          "Student progress tracking",
          "Grade book integration",
          "Parent communication tools",
          "Educational templates",
          "Curriculum alignment",
        ],
        excluded: ["School-wide analytics", "Admin dashboard", "Bulk user management"],
      },
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "School Pro",
      monthlyPrice: 149.99,
      annualPrice: 1439.99, // 20% discount
      period: "per month",
      description: "Complete solution for entire schools",
      popular: true,
      features: {
        included: [
          "Everything in Classroom",
          "Unlimited students",
          "School-wide analytics",
          "Admin dashboard",
          "Bulk user management",
          "Custom branding",
          "Priority support",
          "Training sessions",
          "Data export",
          "FERPA compliance",
        ],
        excluded: [],
      },
      cta: "Contact Sales",
      highlight: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 299.99,
      annualPrice: 2879.99, // 20% discount
      period: "per month",
      description: "Enterprise solution for school districts",
      popular: false,
      features: {
        included: [
          "Everything in School",
          "Multi-school management",
          "District-wide reporting",
          "Advanced security",
          "SSO integration",
          "Custom integrations",
          "Dedicated support",
          "Professional development",
        ],
        excluded: [],
      },
      cta: "Contact Sales",
      highlight: false,
    },
  ],
}

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes, we offer a 14-day free trial for our Pro plan. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees.",
  },
]

const comparisonFeatures = [
  {
    name: "Number of Quizzes",
    free: "5/month",
    pro: "Unlimited",
    team: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Max Participants per Quiz",
    free: "25",
    pro: "100",
    team: "1,000",
    enterprise: "Unlimited",
  },
  {
    name: "Question Types",
    free: "Basic",
    pro: "All",
    team: "All",
    enterprise: "All",
  },
  {
    name: "Custom Branding",
    free: "✗",
    pro: "✓",
    team: "✓",
    enterprise: "✓",
  },
  {
    name: "Advanced Analytics",
    free: "✗",
    pro: "✓",
    team: "✓",
    enterprise: "✓",
  },
  {
    name: "Team Collaboration",
    free: "✗",
    pro: "✗",
    team: "✓",
    enterprise: "✓",
  },
  {
    name: "API Access",
    free: "✗",
    pro: "✗",
    team: "✗",
    enterprise: "✓",
  },
  {
    name: "SSO Integration",
    free: "✗",
    pro: "✗",
    team: "✗",
    enterprise: "✓",
  },
  {
    name: "Priority Support",
    free: "✗",
    pro: "Email",
    team: "Phone & Chat",
    enterprise: "24/7 Dedicated",
  },
];

export default function PricingPage() {
  const [selectedPlanType, setSelectedPlanType] = useState("Personal")
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  useEffect(() => {
    handlePageLoadScroll()
  }, [])

  const currentPlans = basePlans[selectedPlanType as keyof typeof basePlans] || basePlans.Personal

  const getDisplayPrice = (plan: any) => {
    if (typeof plan.monthlyPrice === "string") return plan.monthlyPrice
    if (plan.monthlyPrice === 0) return "$0"

    const price = billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice
    return `$${price}`
  }

  const getSavings = (plan: any) => {
    if (typeof plan.monthlyPrice === "string" || plan.monthlyPrice === 0) return null
    if (billingPeriod === "annual") {
      const monthlyCost = plan.monthlyPrice * 12
      const annualCost = plan.annualPrice * 12
      const savings = Math.round(((monthlyCost - annualCost) / monthlyCost) * 100)
      return `Save ${savings}%`
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
                Choose a Plan That Works for You
              </motion.h1>
              <motion.p
                className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Select from our range of flexible plans designed to fit your needs. Whether you're a student, teacher,
                professional, or organization, we have the right plan for you.
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
                        className={`px-6 sm:px-8 py-3 rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                          selectedPlanType === type
                            ? "bg-purple-600 text-white shadow-lg border border-purple-600"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {type}
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
                      className={`absolute top-1 bottom-1 left-1 transition-all duration-300 rounded-xl bg-purple-600 z-0 ${
                        billingPeriod === "monthly" ? "translate-x-0 w-[calc(50%-0.5rem)]" : "translate-x-full w-[calc(50%-0.5rem)]"
                      }`}
                      style={{ boxShadow: '0 2px 8px 0 rgba(96,82,204,0.15)' }}
                    />
                    <button
                      onClick={() => setBillingPeriod("monthly")}
                      className={`relative z-10 min-w-0 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap text-center ${
                        billingPeriod === "monthly" ? "text-white" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingPeriod("annual")}
                      className={`relative z-10 min-w-0 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap flex items-center justify-center ${
                        billingPeriod === "annual" ? "text-white" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <span>Annual</span>
                      <span
                        className={`ml-2 text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap ${
                          billingPeriod === "annual" ? "bg-white/20 text-white" : "bg-green-100 text-green-800"
                        }`}
                      >
                        Save 20%
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
                  className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative ${
                    plan.highlight ? "ring-2 ring-purple-600 scale-105" : ""
                  }`}
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
                        <span>Most Popular</span>
                      </span>
                    </motion.div>
                  )}

                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <motion.span
                          className="text-4xl lg:text-5xl font-bold text-gray-900"
                          key={`${plan.name}-${billingPeriod}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {getDisplayPrice(plan)}
                        </motion.span>
                        {plan.period !== "contact us" && plan.period !== "forever" && (
                          <span className="text-gray-600 ml-2">/{plan.period}</span>
                        )}
                        {plan.period === "forever" && <span className="text-gray-600 ml-2">{plan.period}</span>}
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
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.included.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                      {plan.features.excluded.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3 opacity-50"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 0.5, x: 0 }}
                          transition={{ duration: 0.3, delay: (plan.features.included.length + featureIndex) * 0.05 }}
                        >
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                          plan.highlight
                            ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl border border-purple-600"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900 hover:bg-purple-600 hover:text-white border hover:border-purple-600"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">Feature Comparison</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Compare features across all our plans to find the perfect fit for your needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Plan Feature Comparison</h3>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Free</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Pro</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Team</th>
                      <th className="text-center p-6 font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                        <td className="p-6 text-center">
                          {feature.free === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.free === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : ( 
                            <span
                              className={feature.free === "Basic" ? "text-orange-600 font-medium" : "text-gray-900"}
                            >
                              {feature.free}
                            </span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.pro === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.pro === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className={feature.pro === "Email" ? "text-green-600 font-medium" : "text-gray-900"}>
                              {feature.pro}
                            </span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.team === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.team === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span
                              className={
                                feature.team === "Limited"
                                  ? "text-orange-600 font-medium"
                                  : feature.team === "Phone & Chat"
                                    ? "text-green-600 font-medium"
                                    : "text-gray-900"
                              }
                            >
                              {feature.team}
                            </span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {feature.enterprise === "✗" ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : feature.enterprise === "✓" ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span
                              className={
                                feature.enterprise === "Full"
                                  ? "text-green-600 font-medium"
                                  : feature.enterprise === "24/7 Dedicated"
                                    ? "text-green-600 font-medium"
                                    : "text-gray-900"
                              }
                            >
                              {feature.enterprise}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose LivQuiz?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of educators and organizations who trust LivQuiz for their interactive learning needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  title: "Trusted by 50K+ Users",
                  description:
                    "Join educators and trainers worldwide who rely on LivQuiz for engaging learning experiences.",
                },
                {
                  icon: Zap,
                  title: "Easy to Use",
                  description: "Create professional quizzes in minutes with our intuitive drag-and-drop interface.",
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security with 99.9% uptime guarantee and GDPR compliance.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center"
                >
                  <motion.div
                    className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Have questions? We have answers. If you can't find what you're looking for, contact our support team.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">Ready to get started?</h2>
              <p className="text-lg lg:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of educators and trainers who trust LivQuiz. Start your free trial today.
              </p>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  Start Free Trial
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingHelpButton />
    </div>
  )
}
