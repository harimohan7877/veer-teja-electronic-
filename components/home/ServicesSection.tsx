'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ArrowRight, Wrench, Shield, Zap } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function ServicesSection() {
  const featuredServices = SERVICES.filter(s => s.isFeatured);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Wrench className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium text-sm">REPAIR SERVICES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            <span className="hindi-text">मरम्मत सेवाएं</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            हमारे यहाँ सभी प्रकार के इलेक्ट्रॉनिक उपकरणों की पेशेवर मरम्मत। घर पर सर्विस उपलब्ध।
          </p>
        </div>

        {/* Services Grid - Card Style like iFixit/Geek Squad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-36 md:h-40 overflow-hidden">
                <img
                  src={service.imageUrl || 'https://via.placeholder.com/400x300?text=Service'}
                  alt={service.nameHi}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon overlay */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                  {service.icon}
                </div>

                {/* Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Guaranteed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 hindi-text">
                  {service.nameHi}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{service.name}</p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-primary font-bold text-xl">₹{service.price}</span>
                    <span className="text-gray-400 text-sm"> से शुरू</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/services?booking=${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-primary transition-colors group-hover:bg-primary"
                >
                  <span className="hindi-text">बुक करें</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services List - Quick Links */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center hindi-text">सभी सेवाएं</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services?booking=${service.slug}`}
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-sm text-gray-700 hover:text-primary"
              >
                <span>{service.icon}</span>
                <span className="hindi-text">{service.nameHi}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            सभी सेवाएं देखें
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}