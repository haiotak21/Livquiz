"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Bot, User, X, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import './live-chat.css'

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm Quiza, your LivQuiz assistant. How can I help you today?",
    "Hi there! Welcome to LivQuiz. What would you like to know?",
    "Hey! I'm here to help you with any questions about LivQuiz. What can I assist you with?",
  ],
  pricing: [
    "LivQuiz offers flexible pricing plans for Personal ($9/month), Business ($29/month), and School ($19-99/month) users. We also have a free plan to get you started! Would you like to know more about a specific plan?",
    "Our pricing is designed to fit every need. We have free and paid plans starting from $9/month. You can also try our 14-day free trial. What type of user are you - personal, business, or educational?",
  ],
  features: [
    "LivQuiz offers amazing features including: live multiplayer quizzes, advanced analytics, quiz builder, LMS integration, exam builder, and much more! What specific feature interests you?",
    "We have powerful tools like drag-and-drop quiz creation, real-time sessions, detailed analytics, and anti-cheating technology. Which feature would you like to learn more about?",
  ],
  howto: [
    "Creating a quiz is super easy! Just: 1) Sign up for free, 2) Use our drag-and-drop builder, 3) Share with participants, 4) Track results. Want me to guide you through any specific step?",
    "Getting started is simple: Create → Share → Analyze. Our intuitive interface makes quiz creation a breeze. Would you like a demo or have specific questions about the process?",
  ],
  support: [
    "I'm here to help! For technical issues, you can contact our support team at support@livquiz.com or use this chat. For urgent matters, we also offer phone support. What specific issue are you facing?",
    "Our support team is available 24/7. You can reach us through this chat, email, or phone. We also have a comprehensive help center. What kind of assistance do you need?",
  ],
  default: [
    "That's a great question! While I can help with basic information about LivQuiz, for detailed technical questions, I'd recommend contacting our support team or checking our help center. Is there anything else about LivQuiz I can help you with?",
    "I'd be happy to help! Could you please rephrase your question or let me know if you're looking for information about pricing, features, getting started, or something else?",
    "Thanks for your question! For the most accurate information, I'd suggest checking our help center or contacting our support team. In the meantime, is there anything about LivQuiz features or pricing I can help with?",
  ],
}

const getAIResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()

  if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message === "") {
    return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
  }

  if (
    message.includes("price") ||
    message.includes("cost") ||
    message.includes("plan") ||
    message.includes("subscription")
  ) {
    return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)]
  }

  if (
    message.includes("feature") ||
    message.includes("what can") ||
    message.includes("capabilities") ||
    message.includes("function")
  ) {
    return predefinedResponses.features[Math.floor(Math.random() * predefinedResponses.features.length)]
  }

  if (
    message.includes("how") ||
    message.includes("create") ||
    message.includes("start") ||
    message.includes("begin") ||
    message.includes("tutorial")
  ) {
    return predefinedResponses.howto[Math.floor(Math.random() * predefinedResponses.howto.length)]
  }

  if (
    message.includes("help") ||
    message.includes("support") ||
    message.includes("problem") ||
    message.includes("issue") ||
    message.includes("contact")
  ) {
    return predefinedResponses.support[Math.floor(Math.random() * predefinedResponses.support.length)]
  }

  return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
}

const suggestedQuestions = [
  "What are your pricing plans?",
  "How do I create a quiz?",
  "What features does LivQuiz offer?",
  "How do I invite participants?",
  "Can I use LivQuiz for schools?",
  "How do I access analytics?",
  "Is there a free trial?",
  "How do I contact support?",
]

const MAX_DEFAULT_RESPONSES = 2

interface LiveChatProps {
  isOpen: boolean
  onClose: () => void
}

export default function LiveChat({ isOpen, onClose }: LiveChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Quizza, your LivQuiz assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [defaultResponseCount, setDefaultResponseCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSuggestedClick = (question: string) => {
    setInputValue("")
    handleSendMessage(question)
  }

  const handleSendMessage = async (overrideInput?: string) => {
    const messageToSend = overrideInput !== undefined ? overrideInput : inputValue
    if (!messageToSend.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const aiText = getAIResponse(messageToSend)
      const isDefault = predefinedResponses.default.includes(aiText)
      if (isDefault) {
        setDefaultResponseCount((prev) => prev + 1)
      } else {
        setDefaultResponseCount(0)
      }
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiText,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className={`fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 ${
        isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
      } transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-purple-600 text-white rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">LivBot Assistant</h3>
            <p className="text-xs text-white/80">Online now</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-80 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {message.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-purple-600 text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-purple-200" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Escalation to Agent */}
          {defaultResponseCount >= MAX_DEFAULT_RESPONSES && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl mb-2 text-center">
              <p className="text-yellow-800 mb-2 font-medium">
                It looks like you need more help. Would you like to chat with a human agent?
              </p>
              <Link href="/contact">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6 py-2">
                  Contact a Human Agent
                </Button>
              </Link>
            </div>
          )}

          {/* Suggested Questions */}
          <div className="px-4 pb-2">
            <div
              className="w-full overflow-x-auto mb-2 hide-scrollbar"
              style={{ WebkitOverflowScrolling: "touch" }}
              tabIndex={0}
            >
              <div className="flex flex-nowrap gap-2 min-w-0">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap shadow-sm border border-purple-200"
                    onClick={() => handleSuggestedClick(q)}
                    disabled={isTyping}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 rounded-full border-gray-200 focus:border-purple-500"
                disabled={isTyping}
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  )
}
