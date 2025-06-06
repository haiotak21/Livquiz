"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Menu,
  X,
  Zap,
  BookOpen,
  Users,
  GraduationCap,
  Building2,
  UserCheck,
  Briefcase,
  HelpCircle,
  MessageCircle,
  FileText,
  Newspaper,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { navigateToSection } from "@/utils/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    navigateToSection(href)
    setIsOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const isActivePath = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  const navItems = [
    { name: "Features", href: "/features" },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        {
          name: "Quiz Maker",
          href: "/products#amazing-tools",
          icon: Zap,
          description: "Create engaging quizzes with our intuitive builder",
        },
        {
          name: "Live Quizzes",
          href: "/products#live-quizzes",
          icon: Users,
          description: "Real-time multiplayer quiz sessions",
        },
        {
          name: "Exam Builder",
          href: "/products#exam-builder",
          icon: FileText,
          description: "Professional assessment and testing tools",
        },
      ],
    },
    {
      name: "Use Cases",
      href: "/use-cases",
      dropdown: [
        {
          name: "Business",
          href: "/use-cases#corporate-training",
          icon: Building2,
          description: "Corporate training and team building",
        },
        {
          name: "Education",
          href: "/use-cases#education",
          icon: GraduationCap,
          description: "Classroom learning and student engagement",
        },
        {
          name: "Onboarding",
          href: "/use-cases#events-conferences",
          icon: UserCheck,
          description: "Employee orientation and training",
        },
        {
          name: "Recruitment",
          href: "/use-cases#recruitment",
          icon: Briefcase,
          description: "Candidate assessment and screening",
        },
      ],
    },
    {
      name: "Resources",
      href: "/resources",
      dropdown: [
        {
          name: "Contact Us",
          href: "/contact",
          icon: MessageCircle,
          description: "Get in touch with our support team",
        },
        {
          name: "Help Center",
          href: "/help",
          icon: HelpCircle,
          description: "Find answers and documentation",
        },
        {
          name: "How LivQuiz Works",
          href: "/how-it-works",
          icon: BookOpen,
          description: "Learn about our platform features",
        },
        {
          name: "Blog",
          href: "/blog",
          icon: Newspaper,
          description: "Latest news and educational content",
        },
      ],
    },
    { name: "Pricing", href: "/pricing" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center">
              <Image
                src="/livquiz-logo.png"
                alt="LivQuiz Logo"
                width={160}
                height={40}
                className="h-7 lg:h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name || index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
              >
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`flex items-center text-gray-700 hover:text-[#6052CC] transition-colors duration-200 font-medium group relative outline-none ${isActivePath(item.href) ? 'text-[#6052CC]' : ''}`}>
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                      <span className={`absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#6052CC] group-hover:h-6 transition-all duration-200 rounded-full ${isActivePath(item.href) ? 'h-6' : ''}`}></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 p-2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100">
                      <div className="space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <DropdownMenuItem key={subItem.name || subIndex} className="p-0">
                            <button
                              onClick={(e) => handleNavClick(subItem.href || "#", e)}
                              className={`flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 group w-full text-left ${isActivePath(subItem.href) ? 'bg-gradient-to-r from-purple-50 to-pink-50' : ''}`}
                            >
                              <motion.div
                                className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                {subItem.icon && <subItem.icon className="w-5 h-5 text-[#6052CC]" />}
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <div className={`font-semibold text-gray-900 group-hover:text-[#6052CC] transition-colors text-sm ${isActivePath(subItem.href) ? 'text-[#6052CC]' : ''}`}>
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors mt-1">
                                  {subItem.description}
                                </div>
                              </div>
                              <ChevronDown className="w-4 h-4 text-gray-400 rotate-[-90deg] group-hover:text-[#6052CC] transition-colors flex-shrink-0" />
                            </button>
                          </DropdownMenuItem>
                        ))}
                      </div>

                      {/* Bottom CTA - Only for Products and Use Cases */}
                      {(item.name === "Products" || item.name === "Use Cases") && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <button
                            onClick={(e) => handleNavClick(item.href || "#", e)}
                            className="flex items-center justify-center w-full p-3 bg-gradient-to-r from-[#6052CC] to-purple-600 text-white rounded-xl hover:from-[#4A4093] hover:to-purple-700 transition-all duration-200 font-semibold text-sm border border-[#4A4093]"
                          >
                            View All {item.name} →
                          </button>
                        </div>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button
                    onClick={(e) => handleNavClick(item.href || "#", e)}
                    className={`text-gray-700 hover:text-[#6052CC] transition-colors duration-200 font-medium relative group ${isActivePath(item.href) ? 'text-[#6052CC]' : ''}`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#6052CC] transition-all duration-200 ${isActivePath(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-[#6052CC] hover:bg-purple-50 transition-all duration-200"
            >
              Log In
            </Button>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border border-purple-600">
                Sign Up →
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-100 py-4 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name || index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full font-medium text-gray-900 px-2 hover:text-[#6052CC] transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2 overflow-hidden"
                            >
                              {item.dropdown.map((subItem, subIndex) => (
                                <button
                                  key={subItem.name || subIndex}
                                  onClick={(e) => handleNavClick(subItem.href || "#", e)}
                                  className={`flex items-center space-x-2 text-gray-600 hover:text-[#6052CC] transition-colors py-1 w-full text-left ${isActivePath(subItem.href) ? 'text-[#6052CC]' : ''}`}
                                >
                                  {subItem.icon && <subItem.icon className="w-4 h-4" />}
                                  <span>{subItem.name}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleNavClick(item.href || "#", e)}
                        className={`block text-gray-700 hover:text-[#6052CC] transition-colors py-2 font-medium px-2 w-full text-left ${isActivePath(item.href) ? 'text-[#6052CC]' : ''}`}
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-gray-700">
                    Log In
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border border-purple-600">
                    Sign Up →
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
