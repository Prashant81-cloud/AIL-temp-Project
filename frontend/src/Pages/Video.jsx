// ✅ FINAL — Video.jsx (100% Fixed & Production Safe)

import React, { useRef, useState, useLayoutEffect } from "react";
// import websiteMov from "../assets/website1.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Video() {



  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  useLayoutEffect(() => {
    // 🔥 Wrap GSAP inside context so cleanup is 100% safe
    const ctx = gsap.context(() => {
      const vid = videoRef.current;
      const box = containerRef.current;
      if (!vid || !box) return;

      gsap.to(vid, {
        width: "100%",
        scale: 1.05,
        scrollTrigger: {
          trigger: box,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => {
      ctx.revert(); // 🔥 Cleans up ST + animations perfectly
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col justify-start   items-center  overflow-hidden "
      id="page2"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onClick={handleVideoClick}
        className="sm:w-[88%] w-[80%] xl:h-[100vh] object-top   cursor-pointer"
        style={{ outline: "none" }}
        preload="metadata"
      >
  <source src="https://ail-media.b-cdn.net/web_main.webm" type="video/webm" />
  <source src="https://ail-media.b-cdn.net/web_main.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;