'use client';

import React from 'react';
import { FloatingCard } from '@/components/ui/FloatingCard';

export const FloatingItems: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Top Left — Visitor Check-in */}
      <FloatingCard className="top-60 left-30" type="visitor" />

      {/* Top Right — Employee Approval */}
      <FloatingCard className="top-60 right-30" type="approval" />

      {/* Bottom Left — Vehicle Entry */}
      <FloatingCard className="bottom-40 left-12" type="vehicle" />

      {/* Bottom Right — Support Ticket */}
      <FloatingCard className="bottom-40 right-12" type="emergency" />
    </div>
  );
};
