"use client";

import Link from "next/link";
import React from "react";
import { HeroHighlight } from "./hero-highlight";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { AnimatedPinDemo } from "./AnimatedPin";


const Footer= () => {
  // Function to handle the button click for scrolling to the connect section


  return (
    <footer className="bg-black z-50 text-white py-8">
      <HeroHighlight>
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-3xl font-sans font-bold text-white max-w-4xl lg:leading-snug text-center mx-auto mb-6" style={{ fontFamily: "Helvetica, sans-serif" }}>
          <span className="text-white">Break away from typical courses and join the masterclass.</span>
          <AnimatedPinDemo/>
        </h1>



      </HeroHighlight>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-between items-center">
          {/* Branding Section */}
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Luminary Lines</span>
            <img src="./favicon.ico" alt="Luminary Logo" className="h-8 w-8" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/luminarylines" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <IconBrandInstagram size={32} />
            </a>
            <a href="https://www.facebook.com/luminarylines" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <IconBrandFacebook size={32} />
            </a>
            <a href="https://x.com/luminarylines" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <IconBrandTwitter size={32} />
            </a>
            <a href="https://www.linkedin.com/in/luminarylines/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <IconBrandLinkedin size={32} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ascension Wave. All rights reserved.
          </p>
        </div>

        {/* Contact Info and Links Section */}
        <div className="flex justify-between items-center mt-4">
          {/* Contact Info */}
          <div className="text-gray-500 text-sm flex items-center">
            <IconMail />
            <p className="mx-1"></p>
            <a href="mailto:hello@luminarylines.com" className="text-white underline">hello@luminarylines.com</a>
          </div>

          <div className="flex space-x-3 text-gray-500 text-xs">
            <Link href="/schooltermsandconditions" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="/schoolrefundpolicies" className="hover:text-white">
              Refund Policies
            </Link>
            <Link href="/terms-of-use" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
