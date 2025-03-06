import { cn } from "@/lib/utils";
import {
  IconBrandTiktok,
  IconSchool,
  IconMovie,
  IconBook2,
  IconUserHeart,
  IconCash,
  IconClockHeart,
  IconCoin,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Premium Short-Form Content",
      description:
        "High-quality short videos optimized for Shorts, Reels, and TikTok to maximize engagement and drive exponential growth.",
      icon: <IconBrandTiktok className="w-6 h-6" />,
    },
    {
      title: "Educational & Entertaining Content",
      description:
        "Master the blend of education and entertainment to captivate audiences and establish thought leadership.",
      icon: <IconSchool className="w-6 h-6" />,
    },
    {
      title: "Long-Form Content Development",
      description:
        "Produce compelling documentaries, YouTube series, and podcasts that create lasting audience connections.",
      icon: <IconMovie className="w-6 h-6" />,
    },
    {
      title: "Courses & Digital Products",
      description:
        "Monetize your expertise with beautifully designed courses, e-books, and premium digital resources.",
      icon: <IconBook2 className="w-6 h-6" />,
    },
    {
      title: "Personal Brand Strategy",
      description:
        "360° brand development encompassing visual identity, content strategy, and audience positioning.",
      icon: <IconUserHeart className="w-6 h-6" />,
    },
    {
      title: "Revenue-Driven Content",
      description:
        "Conversion-optimized content strategies that transform followers into loyal customers.",
      icon: <IconCash className="w-6 h-6" />,
    },
    {
      title: "Smart Automation",
      description:
        "Implement cutting-edge automation to streamline workflows and maximize productivity.",
      icon: <IconClockHeart className="w-6 h-6" />,
    },
    {
      title: "Monetization Systems",
      description:
        "Build sustainable revenue streams through strategic content partnerships and premium offerings.",
      icon: <IconCoin className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-white  mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Transforming digital presence through strategic content creation and brand development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
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
        "group relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-2xl border border-neutral-800",
        "transform transition-all duration-300 ease-out",
        "hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/10 before:to-blue-500/10 before:opacity-0 before:transition-opacity before:duration-300 before:group-hover:opacity-100"
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-100 mb-3">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            {title}
          </span>
        </h3>
        
        <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};