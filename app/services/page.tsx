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
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Wrench className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hindi-text">
                मरम्मत सेवाएं
              </h1>
              <p className="text-lg opacity-90 mb-8">
                पेशेवर मरम्मत सेवा - घर पर या हमारे केंद्र पर
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:9928330252"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100"
                >
                  <Phone className="w-5 h-5" />
                  कॉल करें
                </a>
                <a
                  href="https://wa.me/919928330252?text=नमस्ते! मुझे मरम्मत सेवा चाहिए।"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp text-white font-bold rounded-lg hover:bg-green-600"
                >
                  WhatsApp बुक करें
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <span className="hindi-text">हमारी सेवाएं</span>
            </h2>
            <p className="text-gray-500">पेशेवर इलेक्ट्रॉनिक्स मरम्मत सेवाएं</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hindi-text">
                    {service.nameHi}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{service.descriptionHi}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-bold">
                      <span>₹{service.price} से शुरू</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookService(service.nameHi)}
                    className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    बुक करें
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                क्यों चुनें हमें?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: '⏱️', title: 'तेज़ सेवा', desc: 'Same day service' },
                { icon: '🛡️', title: 'वारंटी', desc: '90 दिन की गारंटी' },
                { icon: '💰', title: 'सस्ती दरें', desc: 'बाज़ार से कम' },
                { icon: '👨‍🔧', title: 'पेशेवर', desc: 'अनुभवी तकनीशियन' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
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