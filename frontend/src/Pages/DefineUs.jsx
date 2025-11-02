import React, { useEffect, useRef } from 'react';
import '../DefineUs.css';
import ButtonHover from '../Components/ButtonHover';
import { VscArrowDown } from "react-icons/vsc";

const DefineUs = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!arrowRef.current) return;

      const rect = arrowRef.current.getBoundingClientRect();
      const arrowX = rect.left + rect.width / 2;

      // Map cursor’s X position on screen → 0° to 90°
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;

      // Normalize between 0 and 1
      let normalized = (mouseX - arrowX + screenWidth / 2) / screenWidth;
      normalized = Math.max(0, Math.min(1, normalized)); // clamp 0–1

      // Convert to degrees between 0–90
      const rotateDeg = normalized * 150;

      // Apply rotation
      arrowRef.current.style.transform = `rotate(${rotateDeg}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="about-us-container">
      <div className="left-content">
        <h2 className="title">The Advaita Way</h2>

        {/* Arrow rotates only 0–90° based on cursor movement */}
        <div
          ref={arrowRef}
          className="text-[300px] transition-transform duration-150 rotate-230 ease-linear"
        >
          <VscArrowDown />
        </div>
      </div>

      <div className="right-content">
        <p className="headline">
          We’re storytellers at heart, innovators by craft, and technologists by instinct.
          At Advaita Innovation Labs, creativity meets consciousness — where ideas aren’t just
          made, they’re felt.
        </p>
        <p className="description">
          Our mission is simple yet bold: to take Indian storytelling to the world.
          We partner with creators, strategists, and platforms to craft believable stories that move
          people, build culture, and create measurable impact for brands that dare to dream bigger.
        </p>

        <div><ButtonHover /></div>
      </div>
    </div>
  );
};

export default DefineUs;
