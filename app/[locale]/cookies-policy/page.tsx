"use client"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function CookiesPolicyPage() {
  const t = useTranslations('CookiesPolicyPage');
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t('title', { default: 'LivQuiz Cookies Policy' })}</h1>
          <p className="text-gray-600 text-sm mb-8">{t('effectiveDate', { default: 'Effective Date: December 1, 2022' })}<br />{t('lastUpdated', { default: 'Last Updated: December 1, 2022' })}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('whatAreCookiesTitle', { default: '1. What Are Cookies?' })}</h2>
            <p className="text-gray-700 mb-6">{t('whatAreCookiesText', { default: 'Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites function effectively, enhance user experience, and provide insights into how the site is being used.' })}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('howWeUseCookiesTitle', { default: '2. How We Use Cookies' })}</h2>
            <p className="text-gray-700 mb-4">{t('howWeUseCookiesText', { default: 'At LivQuiz, we use cookies to:' })}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {(t.raw('howWeUseCookiesList', { default: [] }) as string[]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('typesOfCookiesTitle', { default: '3. Types of Cookies We Use' })}</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('essentialCookiesTitle', { default: 'Essential Cookies' })}</h3>
              <p className="text-gray-700">{t('essentialCookiesText', { default: 'These cookies are necessary for the core functionality of the site. Without them, some services may not be available (e.g., secure login, navigation).' })}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('performanceCookiesTitle', { default: 'Performance & Analytics Cookies' })}</h3>
              <p className="text-gray-700">{t('performanceCookiesText', { default: 'We use these to understand how users interact with our platform (e.g., which pages are visited most often), which helps us improve functionality and performance.' })}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('functionalityCookiesTitle', { default: 'Functionality Cookies' })}</h3>
              <p className="text-gray-700">{t('functionalityCookiesText', { default: 'These cookies allow us to remember your settings and preferences (such as language, display settings, or saved progress).' })}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('thirdPartyCookiesTitle', { default: 'Third-Party Cookies' })}</h3>
              <p className="text-gray-700">{t('thirdPartyCookiesText', { default: 'We may also use third-party services (such as Google Analytics) that place their own cookies to collect anonymous usage data or provide integrated features like social sharing.' })}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('managingCookiesTitle', { default: '4. Managing Cookies' })}</h2>
            <p className="text-gray-700 mb-6">{t('managingCookiesText', { default: 'You can control or disable cookies through your browser settings. However, please note that some parts of LivQuiz may not function properly if you disable cookies.' })}</p>
            <p className="text-gray-700 mb-4">{t('manageCookiesLinksTitle', { default: 'Here are links to manage cookies in popular browsers:' })}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {(t.raw('manageCookiesLinks', { default: [] }) as { label: string, url: string }[]).map((item, idx) => <li key={idx}><Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{item.label}</Link></li>)}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('updatesTitle', { default: '5. Updates to This Policy' })}</h2>
            <p className="text-gray-700 mb-6">{t('updatesText', { default: 'We may update our Cookies Policy from time to time to reflect changes in technology or legal requirements. When we do, we will revise the "Last Updated" date and notify users where appropriate.' })}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('contactUsTitle', { default: '6. Contact Us' })}</h2>
            <p className="text-gray-700 mb-6">{t('contactUsText', { default: 'If you have any questions about how we use cookies, please contact us at:' })}</p>
            <p className="text-gray-700">
              <span className="mr-2">📧</span>
              <a href="mailto:support@livquiz.com" className="text-blue-600 hover:text-blue-800">support@livquiz.com</a>
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 