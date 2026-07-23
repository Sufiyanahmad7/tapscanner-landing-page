'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AnnouncementBar = ({ onOpenDemo }: { onOpenDemo: () => void }) => {
  return (
    <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-orange-500/20 relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 font-medium text-center">
        <span className="inline-flex items-center gap-1 bg-orange-500/20 text-orange-400 font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wide border border-orange-500/30">
          <Sparkles className="w-3 h-3" /> NEW FEATURE
        </span>
        <span className="text-slate-300">
          Real-Time AI Emergency Evacuation Roll Call is now live for enterprise accounts.
        </span>
        <button
          onClick={onOpenDemo}
          className="text-orange-400 hover:text-orange-300 underline font-semibold flex items-center gap-1 ml-1 cursor-pointer transition-colors"
        >
          Book Live Demo <ArrowRight className="w-3 h-3 inline" />
        </button>
      </div>
    </div>
  );
};
