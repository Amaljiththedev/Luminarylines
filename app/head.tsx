// app/head.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminary Lines|school",
  description: "A personal branding agency focused on empowering innovators, creators, and brands to tell their unique stories.",
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
    </>
  );
}
