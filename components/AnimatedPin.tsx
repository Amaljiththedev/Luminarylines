"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem]  w-full flex items-center justify-center ">
      <PinContainer
        title="Luminary Lines"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Luminary Lines
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">

          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br">
          <img
            src="/screen1.png" // Replace with your image path
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
         />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
