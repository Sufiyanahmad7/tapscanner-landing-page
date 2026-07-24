'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const withoutItems = [
  'Manual visitor register',
  'Paper gate passes',
  'Phone approvals',
  'Manual movement tracking',
  'Delayed security response',
  'No audit trail',
];

const withItems = [
  'Digital visitor registration',
  'QR-based gate passes',
  'Instant host approvals',
  'Real-time visitor tracking',
  'Emergency evacuation dashboard',
  'Complete audit history',
];

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden flex flex-col justify-center min-h-[85vh] max-h-screen" id="why-tapscanner">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 mb-2">
            Why Modern Enterprises Choose TapScanner
          </h2>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm leading-6 text-slate-600">
            Replace manual visitor registers, paper gate passes, and disconnected approval
            processes with one intelligent visitor management platform.
          </p>
        </motion.div>

        {/* Floating Glassmorphism Panels Container */}
        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-8">

          {/* LEFT CARD: Without TapScanner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="flex-1 max-w-[480px] w-full mx-auto rounded-[24px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 group cursor-default"
            style={{
              background: 'rgba(254, 242, 242, 0.75)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(254, 202, 202, 0.7)',
              boxShadow: '0 12px 40px rgba(15, 23, 42, 0.06)',
            }}
          >
            <div>
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="text-rose-500 font-extrabold text-xl">✕</span> Without TapScanner
                </h3>
                <p className="text-xs font-medium text-slate-500">Traditional visitor management</p>
              </div>

              {/* List */}
              <ul className="space-y-2.5 mb-5">
                {withoutItems.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 + idx * 0.05 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-rose-100/90 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-rose-600 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Status Badge */}
            <div className="pt-3 border-t border-rose-200/60">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-rose-700 bg-rose-100/80 border border-rose-200/80">
                Time-consuming &amp; error-prone
              </span>
            </div>
          </motion.div>

          {/* CENTER DIVIDER */}
          <div className="hidden lg:flex flex-col items-center justify-center relative self-stretch py-4 z-10">
            <div className="w-[2px] h-full bg-gradient-to-b from-orange-500/20 via-orange-500/80 to-orange-500/20 rounded-full" />
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-8 h-8 rounded-full bg-white border-2 border-orange-500/60 shadow-md shadow-orange-500/30 flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            </motion.div>
          </div>

          {/* Horizontal divider for mobile/tablet */}
          <div className="flex lg:hidden items-center justify-center my-1">
            <div className="h-[2px] w-full max-w-[160px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
          </div>

          {/* RIGHT CARD: With TapScanner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="flex-1 max-w-[480px] w-full mx-auto rounded-[24px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 group cursor-default"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(254, 215, 170, 0.8)',
              boxShadow: '0 12px 40px rgba(15, 23, 42, 0.06), 0 0 30px rgba(249, 115, 22, 0.08)',
            }}
          >
            <div>
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="text-orange-500 font-black text-xl">✓</span> With TapScanner
                  </h3>
                  <p className="text-xs font-medium text-slate-500">Modern automated platform</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm">
                  Recommended
                </span>
              </div>

              {/* List */}
              <ul className="space-y-2.5 mb-5">
                {withItems.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 + idx * 0.05 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Status Badge */}
            <div className="pt-3 border-t border-emerald-200/60">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-100/80 border border-emerald-200/80">
                ⚡ Fast, secure &amp; 100% compliant
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
