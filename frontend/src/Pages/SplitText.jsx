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
        {y:90, duration:1,},
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
    <div className="mt-12">
      {/* 1️⃣ First line */}
      <div ref={txt1Ref} className="font-normal text-[110px] flex items-center txt1">
        <img ref={imgRef} className="h-28 w-28" src={rmbgOrig} alt="logo" />
        <p>In the age of AI,</p>
      </div>

      {/* 2️⃣ Third text (hidden initially) */}
      <div
        ref={txt3Ref}
        className="w-100 font-normal text-xl txt3 ml-43 hidden absolute"
      >
        Discover an impactful and immersive storytelling for your brand and
        reach your audience wherever they are
      </div>

      {/* 3️⃣ Second line */}
      <div ref={txt2Ref} className="txt2 ">
        <div className="ml-60 font-normal text-[110px] leading-none">
          let humans tell
        </div>
        <div className="ml-95 font-normal text-[110px] leading-none ">
          your brand story
        </div>
      </div>
    </div>
  );
}

export default SplitText;
