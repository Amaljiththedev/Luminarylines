import { cn } from "@/lib/utils";
import { Marquee } from "@/components/Marquees";

const reviews = [
  {
    name: "Anand Nair, Kochi",
    body: "“The project-based learning approach at Luminary Lines Academy gave me hands-on experience that was invaluable. I went from a beginner to confidently editing professional videos within three months.”",
  },
  {
    name: "Lakshmi Menon, Kozhikode",
    body: "“The instructors at Luminary Lines are incredibly knowledgeable and supportive. They not only taught me advanced editing techniques but also guided me on how to market myself as a video editor in a competitive industry.”",
  },
  {
    name: "Rahul Pillai, Kollam",
    body: "“What sets Luminary Lines apart is their focus on real-world application. I gained industry experience while studying, which helped me secure a job immediately after completing the course.”",
  },
  {
    name: "Sreelakshmi Nair, Thrissur",
    body: "“I never thought I'd be able to create my own videos so quickly. Thanks to Luminary Lines, I can now confidently edit and publish my work.”",
  },
  {
    name: "Ravi Krishnan, Malappuram",
    body: "“The hands-on projects at Luminary Lines gave me the confidence I needed to pursue a career in video editing. I'm now working as a freelance editor.”",
  },
  {
    name: "Meera Das, Palakkad",
    body: "“The supportive environment and knowledgeable instructors made my learning experience enjoyable and effective. I highly recommend Luminary Lines Academy!”",
  },
  {
    name: "Vishnu Mohan, Wayanad",
    body: "“The curriculum is well-structured, and the practical assignments helped me understand the nuances of video editing in-depth.”",
  },
  {
    name: "Aishwarya Suresh, Idukki",
    body: "“I loved every moment of my learning journey at Luminary Lines. The skills I gained here have opened up new opportunities for me.”",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  body,
}: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        // dark styles
      )}
    >
      <div className="flex flex-col">
        <figcaption className="text-sm font-bold text-white">{name}</figcaption>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
