"use client";

import React from "react";

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Ball animation */}
      <div className="relative">
        <div className="w-16 h-16 bg-white rounded-full animate-ball-zoom"></div>
        {/* Light effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/50 via-white/10 to-transparent blur-xl opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
}
