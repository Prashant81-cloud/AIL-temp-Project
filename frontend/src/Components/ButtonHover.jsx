import React, { useState } from "react";
import { motion } from "framer-motion";
// (You can remove ArrowRight import if you don't need the icon)
// import { ArrowRight } from "lucide-react";

export default function ButtonHover() {
  return (
    <div
      // When mouse enters the button area, disable the custom cursor
      onMouseEnter={() => window.dispatchEvent(new CustomEvent("disableCustomCursor"))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent("enableCustomCursor"))}
    >
      <AnimatedButton />
    </div>
  );
}

const AnimatedButton = () => {
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
      className="relative px-8 py-4 text-lg font-medium bg-black rounded-full cursor-pointer border-1"
      style={{ overflow: "hidden", position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10 flex items-center gap-2 text-white">
        Dive Into Our Culture →
      </span>

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
          duration: 0.4,
          ease: [0, 0, 0.58, 1],
        }}
      >
        Dive Into Our Culture →
      </motion.div>
    </motion.button>
  );
};
