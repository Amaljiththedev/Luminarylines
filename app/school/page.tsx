"use client"; // This line is necessary for client components in Next.js

import { AccordionDemo } from "@/components/Accordian";
import Animatedcards2 from "@/components/Animatedcards2";
import { AnimatedPinDemo } from "@/components/AnimatedPin";
import { BackgroundGradientDemo } from "@/components/BackgroundCard";
import { CardHoverEffectDemo } from "@/components/CardsDemo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/Circle";
import { OrbitingCirclesDemo } from "@/components/Circles";
import { GlareCardDemo } from "@/components/GlareCardDemo";
import { Component } from "@/components/Line";
import { MarqueeDemoVertical } from "@/components/Marquee";
import { MeteorsDemo } from "@/components/MetorsDemo";
import { TimelineDemo } from "@/components/MyTimelineDemo";
import { FloatingNavDemo } from "@/components/NavbarDemo2";
import Particles from "@/components/Particles";
import { Particlesdemo } from "@/components/ParticlesDemo";
import Footer from "@/components/SchoolFooter";
import { SparklesPreview } from "@/components/Sparklesdemo";
import { CardSpotlightDemo } from "@/components/SpotlightDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrolldemo";
import { RoadMap } from "@/components/Themes";
import TimelineComponent from "@/components/TimeLineEvent";
import { TypewriterEffectSmoothDemo } from "@/components/TypewritterEffect";
import Meteors from "@/components/ui/meteors";
import VerticalTimeline02 from "@/components/verticaltimeline2";
import { VerticalTimelinePage } from "@/components/VerticalTimepage";
import { VideoPlayer } from "@/components/VideoPlayer";
export default function Home() {
  const videoSrc = "https://firebasestorage.googleapis.com/v0/b/luminarylines-7ad9c.appspot.com/o/i%20can%20t%20let%20go%2C%20it%20s%20chemical.mp4?alt=media&token=22bbbfb4-b796-4234-9b7c-278caff02a80"; // Example video URL

  return (
    <>
    
    <div className="relative bg-black min-h-screen overflow-x-hidden"> {/* Hide horizontal overflow */}
    
      <FloatingNavDemo />
      
      {/* Sparkles as full background */}
      {/* Main content */}
      <main className="relative flex flex-col justify-center items-center mx-auto sm:px-10 py-10 min-h-screen z-10">
        {/* Main container */}
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          
          <section className="w-full -mb-44 lg:-mb-44 -mt-32 sm:-mb-96  lg:mt-16">
            <Particlesdemo/>
            
            </section>

          {/* Works Section */}
          <section
            id="works"
            className="relative scroll-smooth -mt-40 w-full mb-10" // Add consistent bottom margin
          >
            <div className="max-w-7xl mx-auto px-4">
            <Particles className="absolute inset-0 pointer-events-none" />
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
        <Particles className="absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Why Choose Us?
        </h1>
          <CardHoverEffectDemo/>
        </div>
      </section>
      <section
        id="services"
        className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full -mb-48"
      >
         <Particles className="absolute inset-0 pointer-events-none z-50" />
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center  text-white">
          What You Will Learn
        </h1>
        <AnimatedBeamMultipleOutputDemo/>
        </div>
      </section>
      <section
        id="services"
        className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
      >
         <Particles className="absolute inset-0 pointer-events-none z-50" />
        <div className="max-w-7xl mx-auto px-4">

        <VerticalTimelinePage/>
        </div>
      </section>
      {/* <section
        id="services"
        className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
      >
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Sneak Peek Of The Course
        </h1>
        <VideoPlayer videoSrc={videoSrc}/>
        </div>
      </section> */}
      <section
  
        className="relative py-10 sm:py-8 lg:py-16 -mt-44 xl:py-20 2xl:py-24 scroll-smooth w-full"
      > <Particles className="absolute inset-0 pointer-events-none z-50" />
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Skill Tf up!
        </h1>
          <Component/>
        </div>
      </section>
      <section
        className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
      > <Particles className="absolute inset-0 pointer-events-none z-50" />
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Stories
        </h1>
          <MarqueeDemoVertical/>
        </div>
      </section>
      <section
  className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
>
  <div className="flex flex-col max-w-7xl mx-auto px-4 items-center"> {/* Added items-center for centering */}
  <Particles className="absolute inset-0 pointer-events-none z-50" />
    <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
      Meet The Instructor
    </h1>
    <CardSpotlightDemo />
  </div>
</section>
<section
  
  className="relative py-10 sm:py-8 lg:py-16 xl:py-20 2xl:py-24 mb-20 scroll-smooth w-full"
>
  <div className="flex flex-col max-w-7xl mx-auto px-4 items-center"> {/* Added items-center for centering */}
  <Particles className="absolute inset-0 pointer-events-none z-50" />

    <BackgroundGradientDemo />
  </div>
</section>

<section

  className=" relative sm:py-8 lg:py-16 xl:py-20 2xl:py-24 scroll-smooth w-full"
>

    <Footer />
</section>

    </div>
    
        </>
  );
}
