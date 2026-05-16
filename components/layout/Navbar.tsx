'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Moon, Sun, Search, ShoppingCart, User } from 'lucide-react';

const navLinks = [
  { label: 'Home', labelHi: 'होम', href: '/' },
  { label: 'Products', labelHi: 'उत्पाद', href: '/products' },
  { label: 'Services', labelHi: 'सेवाएं', href: '/services' },
  { label: 'Booking', labelHi: 'बुकिंग', href: '/booking' },
  { label: 'Gallery', labelHi: 'गैलरी', href: '/gallery' },
  { label: 'About', labelHi: 'बारे में', href: '/about' },
  { label: 'Contact', labelHi: 'संपर्क', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
      }`}
    >
      {/* Top Bar - Croma Style */}
      <div className="bg-primary text-white py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>📞 Customer Support: 9928330252 | 6350211515</span>
          <span>🏪 Wholesale & Retail Available</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl">⚡</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary hindi-text leading-tight">
                वीर तेजा
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Electronics & Repair
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, services..."
                className="w-full pl-4 pr-12 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition-colors relative group"
              >
                <span className="hindi-text">{link.labelHi}</span>
                <span className="hidden">{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <Link
              href="tel:9928330252"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="hidden lg:inline font-medium">कॉल करें</span>
            </Link>
            <Link
              href="https://wa.me/919928330252?text=नमस्ते! मुझे अपने इलेक्ट्रॉनिक सामान की मरम्मत करवानी है।"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-whatsapp text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-md">
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium"
                >
                  <span className="hindi-text">{link.labelHi}</span>
                  <span className="hidden ml-2">({link.label})</span>
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3 border-t">
                <Link
                  href="tel:9928330252"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="hindi-text font-medium">कॉल करें</span>
                </Link>
                <Link
                  href="https://wa.me/919928330252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-whatsapp text-white rounded-lg font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}