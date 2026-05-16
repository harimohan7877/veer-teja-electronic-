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
              <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full flex items-center gap-1">
                <Award className="w-4 h-4" />
                20+ Years Experience
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                ⭐ 5000+ Customers
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="block hindi-text">वीर तेजा इलेक्ट्रॉनिक &</span>
              <span className="block text-primary">रिपेयरिंग सेंटर</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-2">
              {BANNERS[currentSlide].subtitle}
            </p>
            <p className="text-gray-400 mb-8 hindi-text text-lg">
              आपके घर के हर इलेक्ट्रॉनिक सामान की मरम्मत और बिक्री एक ही जगह
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="tel:9928330252"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="hindi-text">अभी कॉल करें</span>
              </Link>
              <Link
                href="https://wa.me/919928330252?text=नमस्ते! मुझे अपने इलेक्ट्रॉनिक सामान की मरम्मत करवानी है।"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp text-white rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp पर पूछें
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Wrench className="w-4 h-4" />
                <span className="hindi-text">सेवाएं देखें</span>
              </Link>
              <Link href="/products" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <ShoppingBag className="w-4 h-4" />
                <span className="hindi-text">उत्पाद देखें</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            key={`card-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-white font-bold text-lg mb-1 hindi-text">मरम्मत सेवाएं</h3>
              <p className="text-gray-300 text-sm">कूलर, पंखा, फ्रिज, वाशिंग मशीन</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🛒</div>
              <h3 className="text-white font-bold text-lg mb-1 hindi-text">बिक्री</h3>
              <p className="text-gray-300 text-sm">इन्वेर्टर, बैटरी, लाईट, पानी फिटिंग</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-white font-bold text-lg mb-1 hindi-text">थोक व खुदरा</h3>
              <p className="text-gray-300 text-sm">सभी ब्रांड उपलब्ध</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-white font-bold text-lg mb-1 hindi-text">घर पर सेवा</h3>
              <p className="text-gray-300 text-sm">फ्री विजिट, तेज सर्विस</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'
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