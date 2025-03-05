"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SparklesPreview } from "@/components/Loader";
import Head from "./head";

// Import a supported Google Font (Inter)
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head />
      {/* Additional external fonts */}

      <body
        className={`${inter.className} antialiased`}
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        {isLoading ? (
          <div className="sparkles-preview">
            <SparklesPreview />
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
