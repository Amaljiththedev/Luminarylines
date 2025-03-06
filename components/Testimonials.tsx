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
        const response = await fetch("https://luminarylinesadmin.in/api/clienttestimonals");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const json = await response.json();
        console.log("API Response:", json); // Debugging

        const data: TestimonialVideoItem[] =
          json.data?.map((item: any) => ({
            id: item.id,
            name: item.Name || "Unknown",
            followers: item.Followers || "0",
            text: item.Text || "No review provided.",
            stats: item.Stats ? item.Stats.split(",") : [],
            avatar: item.Avatar?.startsWith("http")
              ? item.Avatar
              : `https://luminarylinesadmin.in/uploads/${item.Avatar}`,
            videoUrl: item.videoUrl || "",
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

      {/* Testimonials & Videos */}
      {items.length > 0 ? (
        items.map((item, index) => (
          <RevealOnScroll key={item.id}>
            <div className={`flex flex-col md:flex-${index % 2 === 0 ? "row" : "row-reverse"} items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-8`}>
              <TestimonialCard {...item} />
              <VideoCard item={item} index={index} unmutedIndex={unmutedIndex} setUnmutedIndex={setUnmutedIndex} />
            </div>
          </RevealOnScroll>
        ))
      ) : (
        <p className="text-center text-gray-400 text-xl">No testimonials available.</p>
      )}
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
        {item.videoUrl ? (
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
        ) : (
          <p className="text-gray-400 text-lg">No video available</p>
        )}
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
