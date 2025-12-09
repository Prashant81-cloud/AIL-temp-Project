import React, { useState } from "react";
// import MediaImage from '../assets/SolutionsImage/website image 2.png'

const MediaImage = 'https://ail-media.b-cdn.net/media-sol.png';

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

// --- Main Page Components ---

const LeftColumn = () => {


  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Media Solutions
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        Most agencies stop at creation. We go further. At Advaita Innovation
        Labs, we bridge creativity with distribution — giving your brand access
        to India&apos;s leading OTT and TV networks.
      </p>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        Through our flagship IPs — Brands of Tomorrow, Rising Bharat, and Super
        Founders — we’ve built storytelling ecosystems where brands are integrated
        organically into meaningful narratives.
      </p>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        We also help brands create their own shows and web series — turning
        campaigns into full-fledged entertainment that informs, inspires, and
        influences.
      </p>

      <hr className="border-t-2 border-gray-900 w-16 sm:w-24 my-6 sm:my-8" />

      <h3 className="text-lg sm:text-xl lg:text-[23px] font-bold text-gray-800 italic">
        From Script to Stream — Bringing Brands to Life on India’s Biggest Screens
      </h3>

      {/* Partner logos grid can be added here later if needed */}
    </div>
  );
};

const RightColumn = () => {
  const accordionItems = [
    {
      title: "Branded IP Collaborations",
      content: (
        <p>Feature in top-tier series like Brands of Tomorrow or Rising Bharat.</p>
      ),
    },
    {
      title: "Custom OTT & TV Series Creation",
      content: (
        <p>
          Partner with us to conceptualize, produce, and stream your original
          brand-led show.
        </p>
      ),
    },
    {
      title: "Organic Brand Integration",
      content: (
        <p>Seamlessly embed your story into original content — not forced, but felt.</p>
      ),
    },
    {
      title: "Strategic Media Distribution",
      content: (
        <p>
          Deliver your story to millions via OTT, TV, YouTube, and digital
          publishers.
        </p>
      ),
    },
    {
      title: "Partnerships with India’s Largest Networks",
      content: (
        <p>
          Collaborate with top streaming and broadcast platforms for maximum
          visibility.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <img
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover  rounded-xl shadow-sm"
        src={MediaImage}
        alt="Media solutions visual"
      />
      <Accordion items={accordionItems} />
    </div>
  );
};

/**
 * Main App Component
 */
export default function MediaSolutions() {
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
