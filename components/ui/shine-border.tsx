"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background shine effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the component's corners.
 * @param duration defines the animation duration for the shine effect.
 * @param color a string or string array to define the shine color.
 * @param className additional class names to apply to the component.
 * @param children elements to be rendered inside the component.
 */
export default function ShineBorder({
  borderRadius = 0,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-white p-3 text-black dark:bg-black dark:text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--background-radial-gradient": `radial-gradient(transparent, transparent, ${color instanceof Array ? color.join(",") : color}, transparent, transparent)`,
          } as React.CSSProperties
        }
        className={`ude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)] motion-safe:before:animate-shine`}
      ></div>
      {children}
    </div>
  );
}
