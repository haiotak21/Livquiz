"use client"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CookiesPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">LivQuiz Cookies Policy</h1>
          <p className="text-gray-600 text-sm mb-8">Effective Date: December 1, 2022<br />Last Updated: December 1, 2022</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 mb-6">Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites function effectively, enhance user experience, and provide insights into how the site is being used.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">At LivQuiz, we use cookies to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Ensure the website functions properly</li>
              <li>Remember your preferences and login sessions</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve user experience and performance</li>
              <li>Enable certain interactive features (like saving your quiz progress)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
              <p className="text-gray-700">These cookies are necessary for the core functionality of the site. Without them, some services may not be available (e.g., secure login, navigation).</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance & Analytics Cookies</h3>
              <p className="text-gray-700">We use these to understand how users interact with our platform (e.g., which pages are visited most often), which helps us improve functionality and performance.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Functionality Cookies</h3>
              <p className="text-gray-700">These cookies allow us to remember your settings and preferences (such as language, display settings, or saved progress).</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Third-Party Cookies</h3>
              <p className="text-gray-700">We may also use third-party services (such as Google Analytics) that place their own cookies to collect anonymous usage data or provide integrated features like social sharing.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-700 mb-6">You can control or disable cookies through your browser settings. However, please note that some parts of LivQuiz may not function properly if you disable cookies.</p>
            
            <p className="text-gray-700 mb-4">Here are links to manage cookies in popular browsers:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><Link href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Chrome</Link></li>
              <li><Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Firefox</Link></li>
              <li><Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Safari</Link></li>
              <li><Link href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Edge</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Updates to This Policy</h2>
            <p className="text-gray-700 mb-6">We may update our Cookies Policy from time to time to reflect changes in technology or legal requirements. When we do, we will revise the "Last Updated" date and notify users where appropriate.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-6">If you have any questions about how we use cookies, please contact us at:</p>
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