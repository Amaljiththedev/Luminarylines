"use client";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import Particles from "./Particles";
import { RainbowButtonDemo } from "./Rainbow";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Skill" },
    { text: "Based" },
    { text: "Video" },
    { text: "Editing" },
    { text: "Masterclass", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <>
    
    <div className="flex flex-col items-center justify-center h-[50rem] -mt-32 space-y-6">
      <p className="text-blue-200 dark:text-cyan-500 text-sm to-blue-600">
        From Zero to Hero In 3 Months
      </p>
      <TypewriterEffectSmooth words={words} />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20">
      <a
            href="https://wa.me/918089660028" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-green-500 bg-green-500 text-black px-6 font-medium transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <IconBrandWhatsapp size={24} className="text-black mr-2" /> Enquire Now
          </a>
    
      </div>
      <p className="justify-center font-medium text-white text-sm sm:text-base md:text-lg lg:text-lg mt-2 text-center " style={{ fontFamily: "Helvetica, sans-serif" }}>Drop the boring edits and bring your videos to life with something fresh and exciting!</p>

    </div>
    </>
  );
}

