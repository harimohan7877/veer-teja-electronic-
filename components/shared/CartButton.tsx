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
        className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white">Shopping Cart</h3>
            <p className="text-sm text-gray-500">{itemCount} items</p>
          </div>

          {items.length === 0 ? (
            <div className="p-8 text-center">
              <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Your cart is empty</p>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="text-primary text-sm font-medium hover:underline mt-2 inline-block"
              >
                Start shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto p-2">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-900 dark:text-white truncate">
                        {item.product.nameHi}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₹{item.product.price?.toLocaleString()} × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-200">Total:</span>
                  <span className="font-bold text-gray-900 dark:text-white">₹{total.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
                      `नमस्ते! मैं इन उत्पादों को खरीदना चाहता हूं:\n\n${items.map(i => `• ${i.product.nameHi} - ₹${i.product.price} x ${i.quantity}`).join('\n')}\n\nTotal: ₹${total.toLocaleString()}`
                    );
                    window.open(`https://wa.me/919928330252?text=${message}`, '_blank');
                    setIsOpen(false);
                  }}
                  className="w-full py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Order via WhatsApp
                </button>
              </div>
            </>
          )}

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}