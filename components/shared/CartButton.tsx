'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export default function CartButton() {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = getItemCount();
  const total = getTotal();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-xl hover:bg-surface transition-all border border-transparent hover:border-border group"
      >
        <ShoppingCart className="w-5 h-5 text-text-mid group-hover:text-secondary transition-colors" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-[10px] font-black rounded-lg flex items-center justify-center shadow-lg animate-fade-in">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-border z-50 overflow-hidden animate-fade-in">
          <div className="p-5 border-b border-border bg-surface/50">
            <h3 className="font-black text-primary text-sm uppercase tracking-wider">Shopping Cart</h3>
            <p className="text-[10px] text-text-light font-bold uppercase tracking-widest mt-0.5">{itemCount} items selected</p>
          </div>

          {items.length === 0 ? (
            <div className="p-10 text-center">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-text-light" />
              </div>
              <p className="text-text-mid font-bold text-sm">Your cart is empty</p>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="text-secondary text-xs font-black uppercase tracking-widest hover:underline mt-4 inline-block"
              >
                Start shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="max-h-80 overflow-y-auto p-4 space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all group"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-14 h-14 object-cover rounded-lg border border-border"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs text-primary truncate hindi-text">
                        {item.product.nameHi}
                      </p>
                      <p className="text-[10px] text-secondary font-black mt-1">
                        ₹{item.product.price?.toLocaleString()} × {item.quantity}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-md hover:bg-secondary hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-black text-primary">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-md hover:bg-danger hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-text-light hover:text-danger transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-border bg-surface/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-mid">Total Amount</span>
                  <span className="text-lg font-black text-primary tracking-tighter">₹{total.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
                      `नमस्ते! मैं इन उत्पादों को खरीदना चाहता हूं:\n\n${items.map(i => `• ${i.product.nameHi} - ₹${i.product.price} x ${i.quantity}`).join('\n')}\n\nTotal: ₹${total.toLocaleString()}`
                    );
                    window.open(`https://wa.me/919928330252?text=${message}`, '_blank');
                    setIsOpen(false);
                  }}
                  className="w-full py-3.5 bg-secondary text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-secondary/90 transition-all shadow-lg active:scale-95"
                >
                  Order via WhatsApp
                </button>
              </div>
            </>
          )}

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-border transition-colors"
          >
            <X className="w-4 h-4 text-text-light" />
          </button>
        </div>
      )}
    </div>
  );
}