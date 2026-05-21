'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ArrowRight, Wrench, Shield, Zap } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function ServicesSection() {
  const featuredServices = SERVICES.filter(s => s.isFeatured);
  const visibleServicesMobile = featuredServices.slice(0, 3);
  const remainingCount = SERVICES.length - 3;

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Repair Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
            <span className="hindi-text tracking-tight">मरम्मत सेवाएं</span>
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto font-medium">
            हमारे यहाँ सभी प्रकार के इलेक्ट्रॉनिक उपकरणों की पेशेवर मरम्मत। घर पर सर्विस उपलब्ध।
          </p>
        </div>

        {/* Services Grid - Responsive logic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-white border-2 border-border rounded-2xl overflow-hidden hover:border-secondary hover:shadow-2xl transition-all duration-300 ${index >= 3 ? 'hidden md:block' : 'block'}`}
            >
              {/* Image */}
              <div className="relative h-40 md:h-44 overflow-hidden">
                <img
                  src={service.imageUrl || 'https://via.placeholder.com/400x300?text=Service'}
                  alt={service.nameHi}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl md:text-3xl shadow-lg border border-white/20">
                  {service.icon}
                </div>

                {/* Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Shield className="w-3 h-3" /> Guaranteed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                {/* Name */}
                <h3 className="text-lg md:text-xl font-black text-primary mb-1 hindi-text tracking-tight group-hover:text-secondary transition-colors">
                  {service.nameHi}
                </h3>
                <p className="text-[10px] text-text-light mb-4 font-bold uppercase tracking-wider">{service.name}</p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-secondary font-black text-xl md:text-2xl tracking-tighter">₹{service.price}</span>
                    <span className="text-text-light text-[9px] font-bold uppercase tracking-widest ml-1">START</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-mid font-bold text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {service.duration}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/services?booking=${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-surface text-secondary font-black text-[10px] uppercase tracking-[0.2em] rounded-xl border border-secondary/10 hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <span className="hindi-text">बुक करें</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Mobile "View More" Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:hidden block"
          >
            <Link
              href="/services"
              className="group flex flex-col items-center justify-center bg-surface border-2 border-dashed border-border rounded-2xl p-8 shadow-sm hover:border-secondary transition-all active:scale-95 h-full min-h-[200px]"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <ArrowRight className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-text-mid mb-1">Explore All</h3>
              <p className="text-lg font-black text-secondary">+{remainingCount} Expert Services</p>
            </Link>
          </motion.div>
        </div>

        {/* Services List - Quick Links (Hidden on small mobile) */}
        <div className="mt-16 p-6 md:p-8 bg-surface rounded-3xl border border-border/50 hidden sm:block">
          <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-text-light mb-8 text-center">Complete Service Directory</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services?booking=${service.slug}`}
                className="flex items-center gap-3 p-3 md:p-4 bg-white border border-border rounded-xl hover:shadow-xl hover:border-secondary hover:-translate-y-1 transition-all text-xs md:text-sm font-bold text-text-mid hover:text-secondary"
              >
                <span className="text-xl md:text-2xl">{service.icon}</span>
                <span className="hindi-text">{service.nameHi}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button (Hidden on Mobile) */}
        <div className="text-center mt-12 hidden md:block">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all shadow-xl hover:-translate-y-1 active:scale-95"
          >
            सभी सेवाएं देखें
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}