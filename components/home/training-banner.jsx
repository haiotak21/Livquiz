"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

// Motion Variants for Animation
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", delayChildren: 0.5, staggerChildren: 0.5 },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } },
}

export default function TrainingBanner() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-7xl px-4 lg:px-4 md:px-4 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-6 md:gap-0 lg:gap-14 pb-14 lg:mt-14">
        {/* Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col items-start gap-y-4 lg:gap-y-4 md:gap-y-2 ml-2"
        >
          {/* For Training label */}
          <SectionHeading>For Training</SectionHeading>

          {/* Heading */}
          <motion.h2 className="text-2xl lg:text-4xl font-semibold leading-snug">
            Engage remote <span className="font-bold">Employees</span> and retain users.
          </motion.h2>

          {/* Paragraph */}
          <motion.p className="text-base md:text-lg text-gray-700">
            LivQuiz is easy to use and can be customized to your specific needs. It's a great way to keep your
            employees engaged and learning, even when they're not in the office. Try LivQuiz today and see the
            difference!
          </motion.p>
        </motion.div>

        {/* Image container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 h-auto flex justify-center"
        >
          {/* Image */}
          <Image
            src="/images/training-screen.png"
            alt="Training screen capture"
            className="w-60 md:w-96 lg:w-full"
            width={600}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  )
}