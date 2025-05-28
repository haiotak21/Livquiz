"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, X, MessageCircle, Book, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LiveChat from "./live-chat"

const helpOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our AI assistant",
    action: "Start Chat",
    onClick: "startLiveChat",
  },
  {
    icon: Book,
    title: "Help Center",
    description: "Browse our comprehensive guides",
    action: "View Guides",
    href: "/help",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description: "Reach out via email or phone",
    action: "Get in Touch",
    href: "/contact",
  },
]

interface FloatingHelpButtonProps {
  showOnPage?: boolean
}

export default function FloatingHelpButton({ showOnPage = true }: FloatingHelpButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleLiveChat = () => {
    setIsChatOpen(true)
    setIsOpen(false)
  }

  useEffect(() => {
    const openChat = () => setIsChatOpen(true)
    window.addEventListener('open-live-chat', openChat)
    return () => window.removeEventListener('open-live-chat', openChat)
  }, [])

  if (!showOnPage) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">How can we help?</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="space-y-3">
                {helpOptions.map((option, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    {option.onClick === "startLiveChat" ? (
                      <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-live-chat'))}
                        className="w-full p-3 text-left rounded-xl hover:bg-purple-50 transition-colors border border-gray-100 hover:border-[#6052CC]"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <option.icon className="w-4 h-4 text-[#6052CC]" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm">{option.title}</div>
                            <div className="text-gray-600 text-xs">{option.description}</div>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <Link
                        href={option.href || "#"}
                        onClick={() => setIsOpen(false)}
                        className="block w-full p-3 text-left rounded-xl hover:bg-purple-50 transition-colors border border-gray-100 hover:border-[#6052CC]"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <option.icon className="w-4 h-4 text-[#6052CC]" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm">{option.title}</div>
                            <div className="text-gray-600 text-xs">{option.description}</div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl border border-purple-600">
                  <Link href="/help">View All Help Options</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Help Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group border border-purple-600"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="help"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HelpCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-[#6052CC] animate-ping opacity-20"></div>
        </motion.button>
      </div>

      {/* Live Chat Component */}
      <LiveChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}
