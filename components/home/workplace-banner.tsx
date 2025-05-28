"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

// Floating animation for the arrow image
const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
  },
}

const WorkplaceBanner = () => {
  return (
    <section className="relative container max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center px-2 py-8 md:p-1 md:my-5 md:px-2 lg:px-0">
      {/* Floating arrow image */}
      <motion.div animate={floatAnimation} className="lg:block absolute left-24 -top-8 hidden 2xl:top-0 xxl:-top-8">
        <Image src="/placeholder.svg?height=100&width=200" alt="workplace-arrow" width={200} height={100} />
      </motion.div>

      {/* Flip-left animation for the workplace image */}
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="relative w-full md:w-1/2 mb-3"
      >
        <Image
          src="/placeholder.svg?height=384&width=600"
          alt="workplace-image"
          width={600}
          height={384}
          className="w-full h-auto md:h-96 object-contain"
        />
      </motion.div>

      {/* Zoom-in-right animation for the right container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: 20 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        className="flex flex-col justify-center md:w-1/2 gap-y-4 lg:gap-y-4 md:gap-y-1 lg:px-0 mx-4 md:mx-0"
      >
        <SectionHeading>For Workplace</SectionHeading>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight lg:w-[550px]">
          Experience Improved Corporate Training With Livquiz
        </h2>
        <p className="text-base md:text-lg opacity-80 lg:mt-3 lg:w-[550px]">
          LivQuiz helps organizations improve their training programs with interactive quizzes, customized feedback, and
          powerful analytics that enhance learning, engagement, and productivity.
        </p>
      </motion.div>
    </section>
  )
}

export default WorkplaceBanner
