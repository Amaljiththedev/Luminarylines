"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"; // Import Image component

// Define NavItem interface
interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
  logo,
}: {
  navItems: NavItem[]; // Use NavItem interface here
  className?: string;
  logo: JSX.Element;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);



  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        <div className="flex items-center justify-center">
          {logo}
        </div>
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-grey-300 hover:text-neutral-200 bg-transparent"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      
        {/* Replaced Tailwind Connect Button */}
        <Link
          href="/school" // Link to the school page
          className="bg-transparent no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-0.5 px-4 ring-1 ring-white/10">
            <span>School</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>

        {/* WhatsApp Button */}
        <button className="">
          <div className="flex justify-center">
            <a
              href="https://wa.me/918089660028"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 rounded-full border border-green-500 bg-green-500 text-white px-4 font-medium transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image // Use Image component instead of img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Icon"
                width={20} // Set your desired width
                height={20} // Set your desired height
                className="md:w-5 md:h-5" // Adjust size as needed
              />
            </a>
          </div>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-200 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
