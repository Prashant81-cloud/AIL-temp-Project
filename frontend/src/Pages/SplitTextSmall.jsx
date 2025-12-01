
import React, { useRef, useEffect } from "react";
import rmbgOrig1 from "../assets/Screenshot_2025-11-19_at_11.13.08_AM-removebg-preview.png";
import HoverAnimation from "./HoverAnimation";

function SplitTextSmall() {
  const txt1Ref = useRef(null);
  const txt2Ref = useRef(null);
  const txt3Ref = useRef(null);
  const imgRef = useRef(null);



  return (
    <div className="xl:mt-22 sm:mt-0 xl:px-[3rem] sm:px-6 px-6 z-1000 bg-[#FAF4EC]">

      {/* 1️⃣ First line */}
      <div 
        ref={txt1Ref} 
        className="
          font-normal leading-none flex items-center 
          sm:text-[4rem] gap-1 md:gap-4 
          md:text-[clamp(3rem,8.8vw,103px)] 
          [@media(max-width:639px)]:text-[clamp(2.1rem,8.8vw,103px)] 
          text-[4rem]
        "
      >
        <img
          ref={imgRef}
          className="
            xl:h-[75px] lg:h-[65px] 
            md:h-[clamp(50px,5.8vw,65px)] 
            sm:h-[clamp(20px,5.8vw,103px)] 
            h-[clamp(20px,5.8vw,103px)]
            sm:mb-[10px] md:mb-[17px] mb-[10px]
          "
          src={rmbgOrig1}
          alt="logo"
        />
        <p className="font-medium league-spartan">Humanizing Brands</p>
      </div>

      {/* 3️⃣ Second line */}
      <div
        ref={txt2Ref}
        className="
          xl:ml-[105px] lg:ml-[105px] md:ml-[80px]
          sm:mt-6 md:mt-5 sm:ml-[45px]
          [@media(max-width:639px)]:text-[clamp(2.1rem,8.8vw,103px)]
          ml-[clamp(22px,7vw,45px)]
        "
      >
        <div className="sm:text-[4rem] md:text-[clamp(3rem,8.8vw,103px)] leading-none font-medium league-spartan">
          Through Believable Stories
        </div>
      </div>

      {/* 2️⃣ Third text — Now placed BELOW txt2 */}
      <div
        ref={txt3Ref}
        className="
          font-normal
          lg:text-[20px] md:text-[16px] sm:text-[15px] text-[17px]
          league-spartan
          mt-3
          lg:w-[70%] md:w-[75%] sm:w-[80%] w-[80%]
          ml-[clamp(22px,7vw,45px)]
        "
      >
        A Full-Stack Storytelling Studio Transforming How Brands Speak to the World
      </div>

      {/* 4️⃣ CTA / Hover Animation */}
      <div className="-mt-15">
        <HoverAnimation />
      </div>
    </div>
  );
}

export default SplitTextSmall;
