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
  profileUrl: string;
}

const ClientVideoSection: React.FC = () => {
  const [items, setItems] = useState<TestimonialVideoItem[]>([]);
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null);

  useEffect(() => {
    const staticItems: TestimonialVideoItem[] = [
      {
        id: "static-1",
        name: "Abhinav Mahajan",
        followers: "2M followers",
        text: "We partnered with this video creation agency to scale our creative output, and the results were phenomenal: higher engagement, stronger audience retention, and measurable conversion lift in just weeks.",
        stats: ["Video Creation", "Brand Growth", "High Engagement", "ROI-focused"],
        avatar: "/abij.png",
        videoUrl: "https://vlzqrxxsielfcuq7.public.blob.vercel-storage.com/AQMcnqzRO1YO6fMbZl1iJGZ2s6f2gsaoOSUATmruDQrnuCHf1ayK9SpcfSSbo-ogQWZDcSsxZQJPTuh-aVzNaI43rp3ipBpoVRWxgx4.mp4",
        profileUrl: "https://www.instagram.com/abhinavmahajanlife/",
      },
      {
        id: "static-2",
        name: "Nipun Fitness",
        followers: "300K+ followers",
        text: "Their storytelling approach for fitness campaigns is next-level: authentic, high-energy clips that drove more demo signups and community interaction than any previous content.",
        stats: ["Fitness Content", "Community Growth", "Healthy Lifestyle", "Conversion Focused"],
        avatar: "/nipun.png",
        videoUrl: "https://vlzqrxxsielfcuq7.public.blob.vercel-storage.com/AQMgl81LzpXtmUixUnp1-3IYe2esYM8znPh_l6fDBagJ0ZHKafqo165SA-YAPIqP1DT-n3u5brIiW7IWDv-sxDIT.mp4",
        profileUrl: "https://www.instagram.com/nipunfitness/",
      },

    ];

    setItems(staticItems);
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
            <div
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-0 md:${index % 2 === 0 ? "space-x-8" : "space-x-reverse space-x-8"}`}
            >
              <div className="w-full md:w-1/2">
                <TestimonialCard {...item} />
              </div>
              <div className="w-full md:w-1/2">
                <VideoCard item={item} index={index} unmutedIndex={unmutedIndex} setUnmutedIndex={setUnmutedIndex} />
              </div>
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
const TestimonialCard: React.FC<TestimonialVideoItem> = ({ name, followers, text, stats, avatar, profileUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-xl p-6 rounded-lg shadow-lg text-white hover:bg-gray-800 transition duration-300">
      <div className="flex-shrink-0">
        <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover" loading="lazy" />
      </div>
      <div className="flex flex-col space-y-2 text-center md:text-left">
        <div>
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-2xl text-gray-400">{followers}</p>
          <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400 text-lg">Instagram</a>
        </div>
        <p className="text-xl text-gray-300">"{text}"</p>
      </div>
    </div>
  );
};

export default ClientVideoSection;
