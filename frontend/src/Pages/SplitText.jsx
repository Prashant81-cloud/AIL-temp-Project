import React, { useRef, useEffect } from "react";
import rmbgOrig from "../assets/removebg orig.png";
import gsap from "gsap";

function SplitText() {
  const txt1Ref = useRef(null);
  const txt2Ref = useRef(null);
  const txt3Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 }); // timeline with initial delay

    // Step 1: Animate first heading (txt1)
    tl.fromTo(
      txt1Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Step 2: Animate second heading (txt2)
    tl.fromTo(
      txt2Ref.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.8" // small gap after first animation
    );

    // Step 3: Reveal paragraph (txt3) — the hidden one
    tl.add(() => {
      txt3Ref.current.classList.remove("hidden");
    });

    tl.fromTo(
        txt2Ref.current,
        {y:0},
        {y:70, duration:1,},
        "+=0.4"
    ).fromTo(
      txt3Ref.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1.2, duration: 1, ease: "power1.inOut" },
      "<" // wait a bit before showing txt3
    )

gsap.to(imgRef.current, {
  rotate:140,
  duration: 1.5,
  ease: "power1.inOut",
  // repeat: -1, // infinite rotation
});


  }, []);

  return (
    <div  className="xl:mt-22 sm:mt-0 xl:ml-[3rem] sm:ml-6 ml-6 relative z-1000">
      {/* 1️⃣ First line */}
      <div ref={txt1Ref} className="font-normal   leading-none flex items-center txt1  sm:text-[2.7rem] md:text-[clamp(3rem,5.8vw,93px)]  [@media(max-width:639px)]:text-[1.4rem] ">
        <img ref={imgRef} className="xl:h-[100px] lg:h-[90px] md:h-[clamp(0px,70px,90px)] sm:h-[55px] h-[28px]" src={rmbgOrig} alt="logo" />
        <p className="font-semibold"> HUMANIZING BRANDS, </p>
      </div>

      {/* 2️⃣ Third text (hidden initially) */}
      <div
        ref={txt3Ref}
        className="lg:w-90  w-40 ml-[7.9rem] font-normal lg:text-[17px] [@media(max-width:639px)]:ml-[6rem] [@media(max-width:639px)]:text-[10px] md:text-[16px] md:w-90 sm:text-[15px] sm:w-80  txt3 sm:ml-[10.5rem] md:ml-[14rem] lg:ml-[16.5rem] xl:ml-[19.5rem]  absolute mt-3"
      >
A Full-Stack Storytelling Studio Transforming How Brands Speak
to the World
      </div>


      {/* 3️⃣ Second line */}
      <div ref={txt2Ref}  className="txt2 xl:ml-[105px] lg:ml-[105px] md:ml-[80px] md:mt-5 sm:ml-[60px] [@media(max-width:639px)]:text-[1.4rem] ml-[30px] ">
        <div className="font-normal  sm:text-[2.7rem] md:text-[clamp(3rem,5.7vw,93px)] leading-none font-semibold">
 THROUGH BELIEVABLE STORIES
        </div>
      </div>
    </div>

  );
}

export default SplitText;