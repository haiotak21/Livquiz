import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Users, Play, Zap, Globe } from "lucide-react"
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const stats = [
    { icon: Users, value: "10k+", label: "Active Users" },
    { icon: Play, value: "1M+", label: "Quizzes and Flashcard" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
  ];

  // Get team array from translations
  const team = t.raw('team');

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                  LivQuiz
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We believe learning should be fun, not boring
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're making learning interactive for everyone. No more sleepy classrooms or dull training sessions – just engaging quizzes that keep people awake and help them actually remember what they learn.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-4">
                    <stat.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Team */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('teamSectionTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('teamSectionSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member: any, index: number) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
