"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, MessageCircle, Video, FileText } from "lucide-react"
import Link from "next/link"
import { openChat } from "@/utils/chat"
import { useTranslations } from "next-intl"

const categoryIcons = [BookOpen, Video, MessageCircle, FileText]

export default function HelpPage() {
  const t = useTranslations('HelpPage')
  const categories = t.raw('categories') as Array<{ title: string; description: string; articles: string }>
  const popularArticles = t.raw('popularArticles') as string[]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('title')}{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                  {/* Optionally style part of the title if needed */}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('subtitle')}
              </p>
              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    className="pl-12 pr-4 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 text-lg"
                  />
                </div>
              </div>
            </div>
            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {categories.map((category, index) => {
                const Icon = categoryIcons[index]
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <p className="text-sm text-purple-600 font-semibold">{category.articles.replace('{count}', String(category.articles.match(/\d+/)?.[0] || ''))}</p>
                  </div>
                )
              })}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Popular Articles */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('popularArticlesTitle')}</h2>
                <ul className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 transition-colors"
                      >
                        <FileText className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700 hover:text-purple-600">{article}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Contact Support */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contactSupportTitle')}</h2>
                <p className="text-gray-600 mb-6">
                  {t('contactSupportDesc')}
                </p>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2"
                    onClick={openChat}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t('startLiveChat')}</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 rounded-xl font-semibold"
                    asChild
                  >
                    <Link href="/contact">{t('contactSupportButton')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 