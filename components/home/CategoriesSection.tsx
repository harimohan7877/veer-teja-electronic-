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
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Layers className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium text-sm">CATEGORIES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            <span className="hindi-text">श्रेणियां</span>
          </h2>
          <p className="text-gray-500">अपनी जरूरत का उत्पाद आसानी से खोजें</p>
        </div>

        {/* Categories Grid - Croma Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/products?category=${category.slug}`}
                className="group block relative overflow-hidden rounded-2xl aspect-square"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-primary/80 group-hover:to-black/40 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                  <span className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                  <span className="text-xs md:text-sm font-bold text-center hindi-text leading-tight group-hover:text-white">{category.name}</span>
                  <span className="text-[10px] md:text-xs text-gray-300 hidden md:block">{category.nameEn}</span>
                  <span className="mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    देखें <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-full font-medium hover:border-primary hover:text-primary transition-colors"
          >
            सभी श्रेणियां देखें
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}