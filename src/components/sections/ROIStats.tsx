'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ROIStats: React.FC = () => {
  const stats = [
    { value: '85%', label: 'Faster Check-In Speed', sub: 'Under 10s guest arrival' },
    { value: '90%', label: 'Reduced Manual Gate Work', sub: 'Automated QR clearance' },
    { value: '100%', label: 'Audit Trail Compliance', sub: 'Zero PII violations' },
    { value: '99.99%', label: 'System Uptime SLA', sub: 'Multi-region redundancy' },
    { value: '500+', label: 'Global Enterprise Facilities', sub: 'Offices & factories' },
    { value: '1M+', label: 'Monthly Visitors Secured', sub: 'Across 14 countries' },
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:border-orange-500/40 transition-all hover:-translate-y-1 shadow-xs"
            >
              <div className="text-3xl lg:text-4xl font-black text-orange-600 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 mb-1">{stat.label}</div>
              <div className="text-[10px] text-slate-500 font-mono">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
