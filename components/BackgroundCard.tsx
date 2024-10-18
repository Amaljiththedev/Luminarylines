"use client";
import React from "react";
import { BackgroundGradient } from "./background-gradient";
import { RainbowButtonDemo } from "./Rainbow";

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
        <div className="flex justify-center mt-4 z-10">
          <RainbowButtonDemo/>
        </div>
      </BackgroundGradient>
    </div>
  );
}
