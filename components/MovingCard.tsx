import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import RevealOnScroll from "./Revelonscroll";

interface Testimonial {
  id: number | string;
  name: string;
  avatar: string;
  profileUrl: string;
}

export function InfiniteMovingCardsDemo() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const staticTestimonials: Testimonial[] = [
      {
        id: "static-1",
        name: "Abhinav Mahajan",
        avatar: "/abij.png",
        profileUrl: "https://www.instagram.com/abhinavmahajanlife/",
      },
      {
        id: "static-2",
        name: "Nipun Fitness",
        avatar: "/nipun.png",
        profileUrl: "https://www.instagram.com/nipunfitness/",
      },
      {
        id: "static-3",
        name: "Ashvin Shibu",
        avatar: "/ima.png",
        profileUrl: "https://www.instagram.com/ashvin.shibu/",
      },
      {
        id: "static-4",
        name: "Tried But Failed",
        avatar: "/image.png",
        profileUrl: "https://www.instagram.com/_triedbutfailed/",
      },
    ];

    setTestimonials(staticTestimonials);
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading testimonials...</p>;
  }

  return (
    <div className="h-[25rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <RevealOnScroll>
        <p className="flex font-normal justify-center text-white text-sm mb-6 z-50">
          Trusted by top creators, brands, and influencers
        </p>
      </RevealOnScroll>
      {testimonials.length > 0 ? (
        <RevealOnScroll>
          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </RevealOnScroll>
      ) : (
        <p className="text-white text-center">No testimonials available.</p>
      )}
    </div>
  );
}
