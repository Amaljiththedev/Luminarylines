import { CardSpotlight } from "@/components/Spotlight";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-full w-96">
      {/* Random image for the card */}
      <img
        src="/image.png"
        alt="Harikrishna M"
        className="w-full h-48 object-cover rounded-t-md" // Adjust styles for the image
      />

      <div className="relative z-20 p-4">
        <p className="text-xl font-bold text-white mt-2">
          Teacher & Founder
        </p>
        <p className="text-white mt-1">
          Harikrishna M
        </p>
        <div className="text-neutral-200 mt-4">
          <p>
            With over 4 years of experience in video editing, Harikrishna M has honed his skills both as a freelancer and as the owner of a successful agency. His teaching style blends practical, hands-on learning with the latest industry techniques, ensuring that students not only master the basics to advanced editing but also learn how to market themselves effectively as video editors in a competitive market.
          </p>
        </div>
      </div>
    </CardSpotlight>
  );
}
