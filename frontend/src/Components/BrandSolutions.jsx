import React, { useState } from "react";
import BrandImage from '@/assets/SolutionsImage/website solutions 3.png'

// --- SVG Icons ---
const ChevronDown = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

// --- Accordion Components ---

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {/* Header */}
      <button
        className="flex justify-between items-center w-full py-4 sm:py-5 px-1 sm:px-2 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-base sm:text-lg text-gray-800">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
        )}
      </button>

      {/* Content */}
      {isOpen && (
        <div className="pb-4 sm:pb-5 px-1 sm:px-2 text-sm sm:text-base text-gray-600 space-y-3 sm:space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl lg:max-w-2xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

// --- Left Column ---

const LeftColumn = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Brand Solutions
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        While many agencies create content, Advaita Innovation Labs builds
        stories that travel. We don't just help brands communicate — we help
        them connect, using the power of storytelling and the reach of India's
        largest OTT and TV networks.
      </p>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        Our Brand Solutions team blends insight, creativity, and technology to
        craft narratives that audiences believe in — stories that are
        strategically built, beautifully designed, and powerfully distributed.
      </p>

      <hr className="border-t-2 border-gray-900 w-16 sm:w-24 my-6 sm:my-8" />

      <h3 className="text-lg sm:text-xl lg:text-[23px] font-bold text-gray-800 italic">
        Where Brands Find Their Voice — and Their Audience.
      </h3>
    </div>
  );
};

// --- Right Column ---

const RightColumn = () => {
  const accordionItems = [
    {
      title: "Brand Storytelling Strategy",
      content: (
        <p>
          Define your story&apos;s purpose and design the narrative that makes
          people believe.
        </p>
      ),
    },
    {
      title: "Campaign Creation",
      content: (
        <p>
          End-to-end storytelling across digital, OTT, and on-ground channels.
        </p>
      ),
    },
    {
      title: "Visual & Verbal Identity",
      content: <p>Express your story consistently across every platform.</p>,
    },
    {
      title: "Film & Video Production",
      content: (
        <p>
          Create cinematic brand films and series with emotional depth and
          global quality.
        </p>
      ),
    },
    {
      title: "AI-Driven Insights",
      content: (
        <p>
          Identify what stories work best, when, and where — powered by data and
          creativity.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 ">
      {/* Responsive image */}
      <img
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80  rounded-xl shadow-sm"
        src={BrandImage}
        alt="Brand storytelling visual"
      />

      <Accordion items={accordionItems} />
    </div>
  );
};

// --- Main Page ---

export default function BrandSolutions() {
  return (
    <div className="font-sans text-gray-900 mt-4 sm:mt-6 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        {/* Main 2-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-start">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
