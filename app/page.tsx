"use client"
import AnimatedVideoCards from "@/components/AnimatedVideocards";
import { BackgroundGradientAnimation } from "@/components/Background";
import { FloatingNavDemo } from "@/components/Navbardemo";
import { TimelineDemo } from "@/components/TimelineDemo";
import { Component } from "@/components/Charts";
import ClientVideoSection from "@/components/Testimonials";
import { BackgroundGradientDemo } from "@/components/Calendly";
import { FeaturesSectionDemo } from "@/components/Services";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function Home() {
  const connectSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToConnect = () => {
    if (connectSectionRef.current) {
      window.scrollTo({
        top: connectSectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <FloatingNavDemo />
      <section className="relative h-screen z-10 flex items-center justify-center bg-black text-white overflow-hidden">
        <BackgroundGradientAnimation onButtonClick={handleScrollToConnect} />
      </section>
      <section id="works" className="relative py-6 sm:py-4 lg:py-16 xl:py-20 bg-dot-blue-700/[0.5] 2xl:py-24 -mb-32 scroll-smooth overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 z-50 scroll-smooth">
          <AnimatedVideoCards />
        </div>
      </section>
      <section className="scroll-container relative py-6 sm:py-4 bg-dot-blue-700/[0.5] lg:py-16 xl:py-20 2xl:py-24 -mb-32 scroll-smooth overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 z-50 bg-transparent scroll-smooth relative">
          <TimelineDemo />
        </div>
      </section>
      <section id="monthly-views-overview" className="relative py-16 sm:py-20 lg:py-24 bg-dot-blue-700/[0.5] scroll-smooth overflow-hidden mt-20">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-10">
          Monthly Views Overview
        </h1>
        <div className="max-w-7xl mx-auto px-4 z-50 bg-transparent scroll-smooth relative">
          <Component />
        </div>
      </section>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-dot-blue-700/[0.5] scroll-smooth overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto px-4 z-50 bg-transparent scroll-smooth relative">
          <ClientVideoSection />
        </div>
      </section>
      <section ref={connectSectionRef} id="connect-section" className="relative py-16 sm:py-20 lg:py-24 bg-dot-blue-700/[0.5] scroll-smooth overflow-hidden mt-20">
      <h1 className="text-6xl md:text-8xl font-bold text-center text-white mb-16">
        Let&apos;s Connect To Make The Change</h1>

        <div className="max-w-7xl mx-auto px-4 z-50 bg-transparent scroll-smooth relative">
          <BackgroundGradientDemo />
        </div>
      </section>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-dot-blue-700/[0.5] scroll-smooth overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto px-4 z-50 bg-transparent scroll-smooth relative">
          <FeaturesSectionDemo />
        </div>
      </section>
      <footer className="relative lg:py-24 -mb-96 scroll-smooth overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 z-50 bg-transparent scroll-smooth relative">
          <Footer handleScrollToConnect={handleScrollToConnect} />
        </div>
      </footer>
    </>
  );
}
