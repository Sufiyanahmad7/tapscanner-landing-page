'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const BottomCTA: React.FC<{ onBookDemo: () => void }> = ({ onBookDemo }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Badge variant="orange" size="lg" className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">
          <Sparkles className="w-4 h-4 text-orange-400" />
          Ready to Upgrade Your Gate Security?
        </Badge>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
          Transform Your Visitor & Gate Operations Today.
        </h2>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
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
            className="bg-white/10 text-white hover:bg-white/20 border-white/20"
          >
            Talk to Security Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
