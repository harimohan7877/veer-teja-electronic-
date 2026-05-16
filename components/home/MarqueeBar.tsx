'use client';

import { MARQUEE_MESSAGES, BRANDS } from '@/lib/data';

export default function MarqueeBar() {
  const messages = [...MARQUEE_MESSAGES, ...MARQUEE_MESSAGES];

  return (
    <div className="bg-primary text-white py-3 overflow-hidden relative">
      {/* Gradient edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {messages.map((msg, index) => (
          <span key={index} className="mx-8 flex items-center gap-2 font-medium">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BrandsStrip() {
  const brandNames = BRANDS.map(b => b.name);
  const brands = [...brandNames, ...brandNames];

  return (
    <div className="bg-white py-10 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-8 font-medium">ब्रांड जो उपलब्ध हैं | Available Brands</p>
        <div className="relative overflow-hidden">
          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="text-xl font-bold text-gray-400 hover:text-primary transition-colors cursor-pointer flex-shrink-0"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}