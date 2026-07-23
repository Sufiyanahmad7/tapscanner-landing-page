'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

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
    <section className="py-14 bg-white relative overflow-hidden" id="problem">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          {/* <div className="inline-block mb-4">
            <Badge variant="orange" size="md" className="shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Why Organizations Choose TapScanner</span>
            </Badge>
          </div> */}

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Why Modern Enterprises Choose TapScanner
          </h2>
          {/* 
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Replace manual visitor registers, paper gate passes and disconnected approval processes with one intelligent visitor management platform.
          </p> */}
        </motion.div>

        {/* Floating Glassmorphism Panels Container */}
        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-14">

          {/* LEFT CARD: Without TapScanner */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            animate={{ y: [0, -4, 0] }}
            transition-repeat={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ y: -8 }}
            className="flex-1 max-w-[520px] w-full mx-auto rounded-[30px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group cursor-default"
            style={{
              background: 'rgba(254, 242, 242, 0.72)', // soft light red bg
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(254, 202, 202, 0.65)', // subtle red border
              boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 28px 70px rgba(239, 68, 68, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(15, 23, 42, 0.08)';
            }}
          >
            <div>
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1.5 flex items-center gap-2.5">
                  <span className="text-rose-500 font-extrabold text-2xl">✕</span> Without TapScanner
                </h3>
                <p className="text-sm font-medium text-slate-500">Traditional visitor management</p>
              </div>

              {/* List */}
              <ul className="space-y-4 mb-10">
                {withoutItems.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                    className="flex items-center gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-rose-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <X className="w-4 h-4 text-rose-600 stroke-[2.5]" />
                    </div>
                    <span className="text-base font-medium text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Status Badge */}
            <div className="pt-4 border-t border-rose-200/60">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-rose-700 bg-rose-100/80 border border-rose-200/80">
                Time-consuming &amp; error-prone
              </span>
            </div>
          </motion.div>

          {/* CENTER DIVIDER */}
          <div className="hidden lg:flex flex-col items-center justify-center relative self-stretch py-8 z-10">
            {/* Glowing Gradient Line */}
            <div className="w-[2px] h-full bg-gradient-to-b from-orange-500/20 via-orange-500/80 to-orange-500/20 rounded-full" />
            {/* Center Circle */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-10 h-10 rounded-full bg-white border-2 border-orange-500/60 shadow-lg shadow-orange-500/30 flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
            </motion.div>
          </div>

          {/* Horizontal divider for mobile/tablet */}
          <div className="flex lg:hidden items-center justify-center my-2">
            <div className="h-[2px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
          </div>

          {/* RIGHT CARD: With TapScanner */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            animate={{ y: [0, -4, 0] }}
            transition-repeat={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            whileHover={{ y: -8 }}
            className="flex-1 max-w-[520px] w-full mx-auto rounded-[30px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group cursor-default"
            style={{
              background: 'rgba(255, 255, 255, 0.72)', // premium white glass
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08), 0 0 40px rgba(249, 115, 22, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 28px 70px rgba(249, 115, 22, 0.22), 0 0 50px rgba(249, 115, 22, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(15, 23, 42, 0.08), 0 0 40px rgba(249, 115, 22, 0.08)';
            }}
          >
            <div>
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1.5 flex items-center gap-2.5">
                  <span className="text-emerald-500 font-extrabold text-2xl">✓</span> With TapScanner
                </h3>
                <p className="text-sm font-medium text-slate-500">Smart visitor &amp; movement management</p>
              </div>

              {/* List */}
              <ul className="space-y-4 mb-10">
                {withItems.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                    className="flex items-center gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    </div>
                    <span className="text-base font-medium text-slate-800 font-semibold">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Status Badge */}
            <div className="pt-4 border-t border-slate-100">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-orange-700 bg-orange-50 border border-orange-200/80 shadow-xs">
                Secure • Automated • Real-time
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
