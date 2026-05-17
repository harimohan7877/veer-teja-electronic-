'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';
import { useWishlistStore } from '@/lib/store';

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlistStore();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const message = encodeURIComponent(
      `नमस्ते! मैं इन उत्पादों के बारे में जानना चाहता हूं:\n\n${items.map(p => `• ${p.nameHi} - ₹${p.price?.toLocaleString()}`).join('\n')}`
    );
    window.open(`https://wa.me/919928330252?text=${message}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                <span className="hindi-text">विशलिस्ट</span>
              </h1>
              <p className="text-gray-500 mt-1">{items.length} items saved</p>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearWishlist}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Clear all
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">Save items you like to your wishlist</p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark"
              >
                <ShoppingBag className="w-5 h-5" />
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="aspect-square bg-gray-100 relative">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeItem(product.id);
                        }}
                        className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </Link>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-bold text-gray-900 mb-2 hover:text-primary line-clamp-2 hindi-text">
                        {product.nameHi}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">₹{product.price?.toLocaleString()}</span>
                        {product.mrp && (
                          <span className="text-sm text-gray-400 line-through ml-2">₹{product.mrp.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={handleWhatsAppOrder}
                      className="w-full mt-3 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark"
                    >
                      Enquire Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}