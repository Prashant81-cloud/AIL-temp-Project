import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function HoverAnimation() {

  const sliderRef = useRef(null);

  useEffect(() => {
    const lines = [
      "Watchworthy Brand Stories",
      "Made for the Big Screen",
      "Scripted for Impact",
      "Crafted Like Cinema",
      "From Script to Stream",
      "Born for OTT. Built for Audiences",
      "Your Brand in Lights"
    ];

    const el = sliderRef.current;

    const tl = gsap.timeline({ repeat: -1, paused: false });

lines.forEach((text) => {
  tl.fromTo(
    el,
    { y: "120%", opacity: 0 },   // enter from BOTTOM
    { 
      duration: 0.8,
      y: "0%",
      opacity: 1,
      onStart: () => { el.textContent = text; },
      ease: "power3.out"
    }
  )
  .to(el, {
    duration: 2,
    y: "0%",
    opacity: 1,
  })
  .to(el, {
    duration: 0.8,
    y: "-120%",   // exit to TOP
    opacity: 0,
    ease: "power3.in"
  });
});


    // Pause & resume on hover
    const pause = () => tl.pause();
    const resume = () => tl.resume();

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };

  }, []);


  return (
    <div>
        <div className='flex h-60  ml-25 mr-20 gap-5 '>


          {/* ⭐ Text wrapper → allows wrapping into 2+ lines */}
          <div className="w-50 mt-31 overflow-hidden leading-tight">
            <p 
              ref={sliderRef}
              className="text-[1.8rem] italic slider"
            ></p>
          </div>
          <div className='border-black border-t-2 w-240 mt-34'></div>
        </div>
    </div>
  )
}

export default HoverAnimation