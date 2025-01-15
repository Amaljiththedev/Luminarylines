import { cn } from "@/lib/utils";
import {
  IconBrandPagekit,
  IconBrandRedux,
  IconCurrencyDollar,
  IconTarget,
  IconClock,
  IconBookFilled,
  IconCoin,
  IconVideo,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Premium Short-Form Content",
      description:
        "High-quality short videos for platforms like Shorts, Reels, and TikTok, driving engagement and growth.",
      icon: <IconBrandPagekit />,
    },
    {
      title: "Educational & Entertaining Content",
      description:
        "Blend informative and entertaining content to engage your audience and position your brand as an authority.",
      icon: <IconBrandRedux />,
    },
    {
      title: "Long-Form Content Development",
      description:
        "Create compelling long-form content like YouTube videos or podcasts to deepen audience connections.",
      icon: <IconVideo />,
    },
    {
      title: "Courses & Digital Products",
      description:
        "Offer expertly crafted courses and digital products to provide value and expand your influence.",
      icon: <IconBookFilled />,
    },
    {
      title: "Personal Brand Strategy",
      description:
        "Develop a strategy that aligns your content, messaging, and visuals for maximum impact.",
      icon: <IconTarget />,
    },
    {
      title: "Revenue-Driven Content",
      description:
        "Create content tailored to drive sales, turning your followers into paying customers.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Time-Saving Automation",
      description:
        "Use automation tools to save time and focus on scaling your business and profits.",
      icon: <IconClock />,
    },
    {
      title: "Content Monetization Strategy",
      description:
        "Implement strategies to monetize your content, turning engagement into sustainable revenue.",
      icon: <IconCoin />,
    },
  ];

  return (
    <section className="relative z-10 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
        What We Do
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start w-[300px] mx-auto py-6 px-6 border border-neutral-800 dark:border-neutral-700 rounded-lg group shadow-md hover:shadow-lg transition-shadow duration-300"
      )}
    >
      <div className="mb-3 text-neutral-300 dark:text-neutral-400 text-3xl">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-neutral-100 dark:text-neutral-200 mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-5 group-hover:h-7 w-1 rounded-tr-full rounded-br-full bg-neutral-600 dark:bg-neutral-800 group-hover:bg-cyan-500 transition-all duration-200 origin-center" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </h3>
      <p className="text-xs md:text-sm text-neutral-400 dark:text-neutral-300 leading-relaxed max-w-[260px]">
        {description}
      </p>
    </div>
  );
};
