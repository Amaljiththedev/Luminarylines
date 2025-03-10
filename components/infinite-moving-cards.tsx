"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number | string;
    name: string;
    avatar: string; // Image URL
    profileUrl: string; // Profile link
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "15s";
          break;
        case "normal":
          duration = "20s";
          break;
        case "slow":
          duration = "25s";
          break;
        default:
          duration = "20s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[200px] h-full max-w-full relative rounded-lg flex-shrink-0 px-4 py-4 md:w-[250px]"
            key={item.id}
          >
            <a
              href={item.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <img
                src={item.avatar}
                alt={`Avatar of ${item.name}`}
                className="w-10 h-10 rounded-full mr-3"
                loading="lazy"
              />
              <span className="relative z-20 text-base leading-[1.5] text-white font-normal truncate">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
