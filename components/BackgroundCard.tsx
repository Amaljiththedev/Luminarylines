"use client";
import React from "react";
import { BackgroundGradient } from "./background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div>
    <h1 className="text-5xl md:text-8xl font-bold text-center text-white mb-10">
                Hurry Up 
            </h1>
      <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-zinc-900">
        <h1 className="text-2xl text-white mb-4 relative z-50 text-center">
          Join Now for Editing Masterclass
        </h1>
        <h1 className="text-3xl font-bold text-slate-300 mb-6 relative z-50 text-center">
          ₹ 12,500 (Inc. GST)
        </h1>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => window.open("https://rzp.io/l/xXWBKOUw", "_blank")}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-slate-100 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Join Now
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
