import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconSpeakerphone } from "@tabler/icons-react";
import { collection, getDocs } from "firebase/firestore"; // Firestore imports
import { db } from "../app/firebaseConfig"; // Firebase config
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
import RevealOnScroll from "./Revelonscroll";


interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  avatarUrl: string;
  name: string;
}

const AnimatedVideoCards: React.FC = () => {
  const [videoItems, setVideoItems] = useState<VideoItem[]>([]);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot = await getDocs(collection(db, "videos")); // Fetch videos from Firestore
      const items: VideoItem[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as VideoItem[];
      setVideoItems(items);
    };

    fetchVideos();
  }, []);

  const handleToggleMute = (id: string) => {
    setActiveVideoId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative py-16 sm:py-24 flex flex-col items-center justify-center space-y-8 sm:space-y-12">
      <BackgroundCircles />
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8 sm:mb-16 lg:mb-20">
        Create Stories to Inspire
      </h2>

      <RevealOnScroll><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 w-full max-w-6xl">
        {videoItems.map((item) => (
          <VideoCard
            key={item.id}
            item={item}
            isMuted={activeVideoId !== item.id}
            onToggleMute={() => handleToggleMute(item.id)}
          />
        ))}
      </div></RevealOnScroll>
    </div>
  );
};

const VideoCard: React.FC<{
  item: VideoItem;
  isMuted: boolean;
  onToggleMute: () => void;
}> = ({ item, isMuted, onToggleMute }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Using Intersection Observer to track when the video is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.1, // Trigger when 10% of the video card is in view
  });

  return (
    <div
      className="relative flex flex-col justify-center items-center"
      ref={ref} // Ref to trigger the observer
    >
      <motion.div
        className="relative border-4 border-gray-300 shadow-lg rounded-xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-110"
        initial={{ y: 0, rotate: -2, scale: 0.8 }}
        animate={{
          y: inView ? [0, -4, 0] : 0, // Apply parallax effect only when in view
          rotate: inView ? [2, -2, 4, -4] : 0, // Apply rotation effect only when in view
          scale: inView ? 1 : 0.8, // Scale effect as the video card comes into view
          top: inView ? "0px" : "-10px", // Top-notch effect (like a slight pull)
        }}
        transition={{
          duration: 1.5, // Smoother transition
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="absolute top-0 w-full h-4 bg-gradient-to-b from-transparent to-neutral-300 rounded-t-xl"
          animate={{
            height: inView ? ["0px", "4px", "0px"] : "0px", // Top-notch animation (height change)
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        ></motion.div>

        <video
          ref={videoRef}
          className="w-48 sm:w-64 h-72 sm:h-80 lg:h-[28rem] rounded-lg object-cover" // Adjusted width and height for less roundness
          src={item.videoUrl}
          autoPlay
          muted={isMuted}
          playsInline // Prevents fullscreen on mobile
          loop
          onTouchStart={(e) => e.preventDefault()} // Prevent accidental full-screen on mobile touch
        />

        <button
          onClick={onToggleMute}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 sm:p-3  text-white rounded-full focus:outline-none"
        >
          {isMuted ? <IconSpeakerphone size={24} /> : "Mute"}
        </button>

        <div className="absolute bottom-5 left-1 flex items-center space-x-1 bg-opacity-60 rounded-lg">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
          />
          <span className="text-white text-xs sm:text-sm md:text-lg font-light">{item.name}</span>
        </div>
      </motion.div>
    </div>
  );
};

// Adjusted BackgroundCircles component to reduce space usage
const BackgroundCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Background Circles - Reduced size and opacity for a more subtle effect */}
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default AnimatedVideoCards;
