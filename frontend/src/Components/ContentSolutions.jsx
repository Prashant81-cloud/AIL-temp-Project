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
Content Solutions
      </h1>
      
      <p className="text-xl text-gray-900 leading-relaxed">
Your story deserves to be told — and seen. At Advaita Innovation Labs, our Content Solutions go beyond content creation to include powerful distribution and brand amplification
      </p>
      
      <p className="text-xl text-gray-900 leading-relaxed">
We craft stories for every stage of your brand journey — from LinkedIn leadership storytelling to PR narratives and always-on branded content.
      </p>
      <p className="text-xl text-gray-900 leading-relaxed">
 Then we ensure they reach the right eyes — through OTT partnerships, social amplification, and influencer ecosystems.
      </p>
      <hr className="border-t-2 border-gray-900 w-30 my-8" />
      
      <h3 className="text-[23px] font-bold text-gray-800 italic">
From Daily Conversations to Digital Impact
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
      title: "LinkedIn Storytelling & Leadership Branding",
      content: (
        <>
          <p>
Position founders and executives as authentic industry voices.
          </p>
        </>
      )
    },
    {
      title: "PR & Earned Media",
      content: (
        <>
          <p>
Shape brand perception through curated stories in top media outlets.
          </p>
        </>
      )
    },
    {
      title: "Branded Social Campaigns",
      content: (
        <p>
Tell consistent stories across platforms — from Instagram to OTT features.
        </p>
      )
    },
    {
      title: "AI-Optimized Content Strategy",
      content: (
        <p>
Use intelligent insights to maximize engagement and discoverability.
        </p>
      )
    },
        {
      title: "Distribution Partnerships",
      content: (
        <p>
Extend your content’s reach through our OTT, influencer, and digital media network.
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