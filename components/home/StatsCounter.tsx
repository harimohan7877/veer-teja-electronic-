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
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">Excellence Defined</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="hindi-text tracking-tight">20+ साल का अटूट भरोसा</span>
          </h2>
          <p className="text-white/50 font-medium max-w-lg mx-auto">हजारों संतुष्ट ग्राहकों का विश्वास और हमारी बेमिसाल सर्विस ही हमारी असली पहचान है</p>
        </div>

        {/* Stats Grid - High Tech Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Icon Circle */}
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-secondary/50 group-hover:bg-white/10 transition-all duration-300 shadow-2xl">
                  <stat.icon className="w-10 h-10 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <p className="text-accent font-bold hindi-text">{stat.labelHi}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Row - Glass Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: '100% Guarantee', sub: 'On all repairs', color: 'text-success' },
            { icon: Home, title: 'Home Service', sub: 'Free visit in city', color: 'text-secondary' },
            { icon: Clock, title: 'Quick Service', sub: 'Same day repair', color: 'text-accent' }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              viewport={{ once: true }}
              className="flex items-center gap-5 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
            >
              <div className={`w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center shadow-inner`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-sm tracking-wider">{item.title}</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}