import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// ⛔ EXACT script recreated in React
export default function AboutUs1() {



  return (
    <div className="sm:flex sm:flex-col flex flex-col sm:gap-15 gap-12 md:flex md:flex-row sm:px-15 px-7 w-[100vw] lg:gap-44 md:gap-15   relative intro-text">

      {/* Hidden floating images */}

      {/* LEFT COLUMN */}
      <div className="flex flex-col md:gap-34 sm:gap-4 gap-5 md:h-150 ">
        <h1 className="archivo-black xl:text-7xl lg:text-6xl md:text-[2.7rem] sm:text-[4rem] text-[2.2rem] font-semibold tracking-[-0.1rem]">
          ABOUT US
        </h1>

        <p

          className="hover-text c1 xl:w-130 lg:w-90 md:w-90 sm:w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg  opacity-50 text-gray-900 cursor-pointer"
        >
          We are a new-age media company where creators, filmmakers,
          strategists, data analysts, and Gen AI specialists come together to
          craft stories that are deeply human — and technologically intelligent.
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col xl:gap-34 lg:gap-24 md:gap-20 sm:gap-10 gap-8 md:w-350 ">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold sm:w-100 md:w-full">
          India's New-Age Media & AI Storytelling Company
        </h1>

        <p  className="hover-text c2 xl:text-xl lg:text-lg md:text-md sm:text-lg  font-medium cursor-pointer">
          Advaita Innovation Labs is India's leading brand storytelling and
          AI-powered content studio, built for a world where stories must be
          created and distributed with intelligence, speed, and scale.
        </p>

        <p  className="hover-text c3 xl:text-xl lg:text-lg md:text-md sm:text-lg font-medium cursor-pointer">
          While most agencies only create content, we help brands create,
          distribute, and amplify stories on India's top OTT platforms, TV
          networks, and premium digital ecosystems.
        </p>
      </div>
    </div>
  );
}
