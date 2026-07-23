'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldAlert, CheckCircle2, UserX, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const RollCallSimulator: React.FC = () => {
  const [isEvacActive, setIsEvacActive] = useState(false);
  const [accountedCount, setAccountedCount] = useState(312);
  const [unaccountedCount, setUnaccountedCount] = useState(14);

  const handleToggleEvac = () => {
    setIsEvacActive(!isEvacActive);
  };

  const handleMarkSafe = () => {
    if (unaccountedCount > 0) {
      setAccountedCount((prev) => prev + 1);
      setUnaccountedCount((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 md:p-6 text-white text-left relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isEvacActive ? 'bg-red-500 animate-ping' : 'bg-emerald-400'
            }`}
          />
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" /> AI Emergency Evac-Roll-Call
          </h4>
        </div>
        <button
          onClick={handleToggleEvac}
          className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            isEvacActive
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30 animate-pulse'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {isEvacActive ? 'SIREN ACTIVE' : 'TEST SIREN'}
        </button>
      </div>

      <p className="text-xs text-slate-400 mb-4">
        Real-time broadcast to mobile safety marshals at Assembly Point A & B.
      </p>

      {/* Counter Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 text-center">
          <div className="text-2xl font-extrabold text-emerald-400 font-mono">{accountedCount}</div>
          <div className="text-[11px] font-semibold text-emerald-300 flex items-center justify-center gap-1 mt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Accounted Safe
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-center">
          <div className="text-2xl font-extrabold text-red-400 font-mono">{unaccountedCount}</div>
          <div className="text-[11px] font-semibold text-red-300 flex items-center justify-center gap-1 mt-0.5">
            <UserX className="w-3.5 h-3.5" /> Unaccounted / In-Building
          </div>
        </div>
      </div>

      {/* Marshal Action Button */}
      <div className="flex gap-2">
        <Button
          variant="primary"
          size="sm"
          className="flex-1 justify-center text-xs"
          onClick={handleMarkSafe}
          disabled={unaccountedCount === 0}
        >
          Marshal Tap: Mark Next Person Safe
        </Button>
        <button
          onClick={() => {
            setAccountedCount(312);
            setUnaccountedCount(14);
          }}
          className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white cursor-pointer"
          title="Reset"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
