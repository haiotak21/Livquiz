"use client"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { motion } from "framer-motion"

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">LivQuiz Terms & Conditions</h1>
          <p className="text-gray-600 text-sm mb-8">Effective date: December 1st, 2022; Last updated: December 1st, 2022</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conditions of use</h2>
          <p className="text-gray-700 mb-6">By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly LivQuiz only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy policy</h2>
          <p className="text-gray-700 mb-6">Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Age restriction</h2>
          <p className="text-gray-700 mb-6">You must be at least 18 (eighteen) years of age before you can use this website as a registered quiz maker. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. LivQuiz assumes no responsibility for liabilities related to age misrepresentation.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conditions of use</h2>
          <p className="text-gray-700 mb-6">By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. LivQuiz only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual property</h2>
          <p className="text-gray-700 mb-6">You agree that all materials, products, and services provided on this website are the property of LivQuiz, its affiliates, directors, officers, employees, agents, suppliers, or licensors, including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute LivQuiz's intellectual property in any way, including electronic, digital, or new trademark registrations.</p>
          <p className="text-gray-700 mb-6">You grant LivQuiz a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company to come to an agreement.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">User accounts</h2>
          <p className="text-gray-700 mb-6">As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password. If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly. We reserve all rights to terminate accounts, edit or remove content, and cancel orders at our sole discretion.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Applicable law</h2>
          <p className="text-gray-700 mb-6">By visiting this website, you agree that the laws of the United States of America, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between LivQuiz and you, or its business partners and associates.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Disputes</h2>
          <p className="text-gray-700 mb-6">Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court in the United States of America, and you consent to the exclusive jurisdiction and venue of such courts.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Indemnification</h2>
          <p className="text-gray-700 mb-6">You agree to indemnify LivQuiz and its affiliates and hold LivQuiz harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation on liability</h2>
          <p className="text-gray-700 mb-6">LivQuiz is not liable for any damages that may occur to you as a result of your misuse of our website.</p>
          <p className="text-gray-700 mb-6">LivQuiz reserves the right to edit, modify, and change this Agreement at any time. We shall notify our users of these changes through electronic mail. This Agreement is an understanding between LivQuiz and the user, and it supersedes and replaces all prior agreements regarding the use of this website.</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 