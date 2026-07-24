'use client';

import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 sm:whitespace-nowrap">
            Proven ROI Across Global Facilities
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            See how enterprise security and workplace experience leads rely on TapScanner every day.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <GlassCard key={t.id} variant="light" className="p-8 flex flex-col justify-between hover:border-orange-500/40">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <span className="text-xs font-mono font-bold bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full border border-orange-500/20">
                    ⚡ {t.impactBadge}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-slate-300"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                    <div className="text-[11px] font-semibold text-slate-800">{t.company}</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
