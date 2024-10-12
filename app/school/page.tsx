"use client"; // This line is necessary for client components in Next.js

import Animatedcards2 from "@/components/Animatedcards2";
import { BackgroundGradientDemo } from "@/components/BackgroundCard";
import { CardHoverEffectDemo } from "@/components/CardsDemo";
import { GlareCardDemo } from "@/components/GlareCardDemo";
import { Component } from "@/components/Line";
import { MarqueeDemoVertical } from "@/components/Marquee";
import { MeteorsDemo } from "@/components/MetorsDemo";
import { FloatingNavDemo } from "@/components/NavbarDemo2";
import Footer from "@/components/SchoolFooter";
import { SparklesPreview } from "@/components/Sparklesdemo";
import { CardSpotlightDemo } from "@/components/SpotlightDemo";
import { TypewriterEffectSmoothDemo } from "@/components/TypewritterEffect";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden"> {/* Hide horizontal overflow */}
      <FloatingNavDemo />

      {/* Sparkles as full background */}


      {/* Main content */}
      <main className="relative flex flex-col justify-center items-center mx-auto sm:px-10 py-10 min-h-screen z-10">
        {/* Main container */}
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {/* Typewriter Effect */}
          <section className="w-full -mb-44 lg:-mb-44 -mt-32 sm:-mb-96  lg:mt-16">
            <TypewriterEffectSmoothDemo />
            
                      </section>

          {/* Works Section */}
          <section
            id="works"
            className="relative scroll-smooth -mt-40 w-full mb-10" // Add consistent bottom margin
          >
            <div className="max-w-7xl mx-auto px-4">
              <Animatedcards2 />
            </div>
          </section>
        </div>
      </main>

      {/* Additional sections */}
      <section
        id="services"
        className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
      >
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Why Choose Us?
        </h1>
          <CardHoverEffectDemo/>
        </div>
      </section>

      <section
        id="school"
        className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
      >
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Skill Tf up!
        </h1>
          <Component/>
        </div>
      </section>
      <section
        id="school"
        className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
      >
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Stories
        </h1>
          <MarqueeDemoVertical/>
        </div>
      </section>
      <section
  id="school"
  className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
>
  <div className="flex flex-col max-w-7xl mx-auto px-4 items-center"> {/* Added items-center for centering */}
    <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
      Meet The Instructor
    </h1>
    <CardSpotlightDemo />
  </div>
</section>
<section
  
  className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
>
  <div className="flex flex-col max-w-7xl mx-auto px-4 items-center"> {/* Added items-center for centering */}

    <BackgroundGradientDemo />
  </div>
</section>
<section

  className="-mt-48 relative sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
>

    <Footer />

</section>

    </div>
  );
}
