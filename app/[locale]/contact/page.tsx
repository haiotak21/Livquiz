"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import { useState } from "react";
import { openChat } from "@/utils/chat";
import { useTranslations } from "next-intl";

const contactMethods = [
  {
    icon: Mail,
    titleKey: "contactMethodEmailTitle",
    descriptionKey: "contactMethodEmailDesc",
    contact: "info@livquiz.com",
    availabilityKey: "contactMethodEmailAvailability",
  },
  {
    icon: Phone,
    titleKey: "contactMethodPhoneTitle",
    descriptionKey: "contactMethodPhoneDesc",
    contact: "‪+1 416 827 0711‬",
    availabilityKey: "contactMethodPhoneAvailability",
  },
  {
    icon: MessageCircle,
    titleKey: "contactMethodChatTitle",
    descriptionKey: "contactMethodChatDesc",
    contact: "contactMethodChatButton",
    availabilityKey: "contactMethodChatAvailability",
  },
];

const offices = [
  {
    cityKey: "officeCanadaCity",
    addressKey: "officeCanadaAddress",
    phone: "+1 416 827 0711",
    email: "info@livquiz.com",
  },
  {
    cityKey: "officeCameroonCity",
    addressKey: "officeCameroonAddress",
    phone: "+237 94 53 63 19",
    email: "info@livquiz.com",
  },
  {
    cityKey: "officeEthiopiaCity",
    addressKey: "officeEthiopiaAddress",
    phone: "+251 996916442",
    email: "info@livquiz.com",
  },
];

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [message, setMessage] = useState("");

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
                {t("heroTitle")}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("heroSubtitle")}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(method.titleKey)}</h3>
                  <p className="text-gray-600 mb-4">{t(method.descriptionKey)}</p>
                  {method.titleKey === "contactMethodChatTitle" ? (
                    <Button
                      variant="link"
                      className="text-purple-600 font-semibold mb-2 p-0"
                      onClick={openChat}
                    >
                      {t(method.contact)}
                    </Button>
                  ) : (
                    <p className="text-purple-600 font-semibold mb-2">{method.contact}</p>
                  )}
                  <p className="text-sm text-gray-500">{t(method.availabilityKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24 bg-gray-50" id="send-message">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("contactFormTitle")}</h2>
                <p className="text-gray-600 mb-8">
                  {t("contactFormSubtitle")}
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t("firstNameLabel")}</label>
                      <Input placeholder={t("firstNamePlaceholder")} className="rounded-xl border-gray-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t("lastNameLabel")}</label>
                      <Input placeholder={t("lastNamePlaceholder")} className="rounded-xl border-gray-200" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t("emailLabel")}</label>
                    <Input type="email" placeholder={t("emailPlaceholder") } className="rounded-xl border-gray-200" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t("companyLabel")}</label>
                    <Input placeholder={t("companyPlaceholder") } className="rounded-xl border-gray-200" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t("subjectLabel")}</label>
                    <Input placeholder={t("subjectPlaceholder") } className="rounded-xl border-gray-200" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t("messageLabel")}</label>
                    <Textarea
                      placeholder={t("messagePlaceholder")}
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
                    {t("sendMessageButton")}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("whyChooseTitle")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{t("whyChoose0")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{t("whyChoose1")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{t("whyChoose2")}</span>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("officesTitle")}</h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <div className="font-semibold text-purple-600 mb-1">{t(office.cityKey)}</div>
                        <div className="text-gray-700 mb-1">{t(office.addressKey)}</div>
                        <div className="text-gray-700 text-sm">{t("officePhoneLabel")}: {office.phone}</div>
                        <div className="text-gray-700 text-sm">{t("officeEmailLabel")}: {office.email}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 