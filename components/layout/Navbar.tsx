'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Moon, Sun, Search, ShoppingCart, User, Heart } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import CartButton from '@/components/shared/CartButton';
import { useWishlistStore } from '@/lib/store';

// Wishlist count badge component
function WishlistCount() {
  const { items } = useWishlistStore();
  if (items.length === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
      {items.length}
    </span>
  );
}

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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search functionality
  const searchResults = searchQuery.length > 2
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.nameHi.includes(searchQuery) ||
        p.brand?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSearchResults(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowSearchResults(value.length > 2);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
      }`}
    >
      {/* Top Bar - Professional Navy */}
      <div className="bg-primary text-white py-1.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-accent transition-colors cursor-default">
              <Phone className="w-3.5 h-3.5" /> 9928330252 | 6350211515
            </span>
            <span className="opacity-50">|</span>
            <span className="flex items-center gap-1.5 hover:text-accent transition-colors cursor-default">
              🏪 Wholesale & Retail Available
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-accent transition-colors">Support</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl md:text-2xl">⚡</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold text-primary hindi-text leading-tight group-hover:text-secondary transition-colors">
                वीर तेजा
              </span>
              <span className="text-[10px] md:text-xs text-text-light uppercase tracking-[0.2em] font-bold">
                Electronics & Repair
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products, services..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => setShowSearchResults(searchQuery.length > 2)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                  className="w-full pl-4 pr-12 py-2.5 border-2 border-border rounded-xl focus:outline-none focus:border-secondary transition-all"
                />
                <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all shadow-md active:scale-95">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-border z-50 overflow-hidden animate-fade-in">
                {searchResults.map(product => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={() => { setShowSearchResults(false); setSearchQuery(''); }}
                    className="flex items-center gap-3 p-3 hover:bg-surface border-b border-border last:border-0 transition-colors"
                  >
                    <img src={product.images[0]} alt={product.name} className="w-10 h-10 object-cover rounded-lg border border-border" />
                    <div>
                      <p className="font-semibold text-text-dark text-sm">{product.nameHi}</p>
                      <p className="text-xs text-text-mid">{product.brand} - <span className="text-secondary font-bold">₹{product.price?.toLocaleString()}</span></p>
                    </div>
                  </Link>
                ))}
                <Link
                  href={`/products?search=${encodeURIComponent(searchQuery)}`}
                  onClick={() => { setShowSearchResults(false); setSearchQuery(''); }}
                  className="block p-3 text-center text-secondary hover:bg-surface text-sm font-bold uppercase tracking-wider"
                >
                  View all results →
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-mid hover:text-secondary font-semibold transition-all relative group py-2"
              >
                <span className="hindi-text text-sm md:text-base">{link.labelHi}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-surface hover:bg-border transition-all border border-border"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-text-mid" />}
            </button>

            {/* Wishlist Button */}
            <Link
              href="/wishlist"
              className="relative p-2.5 rounded-xl bg-surface hover:bg-border transition-all border border-border"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 text-text-mid" />
              <WishlistCount />
            </Link>

            {/* Cart Button */}
            <CartButton />

            <Link
              href="tel:9928330252"
              className="flex items-center gap-2 px-4 py-2.5 bg-surface text-text-dark rounded-xl hover:bg-border transition-all border border-border font-bold shadow-sm"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span className="hidden lg:inline text-sm">कॉल करें</span>
            </Link>
            <Link
              href="https://wa.me/919928330252?text=नमस्ते! मुझे अपने इलेक्ट्रॉनिक सामान की मरम्मत करवानी है।"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-whatsapp text-white rounded-xl hover:shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all font-bold shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline text-sm">WhatsApp</span>
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
              <form onSubmit={(e) => { e.preventDefault(); if(searchQuery.trim()) { router.push(`/products?search=${encodeURIComponent(searchQuery)}`); setIsOpen(false); }}} className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                />
                <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-md">
                  <Search className="w-4 h-4" />
                </button>
              </form>

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