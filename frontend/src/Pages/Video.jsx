import React, { useRef, useState, useLayoutEffect } from "react";
import websiteMov from "../assets/website1.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Video() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hover, setHover] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return; // Safety check

      gsap.to(videoRef.current, {
        width:'100vw',
        height:'100vh',
        scrollTrigger: {
          trigger: containerRef.current, // ✅ must exist
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.2,
      });
    }, containerRef);

    return () => ctx.revert(); // ✅ cleanup on unmount
  }, []);

  return (
<div 
  ref={containerRef}
  className="w-full h-[110vh] flex justify-center items-center overflow-hidden bg-[#FAF4EC]"
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
    className="w-[80%] h-[80%] max-h-full object-cover cursor-pointer mt-20"
    style={{ outline: "none" }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  />
</div>

  );
}

export default Video;