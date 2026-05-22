'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Grid, Camera, Store, Wrench, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';

const GALLERY_IMAGES = [
  { id: 1, category: 'shop', src: 'https://iili.io/C9kH9KN.jpg', caption: 'दुकान का नजारा', captionHi: 'Shop View' },
  { id: 2, category: 'shop', src: 'https://iili.io/C9kH2HX.jpg', caption: 'शोरूम', captionHi: 'Showroom' },
  { id: 3, category: 'products', src: 'https://iili.io/C9eDwiP.jpg', caption: 'इलेक्ट्रिकल बॉक्स', captionHi: 'Electrical Box' },
  { id: 4, category: 'products', src: 'https://iili.io/C9eDWDQ.jpg', caption: 'MCB', captionHi: 'Snipper Gold MCB' },
  { id: 5, category: 'products', src: 'https://iili.io/C9k99yu.jpg', caption: 'पंखा', captionHi: 'Ceiling Fan' },
  { id: 6, category: 'products', src: 'https://iili.io/C9eDe0F.jpg', caption: 'कंबाइंड बॉक्स', captionHi: 'Combined Box' },
  { id: 7, category: 'products', src: 'https://iili.io/C9eDOf1.jpg', caption: 'बेड स्विच', captionHi: 'Bed Switch' },
  { id: 8, category: 'products', src: 'https://iili.io/C9eD8Ja.jpg', caption: '2-पिन प्लग', captionHi: '2-Pin Plug' },
  { id: 9, category: 'products', src: 'https://iili.io/C9k9mVR.jpg', caption: 'सॉकेट', captionHi: 'Electrical Sockets' },
  { id: 10, category: 'products', src: 'https://iili.io/C9kHHlI.jpg', caption: 'वाटर कूलर', captionHi: 'Water Cooler' },
  { id: 11, category: 'products', src: 'https://iili.io/C9kHJSt.jpg', caption: 'वाटर कूलर (Beige)', captionHi: 'Water Cooler' },
  { id: 12, category: 'products', src: 'https://iili.io/C9kHFNs.jpg', caption: 'ऑरेंज कूलर', captionHi: 'Orange Cooler' },
];

const CATEGORIES = [
  { id: 'all', label: 'सभी', icon: Grid },
  { id: 'shop', label: 'दुकान', icon: Store },
  { id: 'repair', label: 'मरम्मत', icon: Wrench },
  { id: 'products', label: 'उत्पाद', icon: Camera },
  { id: 'team', label: 'टीम', icon: Users },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ImageIcon className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hindi-text">
                गैलरी
              </h1>
              <p className="text-lg opacity-90">
                हमारी दुकान, सर्विस और उत्पादों की तस्वीरें
              </p>
            </motion.div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-center px-2">
                    {image.captionHi}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-bold hindi-text">{selectedImage.captionHi}</h3>
                <p className="text-gray-400">{selectedImage.caption}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}