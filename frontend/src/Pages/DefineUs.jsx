import React, { useEffect, useRef, useState } from 'react';
import '../DefineUs.css';
import ButtonHover from '../Components/ButtonHover';
import AILlogo from '../assets/AIL BRONZE.png';
import Logo2 from '../assets/AIL_BRONZE__1_-removebg-preview.png'; // This is the one-time swap


const DefineUs = () => {
  const arrowRef = useRef(null);

  // 🔥 initially show first image
  const [currentImg, setCurrentImg] = useState(AILlogo);

  let totalRotation = 0;  // track how much rotation has happened
  let swapped = false;    // ensure swap happens only once

  useEffect(() => {
    let currentAngle = 0;

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const handleMouseMove = (e) => {
      if (!arrowRef.current) return;

      const rect = arrowRef.current.getBoundingClientRect();
      const arrowX = rect.left + rect.width / 2;
      const arrowY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angleRad = Math.atan2(mouseY - arrowY, mouseX - arrowX);
      let targetAngle = angleRad * (180 / Math.PI) + 90;

      const newAngle = lerp(currentAngle, targetAngle, 0.15);

      // Add how much rotation happens
      const diff = Math.abs(newAngle - currentAngle);
      totalRotation += diff; // accumulate angle change

      currentAngle = newAngle;

      // 🟢 Apply rotation
      arrowRef.current.style.transform = `rotate(${currentAngle}deg)`;

      // 🟠 Check if total rotation exceeded 720° (2 spins)
      if (!swapped && totalRotation > 720) {
        swapped = true; // prevent future swaps
        setCurrentImg(Logo2); // 🔥 change to second image ONCE
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="about-us-container">
      <div className="left-content">
        <h2 className="title">The Advaita Way</h2>

        {/* Rotating + one-time swap image */}
        <div
          ref={arrowRef}
          style={{ transformOrigin: "center center" }}
          className="text-[300px] ease-linear"
        >
          <img className='h-50' src={currentImg} alt="dynamic-logo" />
        </div>
      </div>

      <div className="right-content">
        <p className="headline">
          We’re storytellers at heart, innovators by craft, and technologists by instinct.
        </p>

        <p className="description">
          Our mission is simple yet bold: to take Indian storytelling to the world.
        </p>

        <div><ButtonHover /></div>
      </div>
    </div>
  );
};

export default DefineUs;
