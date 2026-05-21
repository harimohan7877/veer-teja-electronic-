'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight, Wrench, ShoppingBag, Award } from 'lucide-react';
import { BANNERS } from '@/lib/data';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const slideVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 300 : -300,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -300 : 300,
    }),
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pt-28 md:pt-32">
      {/* Background Slides with Swipe Support */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-110"
              style={{ backgroundImage: `url(${BANNERS[currentSlide].imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Technical Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Tagline badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 bg-secondary/20 backdrop-blur-md text-accent text-xs font-black uppercase tracking-widest rounded-full border border-secondary/30 shadow-xl">
                <Award className="w-3.5 h-3.5 inline mr-1.5" />
                Since 2004
              </span>
              <span className="px-4 py-1.5 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold rounded-full border border-white/10">
                ⭐ 5K+ Happy Customers
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              <span className="block hindi-text">वीर तेजा</span>
              <span className="block text-accent">इलेक्ट्रॉनिक्स</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-10">
              <p className="text-xl md:text-2xl text-white font-bold mb-3">
                {BANNERS[currentSlide].titleHi}
              </p>
              <p className="text-white/60 text-lg hindi-text max-w-lg leading-relaxed">
                {BANNERS[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <Link
                href="tel:9928330252"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:bg-surface transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95 group"
              >
                <Phone className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                Call Now
              </Link>
              <Link
                href="https://wa.me/919928330252?text=नमस्ते! मुझे अपने इलेक्ट्रॉनिक सामान की मरम्मत करवानी है।"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp text-white rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
              <Link href="/services" className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors font-black text-[10px] uppercase tracking-[0.25em] group">
                <Wrench className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                Our Services
              </Link>
              <Link href="/products" className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors font-black text-[10px] uppercase tracking-[0.25em] group">
                <ShoppingBag className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Shop Products
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Modern Bento Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-4 h-[450px]"
          >
            <div className="col-span-1 bg-white/5 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">⚙️</div>
              <div>
                <h3 className="text-white font-black text-xl mb-2 uppercase tracking-tight">Rapid Repair</h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Same day resolution</p>
              </div>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="h-[210px] bg-secondary rounded-[40px] p-8 flex flex-col justify-center relative overflow-hidden group hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-4xl mb-4 relative z-10">📦</div>
                <h3 className="text-white font-black text-lg mb-1 uppercase tracking-tight relative z-10">Retail & Wholesale</h3>
                <p className="text-white/70 text-[10px] font-black uppercase tracking-widest relative z-10">Best prices guaranteed</p>
              </div>
              <div className="h-[210px] bg-white/5 backdrop-blur-xl rounded-[40px] p-8 flex items-center gap-5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:rotate-12 transition-transform">🏠</div>
                <div>
                  <h3 className="text-white font-black text-sm uppercase tracking-widest">Home Service</h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Free visit</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Slide Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'bg-accent w-12 shadow-[0_0_15px_rgba(0,180,216,0.5)]' : 'bg-white/20 w-3 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Swipe Hint for Mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Swipe to explore</p>
      </div>
    </section>
  );
}