'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Filter, X, Grid, List, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';
import WishlistButton from '@/components/shared/WishlistButton';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { useWishlistStore } from '@/lib/store';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const searchQuery = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categorySlug);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const { isInWishlist } = useWishlistStore();

  const filteredProducts = PRODUCTS.filter(product => {
    // Filter by category
    if (selectedCategory) {
      const category = CATEGORIES.find(c => c.slug === selectedCategory);
      if (!category || product.categoryId !== category.id) return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.nameHi.includes(searchQuery) ||
        product.brand?.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return (a.price || 0) - (b.price || 0);
      case 'price-high': return (b.price || 0) - (a.price || 0);
      case 'rating': return (b.rating || 0) - (a.rating || 0);
      case 'newest': return 0;
      default: return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    }
  });

  const currentCategory = CATEGORIES.find(c => c.slug === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-32">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-light">
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              <span className="text-border">/</span>
              <span className="text-text-mid">Products</span>
              {currentCategory && (
                <>
                  <span className="text-border">/</span>
                  <span className="text-secondary">{currentCategory.nameEn}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-black text-primary mb-3">
              <span className="hindi-text tracking-tight">
                {searchQuery ? `Search: "${searchQuery}"` : currentCategory ? currentCategory.name : 'सभी उत्पाद'}
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-text-mid font-bold uppercase text-[10px] tracking-[0.2em] bg-surface px-3 py-1 rounded-lg border border-border">
                {sortedProducts.length} PRODUCTS FOUND
              </p>
              {searchQuery && (
                <Link href="/products" className="text-secondary font-black text-[10px] uppercase tracking-widest hover:underline">
                  CLEAR SEARCH
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 sticky top-28 border border-border shadow-sm">
                <h3 className="text-xs font-black text-primary mb-6 flex items-center gap-2 uppercase tracking-[0.2em]">
                  <Filter className="w-4 h-4 text-secondary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all text-sm flex items-center gap-3 ${
                      !selectedCategory
                        ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                        : 'text-text-mid hover:bg-surface hover:text-secondary'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span>All Products</span>
                  </button>
                  {CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all text-sm flex items-center gap-3 ${
                        selectedCategory === category.slug
                          ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                          : 'text-text-mid hover:bg-surface hover:text-secondary'
                      }`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="hindi-text">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-3 px-6 py-3.5 bg-white rounded-xl border-2 border-border font-black text-xs uppercase tracking-widest text-primary shadow-sm active:scale-95 mb-6 w-full"
            >
              <Filter className="w-4 h-4 text-secondary" />
              Categories / Filter Products
            </button>

            {showFilters && (
              <div className="lg:hidden mb-8 bg-white rounded-2xl p-4 border border-border shadow-sm">
                <h3 className="text-xs font-black text-primary mb-4 flex items-center gap-2 uppercase tracking-[0.2em]">
                  <Filter className="w-4 h-4 text-secondary" />
                  Select Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { setSelectedCategory(null); setShowFilters(false); }}
                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all text-sm flex items-center gap-3 ${
                      !selectedCategory
                        ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                        : 'text-text-mid hover:bg-surface hover:text-secondary'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span>All Products</span>
                  </button>
                  {CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => { setSelectedCategory(category.slug); setShowFilters(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all text-sm flex items-center gap-3 ${
                        selectedCategory === category.slug
                          ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                          : 'text-text-mid hover:bg-surface hover:text-secondary'
                      }`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="hindi-text">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort & View Controls */}
              <div className="flex items-center justify-between mb-8 bg-white p-5 rounded-2xl border border-border shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-light">{sortedProducts.length} Results</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-light">Sort:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border-2 border-border rounded-xl px-4 py-2 text-xs font-bold text-primary focus:outline-none focus:border-secondary bg-surface transition-all"
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>
                  <div className="hidden md:flex border-2 border-border rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2.5 transition-all ${viewMode === 'grid' ? 'bg-secondary text-white' : 'bg-white text-text-light hover:text-secondary'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2.5 transition-all border-l-2 border-border ${viewMode === 'list' ? 'bg-secondary text-white' : 'bg-white text-text-light hover:text-secondary'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {sortedProducts.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-3xl border border-border border-dashed">
                  <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
                    <X className="w-10 h-10 text-text-light" />
                  </div>
                  <p className="text-text-mid font-bold mb-4 uppercase tracking-widest text-xs">No products found matching your criteria</p>
                  <Link href="/products" className="text-secondary font-black uppercase tracking-widest text-xs hover:underline">
                    VIEW ALL PRODUCTS
                  </Link>
                </div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                    : 'grid-cols-1'
                }`}>
                  {sortedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`product-card group ${
                        viewMode === 'list' ? 'flex-row' : ''
                      }`}
                    >
                      {/* Image */}
                      <Link href={`/products/${product.slug}`} className={`block overflow-hidden relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                        <div className={`product-img-wrapper ${viewMode === 'list' ? 'h-full aspect-auto' : ''}`}>
                          <img
                            src={product.images[0] || 'https://via.placeholder.com/400x300?text=Product'}
                            alt={product.name}
                          />
                          {product.discount && product.discount >= 10 && (
                            <span className="absolute top-4 left-4 px-3 py-1 bg-danger text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl z-20">
                              {product.discount}% OFF
                            </span>
                          )}
                          {/* Wishlist Button */}
                          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                            <WishlistButton product={product} size="sm" />
                          </div>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-[10px] text-secondary font-black uppercase tracking-[0.2em] mb-2">{product.brand}</p>
                        <Link href={`/products/${product.slug}`}>
                          <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2 hindi-text leading-tight text-lg">
                            {product.nameHi}
                          </h3>
                        </Link>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mb-4">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 0) ? 'text-warning fill-warning' : 'text-border'}`}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-text-light font-bold uppercase tracking-widest">({product.reviewCount})</span>
                        </div>

                        <div className="mt-auto">
                          {/* Price */}
                          <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-2xl font-black text-secondary tracking-tighter">₹{product.price?.toLocaleString()}</span>
                            {product.mrp && (
                              <span className="text-sm text-text-light line-through font-medium">₹{product.mrp.toLocaleString()}</span>
                            )}
                          </div>

                          {/* Stock Status & CTA */}
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-lg border border-border">
                              {product.inStock ? (
                                <>
                                  <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                                  <span className="text-[10px] font-black uppercase tracking-widest text-text-mid">In Stock</span>
                                </>
                              ) : (
                                <>
                                  <span className="w-2 h-2 bg-danger rounded-full"></span>
                                  <span className="text-[10px] font-black uppercase tracking-widest text-text-mid">Sold Out</span>
                                </>
                              )}
                            </div>

                            <Link
                              href={`/products/${product.slug}`}
                              className="flex-1 text-center py-3 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-secondary transition-all shadow-lg active:scale-95"
                            >
                              VIEW
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}