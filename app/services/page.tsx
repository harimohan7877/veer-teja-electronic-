'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, CheckCircle, Phone, Calendar, ArrowRight, Wrench, Snowflake, Fan, Refrigerator, Tv, Zap, MessageCircle } from 'lucide-react';
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
      <main className="min-h-screen bg-gray-50 pt-32">
        {/* Hero */}
        <div className="relative overflow-hidden bg-primary text-white py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary to-accent/10 opacity-80" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-[120px] opacity-20" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-2xl">
                <Wrench className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 hindi-text tracking-tighter text-white">
                मरम्मत सेवाएं
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-12 font-medium max-w-2xl mx-auto uppercase tracking-widest">
                Professional Tech Support • 20+ Years Experience • Guaranteed Results
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="tel:9928330252"
                  className="inline-flex items-center gap-3 px-10 py-4.5 bg-white text-primary font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-surface transition-all shadow-2xl active:scale-95"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  Call Support
                </a>
                <a
                  href="https://wa.me/919928330252?text=नमस्ते! मुझे मरम्मत सेवा चाहिए।"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-10 py-4.5 bg-whatsapp text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all shadow-2xl active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Master Technicians</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
              <span className="hindi-text tracking-tight">हमारी विशेषज्ञता</span>
            </h2>
            <p className="text-text-mid font-bold text-xs uppercase tracking-[0.2em]">Professional Electronics Restoration Hub</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border group"
              >
                {/* Image */}
                <div className="relative h-64 bg-surface overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl transform group-hover:-rotate-6 transition-transform duration-500 border border-white/50">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-2xl font-black text-primary mb-3 hindi-text group-hover:text-secondary transition-colors tracking-tight">
                    {service.nameHi}
                  </h3>
                  <p className="text-text-mid text-sm mb-8 font-medium leading-relaxed">{service.descriptionHi}</p>

                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-light bg-surface px-4 py-2 rounded-xl">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-black text-lg bg-secondary/5 px-4 py-2 rounded-xl border border-secondary/10 tracking-tighter">
                      <span>₹{service.price}+</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookService(service.nameHi)}
                    className="w-full py-4.5 bg-surface text-secondary font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm"
                  >
                    BOOK NOW
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - 2026 Bento Grid */}
        <div className="bg-surface py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter">
                <span className="hindi-text">क्यों चुनें हमें?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[450px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-secondary/10 via-white to-surface rounded-[40px] p-10 border border-secondary/10 flex items-center gap-10 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500"
              >
                <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-5xl shrink-0 border border-border">⏱️</div>
                <div>
                  <h3 className="text-2xl font-black text-primary mb-3 tracking-tight">तेज़ सेवा (Fast Service)</h3>
                  <p className="text-text-mid font-medium leading-relaxed">हम समझते हैं कि आपका समय कीमती है। हमारी Same-day service से आपके उपकरण तुरंत ठीक किए जाते हैं।</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-1 row-span-2 bg-primary rounded-[40px] p-10 flex flex-col justify-center text-center text-white hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary blur-[100px] opacity-20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="text-7xl mb-8 relative z-10 drop-shadow-2xl">🛡️</div>
                <h3 className="text-3xl font-black mb-4 relative z-10 tracking-tight">90 दिन की गारंटी</h3>
                <p className="text-white/40 font-bold uppercase tracking-widest text-xs relative z-10">Quality Assured Restoration</p>
                <p className="text-white/60 font-medium mt-6 relative z-10 leading-relaxed">हमारी हर मरम्मत के साथ आपको मिलती है पूरी वारंटी। काम में कोई कमी नहीं।</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-1 row-span-1 bg-white rounded-[40px] p-8 border border-border shadow-sm flex items-center gap-6 hover:border-secondary/50 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">💰</div>
                <div>
                  <h3 className="font-black text-primary tracking-tight">सस्ती दरें</h3>
                  <p className="text-text-light text-[10px] font-black uppercase tracking-widest mt-1">Economical Solutions</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="col-span-1 row-span-1 bg-white rounded-[40px] p-8 border border-border shadow-sm flex items-center gap-6 hover:border-secondary/50 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">👨‍🔧</div>
                <div>
                  <h3 className="font-black text-primary tracking-tight">पेशेवर टीम</h3>
                  <p className="text-text-light text-[10px] font-black uppercase tracking-widest mt-1">Elite Technicians</p>
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