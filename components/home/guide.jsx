 "use client"

import Image from "next/image"
import { motion } from "framer-motion"

const guide = [
  {
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Create Your Quiz",
    paragraph:
      "Design engaging quizzes with our intuitive quiz builder. Add questions, set timers, and customize your content.",
    bgColor: "bg-indigo-100/80",
    imageStyles: "mx-auto w-[70%]",
  },
  {
    image: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Share & Engage",
    paragraph: "Share your quiz with students or colleagues. Host live sessions or let them take it at their own pace.",
    bgColor: "bg-pink-100",
    imageStyles: "mx-auto w-[85%] mt-[-20px]",
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Different image for variety
    heading: "Track Progress",
    paragraph:
      "Monitor performance with detailed analytics. Get insights into learning patterns and areas for improvement.",
    bgColor: "bg-orange-100",
    imageStyles: "mx-auto w-[100%] md:w-[100%] mt-[10px] md:mt-[10px]",
  },
]

export default function Guide() {
  return (
    <section className="container max-w-7xl mx-auto flex flex-col px-2 md:px-4 py-10 pt-12 lg:pb-20" id="guide">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex flex-col max-w-4xl m-auto gap-y-2 px-5 lg:px-0"
      >
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl lg:tracking-wider tracking-wide text-center">
          How does LivQuiz work?
        </h1>
        <p className="text-center mx-auto md:text-lg opacity-90 mb-8 text-base md:max-w-[80%]">
          LivQuiz is a great way to create and take quizzes. It is easy to use and it offers a variety of features that
          make it a valuable tool for education, entertainment, and marketing.
        </p>
      </motion.div>

      <div className="flex md:flex-row flex-col mx-10 md:mx-4 lg:mx-10 md:gap-x-2 gap-y-8 md:-mt-5 xl:mt-4 xl:mx-16 2xl:mx-40">
        {guide.map((item, index) => {
          let animation = {}
          if (index === 0) animation = { x: -20 }
          if (index === 1) animation = { y: 20 }
          if (index === 2) animation = { x: 20 }

          return (
            <div key={index} className="flex-1">
              <motion.div
                initial={{ opacity: 0, ...animation }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className={`relative p-6 2xl:p-4 ${item.bgColor} rounded-xl h-[108%] md:h-[90%] lg:h-[108%] 2xl:w-[20vw] lg:w-[92%] lg:mx-auto md:w-[100%] md:gap-x-4 lg:-right-5 2xl:m-0`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="guide-image"
                  width={200}
                  height={200}
                  className={item.imageStyles}
                />
                <h2 className="relative text-center my-8 text-2xl font-bold opacity-85 tracking-wide md:text-xl md:-top-6 lg:top-6">
                  {item.heading}
                </h2>
                <p className="relative text-md md:text-lg lg:text-xl w-[90%] mx-auto text-center lg:text-center opacity-80 md:text-[17px] md:-top-8 md:w-[100%] lg:top-4 md:pb-3 lg:pb-0 md:px-1 -mt-5">
                  {item.paragraph}
                </p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}