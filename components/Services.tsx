import { cn } from "@/lib/utils";
import {
  IconBrandPagekit,
  IconBrandRedux,
  IconVideo,
  IconCurrencyDollar,
  IconTarget,
  IconClock,
  IconBookFilled,
  IconCoin,

} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
          title: "Premium Short-Form Content",
          description:
            "Deliver high-quality, visually captivating short-form videos that set your brand apart on platforms like Shorts, Reels, and TikTok, driving engagement and growth.",
          icon: <IconBrandPagekit />,
        },
        {
          title: "Educational & Entertaining Content",
          description:
            "Create a blend of informative and entertaining content that keeps your audience engaged and positions your brand as an authority.",
          icon: <IconBrandRedux />,
        },
        {
          title: "Long-Form Content Development",
          description:
            "Create compelling long-form content, such as YouTube videos or podcasts, designed to maintain viewer interest and deepen audience connections.",
          icon: <IconVideo />,
        },
        {
          title: "Courses & Digital Products",
          description:
            "Offer expertly crafted courses and digital products, including ebooks, that provide value to your audience and extend your brand’s influence.",
          icon: <IconBookFilled />,
        },
        {
          title: "Personal Brand Strategy",
          description:
            "Develop a comprehensive personal brand strategy that aligns your content, messaging, and visuals for maximum impact across platforms.",
          icon: <IconTarget />,
        },
        {
          title: "Revenue-Driven Content",
          description:
            "Create content that is specifically designed to drive conversions and sales, helping you turn followers into paying customers.",
          icon: <IconCurrencyDollar />,
        },
        {
          title: "Time-Saving Automation",
          description:
            "Implement automation tools and strategies that free up your time, allowing you to focus on scaling your business and increasing profits.",
          icon: <IconClock />,
        },
        {
            title: "Content Monetization Strategy",
            description:
            "Create and implement strategies that help you monetize your content effectively, turning your audience’s engagement into a sustainable revenue stream. This service ensures that your content isn’t just seen but also drives financial growth for your brand.",
            icon: <IconCoin />,
          },
      ];
  

  return (
    <section className="relative z-10 py-10 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-white text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16 bg-opacity-50">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        "flex flex-col mx-auto py-10 relative group/feature border-b border-neutral-800 dark:border-neutral-700",
        (index === 0 || index === 4) && "border-l dark:border-neutral-700",
        index < 4 && "lg:border-b dark:border-neutral-700"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-neutral-300 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-600 dark:bg-neutral-800 group-hover/feature:bg-cyan-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};