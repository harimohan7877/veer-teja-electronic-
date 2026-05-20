'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import { CATEGORIES } from '@/lib/data';

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Smart Navigation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
            <span className="hindi-text tracking-tight">श्रेणियां</span>
          </h2>
          <p className="text-text-mid font-medium">अपनी जरूरत का उत्पाद आसानी से खोजें</p>
        </div>

        {/* Categories Grid - High End Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/products?category=${category.slug}`}
                className="group block relative overflow-hidden rounded-2xl aspect-square shadow-md hover:shadow-2xl transition-all duration-500 border border-border"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:from-secondary/90 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-4 pb-6">
                  <span className="text-3xl md:text-4xl mb-3 transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-lg">{category.icon}</span>
                  <div className="text-center">
                    <span className="block text-sm font-black hindi-text leading-tight group-hover:text-accent transition-colors">{category.name}</span>
                    <span className="block text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1 group-hover:text-white/80 transition-colors">{category.nameEn}</span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-border text-text-mid rounded-xl font-bold hover:border-secondary hover:text-secondary transition-all shadow-sm active:scale-95"
          >
            सभी श्रेणियां देखें
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}