"use client"
import React, { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { SparklesPreview } from "@/components/Loader";

// Import Geist Mono font from Google Fonts


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set 3-second delay for loading

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Clash Display font from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap"
          rel="stylesheet"
          precedence="default"
        />
        {/* Orbitron font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap"
          rel="stylesheet"
          precedence="default"
        />
      </head>
      <body
        
        style={{ fontFamily: "'Clash Display', sans-serif" }} // Default font-family for the body
      >
        {isLoading ? (
          // Render SparklesPreview (or your custom loader) when loading
          <div className="sparkles-preview">
            <SparklesPreview />
          </div>
        ) : (
          // Render children after loading is complete
          children
        )}
                <Analytics />

      </body>
    </html>
  );
}
