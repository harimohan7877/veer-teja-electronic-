'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, CheckCircle, Phone, Calendar, ArrowRight, Wrench, Snowflake, Fan, Refrigerator, Tv, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';
import { SERVICES } from '@/lib/data';

export default function ServicesPage() {
  const handleBookService = (serviceName: string) => {
    const message = encodeURIComponent(
      `नमस्ते! मुझे इस सेवा के लिए बुक करना है:\n\nसेवा: ${serviceName}\n\nकृपया मुझे कॉल करें।`
    );
    window.open(`https://wa.me/919928330252?text=${message}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gray-900 text-white py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-gray-900 to-purple-900/30 opacity-80" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-inner">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 hindi-text tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                मरम्मत सेवाएं
              </h1>
              <p className="text-xl opacity-90 mb-10 font-light max-w-2xl mx-auto">
                पेशेवर मरम्मत सेवा - घर पर या हमारे केंद्र पर। आधुनिक तकनीकों के साथ बेहतरीन रिपेयर।
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:9928330252"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <Phone className="w-5 h-5" />
                  अभी कॉल करें
                </a>
                <a
                  href="https://wa.me/919928330252?text=नमस्ते! मुझे मरम्मत सेवा चाहिए।"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp text-white font-bold rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                >
                  WhatsApp पर बुक करें
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="hindi-text text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">हमारी सेवाएं</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg">पेशेवर इलेक्ट्रॉनिक्स मरम्मत सेवाएं</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-rotate-12 transition-transform duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hindi-text group-hover:text-primary transition-colors">
                    {service.nameHi}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{service.descriptionHi}</p>

                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-bold bg-primary/5 px-3 py-1.5 rounded-full">
                      <span>₹{service.price} से शुरू</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookService(service.nameHi)}
                    className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    बुक करें
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - 2026 Bento Grid */}
        <div className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                क्यों चुनें हमें?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[400px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20 flex items-center gap-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-4xl shrink-0">⏱️</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">तेज़ सेवा (Fast Service)</h3>
                  <p className="text-gray-600 font-medium">हम समझते हैं कि आपका समय कीमती है। हमारी Same-day service से आपके उपकरण तुरंत ठीक किए जाते हैं।</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-1 row-span-2 bg-gray-900 rounded-3xl p-8 flex flex-col justify-center text-center text-white hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary blur-3xl opacity-30 rounded-full"></div>
                <div className="text-6xl mb-6 relative z-10">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">90 दिन की गारंटी</h3>
                <p className="text-gray-400 font-medium relative z-10">हमारी हर मरम्मत के साथ आपको मिलती है पूरी वारंटी। काम में कोई कमी नहीं।</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-1 row-span-1 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex items-center gap-4 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">💰</div>
                <div>
                  <h3 className="font-bold text-gray-900">सस्ती दरें</h3>
                  <p className="text-gray-500 text-sm">बाज़ार से कम कीमत</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="col-span-1 row-span-1 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex items-center gap-4 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">👨‍🔧</div>
                <div>
                  <h3 className="font-bold text-gray-900">पेशेवर टीम</h3>
                  <p className="text-gray-500 text-sm">अनुभवी तकनीशियन</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}