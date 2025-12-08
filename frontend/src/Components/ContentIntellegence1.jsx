import React from "react";
import CI1 from '../assets/ContentIntellegence/website AI page.webm'
import { useInView } from "react-intersection-observer";

function ContentIntellegence1() {

const { ref: ciRef, inView: ciInView } = useInView({ triggerOnce: true });

  return (
    <div className="font-sans min-h-screen px-4 sm:px-6 lg:px-16  flex flex-col md:flex-row gap-10 md:gap-14 items-start">

      {/* ---------------- MOBILE: TITLE + SUBTITLE ---------------- */}
      <div className="md:hidden flex flex-col gap-4">
        <h1 className="archivo-black text-3xl sm:text-4xl font-bold leading-tight">
          GenAI Capabilities
        </h1>

        <h2 className="text-2xl sm:text-3xl italic font-bold leading-tight">
          Where Human Creativity Meets Generative Intelligence
        </h2>
      </div>

      {/* ---------------- DESKTOP IMAGE (unchanged from improved layout) -------lg:h-150 lg:w-150 md:h-130 md:w-130 object-cover rounded-lg shadow-md---------  w-full max-w-sm aspect-[4/5] object-cover rounded-lg shadow-md */}
      <div className="hidden md:flex w-1/2 justify-start">
        <video
          className="lg:h-150 lg:w-150 md:h-130 md:w-130 object-cover rounded-lg shadow-md"
          src={ciInView ? CI1 : undefined}
          ref={ciRef}
          preload="none"
        autoPlay
        loop
        muted
        playsInline
        />
      </div>

      {/* ---------------- RIGHT SIDE CONTENT ---------------- */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">

        {/* DESKTOP: Title */}
        <h1 className="archivo-black text-4xl lg:text-5xl font-bold hidden md:block leading-tight">
          GenAI Capabilities
        </h1>

        {/* DESKTOP: Subtitle */}
        <h2 className="text-3xl italic font-bold hidden md:block leading-tight">
          Where Human Creativity Meets Generative Intelligence
        </h2>

        {/* ---------------- MOBILE IMAGE (AFTER subtitle) ---------------- */}
        <div className="md:hidden w-full flex justify-center mt-2">
          <video
            className="h-70 w-100 object-cover rounded-lg shadow-md"
          src={CI1}
        autoPlay
        loop
        muted
        playsInline
          />
        </div>

        {/* MAIN CONTENT SECTION (same as improved version) */}
        <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
          At Advaita Innovation Labs, Generative AI isn’t a feature — it’s a core capability.
          We use GenAI to accelerate storytelling, enhance creativity, personalize content,
          and scale distribution across OTT, digital, and social ecosystems.
        </p>

        <p className="text-base sm:text-lg font-medium leading-relaxed">
          While most agencies use AI as an add-on, AIL blends AI + Data + Storytelling +
          Media Distribution into one unified ecosystem — giving brands a competitive,
          intelligent, and future-ready edge.
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            We combine the intuition of humans with the precision of AI to build stories that are:
          </p>

          <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
            <li>Effective</li>
            <li>Insight-driven</li>
            <li>Culturally relevant</li>
            <li>Efficient to produce</li>
            <li>Precisely distributed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentIntellegence1;
