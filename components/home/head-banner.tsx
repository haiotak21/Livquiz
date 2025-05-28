"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SearchBar from "./search-bar"

const HeadBanner = () => {
  return (
    <>
      <section className="container max-w-7xl mx-auto mt-8 lg:mt-0 px-4 lg:px-0 overflow-hidden">
        {/* Header - fade up */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-2xl font-bold text-center capitalize mb-3 md:text-4xl xl:text-5xl xl:leading-[60px] mx-auto leading-tight md:w-[90%] lg:w-[70%] 2xl:w-[60%]"
        >
          The Ultimate Tool For Fun And Effective Learning
        </motion.h1>

        {/* Paragraph - fade right */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center opacity-90 max-w-full md:max-w-[70%] mx-auto text-base md:text-lg"
        >
          LivQuiz makes learning engaging, collaborative, and impactful. Whether you're a student, educator, or
          professional, create, play, or host quizzes in real time — on any device.
        </motion.p>

        {/* Search Bar - fade left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-4"
        >
          <SearchBar>Play!</SearchBar>
        </motion.div>

        {/* Image - fade up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-8 lg:mt-2"
        >
          {/* Mobile Image */}
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="head-banner"
            width={600}
            height={400}
            priority
            className="md:hidden block mx-auto w-full"
          />
          {/* Desktop Image */}
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="head-banner"
            width={1200}
            height={600}
            priority
            className="hidden md:block mx-auto w-full"
          />
        </motion.div>

        {/* Second Header - fade up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mx-auto text-center mt-10"
        >
          <h2 className="text-2xl font-bold capitalize mb-3 lg:mb-6 lg:text-4xl">
            The smart way to learn with proven results
          </h2>
        </motion.div>

        {/* Second Paragraph - fade right */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center opacity-90 mb-8 md:max-w-[77%] lg:max-w-[65%] text-base md:text-lg mx-auto"
        >
          Whether you&apos;re lesson planning at school or tackling questions at home, LivQuiz evidence-based tools help
          you make learning fun and effective for tailored kids.
        </motion.p>
      </section>
    </>
  )
}

export default HeadBanner
