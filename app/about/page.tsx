'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Award, Users, Wrench, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import { STATS, CONTACTS } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hindi-text">
                वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर
              </h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                "हर इलेक्ट्रॉनिक की मरम्मत, एक ही छत के नीचे"
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: STATS.customers, label: 'संतुष्ट ग्राहक' },
                { icon: Award, value: STATS.years, label: 'साल का अनुभव' },
                { icon: Wrench, value: STATS.services, label: 'सेवाएं' },
                { icon: Star, value: STATS.brands, label: 'ब्रांड' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}+</div>
                  <div className="text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="hindi-text">हमारे बारे में</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  वीर तेजा इलेक्ट्रॉनिक्स राजस्थान के प्रमुख इलेक्ट्रॉनिक्स स्टोर और सर्विस सेंटर में से एक है।
                  हम पिछले 20+ सालों से ग्राहकों को बेहतरीन सेवा प्रदान कर रहे हैं।
                </p>
                <p>
                  हमारे यहां आपको मिलता है:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    सभी प्रमुख ब्रांड के इलेक्ट्रॉनिक्स उत्पाद
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    थोक और खुदरा दोनों दरों पर उपलब्धता
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    पेशेवर मरम्मत सेवा - सभी प्रकार के उपकरण
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    घर पर सर्विस (जयसंगसर & गोमटिया क्षेत्र में)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    सस्ती दरें और गुणवत्ता गारंटी
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-2">📍</div>
                <h3 className="font-bold text-gray-900">स्थान</h3>
                <p className="text-gray-500 text-sm">जयसंगसर & गोमटिया, Rajasthan</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-2">🕐</div>
                <h3 className="font-bold text-gray-900">समय</h3>
                <p className="text-gray-500 text-sm">सोम-शनि: 9AM-8PM</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-2">📞</div>
                <h3 className="font-bold text-gray-900">संपर्क</h3>
                <p className="text-gray-500 text-sm">9928330252</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-2">⭐</div>
                <h3 className="font-bold text-gray-900">रेटिंग</h3>
                <p className="text-gray-500 text-sm">4.8/5 (5000+ रिव्यू)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team / Owners */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                <span className="hindi-text">हमारे मालिक</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Mesh Saran */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white">👨‍🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 hindi-text">
                  मेश सारण
                </h3>
                <p className="text-gray-500 mb-4">Electrician (जयसंगसर वाले)</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="tel:9928330252"
                    className="flex items-center gap-2 text-primary"
                  >
                    <Phone className="w-4 h-4" />
                    9928330252
                  </a>
                  <a
                    href="https://wa.me/919928330252"
                    target="_blank"
                    className="text-green-600"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Pappuram Saran */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white">🏪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 hindi-text">
                  पप्पूराम सारण
                </h3>
                <p className="text-gray-500 mb-4">Shop Owner (गोमटिया वाले)</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="tel:6350211515"
                    className="flex items-center gap-2 text-primary"
                  >
                    <Phone className="w-4 h-4" />
                    6350211515
                  </a>
                  <a
                    href="https://wa.me/916350211515"
                    target="_blank"
                    className="text-green-600"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}