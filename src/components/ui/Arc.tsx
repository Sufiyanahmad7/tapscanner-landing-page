'use client';

import React from 'react';

export const Arc: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <div
        className="
          absolute
          top-[180px]
          left-1/2
          -translate-x-1/2
          aspect-square
          w-[170vmax]
          rounded-full
          bg-white
          shadow-[0_-30px_100px_rgba(249,115,22,0.18)]
        "
        aria-hidden="true"
      />
    </div>
  );
};