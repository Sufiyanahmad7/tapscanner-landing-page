'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Building2, Sparkles, ArrowRight } from 'lucide-react';
import { WHY_TAPSCANNER_PILLARS } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-orange-500" />,
  Zap: <Zap className="w-7 h-7 text-amber-500" />,
  Building2: <Building2 className="w-7 h-7 text-blue-500" />,
};

export const WhyTapScanner: React.FC = () => {
  return (
    <section className="py-14 bg-white relative overflow-hidden" id="why-tapscanner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <Badge variant="orange" size="md">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Core Value Pillars
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Designed for Modern Enterprises.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-slate-600 font-medium"
          >
            TapScanner unifies reception, gate pass assets, employee movements, and safety roll calls into a single cloud command center.
          </motion.p>
        </motion.div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_TAPSCANNER_PILLARS.map((pillar) => (
            <GlassCard
              key={pillar.title}
              variant="orangeGlow"
              className="p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shadow-md shadow-orange-500/5">
                  {iconMap[pillar.icon]}
                </div>

                <div className="text-xs font-mono font-bold text-orange-600 tracking-wider uppercase mb-2">
                  {pillar.tagline}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-slate-900 font-mono">
                    {pillar.metric}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold">
                    {pillar.metricLabel}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
