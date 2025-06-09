import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "10 Tips for Creating Engaging Quizzes",
    excerpt: "Learn how to create quizzes that captivate your audience and improve learning outcomes.",
    author: "Haile Takele",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1627392449335-f0f44bf536fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    category: "Tips & Tricks",
  },
  {
    title: "The Future of Interactive Learning",
    excerpt: "Explore how technology is transforming education and what it means for educators.",
    author: "Haile Takele",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1610333248098-eef6d6ff4b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    category: "Industry Insights",
  },
  {
    title: "Case Study: How XYZ Corp Improved Training",
    excerpt: "See how one company used LivQuiz to transform their employee training program.",
    author: "Haile Takele",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1516515429572-bf32372f2409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    category: "Case Studies",
  },
  {
    title: "Best Practices for Live Quiz Sessions",
    excerpt: "Master the art of hosting engaging live quiz sessions that keep participants engaged.",
    author: "Haile Takele",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1616451466972-60b201a0c717?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHN1cGVyJTIwY2FyfGVufDB8fDB8fHww",
    category: "Best Practices",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, tips, and stories from the world of interactive learning and education technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                      <a href="#">{post.title}</a>
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold"
                      >
                        <span>Read More</span>
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
