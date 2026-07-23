
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
        "
        aria-hidden="true"
      />
    </div>
  );
};