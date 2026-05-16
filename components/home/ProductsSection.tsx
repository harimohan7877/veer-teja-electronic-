'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ArrowRight, Heart, ShoppingCart, Zap, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';

export default function ProductsSection() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm">FEATURED PRODUCTS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="hindi-text">हमारी बिक्री</span>
            </h2>
            <p className="text-gray-500 mt-1">सभी ब्रांड के सामान उपलब्ध</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              थोक
            </span>
            <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
              खुदरा
            </span>
          </div>
        </div>

        {/* Products Grid - Amazon/Croma Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-40 md:h-48 bg-gray-100 overflow-hidden">
                <img
                  src={product.images[0] || 'https://via.placeholder.com/400x300?text=Product'}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.discount && product.discount >= 20 && (
                    <span className="px-2 py-0.5 bg-danger text-white text-xs font-bold rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-2 py-0.5 bg-accent text-gray-900 text-xs font-bold rounded flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Best Seller
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-3 md:p-4">
                {/* Brand */}
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>

                {/* Name */}
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 line-clamp-2 hindi-text">
                  {product.nameHi}
                </h3>
                <p className="text-xs text-gray-500 hidden md:block">{product.name}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 my-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg md:text-xl font-bold text-gray-900">₹{product.price?.toLocaleString()}</span>
                  {product.mrp && (
                    <span className="text-sm text-gray-400 line-through">₹{product.mrp.toLocaleString()}</span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/products/${product.slug}`}
                  className="block w-full text-center py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-primary transition-colors"
                >
                  विवरण देखें
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            सभी उत्पाद देखें
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}