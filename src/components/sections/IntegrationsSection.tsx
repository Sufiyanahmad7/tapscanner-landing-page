'use client';

import React from 'react';
import { INTEGRATIONS_LIST } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Sparkles } from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="orange" size="md" className="mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            Seamless Ecosystem Integration
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Connects With Your Existing Hardware & Identity Providers.
          </h2>
          <p className="text-base text-slate-600 font-medium">
            TapScanner plugs into your identity providers, communication channels, turnstiles, and printer hardware out of the box.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {INTEGRATIONS_LIST.map((tool) => (
            <div
              key={tool.name}
              className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col items-center justify-center text-center hover:border-orange-500/40 transition-all hover:-translate-y-1 shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-2 font-bold text-xs">
                {tool.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-xs font-bold text-slate-800 mb-0.5">{tool.name}</div>
              <div className="text-[10px] font-mono text-slate-500">{tool.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
