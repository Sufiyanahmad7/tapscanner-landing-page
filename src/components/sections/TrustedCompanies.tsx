'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Lock, Server } from 'lucide-react';
import { TRUSTED_COMPANIES, COMPLIANCE_BADGES } from '@/lib/constants';

export const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-10 bg-slate-50 text-slate-900 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
          TRUSTED BY 500+ ENTERPRISES, MANUFACTURING PLANTS & COMMERCIAL TOWERS
        </p>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 py-2 animate-marquee whitespace-nowrap">
          {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-orange-500/40 hover:text-slate-900 shadow-xs transition-all shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span>{company.name}</span>
              <span className="text-xs text-slate-400 font-mono">({company.location})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
