import { HoverEffect } from "./card-hover-effect";
import { IconClipboardCheck, IconSquareRoundedChevronUpFilled, IconPresentation } from "@tabler/icons-react"; // Import the desired icons

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Project-Based Learning",
    description: "Hands-on experience with real-world projects from basics to advanced editing.",
    icon: <IconClipboardCheck size={30} className="mr-2" />, // Add icon for Project-Based Learning
  },
  {
    title: "Career Development",
    description: "Learn how to market yourself as a video editor and navigate the competitive job market.",
    icon: <IconSquareRoundedChevronUpFilled size={30} className="mr-2" />, // Add icon for Career Development
  },
  {
    title: "Real-World Application",
    description: "Focus on applying skills in real-life scenarios for industry experience while studying.",
    icon: <IconPresentation size={30} className="mr-2" />, // Add icon for Real-World Application
  },
];
