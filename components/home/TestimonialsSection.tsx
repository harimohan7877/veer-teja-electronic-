'use client';

import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium text-sm">CUSTOMER REVIEWS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            <span className="hindi-text">ग्राहक समीक्षाएं</span>
          </h2>
          <p className="text-gray-500">हमारे ग्राहकों की राय - सीधे Google Reviews से</p>
        </div>

        {/* Testimonials Grid - Google Reviews Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon & Google Badge */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/20" />
                <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                  <MessageSquare className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-600 font-medium">Reviews</span>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-3 leading-relaxed">&quot;{testimonial.review}&quot;</p>
              <p className="text-gray-500 mb-4 hindi-text text-sm leading-relaxed">&quot;{testimonial.reviewHi}&quot;</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  {testimonial.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-900">4.8 / 5</span>
            <span className="text-gray-500">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}