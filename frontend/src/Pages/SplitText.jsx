import React, { useRef, useEffect } from "react";
import rmbgOrig from "../assets/removebg orig.png";
import gsap from "gsap";
import rmbgOrig1 from '../assets/Screenshot_2025-11-19_at_11.13.08_AM-removebg-preview.png'
import HoverAnimation from "./HoverAnimation";


function SplitText() {
  const txt1Ref = useRef(null);
  const txt2Ref = useRef(null);
  const txt3Ref = useRef(null);
  const imgRef = useRef(null);

  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ delay: 0.5 });

    // Step 1
    tl.current.fromTo(
      txt1Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Step 2
    tl.current.fromTo(
      txt2Ref.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );
    // Step 3 — reveal txt3 safely
    tl.current.add(() => {
      if (txt3Ref.current) {
        txt3Ref.current.classList.remove("hidden");
      }
    });

    tl.current
      .fromTo(
        txt2Ref.current,
        { y: 0 },
        { y: 70, duration: 1 },
        "+=0.4"
      )
      .fromTo(
        txt3Ref.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1.2, duration: 1, ease: "power1.inOut" },
        "<"
      );

    // image animation
    gsap.to(imgRef.current, {
      rotate: 140,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // 🛑 FIX: Cleanup on unmount
    return () => {
      tl.current?.kill();
      gsap.killTweensOf(txt1Ref.current);
      gsap.killTweensOf(txt2Ref.current);
      gsap.killTweensOf(txt3Ref.current);
      gsap.killTweensOf(imgRef.current);
    };
  }, []);

  return (
    <div className="xl:mt-22 sm:mt-0 xl:px-[3rem] sm:px-6 px-6  z-1000 bg-[#FAF4EC] ">

      {/* 1️⃣ First line */}
      <div ref={txt1Ref} className="font-normal leading-none flex items-center txt1 sm:text-[4rem] gap-1 md:gap-4 md:text-[clamp(3rem,8.8vw,103px)] [@media(max-width:639px)]:text-[clamp(2.1rem,8.8vw,103px)] text-[4rem]">
        <img ref={imgRef} className="xl:h-[75px] lg:h-[65px] md:h-[clamp(50px,5.8vw,65px)] sm:h-[clamp(20px,5.8vw,103px)] h-[clamp(20px,5.8vw,103px)] sm:mb-[10px]   md:mb-[17px]  mb-[10px]" src={rmbgOrig1} alt="logo" />
        <p className="font-medium   league-spartan ">  Humanizing Brands </p>
      </div>

      {/* 2️⃣ Third text */}
      <div
        ref={txt3Ref}
        className="hidden lg:w-90 w-35 lg:ml-[19.9rem] font-normal lg:text-[20px] [@media(max-width:639px)]:ml-[6.5rem] [@media(max-width:639px)]:text-[10px] md:text-[16px] md:w-70 md:ml-[16rem] sm:text-[15px] sm:w-68 sm:ml-[9rem] absolute mt-3 league-spartan"
      >
        A Full-Stack Storytelling Studio Transforming How Brands Speak to the World
      </div>

      {/* 3️⃣ Second line */}
      <div ref={txt2Ref} className="txt2 xl:ml-[105px] lg:ml-[105px] md:ml-[80px] sm:mt-6 md:mt-5 sm:ml-[45px] [@media(max-width:639px)]:text-[clamp(2.1rem,8.8vw,103px)] ml-[clamp(30px,7vw,45px)]">
        <div className=" sm:text-[4rem] md:text-[clamp(3rem,8.8vw,103px)] leading-none font-medium league-spartan">
          Through Belivebale Stories
        </div>
      </div>
      {/* 4️⃣ First line */}
      <div>
<HoverAnimation/>
        {/* <p className="border-black border-b-1 w-fit mt-32 sm:mt-45  lg:ml-[11.9rem] md:ml-[9rem] sm:ml-[6rem] ml-[2rem] sm:text-2xl  md:text-3xl lg:text-4xl mb-5">Here's how we can help</p> */}
      </div>
    </div>
  );
}

export default SplitText;