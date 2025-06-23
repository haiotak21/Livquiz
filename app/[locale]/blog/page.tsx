"use client";

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

const blogPosts = [
  {
    titleKey: "post1Title",
    excerptKey: "post1Excerpt",
    author: "Haile Takele",
    date: "March 15, 2024",
    image: "https://i.pinimg.com/736x/8f/09/d0/8f09d08149477f8268e61886b1092c0f.jpg",
    categoryKey: "categoryTips",
  },
  {
    titleKey: "post2Title",
    excerptKey: "post2Excerpt",
    author: "Haile Takele",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryKey: "categoryIndustry",
  },
  {
    titleKey: "post3Title",
    excerptKey: "post3Excerpt",
    author: "Haile Takele",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryKey: "categoryCaseStudy",
  },
  {
    titleKey: "post4Title",
    excerptKey: "post4Excerpt",
    author: "Haile Takele",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryKey: "categoryBestPractices",
  },
]

export default function BlogPage() {
  const t = useTranslations('BlogPage')
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('title')}{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">{t('titleHighlight')}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <img src={post.image || "/placeholder.svg"} alt={t(post.titleKey)} className="w-full h-48 object-cover" />
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {t(post.categoryKey)}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                      <a href="#">{t(post.titleKey)}</a>
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">{t(post.excerptKey)}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>

                      <a
                        href="https://livquiz.com/auth/sign-up"
                        className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold"
                      >
                        <span>{t('tryNow')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 