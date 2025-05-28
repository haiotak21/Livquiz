"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react"
import { useState } from "react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Reach out anytime via email and get a response within 24 hours.",
    contact: "support@livquiz.com",
    availability: "24/7 response",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team during business hours.",
    contact: "+251 996916442",
    availability: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Start chatting with a specialist now!",
    contact: "Start chat",
    availability: "24/7 available",
  },
]

const offices = [
  {
    city: "Canada",
    address: "Toronto, CA 94105",
    phone: "+251 996916442",
    email: "Canada@livquiz.com",
  },
  {
    city: "New York",
    address: "New, New York, 10001",
    phone: "+251 996916442",
    email: "Newyork@livquiz.com",
  },
  {
    city: "Ethiopia",
    address: "Addis ababa, Mexico",
    phone: "+251 996916442",
    email: "Ethiopia@livquiz.com",
  },
]

export default function ContactPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Get in Touch with LivQuiz
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have questions? Need assistance getting started? Our dedicated support team is here to guide you every step of the way.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-purple-600 font-semibold mb-2">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.availability}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <Input placeholder="Haile" className="rounded-xl border-gray-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <Input placeholder="Takele" className="rounded-xl border-gray-200" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="haiotak21@gmail.com" className="rounded-xl border-gray-200" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <Input placeholder="Your Company" className="rounded-xl border-gray-200" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <Input placeholder="How can we help you?" className="rounded-xl border-gray-200" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <Textarea
                      placeholder="Your message..."
                      className="w-full h-32 resize-none rounded-xl border-gray-200 focus:border-purple-500"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl text-lg font-semibold"
                    disabled={!message.trim()}
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose LivQuiz?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Trusted by 50,000+ educators worldwide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">24/7 customer support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Global presence in 150+ countries</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-gray-900 mb-2">{office.city}</h4>
                        <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                        <p className="text-gray-600 text-sm mb-1">{office.phone}</p>
                        <p className="text-purple-600 text-sm">{office.email}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-600 p-8 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Need immediate assistance?</h3>
                  <p className="mb-6 text-purple-100">
                    Our support team is available 24/7 to help you with any questions or technical issues.
                  </p>
                  <Button
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 rounded-xl font-semibold"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-live-chat'))}
                  >
                    Start Live Chat
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
