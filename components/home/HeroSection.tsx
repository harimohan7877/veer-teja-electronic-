'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle, ChevronLeft, ChevronRight, ArrowRight, Wrench, ShoppingBag, Award } from 'lucide-react';
import { BANNERS } from '@/lib/data';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${BANNERS[currentSlide].imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Tagline badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full flex items-center gap-1 shadow-md">
                <Award className="w-4 h-4" />
                20+ Years Experience
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20">
                ⭐ 5000+ Customers
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              <span className="block hindi-text tracking-tight">वीर तेजा इलेक्ट्रॉनिक &</span>
              <span className="block text-accent">रिपेयरिंग सेंटर</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-2 font-medium">
              {BANNERS[currentSlide].subtitle}
            </p>
            <p className="text-white/70 mb-8 hindi-text text-lg">
              आपके घर के हर इलेक्ट्रॉनिक सामान की मरम्मत और बिक्री एक ही जगह
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="tel:9928330252"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary rounded-xl font-bold hover:bg-surface transition-all shadow-xl active:scale-95"
              >
                <Phone className="w-5 h-5 text-secondary" />
                <span className="hindi-text">अभी कॉल करें</span>
              </Link>
              <Link
                href="https://wa.me/919928330252?text=नमस्ते! मुझे अपने इलेक्ट्रॉनिक सामान की मरम्मत करवानी है।"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp text-white rounded-xl font-bold hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all shadow-xl active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp पर पूछें
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors font-medium">
                <Wrench className="w-4 h-4" />
                <span className="hindi-text">सेवाएं देखें</span>
              </Link>
              <Link href="/products" className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors font-medium">
                <ShoppingBag className="w-4 h-4" />
                <span className="hindi-text">उत्पाद देखें</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - 2026 Bento Grid */}
          <motion.div
            key={`card-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 h-[400px]"
          >
            <div className="col-span-1 row-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] flex flex-col justify-between hover:scale-[1.02] hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">🔧</div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-2 hindi-text">मरम्मत सेवाएं</h3>
                <p className="text-white/70 text-sm leading-relaxed">कूलर, पंखा, फ्रिज, वाशिंग मशीन की घर बैठे मरम्मत।</p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-lg flex flex-col justify-center hover:scale-[1.02] hover:shadow-secondary/50 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-3xl mb-2 relative z-10">🛒</div>
              <h3 className="text-white font-bold text-lg mb-1 hindi-text relative z-10">बिक्री</h3>
              <p className="text-white/90 text-xs relative z-10">इन्वेर्टर, बैटरी, लाईट</p>
            </div>
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-lg flex items-center gap-4 hover:scale-[1.02] hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl bg-white/10 p-3 rounded-xl shadow-inner">🏠</div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1 hindi-text">घर पर सेवा</h3>
                <p className="text-white/70 text-xs">फ्री विजिट, तेज सर्विस</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === index ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}