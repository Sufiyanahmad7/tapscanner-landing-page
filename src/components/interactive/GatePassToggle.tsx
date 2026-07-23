'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ShieldCheck, Clock, CheckCircle, ArrowRightLeft, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const GatePassToggle: React.FC = () => {
  const [passType, setPassType] = useState<'returnable' | 'non_returnable'>('returnable');
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 text-white text-left relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-orange-400" />
          <h4 className="text-base font-bold text-white">Digital Gate Pass Module</h4>
        </div>
        <Badge variant={passType === 'returnable' ? 'orange' : 'dark'} size="sm">
          {passType === 'returnable' ? 'Returnable Asset' : 'Non-Returnable Outward'}
        </Badge>
      </div>

      {/* Pass Type Selector Tabs */}
      <div className="grid grid-cols-2 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-4 text-xs font-semibold">
        <button
          onClick={() => {
            setPassType('returnable');
            setIsApproved(false);
          }}
          className={`py-2 rounded-lg transition-all cursor-pointer ${
            passType === 'returnable'
              ? 'bg-orange-500 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Returnable Gate Pass
        </button>
        <button
          onClick={() => {
            setPassType('non_returnable');
            setIsApproved(false);
          }}
          className={`py-2 rounded-lg transition-all cursor-pointer ${
            passType === 'non_returnable'
              ? 'bg-slate-800 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Non-Returnable Outward
        </button>
      </div>

      {/* Animated Pass Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={passType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div>
              <div className="font-mono text-slate-400">PASS ID: #GP-2026-8910</div>
              <div className="font-bold text-sm text-white mt-0.5">
                {passType === 'returnable'
                  ? 'Dell Latitude Laptops (Qty: 5)'
                  : 'Obsolete Metal Scrap (Qty: 250 kg)'}
              </div>
            </div>
            <span
              className={`font-mono px-2 py-1 rounded text-[10px] font-bold ${
                isApproved
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              }`}
            >
              {isApproved ? 'GATE CLEARED' : 'PENDING MANAGER APPROVAL'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-slate-300 mb-4">
            <div>
              <span className="text-slate-500">Department:</span> IT Operations
            </div>
            <div>
              <span className="text-slate-500">Vendor:</span> Apex Tech Logistics
            </div>
            <div>
              <span className="text-slate-500">Return Due:</span>{' '}
              {passType === 'returnable' ? '28 July 2026 (Automatic Ping)' : 'N/A (Permanent Outward)'}
            </div>
            <div>
              <span className="text-slate-500">Gate Location:</span> Main Gate 1
            </div>
          </div>

          {!isApproved ? (
            <Button
              variant="primary"
              size="sm"
              className="w-full justify-center"
              onClick={() => setIsApproved(true)}
            >
              Simulate Manager Digital Approval
            </Button>
          ) : (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2.5 flex items-center justify-between text-emerald-400 text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Gate Guard Cleared QR Scan
              </span>
              <span className="font-mono text-[10px]">Logged in Audit Trail</span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
