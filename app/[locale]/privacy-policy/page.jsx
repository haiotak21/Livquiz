 "use client"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicyPage')
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t('title', { default: 'Privacy Policy' })}</h1>
          <p className="text-gray-600 text-sm mb-8">{t('updated', { default: 'Updated: October 15, 2023' })}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('principlesTitle', { default: 'Respecting your privacy is critically important to achieving our mission of motivating every student. These are our guiding privacy principles:' })}</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            {t.raw('principlesList', { default: [] }).map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <p className="text-gray-700 mb-8">{t('intro')}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('studentsTitle')}</h2>
          <p className="text-gray-700 mb-6">{t('studentsText')}</p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            {t.raw('studentsList', { default: [] }).map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('parentsTitle')}</h2>
          <p className="text-gray-700 mb-6">{t('parentsText')}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('collectTitle')}</h2>
          <p className="text-gray-700 mb-6">{t('collectText')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('collectProvideTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('collectProvideText')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('collectAutoTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('collectAutoText')}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('useTitle')}</h2>
          <p className="text-gray-700 mb-6">{t('useText')}</p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            {t.raw('useList', { default: [] }).map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <p className="text-gray-700 mb-6">{t('useText2')}</p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            {t.raw('useList2', { default: [] }).map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('commTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('commText')}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('shareTitle')}</h2>
          <p className="text-gray-700 mb-6">{t('shareText')}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('manageTitle')}</h2>
          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('rightsTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('rightsText')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('manageUseTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('manageUseText')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('retentionTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('retentionText')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('securityTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('securityText')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('contactTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('contactText')}</p>
          <p className="text-gray-700 mb-2">{t('contactCompany')}</p>
          <p className="text-gray-700 mb-2">{t('contactAddress1')}</p>
          <p className="text-gray-700 mb-2">{t('contactAddress2')}</p>
          <p className="text-gray-700 mb-2">{t('contactOfficer')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('changesTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('changesText')}</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}