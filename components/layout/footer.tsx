"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import { navigateToSection } from "@/utils/navigation"

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Platform Editions", href: "/products#platform-editions" },
      { name: "Live Quizzes", href: "/products#live-quizzes" },
      { name: "Exam Builder", href: "/products#exam-builder" },
      { name: "Amazing Tools", href: "/products#amazing-tools" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { name: "Business", href: "/use-cases#corporate-training" },
      { name: "Education", href: "/use-cases#education" },
      { name: "Events", href: "/use-cases#events-conferences" },
      { name: "Recruitment", href: "/use-cases#recruitment" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "How LivQuiz Works", href: "/how-it-works" },
      { name: "Blog", href: "/blog" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/livquiz", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/livquiz", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/livquiz", label: "Twitter" },
]

export default function Footer() {
  const handleFooterNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    navigateToSection(href)
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
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
                src="/livquiz-logo.png"
                alt="LivQuiz Logo"
                width={200}
                height={51}
                className="h-8 lg:h-10 w-auto"
              />
            </Link>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
            Your AI-Powered Platform for Collaborative Learning.
            </p>

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
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#6052CC] hover:border-[#6052CC] transition-all duration-200"
                  aria-label={social.label || `Social link ${index + 1}`}
                >
                  {social.icon ? <social.icon className="w-5 h-5" /> : null}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={(e) => handleFooterNavClick(link.href || "#", e)}
                      className="text-gray-600 hover:text-[#6052CC] transition-colors duration-200 relative group text-left"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6052CC] transition-all duration-200 group-hover:w-full"></span>
                    </button>
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
            <p className="text-gray-600 text-sm">© 2025 LivQuiz. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms-conditions" className="text-gray-600 hover:text-[#6052CC] transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-[#6052CC] transition-colors">
                Privacy
              </Link>
              <Link href="/cookies-policy" className="text-gray-600 hover:text-[#6052CC] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
