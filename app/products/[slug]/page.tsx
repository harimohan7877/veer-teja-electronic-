'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, Share2, Truck, ShieldCheck, RefreshCw, Check, X, ChevronRight, Phone } from 'lucide-react';
import WishlistButton from '@/components/shared/WishlistButton';
import { useCartStore } from '@/lib/store';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';
import { PRODUCTS, CATEGORIES } from '@/lib/data';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = PRODUCTS.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (product) {
      // Cast to Product type with required fields
      const productWithDefaults = {
        ...product,
        isActive: true,
        isWholesale: false,
        tags: [] as string[],
        specifications: undefined,
        createdAt: new Date(),
      } as Product;
      addItem(productWithDefaults, quantity);
      alert('Added to cart!');
    }
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link href="/products" className="text-primary hover:underline">
              Go to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const category = CATEGORIES.find(c => c.id === product.categoryId);
  const relatedProducts = PRODUCTS.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  const handleEnquiry = () => {
    const message = encodeURIComponent(
      `नमस्ते! मैं इस उत्पाद के बारे में जानना चाहता हूं:\n\n` +
      `उत्पाद: ${product.nameHi}\n` +
      `कीमत: ₹${product.price?.toLocaleString()}\n` +
      `ब्रांड: ${product.brand}\n\n` +
      `कृपया जानकारी दें।`
    );
    window.open(`https://wa.me/919928330252?text=${message}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-primary">Products</Link>
              {category && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <Link href={`/products?category=${category.slug}`} className="hover:text-primary">
                    {category.nameEn}
                  </Link>
                </>
              )}
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">{product.nameHi}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={product.images[selectedImage] || 'https://via.placeholder.com/600x600?text=Product'}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && product.discount >= 20 && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === idx ? 'border-primary' : 'border-gray-200'
                        }`}
                      >
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <WishlistButton product={product} showLabel />
                  </div>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: product.nameHi,
                          text: `Check out ${product.nameHi} - ₹${product.price}`,
                          url: window.location.href,
                        });
                      } else {
                        // Fallback: copy to clipboard
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Brand & Title */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 hindi-text">
                    {product.nameHi}
                  </h1>
                  <p className="text-gray-500 mt-1">{product.name}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-lg">
                    <span className="font-bold">{product.rating}</span>
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                  <span className="text-gray-500">{product.reviewCount} रेटिंग</span>
                </div>

                {/* Price */}
                <div className="border-t border-b py-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-bold text-gray-900">₹{product.price?.toLocaleString()}</span>
                    {product.mrp && (
                      <>
                        <span className="text-lg text-gray-400 line-through">₹{product.mrp.toLocaleString()}</span>
                        <span className="text-green-600 font-medium">
                          ₹{(product.mrp - (product.price || 0)).toLocaleString()} छूट
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    MRP includes all taxes
                  </p>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <span className="flex items-center gap-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">स्टॉक में उपलब्ध</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-red-600">
                      <X className="w-5 h-5" />
                      <span className="font-medium">स्टॉक में नहीं</span>
                    </span>
                  )}
                </div>

                {/* Available Offers */}
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900">उपलब्ध ऑफर:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="w-4 h-4 text-gray-600" />
                      <span>फ्री होम डिलीवरी</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ShieldCheck className="w-4 h-4 text-gray-600" />
                      <span>1 साल की वारंटी</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <RefreshCw className="w-4 h-4 text-gray-600" />
                      <span>7 दिन में रिप्लेसमेंट</span>
                    </div>
                  </div>
                </div>

                {/* Quantity & CTA */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Quantity:</span>
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button
                      onClick={handleEnquiry}
                      className="flex-1 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      WhatsApp से पूछें
                    </button>
                    <a
                      href="tel:9928330252"
                      className="py-4 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      कॉल करें
                    </a>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">डिलीवरी:</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📍 जयसंगसर & गोमटिया, Rajasthan - Free Delivery</p>
                    <p>🚚 2-4 दिन में डिलीवरी</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="bg-white rounded-xl shadow-sm mt-8 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">विवरण</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">मुख्य विशेषताएं:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span className="text-gray-600">ब्रांड: {product.brand}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span className="text-gray-600">उच्च गुणवत्ता</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span className="text-gray-600">थोक और खुदरा दोनों उपलब्ध</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span className="text-gray-600">सर्विस उपलब्ध</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">वारंटी:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span className="text-gray-600">1 साल निर्माता वारंटी</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span className="text-gray-600">वीर तेजा से खरीदने पर सर्विस गारंटी</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span className="text-gray-600">राजस्थान भर में सर्विस नेटवर्क</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm mt-8 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">उत्पाद विवरण</h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description || `${product.nameHi} - ${product.brand} का प्रीमियम उत्पाद। वीर तेजा इलेक्ट्रॉनिक्स में आपको मिलता है सस्ती दरों में असली उत्पाद। थोक और खुदरा दोनों उपलब्ध है।`}
            </p>
            {product.isWholesale && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">✅ थोक दर उपलब्ध — बड़े ऑर्डर पर विशेष छूट के लिए कॉल करें</p>
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">साथ में खरीदें</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((relProduct, index) => (
                  <motion.div
                    key={relProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                  >
                    <Link href={`/products/${relProduct.slug}`}>
                      <div className="aspect-square bg-gray-100">
                        <img
                          src={relProduct.images[0]}
                          alt={relProduct.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-gray-500">{relProduct.brand}</p>
                        <h3 className="font-medium text-gray-900 text-sm line-clamp-2 hindi-text">
                          {relProduct.nameHi}
                        </h3>
                        <p className="font-bold text-gray-900 mt-1">₹{relProduct.price?.toLocaleString()}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
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