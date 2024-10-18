"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure the height of the timeline
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent text-white from-neutral-50 to-neutral-400 bg-opacity-50 mt-36 -mb-30 md:mt-0">
          Students Road Map
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex pt-10 md:pt-20 relative flex-wrap">
            {/* Timeline circle centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-transparent border border-neutral-700" />
              </div>
            </div>

            {/* Content section with alternating position */}
            <div
              className={`relative w-full flex ${
                index % 2 === 0 ? "justify-start pr-10 md:pr-6" : "justify-end pl-10 md:pl-6"
              }`}
            >
              <div
                className={`max-w-full sm:max-w-[300px] ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <h3 className={`mb-2 text-xl font-bold text-white`}>{item.title}</h3>
                {/* Wrap content in a div with a max width */}
                <div className={`text-white overflow-hidden max-w-[200px]`}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-100 via-blue-200 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};