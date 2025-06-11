import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface StickyButtonsFooterProps {
  setShowQuizInput: (show: boolean) => void;
}

export default function StickyButtonsFooter({ setShowQuizInput }: StickyButtonsFooterProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Adjust scroll threshold as needed
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-50 flex flex-row gap-4 justify-center items-center md:hidden"
    >
      <div className="flex flex-row gap-2 flex-grow">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
          <Button
            onClick={() => setShowQuizInput(true)}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base"
          >
            Join
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
          <Link href="https://livquiz.com/auth/sign-up">
            <Button
              className="w-full py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base"
            >
              Signup
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
} 