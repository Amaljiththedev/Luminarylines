import React from "react";
import { useInView } from "react-intersection-observer"; // Import the Intersection Observer hook
import { motion } from "framer-motion"; // Import framer-motion for animations

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state - hidden and below
      animate={{
        opacity: inView ? 1 : 0, // Fade in when in view
        y: inView ? 0 : 50, // Move up when in view, otherwise move down
      }}
      transition={{
        opacity: { duration: 0.5 },
        y: { type: "spring", stiffness: 50, damping: 25 }, // Use spring for smooth up/down motion
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
