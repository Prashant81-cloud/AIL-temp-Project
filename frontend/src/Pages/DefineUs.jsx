import React, { useEffect, useRef, useState } from 'react';
import '../DefineUs.css';
import ButtonHover from '../Components/ButtonHover';
import AILlogo from '../assets/AIL BRONZE.png';
import Logo2 from '../assets/AIL_BRONZE__4_-removebg-preview (1).png'; // This is the one-time swap


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
    // 🔥 keep your +90 so it matches how your logo is drawn
    let targetAngle = (angleRad * 180) / Math.PI + 90;

    // 🧠 Make sure we always rotate via the shortest path (no 360° random spin)
    let delta = targetAngle - currentAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    const newAngle = currentAngle + delta * 0.15; // same smoothness as before

    // 👇 rotation amount for swap logic (keep your totalRotation behavior)
    const step = Math.abs(newAngle - currentAngle);
    totalRotation += step;

    currentAngle = newAngle;

    // 🟢 Apply rotation
    arrowRef.current.style.transform = `rotate(${currentAngle}deg)`;

    // 🟠 Keep your one-time image change after 720° total rotation
    if (!swapped && totalRotation > 720) {
      swapped = true;
      setCurrentImg(Logo2);
    }
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);



  return (
    <div className="about-us-container w-screen">
      <div className="left-content w-full">
        <h2 className="title  w-full">The Advaita Way</h2>

        {/* Rotating + one-time swap image */}
        <div
          ref={arrowRef}
          style={{ transformOrigin: "center center" }}
          className=" ease-linear"
        >
<img  className="hidden md:block h-70 lg:h-80 object-cover"  src={currentImg}  alt="dynamic-logo"/>

        </div>
      </div>

      <div className="right-content">
        <p className="headline">
At Advaita Innovation Labs, creativity meets consciousness — where ideas aren’t just
made, they’re felt.
        </p>

        <p className="description">
Our mission is simple yet bold: to take Indian storytelling to the world.
We partner with creators, strategists, and platforms to craft believable stories that move
people, build culture, and create measurable impact for brands that dare to dream bigger.
        </p>

        <div><ButtonHover label="Dive Into Our Culture →" /></div>
      </div>
    </div>
  );
};

export default DefineUs;
