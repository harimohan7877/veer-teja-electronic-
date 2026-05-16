'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Wrench, Award, TrendingUp, Shield, Home } from 'lucide-react';
import { STATS } from '@/lib/data';

const stats = [
  { value: STATS.customers, label: 'Happy Customers', labelHi: 'संतुष्ट ग्राहक', icon: Users, suffix: '+' },
  { value: STATS.years, label: 'Years Experience', labelHi: 'साल का अनुभव', icon: Clock, suffix: '+' },
  { value: STATS.services, label: 'Services', labelHi: 'सेवाएं उपलब्ध', icon: Wrench, suffix: '+' },
  { value: STATS.brands, label: 'Brands', labelHi: 'ब्रांड उपलब्ध', icon: Award, suffix: '+' },
];

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium text-sm">WHY CHOOSE US</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="hindi-text">20+ साल का भरोसा</span>
          </h2>
          <p className="text-gray-400">हजारों संतुष्ट ग्राहकों का विश्वास हमारी पहचान है</p>
        </div>

        {/* Stats Grid - Vijay Sales Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Icon Circle */}
              <div className="relative inline-flex mb-4">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-gray-300 font-medium">{stat.label}</p>
              <p className="text-primary hindi-text text-sm">{stat.labelHi}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-white font-bold">100% Guarantee</h4>
              <p className="text-gray-400 text-sm">On all repairs</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-white font-bold">Home Service</h4>
              <p className="text-gray-400 text-sm">Free visit in city</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-white font-bold">Quick Service</h4>
              <p className="text-gray-400 text-sm">Same day repair</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}