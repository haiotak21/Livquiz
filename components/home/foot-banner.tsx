"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
  },
}

export default function FootBanner() {
  return (
    <>
      {/* Desktop View */}
      <section className="mt-20 bg-pink-50 pb-20 justify-between hidden lg:flex">
        {/* Left Image (floating) */}
        <motion.div animate={floatAnimation} className="w-[15%]">
          <Image src="/placeholder.svg?height=200&width=150" alt="banner" width={150} height={200} />
        </motion.div>

        {/* Text and Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-40 max-w-2/4 flex flex-col gap-y-3"
        >
          <p className="text-4xl font-bold text-center">Let&apos;s get ready to build your first quiz</p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="max-w-full mx-auto mt-4"
          >
            <Link href="https://livquiz.com/auth/sign-up">
              <Button className="py-3 text-white font-bold bg-purple-600 rounded-full border-r-4 border-r-purple-800 border-b-4 border-b-purple-800 border border-purple-800 hover:bg-purple-700 w-44 tracking-wide">
                Let&apos;s Start For Free
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image (floating) */}
        <motion.div animate={floatAnimation} className="min-w-[20%]">
          <Image src="/placeholder.svg?height=200&width=200" alt="banner" width={200} height={200} />
        </motion.div>
      </section>

      {/* Mobile View */}
      <section className="mt-20 bg-pink-50 pb-20 justify-between block lg:hidden">
        <div className="flex justify-between">
          <motion.div animate={floatAnimation} className="w-[25%] relative -top-8">
            <Image src="/placeholder.svg?height=100&width=100" alt="banner" width={100} height={100} />
          </motion.div>
          <motion.div animate={floatAnimation} className="w-[30%] relative top-8">
            <Image src="/placeholder.svg?height=100&width=120" alt="banner" width={120} height={100} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="max-w-2/4 flex flex-col gap-y-3 mx-1 relative -top-14"
        >
          <p className="text-2xl font-bold text-center">Let&apos;s get ready to build your first quiz</p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="max-w-full mx-auto mt-4"
          >
            <Link href="https://livquiz.com/auth/sign-up">
              <motion.button
                className="py-3 text-white font-bold bg-purple-600 rounded-full border-r-4 border-r-purple-800 border-b-4 border-b-purple-800 border border-purple-800 hover:bg-purple-700 w-44 tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Start For Free
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
