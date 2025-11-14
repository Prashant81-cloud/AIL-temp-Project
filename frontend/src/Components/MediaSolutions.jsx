import React, { useState } from 'react';

// --- SVG Icons ---
// Using inline SVGs for icons as requested
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

/**
 * AccordionItem Component
 * Renders a single item in the accordion.
 * @param {string} title - The title of the accordion item.
 * @param {React.ReactNode} children - The content to display when open.
 * @param {boolean} isOpen - Whether the item is currently open.
 * @param {function} onToggle - Function to call when the item is clicked.
 */
const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {/* Header for the accordion item */}
      <button
        className="flex justify-between items-center w-full py-5 px-1 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      
      {/* Content of the accordion item */}
      {isOpen && (
        <div className="pb-5 px-1 text-gray-600 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

/**
 * Accordion Component
 * Manages the state for a group of AccordionItems.
 * @param {Array} items - Array of objects with {title, content}.
 */
const Accordion = ({ items }) => {
  // State to track the currently open accordion item
  // Defaulting to 0 (first item) as per the image
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
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

/**
 * LeftColumn Component
 * Renders the main content on the left side.
 */
const LeftColumn = () => {
  // Partner logo data - using placeholders
  const partners = [
    { name: "Shopify Partner", url: "https://placehold.co/150x80/f0f0f0/aaaaaa?text=Shopify" },
    { name: "Google Partner", url: "https://placehold.co/150x80/f0f0f0/aaaaaa?text=Google+Partner" },
    { name: "HubSpot", url: "https://placehold.co/150x80/f0f0f0/aaaaaa?text=HubSpot" },
    { name: "Adobe Solution Partner", url: "https://placehold.co/150x80/f0f0f0/aaaaaa?text=Adobe" },
    { name: "Partner 5", url: "https://placehold.co/150x80/f0f0f0/aaaaaa?text=Partner" },
    { name: "ONDC", url: "https://placehold.co/150x80/f0f0f0/aaaaaa?text=ONDC" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold text-gray-900">
        Media Solutions
      </h1>
      
      <p className="text-xl text-gray-900 leading-relaxed">
Most agencies stop at creation. We go further. At Advaita Innovation Labs, we bridge creativity with distribution — giving your brand access to India's leading OTT and TV networks.
      </p>
      
      <p className="text-xl text-gray-900 leading-relaxed">
Through our flagship IPs — Brands of Tomorrow, Rising Bharat, and Super Founders — we’ve built storytelling ecosystems where brands are integrated organically into meaningful narratives.
      </p>
      <p className="text-xl text-gray-900 leading-relaxed">
We also help brands create their own shows and web series — turning campaigns into full-fledged entertainment that informs, inspires, and influences.
      </p>
      <hr className="border-t-2 border-gray-900 w-30 my-8" />
      
      <h3 className="text-[23px] font-bold text-gray-800 italic">
From Script to Stream — Bringing Brands to Life on India’s Biggest Screens
      </h3>
      
      {/* Partner logos grid */}

    </div>
  );
};

/**
 * RightColumn Component
 * Renders the accordion on the right side.
 */
const RightColumn = () => {
  // Content for the accordion items
  const accordionItems = [
    {
      title: "Branded IP Collaborations",
      content: (
        <>
          <p>
Feature in top-tier series like Brands of Tomorrow or Rising Bharat.
          </p>
        </>
      )
    },
    {
      title: "Custom OTT & TV Series Creation",
      content: (
        <>
          <p>
Partner with us to conceptualize, produce, and stream your original brand-led show.
          </p>
        </>
      )
    },
    {
      title: "Organic Brand Integration",
      content: (
        <p>
 Seamlessly embed your story into original content — not forced, but felt.
        </p>
      )
    },
        {
      title: "Strategic Media Distribution",
      content: (
        <p>
Deliver your story to millions via OTT, TV, YouTube, and digital publishers.
        </p>
      )
    },
                {
      title: "Partnerships with India’s Largest Networks",
      content: (
        <p>
Collaborate with top streaming and broadcast platforms for maximum visibility.
        </p>
      )
    },
        {
      title: "AI-Backed Media Planning",
      content: (
        <p>
Optimize where and how your story performs best
        </p>
      )
    },
  ];

  return (
    <div>
        <img className='h-60 w-300 object-fill' src="https://media.gettyimages.com/id/1770279962/photo/smiling-man-levitating-in-mid-air.jpg?s=612x612&w=gi&k=20&c=JCGG07ipNnVF9FIRPYF6E50ttPLEH31KWkS1U7wT2gg=" alt="" />
      <Accordion items={accordionItems} />
    </div>
  );
};

/**
 * Main App Component
 * Renders the entire page layout.
 */
export default function MediaSolutions() {
  return (
    <div className="font-sans text-gray-900 mt-5 ">
      <div className="container mx-auto max-w-7xl ">
        {/* Main 2-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <LeftColumn />
          
          {/* Right Column */}
          <RightColumn />
          
        </div>
      </div>
    </div>
  );
}