import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// ⛔ EXACT script recreated in React
export default function AboutUs1() {
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  // Add refs dynamically
  const addTextRef = (el) => {
    if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
  };

  const addImageRef = (el) => {
    if (el && !imageRefs.current.includes(el)) imageRefs.current.push(el);
  };

useEffect(() => {
  console.log("Hover Reveal Hybrid v2.0 activated");

  // INITIAL IMAGE SETUP
  gsap.set(imageRefs.current, {
    transformOrigin: "center center",
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
    scale: 0.85,
    rotate: 0
  });

  textRefs.current.forEach((el, index) => {
    const img = imageRefs.current[index];

    // SOFT FOLLOW MOTION
    const smoothX = gsap.quickTo(img, "x", { duration: 0.25, ease: "power3.out" });
    const smoothY = gsap.quickTo(img, "y", { duration: 0.25, ease: "power3.out" });

    const follow = (e) => {
      smoothX(e.clientX);
      smoothY(e.clientY);

      // PARALLAX ROTATION
      gsap.to(img, {
        rotate: gsap.utils.mapRange(0, window.innerWidth, -12, 12, e.clientX),
        duration: 0.3,
        ease: "power3.out"
      });
    };

    // IMAGE REVEAL
    const reveal = gsap.to(img, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
      paused: true
    });

    // IMAGE EXIT ANIMATION
    const hide = gsap.to(img, {
      autoAlpha: 0,
      y: "+=60",
      scale: 0.85,
      duration: 0.4,
      ease: "power3.inOut",
      paused: true,
      onComplete: () => {
        gsap.set(img, { y: 0 });
        document.removeEventListener("mousemove", follow);
      }
    });

    // ON ENTER
// ON ENTER
el.addEventListener("mouseenter", (e) => {
  hide.pause(0);          // ⛔ stop hide animation completely
  reveal.pause(0).play(); // ⛔ reset + play reveal every time

  document.addEventListener("mousemove", follow);
  follow(e);

  // Fade others
  textRefs.current.forEach((other) => {
    if (other !== el) {
      gsap.to(other, { opacity: 0.25, duration: 0.2 });
    }
  });

  gsap.to(el, { opacity: 1, duration: 0.2 });
});

// ON LEAVE
el.addEventListener("mouseleave", () => {
  reveal.pause(0);   // ⛔ reset reveal so no weird state
  hide.restart();    // ⛔ animate hide cleanly

  textRefs.current.forEach((other) => {
    gsap.to(other, { opacity: 1, duration: 0.2 });
  });
});

  });
}, []);


  return (
    <div className="sm:flex sm:flex-col flex flex-col sm:gap-15 gap-12 md:flex sm:px-15 px-7 w-[100vw] lg:gap-44 md:gap-15   relative intro-text">

      {/* Hidden floating images */}
      <img
        ref={addImageRef}
        className="hover-image fixed pointer-events-none w-[300px] rounded-xl"
        src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
      />
      <img
        ref={addImageRef}
        className="hover-image fixed pointer-events-none w-[300px] rounded-xl"
        src="https://particle.scitech.org.au/wp-content/uploads/2022/12/GettyImages-1203853320-scaled.jpg"
      />
      <img
        ref={addImageRef}
        className="hover-image fixed pointer-events-none w-[300px] rounded-xl"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknsTpg7sEd3n1hpp69H9gSO8V_6af9bWvnA&s"
      />

      {/* LEFT COLUMN */}
      <div className="flex flex-col md:gap-34 sm:gap-4 gap-5 md:h-150 ">
        <h1 className="archivo-black xl:text-7xl lg:text-6xl md:text-[2.7rem] sm:text-[4rem] text-[2.2rem] font-semibold tracking-[-0.1rem]">
          ABOUT US
        </h1>

        <p
          ref={addTextRef}
          className="hover-text c1 xl:w-130 lg:w-90 md:w-90 sm:w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg  opacity-50 text-gray-900 cursor-pointer"
        >
          We are a new-age media company where creators, filmmakers,
          strategists, data analysts, and Gen AI specialists come together to
          craft stories that are deeply human — and technologically intelligent.
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col xl:gap-34 lg:gap-24 md:gap-20 sm:gap-10 gap-8 md:w-350 ">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold sm:w-100 md:w-full">
          India's New-Age Media & AI Storytelling Company
        </h1>

        <p ref={addTextRef} className="hover-text c2 xl:text-xl lg:text-lg md:text-md sm:text-lg  font-medium cursor-pointer">
          Advaita Innovation Labs is India's leading brand storytelling and
          AI-powered content studio, built for a world where stories must be
          created and distributed with intelligence, speed, and scale.
        </p>

        <p ref={addTextRef} className="hover-text c3 xl:text-xl lg:text-lg md:text-md sm:text-lg font-medium cursor-pointer">
          While most agencies only create content, we help brands create,
          distribute, and amplify stories on India's top OTT platforms, TV
          networks, and premium digital ecosystems.
        </p>
      </div>
    </div>
  );
}
