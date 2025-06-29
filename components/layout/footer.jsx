"use client"

import { Link, usePathname, useRouter } from '../../lib/navigation'
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter, Languages } from "lucide-react"
import { useNavigation } from "@/utils/navigation"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

const footerSections = [
  {
    titleKey: 'sections.product.title',
    links: [
      { nameKey: 'sections.product.platformEditions', href: 'products#platform-editions' },
      { nameKey: 'sections.product.liveQuizzes', href: 'products#live-quizzes' },
      { nameKey: 'sections.product.examBuilder', href: 'products#exam-builder' },
      { nameKey: 'sections.product.amazingTools', href: 'products#amazing-tools' },
    ],
  },
  {
    titleKey: 'sections.useCases.title',
    links: [
      { nameKey: 'sections.useCases.business', href: 'use-cases#corporate-training' },
      { nameKey: 'sections.useCases.education', href: 'use-cases#education' },
      { nameKey: 'sections.useCases.events', href: 'use-cases#events-conferences' },
      { nameKey: 'sections.useCases.recruitment', href: 'use-cases#recruitment' },
    ],
  },
  {
    titleKey: 'sections.company.title',
    links: [
      { nameKey: 'sections.company.aboutUs', href: 'about' },
      { nameKey: 'sections.company.contact', href: 'contact' },
    ],
  },
  {
    titleKey: 'sections.resources.title',
    links: [
      { nameKey: 'sections.resources.helpCenter', href: 'help' },
      { nameKey: 'sections.resources.howItWorks', href: 'how-it-works' },
      { nameKey: 'sections.resources.blog', href: 'blog' },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/livquiz", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/livquiz", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/livquiz", label: "Twitter" },
]

export default function Footer() {
  const t = useTranslations('Footer')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { navigateToSection } = useNavigation()

  const handleFooterNavClick = (href, e) => {
    e.preventDefault()
    navigateToSection(href)
  }

  const handleLanguageChange = (newLocale) => {
    router.push(pathname, { locale: newLocale })
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-livquiz-2025-13.png"
                alt="LivQuiz Logo"
                width={200}
                height={51}
                className="h-8 lg:h-10 w-auto"
              />
            </Link>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('description')}
            </p>

            {/* Language Selector - only show on md and up */}
            <div className="hidden md:flex items-center gap-2 mb-6">
              <Languages className="w-5 h-5 text-gray-500" />
              <Select defaultValue={locale} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">{t('languages.en')}</SelectItem>
                  <SelectItem value="fr">{t('languages.fr')}</SelectItem>
                  <SelectItem value="es">{t('languages.es')}</SelectItem>
                  {/* Add more languages as needed */}
                </SelectContent>
              </Select>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#6052CC] hover:border-[#6052CC] transition-all duration-200 cursor-pointer"
                  aria-label={social.label || t('social.ariaDefault', { index: index + 1 })}
                >
                  {social.icon ? <social.icon className="w-5 h-5" /> : null}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">{t(section.titleKey)}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={`/${link.href}`}
                      className="text-gray-600 hover:text-[#6052CC] transition-colors duration-200 relative group text-left cursor-pointer"
                    >
                      {t(link.nameKey)}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6052CC] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">{t('copyright')}</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms-conditions" className="text-gray-600 hover:text-[#6052CC] transition-colors cursor-pointer">
                {t('terms')}
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-[#6052CC] transition-colors cursor-pointer">
                {t('privacy')}
              </Link>
              <Link href="/cookies-policy" className="text-gray-600 hover:text-[#6052CC] transition-colors cursor-pointer">
                {t('cookies')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}