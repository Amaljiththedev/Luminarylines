// app/head.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminary Lines",
  description: "Luminary Lines is a leading personal branding agency and school dedicated to empowering innovators, creators, and brands. Discover expert strategies and creative storytelling techniques to build a distinctive digital identity and elevate your brand's online presence.",
};

export default function Head() {
  const title = String(metadata.title || ""); // Convert to string if necessary
  const description = String(metadata.description || ""); // Convert to string if necessary

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <title>{title}</title> {/* Ensure title is a string */}
      <meta name="description" content={description} /> {/* Ensure description is a string */}
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}