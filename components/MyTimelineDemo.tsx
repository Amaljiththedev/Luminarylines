import React from "react";
import { Timeline } from "./MyTimeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Client Onboarding",
      content: (
        <div>
          <p className="text-white text-base font-normal ">
            We start by understanding your brand, goals, and target audience. Our team develops a strategy tailored to help you build a strong personal brand and connect with your audience.
          </p>
        </div>
      ),
    },
    {
      title: "Strategy Development",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal ">
            We work closely with you to create a personalized strategy that includes the type of content you need and how to structure your brand message for maximum impact.
          </p>
        </div>
      ),
    },
    {
      title: "Content Optimization",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal ">
            We focus on optimizing and enhancing your content to ensure it aligns with your brand and resonates with your audience. This includes refining your videos, ensuring consistency, and elevating the overall quality.
          </p>
        </div>
      ),
    },
    {
      title: "Sales Funnel",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal ">
            Based on the content’s performance and growth, we design and implement a sales funnel that guides your audience from engagement to conversion, driving revenue and brand success.
          </p>
        </div>
      ),
    },
    {
      title: "Growth Review",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal">
            Once all phases are completed, we review the impact and growth your brand has achieved. Together, we analyze results and offer strategic insights for continued success and long-term impact.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full relative">
      <Timeline data={data} />
    </div>
  );
}