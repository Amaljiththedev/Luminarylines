"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RainbowButtonDemo } from "./Rainbow";

// Define the TimelineEvent interface
export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  date?: string;
  [key: string]: unknown; // Allow additional custom fields
}

// Define props for each TimelineItem
interface TimelineItemProps {
  event: TimelineEvent;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  onHover: (index: number | null) => void;
  index: number;
  activeIndex: number | null;
  styles: TimelineStyles;
  customRender?: (event: TimelineEvent) => React.ReactNode;
}

// Define the styles for the timeline
interface TimelineStyles {
  lineColor: string;
  activeLineColor: string;
  dotColor: string;
  activeDotColor: string;
  dotSize: string;
  titleColor: string;
  descriptionColor: string;
  dateColor: string;
}

// The TimelineItem component
const TimelineItem: React.FC<TimelineItemProps> = ({
  event,
  isActive,
  isLast,
  onHover,
  index,
  activeIndex,
  styles,
  customRender,
}) => {
  const fillDelay = activeIndex !== null ? Math.max(0, (index - 1) * 0.1) : 0;
  const fillDuration = activeIndex !== null ? Math.max(0.2, 0.5 - index * 0.1) : 0.5;

  return (
    <motion.div
      className="flex last:mb-0"
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mr-4 flex flex-col items-center">
        <div
          className={`absolute ${isLast ? "hidden" : "block"} bottom-0 top-0 w-1`}
          style={{ backgroundColor: styles.lineColor }}
        >
          <motion.div
            className="w-full origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isActive ? 1 : 0 }}
            transition={{ duration: fillDuration, delay: fillDelay }}
            style={{ height: "100%", backgroundColor: styles.activeLineColor }}
          />
        </div>
        <motion.div
          className="relative z-10 rounded-full border-4"
          style={{
            width: styles.dotSize,
            height: styles.dotSize,
            borderColor: isActive ? styles.activeDotColor : styles.dotColor,
            backgroundColor: isActive ? styles.activeDotColor : "Background",
          }}
          animate={{
            scale: isActive ? 1.2 : 1,
            backgroundColor: isActive ? styles.activeDotColor : "Background",
            borderColor: isActive ? styles.activeDotColor : styles.dotColor,
          }}
          transition={{ duration: fillDuration, delay: fillDelay }}
        />
      </div>
      <div className={cn("flex-grow leading-5", !isLast && "mb-3")}>
        {customRender ? (
          customRender(event)
        ) : (
          <>
            <h3 className="text-lg font-semibold" style={{ color: styles.titleColor }}>
              {event.title}
            </h3>
            <p style={{ color: styles.descriptionColor }}>{event.description}</p>
            <span className="text-sm" style={{ color: styles.dateColor }}>
              {event.date}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
};

// Props for the AnimatedTimeline component
interface AnimatedTimelineProps {
  events: TimelineEvent[];
  className?: string;
  styles?: Partial<TimelineStyles>;
  customEventRender?: (event: TimelineEvent) => React.ReactNode;
  onEventHover?: (event: TimelineEvent | null) => void;
  onEventClick?: (event: TimelineEvent) => void;
  initialActiveIndex?: number;
}

// Default styles for the timeline
const defaultStyles: TimelineStyles = {
  lineColor: "#bfdbfe", // Light blue color
  activeLineColor: "#bfdbfe", // Light blue color for the active line
  dotColor: "#bfdbfe", // Light blue dot color
  activeDotColor: "#3b82f6", // Darker blue for the active dot
  dotSize: "1.5rem",
  titleColor: "inherit",
  descriptionColor: "inherit",
  dateColor: "inherit",
};


// The main AnimatedTimeline component
export function AnimatedTimeline({
  events,
  className = "",
  styles: customStyles = {},
  customEventRender,
  onEventHover,
  onEventClick,
  initialActiveIndex,
}: AnimatedTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(initialActiveIndex ?? null);
  const styles = { ...defaultStyles, ...customStyles };

  const handleHover = (index: number | null) => {
    setActiveIndex(index);
    onEventHover?.(index !== null ? events[index] : null);
  };

  return (
    <div className={`relative py-4 ${className}`}>
      {events.map((event, index) => (
        <div key={event.id} onClick={() => onEventClick?.(event)}>
          <TimelineItem
            event={event}
            isActive={activeIndex !== null && index <= activeIndex}
            isFirst={index === 0}
            isLast={index === events.length - 1}
            onHover={handleHover}
            index={index}
            activeIndex={activeIndex}
            styles={styles}
            customRender={customEventRender}
          />
        </div>
      ))}
    </div>
  );
}

// Props for the AnimatedTimelinePage component
interface AnimatedTimelinePageProps {
  events?: TimelineEvent[];
  title?: string;
  containerClassName?: string;
  timelineStyles?: Partial<TimelineStyles>;
  customEventRender?: (event: TimelineEvent) => React.ReactNode;
  onEventHover?: (event: TimelineEvent | null) => void;
  onEventClick?: (event: TimelineEvent) => void;
  initialActiveIndex?: number;
}

// The main export of the configuration
export default function AnimatedTimelinePage({
  events,
  title,
  containerClassName,
  timelineStyles,
  customEventRender,
  onEventHover,
  onEventClick,
  initialActiveIndex,
}: AnimatedTimelinePageProps) {
  const DefaultEvents = [
    { id: "1", title: "Introduction to Editing School", description: "Orientation and overview of the editing courses.", date: "2024-08-01" },
    { id: "2", title: "Basic Editing Techniques", description: "Learning fundamental editing skills such as cutting, trimming, and sequencing.", date: "2024-08-15" },
    { id: "3", title: "Intermediate Editing Tools", description: "Introduction to more advanced tools, including transitions, overlays, and audio adjustments.", date: "2024-09-01" },
    { id: "4", title: "Color Correction and Grading", description: "Understanding color theory and applying color correction and grading techniques.", date: "2024-09-15" },
    { id: "5", title: "Working with Sound", description: "Learning how to sync, edit, and enhance audio tracks.", date: "2024-10-01" },
    { id: "6", title: "Visual Effects Basics", description: "Introduction to visual effects (VFX) and compositing.", date: "2024-10-15" },
    { id: "7", title: "Advanced Editing Projects", description: "Hands-on projects to apply all learned skills in real-world scenarios.", date: "2024-11-01" },
    { id: "8", title: "Final Assessment and Portfolio Preparation", description: "Complete final assessments and prepare a portfolio showcasing editing skills.", date: "2024-11-15" },
    { id: "9", title: "Graduation", description: "Celebrate the completion of the editing school program and receive certifications.", date: "2024-12-01" },
  ];
  
  

  return (
    <div
      className={cn(
        "container mx-auto flex justify-center items-center rounded-lg bg-background px-8 pt-6 text-foreground",
        containerClassName,
      )}
    >
      <div className="w-full max-w-3xl">
        <AnimatedTimeline
          events={events || DefaultEvents}
          className="max-w-2xl mx-auto"
          styles={timelineStyles}
          customEventRender={customEventRender}
          onEventHover={onEventHover}
          onEventClick={onEventClick}
          initialActiveIndex={initialActiveIndex}
        />      

      </div>

    </div>
  );
}
