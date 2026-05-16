'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import { CONTACTS } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('कृपया सभी फ़ील्ड भरें');
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hindi-text">
                संपर्क करें
              </h1>
              <p className="text-lg opacity-90">
                हमसे संपर्क करें - हम 24/7 आपकी सहायता के लिए उपलब्ध हैं
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                संदेश भेजें
              </h2>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">धन्यवाद!</h3>
                  <p className="text-gray-500">हम जल्द ही आपसे संपर्क करेंगे।</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      आपका नाम *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="आपका नाम"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      मोबाइल नंबर *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="9928330252"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      संदेश *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="आपका संदेश यहाँ लिखें..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    भेजें
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mesh Saran */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xl">👨‍🔧</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 hindi-text">{CONTACTS.mesh.name}</h3>
                      <p className="text-sm text-gray-500">{CONTACTS.mesh.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{CONTACTS.mesh.area}</p>
                  <div className="space-y-2">
                    {CONTACTS.mesh.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-primary"
                      >
                        <Phone className="w-4 h-4" />
                        {phone}
                      </a>
                    ))}
                    <a
                      href={`https://wa.me/${CONTACTS.mesh.whatsapp}`}
                      target="_blank"
                      className="flex items-center gap-2 text-green-600"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Pappuram Saran */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xl">🏪</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 hindi-text">{CONTACTS.pappuram.name}</h3>
                      <p className="text-sm text-gray-500">{CONTACTS.pappuram.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{CONTACTS.pappuram.area}</p>
                  <div className="space-y-2">
                    {CONTACTS.pappuram.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-primary"
                      >
                        <Phone className="w-4 h-4" />
                        {phone}
                      </a>
                    ))}
                    <a
                      href={`https://wa.me/${CONTACTS.pappuram.whatsapp}`}
                      target="_blank"
                      className="flex items-center gap-2 text-green-600"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="hindi-text">खुलने का समय</span>
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>सोमवार - शनिवार</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>रविवार</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="hindi-text">स्थान</span>
                </h3>
                <p className="text-gray-600">
                  जयसंगसर & गोमटिया क्षेत्र, Rajasthan, India
                </p>
                <div className="mt-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Google Maps</p>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:9928330252"
                  className="flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  कॉल करें
                </a>
                <a
                  href="https://wa.me/919928330252?text=नमस्ते! मुझे संपर्क करना है।"
                  target="_blank"
                  className="flex items-center justify-center gap-2 py-4 bg-whatsapp text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}