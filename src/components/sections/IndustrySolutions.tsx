'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Factory, Hospital, GraduationCap, Truck, Check, Sparkles } from 'lucide-react';
import { INDUSTRY_SOLUTIONS } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  Building: <Building className="w-5 h-5" />,
  Factory: <Factory className="w-5 h-5" />,
  Hospital: <Hospital className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
};

export const IndustrySolutions: React.FC<{ onBookDemo?: () => void }> = ({ onBookDemo }) => {
  const [activeIndustryId, setActiveIndustryId] = useState('corporate');

  const activeIndustry = INDUSTRY_SOLUTIONS.find((i) => i.id === activeIndustryId) || INDUSTRY_SOLUTIONS[0];

  return (
    <section className="py-10 bg-white relative overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">
            Built for Every Industry
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-7 text-slate-600">
            From corporate offices to manufacturing facilities, TapScanner adapts to
            your visitor management and security requirements.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {INDUSTRY_SOLUTIONS.map((ind) => {
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs md:text-sm transition-all cursor-pointer border ${isActive
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl shadow-slate-900/20 scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 border-slate-200/80 hover:bg-slate-200/60'
                  }`}
              >
                <span className={isActive ? 'text-orange-400' : 'text-slate-500'}>
                  {iconMap[ind.iconName]}
                </span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard variant="orangeGlow" className="p-8 max-w-4xl mx-auto border-orange-500/30">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
                    {iconMap[activeIndustry.iconName]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{activeIndustry.name}</h3>
                    <p className="text-xs font-semibold text-orange-600">
                      TapScanner Tailored Architecture
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-3 rounded-2xl text-center shadow-sm">
                  <div className="text-2xl font-black text-slate-900 font-mono">
                    {activeIndustry.stats.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">
                    {activeIndustry.stats.label}
                  </div>
                </div>
              </div>

              <div className="mt-6 mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {activeIndustry.headline}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeIndustry.description}
                </p>

                <h5 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold mb-3">
                  SPECIALIZED INDUSTRY FEATURES
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeIndustry.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2.5 bg-white border border-slate-200 p-3 rounded-xl text-xs font-semibold text-slate-800 shadow-xs"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex justify-end">
                <Button variant="primary" size="md" onClick={onBookDemo}>
                  Book {activeIndustry.name} Consultation
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
