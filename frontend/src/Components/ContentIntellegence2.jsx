import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CI2 from '../assets/ContentIntellegence/website gen AI page.jpg'

function ContentIntellegence2() {

  const sliderRef = useRef(null);

  useEffect(() => {
    const lines = [
      "Understand audiences more deeply",
      "Create content faster and smarter",
      "Build personalized storytelling at scale",
      "Produce high-quality scripts, visuals, edits, and language variations",
      "Predict what content will perform best",
      "Improve ROI and reduce production time"
    ];

    const el = sliderRef.current;

    const tl = gsap.timeline({ repeat: -1, paused: false });

    lines.forEach((text) => {
      tl.fromTo(
        el,
        { x: "-120%", opacity: 0 },
        { 
          duration: 0.8,
          x: "0%",
          opacity: 1,
          onStart: () => { el.textContent = text; }, 
          ease: "power3.out"
        }
      )
      .to(el, {
        duration: 2,
        x: "0%",
        opacity: 1
      })
      .to(el, {
        duration: 0.8,
        x: "120%",
        opacity: 0,
        ease: "power3.in"
      });
    });

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
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen px-6 md:px-12 py-10 gap-12 lg:gap-0">

      {/* LEFT SECTION */}
      <div className="flex-1">
        <h1 className="text-[#aa0867] text-4xl md:text-6xl lg:text-8xl archivo-black leading-tight">
          Why GenAI Matters
        </h1>

        <h1 className="archivo-black text-4xl md:text-6xl lg:text-8xl leading-tight">
          for Modern Storytelling
        </h1>

        <div className="flex mt-10 md:mt-0 gap-5">
          <div className="border-black border-t-2 w-20 md:w-52 lg:w-80 mt-6 md:mt-20"></div>

          <div className="w-60 md:w-72 lg:w-80 mt-4 md:mt-16 overflow-hidden leading-tight">
            <p 
              ref={sliderRef}
              className="text-xl md:text-2xl lg:text-3xl italic"
            ></p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex flex-col items-start">
        <img 
          className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-md"
          src={CI2}
          alt=""
        />

        <h2 className="nunito-sans text-2xl md:text-4xl lg:text-5xl font-extrabold mt-6 md:mt-10 leading-snug">
          <span className="text-[#aa0867]">At AIL,</span> we harness all of this —
          without losing the human heart of storytelling.
        </h2>
      </div>

    </div>
  );
}

export default ContentIntellegence2;
