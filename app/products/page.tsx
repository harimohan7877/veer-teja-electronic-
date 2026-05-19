'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Filter, X, Grid, List, ChevronDown, Heart } from 'lucide-react';
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
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-gray-900">Products</span>
              {currentCategory && (
                <>
                  <span>/</span>
                  <span className="text-gray-900">{currentCategory.nameEn}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <span className="hindi-text">
                {searchQuery ? `Search: "${searchQuery}"` : currentCategory ? currentCategory.name : 'सभी उत्पाद'}
              </span>
            </h1>
            <p className="text-gray-500">
              {sortedProducts.length} उत्पाद मिले
              {searchQuery && (
                <Link href="/products" className="ml-2 text-primary hover:underline">
                  (Clear search)
                </Link>
              )}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-xl p-5 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  श्रेणियां
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      !selectedCategory
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    सभी उत्पाद
                  </button>
                  {CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                        selectedCategory === category.slug
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span className="hindi-text">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg border"
            >
              <Filter className="w-4 h-4" />
              फ़िल्टर
            </button>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort & View Controls */}
              <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{sortedProducts.length} उत्पाद</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">क्रम:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    >
                      <option value="featured">विशेष</option>
                      <option value="newest">नया</option>
                      <option value="price-low">कम से कम</option>
                      <option value="price-high">ज्यादा से कम</option>
                      <option value="rating">रेटिंग</option>
                    </select>
                  </div>
                  <div className="hidden md:flex border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {sortedProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 mb-4">कोई उत्पाद नहीं मिला</p>
                  <Link href="/products" className="text-primary hover:underline">
                    सभी उत्पाद देखें
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
                      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-primary/30 ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      {/* Image */}
                      <Link href={`/products/${product.slug}`} className={`block overflow-hidden relative ${viewMode === 'list' ? 'w-56 flex-shrink-0 border-r border-gray-100' : ''}`}>
                        <div className={`relative bg-gray-50/50 ${viewMode === 'list' ? 'h-full' : 'h-52'}`}>
                          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                          <img
                            src={product.images[0] || 'https://via.placeholder.com/400x300?text=Product'}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {product.discount && product.discount >= 20 && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-red-600 to-rose-500 text-white text-xs font-bold rounded-full shadow-lg z-20">
                              {product.discount}% OFF
                            </span>
                          )}
                          {/* Wishlist Button */}
                          <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <WishlistButton product={product} size="sm" />
                          </div>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{product.brand}</p>
                        <Link href={`/products/${product.slug}`}>
                          <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 hindi-text leading-snug">
                            {product.nameHi}
                          </h3>
                        </Link>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <div className="flex bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 0) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 font-medium">({product.reviewCount})</span>
                        </div>

                        <div className="mt-auto">
                          {/* Price */}
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-xl font-extrabold text-gray-900">₹{product.price?.toLocaleString()}</span>
                            {product.mrp && (
                              <span className="text-sm text-gray-400 line-through decoration-gray-300">₹{product.mrp.toLocaleString()}</span>
                            )}
                          </div>

                          {/* Stock Status & CTA */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                              {product.inStock ? (
                                <>
                                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                  <span className="text-xs font-medium text-gray-700">स्टॉक में</span>
                                </>
                              ) : (
                                <>
                                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                  <span className="text-xs font-medium text-gray-700">स्टॉक नहीं</span>
                                </>
                              )}
                            </div>

                            <Link
                              href={`/products/${product.slug}`}
                              className="flex-1 text-center py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl group-hover:bg-primary transition-all duration-300 shadow-md group-hover:shadow-primary/30"
                            >
                              विवरण
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