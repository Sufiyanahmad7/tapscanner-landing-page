'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const BottomCTA: React.FC<{ onBookDemo: () => void }> = ({ onBookDemo }) => {
  return (
    <section className="py-10 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">
          Transform Your Visitor Management Today
        </h2>

        <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-7 text-slate-600 mb-8">
          Simplify visitor check-ins, automate approvals, and strengthen workplace
          security with one intelligent visitor management platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="xl"
            onClick={onBookDemo}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Request Demo
          </Button>

          <Button
            variant="outline"
            size="xl"
            onClick={onBookDemo}
            className="bg-white text-slate-700 hover:bg-slate-100 border-slate-300"
          >
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};
