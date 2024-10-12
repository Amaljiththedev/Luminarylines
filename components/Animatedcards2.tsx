import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconSpeakerphone } from "@tabler/icons-react";
import { collection, getDocs } from "firebase/firestore"; // Firestore imports
import { db } from "../app/firebaseConfig"; // Firebase config

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
      const querySnapshot = await getDocs(collection(db, "schoolvideo")); // Fetch videos from Firestore
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
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8 sm:mb-16 lg:mb-20">
        Create Stories to Inspire
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 w-full max-w-6xl">
        {videoItems.map((item) => (
          <VideoCard
            key={item.id}
            item={item}
            isMuted={activeVideoId !== item.id}
            onToggleMute={() => handleToggleMute(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

const VideoCard: React.FC<{
  item: VideoItem;
  isMuted: boolean;
  onToggleMute: () => void;
}> = ({ item, isMuted, onToggleMute }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <motion.div
        className="border-2 shadow-xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-110"
        initial={{ y: 0, rotate: -2 }}
        animate={{ y: [0, -4, 0], rotate: [2, -2, 4, -4] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
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
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 sm:p-3 bg-gray-800 bg-opacity-50 text-white rounded-full focus:outline-none"
        >
          {isMuted ? <IconSpeakerphone size={24} /> : "Mute"}
        </button>


      </motion.div>
    </div>
  );
};

export default AnimatedVideoCards;
