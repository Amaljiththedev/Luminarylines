import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { db } from "../app/firebaseConfig"; // Adjust the path as necessary
import { collection, getDocs } from "firebase/firestore";
import RevealOnScroll from "./Revelonscroll";

interface Testimonial {
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
        const querySnapshot = await getDocs(collection(db, "Testimonals"));
        const testimonialsData: Testimonial[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          testimonialsData.push({
            name: data.name,
            avatar: data.avatar,
            profileUrl: data.profileUrl,
          });
        });

        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <p>Loading testimonials...</p>; // Optional loading state
  }

  return (
    <div className="h-[25rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <RevealOnScroll>
        <p className="flex font-normal justify-center text-white  text-sm mb-6 z-50">
          Trusted by top creators, brands, and influencers</p></RevealOnScroll>

          <RevealOnScroll><InfiniteMovingCards items={testimonials} direction="left" speed="slow" /></RevealOnScroll>
    </div>
  );
}