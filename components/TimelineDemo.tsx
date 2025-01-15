import React from "react";
import { Timeline } from "./timeline";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useInView } from "react-intersection-observer"; // Import react-intersection-observer

export function TimelineDemo() {
  const data = [
    {
      title: "Client Onboarding",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            We start by understanding your brand, goals, and target audience. Our team develops a strategy tailored to help you build a strong personal brand and connect with your audience.
          </p>
        </div>
      ),
      titleAnimation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    {
      title: "Strategy Development",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            We work closely with you to create a personalized strategy that includes the type of content you need and how to structure your brand message for maximum impact.
          </p>
        </div>
      ),
      titleAnimation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    {
      title: "Content Optimization",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            We focus on optimizing and enhancing your content to ensure it aligns with your brand and resonates with your audience. This includes refining your videos, ensuring consistency, and elevating the overall quality.
          </p>
        </div>
      ),
      titleAnimation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    {
      title: "Sales Funnel",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Based on the content’s performance and growth, we design and implement a sales funnel that guides your audience from engagement to conversion, driving revenue and brand success.
          </p>
        </div>
      ),
      titleAnimation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    {
      title: "Growth Review",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-8">
            Once all phases are completed, we review the impact and growth your brand has achieved. Together, we analyze results and offer strategic insights for continued success and long-term impact.
          </p>
        </div>
      ),
      titleAnimation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
  ];

  return (
    <div className="w-full relative">
      <Timeline
        data={data.map((item, index) => {
          const { ref: titleRef, inView: titleInView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });

          const { ref: contentRef, inView: contentInView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });

          return {
            ...item,
            content: (
              <div>
                {/* Title Animation */}
                <motion.div
                  ref={titleRef}
                  initial={item.titleAnimation.initial}
                  animate={{
                    opacity: titleInView ? 1 : 0,
                    y: titleInView ? 0 : 50,
                  }}
                  transition={item.titleAnimation.transition}
                  className="text-white text-xl md:text-2xl font-bold mb-4"
                >
                  {item.title}
                </motion.div>

                {/* Content Animation */}
                <motion.div
                  ref={contentRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: contentInView ? 1 : 0,
                    y: contentInView ? 0 : 50,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {item.content}
                </motion.div>
              </div>
            ),
          };
        })}
      />
    </div>
  );
}
