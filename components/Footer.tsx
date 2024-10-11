"use client"
import Link from 'next/link';
import React from 'react';
import { HeroHighlight } from "./hero-highlight";
import { IconBrandInstagram, IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from '@tabler/icons-react';


interface FooterProps {
    handleScrollToConnect: () => void; // Define the type for the prop
  }
  
  const Footer: React.FC<FooterProps> = ({ handleScrollToConnect }) => {
    // Function to handle the button click for scrolling to the connect section
    const onButtonClick = () => {
      handleScrollToConnect(); // Call the passed function to scroll
    };

  return (
    <footer className="bg-black z-50 text-white py-8">
      <HeroHighlight>
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-3xl font-sans font-bold text-white max-w-4xl lg:leading-snug text-center mx-auto mb-6" style={{ fontFamily: 'Helvetica, sans-serif' }}>
          <span className="text-white">Enough generic content. Let’s drive revenue and growth.</span>
        </h1>

        <p className="text-white text-base md:text-lg mt-2 text-center" style={{ fontFamily: 'Helvetica, sans-serif' }}>
          Monetize your personal brand today
        </p>

        <div className="flex items-center justify-center mt-8">
          {/* Book a Call Button */}
          <button
            onClick={onButtonClick}
            aria-label="Book a call"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-blue-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 mr-4"
          >
            Book A Call
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918089660028" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-green-500 bg-green-500 text-white px-6 font-medium transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <IconBrandWhatsapp size={24} className="mr-2" /> WhatsApp Us
          </a>
        </div>
      </HeroHighlight>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-between items-center">
          {/* Branding Section */}
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Luminary Lines</span>
            <img
              src="./favicon.png" 
              alt="Luminary Logo" 
              className="h-8 w-8" 
            />
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
            <p className="mx-1"> </p>
            <a href="mailto:hello@luminarylines.com" className="text-white underline">hello@luminarylines.com</a>
          </div>

          <div className="flex space-x-3 text-gray-500 text-xs">
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="/refund-policies" className="hover:text-white">
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
