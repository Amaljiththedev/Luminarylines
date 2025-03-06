"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconSpeakerphone } from "@tabler/icons-react";
import RevealOnScroll from "./Revelonscroll";


// Define an interface for the testimonial/video item.
interface TestimonialVideoItem {
  id: string;
  name: string;
  followers: string;
  text: string;
  stats: string[];
  avatar: string;
  videoUrl: string;
}

const ClientVideoSection: React.FC = () => {
  const [items, setItems] = useState<TestimonialVideoItem[]>([]);
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/clienttestimonials`
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const json = await response.json();
        const data: TestimonialVideoItem[] = json.data?.map((item: any) => ({
          id: item.id,
          name: item.attributes?.Name || "Unknown",
          followers: item.attributes?.Followers || "0",
          text: item.attributes?.Text || "No review provided.",
          stats: item.attributes?.Stats?.split(",") || [],
          avatar: item.attributes?.Avatar || "/default-avatar.png",
          videoUrl: item.attributes?.videoUrl || "",
        })) || [];

        setItems(data);
      } catch (error) {
        console.error("Error fetching client testimonials:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex flex-col space-y-16 w-full max-w-7xl p-4">
      {/* Main Heading */}
      <RevealOnScroll>
        <h2 className="text-6xl md:text-8xl font-bold text-center bg-clip-text text-transparent text-white from-neutral-50 to-neutral-400 bg-opacity-50 md:mt-0">
          What Our Clients Say
        </h2>
      </RevealOnScroll>

      {/* First Section: Testimonial on the left, Video on the right */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
          {items.length > 0 && <TestimonialCard {...items[0]} />}
          {items.length > 0 && <VideoCard item={items[0]} index={0} unmutedIndex={unmutedIndex} setUnmutedIndex={setUnmutedIndex} />}
        </div>
      </RevealOnScroll>

      {/* Second Section: Video on the left, Testimonial on the right */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
          {items.length > 1 && <TestimonialCard {...items[1]} />}
          {items.length > 1 && <VideoCard item={items[1]} index={1} unmutedIndex={unmutedIndex} setUnmutedIndex={setUnmutedIndex} />}
        </div>
      </RevealOnScroll>
    </div>
  );
};

// Video Card Component
interface VideoCardProps {
  item: TestimonialVideoItem;
  index: number;
  unmutedIndex: number | null;
  setUnmutedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
const VideoCard: React.FC<VideoCardProps> = ({ item, index, unmutedIndex, setUnmutedIndex }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setUnmutedIndex(unmutedIndex === index ? null : index);
  };

  return (
    <div className="flex-1 flex justify-center mt-6 md:mt-0">
      <motion.div
        className="relative p-0 rounded-lg shadow-lg cursor-pointer h-96 flex flex-col justify-center items-center transition-transform duration-300 hover:shadow-xl"
        initial={{ y: 0, rotate: 0 }}
        whileHover={{ y: -10, rotate: 5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          className="w-56 h-80 rounded-xl object-cover"
          src={item.videoUrl}
          autoPlay
          playsInline
          muted={unmutedIndex !== index}
          loop
          preload="metadata"
        />
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 p-2 text-white rounded focus:outline-none hover:bg-gray-700"
        >
          {unmutedIndex === index ? <IconSpeakerphone /> : "Mute"}
        </button>
      </motion.div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialVideoItem> = ({ name, followers, text, stats, avatar }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-xl p-6 rounded-lg shadow-lg text-white hover:bg-gray-800 transition duration-300">
      <div className="flex-shrink-0">
        <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover" loading="lazy" />
      </div>
      <div className="flex flex-col space-y-2 text-center md:text-left">
        <div>
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-2xl text-gray-400">{followers}</p>
        </div>
        <p className="text-xl text-gray-300">"{text}"</p>
        <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-4 md:flex-row text-xl text-gray-400">
          {stats.map((stat, index) => (
            <p key={index}>{stat}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientVideoSection;
