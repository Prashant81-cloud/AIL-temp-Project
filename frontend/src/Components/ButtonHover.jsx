import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ButtonHover({ label = "Click Me" }) {
  return (
    <div
      className="flex justify-center items-center w-full"
      onMouseEnter={() =>
        window.dispatchEvent(new CustomEvent("disableCustomCursor"))
      }
      onMouseLeave={() =>
        window.dispatchEvent(new CustomEvent("enableCustomCursor"))
      }
    >
      <AnimatedButton label={label} />
    </div>
  );
}

const AnimatedButton = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    setMousePosition({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.button
      className="relative overflow-hidden rounded-full bg-black text-white font-medium cursor-pointer border border-[#c99a5b] 
                 px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Front Text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {label}
      </span>

      {/* Hover Background Animation */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center gap-2 bg-[#faf4ec] text-black"
        initial={{
          clipPath: `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        animate={{
          clipPath: isHovered
            ? `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)`
            : `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {label}
      </motion.div>
    </motion.button>
  );
};
