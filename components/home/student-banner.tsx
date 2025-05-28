"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

const StudentBanner = () => {
  return (
    <section className="bg-[#FFF4F6] py-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-9 lg:px-11 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:space-x-7 py-8">
        {/* Text content */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full md:w-1/2 flex flex-col items-start space-y-4"
        >
          {/* For Students label */}
          <SectionHeading>For Students</SectionHeading>

          {/* Heading */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            className="text-2xl lg:text-4xl font-semibold leading-snug"
          >
            Studying With Livquiz Is <span className="font-bold">Enjoyable And Engaging.</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="text-base md:text-lg text-gray-700"
          >
            LivQuiz allows students to interact with the content they are learning in a fun and engaging way, which aids
            in their ability to recall and comprehend the concepts and facts.
          </motion.p>
        </motion.div>

        {/* Image container */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="relative w-full md:w-1/2 h-auto flex justify-center ml-4"
        >
          {/* Overlay Image (Upper Image) */}
          <div className="absolute z-20 right-10 -top-10 md:left-[60px] md:bottom-12 lg:left-64 lg:bottom-20">
            <Image
              src="/placeholder.svg?height=150&width=300"
              alt="Quiz in progress"
              className="w-48 md:w-64 lg:w-72"
              width={300}
              height={150}
            />
          </div>

          <div className="relative z-10 -left-10">
            <Image
              src="/placeholder.svg?height=150&width=320"
              alt="Student interacting with quiz"
              className="w-60 md:w-72 lg:w-full"
              width={320}
              height={150}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudentBanner
