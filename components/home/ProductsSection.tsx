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
              <Zap className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Featured Collection</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
              <span className="hindi-text">हमारी खास पेशकश</span>
            </h2>
            <p className="text-text-mid mt-1 font-medium">Original brands, guaranteed quality</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <span className="px-4 py-1.5 bg-accent/10 text-secondary rounded-full text-xs font-bold border border-secondary/10">
              थोक (Wholesale)
            </span>
            <span className="px-4 py-1.5 bg-secondary text-white rounded-full text-xs font-bold shadow-md">
              खुदरा (Retail)
            </span>
          </div>
        </div>

        {/* Products Grid - Professional Card Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="product-card group"
            >
              {/* Image Container */}
              <div className="product-img-wrapper">
                <img
                  src={product.images[0] || 'https://via.placeholder.com/400x300?text=Product'}
                  alt={product.name}
                />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                  {product.discount && product.discount >= 10 && (
                    <span className="px-2 py-1 bg-danger text-white text-[10px] font-bold rounded-md shadow-sm">
                      {product.discount}% OFF
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-2 py-1 bg-accent text-primary text-[10px] font-bold rounded-md flex items-center gap-1 shadow-sm">
                      <TrendingUp className="w-3 h-3" /> BEST SELLER
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-text-mid hover:text-danger transition-all opacity-0 group-hover:opacity-100 hover:scale-110">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Brand */}
                <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">{product.brand}</p>

                {/* Name */}
                <h3 className="text-sm md:text-base font-bold text-primary mb-1 line-clamp-2 hindi-text h-10 md:h-12">
                  {product.nameHi}
                </h3>
                <p className="text-[11px] text-text-light hidden md:block mb-2 font-medium">{product.name}</p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-warning fill-warning' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-text-light">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg md:text-xl font-extrabold text-secondary">₹{product.price?.toLocaleString()}</span>
                    {product.mrp && (
                      <span className="text-xs text-text-light line-through font-medium">₹{product.mrp.toLocaleString()}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="block w-full text-center py-2.5 bg-surface text-secondary text-xs font-bold rounded-xl border border-secondary/10 hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-95"
                  >
                    विवरण देखें
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
          >
            सभी उत्पाद देखें
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}