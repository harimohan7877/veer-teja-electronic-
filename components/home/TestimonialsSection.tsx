'use client';

import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em]">Verified Feedback</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
            <span className="hindi-text tracking-tight">ग्राहक समीक्षाएं</span>
          </h2>
          <p className="text-text-mid font-medium">हमारे ग्राहकों की राय - सीधे Google Reviews से</p>
        </div>

        {/* Testimonials Grid - Google Reviews Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-border group"
            >
              {/* Quote Icon & Google Badge */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-10 h-10 text-secondary/10 group-hover:text-secondary/20 transition-colors" />
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-success/10 rounded-lg">
                  <MessageSquare className="w-3.5 h-3.5 text-success" />
                  <span className="text-[10px] text-success font-black uppercase tracking-wider">Verified Review</span>
                </div>
              </div>

              {/* Review */}
              <p className="text-text-dark mb-4 leading-relaxed font-medium">&quot;{testimonial.review}&quot;</p>
              <p className="text-text-mid mb-6 hindi-text text-sm leading-relaxed">&quot;{testimonial.reviewHi}&quot;</p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-warning fill-warning' : 'text-border'}`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center border border-secondary/10 overflow-hidden shadow-inner">
                  {testimonial.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                  ) : (
                    <span className="text-secondary font-black text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-black text-primary text-sm uppercase tracking-tight">{testimonial.name}</p>
                  <p className="text-[11px] text-text-light font-bold uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-xl border border-border group hover:-translate-y-1 transition-all">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-warning fill-warning" />
              ))}
            </div>
            <div className="flex flex-col items-start border-l border-border pl-4">
              <span className="font-black text-primary text-lg leading-none">4.8 / 5.0</span>
              <span className="text-[10px] text-text-light font-bold uppercase tracking-widest mt-1">from 200+ Google reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}