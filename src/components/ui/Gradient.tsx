'use client';

import React from 'react';

export const Gradient: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[calc(65vmax+200px)] scale-[1.02] blur-[40px] w-[210vmax] h-[210vmax]"
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(
          100vmax,
          rgba(0,0,0,0) 54.81%,
          rgb(255,236,210) 60%,
          rgba(255,214,153,0.55) 66%,
          rgb(255,182,72) 73%,
          rgb(255,140,0) 84%,
          rgb(255,170,90) 90%,
          rgb(255,220,180) 95%,
          rgba(0,0,0,0) 100%
        )`,
      }}
    />
  );
};
