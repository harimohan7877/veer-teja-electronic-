'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Search, Heart } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import CartButton from '@/components/shared/CartButton';
import { useWishlistStore } from '@/lib/store';

// Wishlist count badge component
function WishlistCount() {
  const { items } = useWishlistStore();
  if (items.length === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger text-white text-[10px] font-black rounded-lg flex items-center justify-center shadow-lg animate-fade-in">
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
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
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
      setShowSearch(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowSearchResults(value.length > 2);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-border'
          : 'bg-white border-b border-border/50'
      }`}
    >
      {/* Top Bar - Clean & Minimal */}
      <div className="bg-white text-text-mid py-2 px-4 border-b border-border transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-default">
              <Phone className="w-3.5 h-3.5 text-secondary" /> 
              <span className="hidden sm:inline">Support:</span> 9928330252
            </span>
            <span className="hidden md:flex items-center gap-2 text-text-light cursor-default">
              🏪 <span className="opacity-80">Wholesale & Retail Hub</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-secondary transition-colors">Support</Link>
            <Link href="/about" className="hover:text-secondary transition-colors hidden sm:block">About Us</Link>
            <div className="md:hidden flex items-center gap-4">
               <CartButton />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:bg-secondary transition-all duration-500">
              <span className="text-white text-xl md:text-2xl">⚡</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-black text-primary hindi-text leading-tight group-hover:text-secondary transition-colors tracking-tighter">
                वीर तेजा
              </span>
              <span className="text-[9px] md:text-[11px] text-text-light uppercase tracking-[0.3em] font-black leading-none mt-1">
                Electronics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary hover:text-secondary font-black uppercase tracking-[0.1em] text-[12px] transition-all relative group py-2"
              >
                <span className="hindi-text text-base md:text-[17px]">{link.labelHi}</span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-secondary transition-all group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Icon Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-3 rounded-2xl transition-all border-2 ${showSearch ? 'bg-primary text-white border-primary shadow-2xl' : 'bg-surface border-transparent text-primary hover:border-secondary hover:text-secondary'}`}
              >
                <Search className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-6 w-96 bg-white rounded-[32px] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-border p-6 z-50"
                  >
                    <form onSubmit={handleSearch} className="relative mb-6">
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="w-full pl-6 pr-14 py-4 bg-surface border-2 border-border rounded-xl focus:outline-none focus:border-secondary transition-all font-bold text-sm shadow-inner"
                      />
                      <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-white rounded-xl shadow-lg hover:bg-secondary transition-colors">
                        <Search className="w-5 h-5" />
                      </button>
                    </form>
                    
                    {showSearchResults && searchResults.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-text-light uppercase tracking-widest border-b border-border pb-3">Top Matches</p>
                        {searchResults.map(product => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            onClick={() => { setShowSearchResults(false); setShowSearch(false); setSearchQuery(''); }}
                            className="flex items-center gap-4 p-3 hover:bg-surface rounded-2xl transition-all border border-transparent hover:border-border group"
                          >
                            <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded-xl border border-border" />
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-xs text-primary truncate hindi-text group-hover:text-secondary">{product.nameHi}</p>
                                <p className="text-[10px] font-black text-secondary mt-1">₹{product.price?.toLocaleString()}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Wishlist Button */}
            <Link
              href="/wishlist"
              className="relative p-3 rounded-2xl bg-surface border-2 border-transparent text-primary hover:border-secondary hover:text-secondary transition-all"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 text-primary" />
              <WishlistCount />
            </Link>

            <CartButton />

            <Link
              href="tel:9928330252"
              className="flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-2xl hover:bg-secondary transition-all font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-primary/20 active:scale-95"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="hidden xl:inline">Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-2xl bg-surface border-2 border-border text-primary shadow-sm active:scale-95 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Premium adaptation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[108px] z-40 lg:hidden bg-white/98 backdrop-blur-2xl border-t border-border overflow-y-auto"
          >
            <div className="px-6 py-10 space-y-8">
              {/* Mobile Search - Enhanced */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-6 pr-16 py-5 bg-surface border-2 border-border rounded-[24px] focus:outline-none focus:border-secondary font-bold text-base shadow-inner"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-primary text-white rounded-2xl shadow-xl">
                  <Search className="w-6 h-6" />
                </button>
              </form>

              <div className="grid grid-cols-1 gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-5 px-8 bg-surface/50 hover:bg-secondary/5 rounded-3xl transition-all border border-border group"
                  >
                    <span className="hindi-text text-xl font-black text-primary group-hover:text-secondary">{link.labelHi}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-light opacity-40 group-hover:opacity-100">{link.label}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-10 flex flex-col gap-5 border-t border-border">
                <Link
                  href="tel:9928330252"
                  className="flex items-center justify-center gap-4 py-5 bg-primary text-white rounded-3xl font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-primary/30 active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  Support Desk
                </Link>
                <Link
                  href="https://wa.me/919928330252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 py-5 bg-whatsapp text-white rounded-3xl font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-whatsapp/30 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
              </div>
              
              <div className="flex justify-center gap-16 pt-6 pb-20">
                  <Link href="/wishlist" onClick={() => setIsOpen(false)} className="relative p-6 bg-surface rounded-[32px] border-2 border-border shadow-lg group">
                      <Heart className="w-8 h-8 text-primary group-hover:text-danger transition-colors" />
                      <WishlistCount />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.3em] text-text-light">Favorites</span>
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}