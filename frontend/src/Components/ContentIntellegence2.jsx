import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
        { x: "-120%", opacity: 0 },   // enter from LEFT
        { 
          duration: 0.8,
          x: "0%",
          opacity: 1,
          onStart: () => { el.textContent = text; }, 
          ease: "power3.out"
        }
      )
      .to(el, {
        duration: 2,     // hold while fully visible
        x: "0%",
        opacity: 1
      })
      .to(el, {
        duration: 0.8,
        x: "120%",        // exit to RIGHT
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
    <div className='flex h-screen px-15 py-12'>
      <div>
        <h1 className='text-[#aa0867] text-8xl archivo-black'>Why GenAI Matters</h1> 
        <h1 className='archivo-black text-8xl'> for Modern Storytelling</h1> 

        <div className='flex h-80 ml-5 gap-5'>
          <div className='border-black border-t-2 w-80 mt-44'></div>

          {/* ⭐ Text wrapper → allows wrapping into 2+ lines */}
          <div className="w-80 mt-40 overflow-hidden leading-tight">
            <p 
              ref={sliderRef}
              className="text-3xl italic slider"
            ></p>
          </div>
        </div>
      </div>

      <div>
        <img 
          className='h-80 w-150 object-cover rounded-md' 
          src="https://i.pinimg.com/736x/b6/8c/eb/b68ceb7fad6b27572db82fdfcb107e5e.jpg" 
          alt=""
        />

        <h2 className='nunito-sans p-1 text-5xl font-extrabold mt-34 w-140'>
          <span className='text-[#aa0867]'>At AIL,</span> we harness all of this —
          without losing the human heart of storytelling.
        </h2>
      </div>
    </div>
  );
}

export default ContentIntellegence2;
