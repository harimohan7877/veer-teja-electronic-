'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, User, MapPin, MessageCircle, Wrench, CheckCircle, Loader2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';
import { SERVICES } from '@/lib/data';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    serviceId: '',
    deviceBrand: '',
    deviceModel: '',
    issueDesc: '',
    preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.serviceId || !formData.issueDesc) {
      alert('कृपया आवश्यक फ़ील्ड भरें');
      return;
    }

    setLoading(true);

    // Save to database (try)
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      // Ignore DB errors, WhatsApp will work as fallback
    }

    setSubmitted(true);

    // Always send to WhatsApp as primary
    const service = SERVICES.find(s => s.id === formData.serviceId);
    const message = encodeURIComponent(
      `🔧 *नई बुकिंग अनुरोध*\n\n` +
      `👤 नाम: ${formData.name}\n` +
      `📞 फोन: ${formData.phone}\n` +
      `📍 पता: ${formData.address || 'नहीं दिया'}\n` +
      `🔧 सेवा: ${service?.nameHi || 'N/A'}\n` +
      `🏷️ ब्रांड: ${formData.deviceBrand || 'N/A'}\n` +
      `📱 मॉडल: ${formData.deviceModel || 'N/A'}\n` +
      `📝 समस्या: ${formData.issueDesc}\n` +
      `📅 पसंदीदा तारीख: ${formData.preferredDate || 'जल्दी से जल्दी'}\n\n` +
      `कृपया इस बुकिंग को कन्फर्म करें।`
    );
    window.open(`https://wa.me/919928330252?text=${message}`, '_blank');
    setLoading(false);
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
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hindi-text">
                मरम्मत बुक करें
              </h1>
              <p className="text-lg opacity-90">
                घर बैठे अपॉइंटमेंट बुक करें - हम आपके घर आएंगे
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-16">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-sm p-8 text-center"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">बुकिंग भेजी गई!</h2>
              <p className="text-gray-500 mb-6">
                आपकी बुकिंग WhatsApp पर भेज दी गई है। हम जल्द ही आपसे संपर्क करेंगे।
              </p>
              <a
                href="https://wa.me/919928330252"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp text-white font-bold rounded-lg hover:bg-green-600"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp पर चैट करें
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">बुकिंग फॉर्म</h2>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    आपका नाम *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="आपका नाम"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    मोबाइल नंबर *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="9928330252"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  पता
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={2}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="आपका पूरा पता"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  सेवा चुनें *
                </label>
                <div className="relative">
                  <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary appearance-none bg-white"
                    required
                  >
                    <option value="">सेवा चुनें</option>
                    {SERVICES.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.icon} {service.nameHi} (₹{service.price} से)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Device Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    उपकरण ब्रांड
                  </label>
                  <input
                    type="text"
                    value={formData.deviceBrand}
                    onChange={(e) => setFormData({ ...formData, deviceBrand: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="जैसे: Samsung, LG, Bajaj"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    मॉडल
                  </label>
                  <input
                    type="text"
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="मॉडल नंबर"
                  />
                </div>
              </div>

              {/* Issue Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  समस्या बताएं *
                </label>
                <textarea
                  value={formData.issueDesc}
                  onChange={(e) => setFormData({ ...formData, issueDesc: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="आपकी समस्या का विस्तार से वर्णन करें..."
                  required
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  पसंदीदा तारीख
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <MessageCircle className="w-5 h-5" />
                )}
                {loading ? 'भेज रहे हैं...' : 'बुकिंग भेजें'}
              </button>

              <p className="text-center text-sm text-gray-500">
                बुकिंग भेजने के बार हम आपको WhatsApp पर कन्फर्मेशन भेजेंगे।
              </p>
            </form>
          )}
        </div>

        {/* Why Book With Us */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                क्यों बुक करें हमसे?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🏠', title: 'घर पर सर्विस', desc: 'तकनीशियन आपके घर आएंगे' },
                { icon: '⏱️', title: 'तेज़ सेवा', desc: 'Same day service उपलब्ध' },
                { icon: '🛡️', title: 'वारंटी', desc: '90 दिन की सर्विस गारंटी' },
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