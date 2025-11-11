import React from 'react';

/**
 * A React component replicating the 'Data' section card from the image.
 * * Note: This component requires Tailwind CSS to be installed and configured
 * in your project for styling.
 */
const Random = () => {
  
  // Inline SVG component for the arrow icon
  const ArrowIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} // Make the arrow bold
      stroke="currentColor" 
      className="w-4 h-4"
    >
      {/* Path for a simple right-facing arrow (→) */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );

  return (
    // Main wrapper to center the card for viewing (optional)
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-8">

      {/* Main Card Component */}
      <div className="w-full max-w-5xl bg-blue-600 p-10 md:p-12 rounded-3xl relative shadow-2xl overflow-hidden min-h-[500px] md:min-h-[550px]">
        
        {/* Top Right Number: Positioned absolutely */}
        <div className="absolute top-8 right-12 text-8xl md:text-9xl font-extrabold text-blue-500 opacity-80 z-0">
          04
        </div>

        {/* Top Left Content: Relative to stack above the number */}
        <div className="relative z-10">
          <span className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
            Expertise
          </span>
          <h1 className="text-7xl md:text-9xl font-extrabold mt-4 text-black">
            Data
          </h1>
        </div>

        {/* Bottom Left Content: Positioned absolutely */}
        <div className="absolute bottom-10 md:bottom-12 left-10 md:left-12 z-10 w-full md:w-1/2 max-w-md">
          <h2 className="text-2xl font-semibold text-white">
            Inzichten die impact maken.
          </h2>
          <p className="mt-2 text-blue-100 max-w-sm">
            We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.
          </p>
          <button className="bg-white text-black px-5 py-2.5 rounded-full font-semibold mt-6 flex items-center gap-2.5 hover:bg-gray-200 transition-colors shadow-md">
            <span>Meer over data</span>
            <span className="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center">
              <ArrowIcon />
            </span>
          </button>
        </div>

        {/* Bottom Right Image: Positioned absolutely with rotation */}
        <div className="absolute bottom-10 right-10 md:right-16 z-0 w-48 md:w-60 lg:w-72 transform rotate-[3deg]">
          {/* White border/frame */}
          <div className="bg-white p-2 rounded-2xl shadow-lg">
            <img 
              // Using a placeholder image that evokes a similar feel
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800"
              alt="Blurred hand typing on a laptop"
              className="rounded-lg w-full h-full object-cover"
              // Apply a CSS blur to match the original image
              style={{ filter: 'blur(4px)' }} 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Random;