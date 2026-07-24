'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const BottomCTA: React.FC<{ onBookDemo: () => void }> = ({ onBookDemo }) => {
  return (
    <section className="py-10 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 sm:whitespace-nowrap">
          Transform Your Visitor &amp; Gate Operations Today
        </h2>

        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          Join 500+ global enterprises, manufacturing hubs, and corporate towers securing over 1,000,000 movements monthly with TapScanner.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="xl"
            onClick={onBookDemo}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Request Enterprise Demo
          </Button>

          <Button
            variant="outline"
            size="xl"
            onClick={onBookDemo}
            className="bg-white text-slate-700 hover:bg-slate-100 border-slate-300"
          >
            Talk to Security Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
