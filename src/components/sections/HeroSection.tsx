'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gradient } from '@/components/ui/Gradient';
import { Arc } from '@/components/ui/Arc';
import { AnimatedWord } from '@/components/ui/AnimatedWord';
import { FloatingItems } from '@/components/ui/FloatingItems';

interface HeroSectionProps {
  onOpenDemoModal: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section
      className="relative min-h-screen bg-white flex flex-col items-center justify-start"
      style={{ overflow: 'visible' }}
      id="hero"
    >
      {/* Layer 1 — Gradient (sunrise glow behind everything) */}
      <Gradient />

      {/* Layer 2 — White Arc dome over gradient */}
      <Arc />

      {/* Layer 3 — Floating glassmorphism cards (above hero content for hover) */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-visible">
        <FloatingItems />
      </div>

      {/* Layer 4 — Hero content, above arc and cards */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 lg:px-8 pt-68 pb-0">
        {/* Content constrained to 900px */}
        <div className="max-w-[900px] mx-auto">

          {/* Headline staggered entrance */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
            className="font-medium tracking-[-0.04em] leading-[0.95] text-slate-900 mb-8"
            style={{
              fontSize: 'clamp(38px, 5vw, 60px)',
            }}
          >
            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="block"
            >
              Smarter Way To Manage
            </motion.span>

            {/* Animated word line */}
            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="block"
            >
              <AnimatedWord word="Visitor" />
            </motion.span>

            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="block"
            >
              Movement &amp; Security
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
            className="text-neutral-600 mx-auto mb-10"
            style={{
              maxWidth: '700px',
              fontSize: '15px',
              lineHeight: '1.8',
            }}
          >
            Manage visitors, employees, vehicles and gate operations from one intelligent platform
            with touchless check-ins, digital approvals and real-time visibility.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          >
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 font-semibold text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: '16px 36px',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #f59e0b 100%)',
                boxShadow: '0 12px 36px rgba(249,115,22,0.35)',
                fontSize: '15px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 20px 48px rgba(249,115,22,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 12px 36px rgba(249,115,22,0.35)';
              }}
            >
              Book Demo
            </button>
          </motion.div>

          {/* 120px spacer before next section */}
          <div className="h-[120px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
