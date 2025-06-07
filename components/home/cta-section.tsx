"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
  },
}

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Floating Images */}
            <div className="hidden lg:block flex-shrink-0">
              <motion.div animate={floatAnimation} className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1665979738279-bd2441290e02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV4YW18ZW58MHx8MHx8fDA%3D"
                  alt="Floating element"
                  width={150}
                  height={200}
                  className="drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                  Let&apos;s Build Your{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                    First Quiz
                  </span>
                </h2>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Join millions of educators, trainers, and learners who trust LivQuiz to make learning interactive and
                  engaging.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://livquiz.com/auth/sign-up">
                    <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pruple-600 hover:from-purple-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg group">
                      Start For Free
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://livquiz.com/auth/sign-up">
                    <Button
                      variant="outline"
                      className="px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-2xl transition-all duration-200 text-lg"
                    >
                      Schedule Demo
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Setup in 2 minutes</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Images */}
            <div className="hidden lg:block flex-shrink-0">
              <motion.div
                animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
                className="relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhhbXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Floating element"
                  width={200}
                  height={200}
                  className="drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Floating Images */}
          <div className="lg:hidden flex justify-between mt-12 px-4">
            <motion.div animate={floatAnimation} className="w-24 h-24">
              <Image
                src="https://images.unsplash.com/photo-1665979738279-bd2441290e02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV4YW18ZW58MHx8MHx8fDA%3D"
                alt="Floating element"
                width={100}
                height={100}
                className="drop-shadow-lg"
              />
             </motion.div>
                 <motion.div
              animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
              className="w-28 h-28"
            >
             <Image
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhhbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Floating element"
                width={120}
                height={120}
                className="drop-shadow-lg"
              />   
            </motion.div> 
          </div>*
        </div>
      </div>
    </section>
  )
}
