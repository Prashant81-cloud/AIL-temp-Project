// ✅ FINAL — Video.jsx (100% Fixed & Production Safe)

import React, { useRef, useState, useLayoutEffect } from "react";
import websiteMov from "../assets/website1.mp4";
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
        height: "105vh",
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
      className="w-full h-[110vh] flex flex-col justify-start items-center bg-[#FAF4EC] mt-20 overflow-hidden"
      id="page2"
    >
      <video
        ref={videoRef}
        src={websiteMov}
        autoPlay
        loop
        muted
        playsInline
        onClick={handleVideoClick}
        className="w-[88%] h-full object-cover rounded-lg cursor-pointer"
        style={{ outline: "none" }}
      />
    </div>
  );
}

export default Video;
