"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function Events() {
  return (
    <section className="bg-pink-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row px-4 pb-6 mb-14 space-y-10">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative flex flex-col 2xl:ml-28 2xl:mt-16 mt-3 gap-y-2 md:top-14 w-full md:pl-4 pt-5"
        >
          <SectionHeading>For Events</SectionHeading>

          <h2 className="lg:text-3xl text-xl lg:mt-2 w-full">
            Engage, Compete, Collaborate with
            <span className="font-bold"> Live Quizzes & Polls</span>
          </h2>
          <p className="lg:mt-1 opacity-80 md:text-lg text-base">
            Plan fun events by getting feedback. Collect information and plan the event by getting more results via
            gamified quizzes and polls.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="2xl:min-w-[620px] md:min-w-[50%]"
        >
          <Image src="/placeholder.svg?height=400&width=620" alt="event-image" width={620} height={400} />
        </motion.div>
      </div>
    </section>
  )
}
