"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full   p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-transparent p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-5xl">
        <div className="flex flex-col justify-center ">
          <Circle ref={div1Ref} className="size-20">
            <Icons.afterEffects />
          </Circle>
          <Circle ref={div2Ref} className="size-20">
            <Icons.premierePro />
          </Circle>
          <Circle ref={div3Ref} className="size-20">
            <Icons.blender />
          </Circle>

        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-20">
            <Icons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-20">
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
const Icons = {
  premierePro: () => (
    <img
      src="/pr.png"
      alt="Premiere Pro Icon"
      width={200} // Set desired width
      height={200} // Set desired height
    />
  ),
  afterEffects: () => (
    <img
      src="/af.png"
      alt="After Effects Icon"
      width={200} // Set desired width
      height={200} // Set desired height
    />
  ),
  blender: () => (
    <img
      src="/blender.png"
      alt="Blender Icon"
      width={200} // Set desired width
      height={200} // Set desired height
    />
  ),
  openai: () => (
    <img
      src="/group1.png"
      alt="OpenAI Icon"
      width={100} // Keep the original size
      height={100} // Keep the original size
    />
  ),
  user: () => (
    <img
      src="/students.png"
      alt="User Icon"
      width={300} // Set desired width
      height={300} // Set desired height
    />
  ),
};
