import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function HoverAnimation() {

  const sliderRef = useRef(null);

  useEffect(() => {
    const lines = [
      "Watchworthy Brand Stories",
      "Born for OTT. Built for Audiences",
      "Made for the Big Screen",
      "Scripted for Impact",
      "Crafted Like Cinema",
      "From Script to Stream",
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
    duration: 0.7,
    y: "0%",
    opacity: 1,
  })
  .to(el, {
    duration: 0.8,
    y: "-70%",   // exit to TOP
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
        <div className='flex h-30 mb-10 sm:mt-10 sm:mb-30 md:mb-30  gap-2 '>

<div className="mt-24 flex justify-center">
  <div className="border-black border-t-[0.1rem]   w-[65vw] sm:w-[75vw] md:w-[80vw] lg:w-[80vw] xl:w-[80vw]"></div>
</div>

          {/* ⭐ Text wrapper → allows wrapping into 2+ lines 200px 400px  ml-25 mr-20*/}
          <div className="w-25  mt-22 sm:mt-21 md:mt-20 leading-tight">
            <p 
              ref={sliderRef}
              className="text-[0.9rem]  slider sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]"
            ></p>
          </div>

        </div>
    </div>
  )
}

export default HoverAnimation