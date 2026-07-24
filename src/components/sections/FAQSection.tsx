'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';

export const FAQSection: React.FC<{ onBookDemo?: () => void }> = ({ onBookDemo }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('1');

  return (
    <section className="py-10 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-7 text-slate-600">
            Find answers to common questions about TapScanner, including setup,
            security, visitor management, and platform features.
          </p>
        </div>

        {/* FAQ Accordion List (5 Items) */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <GlassCard
                key={faq.id}
                variant="light"
                hoverEffect={false}
                className="p-5 md:p-6 cursor-pointer"
                onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-orange-500 text-white' : 'text-slate-600'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 pt-4 border-t border-slate-200 text-xs md:text-sm text-slate-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>

        {/* Small Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-sm font-medium text-slate-600">
            Still have questions?{' '}
            <button
              type="button"
              onClick={() => {
                if (onBookDemo) {
                  onBookDemo();
                } else {
                  const demoEl = document.getElementById('demo-inquiry');
                  demoEl?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-orange-600 font-semibold hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              Contact our sales team.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
