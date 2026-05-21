'use client';

import { MARQUEE_MESSAGES, BRANDS } from '@/lib/data';

export default function MarqueeBar() {
  const messages = [...MARQUEE_MESSAGES, ...MARQUEE_MESSAGES];

  return (
    <div className="bg-primary text-white py-3.5 overflow-hidden relative border-b border-white/5 shadow-xl">
      {/* Gradient edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {messages.map((msg, index) => (
          <span key={index} className="mx-12 flex items-center gap-3 font-bold text-sm tracking-widest uppercase text-white/90">
            <span className="text-accent">✦</span> {msg}
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
    <div className="bg-surface py-12 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-2">Authorized Partner</span>
          <p className="text-center text-text-mid text-sm font-bold hindi-text">ब्रांड जो उपलब्ध हैं | Available Brands</p>
        </div>
        <div className="relative overflow-hidden">
          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface via-surface/80 to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-black text-border hover:text-secondary transition-all cursor-default flex-shrink-0 tracking-tighter grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
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