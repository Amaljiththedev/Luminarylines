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
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agencyclientcarousels`
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const json = await response.json();
        const data: Testimonial[] = json.data?.map((item: any) => ({
          id: item.id,
          name: item.attributes?.Name || "Unknown",
          avatar: item.attributes?.Avatar?.url || "/default-avatar.png",
          profileUrl: item.attributes?.profileUrl || "#",
        })) || [];

        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
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
      <RevealOnScroll>
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </RevealOnScroll>
    </div>
  );
}
