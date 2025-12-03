import React, { useState } from "react";

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
        Content Solutions
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        Your story deserves to be told — and seen. At Advaita Innovation Labs,
        our Content Solutions go beyond content creation to include powerful
        distribution and brand amplification.
      </p>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        We craft stories for every stage of your brand journey — from LinkedIn
        leadership storytelling to PR narratives and always-on branded content.
      </p>

      <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
        Then we ensure they reach the right eyes — through OTT partnerships,
        social amplification, and influencer ecosystems.
      </p>

      <hr className="border-t-2 border-gray-900 w-16 sm:w-24 my-6 sm:my-8" />

      <h3 className="text-lg sm:text-xl lg:text-[23px] font-bold text-gray-800 italic">
        From Daily Conversations to Digital Impact
      </h3>
    </div>
  );
};

const RightColumn = () => {
  const accordionItems = [
    {
      title: "LinkedIn Storytelling & Leadership Branding",
      content: <p>Position founders and executives as authentic industry voices.</p>,
    },
    {
      title: "PR & Earned Media",
      content: (
        <p>Shape brand perception through curated stories in top media outlets.</p>
      ),
    },
    {
      title: "Branded Social Campaigns",
      content: (
        <p>
          Tell consistent stories across platforms — from Instagram to OTT
          features.
        </p>
      ),
    },
    {
      title: "AI-Optimized Content Strategy",
      content: (
        <p>Use intelligent insights to maximize engagement and discoverability.</p>
      ),
    },
    {
      title: "Distribution Partnerships",
      content: (
        <p>
          Extend your content&apos;s reach through our OTT, influencer, and
          digital media network.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <img
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl shadow-sm"
        src="https://media.gettyimages.com/id/1770279962/photo/smiling-man-levitating-in-mid-air.jpg?s=612x612&w=gi&k=20&c=JCGG07ipNnVF9FIRPYF6E50ttPLEH31KWkS1U7wT2gg="
        alt="Content storytelling visual"
      />
      <Accordion items={accordionItems} />
    </div>
  );
};

// --- Main App Component ---
export default function MediaSolutions() {
  return (
    <div className="font-sans text-gray-900 mt-4 sm:mt-6 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-start">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
